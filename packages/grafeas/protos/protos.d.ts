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
/** Namespace grafeas. */
export namespace grafeas {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of an AttestationNote. */
        interface IAttestationNote {

            /** AttestationNote hint */
            hint?: (grafeas.v1.AttestationNote.IHint|null);
        }

        /** Represents an AttestationNote. */
        class AttestationNote implements IAttestationNote {

            /**
             * Constructs a new AttestationNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IAttestationNote);

            /** AttestationNote hint. */
            public hint?: (grafeas.v1.AttestationNote.IHint|null);

            /**
             * Creates a new AttestationNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AttestationNote instance
             */
            public static create(properties?: grafeas.v1.IAttestationNote): grafeas.v1.AttestationNote;

            /**
             * Encodes the specified AttestationNote message. Does not implicitly {@link grafeas.v1.AttestationNote.verify|verify} messages.
             * @param message AttestationNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IAttestationNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AttestationNote message, length delimited. Does not implicitly {@link grafeas.v1.AttestationNote.verify|verify} messages.
             * @param message AttestationNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IAttestationNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AttestationNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AttestationNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.AttestationNote;

            /**
             * Decodes an AttestationNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AttestationNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.AttestationNote;

            /**
             * Verifies an AttestationNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AttestationNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AttestationNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.AttestationNote;

            /**
             * Creates a plain object from an AttestationNote message. Also converts values to other types if specified.
             * @param message AttestationNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.AttestationNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AttestationNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace AttestationNote {

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
                constructor(properties?: grafeas.v1.AttestationNote.IHint);

                /** Hint humanReadableName. */
                public humanReadableName: string;

                /**
                 * Creates a new Hint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Hint instance
                 */
                public static create(properties?: grafeas.v1.AttestationNote.IHint): grafeas.v1.AttestationNote.Hint;

                /**
                 * Encodes the specified Hint message. Does not implicitly {@link grafeas.v1.AttestationNote.Hint.verify|verify} messages.
                 * @param message Hint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.AttestationNote.IHint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Hint message, length delimited. Does not implicitly {@link grafeas.v1.AttestationNote.Hint.verify|verify} messages.
                 * @param message Hint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.AttestationNote.IHint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Hint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Hint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.AttestationNote.Hint;

                /**
                 * Decodes a Hint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Hint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.AttestationNote.Hint;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1.AttestationNote.Hint;

                /**
                 * Creates a plain object from a Hint message. Also converts values to other types if specified.
                 * @param message Hint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.AttestationNote.Hint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Hint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Jwt. */
        interface IJwt {

            /** Jwt compactJwt */
            compactJwt?: (string|null);
        }

        /** Represents a Jwt. */
        class Jwt implements IJwt {

            /**
             * Constructs a new Jwt.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IJwt);

            /** Jwt compactJwt. */
            public compactJwt: string;

            /**
             * Creates a new Jwt instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Jwt instance
             */
            public static create(properties?: grafeas.v1.IJwt): grafeas.v1.Jwt;

            /**
             * Encodes the specified Jwt message. Does not implicitly {@link grafeas.v1.Jwt.verify|verify} messages.
             * @param message Jwt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IJwt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Jwt message, length delimited. Does not implicitly {@link grafeas.v1.Jwt.verify|verify} messages.
             * @param message Jwt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IJwt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Jwt message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Jwt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Jwt;

            /**
             * Decodes a Jwt message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Jwt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Jwt;

            /**
             * Verifies a Jwt message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Jwt message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Jwt
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Jwt;

            /**
             * Creates a plain object from a Jwt message. Also converts values to other types if specified.
             * @param message Jwt
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Jwt, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Jwt to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AttestationOccurrence. */
        interface IAttestationOccurrence {

            /** AttestationOccurrence serializedPayload */
            serializedPayload?: (Uint8Array|string|null);

            /** AttestationOccurrence signatures */
            signatures?: (grafeas.v1.ISignature[]|null);

            /** AttestationOccurrence jwts */
            jwts?: (grafeas.v1.IJwt[]|null);
        }

        /** Represents an AttestationOccurrence. */
        class AttestationOccurrence implements IAttestationOccurrence {

            /**
             * Constructs a new AttestationOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IAttestationOccurrence);

            /** AttestationOccurrence serializedPayload. */
            public serializedPayload: (Uint8Array|string);

            /** AttestationOccurrence signatures. */
            public signatures: grafeas.v1.ISignature[];

            /** AttestationOccurrence jwts. */
            public jwts: grafeas.v1.IJwt[];

            /**
             * Creates a new AttestationOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AttestationOccurrence instance
             */
            public static create(properties?: grafeas.v1.IAttestationOccurrence): grafeas.v1.AttestationOccurrence;

            /**
             * Encodes the specified AttestationOccurrence message. Does not implicitly {@link grafeas.v1.AttestationOccurrence.verify|verify} messages.
             * @param message AttestationOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IAttestationOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AttestationOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.AttestationOccurrence.verify|verify} messages.
             * @param message AttestationOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IAttestationOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AttestationOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AttestationOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.AttestationOccurrence;

            /**
             * Decodes an AttestationOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AttestationOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.AttestationOccurrence;

            /**
             * Verifies an AttestationOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AttestationOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AttestationOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.AttestationOccurrence;

            /**
             * Creates a plain object from an AttestationOccurrence message. Also converts values to other types if specified.
             * @param message AttestationOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.AttestationOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AttestationOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            ATTESTATION = 7,
            UPGRADE = 8,
            COMPLIANCE = 9,
            DSSE_ATTESTATION = 10
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
            constructor(properties?: grafeas.v1.IRelatedUrl);

            /** RelatedUrl url. */
            public url: string;

            /** RelatedUrl label. */
            public label: string;

            /**
             * Creates a new RelatedUrl instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelatedUrl instance
             */
            public static create(properties?: grafeas.v1.IRelatedUrl): grafeas.v1.RelatedUrl;

            /**
             * Encodes the specified RelatedUrl message. Does not implicitly {@link grafeas.v1.RelatedUrl.verify|verify} messages.
             * @param message RelatedUrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IRelatedUrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelatedUrl message, length delimited. Does not implicitly {@link grafeas.v1.RelatedUrl.verify|verify} messages.
             * @param message RelatedUrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IRelatedUrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelatedUrl message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelatedUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.RelatedUrl;

            /**
             * Decodes a RelatedUrl message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelatedUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.RelatedUrl;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.RelatedUrl;

            /**
             * Creates a plain object from a RelatedUrl message. Also converts values to other types if specified.
             * @param message RelatedUrl
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.RelatedUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelatedUrl to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.ISignature);

            /** Signature signature. */
            public signature: (Uint8Array|string);

            /** Signature publicKeyId. */
            public publicKeyId: string;

            /**
             * Creates a new Signature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signature instance
             */
            public static create(properties?: grafeas.v1.ISignature): grafeas.v1.Signature;

            /**
             * Encodes the specified Signature message. Does not implicitly {@link grafeas.v1.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link grafeas.v1.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Signature;

            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Signature;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Signature;

            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @param message Signature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Signature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Envelope. */
        interface IEnvelope {

            /** Envelope payload */
            payload?: (Uint8Array|string|null);

            /** Envelope payloadType */
            payloadType?: (string|null);

            /** Envelope signatures */
            signatures?: (grafeas.v1.IEnvelopeSignature[]|null);
        }

        /** Represents an Envelope. */
        class Envelope implements IEnvelope {

            /**
             * Constructs a new Envelope.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IEnvelope);

            /** Envelope payload. */
            public payload: (Uint8Array|string);

            /** Envelope payloadType. */
            public payloadType: string;

            /** Envelope signatures. */
            public signatures: grafeas.v1.IEnvelopeSignature[];

            /**
             * Creates a new Envelope instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Envelope instance
             */
            public static create(properties?: grafeas.v1.IEnvelope): grafeas.v1.Envelope;

            /**
             * Encodes the specified Envelope message. Does not implicitly {@link grafeas.v1.Envelope.verify|verify} messages.
             * @param message Envelope message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Envelope message, length delimited. Does not implicitly {@link grafeas.v1.Envelope.verify|verify} messages.
             * @param message Envelope message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Envelope message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Envelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Envelope;

            /**
             * Decodes an Envelope message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Envelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Envelope;

            /**
             * Verifies an Envelope message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Envelope
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Envelope;

            /**
             * Creates a plain object from an Envelope message. Also converts values to other types if specified.
             * @param message Envelope
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Envelope to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnvelopeSignature. */
        interface IEnvelopeSignature {

            /** EnvelopeSignature sig */
            sig?: (Uint8Array|string|null);

            /** EnvelopeSignature keyid */
            keyid?: (string|null);
        }

        /** Represents an EnvelopeSignature. */
        class EnvelopeSignature implements IEnvelopeSignature {

            /**
             * Constructs a new EnvelopeSignature.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IEnvelopeSignature);

            /** EnvelopeSignature sig. */
            public sig: (Uint8Array|string);

            /** EnvelopeSignature keyid. */
            public keyid: string;

            /**
             * Creates a new EnvelopeSignature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnvelopeSignature instance
             */
            public static create(properties?: grafeas.v1.IEnvelopeSignature): grafeas.v1.EnvelopeSignature;

            /**
             * Encodes the specified EnvelopeSignature message. Does not implicitly {@link grafeas.v1.EnvelopeSignature.verify|verify} messages.
             * @param message EnvelopeSignature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IEnvelopeSignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnvelopeSignature message, length delimited. Does not implicitly {@link grafeas.v1.EnvelopeSignature.verify|verify} messages.
             * @param message EnvelopeSignature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IEnvelopeSignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnvelopeSignature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnvelopeSignature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.EnvelopeSignature;

            /**
             * Decodes an EnvelopeSignature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnvelopeSignature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.EnvelopeSignature;

            /**
             * Verifies an EnvelopeSignature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnvelopeSignature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnvelopeSignature
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.EnvelopeSignature;

            /**
             * Creates a plain object from an EnvelopeSignature message. Also converts values to other types if specified.
             * @param message EnvelopeSignature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.EnvelopeSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnvelopeSignature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BuildNote. */
        interface IBuildNote {

            /** BuildNote builderVersion */
            builderVersion?: (string|null);
        }

        /** Represents a BuildNote. */
        class BuildNote implements IBuildNote {

            /**
             * Constructs a new BuildNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBuildNote);

            /** BuildNote builderVersion. */
            public builderVersion: string;

            /**
             * Creates a new BuildNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BuildNote instance
             */
            public static create(properties?: grafeas.v1.IBuildNote): grafeas.v1.BuildNote;

            /**
             * Encodes the specified BuildNote message. Does not implicitly {@link grafeas.v1.BuildNote.verify|verify} messages.
             * @param message BuildNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBuildNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BuildNote message, length delimited. Does not implicitly {@link grafeas.v1.BuildNote.verify|verify} messages.
             * @param message BuildNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBuildNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BuildNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BuildNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BuildNote;

            /**
             * Decodes a BuildNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BuildNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BuildNote;

            /**
             * Verifies a BuildNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BuildNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BuildNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BuildNote;

            /**
             * Creates a plain object from a BuildNote message. Also converts values to other types if specified.
             * @param message BuildNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BuildNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BuildNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BuildOccurrence. */
        interface IBuildOccurrence {

            /** BuildOccurrence provenance */
            provenance?: (grafeas.v1.IBuildProvenance|null);

            /** BuildOccurrence provenanceBytes */
            provenanceBytes?: (string|null);

            /** BuildOccurrence intotoProvenance */
            intotoProvenance?: (grafeas.v1.IInTotoProvenance|null);

            /** BuildOccurrence intotoStatement */
            intotoStatement?: (grafeas.v1.IInTotoStatement|null);
        }

        /** Represents a BuildOccurrence. */
        class BuildOccurrence implements IBuildOccurrence {

            /**
             * Constructs a new BuildOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBuildOccurrence);

            /** BuildOccurrence provenance. */
            public provenance?: (grafeas.v1.IBuildProvenance|null);

            /** BuildOccurrence provenanceBytes. */
            public provenanceBytes: string;

            /** BuildOccurrence intotoProvenance. */
            public intotoProvenance?: (grafeas.v1.IInTotoProvenance|null);

            /** BuildOccurrence intotoStatement. */
            public intotoStatement?: (grafeas.v1.IInTotoStatement|null);

            /**
             * Creates a new BuildOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BuildOccurrence instance
             */
            public static create(properties?: grafeas.v1.IBuildOccurrence): grafeas.v1.BuildOccurrence;

            /**
             * Encodes the specified BuildOccurrence message. Does not implicitly {@link grafeas.v1.BuildOccurrence.verify|verify} messages.
             * @param message BuildOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBuildOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BuildOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.BuildOccurrence.verify|verify} messages.
             * @param message BuildOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBuildOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BuildOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BuildOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BuildOccurrence;

            /**
             * Decodes a BuildOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BuildOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BuildOccurrence;

            /**
             * Verifies a BuildOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BuildOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BuildOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BuildOccurrence;

            /**
             * Creates a plain object from a BuildOccurrence message. Also converts values to other types if specified.
             * @param message BuildOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BuildOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BuildOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Recipe. */
        interface IRecipe {

            /** Recipe type */
            type?: (string|null);

            /** Recipe definedInMaterial */
            definedInMaterial?: (number|Long|string|null);

            /** Recipe entryPoint */
            entryPoint?: (string|null);

            /** Recipe arguments */
            "arguments"?: (google.protobuf.IAny[]|null);

            /** Recipe environment */
            environment?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Recipe. */
        class Recipe implements IRecipe {

            /**
             * Constructs a new Recipe.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IRecipe);

            /** Recipe type. */
            public type: string;

            /** Recipe definedInMaterial. */
            public definedInMaterial: (number|Long|string);

            /** Recipe entryPoint. */
            public entryPoint: string;

            /** Recipe arguments. */
            public arguments: google.protobuf.IAny[];

            /** Recipe environment. */
            public environment: google.protobuf.IAny[];

            /**
             * Creates a new Recipe instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Recipe instance
             */
            public static create(properties?: grafeas.v1.IRecipe): grafeas.v1.Recipe;

            /**
             * Encodes the specified Recipe message. Does not implicitly {@link grafeas.v1.Recipe.verify|verify} messages.
             * @param message Recipe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Recipe message, length delimited. Does not implicitly {@link grafeas.v1.Recipe.verify|verify} messages.
             * @param message Recipe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Recipe message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Recipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Recipe;

            /**
             * Decodes a Recipe message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Recipe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Recipe;

            /**
             * Verifies a Recipe message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Recipe message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Recipe
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Recipe;

            /**
             * Creates a plain object from a Recipe message. Also converts values to other types if specified.
             * @param message Recipe
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Recipe, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Recipe to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Completeness. */
        interface ICompleteness {

            /** Completeness arguments */
            "arguments"?: (boolean|null);

            /** Completeness environment */
            environment?: (boolean|null);

            /** Completeness materials */
            materials?: (boolean|null);
        }

        /** Represents a Completeness. */
        class Completeness implements ICompleteness {

            /**
             * Constructs a new Completeness.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ICompleteness);

            /** Completeness arguments. */
            public arguments: boolean;

            /** Completeness environment. */
            public environment: boolean;

            /** Completeness materials. */
            public materials: boolean;

            /**
             * Creates a new Completeness instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Completeness instance
             */
            public static create(properties?: grafeas.v1.ICompleteness): grafeas.v1.Completeness;

            /**
             * Encodes the specified Completeness message. Does not implicitly {@link grafeas.v1.Completeness.verify|verify} messages.
             * @param message Completeness message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICompleteness, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Completeness message, length delimited. Does not implicitly {@link grafeas.v1.Completeness.verify|verify} messages.
             * @param message Completeness message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICompleteness, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Completeness message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Completeness
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Completeness;

            /**
             * Decodes a Completeness message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Completeness
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Completeness;

            /**
             * Verifies a Completeness message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Completeness message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Completeness
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Completeness;

            /**
             * Creates a plain object from a Completeness message. Also converts values to other types if specified.
             * @param message Completeness
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Completeness, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Completeness to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Metadata. */
        interface IMetadata {

            /** Metadata buildInvocationId */
            buildInvocationId?: (string|null);

            /** Metadata buildStartedOn */
            buildStartedOn?: (google.protobuf.ITimestamp|null);

            /** Metadata buildFinishedOn */
            buildFinishedOn?: (google.protobuf.ITimestamp|null);

            /** Metadata completeness */
            completeness?: (grafeas.v1.ICompleteness|null);

            /** Metadata reproducible */
            reproducible?: (boolean|null);
        }

        /** Represents a Metadata. */
        class Metadata implements IMetadata {

            /**
             * Constructs a new Metadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IMetadata);

            /** Metadata buildInvocationId. */
            public buildInvocationId: string;

            /** Metadata buildStartedOn. */
            public buildStartedOn?: (google.protobuf.ITimestamp|null);

            /** Metadata buildFinishedOn. */
            public buildFinishedOn?: (google.protobuf.ITimestamp|null);

            /** Metadata completeness. */
            public completeness?: (grafeas.v1.ICompleteness|null);

            /** Metadata reproducible. */
            public reproducible: boolean;

            /**
             * Creates a new Metadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Metadata instance
             */
            public static create(properties?: grafeas.v1.IMetadata): grafeas.v1.Metadata;

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link grafeas.v1.Metadata.verify|verify} messages.
             * @param message Metadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link grafeas.v1.Metadata.verify|verify} messages.
             * @param message Metadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Metadata;

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Metadata;

            /**
             * Verifies a Metadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metadata
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Metadata;

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @param message Metadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Metadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BuilderConfig. */
        interface IBuilderConfig {

            /** BuilderConfig id */
            id?: (string|null);
        }

        /** Represents a BuilderConfig. */
        class BuilderConfig implements IBuilderConfig {

            /**
             * Constructs a new BuilderConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBuilderConfig);

            /** BuilderConfig id. */
            public id: string;

            /**
             * Creates a new BuilderConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BuilderConfig instance
             */
            public static create(properties?: grafeas.v1.IBuilderConfig): grafeas.v1.BuilderConfig;

            /**
             * Encodes the specified BuilderConfig message. Does not implicitly {@link grafeas.v1.BuilderConfig.verify|verify} messages.
             * @param message BuilderConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBuilderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BuilderConfig message, length delimited. Does not implicitly {@link grafeas.v1.BuilderConfig.verify|verify} messages.
             * @param message BuilderConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBuilderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BuilderConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BuilderConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BuilderConfig;

            /**
             * Decodes a BuilderConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BuilderConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BuilderConfig;

            /**
             * Verifies a BuilderConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BuilderConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BuilderConfig
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BuilderConfig;

            /**
             * Creates a plain object from a BuilderConfig message. Also converts values to other types if specified.
             * @param message BuilderConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BuilderConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BuilderConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InTotoProvenance. */
        interface IInTotoProvenance {

            /** InTotoProvenance builderConfig */
            builderConfig?: (grafeas.v1.IBuilderConfig|null);

            /** InTotoProvenance recipe */
            recipe?: (grafeas.v1.IRecipe|null);

            /** InTotoProvenance metadata */
            metadata?: (grafeas.v1.IMetadata|null);

            /** InTotoProvenance materials */
            materials?: (string[]|null);
        }

        /** Represents an InTotoProvenance. */
        class InTotoProvenance implements IInTotoProvenance {

            /**
             * Constructs a new InTotoProvenance.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IInTotoProvenance);

            /** InTotoProvenance builderConfig. */
            public builderConfig?: (grafeas.v1.IBuilderConfig|null);

            /** InTotoProvenance recipe. */
            public recipe?: (grafeas.v1.IRecipe|null);

            /** InTotoProvenance metadata. */
            public metadata?: (grafeas.v1.IMetadata|null);

            /** InTotoProvenance materials. */
            public materials: string[];

            /**
             * Creates a new InTotoProvenance instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InTotoProvenance instance
             */
            public static create(properties?: grafeas.v1.IInTotoProvenance): grafeas.v1.InTotoProvenance;

            /**
             * Encodes the specified InTotoProvenance message. Does not implicitly {@link grafeas.v1.InTotoProvenance.verify|verify} messages.
             * @param message InTotoProvenance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IInTotoProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InTotoProvenance message, length delimited. Does not implicitly {@link grafeas.v1.InTotoProvenance.verify|verify} messages.
             * @param message InTotoProvenance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IInTotoProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InTotoProvenance message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InTotoProvenance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.InTotoProvenance;

            /**
             * Decodes an InTotoProvenance message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InTotoProvenance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.InTotoProvenance;

            /**
             * Verifies an InTotoProvenance message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InTotoProvenance message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InTotoProvenance
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.InTotoProvenance;

            /**
             * Creates a plain object from an InTotoProvenance message. Also converts values to other types if specified.
             * @param message InTotoProvenance
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.InTotoProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InTotoProvenance to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InTotoStatement. */
        interface IInTotoStatement {

            /** InTotoStatement type */
            type?: (string|null);

            /** InTotoStatement subject */
            subject?: (grafeas.v1.ISubject[]|null);

            /** InTotoStatement predicateType */
            predicateType?: (string|null);

            /** InTotoStatement provenance */
            provenance?: (grafeas.v1.IInTotoProvenance|null);

            /** InTotoStatement slsaProvenance */
            slsaProvenance?: (grafeas.v1.ISlsaProvenance|null);
        }

        /** Represents an InTotoStatement. */
        class InTotoStatement implements IInTotoStatement {

            /**
             * Constructs a new InTotoStatement.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IInTotoStatement);

            /** InTotoStatement type. */
            public type: string;

            /** InTotoStatement subject. */
            public subject: grafeas.v1.ISubject[];

            /** InTotoStatement predicateType. */
            public predicateType: string;

            /** InTotoStatement provenance. */
            public provenance?: (grafeas.v1.IInTotoProvenance|null);

            /** InTotoStatement slsaProvenance. */
            public slsaProvenance?: (grafeas.v1.ISlsaProvenance|null);

            /** InTotoStatement predicate. */
            public predicate?: ("provenance"|"slsaProvenance");

            /**
             * Creates a new InTotoStatement instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InTotoStatement instance
             */
            public static create(properties?: grafeas.v1.IInTotoStatement): grafeas.v1.InTotoStatement;

            /**
             * Encodes the specified InTotoStatement message. Does not implicitly {@link grafeas.v1.InTotoStatement.verify|verify} messages.
             * @param message InTotoStatement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IInTotoStatement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InTotoStatement message, length delimited. Does not implicitly {@link grafeas.v1.InTotoStatement.verify|verify} messages.
             * @param message InTotoStatement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IInTotoStatement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InTotoStatement message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InTotoStatement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.InTotoStatement;

            /**
             * Decodes an InTotoStatement message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InTotoStatement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.InTotoStatement;

            /**
             * Verifies an InTotoStatement message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InTotoStatement message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InTotoStatement
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.InTotoStatement;

            /**
             * Creates a plain object from an InTotoStatement message. Also converts values to other types if specified.
             * @param message InTotoStatement
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.InTotoStatement, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InTotoStatement to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Subject. */
        interface ISubject {

            /** Subject name */
            name?: (string|null);

            /** Subject digest */
            digest?: ({ [k: string]: string }|null);
        }

        /** Represents a Subject. */
        class Subject implements ISubject {

            /**
             * Constructs a new Subject.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ISubject);

            /** Subject name. */
            public name: string;

            /** Subject digest. */
            public digest: { [k: string]: string };

            /**
             * Creates a new Subject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Subject instance
             */
            public static create(properties?: grafeas.v1.ISubject): grafeas.v1.Subject;

            /**
             * Encodes the specified Subject message. Does not implicitly {@link grafeas.v1.Subject.verify|verify} messages.
             * @param message Subject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ISubject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Subject message, length delimited. Does not implicitly {@link grafeas.v1.Subject.verify|verify} messages.
             * @param message Subject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ISubject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Subject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Subject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Subject;

            /**
             * Decodes a Subject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Subject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Subject;

            /**
             * Verifies a Subject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Subject message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Subject
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Subject;

            /**
             * Creates a plain object from a Subject message. Also converts values to other types if specified.
             * @param message Subject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Subject, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Subject to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SlsaProvenance. */
        interface ISlsaProvenance {

            /** SlsaProvenance builder */
            builder?: (grafeas.v1.SlsaProvenance.ISlsaBuilder|null);

            /** SlsaProvenance recipe */
            recipe?: (grafeas.v1.SlsaProvenance.ISlsaRecipe|null);

            /** SlsaProvenance metadata */
            metadata?: (grafeas.v1.SlsaProvenance.ISlsaMetadata|null);

            /** SlsaProvenance materials */
            materials?: (grafeas.v1.SlsaProvenance.IMaterial[]|null);
        }

        /** Represents a SlsaProvenance. */
        class SlsaProvenance implements ISlsaProvenance {

            /**
             * Constructs a new SlsaProvenance.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ISlsaProvenance);

            /** SlsaProvenance builder. */
            public builder?: (grafeas.v1.SlsaProvenance.ISlsaBuilder|null);

            /** SlsaProvenance recipe. */
            public recipe?: (grafeas.v1.SlsaProvenance.ISlsaRecipe|null);

            /** SlsaProvenance metadata. */
            public metadata?: (grafeas.v1.SlsaProvenance.ISlsaMetadata|null);

            /** SlsaProvenance materials. */
            public materials: grafeas.v1.SlsaProvenance.IMaterial[];

            /**
             * Creates a new SlsaProvenance instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SlsaProvenance instance
             */
            public static create(properties?: grafeas.v1.ISlsaProvenance): grafeas.v1.SlsaProvenance;

            /**
             * Encodes the specified SlsaProvenance message. Does not implicitly {@link grafeas.v1.SlsaProvenance.verify|verify} messages.
             * @param message SlsaProvenance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ISlsaProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SlsaProvenance message, length delimited. Does not implicitly {@link grafeas.v1.SlsaProvenance.verify|verify} messages.
             * @param message SlsaProvenance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ISlsaProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SlsaProvenance message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SlsaProvenance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SlsaProvenance;

            /**
             * Decodes a SlsaProvenance message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SlsaProvenance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SlsaProvenance;

            /**
             * Verifies a SlsaProvenance message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SlsaProvenance message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SlsaProvenance
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.SlsaProvenance;

            /**
             * Creates a plain object from a SlsaProvenance message. Also converts values to other types if specified.
             * @param message SlsaProvenance
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.SlsaProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SlsaProvenance to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SlsaProvenance {

            /** Properties of a SlsaRecipe. */
            interface ISlsaRecipe {

                /** SlsaRecipe type */
                type?: (string|null);

                /** SlsaRecipe definedInMaterial */
                definedInMaterial?: (number|Long|string|null);

                /** SlsaRecipe entryPoint */
                entryPoint?: (string|null);

                /** SlsaRecipe arguments */
                "arguments"?: (google.protobuf.IAny|null);

                /** SlsaRecipe environment */
                environment?: (google.protobuf.IAny|null);
            }

            /** Represents a SlsaRecipe. */
            class SlsaRecipe implements ISlsaRecipe {

                /**
                 * Constructs a new SlsaRecipe.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.SlsaProvenance.ISlsaRecipe);

                /** SlsaRecipe type. */
                public type: string;

                /** SlsaRecipe definedInMaterial. */
                public definedInMaterial: (number|Long|string);

                /** SlsaRecipe entryPoint. */
                public entryPoint: string;

                /** SlsaRecipe arguments. */
                public arguments?: (google.protobuf.IAny|null);

                /** SlsaRecipe environment. */
                public environment?: (google.protobuf.IAny|null);

                /**
                 * Creates a new SlsaRecipe instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SlsaRecipe instance
                 */
                public static create(properties?: grafeas.v1.SlsaProvenance.ISlsaRecipe): grafeas.v1.SlsaProvenance.SlsaRecipe;

                /**
                 * Encodes the specified SlsaRecipe message. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaRecipe.verify|verify} messages.
                 * @param message SlsaRecipe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.SlsaProvenance.ISlsaRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SlsaRecipe message, length delimited. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaRecipe.verify|verify} messages.
                 * @param message SlsaRecipe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.SlsaProvenance.ISlsaRecipe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SlsaRecipe message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SlsaRecipe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SlsaProvenance.SlsaRecipe;

                /**
                 * Decodes a SlsaRecipe message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SlsaRecipe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SlsaProvenance.SlsaRecipe;

                /**
                 * Verifies a SlsaRecipe message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SlsaRecipe message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SlsaRecipe
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.SlsaProvenance.SlsaRecipe;

                /**
                 * Creates a plain object from a SlsaRecipe message. Also converts values to other types if specified.
                 * @param message SlsaRecipe
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.SlsaProvenance.SlsaRecipe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SlsaRecipe to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SlsaCompleteness. */
            interface ISlsaCompleteness {

                /** SlsaCompleteness arguments */
                "arguments"?: (boolean|null);

                /** SlsaCompleteness environment */
                environment?: (boolean|null);

                /** SlsaCompleteness materials */
                materials?: (boolean|null);
            }

            /** Represents a SlsaCompleteness. */
            class SlsaCompleteness implements ISlsaCompleteness {

                /**
                 * Constructs a new SlsaCompleteness.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.SlsaProvenance.ISlsaCompleteness);

                /** SlsaCompleteness arguments. */
                public arguments: boolean;

                /** SlsaCompleteness environment. */
                public environment: boolean;

                /** SlsaCompleteness materials. */
                public materials: boolean;

                /**
                 * Creates a new SlsaCompleteness instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SlsaCompleteness instance
                 */
                public static create(properties?: grafeas.v1.SlsaProvenance.ISlsaCompleteness): grafeas.v1.SlsaProvenance.SlsaCompleteness;

                /**
                 * Encodes the specified SlsaCompleteness message. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaCompleteness.verify|verify} messages.
                 * @param message SlsaCompleteness message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.SlsaProvenance.ISlsaCompleteness, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SlsaCompleteness message, length delimited. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaCompleteness.verify|verify} messages.
                 * @param message SlsaCompleteness message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.SlsaProvenance.ISlsaCompleteness, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SlsaCompleteness message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SlsaCompleteness
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SlsaProvenance.SlsaCompleteness;

                /**
                 * Decodes a SlsaCompleteness message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SlsaCompleteness
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SlsaProvenance.SlsaCompleteness;

                /**
                 * Verifies a SlsaCompleteness message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SlsaCompleteness message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SlsaCompleteness
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.SlsaProvenance.SlsaCompleteness;

                /**
                 * Creates a plain object from a SlsaCompleteness message. Also converts values to other types if specified.
                 * @param message SlsaCompleteness
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.SlsaProvenance.SlsaCompleteness, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SlsaCompleteness to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SlsaMetadata. */
            interface ISlsaMetadata {

                /** SlsaMetadata buildInvocationId */
                buildInvocationId?: (string|null);

                /** SlsaMetadata buildStartedOn */
                buildStartedOn?: (google.protobuf.ITimestamp|null);

                /** SlsaMetadata buildFinishedOn */
                buildFinishedOn?: (google.protobuf.ITimestamp|null);

                /** SlsaMetadata completeness */
                completeness?: (grafeas.v1.SlsaProvenance.ISlsaCompleteness|null);

                /** SlsaMetadata reproducible */
                reproducible?: (boolean|null);
            }

            /** Represents a SlsaMetadata. */
            class SlsaMetadata implements ISlsaMetadata {

                /**
                 * Constructs a new SlsaMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.SlsaProvenance.ISlsaMetadata);

                /** SlsaMetadata buildInvocationId. */
                public buildInvocationId: string;

                /** SlsaMetadata buildStartedOn. */
                public buildStartedOn?: (google.protobuf.ITimestamp|null);

                /** SlsaMetadata buildFinishedOn. */
                public buildFinishedOn?: (google.protobuf.ITimestamp|null);

                /** SlsaMetadata completeness. */
                public completeness?: (grafeas.v1.SlsaProvenance.ISlsaCompleteness|null);

                /** SlsaMetadata reproducible. */
                public reproducible: boolean;

                /**
                 * Creates a new SlsaMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SlsaMetadata instance
                 */
                public static create(properties?: grafeas.v1.SlsaProvenance.ISlsaMetadata): grafeas.v1.SlsaProvenance.SlsaMetadata;

                /**
                 * Encodes the specified SlsaMetadata message. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaMetadata.verify|verify} messages.
                 * @param message SlsaMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.SlsaProvenance.ISlsaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SlsaMetadata message, length delimited. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaMetadata.verify|verify} messages.
                 * @param message SlsaMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.SlsaProvenance.ISlsaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SlsaMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SlsaMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SlsaProvenance.SlsaMetadata;

                /**
                 * Decodes a SlsaMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SlsaMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SlsaProvenance.SlsaMetadata;

                /**
                 * Verifies a SlsaMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SlsaMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SlsaMetadata
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.SlsaProvenance.SlsaMetadata;

                /**
                 * Creates a plain object from a SlsaMetadata message. Also converts values to other types if specified.
                 * @param message SlsaMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.SlsaProvenance.SlsaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SlsaMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SlsaBuilder. */
            interface ISlsaBuilder {

                /** SlsaBuilder id */
                id?: (string|null);
            }

            /** Represents a SlsaBuilder. */
            class SlsaBuilder implements ISlsaBuilder {

                /**
                 * Constructs a new SlsaBuilder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.SlsaProvenance.ISlsaBuilder);

                /** SlsaBuilder id. */
                public id: string;

                /**
                 * Creates a new SlsaBuilder instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SlsaBuilder instance
                 */
                public static create(properties?: grafeas.v1.SlsaProvenance.ISlsaBuilder): grafeas.v1.SlsaProvenance.SlsaBuilder;

                /**
                 * Encodes the specified SlsaBuilder message. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaBuilder.verify|verify} messages.
                 * @param message SlsaBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.SlsaProvenance.ISlsaBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SlsaBuilder message, length delimited. Does not implicitly {@link grafeas.v1.SlsaProvenance.SlsaBuilder.verify|verify} messages.
                 * @param message SlsaBuilder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.SlsaProvenance.ISlsaBuilder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SlsaBuilder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SlsaBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SlsaProvenance.SlsaBuilder;

                /**
                 * Decodes a SlsaBuilder message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SlsaBuilder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SlsaProvenance.SlsaBuilder;

                /**
                 * Verifies a SlsaBuilder message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SlsaBuilder message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SlsaBuilder
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.SlsaProvenance.SlsaBuilder;

                /**
                 * Creates a plain object from a SlsaBuilder message. Also converts values to other types if specified.
                 * @param message SlsaBuilder
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.SlsaProvenance.SlsaBuilder, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SlsaBuilder to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Material. */
            interface IMaterial {

                /** Material uri */
                uri?: (string|null);

                /** Material digest */
                digest?: ({ [k: string]: string }|null);
            }

            /** Represents a Material. */
            class Material implements IMaterial {

                /**
                 * Constructs a new Material.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.SlsaProvenance.IMaterial);

                /** Material uri. */
                public uri: string;

                /** Material digest. */
                public digest: { [k: string]: string };

                /**
                 * Creates a new Material instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Material instance
                 */
                public static create(properties?: grafeas.v1.SlsaProvenance.IMaterial): grafeas.v1.SlsaProvenance.Material;

                /**
                 * Encodes the specified Material message. Does not implicitly {@link grafeas.v1.SlsaProvenance.Material.verify|verify} messages.
                 * @param message Material message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.SlsaProvenance.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Material message, length delimited. Does not implicitly {@link grafeas.v1.SlsaProvenance.Material.verify|verify} messages.
                 * @param message Material message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.SlsaProvenance.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Material message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Material
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SlsaProvenance.Material;

                /**
                 * Decodes a Material message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Material
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SlsaProvenance.Material;

                /**
                 * Verifies a Material message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Material message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Material
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.SlsaProvenance.Material;

                /**
                 * Creates a plain object from a Material message. Also converts values to other types if specified.
                 * @param message Material
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.SlsaProvenance.Material, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Material to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a BuildProvenance. */
        interface IBuildProvenance {

            /** BuildProvenance id */
            id?: (string|null);

            /** BuildProvenance projectId */
            projectId?: (string|null);

            /** BuildProvenance commands */
            commands?: (grafeas.v1.ICommand[]|null);

            /** BuildProvenance builtArtifacts */
            builtArtifacts?: (grafeas.v1.IArtifact[]|null);

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
            sourceProvenance?: (grafeas.v1.ISource|null);

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
            constructor(properties?: grafeas.v1.IBuildProvenance);

            /** BuildProvenance id. */
            public id: string;

            /** BuildProvenance projectId. */
            public projectId: string;

            /** BuildProvenance commands. */
            public commands: grafeas.v1.ICommand[];

            /** BuildProvenance builtArtifacts. */
            public builtArtifacts: grafeas.v1.IArtifact[];

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
            public sourceProvenance?: (grafeas.v1.ISource|null);

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
            public static create(properties?: grafeas.v1.IBuildProvenance): grafeas.v1.BuildProvenance;

            /**
             * Encodes the specified BuildProvenance message. Does not implicitly {@link grafeas.v1.BuildProvenance.verify|verify} messages.
             * @param message BuildProvenance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBuildProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BuildProvenance message, length delimited. Does not implicitly {@link grafeas.v1.BuildProvenance.verify|verify} messages.
             * @param message BuildProvenance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBuildProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BuildProvenance message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BuildProvenance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BuildProvenance;

            /**
             * Decodes a BuildProvenance message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BuildProvenance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BuildProvenance;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BuildProvenance;

            /**
             * Creates a plain object from a BuildProvenance message. Also converts values to other types if specified.
             * @param message BuildProvenance
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BuildProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BuildProvenance to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Source. */
        interface ISource {

            /** Source artifactStorageSourceUri */
            artifactStorageSourceUri?: (string|null);

            /** Source fileHashes */
            fileHashes?: ({ [k: string]: grafeas.v1.IFileHashes }|null);

            /** Source context */
            context?: (grafeas.v1.ISourceContext|null);

            /** Source additionalContexts */
            additionalContexts?: (grafeas.v1.ISourceContext[]|null);
        }

        /** Represents a Source. */
        class Source implements ISource {

            /**
             * Constructs a new Source.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ISource);

            /** Source artifactStorageSourceUri. */
            public artifactStorageSourceUri: string;

            /** Source fileHashes. */
            public fileHashes: { [k: string]: grafeas.v1.IFileHashes };

            /** Source context. */
            public context?: (grafeas.v1.ISourceContext|null);

            /** Source additionalContexts. */
            public additionalContexts: grafeas.v1.ISourceContext[];

            /**
             * Creates a new Source instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Source instance
             */
            public static create(properties?: grafeas.v1.ISource): grafeas.v1.Source;

            /**
             * Encodes the specified Source message. Does not implicitly {@link grafeas.v1.Source.verify|verify} messages.
             * @param message Source message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Source message, length delimited. Does not implicitly {@link grafeas.v1.Source.verify|verify} messages.
             * @param message Source message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Source message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Source
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Source;

            /**
             * Decodes a Source message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Source
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Source;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Source;

            /**
             * Creates a plain object from a Source message. Also converts values to other types if specified.
             * @param message Source
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Source to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileHashes. */
        interface IFileHashes {

            /** FileHashes fileHash */
            fileHash?: (grafeas.v1.IHash[]|null);
        }

        /** Represents a FileHashes. */
        class FileHashes implements IFileHashes {

            /**
             * Constructs a new FileHashes.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IFileHashes);

            /** FileHashes fileHash. */
            public fileHash: grafeas.v1.IHash[];

            /**
             * Creates a new FileHashes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileHashes instance
             */
            public static create(properties?: grafeas.v1.IFileHashes): grafeas.v1.FileHashes;

            /**
             * Encodes the specified FileHashes message. Does not implicitly {@link grafeas.v1.FileHashes.verify|verify} messages.
             * @param message FileHashes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileHashes message, length delimited. Does not implicitly {@link grafeas.v1.FileHashes.verify|verify} messages.
             * @param message FileHashes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileHashes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileHashes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.FileHashes;

            /**
             * Decodes a FileHashes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileHashes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.FileHashes;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.FileHashes;

            /**
             * Creates a plain object from a FileHashes message. Also converts values to other types if specified.
             * @param message FileHashes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.FileHashes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileHashes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Hash. */
        interface IHash {

            /** Hash type */
            type?: (string|null);

            /** Hash value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a Hash. */
        class Hash implements IHash {

            /**
             * Constructs a new Hash.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IHash);

            /** Hash type. */
            public type: string;

            /** Hash value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Hash instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Hash instance
             */
            public static create(properties?: grafeas.v1.IHash): grafeas.v1.Hash;

            /**
             * Encodes the specified Hash message. Does not implicitly {@link grafeas.v1.Hash.verify|verify} messages.
             * @param message Hash message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Hash message, length delimited. Does not implicitly {@link grafeas.v1.Hash.verify|verify} messages.
             * @param message Hash message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Hash message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Hash
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Hash;

            /**
             * Decodes a Hash message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Hash
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Hash;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Hash;

            /**
             * Creates a plain object from a Hash message. Also converts values to other types if specified.
             * @param message Hash
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Hash to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.ICommand);

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
            public static create(properties?: grafeas.v1.ICommand): grafeas.v1.Command;

            /**
             * Encodes the specified Command message. Does not implicitly {@link grafeas.v1.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link grafeas.v1.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Command;

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Command;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Command;

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param message Command
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Command to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IArtifact);

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
            public static create(properties?: grafeas.v1.IArtifact): grafeas.v1.Artifact;

            /**
             * Encodes the specified Artifact message. Does not implicitly {@link grafeas.v1.Artifact.verify|verify} messages.
             * @param message Artifact message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Artifact message, length delimited. Does not implicitly {@link grafeas.v1.Artifact.verify|verify} messages.
             * @param message Artifact message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Artifact message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Artifact
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Artifact;

            /**
             * Decodes an Artifact message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Artifact
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Artifact;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Artifact;

            /**
             * Creates a plain object from an Artifact message. Also converts values to other types if specified.
             * @param message Artifact
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Artifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Artifact to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SourceContext. */
        interface ISourceContext {

            /** SourceContext cloudRepo */
            cloudRepo?: (grafeas.v1.ICloudRepoSourceContext|null);

            /** SourceContext gerrit */
            gerrit?: (grafeas.v1.IGerritSourceContext|null);

            /** SourceContext git */
            git?: (grafeas.v1.IGitSourceContext|null);

            /** SourceContext labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a SourceContext. */
        class SourceContext implements ISourceContext {

            /**
             * Constructs a new SourceContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ISourceContext);

            /** SourceContext cloudRepo. */
            public cloudRepo?: (grafeas.v1.ICloudRepoSourceContext|null);

            /** SourceContext gerrit. */
            public gerrit?: (grafeas.v1.IGerritSourceContext|null);

            /** SourceContext git. */
            public git?: (grafeas.v1.IGitSourceContext|null);

            /** SourceContext labels. */
            public labels: { [k: string]: string };

            /** SourceContext context. */
            public context?: ("cloudRepo"|"gerrit"|"git");

            /**
             * Creates a new SourceContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceContext instance
             */
            public static create(properties?: grafeas.v1.ISourceContext): grafeas.v1.SourceContext;

            /**
             * Encodes the specified SourceContext message. Does not implicitly {@link grafeas.v1.SourceContext.verify|verify} messages.
             * @param message SourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceContext message, length delimited. Does not implicitly {@link grafeas.v1.SourceContext.verify|verify} messages.
             * @param message SourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ISourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.SourceContext;

            /**
             * Decodes a SourceContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.SourceContext;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.SourceContext;

            /**
             * Creates a plain object from a SourceContext message. Also converts values to other types if specified.
             * @param message SourceContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.SourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AliasContext. */
        interface IAliasContext {

            /** AliasContext kind */
            kind?: (grafeas.v1.AliasContext.Kind|keyof typeof grafeas.v1.AliasContext.Kind|null);

            /** AliasContext name */
            name?: (string|null);
        }

        /** Represents an AliasContext. */
        class AliasContext implements IAliasContext {

            /**
             * Constructs a new AliasContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IAliasContext);

            /** AliasContext kind. */
            public kind: (grafeas.v1.AliasContext.Kind|keyof typeof grafeas.v1.AliasContext.Kind);

            /** AliasContext name. */
            public name: string;

            /**
             * Creates a new AliasContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AliasContext instance
             */
            public static create(properties?: grafeas.v1.IAliasContext): grafeas.v1.AliasContext;

            /**
             * Encodes the specified AliasContext message. Does not implicitly {@link grafeas.v1.AliasContext.verify|verify} messages.
             * @param message AliasContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IAliasContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AliasContext message, length delimited. Does not implicitly {@link grafeas.v1.AliasContext.verify|verify} messages.
             * @param message AliasContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IAliasContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AliasContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AliasContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.AliasContext;

            /**
             * Decodes an AliasContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AliasContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.AliasContext;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.AliasContext;

            /**
             * Creates a plain object from an AliasContext message. Also converts values to other types if specified.
             * @param message AliasContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.AliasContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AliasContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            repoId?: (grafeas.v1.IRepoId|null);

            /** CloudRepoSourceContext revisionId */
            revisionId?: (string|null);

            /** CloudRepoSourceContext aliasContext */
            aliasContext?: (grafeas.v1.IAliasContext|null);
        }

        /** Represents a CloudRepoSourceContext. */
        class CloudRepoSourceContext implements ICloudRepoSourceContext {

            /**
             * Constructs a new CloudRepoSourceContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ICloudRepoSourceContext);

            /** CloudRepoSourceContext repoId. */
            public repoId?: (grafeas.v1.IRepoId|null);

            /** CloudRepoSourceContext revisionId. */
            public revisionId?: (string|null);

            /** CloudRepoSourceContext aliasContext. */
            public aliasContext?: (grafeas.v1.IAliasContext|null);

            /** CloudRepoSourceContext revision. */
            public revision?: ("revisionId"|"aliasContext");

            /**
             * Creates a new CloudRepoSourceContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CloudRepoSourceContext instance
             */
            public static create(properties?: grafeas.v1.ICloudRepoSourceContext): grafeas.v1.CloudRepoSourceContext;

            /**
             * Encodes the specified CloudRepoSourceContext message. Does not implicitly {@link grafeas.v1.CloudRepoSourceContext.verify|verify} messages.
             * @param message CloudRepoSourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICloudRepoSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CloudRepoSourceContext message, length delimited. Does not implicitly {@link grafeas.v1.CloudRepoSourceContext.verify|verify} messages.
             * @param message CloudRepoSourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICloudRepoSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CloudRepoSourceContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CloudRepoSourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.CloudRepoSourceContext;

            /**
             * Decodes a CloudRepoSourceContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CloudRepoSourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.CloudRepoSourceContext;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.CloudRepoSourceContext;

            /**
             * Creates a plain object from a CloudRepoSourceContext message. Also converts values to other types if specified.
             * @param message CloudRepoSourceContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.CloudRepoSourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CloudRepoSourceContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            aliasContext?: (grafeas.v1.IAliasContext|null);
        }

        /** Represents a GerritSourceContext. */
        class GerritSourceContext implements IGerritSourceContext {

            /**
             * Constructs a new GerritSourceContext.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IGerritSourceContext);

            /** GerritSourceContext hostUri. */
            public hostUri: string;

            /** GerritSourceContext gerritProject. */
            public gerritProject: string;

            /** GerritSourceContext revisionId. */
            public revisionId?: (string|null);

            /** GerritSourceContext aliasContext. */
            public aliasContext?: (grafeas.v1.IAliasContext|null);

            /** GerritSourceContext revision. */
            public revision?: ("revisionId"|"aliasContext");

            /**
             * Creates a new GerritSourceContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GerritSourceContext instance
             */
            public static create(properties?: grafeas.v1.IGerritSourceContext): grafeas.v1.GerritSourceContext;

            /**
             * Encodes the specified GerritSourceContext message. Does not implicitly {@link grafeas.v1.GerritSourceContext.verify|verify} messages.
             * @param message GerritSourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IGerritSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GerritSourceContext message, length delimited. Does not implicitly {@link grafeas.v1.GerritSourceContext.verify|verify} messages.
             * @param message GerritSourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IGerritSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GerritSourceContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GerritSourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.GerritSourceContext;

            /**
             * Decodes a GerritSourceContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GerritSourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.GerritSourceContext;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.GerritSourceContext;

            /**
             * Creates a plain object from a GerritSourceContext message. Also converts values to other types if specified.
             * @param message GerritSourceContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.GerritSourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GerritSourceContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IGitSourceContext);

            /** GitSourceContext url. */
            public url: string;

            /** GitSourceContext revisionId. */
            public revisionId: string;

            /**
             * Creates a new GitSourceContext instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GitSourceContext instance
             */
            public static create(properties?: grafeas.v1.IGitSourceContext): grafeas.v1.GitSourceContext;

            /**
             * Encodes the specified GitSourceContext message. Does not implicitly {@link grafeas.v1.GitSourceContext.verify|verify} messages.
             * @param message GitSourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IGitSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GitSourceContext message, length delimited. Does not implicitly {@link grafeas.v1.GitSourceContext.verify|verify} messages.
             * @param message GitSourceContext message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IGitSourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GitSourceContext message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GitSourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.GitSourceContext;

            /**
             * Decodes a GitSourceContext message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GitSourceContext
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.GitSourceContext;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.GitSourceContext;

            /**
             * Creates a plain object from a GitSourceContext message. Also converts values to other types if specified.
             * @param message GitSourceContext
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.GitSourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GitSourceContext to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RepoId. */
        interface IRepoId {

            /** RepoId projectRepoId */
            projectRepoId?: (grafeas.v1.IProjectRepoId|null);

            /** RepoId uid */
            uid?: (string|null);
        }

        /** Represents a RepoId. */
        class RepoId implements IRepoId {

            /**
             * Constructs a new RepoId.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IRepoId);

            /** RepoId projectRepoId. */
            public projectRepoId?: (grafeas.v1.IProjectRepoId|null);

            /** RepoId uid. */
            public uid?: (string|null);

            /** RepoId id. */
            public id?: ("projectRepoId"|"uid");

            /**
             * Creates a new RepoId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RepoId instance
             */
            public static create(properties?: grafeas.v1.IRepoId): grafeas.v1.RepoId;

            /**
             * Encodes the specified RepoId message. Does not implicitly {@link grafeas.v1.RepoId.verify|verify} messages.
             * @param message RepoId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RepoId message, length delimited. Does not implicitly {@link grafeas.v1.RepoId.verify|verify} messages.
             * @param message RepoId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RepoId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RepoId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.RepoId;

            /**
             * Decodes a RepoId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RepoId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.RepoId;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.RepoId;

            /**
             * Creates a plain object from a RepoId message. Also converts values to other types if specified.
             * @param message RepoId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.RepoId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RepoId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IProjectRepoId);

            /** ProjectRepoId projectId. */
            public projectId: string;

            /** ProjectRepoId repoName. */
            public repoName: string;

            /**
             * Creates a new ProjectRepoId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectRepoId instance
             */
            public static create(properties?: grafeas.v1.IProjectRepoId): grafeas.v1.ProjectRepoId;

            /**
             * Encodes the specified ProjectRepoId message. Does not implicitly {@link grafeas.v1.ProjectRepoId.verify|verify} messages.
             * @param message ProjectRepoId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IProjectRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProjectRepoId message, length delimited. Does not implicitly {@link grafeas.v1.ProjectRepoId.verify|verify} messages.
             * @param message ProjectRepoId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IProjectRepoId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectRepoId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectRepoId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ProjectRepoId;

            /**
             * Decodes a ProjectRepoId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProjectRepoId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ProjectRepoId;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ProjectRepoId;

            /**
             * Creates a plain object from a ProjectRepoId message. Also converts values to other types if specified.
             * @param message ProjectRepoId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ProjectRepoId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProjectRepoId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ComplianceNote. */
        interface IComplianceNote {

            /** ComplianceNote title */
            title?: (string|null);

            /** ComplianceNote description */
            description?: (string|null);

            /** ComplianceNote version */
            version?: (grafeas.v1.IComplianceVersion[]|null);

            /** ComplianceNote rationale */
            rationale?: (string|null);

            /** ComplianceNote remediation */
            remediation?: (string|null);

            /** ComplianceNote cisBenchmark */
            cisBenchmark?: (grafeas.v1.ComplianceNote.ICisBenchmark|null);

            /** ComplianceNote scanInstructions */
            scanInstructions?: (Uint8Array|string|null);
        }

        /** Represents a ComplianceNote. */
        class ComplianceNote implements IComplianceNote {

            /**
             * Constructs a new ComplianceNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IComplianceNote);

            /** ComplianceNote title. */
            public title: string;

            /** ComplianceNote description. */
            public description: string;

            /** ComplianceNote version. */
            public version: grafeas.v1.IComplianceVersion[];

            /** ComplianceNote rationale. */
            public rationale: string;

            /** ComplianceNote remediation. */
            public remediation: string;

            /** ComplianceNote cisBenchmark. */
            public cisBenchmark?: (grafeas.v1.ComplianceNote.ICisBenchmark|null);

            /** ComplianceNote scanInstructions. */
            public scanInstructions: (Uint8Array|string);

            /** ComplianceNote complianceType. */
            public complianceType?: "cisBenchmark";

            /**
             * Creates a new ComplianceNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComplianceNote instance
             */
            public static create(properties?: grafeas.v1.IComplianceNote): grafeas.v1.ComplianceNote;

            /**
             * Encodes the specified ComplianceNote message. Does not implicitly {@link grafeas.v1.ComplianceNote.verify|verify} messages.
             * @param message ComplianceNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IComplianceNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ComplianceNote message, length delimited. Does not implicitly {@link grafeas.v1.ComplianceNote.verify|verify} messages.
             * @param message ComplianceNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IComplianceNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComplianceNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComplianceNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ComplianceNote;

            /**
             * Decodes a ComplianceNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ComplianceNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ComplianceNote;

            /**
             * Verifies a ComplianceNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ComplianceNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ComplianceNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ComplianceNote;

            /**
             * Creates a plain object from a ComplianceNote message. Also converts values to other types if specified.
             * @param message ComplianceNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ComplianceNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ComplianceNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ComplianceNote {

            /** Properties of a CisBenchmark. */
            interface ICisBenchmark {

                /** CisBenchmark profileLevel */
                profileLevel?: (number|null);

                /** CisBenchmark severity */
                severity?: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity|null);
            }

            /** Represents a CisBenchmark. */
            class CisBenchmark implements ICisBenchmark {

                /**
                 * Constructs a new CisBenchmark.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.ComplianceNote.ICisBenchmark);

                /** CisBenchmark profileLevel. */
                public profileLevel: number;

                /** CisBenchmark severity. */
                public severity: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity);

                /**
                 * Creates a new CisBenchmark instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CisBenchmark instance
                 */
                public static create(properties?: grafeas.v1.ComplianceNote.ICisBenchmark): grafeas.v1.ComplianceNote.CisBenchmark;

                /**
                 * Encodes the specified CisBenchmark message. Does not implicitly {@link grafeas.v1.ComplianceNote.CisBenchmark.verify|verify} messages.
                 * @param message CisBenchmark message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.ComplianceNote.ICisBenchmark, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CisBenchmark message, length delimited. Does not implicitly {@link grafeas.v1.ComplianceNote.CisBenchmark.verify|verify} messages.
                 * @param message CisBenchmark message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.ComplianceNote.ICisBenchmark, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CisBenchmark message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CisBenchmark
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ComplianceNote.CisBenchmark;

                /**
                 * Decodes a CisBenchmark message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CisBenchmark
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ComplianceNote.CisBenchmark;

                /**
                 * Verifies a CisBenchmark message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CisBenchmark message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CisBenchmark
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.ComplianceNote.CisBenchmark;

                /**
                 * Creates a plain object from a CisBenchmark message. Also converts values to other types if specified.
                 * @param message CisBenchmark
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.ComplianceNote.CisBenchmark, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CisBenchmark to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ComplianceVersion. */
        interface IComplianceVersion {

            /** ComplianceVersion cpeUri */
            cpeUri?: (string|null);

            /** ComplianceVersion version */
            version?: (string|null);
        }

        /** Represents a ComplianceVersion. */
        class ComplianceVersion implements IComplianceVersion {

            /**
             * Constructs a new ComplianceVersion.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IComplianceVersion);

            /** ComplianceVersion cpeUri. */
            public cpeUri: string;

            /** ComplianceVersion version. */
            public version: string;

            /**
             * Creates a new ComplianceVersion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComplianceVersion instance
             */
            public static create(properties?: grafeas.v1.IComplianceVersion): grafeas.v1.ComplianceVersion;

            /**
             * Encodes the specified ComplianceVersion message. Does not implicitly {@link grafeas.v1.ComplianceVersion.verify|verify} messages.
             * @param message ComplianceVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IComplianceVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ComplianceVersion message, length delimited. Does not implicitly {@link grafeas.v1.ComplianceVersion.verify|verify} messages.
             * @param message ComplianceVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IComplianceVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComplianceVersion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComplianceVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ComplianceVersion;

            /**
             * Decodes a ComplianceVersion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ComplianceVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ComplianceVersion;

            /**
             * Verifies a ComplianceVersion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ComplianceVersion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ComplianceVersion
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ComplianceVersion;

            /**
             * Creates a plain object from a ComplianceVersion message. Also converts values to other types if specified.
             * @param message ComplianceVersion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ComplianceVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ComplianceVersion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ComplianceOccurrence. */
        interface IComplianceOccurrence {

            /** ComplianceOccurrence nonCompliantFiles */
            nonCompliantFiles?: (grafeas.v1.INonCompliantFile[]|null);

            /** ComplianceOccurrence nonComplianceReason */
            nonComplianceReason?: (string|null);
        }

        /** Represents a ComplianceOccurrence. */
        class ComplianceOccurrence implements IComplianceOccurrence {

            /**
             * Constructs a new ComplianceOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IComplianceOccurrence);

            /** ComplianceOccurrence nonCompliantFiles. */
            public nonCompliantFiles: grafeas.v1.INonCompliantFile[];

            /** ComplianceOccurrence nonComplianceReason. */
            public nonComplianceReason: string;

            /**
             * Creates a new ComplianceOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComplianceOccurrence instance
             */
            public static create(properties?: grafeas.v1.IComplianceOccurrence): grafeas.v1.ComplianceOccurrence;

            /**
             * Encodes the specified ComplianceOccurrence message. Does not implicitly {@link grafeas.v1.ComplianceOccurrence.verify|verify} messages.
             * @param message ComplianceOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IComplianceOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ComplianceOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.ComplianceOccurrence.verify|verify} messages.
             * @param message ComplianceOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IComplianceOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComplianceOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComplianceOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ComplianceOccurrence;

            /**
             * Decodes a ComplianceOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ComplianceOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ComplianceOccurrence;

            /**
             * Verifies a ComplianceOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ComplianceOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ComplianceOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ComplianceOccurrence;

            /**
             * Creates a plain object from a ComplianceOccurrence message. Also converts values to other types if specified.
             * @param message ComplianceOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ComplianceOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ComplianceOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NonCompliantFile. */
        interface INonCompliantFile {

            /** NonCompliantFile path */
            path?: (string|null);

            /** NonCompliantFile displayCommand */
            displayCommand?: (string|null);

            /** NonCompliantFile reason */
            reason?: (string|null);
        }

        /** Represents a NonCompliantFile. */
        class NonCompliantFile implements INonCompliantFile {

            /**
             * Constructs a new NonCompliantFile.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.INonCompliantFile);

            /** NonCompliantFile path. */
            public path: string;

            /** NonCompliantFile displayCommand. */
            public displayCommand: string;

            /** NonCompliantFile reason. */
            public reason: string;

            /**
             * Creates a new NonCompliantFile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NonCompliantFile instance
             */
            public static create(properties?: grafeas.v1.INonCompliantFile): grafeas.v1.NonCompliantFile;

            /**
             * Encodes the specified NonCompliantFile message. Does not implicitly {@link grafeas.v1.NonCompliantFile.verify|verify} messages.
             * @param message NonCompliantFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.INonCompliantFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NonCompliantFile message, length delimited. Does not implicitly {@link grafeas.v1.NonCompliantFile.verify|verify} messages.
             * @param message NonCompliantFile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.INonCompliantFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NonCompliantFile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NonCompliantFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.NonCompliantFile;

            /**
             * Decodes a NonCompliantFile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NonCompliantFile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.NonCompliantFile;

            /**
             * Verifies a NonCompliantFile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NonCompliantFile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NonCompliantFile
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.NonCompliantFile;

            /**
             * Creates a plain object from a NonCompliantFile message. Also converts values to other types if specified.
             * @param message NonCompliantFile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.NonCompliantFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NonCompliantFile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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

        /** Properties of a CVSSv3. */
        interface ICVSSv3 {

            /** CVSSv3 baseScore */
            baseScore?: (number|null);

            /** CVSSv3 exploitabilityScore */
            exploitabilityScore?: (number|null);

            /** CVSSv3 impactScore */
            impactScore?: (number|null);

            /** CVSSv3 attackVector */
            attackVector?: (grafeas.v1.CVSSv3.AttackVector|keyof typeof grafeas.v1.CVSSv3.AttackVector|null);

            /** CVSSv3 attackComplexity */
            attackComplexity?: (grafeas.v1.CVSSv3.AttackComplexity|keyof typeof grafeas.v1.CVSSv3.AttackComplexity|null);

            /** CVSSv3 privilegesRequired */
            privilegesRequired?: (grafeas.v1.CVSSv3.PrivilegesRequired|keyof typeof grafeas.v1.CVSSv3.PrivilegesRequired|null);

            /** CVSSv3 userInteraction */
            userInteraction?: (grafeas.v1.CVSSv3.UserInteraction|keyof typeof grafeas.v1.CVSSv3.UserInteraction|null);

            /** CVSSv3 scope */
            scope?: (grafeas.v1.CVSSv3.Scope|keyof typeof grafeas.v1.CVSSv3.Scope|null);

            /** CVSSv3 confidentialityImpact */
            confidentialityImpact?: (grafeas.v1.CVSSv3.Impact|keyof typeof grafeas.v1.CVSSv3.Impact|null);

            /** CVSSv3 integrityImpact */
            integrityImpact?: (grafeas.v1.CVSSv3.Impact|keyof typeof grafeas.v1.CVSSv3.Impact|null);

            /** CVSSv3 availabilityImpact */
            availabilityImpact?: (grafeas.v1.CVSSv3.Impact|keyof typeof grafeas.v1.CVSSv3.Impact|null);
        }

        /** Represents a CVSSv3. */
        class CVSSv3 implements ICVSSv3 {

            /**
             * Constructs a new CVSSv3.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ICVSSv3);

            /** CVSSv3 baseScore. */
            public baseScore: number;

            /** CVSSv3 exploitabilityScore. */
            public exploitabilityScore: number;

            /** CVSSv3 impactScore. */
            public impactScore: number;

            /** CVSSv3 attackVector. */
            public attackVector: (grafeas.v1.CVSSv3.AttackVector|keyof typeof grafeas.v1.CVSSv3.AttackVector);

            /** CVSSv3 attackComplexity. */
            public attackComplexity: (grafeas.v1.CVSSv3.AttackComplexity|keyof typeof grafeas.v1.CVSSv3.AttackComplexity);

            /** CVSSv3 privilegesRequired. */
            public privilegesRequired: (grafeas.v1.CVSSv3.PrivilegesRequired|keyof typeof grafeas.v1.CVSSv3.PrivilegesRequired);

            /** CVSSv3 userInteraction. */
            public userInteraction: (grafeas.v1.CVSSv3.UserInteraction|keyof typeof grafeas.v1.CVSSv3.UserInteraction);

            /** CVSSv3 scope. */
            public scope: (grafeas.v1.CVSSv3.Scope|keyof typeof grafeas.v1.CVSSv3.Scope);

            /** CVSSv3 confidentialityImpact. */
            public confidentialityImpact: (grafeas.v1.CVSSv3.Impact|keyof typeof grafeas.v1.CVSSv3.Impact);

            /** CVSSv3 integrityImpact. */
            public integrityImpact: (grafeas.v1.CVSSv3.Impact|keyof typeof grafeas.v1.CVSSv3.Impact);

            /** CVSSv3 availabilityImpact. */
            public availabilityImpact: (grafeas.v1.CVSSv3.Impact|keyof typeof grafeas.v1.CVSSv3.Impact);

            /**
             * Creates a new CVSSv3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CVSSv3 instance
             */
            public static create(properties?: grafeas.v1.ICVSSv3): grafeas.v1.CVSSv3;

            /**
             * Encodes the specified CVSSv3 message. Does not implicitly {@link grafeas.v1.CVSSv3.verify|verify} messages.
             * @param message CVSSv3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICVSSv3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CVSSv3 message, length delimited. Does not implicitly {@link grafeas.v1.CVSSv3.verify|verify} messages.
             * @param message CVSSv3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICVSSv3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CVSSv3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CVSSv3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.CVSSv3;

            /**
             * Decodes a CVSSv3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CVSSv3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.CVSSv3;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.CVSSv3;

            /**
             * Creates a plain object from a CVSSv3 message. Also converts values to other types if specified.
             * @param message CVSSv3
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.CVSSv3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CVSSv3 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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

        /** Properties of a CVSS. */
        interface ICVSS {

            /** CVSS baseScore */
            baseScore?: (number|null);

            /** CVSS exploitabilityScore */
            exploitabilityScore?: (number|null);

            /** CVSS impactScore */
            impactScore?: (number|null);

            /** CVSS attackVector */
            attackVector?: (grafeas.v1.CVSS.AttackVector|keyof typeof grafeas.v1.CVSS.AttackVector|null);

            /** CVSS attackComplexity */
            attackComplexity?: (grafeas.v1.CVSS.AttackComplexity|keyof typeof grafeas.v1.CVSS.AttackComplexity|null);

            /** CVSS authentication */
            authentication?: (grafeas.v1.CVSS.Authentication|keyof typeof grafeas.v1.CVSS.Authentication|null);

            /** CVSS privilegesRequired */
            privilegesRequired?: (grafeas.v1.CVSS.PrivilegesRequired|keyof typeof grafeas.v1.CVSS.PrivilegesRequired|null);

            /** CVSS userInteraction */
            userInteraction?: (grafeas.v1.CVSS.UserInteraction|keyof typeof grafeas.v1.CVSS.UserInteraction|null);

            /** CVSS scope */
            scope?: (grafeas.v1.CVSS.Scope|keyof typeof grafeas.v1.CVSS.Scope|null);

            /** CVSS confidentialityImpact */
            confidentialityImpact?: (grafeas.v1.CVSS.Impact|keyof typeof grafeas.v1.CVSS.Impact|null);

            /** CVSS integrityImpact */
            integrityImpact?: (grafeas.v1.CVSS.Impact|keyof typeof grafeas.v1.CVSS.Impact|null);

            /** CVSS availabilityImpact */
            availabilityImpact?: (grafeas.v1.CVSS.Impact|keyof typeof grafeas.v1.CVSS.Impact|null);
        }

        /** Represents a CVSS. */
        class CVSS implements ICVSS {

            /**
             * Constructs a new CVSS.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ICVSS);

            /** CVSS baseScore. */
            public baseScore: number;

            /** CVSS exploitabilityScore. */
            public exploitabilityScore: number;

            /** CVSS impactScore. */
            public impactScore: number;

            /** CVSS attackVector. */
            public attackVector: (grafeas.v1.CVSS.AttackVector|keyof typeof grafeas.v1.CVSS.AttackVector);

            /** CVSS attackComplexity. */
            public attackComplexity: (grafeas.v1.CVSS.AttackComplexity|keyof typeof grafeas.v1.CVSS.AttackComplexity);

            /** CVSS authentication. */
            public authentication: (grafeas.v1.CVSS.Authentication|keyof typeof grafeas.v1.CVSS.Authentication);

            /** CVSS privilegesRequired. */
            public privilegesRequired: (grafeas.v1.CVSS.PrivilegesRequired|keyof typeof grafeas.v1.CVSS.PrivilegesRequired);

            /** CVSS userInteraction. */
            public userInteraction: (grafeas.v1.CVSS.UserInteraction|keyof typeof grafeas.v1.CVSS.UserInteraction);

            /** CVSS scope. */
            public scope: (grafeas.v1.CVSS.Scope|keyof typeof grafeas.v1.CVSS.Scope);

            /** CVSS confidentialityImpact. */
            public confidentialityImpact: (grafeas.v1.CVSS.Impact|keyof typeof grafeas.v1.CVSS.Impact);

            /** CVSS integrityImpact. */
            public integrityImpact: (grafeas.v1.CVSS.Impact|keyof typeof grafeas.v1.CVSS.Impact);

            /** CVSS availabilityImpact. */
            public availabilityImpact: (grafeas.v1.CVSS.Impact|keyof typeof grafeas.v1.CVSS.Impact);

            /**
             * Creates a new CVSS instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CVSS instance
             */
            public static create(properties?: grafeas.v1.ICVSS): grafeas.v1.CVSS;

            /**
             * Encodes the specified CVSS message. Does not implicitly {@link grafeas.v1.CVSS.verify|verify} messages.
             * @param message CVSS message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICVSS, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CVSS message, length delimited. Does not implicitly {@link grafeas.v1.CVSS.verify|verify} messages.
             * @param message CVSS message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICVSS, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CVSS message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CVSS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.CVSS;

            /**
             * Decodes a CVSS message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CVSS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.CVSS;

            /**
             * Verifies a CVSS message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CVSS message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CVSS
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.CVSS;

            /**
             * Creates a plain object from a CVSS message. Also converts values to other types if specified.
             * @param message CVSS
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.CVSS, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CVSS to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CVSS {

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

            /** Authentication enum. */
            enum Authentication {
                AUTHENTICATION_UNSPECIFIED = 0,
                AUTHENTICATION_MULTIPLE = 1,
                AUTHENTICATION_SINGLE = 2,
                AUTHENTICATION_NONE = 3
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

        /** Properties of a DeploymentNote. */
        interface IDeploymentNote {

            /** DeploymentNote resourceUri */
            resourceUri?: (string[]|null);
        }

        /** Represents a DeploymentNote. */
        class DeploymentNote implements IDeploymentNote {

            /**
             * Constructs a new DeploymentNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDeploymentNote);

            /** DeploymentNote resourceUri. */
            public resourceUri: string[];

            /**
             * Creates a new DeploymentNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeploymentNote instance
             */
            public static create(properties?: grafeas.v1.IDeploymentNote): grafeas.v1.DeploymentNote;

            /**
             * Encodes the specified DeploymentNote message. Does not implicitly {@link grafeas.v1.DeploymentNote.verify|verify} messages.
             * @param message DeploymentNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDeploymentNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeploymentNote message, length delimited. Does not implicitly {@link grafeas.v1.DeploymentNote.verify|verify} messages.
             * @param message DeploymentNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDeploymentNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeploymentNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeploymentNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DeploymentNote;

            /**
             * Decodes a DeploymentNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeploymentNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DeploymentNote;

            /**
             * Verifies a DeploymentNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeploymentNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeploymentNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DeploymentNote;

            /**
             * Creates a plain object from a DeploymentNote message. Also converts values to other types if specified.
             * @param message DeploymentNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DeploymentNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeploymentNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeploymentOccurrence. */
        interface IDeploymentOccurrence {

            /** DeploymentOccurrence userEmail */
            userEmail?: (string|null);

            /** DeploymentOccurrence deployTime */
            deployTime?: (google.protobuf.ITimestamp|null);

            /** DeploymentOccurrence undeployTime */
            undeployTime?: (google.protobuf.ITimestamp|null);

            /** DeploymentOccurrence config */
            config?: (string|null);

            /** DeploymentOccurrence address */
            address?: (string|null);

            /** DeploymentOccurrence resourceUri */
            resourceUri?: (string[]|null);

            /** DeploymentOccurrence platform */
            platform?: (grafeas.v1.DeploymentOccurrence.Platform|keyof typeof grafeas.v1.DeploymentOccurrence.Platform|null);
        }

        /** Represents a DeploymentOccurrence. */
        class DeploymentOccurrence implements IDeploymentOccurrence {

            /**
             * Constructs a new DeploymentOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDeploymentOccurrence);

            /** DeploymentOccurrence userEmail. */
            public userEmail: string;

            /** DeploymentOccurrence deployTime. */
            public deployTime?: (google.protobuf.ITimestamp|null);

            /** DeploymentOccurrence undeployTime. */
            public undeployTime?: (google.protobuf.ITimestamp|null);

            /** DeploymentOccurrence config. */
            public config: string;

            /** DeploymentOccurrence address. */
            public address: string;

            /** DeploymentOccurrence resourceUri. */
            public resourceUri: string[];

            /** DeploymentOccurrence platform. */
            public platform: (grafeas.v1.DeploymentOccurrence.Platform|keyof typeof grafeas.v1.DeploymentOccurrence.Platform);

            /**
             * Creates a new DeploymentOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeploymentOccurrence instance
             */
            public static create(properties?: grafeas.v1.IDeploymentOccurrence): grafeas.v1.DeploymentOccurrence;

            /**
             * Encodes the specified DeploymentOccurrence message. Does not implicitly {@link grafeas.v1.DeploymentOccurrence.verify|verify} messages.
             * @param message DeploymentOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDeploymentOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeploymentOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.DeploymentOccurrence.verify|verify} messages.
             * @param message DeploymentOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDeploymentOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeploymentOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeploymentOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DeploymentOccurrence;

            /**
             * Decodes a DeploymentOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeploymentOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DeploymentOccurrence;

            /**
             * Verifies a DeploymentOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeploymentOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeploymentOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DeploymentOccurrence;

            /**
             * Creates a plain object from a DeploymentOccurrence message. Also converts values to other types if specified.
             * @param message DeploymentOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DeploymentOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeploymentOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DeploymentOccurrence {

            /** Platform enum. */
            enum Platform {
                PLATFORM_UNSPECIFIED = 0,
                GKE = 1,
                FLEX = 2,
                CUSTOM = 3
            }
        }

        /** Properties of a DiscoveryNote. */
        interface IDiscoveryNote {

            /** DiscoveryNote analysisKind */
            analysisKind?: (grafeas.v1.NoteKind|keyof typeof grafeas.v1.NoteKind|null);
        }

        /** Represents a DiscoveryNote. */
        class DiscoveryNote implements IDiscoveryNote {

            /**
             * Constructs a new DiscoveryNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDiscoveryNote);

            /** DiscoveryNote analysisKind. */
            public analysisKind: (grafeas.v1.NoteKind|keyof typeof grafeas.v1.NoteKind);

            /**
             * Creates a new DiscoveryNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscoveryNote instance
             */
            public static create(properties?: grafeas.v1.IDiscoveryNote): grafeas.v1.DiscoveryNote;

            /**
             * Encodes the specified DiscoveryNote message. Does not implicitly {@link grafeas.v1.DiscoveryNote.verify|verify} messages.
             * @param message DiscoveryNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDiscoveryNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscoveryNote message, length delimited. Does not implicitly {@link grafeas.v1.DiscoveryNote.verify|verify} messages.
             * @param message DiscoveryNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDiscoveryNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscoveryNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscoveryNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DiscoveryNote;

            /**
             * Decodes a DiscoveryNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscoveryNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DiscoveryNote;

            /**
             * Verifies a DiscoveryNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscoveryNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscoveryNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DiscoveryNote;

            /**
             * Creates a plain object from a DiscoveryNote message. Also converts values to other types if specified.
             * @param message DiscoveryNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DiscoveryNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscoveryNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DiscoveryOccurrence. */
        interface IDiscoveryOccurrence {

            /** DiscoveryOccurrence continuousAnalysis */
            continuousAnalysis?: (grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis|keyof typeof grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis|null);

            /** DiscoveryOccurrence analysisStatus */
            analysisStatus?: (grafeas.v1.DiscoveryOccurrence.AnalysisStatus|keyof typeof grafeas.v1.DiscoveryOccurrence.AnalysisStatus|null);

            /** DiscoveryOccurrence analysisStatusError */
            analysisStatusError?: (google.rpc.IStatus|null);

            /** DiscoveryOccurrence cpe */
            cpe?: (string|null);

            /** DiscoveryOccurrence lastScanTime */
            lastScanTime?: (google.protobuf.ITimestamp|null);

            /** DiscoveryOccurrence archiveTime */
            archiveTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a DiscoveryOccurrence. */
        class DiscoveryOccurrence implements IDiscoveryOccurrence {

            /**
             * Constructs a new DiscoveryOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDiscoveryOccurrence);

            /** DiscoveryOccurrence continuousAnalysis. */
            public continuousAnalysis: (grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis|keyof typeof grafeas.v1.DiscoveryOccurrence.ContinuousAnalysis);

            /** DiscoveryOccurrence analysisStatus. */
            public analysisStatus: (grafeas.v1.DiscoveryOccurrence.AnalysisStatus|keyof typeof grafeas.v1.DiscoveryOccurrence.AnalysisStatus);

            /** DiscoveryOccurrence analysisStatusError. */
            public analysisStatusError?: (google.rpc.IStatus|null);

            /** DiscoveryOccurrence cpe. */
            public cpe: string;

            /** DiscoveryOccurrence lastScanTime. */
            public lastScanTime?: (google.protobuf.ITimestamp|null);

            /** DiscoveryOccurrence archiveTime. */
            public archiveTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new DiscoveryOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscoveryOccurrence instance
             */
            public static create(properties?: grafeas.v1.IDiscoveryOccurrence): grafeas.v1.DiscoveryOccurrence;

            /**
             * Encodes the specified DiscoveryOccurrence message. Does not implicitly {@link grafeas.v1.DiscoveryOccurrence.verify|verify} messages.
             * @param message DiscoveryOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDiscoveryOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscoveryOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.DiscoveryOccurrence.verify|verify} messages.
             * @param message DiscoveryOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDiscoveryOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscoveryOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscoveryOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DiscoveryOccurrence;

            /**
             * Decodes a DiscoveryOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscoveryOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DiscoveryOccurrence;

            /**
             * Verifies a DiscoveryOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscoveryOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscoveryOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DiscoveryOccurrence;

            /**
             * Creates a plain object from a DiscoveryOccurrence message. Also converts values to other types if specified.
             * @param message DiscoveryOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DiscoveryOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscoveryOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DiscoveryOccurrence {

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

        /** Properties of a DSSEAttestationNote. */
        interface IDSSEAttestationNote {

            /** DSSEAttestationNote hint */
            hint?: (grafeas.v1.DSSEAttestationNote.IDSSEHint|null);
        }

        /** Represents a DSSEAttestationNote. */
        class DSSEAttestationNote implements IDSSEAttestationNote {

            /**
             * Constructs a new DSSEAttestationNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDSSEAttestationNote);

            /** DSSEAttestationNote hint. */
            public hint?: (grafeas.v1.DSSEAttestationNote.IDSSEHint|null);

            /**
             * Creates a new DSSEAttestationNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DSSEAttestationNote instance
             */
            public static create(properties?: grafeas.v1.IDSSEAttestationNote): grafeas.v1.DSSEAttestationNote;

            /**
             * Encodes the specified DSSEAttestationNote message. Does not implicitly {@link grafeas.v1.DSSEAttestationNote.verify|verify} messages.
             * @param message DSSEAttestationNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDSSEAttestationNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DSSEAttestationNote message, length delimited. Does not implicitly {@link grafeas.v1.DSSEAttestationNote.verify|verify} messages.
             * @param message DSSEAttestationNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDSSEAttestationNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DSSEAttestationNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DSSEAttestationNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DSSEAttestationNote;

            /**
             * Decodes a DSSEAttestationNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DSSEAttestationNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DSSEAttestationNote;

            /**
             * Verifies a DSSEAttestationNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DSSEAttestationNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DSSEAttestationNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DSSEAttestationNote;

            /**
             * Creates a plain object from a DSSEAttestationNote message. Also converts values to other types if specified.
             * @param message DSSEAttestationNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DSSEAttestationNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DSSEAttestationNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DSSEAttestationNote {

            /** Properties of a DSSEHint. */
            interface IDSSEHint {

                /** DSSEHint humanReadableName */
                humanReadableName?: (string|null);
            }

            /** Represents a DSSEHint. */
            class DSSEHint implements IDSSEHint {

                /**
                 * Constructs a new DSSEHint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.DSSEAttestationNote.IDSSEHint);

                /** DSSEHint humanReadableName. */
                public humanReadableName: string;

                /**
                 * Creates a new DSSEHint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DSSEHint instance
                 */
                public static create(properties?: grafeas.v1.DSSEAttestationNote.IDSSEHint): grafeas.v1.DSSEAttestationNote.DSSEHint;

                /**
                 * Encodes the specified DSSEHint message. Does not implicitly {@link grafeas.v1.DSSEAttestationNote.DSSEHint.verify|verify} messages.
                 * @param message DSSEHint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.DSSEAttestationNote.IDSSEHint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DSSEHint message, length delimited. Does not implicitly {@link grafeas.v1.DSSEAttestationNote.DSSEHint.verify|verify} messages.
                 * @param message DSSEHint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.DSSEAttestationNote.IDSSEHint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DSSEHint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DSSEHint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DSSEAttestationNote.DSSEHint;

                /**
                 * Decodes a DSSEHint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DSSEHint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DSSEAttestationNote.DSSEHint;

                /**
                 * Verifies a DSSEHint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DSSEHint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DSSEHint
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.DSSEAttestationNote.DSSEHint;

                /**
                 * Creates a plain object from a DSSEHint message. Also converts values to other types if specified.
                 * @param message DSSEHint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.DSSEAttestationNote.DSSEHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DSSEHint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a DSSEAttestationOccurrence. */
        interface IDSSEAttestationOccurrence {

            /** DSSEAttestationOccurrence envelope */
            envelope?: (grafeas.v1.IEnvelope|null);

            /** DSSEAttestationOccurrence statement */
            statement?: (grafeas.v1.IInTotoStatement|null);
        }

        /** Represents a DSSEAttestationOccurrence. */
        class DSSEAttestationOccurrence implements IDSSEAttestationOccurrence {

            /**
             * Constructs a new DSSEAttestationOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDSSEAttestationOccurrence);

            /** DSSEAttestationOccurrence envelope. */
            public envelope?: (grafeas.v1.IEnvelope|null);

            /** DSSEAttestationOccurrence statement. */
            public statement?: (grafeas.v1.IInTotoStatement|null);

            /** DSSEAttestationOccurrence decodedPayload. */
            public decodedPayload?: "statement";

            /**
             * Creates a new DSSEAttestationOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DSSEAttestationOccurrence instance
             */
            public static create(properties?: grafeas.v1.IDSSEAttestationOccurrence): grafeas.v1.DSSEAttestationOccurrence;

            /**
             * Encodes the specified DSSEAttestationOccurrence message. Does not implicitly {@link grafeas.v1.DSSEAttestationOccurrence.verify|verify} messages.
             * @param message DSSEAttestationOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDSSEAttestationOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DSSEAttestationOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.DSSEAttestationOccurrence.verify|verify} messages.
             * @param message DSSEAttestationOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDSSEAttestationOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DSSEAttestationOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DSSEAttestationOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DSSEAttestationOccurrence;

            /**
             * Decodes a DSSEAttestationOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DSSEAttestationOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DSSEAttestationOccurrence;

            /**
             * Verifies a DSSEAttestationOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DSSEAttestationOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DSSEAttestationOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DSSEAttestationOccurrence;

            /**
             * Creates a plain object from a DSSEAttestationOccurrence message. Also converts values to other types if specified.
             * @param message DSSEAttestationOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DSSEAttestationOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DSSEAttestationOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Grafeas */
        class Grafeas extends $protobuf.rpc.Service {

            /**
             * Constructs a new Grafeas service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Grafeas service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Grafeas;

            /**
             * Calls GetOccurrence.
             * @param request GetOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Occurrence
             */
            public getOccurrence(request: grafeas.v1.IGetOccurrenceRequest, callback: grafeas.v1.Grafeas.GetOccurrenceCallback): void;

            /**
             * Calls GetOccurrence.
             * @param request GetOccurrenceRequest message or plain object
             * @returns Promise
             */
            public getOccurrence(request: grafeas.v1.IGetOccurrenceRequest): Promise<grafeas.v1.Occurrence>;

            /**
             * Calls ListOccurrences.
             * @param request ListOccurrencesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOccurrencesResponse
             */
            public listOccurrences(request: grafeas.v1.IListOccurrencesRequest, callback: grafeas.v1.Grafeas.ListOccurrencesCallback): void;

            /**
             * Calls ListOccurrences.
             * @param request ListOccurrencesRequest message or plain object
             * @returns Promise
             */
            public listOccurrences(request: grafeas.v1.IListOccurrencesRequest): Promise<grafeas.v1.ListOccurrencesResponse>;

            /**
             * Calls DeleteOccurrence.
             * @param request DeleteOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOccurrence(request: grafeas.v1.IDeleteOccurrenceRequest, callback: grafeas.v1.Grafeas.DeleteOccurrenceCallback): void;

            /**
             * Calls DeleteOccurrence.
             * @param request DeleteOccurrenceRequest message or plain object
             * @returns Promise
             */
            public deleteOccurrence(request: grafeas.v1.IDeleteOccurrenceRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CreateOccurrence.
             * @param request CreateOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Occurrence
             */
            public createOccurrence(request: grafeas.v1.ICreateOccurrenceRequest, callback: grafeas.v1.Grafeas.CreateOccurrenceCallback): void;

            /**
             * Calls CreateOccurrence.
             * @param request CreateOccurrenceRequest message or plain object
             * @returns Promise
             */
            public createOccurrence(request: grafeas.v1.ICreateOccurrenceRequest): Promise<grafeas.v1.Occurrence>;

            /**
             * Calls BatchCreateOccurrences.
             * @param request BatchCreateOccurrencesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchCreateOccurrencesResponse
             */
            public batchCreateOccurrences(request: grafeas.v1.IBatchCreateOccurrencesRequest, callback: grafeas.v1.Grafeas.BatchCreateOccurrencesCallback): void;

            /**
             * Calls BatchCreateOccurrences.
             * @param request BatchCreateOccurrencesRequest message or plain object
             * @returns Promise
             */
            public batchCreateOccurrences(request: grafeas.v1.IBatchCreateOccurrencesRequest): Promise<grafeas.v1.BatchCreateOccurrencesResponse>;

            /**
             * Calls UpdateOccurrence.
             * @param request UpdateOccurrenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Occurrence
             */
            public updateOccurrence(request: grafeas.v1.IUpdateOccurrenceRequest, callback: grafeas.v1.Grafeas.UpdateOccurrenceCallback): void;

            /**
             * Calls UpdateOccurrence.
             * @param request UpdateOccurrenceRequest message or plain object
             * @returns Promise
             */
            public updateOccurrence(request: grafeas.v1.IUpdateOccurrenceRequest): Promise<grafeas.v1.Occurrence>;

            /**
             * Calls GetOccurrenceNote.
             * @param request GetOccurrenceNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public getOccurrenceNote(request: grafeas.v1.IGetOccurrenceNoteRequest, callback: grafeas.v1.Grafeas.GetOccurrenceNoteCallback): void;

            /**
             * Calls GetOccurrenceNote.
             * @param request GetOccurrenceNoteRequest message or plain object
             * @returns Promise
             */
            public getOccurrenceNote(request: grafeas.v1.IGetOccurrenceNoteRequest): Promise<grafeas.v1.Note>;

            /**
             * Calls GetNote.
             * @param request GetNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public getNote(request: grafeas.v1.IGetNoteRequest, callback: grafeas.v1.Grafeas.GetNoteCallback): void;

            /**
             * Calls GetNote.
             * @param request GetNoteRequest message or plain object
             * @returns Promise
             */
            public getNote(request: grafeas.v1.IGetNoteRequest): Promise<grafeas.v1.Note>;

            /**
             * Calls ListNotes.
             * @param request ListNotesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListNotesResponse
             */
            public listNotes(request: grafeas.v1.IListNotesRequest, callback: grafeas.v1.Grafeas.ListNotesCallback): void;

            /**
             * Calls ListNotes.
             * @param request ListNotesRequest message or plain object
             * @returns Promise
             */
            public listNotes(request: grafeas.v1.IListNotesRequest): Promise<grafeas.v1.ListNotesResponse>;

            /**
             * Calls DeleteNote.
             * @param request DeleteNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteNote(request: grafeas.v1.IDeleteNoteRequest, callback: grafeas.v1.Grafeas.DeleteNoteCallback): void;

            /**
             * Calls DeleteNote.
             * @param request DeleteNoteRequest message or plain object
             * @returns Promise
             */
            public deleteNote(request: grafeas.v1.IDeleteNoteRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CreateNote.
             * @param request CreateNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public createNote(request: grafeas.v1.ICreateNoteRequest, callback: grafeas.v1.Grafeas.CreateNoteCallback): void;

            /**
             * Calls CreateNote.
             * @param request CreateNoteRequest message or plain object
             * @returns Promise
             */
            public createNote(request: grafeas.v1.ICreateNoteRequest): Promise<grafeas.v1.Note>;

            /**
             * Calls BatchCreateNotes.
             * @param request BatchCreateNotesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BatchCreateNotesResponse
             */
            public batchCreateNotes(request: grafeas.v1.IBatchCreateNotesRequest, callback: grafeas.v1.Grafeas.BatchCreateNotesCallback): void;

            /**
             * Calls BatchCreateNotes.
             * @param request BatchCreateNotesRequest message or plain object
             * @returns Promise
             */
            public batchCreateNotes(request: grafeas.v1.IBatchCreateNotesRequest): Promise<grafeas.v1.BatchCreateNotesResponse>;

            /**
             * Calls UpdateNote.
             * @param request UpdateNoteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Note
             */
            public updateNote(request: grafeas.v1.IUpdateNoteRequest, callback: grafeas.v1.Grafeas.UpdateNoteCallback): void;

            /**
             * Calls UpdateNote.
             * @param request UpdateNoteRequest message or plain object
             * @returns Promise
             */
            public updateNote(request: grafeas.v1.IUpdateNoteRequest): Promise<grafeas.v1.Note>;

            /**
             * Calls ListNoteOccurrences.
             * @param request ListNoteOccurrencesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListNoteOccurrencesResponse
             */
            public listNoteOccurrences(request: grafeas.v1.IListNoteOccurrencesRequest, callback: grafeas.v1.Grafeas.ListNoteOccurrencesCallback): void;

            /**
             * Calls ListNoteOccurrences.
             * @param request ListNoteOccurrencesRequest message or plain object
             * @returns Promise
             */
            public listNoteOccurrences(request: grafeas.v1.IListNoteOccurrencesRequest): Promise<grafeas.v1.ListNoteOccurrencesResponse>;
        }

        namespace Grafeas {

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#getOccurrence}.
             * @param error Error, if any
             * @param [response] Occurrence
             */
            type GetOccurrenceCallback = (error: (Error|null), response?: grafeas.v1.Occurrence) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#listOccurrences}.
             * @param error Error, if any
             * @param [response] ListOccurrencesResponse
             */
            type ListOccurrencesCallback = (error: (Error|null), response?: grafeas.v1.ListOccurrencesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#deleteOccurrence}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOccurrenceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#createOccurrence}.
             * @param error Error, if any
             * @param [response] Occurrence
             */
            type CreateOccurrenceCallback = (error: (Error|null), response?: grafeas.v1.Occurrence) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#batchCreateOccurrences}.
             * @param error Error, if any
             * @param [response] BatchCreateOccurrencesResponse
             */
            type BatchCreateOccurrencesCallback = (error: (Error|null), response?: grafeas.v1.BatchCreateOccurrencesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#updateOccurrence}.
             * @param error Error, if any
             * @param [response] Occurrence
             */
            type UpdateOccurrenceCallback = (error: (Error|null), response?: grafeas.v1.Occurrence) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#getOccurrenceNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type GetOccurrenceNoteCallback = (error: (Error|null), response?: grafeas.v1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#getNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type GetNoteCallback = (error: (Error|null), response?: grafeas.v1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#listNotes}.
             * @param error Error, if any
             * @param [response] ListNotesResponse
             */
            type ListNotesCallback = (error: (Error|null), response?: grafeas.v1.ListNotesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#deleteNote}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteNoteCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#createNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type CreateNoteCallback = (error: (Error|null), response?: grafeas.v1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#batchCreateNotes}.
             * @param error Error, if any
             * @param [response] BatchCreateNotesResponse
             */
            type BatchCreateNotesCallback = (error: (Error|null), response?: grafeas.v1.BatchCreateNotesResponse) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#updateNote}.
             * @param error Error, if any
             * @param [response] Note
             */
            type UpdateNoteCallback = (error: (Error|null), response?: grafeas.v1.Note) => void;

            /**
             * Callback as used by {@link grafeas.v1.Grafeas#listNoteOccurrences}.
             * @param error Error, if any
             * @param [response] ListNoteOccurrencesResponse
             */
            type ListNoteOccurrencesCallback = (error: (Error|null), response?: grafeas.v1.ListNoteOccurrencesResponse) => void;
        }

        /** Properties of an Occurrence. */
        interface IOccurrence {

            /** Occurrence name */
            name?: (string|null);

            /** Occurrence resourceUri */
            resourceUri?: (string|null);

            /** Occurrence noteName */
            noteName?: (string|null);

            /** Occurrence kind */
            kind?: (grafeas.v1.NoteKind|keyof typeof grafeas.v1.NoteKind|null);

            /** Occurrence remediation */
            remediation?: (string|null);

            /** Occurrence createTime */
            createTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence updateTime */
            updateTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence vulnerability */
            vulnerability?: (grafeas.v1.IVulnerabilityOccurrence|null);

            /** Occurrence build */
            build?: (grafeas.v1.IBuildOccurrence|null);

            /** Occurrence image */
            image?: (grafeas.v1.IImageOccurrence|null);

            /** Occurrence package */
            "package"?: (grafeas.v1.IPackageOccurrence|null);

            /** Occurrence deployment */
            deployment?: (grafeas.v1.IDeploymentOccurrence|null);

            /** Occurrence discovery */
            discovery?: (grafeas.v1.IDiscoveryOccurrence|null);

            /** Occurrence attestation */
            attestation?: (grafeas.v1.IAttestationOccurrence|null);

            /** Occurrence upgrade */
            upgrade?: (grafeas.v1.IUpgradeOccurrence|null);

            /** Occurrence compliance */
            compliance?: (grafeas.v1.IComplianceOccurrence|null);

            /** Occurrence dsseAttestation */
            dsseAttestation?: (grafeas.v1.IDSSEAttestationOccurrence|null);

            /** Occurrence envelope */
            envelope?: (grafeas.v1.IEnvelope|null);
        }

        /** Represents an Occurrence. */
        class Occurrence implements IOccurrence {

            /**
             * Constructs a new Occurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IOccurrence);

            /** Occurrence name. */
            public name: string;

            /** Occurrence resourceUri. */
            public resourceUri: string;

            /** Occurrence noteName. */
            public noteName: string;

            /** Occurrence kind. */
            public kind: (grafeas.v1.NoteKind|keyof typeof grafeas.v1.NoteKind);

            /** Occurrence remediation. */
            public remediation: string;

            /** Occurrence createTime. */
            public createTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence updateTime. */
            public updateTime?: (google.protobuf.ITimestamp|null);

            /** Occurrence vulnerability. */
            public vulnerability?: (grafeas.v1.IVulnerabilityOccurrence|null);

            /** Occurrence build. */
            public build?: (grafeas.v1.IBuildOccurrence|null);

            /** Occurrence image. */
            public image?: (grafeas.v1.IImageOccurrence|null);

            /** Occurrence package. */
            public package?: (grafeas.v1.IPackageOccurrence|null);

            /** Occurrence deployment. */
            public deployment?: (grafeas.v1.IDeploymentOccurrence|null);

            /** Occurrence discovery. */
            public discovery?: (grafeas.v1.IDiscoveryOccurrence|null);

            /** Occurrence attestation. */
            public attestation?: (grafeas.v1.IAttestationOccurrence|null);

            /** Occurrence upgrade. */
            public upgrade?: (grafeas.v1.IUpgradeOccurrence|null);

            /** Occurrence compliance. */
            public compliance?: (grafeas.v1.IComplianceOccurrence|null);

            /** Occurrence dsseAttestation. */
            public dsseAttestation?: (grafeas.v1.IDSSEAttestationOccurrence|null);

            /** Occurrence envelope. */
            public envelope?: (grafeas.v1.IEnvelope|null);

            /** Occurrence details. */
            public details?: ("vulnerability"|"build"|"image"|"package"|"deployment"|"discovery"|"attestation"|"upgrade"|"compliance"|"dsseAttestation");

            /**
             * Creates a new Occurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Occurrence instance
             */
            public static create(properties?: grafeas.v1.IOccurrence): grafeas.v1.Occurrence;

            /**
             * Encodes the specified Occurrence message. Does not implicitly {@link grafeas.v1.Occurrence.verify|verify} messages.
             * @param message Occurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Occurrence message, length delimited. Does not implicitly {@link grafeas.v1.Occurrence.verify|verify} messages.
             * @param message Occurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Occurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Occurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Occurrence;

            /**
             * Decodes an Occurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Occurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Occurrence;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Occurrence;

            /**
             * Creates a plain object from an Occurrence message. Also converts values to other types if specified.
             * @param message Occurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Occurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Occurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            kind?: (grafeas.v1.NoteKind|keyof typeof grafeas.v1.NoteKind|null);

            /** Note relatedUrl */
            relatedUrl?: (grafeas.v1.IRelatedUrl[]|null);

            /** Note expirationTime */
            expirationTime?: (google.protobuf.ITimestamp|null);

            /** Note createTime */
            createTime?: (google.protobuf.ITimestamp|null);

            /** Note updateTime */
            updateTime?: (google.protobuf.ITimestamp|null);

            /** Note relatedNoteNames */
            relatedNoteNames?: (string[]|null);

            /** Note vulnerability */
            vulnerability?: (grafeas.v1.IVulnerabilityNote|null);

            /** Note build */
            build?: (grafeas.v1.IBuildNote|null);

            /** Note image */
            image?: (grafeas.v1.IImageNote|null);

            /** Note package */
            "package"?: (grafeas.v1.IPackageNote|null);

            /** Note deployment */
            deployment?: (grafeas.v1.IDeploymentNote|null);

            /** Note discovery */
            discovery?: (grafeas.v1.IDiscoveryNote|null);

            /** Note attestation */
            attestation?: (grafeas.v1.IAttestationNote|null);

            /** Note upgrade */
            upgrade?: (grafeas.v1.IUpgradeNote|null);

            /** Note compliance */
            compliance?: (grafeas.v1.IComplianceNote|null);

            /** Note dsseAttestation */
            dsseAttestation?: (grafeas.v1.IDSSEAttestationNote|null);
        }

        /** Represents a Note. */
        class Note implements INote {

            /**
             * Constructs a new Note.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.INote);

            /** Note name. */
            public name: string;

            /** Note shortDescription. */
            public shortDescription: string;

            /** Note longDescription. */
            public longDescription: string;

            /** Note kind. */
            public kind: (grafeas.v1.NoteKind|keyof typeof grafeas.v1.NoteKind);

            /** Note relatedUrl. */
            public relatedUrl: grafeas.v1.IRelatedUrl[];

            /** Note expirationTime. */
            public expirationTime?: (google.protobuf.ITimestamp|null);

            /** Note createTime. */
            public createTime?: (google.protobuf.ITimestamp|null);

            /** Note updateTime. */
            public updateTime?: (google.protobuf.ITimestamp|null);

            /** Note relatedNoteNames. */
            public relatedNoteNames: string[];

            /** Note vulnerability. */
            public vulnerability?: (grafeas.v1.IVulnerabilityNote|null);

            /** Note build. */
            public build?: (grafeas.v1.IBuildNote|null);

            /** Note image. */
            public image?: (grafeas.v1.IImageNote|null);

            /** Note package. */
            public package?: (grafeas.v1.IPackageNote|null);

            /** Note deployment. */
            public deployment?: (grafeas.v1.IDeploymentNote|null);

            /** Note discovery. */
            public discovery?: (grafeas.v1.IDiscoveryNote|null);

            /** Note attestation. */
            public attestation?: (grafeas.v1.IAttestationNote|null);

            /** Note upgrade. */
            public upgrade?: (grafeas.v1.IUpgradeNote|null);

            /** Note compliance. */
            public compliance?: (grafeas.v1.IComplianceNote|null);

            /** Note dsseAttestation. */
            public dsseAttestation?: (grafeas.v1.IDSSEAttestationNote|null);

            /** Note type. */
            public type?: ("vulnerability"|"build"|"image"|"package"|"deployment"|"discovery"|"attestation"|"upgrade"|"compliance"|"dsseAttestation");

            /**
             * Creates a new Note instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Note instance
             */
            public static create(properties?: grafeas.v1.INote): grafeas.v1.Note;

            /**
             * Encodes the specified Note message. Does not implicitly {@link grafeas.v1.Note.verify|verify} messages.
             * @param message Note message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.INote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Note message, length delimited. Does not implicitly {@link grafeas.v1.Note.verify|verify} messages.
             * @param message Note message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.INote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Note message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Note
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Note;

            /**
             * Decodes a Note message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Note
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Note;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Note;

            /**
             * Creates a plain object from a Note message. Also converts values to other types if specified.
             * @param message Note
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Note, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Note to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IGetOccurrenceRequest);

            /** GetOccurrenceRequest name. */
            public name: string;

            /**
             * Creates a new GetOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1.IGetOccurrenceRequest): grafeas.v1.GetOccurrenceRequest;

            /**
             * Encodes the specified GetOccurrenceRequest message. Does not implicitly {@link grafeas.v1.GetOccurrenceRequest.verify|verify} messages.
             * @param message GetOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IGetOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1.GetOccurrenceRequest.verify|verify} messages.
             * @param message GetOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IGetOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.GetOccurrenceRequest;

            /**
             * Decodes a GetOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.GetOccurrenceRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.GetOccurrenceRequest;

            /**
             * Creates a plain object from a GetOccurrenceRequest message. Also converts values to other types if specified.
             * @param message GetOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.GetOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IListOccurrencesRequest);

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
            public static create(properties?: grafeas.v1.IListOccurrencesRequest): grafeas.v1.ListOccurrencesRequest;

            /**
             * Encodes the specified ListOccurrencesRequest message. Does not implicitly {@link grafeas.v1.ListOccurrencesRequest.verify|verify} messages.
             * @param message ListOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IListOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOccurrencesRequest message, length delimited. Does not implicitly {@link grafeas.v1.ListOccurrencesRequest.verify|verify} messages.
             * @param message ListOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IListOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOccurrencesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ListOccurrencesRequest;

            /**
             * Decodes a ListOccurrencesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ListOccurrencesRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ListOccurrencesRequest;

            /**
             * Creates a plain object from a ListOccurrencesRequest message. Also converts values to other types if specified.
             * @param message ListOccurrencesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ListOccurrencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOccurrencesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOccurrencesResponse. */
        interface IListOccurrencesResponse {

            /** ListOccurrencesResponse occurrences */
            occurrences?: (grafeas.v1.IOccurrence[]|null);

            /** ListOccurrencesResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOccurrencesResponse. */
        class ListOccurrencesResponse implements IListOccurrencesResponse {

            /**
             * Constructs a new ListOccurrencesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IListOccurrencesResponse);

            /** ListOccurrencesResponse occurrences. */
            public occurrences: grafeas.v1.IOccurrence[];

            /** ListOccurrencesResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOccurrencesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOccurrencesResponse instance
             */
            public static create(properties?: grafeas.v1.IListOccurrencesResponse): grafeas.v1.ListOccurrencesResponse;

            /**
             * Encodes the specified ListOccurrencesResponse message. Does not implicitly {@link grafeas.v1.ListOccurrencesResponse.verify|verify} messages.
             * @param message ListOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IListOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOccurrencesResponse message, length delimited. Does not implicitly {@link grafeas.v1.ListOccurrencesResponse.verify|verify} messages.
             * @param message ListOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IListOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOccurrencesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ListOccurrencesResponse;

            /**
             * Decodes a ListOccurrencesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ListOccurrencesResponse;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ListOccurrencesResponse;

            /**
             * Creates a plain object from a ListOccurrencesResponse message. Also converts values to other types if specified.
             * @param message ListOccurrencesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ListOccurrencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOccurrencesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IDeleteOccurrenceRequest);

            /** DeleteOccurrenceRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1.IDeleteOccurrenceRequest): grafeas.v1.DeleteOccurrenceRequest;

            /**
             * Encodes the specified DeleteOccurrenceRequest message. Does not implicitly {@link grafeas.v1.DeleteOccurrenceRequest.verify|verify} messages.
             * @param message DeleteOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDeleteOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1.DeleteOccurrenceRequest.verify|verify} messages.
             * @param message DeleteOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDeleteOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DeleteOccurrenceRequest;

            /**
             * Decodes a DeleteOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DeleteOccurrenceRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DeleteOccurrenceRequest;

            /**
             * Creates a plain object from a DeleteOccurrenceRequest message. Also converts values to other types if specified.
             * @param message DeleteOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DeleteOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateOccurrenceRequest. */
        interface ICreateOccurrenceRequest {

            /** CreateOccurrenceRequest parent */
            parent?: (string|null);

            /** CreateOccurrenceRequest occurrence */
            occurrence?: (grafeas.v1.IOccurrence|null);
        }

        /** Represents a CreateOccurrenceRequest. */
        class CreateOccurrenceRequest implements ICreateOccurrenceRequest {

            /**
             * Constructs a new CreateOccurrenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ICreateOccurrenceRequest);

            /** CreateOccurrenceRequest parent. */
            public parent: string;

            /** CreateOccurrenceRequest occurrence. */
            public occurrence?: (grafeas.v1.IOccurrence|null);

            /**
             * Creates a new CreateOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1.ICreateOccurrenceRequest): grafeas.v1.CreateOccurrenceRequest;

            /**
             * Encodes the specified CreateOccurrenceRequest message. Does not implicitly {@link grafeas.v1.CreateOccurrenceRequest.verify|verify} messages.
             * @param message CreateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICreateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1.CreateOccurrenceRequest.verify|verify} messages.
             * @param message CreateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICreateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.CreateOccurrenceRequest;

            /**
             * Decodes a CreateOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.CreateOccurrenceRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.CreateOccurrenceRequest;

            /**
             * Creates a plain object from a CreateOccurrenceRequest message. Also converts values to other types if specified.
             * @param message CreateOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.CreateOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateOccurrenceRequest. */
        interface IUpdateOccurrenceRequest {

            /** UpdateOccurrenceRequest name */
            name?: (string|null);

            /** UpdateOccurrenceRequest occurrence */
            occurrence?: (grafeas.v1.IOccurrence|null);

            /** UpdateOccurrenceRequest updateMask */
            updateMask?: (google.protobuf.IFieldMask|null);
        }

        /** Represents an UpdateOccurrenceRequest. */
        class UpdateOccurrenceRequest implements IUpdateOccurrenceRequest {

            /**
             * Constructs a new UpdateOccurrenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IUpdateOccurrenceRequest);

            /** UpdateOccurrenceRequest name. */
            public name: string;

            /** UpdateOccurrenceRequest occurrence. */
            public occurrence?: (grafeas.v1.IOccurrence|null);

            /** UpdateOccurrenceRequest updateMask. */
            public updateMask?: (google.protobuf.IFieldMask|null);

            /**
             * Creates a new UpdateOccurrenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateOccurrenceRequest instance
             */
            public static create(properties?: grafeas.v1.IUpdateOccurrenceRequest): grafeas.v1.UpdateOccurrenceRequest;

            /**
             * Encodes the specified UpdateOccurrenceRequest message. Does not implicitly {@link grafeas.v1.UpdateOccurrenceRequest.verify|verify} messages.
             * @param message UpdateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IUpdateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateOccurrenceRequest message, length delimited. Does not implicitly {@link grafeas.v1.UpdateOccurrenceRequest.verify|verify} messages.
             * @param message UpdateOccurrenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IUpdateOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateOccurrenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.UpdateOccurrenceRequest;

            /**
             * Decodes an UpdateOccurrenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateOccurrenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.UpdateOccurrenceRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.UpdateOccurrenceRequest;

            /**
             * Creates a plain object from an UpdateOccurrenceRequest message. Also converts values to other types if specified.
             * @param message UpdateOccurrenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.UpdateOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateOccurrenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IGetNoteRequest);

            /** GetNoteRequest name. */
            public name: string;

            /**
             * Creates a new GetNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetNoteRequest instance
             */
            public static create(properties?: grafeas.v1.IGetNoteRequest): grafeas.v1.GetNoteRequest;

            /**
             * Encodes the specified GetNoteRequest message. Does not implicitly {@link grafeas.v1.GetNoteRequest.verify|verify} messages.
             * @param message GetNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IGetNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1.GetNoteRequest.verify|verify} messages.
             * @param message GetNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IGetNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.GetNoteRequest;

            /**
             * Decodes a GetNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.GetNoteRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.GetNoteRequest;

            /**
             * Creates a plain object from a GetNoteRequest message. Also converts values to other types if specified.
             * @param message GetNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.GetNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IGetOccurrenceNoteRequest);

            /** GetOccurrenceNoteRequest name. */
            public name: string;

            /**
             * Creates a new GetOccurrenceNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOccurrenceNoteRequest instance
             */
            public static create(properties?: grafeas.v1.IGetOccurrenceNoteRequest): grafeas.v1.GetOccurrenceNoteRequest;

            /**
             * Encodes the specified GetOccurrenceNoteRequest message. Does not implicitly {@link grafeas.v1.GetOccurrenceNoteRequest.verify|verify} messages.
             * @param message GetOccurrenceNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IGetOccurrenceNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOccurrenceNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1.GetOccurrenceNoteRequest.verify|verify} messages.
             * @param message GetOccurrenceNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IGetOccurrenceNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOccurrenceNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOccurrenceNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.GetOccurrenceNoteRequest;

            /**
             * Decodes a GetOccurrenceNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOccurrenceNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.GetOccurrenceNoteRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.GetOccurrenceNoteRequest;

            /**
             * Creates a plain object from a GetOccurrenceNoteRequest message. Also converts values to other types if specified.
             * @param message GetOccurrenceNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.GetOccurrenceNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOccurrenceNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IListNotesRequest);

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
            public static create(properties?: grafeas.v1.IListNotesRequest): grafeas.v1.ListNotesRequest;

            /**
             * Encodes the specified ListNotesRequest message. Does not implicitly {@link grafeas.v1.ListNotesRequest.verify|verify} messages.
             * @param message ListNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IListNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNotesRequest message, length delimited. Does not implicitly {@link grafeas.v1.ListNotesRequest.verify|verify} messages.
             * @param message ListNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IListNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNotesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ListNotesRequest;

            /**
             * Decodes a ListNotesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ListNotesRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ListNotesRequest;

            /**
             * Creates a plain object from a ListNotesRequest message. Also converts values to other types if specified.
             * @param message ListNotesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ListNotesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNotesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListNotesResponse. */
        interface IListNotesResponse {

            /** ListNotesResponse notes */
            notes?: (grafeas.v1.INote[]|null);

            /** ListNotesResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListNotesResponse. */
        class ListNotesResponse implements IListNotesResponse {

            /**
             * Constructs a new ListNotesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IListNotesResponse);

            /** ListNotesResponse notes. */
            public notes: grafeas.v1.INote[];

            /** ListNotesResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListNotesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListNotesResponse instance
             */
            public static create(properties?: grafeas.v1.IListNotesResponse): grafeas.v1.ListNotesResponse;

            /**
             * Encodes the specified ListNotesResponse message. Does not implicitly {@link grafeas.v1.ListNotesResponse.verify|verify} messages.
             * @param message ListNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IListNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNotesResponse message, length delimited. Does not implicitly {@link grafeas.v1.ListNotesResponse.verify|verify} messages.
             * @param message ListNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IListNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNotesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ListNotesResponse;

            /**
             * Decodes a ListNotesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ListNotesResponse;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ListNotesResponse;

            /**
             * Creates a plain object from a ListNotesResponse message. Also converts values to other types if specified.
             * @param message ListNotesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ListNotesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNotesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IDeleteNoteRequest);

            /** DeleteNoteRequest name. */
            public name: string;

            /**
             * Creates a new DeleteNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteNoteRequest instance
             */
            public static create(properties?: grafeas.v1.IDeleteNoteRequest): grafeas.v1.DeleteNoteRequest;

            /**
             * Encodes the specified DeleteNoteRequest message. Does not implicitly {@link grafeas.v1.DeleteNoteRequest.verify|verify} messages.
             * @param message DeleteNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDeleteNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1.DeleteNoteRequest.verify|verify} messages.
             * @param message DeleteNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDeleteNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.DeleteNoteRequest;

            /**
             * Decodes a DeleteNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.DeleteNoteRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.DeleteNoteRequest;

            /**
             * Creates a plain object from a DeleteNoteRequest message. Also converts values to other types if specified.
             * @param message DeleteNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.DeleteNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateNoteRequest. */
        interface ICreateNoteRequest {

            /** CreateNoteRequest parent */
            parent?: (string|null);

            /** CreateNoteRequest noteId */
            noteId?: (string|null);

            /** CreateNoteRequest note */
            note?: (grafeas.v1.INote|null);
        }

        /** Represents a CreateNoteRequest. */
        class CreateNoteRequest implements ICreateNoteRequest {

            /**
             * Constructs a new CreateNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ICreateNoteRequest);

            /** CreateNoteRequest parent. */
            public parent: string;

            /** CreateNoteRequest noteId. */
            public noteId: string;

            /** CreateNoteRequest note. */
            public note?: (grafeas.v1.INote|null);

            /**
             * Creates a new CreateNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateNoteRequest instance
             */
            public static create(properties?: grafeas.v1.ICreateNoteRequest): grafeas.v1.CreateNoteRequest;

            /**
             * Encodes the specified CreateNoteRequest message. Does not implicitly {@link grafeas.v1.CreateNoteRequest.verify|verify} messages.
             * @param message CreateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ICreateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1.CreateNoteRequest.verify|verify} messages.
             * @param message CreateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ICreateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.CreateNoteRequest;

            /**
             * Decodes a CreateNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.CreateNoteRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.CreateNoteRequest;

            /**
             * Creates a plain object from a CreateNoteRequest message. Also converts values to other types if specified.
             * @param message CreateNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.CreateNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateNoteRequest. */
        interface IUpdateNoteRequest {

            /** UpdateNoteRequest name */
            name?: (string|null);

            /** UpdateNoteRequest note */
            note?: (grafeas.v1.INote|null);

            /** UpdateNoteRequest updateMask */
            updateMask?: (google.protobuf.IFieldMask|null);
        }

        /** Represents an UpdateNoteRequest. */
        class UpdateNoteRequest implements IUpdateNoteRequest {

            /**
             * Constructs a new UpdateNoteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IUpdateNoteRequest);

            /** UpdateNoteRequest name. */
            public name: string;

            /** UpdateNoteRequest note. */
            public note?: (grafeas.v1.INote|null);

            /** UpdateNoteRequest updateMask. */
            public updateMask?: (google.protobuf.IFieldMask|null);

            /**
             * Creates a new UpdateNoteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateNoteRequest instance
             */
            public static create(properties?: grafeas.v1.IUpdateNoteRequest): grafeas.v1.UpdateNoteRequest;

            /**
             * Encodes the specified UpdateNoteRequest message. Does not implicitly {@link grafeas.v1.UpdateNoteRequest.verify|verify} messages.
             * @param message UpdateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IUpdateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateNoteRequest message, length delimited. Does not implicitly {@link grafeas.v1.UpdateNoteRequest.verify|verify} messages.
             * @param message UpdateNoteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IUpdateNoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateNoteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.UpdateNoteRequest;

            /**
             * Decodes an UpdateNoteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateNoteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.UpdateNoteRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.UpdateNoteRequest;

            /**
             * Creates a plain object from an UpdateNoteRequest message. Also converts values to other types if specified.
             * @param message UpdateNoteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.UpdateNoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateNoteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IListNoteOccurrencesRequest);

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
            public static create(properties?: grafeas.v1.IListNoteOccurrencesRequest): grafeas.v1.ListNoteOccurrencesRequest;

            /**
             * Encodes the specified ListNoteOccurrencesRequest message. Does not implicitly {@link grafeas.v1.ListNoteOccurrencesRequest.verify|verify} messages.
             * @param message ListNoteOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IListNoteOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNoteOccurrencesRequest message, length delimited. Does not implicitly {@link grafeas.v1.ListNoteOccurrencesRequest.verify|verify} messages.
             * @param message ListNoteOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IListNoteOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNoteOccurrencesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNoteOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ListNoteOccurrencesRequest;

            /**
             * Decodes a ListNoteOccurrencesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNoteOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ListNoteOccurrencesRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ListNoteOccurrencesRequest;

            /**
             * Creates a plain object from a ListNoteOccurrencesRequest message. Also converts values to other types if specified.
             * @param message ListNoteOccurrencesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ListNoteOccurrencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNoteOccurrencesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListNoteOccurrencesResponse. */
        interface IListNoteOccurrencesResponse {

            /** ListNoteOccurrencesResponse occurrences */
            occurrences?: (grafeas.v1.IOccurrence[]|null);

            /** ListNoteOccurrencesResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListNoteOccurrencesResponse. */
        class ListNoteOccurrencesResponse implements IListNoteOccurrencesResponse {

            /**
             * Constructs a new ListNoteOccurrencesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IListNoteOccurrencesResponse);

            /** ListNoteOccurrencesResponse occurrences. */
            public occurrences: grafeas.v1.IOccurrence[];

            /** ListNoteOccurrencesResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListNoteOccurrencesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListNoteOccurrencesResponse instance
             */
            public static create(properties?: grafeas.v1.IListNoteOccurrencesResponse): grafeas.v1.ListNoteOccurrencesResponse;

            /**
             * Encodes the specified ListNoteOccurrencesResponse message. Does not implicitly {@link grafeas.v1.ListNoteOccurrencesResponse.verify|verify} messages.
             * @param message ListNoteOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IListNoteOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListNoteOccurrencesResponse message, length delimited. Does not implicitly {@link grafeas.v1.ListNoteOccurrencesResponse.verify|verify} messages.
             * @param message ListNoteOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IListNoteOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListNoteOccurrencesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListNoteOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ListNoteOccurrencesResponse;

            /**
             * Decodes a ListNoteOccurrencesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListNoteOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ListNoteOccurrencesResponse;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ListNoteOccurrencesResponse;

            /**
             * Creates a plain object from a ListNoteOccurrencesResponse message. Also converts values to other types if specified.
             * @param message ListNoteOccurrencesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ListNoteOccurrencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListNoteOccurrencesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateNotesRequest. */
        interface IBatchCreateNotesRequest {

            /** BatchCreateNotesRequest parent */
            parent?: (string|null);

            /** BatchCreateNotesRequest notes */
            notes?: ({ [k: string]: grafeas.v1.INote }|null);
        }

        /** Represents a BatchCreateNotesRequest. */
        class BatchCreateNotesRequest implements IBatchCreateNotesRequest {

            /**
             * Constructs a new BatchCreateNotesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBatchCreateNotesRequest);

            /** BatchCreateNotesRequest parent. */
            public parent: string;

            /** BatchCreateNotesRequest notes. */
            public notes: { [k: string]: grafeas.v1.INote };

            /**
             * Creates a new BatchCreateNotesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateNotesRequest instance
             */
            public static create(properties?: grafeas.v1.IBatchCreateNotesRequest): grafeas.v1.BatchCreateNotesRequest;

            /**
             * Encodes the specified BatchCreateNotesRequest message. Does not implicitly {@link grafeas.v1.BatchCreateNotesRequest.verify|verify} messages.
             * @param message BatchCreateNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBatchCreateNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateNotesRequest message, length delimited. Does not implicitly {@link grafeas.v1.BatchCreateNotesRequest.verify|verify} messages.
             * @param message BatchCreateNotesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBatchCreateNotesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateNotesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BatchCreateNotesRequest;

            /**
             * Decodes a BatchCreateNotesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateNotesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BatchCreateNotesRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BatchCreateNotesRequest;

            /**
             * Creates a plain object from a BatchCreateNotesRequest message. Also converts values to other types if specified.
             * @param message BatchCreateNotesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BatchCreateNotesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateNotesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateNotesResponse. */
        interface IBatchCreateNotesResponse {

            /** BatchCreateNotesResponse notes */
            notes?: (grafeas.v1.INote[]|null);
        }

        /** Represents a BatchCreateNotesResponse. */
        class BatchCreateNotesResponse implements IBatchCreateNotesResponse {

            /**
             * Constructs a new BatchCreateNotesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBatchCreateNotesResponse);

            /** BatchCreateNotesResponse notes. */
            public notes: grafeas.v1.INote[];

            /**
             * Creates a new BatchCreateNotesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateNotesResponse instance
             */
            public static create(properties?: grafeas.v1.IBatchCreateNotesResponse): grafeas.v1.BatchCreateNotesResponse;

            /**
             * Encodes the specified BatchCreateNotesResponse message. Does not implicitly {@link grafeas.v1.BatchCreateNotesResponse.verify|verify} messages.
             * @param message BatchCreateNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBatchCreateNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateNotesResponse message, length delimited. Does not implicitly {@link grafeas.v1.BatchCreateNotesResponse.verify|verify} messages.
             * @param message BatchCreateNotesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBatchCreateNotesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateNotesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BatchCreateNotesResponse;

            /**
             * Decodes a BatchCreateNotesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateNotesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BatchCreateNotesResponse;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BatchCreateNotesResponse;

            /**
             * Creates a plain object from a BatchCreateNotesResponse message. Also converts values to other types if specified.
             * @param message BatchCreateNotesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BatchCreateNotesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateNotesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateOccurrencesRequest. */
        interface IBatchCreateOccurrencesRequest {

            /** BatchCreateOccurrencesRequest parent */
            parent?: (string|null);

            /** BatchCreateOccurrencesRequest occurrences */
            occurrences?: (grafeas.v1.IOccurrence[]|null);
        }

        /** Represents a BatchCreateOccurrencesRequest. */
        class BatchCreateOccurrencesRequest implements IBatchCreateOccurrencesRequest {

            /**
             * Constructs a new BatchCreateOccurrencesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBatchCreateOccurrencesRequest);

            /** BatchCreateOccurrencesRequest parent. */
            public parent: string;

            /** BatchCreateOccurrencesRequest occurrences. */
            public occurrences: grafeas.v1.IOccurrence[];

            /**
             * Creates a new BatchCreateOccurrencesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateOccurrencesRequest instance
             */
            public static create(properties?: grafeas.v1.IBatchCreateOccurrencesRequest): grafeas.v1.BatchCreateOccurrencesRequest;

            /**
             * Encodes the specified BatchCreateOccurrencesRequest message. Does not implicitly {@link grafeas.v1.BatchCreateOccurrencesRequest.verify|verify} messages.
             * @param message BatchCreateOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBatchCreateOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateOccurrencesRequest message, length delimited. Does not implicitly {@link grafeas.v1.BatchCreateOccurrencesRequest.verify|verify} messages.
             * @param message BatchCreateOccurrencesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBatchCreateOccurrencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateOccurrencesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BatchCreateOccurrencesRequest;

            /**
             * Decodes a BatchCreateOccurrencesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateOccurrencesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BatchCreateOccurrencesRequest;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BatchCreateOccurrencesRequest;

            /**
             * Creates a plain object from a BatchCreateOccurrencesRequest message. Also converts values to other types if specified.
             * @param message BatchCreateOccurrencesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BatchCreateOccurrencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateOccurrencesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateOccurrencesResponse. */
        interface IBatchCreateOccurrencesResponse {

            /** BatchCreateOccurrencesResponse occurrences */
            occurrences?: (grafeas.v1.IOccurrence[]|null);
        }

        /** Represents a BatchCreateOccurrencesResponse. */
        class BatchCreateOccurrencesResponse implements IBatchCreateOccurrencesResponse {

            /**
             * Constructs a new BatchCreateOccurrencesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBatchCreateOccurrencesResponse);

            /** BatchCreateOccurrencesResponse occurrences. */
            public occurrences: grafeas.v1.IOccurrence[];

            /**
             * Creates a new BatchCreateOccurrencesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateOccurrencesResponse instance
             */
            public static create(properties?: grafeas.v1.IBatchCreateOccurrencesResponse): grafeas.v1.BatchCreateOccurrencesResponse;

            /**
             * Encodes the specified BatchCreateOccurrencesResponse message. Does not implicitly {@link grafeas.v1.BatchCreateOccurrencesResponse.verify|verify} messages.
             * @param message BatchCreateOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBatchCreateOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateOccurrencesResponse message, length delimited. Does not implicitly {@link grafeas.v1.BatchCreateOccurrencesResponse.verify|verify} messages.
             * @param message BatchCreateOccurrencesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBatchCreateOccurrencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateOccurrencesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BatchCreateOccurrencesResponse;

            /**
             * Decodes a BatchCreateOccurrencesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateOccurrencesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BatchCreateOccurrencesResponse;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BatchCreateOccurrencesResponse;

            /**
             * Creates a plain object from a BatchCreateOccurrencesResponse message. Also converts values to other types if specified.
             * @param message BatchCreateOccurrencesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BatchCreateOccurrencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateOccurrencesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Layer. */
        interface ILayer {

            /** Layer directive */
            directive?: (string|null);

            /** Layer arguments */
            "arguments"?: (string|null);
        }

        /** Represents a Layer. */
        class Layer implements ILayer {

            /**
             * Constructs a new Layer.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ILayer);

            /** Layer directive. */
            public directive: string;

            /** Layer arguments. */
            public arguments: string;

            /**
             * Creates a new Layer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Layer instance
             */
            public static create(properties?: grafeas.v1.ILayer): grafeas.v1.Layer;

            /**
             * Encodes the specified Layer message. Does not implicitly {@link grafeas.v1.Layer.verify|verify} messages.
             * @param message Layer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Layer message, length delimited. Does not implicitly {@link grafeas.v1.Layer.verify|verify} messages.
             * @param message Layer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ILayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Layer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Layer;

            /**
             * Decodes a Layer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Layer;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Layer;

            /**
             * Creates a plain object from a Layer message. Also converts values to other types if specified.
             * @param message Layer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Layer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(properties?: grafeas.v1.IFingerprint);

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
            public static create(properties?: grafeas.v1.IFingerprint): grafeas.v1.Fingerprint;

            /**
             * Encodes the specified Fingerprint message. Does not implicitly {@link grafeas.v1.Fingerprint.verify|verify} messages.
             * @param message Fingerprint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Fingerprint message, length delimited. Does not implicitly {@link grafeas.v1.Fingerprint.verify|verify} messages.
             * @param message Fingerprint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Fingerprint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Fingerprint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Fingerprint;

            /**
             * Decodes a Fingerprint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Fingerprint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Fingerprint;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Fingerprint;

            /**
             * Creates a plain object from a Fingerprint message. Also converts values to other types if specified.
             * @param message Fingerprint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Fingerprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Fingerprint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ImageNote. */
        interface IImageNote {

            /** ImageNote resourceUrl */
            resourceUrl?: (string|null);

            /** ImageNote fingerprint */
            fingerprint?: (grafeas.v1.IFingerprint|null);
        }

        /** Represents an ImageNote. */
        class ImageNote implements IImageNote {

            /**
             * Constructs a new ImageNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IImageNote);

            /** ImageNote resourceUrl. */
            public resourceUrl: string;

            /** ImageNote fingerprint. */
            public fingerprint?: (grafeas.v1.IFingerprint|null);

            /**
             * Creates a new ImageNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImageNote instance
             */
            public static create(properties?: grafeas.v1.IImageNote): grafeas.v1.ImageNote;

            /**
             * Encodes the specified ImageNote message. Does not implicitly {@link grafeas.v1.ImageNote.verify|verify} messages.
             * @param message ImageNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IImageNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImageNote message, length delimited. Does not implicitly {@link grafeas.v1.ImageNote.verify|verify} messages.
             * @param message ImageNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IImageNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImageNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImageNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ImageNote;

            /**
             * Decodes an ImageNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImageNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ImageNote;

            /**
             * Verifies an ImageNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImageNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImageNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ImageNote;

            /**
             * Creates a plain object from an ImageNote message. Also converts values to other types if specified.
             * @param message ImageNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ImageNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImageNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ImageOccurrence. */
        interface IImageOccurrence {

            /** ImageOccurrence fingerprint */
            fingerprint?: (grafeas.v1.IFingerprint|null);

            /** ImageOccurrence distance */
            distance?: (number|null);

            /** ImageOccurrence layerInfo */
            layerInfo?: (grafeas.v1.ILayer[]|null);

            /** ImageOccurrence baseResourceUrl */
            baseResourceUrl?: (string|null);
        }

        /** Represents an ImageOccurrence. */
        class ImageOccurrence implements IImageOccurrence {

            /**
             * Constructs a new ImageOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IImageOccurrence);

            /** ImageOccurrence fingerprint. */
            public fingerprint?: (grafeas.v1.IFingerprint|null);

            /** ImageOccurrence distance. */
            public distance: number;

            /** ImageOccurrence layerInfo. */
            public layerInfo: grafeas.v1.ILayer[];

            /** ImageOccurrence baseResourceUrl. */
            public baseResourceUrl: string;

            /**
             * Creates a new ImageOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImageOccurrence instance
             */
            public static create(properties?: grafeas.v1.IImageOccurrence): grafeas.v1.ImageOccurrence;

            /**
             * Encodes the specified ImageOccurrence message. Does not implicitly {@link grafeas.v1.ImageOccurrence.verify|verify} messages.
             * @param message ImageOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IImageOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImageOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.ImageOccurrence.verify|verify} messages.
             * @param message ImageOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IImageOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImageOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImageOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.ImageOccurrence;

            /**
             * Decodes an ImageOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImageOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.ImageOccurrence;

            /**
             * Verifies an ImageOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImageOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImageOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.ImageOccurrence;

            /**
             * Creates a plain object from an ImageOccurrence message. Also converts values to other types if specified.
             * @param message ImageOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.ImageOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImageOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

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
            architecture?: (grafeas.v1.Architecture|keyof typeof grafeas.v1.Architecture|null);

            /** Distribution latestVersion */
            latestVersion?: (grafeas.v1.IVersion|null);

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
            constructor(properties?: grafeas.v1.IDistribution);

            /** Distribution cpeUri. */
            public cpeUri: string;

            /** Distribution architecture. */
            public architecture: (grafeas.v1.Architecture|keyof typeof grafeas.v1.Architecture);

            /** Distribution latestVersion. */
            public latestVersion?: (grafeas.v1.IVersion|null);

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
            public static create(properties?: grafeas.v1.IDistribution): grafeas.v1.Distribution;

            /**
             * Encodes the specified Distribution message. Does not implicitly {@link grafeas.v1.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Distribution message, length delimited. Does not implicitly {@link grafeas.v1.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Distribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Distribution;

            /**
             * Decodes a Distribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Distribution;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Distribution;

            /**
             * Creates a plain object from a Distribution message. Also converts values to other types if specified.
             * @param message Distribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Distribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Distribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Location. */
        interface ILocation {

            /** Location cpeUri */
            cpeUri?: (string|null);

            /** Location version */
            version?: (grafeas.v1.IVersion|null);

            /** Location path */
            path?: (string|null);
        }

        /** Represents a Location. */
        class Location implements ILocation {

            /**
             * Constructs a new Location.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ILocation);

            /** Location cpeUri. */
            public cpeUri: string;

            /** Location version. */
            public version?: (grafeas.v1.IVersion|null);

            /** Location path. */
            public path: string;

            /**
             * Creates a new Location instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Location instance
             */
            public static create(properties?: grafeas.v1.ILocation): grafeas.v1.Location;

            /**
             * Encodes the specified Location message. Does not implicitly {@link grafeas.v1.Location.verify|verify} messages.
             * @param message Location message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Location message, length delimited. Does not implicitly {@link grafeas.v1.Location.verify|verify} messages.
             * @param message Location message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Location message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Location;

            /**
             * Decodes a Location message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Location;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Location;

            /**
             * Creates a plain object from a Location message. Also converts values to other types if specified.
             * @param message Location
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Location to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PackageNote. */
        interface IPackageNote {

            /** PackageNote name */
            name?: (string|null);

            /** PackageNote distribution */
            distribution?: (grafeas.v1.IDistribution[]|null);
        }

        /** Represents a PackageNote. */
        class PackageNote implements IPackageNote {

            /**
             * Constructs a new PackageNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IPackageNote);

            /** PackageNote name. */
            public name: string;

            /** PackageNote distribution. */
            public distribution: grafeas.v1.IDistribution[];

            /**
             * Creates a new PackageNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PackageNote instance
             */
            public static create(properties?: grafeas.v1.IPackageNote): grafeas.v1.PackageNote;

            /**
             * Encodes the specified PackageNote message. Does not implicitly {@link grafeas.v1.PackageNote.verify|verify} messages.
             * @param message PackageNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IPackageNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PackageNote message, length delimited. Does not implicitly {@link grafeas.v1.PackageNote.verify|verify} messages.
             * @param message PackageNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IPackageNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PackageNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PackageNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.PackageNote;

            /**
             * Decodes a PackageNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PackageNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.PackageNote;

            /**
             * Verifies a PackageNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PackageNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PackageNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.PackageNote;

            /**
             * Creates a plain object from a PackageNote message. Also converts values to other types if specified.
             * @param message PackageNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.PackageNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PackageNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PackageOccurrence. */
        interface IPackageOccurrence {

            /** PackageOccurrence name */
            name?: (string|null);

            /** PackageOccurrence location */
            location?: (grafeas.v1.ILocation[]|null);
        }

        /** Represents a PackageOccurrence. */
        class PackageOccurrence implements IPackageOccurrence {

            /**
             * Constructs a new PackageOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IPackageOccurrence);

            /** PackageOccurrence name. */
            public name: string;

            /** PackageOccurrence location. */
            public location: grafeas.v1.ILocation[];

            /**
             * Creates a new PackageOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PackageOccurrence instance
             */
            public static create(properties?: grafeas.v1.IPackageOccurrence): grafeas.v1.PackageOccurrence;

            /**
             * Encodes the specified PackageOccurrence message. Does not implicitly {@link grafeas.v1.PackageOccurrence.verify|verify} messages.
             * @param message PackageOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IPackageOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PackageOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.PackageOccurrence.verify|verify} messages.
             * @param message PackageOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IPackageOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PackageOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PackageOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.PackageOccurrence;

            /**
             * Decodes a PackageOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PackageOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.PackageOccurrence;

            /**
             * Verifies a PackageOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PackageOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PackageOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.PackageOccurrence;

            /**
             * Creates a plain object from a PackageOccurrence message. Also converts values to other types if specified.
             * @param message PackageOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.PackageOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PackageOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Version. */
        interface IVersion {

            /** Version epoch */
            epoch?: (number|null);

            /** Version name */
            name?: (string|null);

            /** Version revision */
            revision?: (string|null);

            /** Version inclusive */
            inclusive?: (boolean|null);

            /** Version kind */
            kind?: (grafeas.v1.Version.VersionKind|keyof typeof grafeas.v1.Version.VersionKind|null);

            /** Version fullName */
            fullName?: (string|null);
        }

        /** Represents a Version. */
        class Version implements IVersion {

            /**
             * Constructs a new Version.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IVersion);

            /** Version epoch. */
            public epoch: number;

            /** Version name. */
            public name: string;

            /** Version revision. */
            public revision: string;

            /** Version inclusive. */
            public inclusive: boolean;

            /** Version kind. */
            public kind: (grafeas.v1.Version.VersionKind|keyof typeof grafeas.v1.Version.VersionKind);

            /** Version fullName. */
            public fullName: string;

            /**
             * Creates a new Version instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Version instance
             */
            public static create(properties?: grafeas.v1.IVersion): grafeas.v1.Version;

            /**
             * Encodes the specified Version message. Does not implicitly {@link grafeas.v1.Version.verify|verify} messages.
             * @param message Version message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Version message, length delimited. Does not implicitly {@link grafeas.v1.Version.verify|verify} messages.
             * @param message Version message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Version message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Version
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Version;

            /**
             * Decodes a Version message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Version
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Version;

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
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Version;

            /**
             * Creates a plain object from a Version message. Also converts values to other types if specified.
             * @param message Version
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Version to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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

        /** Properties of an UpgradeNote. */
        interface IUpgradeNote {

            /** UpgradeNote package */
            "package"?: (string|null);

            /** UpgradeNote version */
            version?: (grafeas.v1.IVersion|null);

            /** UpgradeNote distributions */
            distributions?: (grafeas.v1.IUpgradeDistribution[]|null);

            /** UpgradeNote windowsUpdate */
            windowsUpdate?: (grafeas.v1.IWindowsUpdate|null);
        }

        /** Represents an UpgradeNote. */
        class UpgradeNote implements IUpgradeNote {

            /**
             * Constructs a new UpgradeNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IUpgradeNote);

            /** UpgradeNote package. */
            public package: string;

            /** UpgradeNote version. */
            public version?: (grafeas.v1.IVersion|null);

            /** UpgradeNote distributions. */
            public distributions: grafeas.v1.IUpgradeDistribution[];

            /** UpgradeNote windowsUpdate. */
            public windowsUpdate?: (grafeas.v1.IWindowsUpdate|null);

            /**
             * Creates a new UpgradeNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpgradeNote instance
             */
            public static create(properties?: grafeas.v1.IUpgradeNote): grafeas.v1.UpgradeNote;

            /**
             * Encodes the specified UpgradeNote message. Does not implicitly {@link grafeas.v1.UpgradeNote.verify|verify} messages.
             * @param message UpgradeNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IUpgradeNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpgradeNote message, length delimited. Does not implicitly {@link grafeas.v1.UpgradeNote.verify|verify} messages.
             * @param message UpgradeNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IUpgradeNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpgradeNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpgradeNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.UpgradeNote;

            /**
             * Decodes an UpgradeNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpgradeNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.UpgradeNote;

            /**
             * Verifies an UpgradeNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpgradeNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpgradeNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.UpgradeNote;

            /**
             * Creates a plain object from an UpgradeNote message. Also converts values to other types if specified.
             * @param message UpgradeNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.UpgradeNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpgradeNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpgradeDistribution. */
        interface IUpgradeDistribution {

            /** UpgradeDistribution cpeUri */
            cpeUri?: (string|null);

            /** UpgradeDistribution classification */
            classification?: (string|null);

            /** UpgradeDistribution severity */
            severity?: (string|null);

            /** UpgradeDistribution cve */
            cve?: (string[]|null);
        }

        /** Represents an UpgradeDistribution. */
        class UpgradeDistribution implements IUpgradeDistribution {

            /**
             * Constructs a new UpgradeDistribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IUpgradeDistribution);

            /** UpgradeDistribution cpeUri. */
            public cpeUri: string;

            /** UpgradeDistribution classification. */
            public classification: string;

            /** UpgradeDistribution severity. */
            public severity: string;

            /** UpgradeDistribution cve. */
            public cve: string[];

            /**
             * Creates a new UpgradeDistribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpgradeDistribution instance
             */
            public static create(properties?: grafeas.v1.IUpgradeDistribution): grafeas.v1.UpgradeDistribution;

            /**
             * Encodes the specified UpgradeDistribution message. Does not implicitly {@link grafeas.v1.UpgradeDistribution.verify|verify} messages.
             * @param message UpgradeDistribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IUpgradeDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpgradeDistribution message, length delimited. Does not implicitly {@link grafeas.v1.UpgradeDistribution.verify|verify} messages.
             * @param message UpgradeDistribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IUpgradeDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpgradeDistribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpgradeDistribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.UpgradeDistribution;

            /**
             * Decodes an UpgradeDistribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpgradeDistribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.UpgradeDistribution;

            /**
             * Verifies an UpgradeDistribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpgradeDistribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpgradeDistribution
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.UpgradeDistribution;

            /**
             * Creates a plain object from an UpgradeDistribution message. Also converts values to other types if specified.
             * @param message UpgradeDistribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.UpgradeDistribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpgradeDistribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WindowsUpdate. */
        interface IWindowsUpdate {

            /** WindowsUpdate identity */
            identity?: (grafeas.v1.WindowsUpdate.IIdentity|null);

            /** WindowsUpdate title */
            title?: (string|null);

            /** WindowsUpdate description */
            description?: (string|null);

            /** WindowsUpdate categories */
            categories?: (grafeas.v1.WindowsUpdate.ICategory[]|null);

            /** WindowsUpdate kbArticleIds */
            kbArticleIds?: (string[]|null);

            /** WindowsUpdate supportUrl */
            supportUrl?: (string|null);

            /** WindowsUpdate lastPublishedTimestamp */
            lastPublishedTimestamp?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a WindowsUpdate. */
        class WindowsUpdate implements IWindowsUpdate {

            /**
             * Constructs a new WindowsUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IWindowsUpdate);

            /** WindowsUpdate identity. */
            public identity?: (grafeas.v1.WindowsUpdate.IIdentity|null);

            /** WindowsUpdate title. */
            public title: string;

            /** WindowsUpdate description. */
            public description: string;

            /** WindowsUpdate categories. */
            public categories: grafeas.v1.WindowsUpdate.ICategory[];

            /** WindowsUpdate kbArticleIds. */
            public kbArticleIds: string[];

            /** WindowsUpdate supportUrl. */
            public supportUrl: string;

            /** WindowsUpdate lastPublishedTimestamp. */
            public lastPublishedTimestamp?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new WindowsUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WindowsUpdate instance
             */
            public static create(properties?: grafeas.v1.IWindowsUpdate): grafeas.v1.WindowsUpdate;

            /**
             * Encodes the specified WindowsUpdate message. Does not implicitly {@link grafeas.v1.WindowsUpdate.verify|verify} messages.
             * @param message WindowsUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IWindowsUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WindowsUpdate message, length delimited. Does not implicitly {@link grafeas.v1.WindowsUpdate.verify|verify} messages.
             * @param message WindowsUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IWindowsUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WindowsUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WindowsUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.WindowsUpdate;

            /**
             * Decodes a WindowsUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WindowsUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.WindowsUpdate;

            /**
             * Verifies a WindowsUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WindowsUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WindowsUpdate
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.WindowsUpdate;

            /**
             * Creates a plain object from a WindowsUpdate message. Also converts values to other types if specified.
             * @param message WindowsUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.WindowsUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WindowsUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace WindowsUpdate {

            /** Properties of an Identity. */
            interface IIdentity {

                /** Identity updateId */
                updateId?: (string|null);

                /** Identity revision */
                revision?: (number|null);
            }

            /** Represents an Identity. */
            class Identity implements IIdentity {

                /**
                 * Constructs a new Identity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.WindowsUpdate.IIdentity);

                /** Identity updateId. */
                public updateId: string;

                /** Identity revision. */
                public revision: number;

                /**
                 * Creates a new Identity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Identity instance
                 */
                public static create(properties?: grafeas.v1.WindowsUpdate.IIdentity): grafeas.v1.WindowsUpdate.Identity;

                /**
                 * Encodes the specified Identity message. Does not implicitly {@link grafeas.v1.WindowsUpdate.Identity.verify|verify} messages.
                 * @param message Identity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.WindowsUpdate.IIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Identity message, length delimited. Does not implicitly {@link grafeas.v1.WindowsUpdate.Identity.verify|verify} messages.
                 * @param message Identity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.WindowsUpdate.IIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Identity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.WindowsUpdate.Identity;

                /**
                 * Decodes an Identity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.WindowsUpdate.Identity;

                /**
                 * Verifies an Identity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Identity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Identity
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.WindowsUpdate.Identity;

                /**
                 * Creates a plain object from an Identity message. Also converts values to other types if specified.
                 * @param message Identity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.WindowsUpdate.Identity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Identity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Category. */
            interface ICategory {

                /** Category categoryId */
                categoryId?: (string|null);

                /** Category name */
                name?: (string|null);
            }

            /** Represents a Category. */
            class Category implements ICategory {

                /**
                 * Constructs a new Category.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.WindowsUpdate.ICategory);

                /** Category categoryId. */
                public categoryId: string;

                /** Category name. */
                public name: string;

                /**
                 * Creates a new Category instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Category instance
                 */
                public static create(properties?: grafeas.v1.WindowsUpdate.ICategory): grafeas.v1.WindowsUpdate.Category;

                /**
                 * Encodes the specified Category message. Does not implicitly {@link grafeas.v1.WindowsUpdate.Category.verify|verify} messages.
                 * @param message Category message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.WindowsUpdate.ICategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Category message, length delimited. Does not implicitly {@link grafeas.v1.WindowsUpdate.Category.verify|verify} messages.
                 * @param message Category message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.WindowsUpdate.ICategory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Category message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Category
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.WindowsUpdate.Category;

                /**
                 * Decodes a Category message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Category
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.WindowsUpdate.Category;

                /**
                 * Verifies a Category message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Category message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Category
                 */
                public static fromObject(object: { [k: string]: any }): grafeas.v1.WindowsUpdate.Category;

                /**
                 * Creates a plain object from a Category message. Also converts values to other types if specified.
                 * @param message Category
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.WindowsUpdate.Category, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Category to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an UpgradeOccurrence. */
        interface IUpgradeOccurrence {

            /** UpgradeOccurrence package */
            "package"?: (string|null);

            /** UpgradeOccurrence parsedVersion */
            parsedVersion?: (grafeas.v1.IVersion|null);

            /** UpgradeOccurrence distribution */
            distribution?: (grafeas.v1.IUpgradeDistribution|null);

            /** UpgradeOccurrence windowsUpdate */
            windowsUpdate?: (grafeas.v1.IWindowsUpdate|null);
        }

        /** Represents an UpgradeOccurrence. */
        class UpgradeOccurrence implements IUpgradeOccurrence {

            /**
             * Constructs a new UpgradeOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IUpgradeOccurrence);

            /** UpgradeOccurrence package. */
            public package: string;

            /** UpgradeOccurrence parsedVersion. */
            public parsedVersion?: (grafeas.v1.IVersion|null);

            /** UpgradeOccurrence distribution. */
            public distribution?: (grafeas.v1.IUpgradeDistribution|null);

            /** UpgradeOccurrence windowsUpdate. */
            public windowsUpdate?: (grafeas.v1.IWindowsUpdate|null);

            /**
             * Creates a new UpgradeOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpgradeOccurrence instance
             */
            public static create(properties?: grafeas.v1.IUpgradeOccurrence): grafeas.v1.UpgradeOccurrence;

            /**
             * Encodes the specified UpgradeOccurrence message. Does not implicitly {@link grafeas.v1.UpgradeOccurrence.verify|verify} messages.
             * @param message UpgradeOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IUpgradeOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpgradeOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.UpgradeOccurrence.verify|verify} messages.
             * @param message UpgradeOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IUpgradeOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpgradeOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpgradeOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.UpgradeOccurrence;

            /**
             * Decodes an UpgradeOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpgradeOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.UpgradeOccurrence;

            /**
             * Verifies an UpgradeOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpgradeOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpgradeOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.UpgradeOccurrence;

            /**
             * Creates a plain object from an UpgradeOccurrence message. Also converts values to other types if specified.
             * @param message UpgradeOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.UpgradeOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpgradeOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a VulnerabilityNote. */
        interface IVulnerabilityNote {

            /** VulnerabilityNote cvssScore */
            cvssScore?: (number|null);

            /** VulnerabilityNote severity */
            severity?: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity|null);

            /** VulnerabilityNote details */
            details?: (grafeas.v1.VulnerabilityNote.IDetail[]|null);

            /** VulnerabilityNote cvssV3 */
            cvssV3?: (grafeas.v1.ICVSSv3|null);

            /** VulnerabilityNote windowsDetails */
            windowsDetails?: (grafeas.v1.VulnerabilityNote.IWindowsDetail[]|null);

            /** VulnerabilityNote sourceUpdateTime */
            sourceUpdateTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a VulnerabilityNote. */
        class VulnerabilityNote implements IVulnerabilityNote {

            /**
             * Constructs a new VulnerabilityNote.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IVulnerabilityNote);

            /** VulnerabilityNote cvssScore. */
            public cvssScore: number;

            /** VulnerabilityNote severity. */
            public severity: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity);

            /** VulnerabilityNote details. */
            public details: grafeas.v1.VulnerabilityNote.IDetail[];

            /** VulnerabilityNote cvssV3. */
            public cvssV3?: (grafeas.v1.ICVSSv3|null);

            /** VulnerabilityNote windowsDetails. */
            public windowsDetails: grafeas.v1.VulnerabilityNote.IWindowsDetail[];

            /** VulnerabilityNote sourceUpdateTime. */
            public sourceUpdateTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new VulnerabilityNote instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VulnerabilityNote instance
             */
            public static create(properties?: grafeas.v1.IVulnerabilityNote): grafeas.v1.VulnerabilityNote;

            /**
             * Encodes the specified VulnerabilityNote message. Does not implicitly {@link grafeas.v1.VulnerabilityNote.verify|verify} messages.
             * @param message VulnerabilityNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IVulnerabilityNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VulnerabilityNote message, length delimited. Does not implicitly {@link grafeas.v1.VulnerabilityNote.verify|verify} messages.
             * @param message VulnerabilityNote message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IVulnerabilityNote, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VulnerabilityNote message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VulnerabilityNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.VulnerabilityNote;

            /**
             * Decodes a VulnerabilityNote message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VulnerabilityNote
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.VulnerabilityNote;

            /**
             * Verifies a VulnerabilityNote message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VulnerabilityNote message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VulnerabilityNote
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.VulnerabilityNote;

            /**
             * Creates a plain object from a VulnerabilityNote message. Also converts values to other types if specified.
             * @param message VulnerabilityNote
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.VulnerabilityNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VulnerabilityNote to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace VulnerabilityNote {

            /** Properties of a Detail. */
            interface IDetail {

                /** Detail severityName */
                severityName?: (string|null);

                /** Detail description */
                description?: (string|null);

                /** Detail packageType */
                packageType?: (string|null);

                /** Detail affectedCpeUri */
                affectedCpeUri?: (string|null);

                /** Detail affectedPackage */
                affectedPackage?: (string|null);

                /** Detail affectedVersionStart */
                affectedVersionStart?: (grafeas.v1.IVersion|null);

                /** Detail affectedVersionEnd */
                affectedVersionEnd?: (grafeas.v1.IVersion|null);

                /** Detail fixedCpeUri */
                fixedCpeUri?: (string|null);

                /** Detail fixedPackage */
                fixedPackage?: (string|null);

                /** Detail fixedVersion */
                fixedVersion?: (grafeas.v1.IVersion|null);

                /** Detail isObsolete */
                isObsolete?: (boolean|null);

                /** Detail sourceUpdateTime */
                sourceUpdateTime?: (google.protobuf.ITimestamp|null);

                /** Detail source */
                source?: (string|null);

                /** Detail vendor */
                vendor?: (string|null);
            }

            /** Represents a Detail. */
            class Detail implements IDetail {

                /**
                 * Constructs a new Detail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.VulnerabilityNote.IDetail);

                /** Detail severityName. */
                public severityName: string;

                /** Detail description. */
                public description: string;

                /** Detail packageType. */
                public packageType: string;

                /** Detail affectedCpeUri. */
                public affectedCpeUri: string;

                /** Detail affectedPackage. */
                public affectedPackage: string;

                /** Detail affectedVersionStart. */
                public affectedVersionStart?: (grafeas.v1.IVersion|null);

                /** Detail affectedVersionEnd. */
                public affectedVersionEnd?: (grafeas.v1.IVersion|null);

                /** Detail fixedCpeUri. */
                public fixedCpeUri: string;

                /** Detail fixedPackage. */
                public fixedPackage: string;

                /** Detail fixedVersion. */
                public fixedVersion?: (grafeas.v1.IVersion|null);

                /** Detail isObsolete. */
                public isObsolete: boolean;

                /** Detail sourceUpdateTime. */
                public sourceUpdateTime?: (google.protobuf.ITimestamp|null);

                /** Detail source. */
                public source: string;

                /** Detail vendor. */
                public vendor: string;

                /**
                 * Creates a new Detail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Detail instance
                 */
                public static create(properties?: grafeas.v1.VulnerabilityNote.IDetail): grafeas.v1.VulnerabilityNote.Detail;

                /**
                 * Encodes the specified Detail message. Does not implicitly {@link grafeas.v1.VulnerabilityNote.Detail.verify|verify} messages.
                 * @param message Detail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.VulnerabilityNote.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Detail message, length delimited. Does not implicitly {@link grafeas.v1.VulnerabilityNote.Detail.verify|verify} messages.
                 * @param message Detail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.VulnerabilityNote.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Detail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Detail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.VulnerabilityNote.Detail;

                /**
                 * Decodes a Detail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Detail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.VulnerabilityNote.Detail;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1.VulnerabilityNote.Detail;

                /**
                 * Creates a plain object from a Detail message. Also converts values to other types if specified.
                 * @param message Detail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.VulnerabilityNote.Detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Detail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
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
                fixingKbs?: (grafeas.v1.VulnerabilityNote.WindowsDetail.IKnowledgeBase[]|null);
            }

            /** Represents a WindowsDetail. */
            class WindowsDetail implements IWindowsDetail {

                /**
                 * Constructs a new WindowsDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.VulnerabilityNote.IWindowsDetail);

                /** WindowsDetail cpeUri. */
                public cpeUri: string;

                /** WindowsDetail name. */
                public name: string;

                /** WindowsDetail description. */
                public description: string;

                /** WindowsDetail fixingKbs. */
                public fixingKbs: grafeas.v1.VulnerabilityNote.WindowsDetail.IKnowledgeBase[];

                /**
                 * Creates a new WindowsDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WindowsDetail instance
                 */
                public static create(properties?: grafeas.v1.VulnerabilityNote.IWindowsDetail): grafeas.v1.VulnerabilityNote.WindowsDetail;

                /**
                 * Encodes the specified WindowsDetail message. Does not implicitly {@link grafeas.v1.VulnerabilityNote.WindowsDetail.verify|verify} messages.
                 * @param message WindowsDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.VulnerabilityNote.IWindowsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WindowsDetail message, length delimited. Does not implicitly {@link grafeas.v1.VulnerabilityNote.WindowsDetail.verify|verify} messages.
                 * @param message WindowsDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.VulnerabilityNote.IWindowsDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WindowsDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WindowsDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.VulnerabilityNote.WindowsDetail;

                /**
                 * Decodes a WindowsDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WindowsDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.VulnerabilityNote.WindowsDetail;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1.VulnerabilityNote.WindowsDetail;

                /**
                 * Creates a plain object from a WindowsDetail message. Also converts values to other types if specified.
                 * @param message WindowsDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.VulnerabilityNote.WindowsDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WindowsDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
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
                    constructor(properties?: grafeas.v1.VulnerabilityNote.WindowsDetail.IKnowledgeBase);

                    /** KnowledgeBase name. */
                    public name: string;

                    /** KnowledgeBase url. */
                    public url: string;

                    /**
                     * Creates a new KnowledgeBase instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KnowledgeBase instance
                     */
                    public static create(properties?: grafeas.v1.VulnerabilityNote.WindowsDetail.IKnowledgeBase): grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase;

                    /**
                     * Encodes the specified KnowledgeBase message. Does not implicitly {@link grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase.verify|verify} messages.
                     * @param message KnowledgeBase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: grafeas.v1.VulnerabilityNote.WindowsDetail.IKnowledgeBase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KnowledgeBase message, length delimited. Does not implicitly {@link grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase.verify|verify} messages.
                     * @param message KnowledgeBase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: grafeas.v1.VulnerabilityNote.WindowsDetail.IKnowledgeBase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KnowledgeBase message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KnowledgeBase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase;

                    /**
                     * Decodes a KnowledgeBase message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KnowledgeBase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase;

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
                    public static fromObject(object: { [k: string]: any }): grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase;

                    /**
                     * Creates a plain object from a KnowledgeBase message. Also converts values to other types if specified.
                     * @param message KnowledgeBase
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: grafeas.v1.VulnerabilityNote.WindowsDetail.KnowledgeBase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KnowledgeBase to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Properties of a VulnerabilityOccurrence. */
        interface IVulnerabilityOccurrence {

            /** VulnerabilityOccurrence type */
            type?: (string|null);

            /** VulnerabilityOccurrence severity */
            severity?: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity|null);

            /** VulnerabilityOccurrence cvssScore */
            cvssScore?: (number|null);

            /** VulnerabilityOccurrence cvssv3 */
            cvssv3?: (grafeas.v1.ICVSS|null);

            /** VulnerabilityOccurrence packageIssue */
            packageIssue?: (grafeas.v1.VulnerabilityOccurrence.IPackageIssue[]|null);

            /** VulnerabilityOccurrence shortDescription */
            shortDescription?: (string|null);

            /** VulnerabilityOccurrence longDescription */
            longDescription?: (string|null);

            /** VulnerabilityOccurrence relatedUrls */
            relatedUrls?: (grafeas.v1.IRelatedUrl[]|null);

            /** VulnerabilityOccurrence effectiveSeverity */
            effectiveSeverity?: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity|null);

            /** VulnerabilityOccurrence fixAvailable */
            fixAvailable?: (boolean|null);
        }

        /** Represents a VulnerabilityOccurrence. */
        class VulnerabilityOccurrence implements IVulnerabilityOccurrence {

            /**
             * Constructs a new VulnerabilityOccurrence.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IVulnerabilityOccurrence);

            /** VulnerabilityOccurrence type. */
            public type: string;

            /** VulnerabilityOccurrence severity. */
            public severity: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity);

            /** VulnerabilityOccurrence cvssScore. */
            public cvssScore: number;

            /** VulnerabilityOccurrence cvssv3. */
            public cvssv3?: (grafeas.v1.ICVSS|null);

            /** VulnerabilityOccurrence packageIssue. */
            public packageIssue: grafeas.v1.VulnerabilityOccurrence.IPackageIssue[];

            /** VulnerabilityOccurrence shortDescription. */
            public shortDescription: string;

            /** VulnerabilityOccurrence longDescription. */
            public longDescription: string;

            /** VulnerabilityOccurrence relatedUrls. */
            public relatedUrls: grafeas.v1.IRelatedUrl[];

            /** VulnerabilityOccurrence effectiveSeverity. */
            public effectiveSeverity: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity);

            /** VulnerabilityOccurrence fixAvailable. */
            public fixAvailable: boolean;

            /**
             * Creates a new VulnerabilityOccurrence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VulnerabilityOccurrence instance
             */
            public static create(properties?: grafeas.v1.IVulnerabilityOccurrence): grafeas.v1.VulnerabilityOccurrence;

            /**
             * Encodes the specified VulnerabilityOccurrence message. Does not implicitly {@link grafeas.v1.VulnerabilityOccurrence.verify|verify} messages.
             * @param message VulnerabilityOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IVulnerabilityOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VulnerabilityOccurrence message, length delimited. Does not implicitly {@link grafeas.v1.VulnerabilityOccurrence.verify|verify} messages.
             * @param message VulnerabilityOccurrence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IVulnerabilityOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VulnerabilityOccurrence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VulnerabilityOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.VulnerabilityOccurrence;

            /**
             * Decodes a VulnerabilityOccurrence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VulnerabilityOccurrence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.VulnerabilityOccurrence;

            /**
             * Verifies a VulnerabilityOccurrence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VulnerabilityOccurrence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VulnerabilityOccurrence
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.VulnerabilityOccurrence;

            /**
             * Creates a plain object from a VulnerabilityOccurrence message. Also converts values to other types if specified.
             * @param message VulnerabilityOccurrence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.VulnerabilityOccurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VulnerabilityOccurrence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace VulnerabilityOccurrence {

            /** Properties of a PackageIssue. */
            interface IPackageIssue {

                /** PackageIssue affectedCpeUri */
                affectedCpeUri?: (string|null);

                /** PackageIssue affectedPackage */
                affectedPackage?: (string|null);

                /** PackageIssue affectedVersion */
                affectedVersion?: (grafeas.v1.IVersion|null);

                /** PackageIssue fixedCpeUri */
                fixedCpeUri?: (string|null);

                /** PackageIssue fixedPackage */
                fixedPackage?: (string|null);

                /** PackageIssue fixedVersion */
                fixedVersion?: (grafeas.v1.IVersion|null);

                /** PackageIssue fixAvailable */
                fixAvailable?: (boolean|null);

                /** PackageIssue packageType */
                packageType?: (string|null);

                /** PackageIssue effectiveSeverity */
                effectiveSeverity?: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity|null);
            }

            /** Represents a PackageIssue. */
            class PackageIssue implements IPackageIssue {

                /**
                 * Constructs a new PackageIssue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: grafeas.v1.VulnerabilityOccurrence.IPackageIssue);

                /** PackageIssue affectedCpeUri. */
                public affectedCpeUri: string;

                /** PackageIssue affectedPackage. */
                public affectedPackage: string;

                /** PackageIssue affectedVersion. */
                public affectedVersion?: (grafeas.v1.IVersion|null);

                /** PackageIssue fixedCpeUri. */
                public fixedCpeUri: string;

                /** PackageIssue fixedPackage. */
                public fixedPackage: string;

                /** PackageIssue fixedVersion. */
                public fixedVersion?: (grafeas.v1.IVersion|null);

                /** PackageIssue fixAvailable. */
                public fixAvailable: boolean;

                /** PackageIssue packageType. */
                public packageType: string;

                /** PackageIssue effectiveSeverity. */
                public effectiveSeverity: (grafeas.v1.Severity|keyof typeof grafeas.v1.Severity);

                /**
                 * Creates a new PackageIssue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PackageIssue instance
                 */
                public static create(properties?: grafeas.v1.VulnerabilityOccurrence.IPackageIssue): grafeas.v1.VulnerabilityOccurrence.PackageIssue;

                /**
                 * Encodes the specified PackageIssue message. Does not implicitly {@link grafeas.v1.VulnerabilityOccurrence.PackageIssue.verify|verify} messages.
                 * @param message PackageIssue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: grafeas.v1.VulnerabilityOccurrence.IPackageIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PackageIssue message, length delimited. Does not implicitly {@link grafeas.v1.VulnerabilityOccurrence.PackageIssue.verify|verify} messages.
                 * @param message PackageIssue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: grafeas.v1.VulnerabilityOccurrence.IPackageIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PackageIssue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PackageIssue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.VulnerabilityOccurrence.PackageIssue;

                /**
                 * Decodes a PackageIssue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PackageIssue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.VulnerabilityOccurrence.PackageIssue;

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
                public static fromObject(object: { [k: string]: any }): grafeas.v1.VulnerabilityOccurrence.PackageIssue;

                /**
                 * Creates a plain object from a PackageIssue message. Also converts values to other types if specified.
                 * @param message PackageIssue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: grafeas.v1.VulnerabilityOccurrence.PackageIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PackageIssue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

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
