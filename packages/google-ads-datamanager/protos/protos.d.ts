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

    /** Namespace ads. */
    namespace ads {

        /** Namespace datamanager. */
        namespace datamanager {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AudienceMember. */
                interface IAudienceMember {

                    /** AudienceMember destinationReferences */
                    destinationReferences?: (string[]|null);

                    /** AudienceMember userData */
                    userData?: (google.ads.datamanager.v1.IUserData|null);

                    /** AudienceMember pairData */
                    pairData?: (google.ads.datamanager.v1.IPairData|null);

                    /** AudienceMember mobileData */
                    mobileData?: (google.ads.datamanager.v1.IMobileData|null);

                    /** AudienceMember consent */
                    consent?: (google.ads.datamanager.v1.IConsent|null);
                }

                /** Represents an AudienceMember. */
                class AudienceMember implements IAudienceMember {

                    /**
                     * Constructs a new AudienceMember.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IAudienceMember);

                    /** AudienceMember destinationReferences. */
                    public destinationReferences: string[];

                    /** AudienceMember userData. */
                    public userData?: (google.ads.datamanager.v1.IUserData|null);

                    /** AudienceMember pairData. */
                    public pairData?: (google.ads.datamanager.v1.IPairData|null);

                    /** AudienceMember mobileData. */
                    public mobileData?: (google.ads.datamanager.v1.IMobileData|null);

                    /** AudienceMember consent. */
                    public consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** AudienceMember data. */
                    public data?: ("userData"|"pairData"|"mobileData");

                    /**
                     * Creates a new AudienceMember instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AudienceMember instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IAudienceMember): google.ads.datamanager.v1.AudienceMember;

                    /**
                     * Encodes the specified AudienceMember message. Does not implicitly {@link google.ads.datamanager.v1.AudienceMember.verify|verify} messages.
                     * @param message AudienceMember message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IAudienceMember, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AudienceMember message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.AudienceMember.verify|verify} messages.
                     * @param message AudienceMember message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IAudienceMember, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AudienceMember message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AudienceMember
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.AudienceMember;

                    /**
                     * Decodes an AudienceMember message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AudienceMember
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.AudienceMember;

                    /**
                     * Verifies an AudienceMember message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AudienceMember message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AudienceMember
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.AudienceMember;

                    /**
                     * Creates a plain object from an AudienceMember message. Also converts values to other types if specified.
                     * @param message AudienceMember
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.AudienceMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AudienceMember to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AudienceMember
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PairData. */
                interface IPairData {

                    /** PairData pairIds */
                    pairIds?: (string[]|null);
                }

                /** Represents a PairData. */
                class PairData implements IPairData {

                    /**
                     * Constructs a new PairData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IPairData);

                    /** PairData pairIds. */
                    public pairIds: string[];

                    /**
                     * Creates a new PairData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PairData instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IPairData): google.ads.datamanager.v1.PairData;

                    /**
                     * Encodes the specified PairData message. Does not implicitly {@link google.ads.datamanager.v1.PairData.verify|verify} messages.
                     * @param message PairData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IPairData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PairData message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.PairData.verify|verify} messages.
                     * @param message PairData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IPairData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PairData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PairData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.PairData;

                    /**
                     * Decodes a PairData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PairData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.PairData;

                    /**
                     * Verifies a PairData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PairData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PairData
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.PairData;

                    /**
                     * Creates a plain object from a PairData message. Also converts values to other types if specified.
                     * @param message PairData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.PairData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PairData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PairData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MobileData. */
                interface IMobileData {

                    /** MobileData mobileIds */
                    mobileIds?: (string[]|null);
                }

                /** Represents a MobileData. */
                class MobileData implements IMobileData {

                    /**
                     * Constructs a new MobileData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IMobileData);

                    /** MobileData mobileIds. */
                    public mobileIds: string[];

                    /**
                     * Creates a new MobileData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MobileData instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IMobileData): google.ads.datamanager.v1.MobileData;

                    /**
                     * Encodes the specified MobileData message. Does not implicitly {@link google.ads.datamanager.v1.MobileData.verify|verify} messages.
                     * @param message MobileData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IMobileData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MobileData message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.MobileData.verify|verify} messages.
                     * @param message MobileData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IMobileData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MobileData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MobileData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.MobileData;

                    /**
                     * Decodes a MobileData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MobileData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.MobileData;

                    /**
                     * Verifies a MobileData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MobileData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MobileData
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.MobileData;

                    /**
                     * Creates a plain object from a MobileData message. Also converts values to other types if specified.
                     * @param message MobileData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.MobileData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MobileData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MobileData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Consent. */
                interface IConsent {

                    /** Consent adUserData */
                    adUserData?: (google.ads.datamanager.v1.ConsentStatus|keyof typeof google.ads.datamanager.v1.ConsentStatus|null);

                    /** Consent adPersonalization */
                    adPersonalization?: (google.ads.datamanager.v1.ConsentStatus|keyof typeof google.ads.datamanager.v1.ConsentStatus|null);
                }

                /** Represents a Consent. */
                class Consent implements IConsent {

                    /**
                     * Constructs a new Consent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IConsent);

                    /** Consent adUserData. */
                    public adUserData: (google.ads.datamanager.v1.ConsentStatus|keyof typeof google.ads.datamanager.v1.ConsentStatus);

                    /** Consent adPersonalization. */
                    public adPersonalization: (google.ads.datamanager.v1.ConsentStatus|keyof typeof google.ads.datamanager.v1.ConsentStatus);

                    /**
                     * Creates a new Consent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Consent instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IConsent): google.ads.datamanager.v1.Consent;

                    /**
                     * Encodes the specified Consent message. Does not implicitly {@link google.ads.datamanager.v1.Consent.verify|verify} messages.
                     * @param message Consent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IConsent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Consent message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.Consent.verify|verify} messages.
                     * @param message Consent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IConsent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Consent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Consent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.Consent;

                    /**
                     * Decodes a Consent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Consent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.Consent;

                    /**
                     * Verifies a Consent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Consent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Consent
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.Consent;

                    /**
                     * Creates a plain object from a Consent message. Also converts values to other types if specified.
                     * @param message Consent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.Consent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Consent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Consent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** ConsentStatus enum. */
                enum ConsentStatus {
                    CONSENT_STATUS_UNSPECIFIED = 0,
                    CONSENT_GRANTED = 1,
                    CONSENT_DENIED = 2
                }

                /** Properties of a UserData. */
                interface IUserData {

                    /** UserData userIdentifiers */
                    userIdentifiers?: (google.ads.datamanager.v1.IUserIdentifier[]|null);
                }

                /** Represents a UserData. */
                class UserData implements IUserData {

                    /**
                     * Constructs a new UserData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IUserData);

                    /** UserData userIdentifiers. */
                    public userIdentifiers: google.ads.datamanager.v1.IUserIdentifier[];

                    /**
                     * Creates a new UserData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserData instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IUserData): google.ads.datamanager.v1.UserData;

                    /**
                     * Encodes the specified UserData message. Does not implicitly {@link google.ads.datamanager.v1.UserData.verify|verify} messages.
                     * @param message UserData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserData message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.UserData.verify|verify} messages.
                     * @param message UserData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.UserData;

                    /**
                     * Decodes a UserData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.UserData;

                    /**
                     * Verifies a UserData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserData
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.UserData;

                    /**
                     * Creates a plain object from a UserData message. Also converts values to other types if specified.
                     * @param message UserData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UserIdentifier. */
                interface IUserIdentifier {

                    /** UserIdentifier emailAddress */
                    emailAddress?: (string|null);

                    /** UserIdentifier phoneNumber */
                    phoneNumber?: (string|null);

                    /** UserIdentifier address */
                    address?: (google.ads.datamanager.v1.IAddressInfo|null);
                }

                /** Represents a UserIdentifier. */
                class UserIdentifier implements IUserIdentifier {

                    /**
                     * Constructs a new UserIdentifier.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IUserIdentifier);

                    /** UserIdentifier emailAddress. */
                    public emailAddress?: (string|null);

                    /** UserIdentifier phoneNumber. */
                    public phoneNumber?: (string|null);

                    /** UserIdentifier address. */
                    public address?: (google.ads.datamanager.v1.IAddressInfo|null);

                    /** UserIdentifier identifier. */
                    public identifier?: ("emailAddress"|"phoneNumber"|"address");

                    /**
                     * Creates a new UserIdentifier instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserIdentifier instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IUserIdentifier): google.ads.datamanager.v1.UserIdentifier;

                    /**
                     * Encodes the specified UserIdentifier message. Does not implicitly {@link google.ads.datamanager.v1.UserIdentifier.verify|verify} messages.
                     * @param message UserIdentifier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IUserIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserIdentifier message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.UserIdentifier.verify|verify} messages.
                     * @param message UserIdentifier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IUserIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserIdentifier message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserIdentifier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.UserIdentifier;

                    /**
                     * Decodes a UserIdentifier message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserIdentifier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.UserIdentifier;

                    /**
                     * Verifies a UserIdentifier message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserIdentifier message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserIdentifier
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.UserIdentifier;

                    /**
                     * Creates a plain object from a UserIdentifier message. Also converts values to other types if specified.
                     * @param message UserIdentifier
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.UserIdentifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserIdentifier to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserIdentifier
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddressInfo. */
                interface IAddressInfo {

                    /** AddressInfo givenName */
                    givenName?: (string|null);

                    /** AddressInfo familyName */
                    familyName?: (string|null);

                    /** AddressInfo regionCode */
                    regionCode?: (string|null);

                    /** AddressInfo postalCode */
                    postalCode?: (string|null);
                }

                /** Represents an AddressInfo. */
                class AddressInfo implements IAddressInfo {

                    /**
                     * Constructs a new AddressInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IAddressInfo);

                    /** AddressInfo givenName. */
                    public givenName: string;

                    /** AddressInfo familyName. */
                    public familyName: string;

                    /** AddressInfo regionCode. */
                    public regionCode: string;

                    /** AddressInfo postalCode. */
                    public postalCode: string;

                    /**
                     * Creates a new AddressInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddressInfo instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IAddressInfo): google.ads.datamanager.v1.AddressInfo;

                    /**
                     * Encodes the specified AddressInfo message. Does not implicitly {@link google.ads.datamanager.v1.AddressInfo.verify|verify} messages.
                     * @param message AddressInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddressInfo message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.AddressInfo.verify|verify} messages.
                     * @param message AddressInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IAddressInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddressInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddressInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.AddressInfo;

                    /**
                     * Decodes an AddressInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddressInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.AddressInfo;

                    /**
                     * Verifies an AddressInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddressInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddressInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.AddressInfo;

                    /**
                     * Creates a plain object from an AddressInfo message. Also converts values to other types if specified.
                     * @param message AddressInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.AddressInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddressInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddressInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CartData. */
                interface ICartData {

                    /** CartData merchantId */
                    merchantId?: (string|null);

                    /** CartData merchantFeedLabel */
                    merchantFeedLabel?: (string|null);

                    /** CartData merchantFeedLanguageCode */
                    merchantFeedLanguageCode?: (string|null);

                    /** CartData transactionDiscount */
                    transactionDiscount?: (number|null);

                    /** CartData items */
                    items?: (google.ads.datamanager.v1.IItem[]|null);
                }

                /** Represents a CartData. */
                class CartData implements ICartData {

                    /**
                     * Constructs a new CartData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.ICartData);

                    /** CartData merchantId. */
                    public merchantId: string;

                    /** CartData merchantFeedLabel. */
                    public merchantFeedLabel: string;

                    /** CartData merchantFeedLanguageCode. */
                    public merchantFeedLanguageCode: string;

                    /** CartData transactionDiscount. */
                    public transactionDiscount: number;

                    /** CartData items. */
                    public items: google.ads.datamanager.v1.IItem[];

                    /**
                     * Creates a new CartData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CartData instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.ICartData): google.ads.datamanager.v1.CartData;

                    /**
                     * Encodes the specified CartData message. Does not implicitly {@link google.ads.datamanager.v1.CartData.verify|verify} messages.
                     * @param message CartData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.ICartData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CartData message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.CartData.verify|verify} messages.
                     * @param message CartData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.ICartData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CartData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CartData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.CartData;

                    /**
                     * Decodes a CartData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CartData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.CartData;

                    /**
                     * Verifies a CartData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CartData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CartData
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.CartData;

                    /**
                     * Creates a plain object from a CartData message. Also converts values to other types if specified.
                     * @param message CartData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.CartData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CartData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CartData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Item. */
                interface IItem {

                    /** Item merchantProductId */
                    merchantProductId?: (string|null);

                    /** Item quantity */
                    quantity?: (number|Long|string|null);

                    /** Item unitPrice */
                    unitPrice?: (number|null);
                }

                /** Represents an Item. */
                class Item implements IItem {

                    /**
                     * Constructs a new Item.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IItem);

                    /** Item merchantProductId. */
                    public merchantProductId: string;

                    /** Item quantity. */
                    public quantity: (number|Long|string);

                    /** Item unitPrice. */
                    public unitPrice: number;

                    /**
                     * Creates a new Item instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Item instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IItem): google.ads.datamanager.v1.Item;

                    /**
                     * Encodes the specified Item message. Does not implicitly {@link google.ads.datamanager.v1.Item.verify|verify} messages.
                     * @param message Item message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Item message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.Item.verify|verify} messages.
                     * @param message Item message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Item message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Item
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.Item;

                    /**
                     * Decodes an Item message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Item
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.Item;

                    /**
                     * Verifies an Item message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Item message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Item
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.Item;

                    /**
                     * Creates a plain object from an Item message. Also converts values to other types if specified.
                     * @param message Item
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Item to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Item
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Destination. */
                interface IDestination {

                    /** Destination reference */
                    reference?: (string|null);

                    /** Destination loginAccount */
                    loginAccount?: (google.ads.datamanager.v1.IProductAccount|null);

                    /** Destination linkedAccount */
                    linkedAccount?: (google.ads.datamanager.v1.IProductAccount|null);

                    /** Destination operatingAccount */
                    operatingAccount?: (google.ads.datamanager.v1.IProductAccount|null);

                    /** Destination productDestinationId */
                    productDestinationId?: (string|null);
                }

                /** Represents a Destination. */
                class Destination implements IDestination {

                    /**
                     * Constructs a new Destination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IDestination);

                    /** Destination reference. */
                    public reference: string;

                    /** Destination loginAccount. */
                    public loginAccount?: (google.ads.datamanager.v1.IProductAccount|null);

                    /** Destination linkedAccount. */
                    public linkedAccount?: (google.ads.datamanager.v1.IProductAccount|null);

                    /** Destination operatingAccount. */
                    public operatingAccount?: (google.ads.datamanager.v1.IProductAccount|null);

                    /** Destination productDestinationId. */
                    public productDestinationId: string;

                    /**
                     * Creates a new Destination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Destination instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IDestination): google.ads.datamanager.v1.Destination;

                    /**
                     * Encodes the specified Destination message. Does not implicitly {@link google.ads.datamanager.v1.Destination.verify|verify} messages.
                     * @param message Destination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.Destination.verify|verify} messages.
                     * @param message Destination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Destination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Destination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.Destination;

                    /**
                     * Decodes a Destination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Destination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.Destination;

                    /**
                     * Verifies a Destination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Destination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Destination
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.Destination;

                    /**
                     * Creates a plain object from a Destination message. Also converts values to other types if specified.
                     * @param message Destination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Destination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Destination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProductAccount. */
                interface IProductAccount {

                    /** ProductAccount product */
                    product?: (google.ads.datamanager.v1.Product|keyof typeof google.ads.datamanager.v1.Product|null);

                    /** ProductAccount accountId */
                    accountId?: (string|null);

                    /** ProductAccount accountType */
                    accountType?: (google.ads.datamanager.v1.ProductAccount.AccountType|keyof typeof google.ads.datamanager.v1.ProductAccount.AccountType|null);
                }

                /** Represents a ProductAccount. */
                class ProductAccount implements IProductAccount {

                    /**
                     * Constructs a new ProductAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IProductAccount);

                    /** ProductAccount product. */
                    public product: (google.ads.datamanager.v1.Product|keyof typeof google.ads.datamanager.v1.Product);

                    /** ProductAccount accountId. */
                    public accountId: string;

                    /** ProductAccount accountType. */
                    public accountType: (google.ads.datamanager.v1.ProductAccount.AccountType|keyof typeof google.ads.datamanager.v1.ProductAccount.AccountType);

                    /**
                     * Creates a new ProductAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProductAccount instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IProductAccount): google.ads.datamanager.v1.ProductAccount;

                    /**
                     * Encodes the specified ProductAccount message. Does not implicitly {@link google.ads.datamanager.v1.ProductAccount.verify|verify} messages.
                     * @param message ProductAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IProductAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProductAccount message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.ProductAccount.verify|verify} messages.
                     * @param message ProductAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IProductAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProductAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProductAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.ProductAccount;

                    /**
                     * Decodes a ProductAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProductAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.ProductAccount;

                    /**
                     * Verifies a ProductAccount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProductAccount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProductAccount
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.ProductAccount;

                    /**
                     * Creates a plain object from a ProductAccount message. Also converts values to other types if specified.
                     * @param message ProductAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.ProductAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProductAccount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProductAccount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProductAccount {

                    /** AccountType enum. */
                    enum AccountType {
                        ACCOUNT_TYPE_UNSPECIFIED = 0,
                        GOOGLE_ADS = 1,
                        DISPLAY_VIDEO_PARTNER = 2,
                        DISPLAY_VIDEO_ADVERTISER = 3,
                        DATA_PARTNER = 4
                    }
                }

                /** Product enum. */
                enum Product {
                    PRODUCT_UNSPECIFIED = 0,
                    GOOGLE_ADS = 1,
                    DISPLAY_VIDEO_PARTNER = 2,
                    DISPLAY_VIDEO_ADVERTISER = 3,
                    DATA_PARTNER = 4
                }

                /** Properties of a DeviceInfo. */
                interface IDeviceInfo {

                    /** DeviceInfo userAgent */
                    userAgent?: (string|null);

                    /** DeviceInfo ipAddress */
                    ipAddress?: (string|null);
                }

                /** Represents a DeviceInfo. */
                class DeviceInfo implements IDeviceInfo {

                    /**
                     * Constructs a new DeviceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IDeviceInfo);

                    /** DeviceInfo userAgent. */
                    public userAgent: string;

                    /** DeviceInfo ipAddress. */
                    public ipAddress: string;

                    /**
                     * Creates a new DeviceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeviceInfo instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IDeviceInfo): google.ads.datamanager.v1.DeviceInfo;

                    /**
                     * Encodes the specified DeviceInfo message. Does not implicitly {@link google.ads.datamanager.v1.DeviceInfo.verify|verify} messages.
                     * @param message DeviceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.DeviceInfo.verify|verify} messages.
                     * @param message DeviceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeviceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeviceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.DeviceInfo;

                    /**
                     * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeviceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.DeviceInfo;

                    /**
                     * Verifies a DeviceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeviceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.DeviceInfo;

                    /**
                     * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
                     * @param message DeviceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeviceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeviceInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EncryptionInfo. */
                interface IEncryptionInfo {

                    /** EncryptionInfo gcpWrappedKeyInfo */
                    gcpWrappedKeyInfo?: (google.ads.datamanager.v1.IGcpWrappedKeyInfo|null);
                }

                /** Represents an EncryptionInfo. */
                class EncryptionInfo implements IEncryptionInfo {

                    /**
                     * Constructs a new EncryptionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IEncryptionInfo);

                    /** EncryptionInfo gcpWrappedKeyInfo. */
                    public gcpWrappedKeyInfo?: (google.ads.datamanager.v1.IGcpWrappedKeyInfo|null);

                    /** EncryptionInfo wrappedKey. */
                    public wrappedKey?: "gcpWrappedKeyInfo";

                    /**
                     * Creates a new EncryptionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptionInfo instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IEncryptionInfo): google.ads.datamanager.v1.EncryptionInfo;

                    /**
                     * Encodes the specified EncryptionInfo message. Does not implicitly {@link google.ads.datamanager.v1.EncryptionInfo.verify|verify} messages.
                     * @param message EncryptionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IEncryptionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptionInfo message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.EncryptionInfo.verify|verify} messages.
                     * @param message EncryptionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IEncryptionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.EncryptionInfo;

                    /**
                     * Decodes an EncryptionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.EncryptionInfo;

                    /**
                     * Verifies an EncryptionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.EncryptionInfo;

                    /**
                     * Creates a plain object from an EncryptionInfo message. Also converts values to other types if specified.
                     * @param message EncryptionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.EncryptionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EncryptionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcpWrappedKeyInfo. */
                interface IGcpWrappedKeyInfo {

                    /** GcpWrappedKeyInfo keyType */
                    keyType?: (google.ads.datamanager.v1.GcpWrappedKeyInfo.KeyType|keyof typeof google.ads.datamanager.v1.GcpWrappedKeyInfo.KeyType|null);

                    /** GcpWrappedKeyInfo wipProvider */
                    wipProvider?: (string|null);

                    /** GcpWrappedKeyInfo kekUri */
                    kekUri?: (string|null);

                    /** GcpWrappedKeyInfo encryptedDek */
                    encryptedDek?: (string|null);
                }

                /** Represents a GcpWrappedKeyInfo. */
                class GcpWrappedKeyInfo implements IGcpWrappedKeyInfo {

                    /**
                     * Constructs a new GcpWrappedKeyInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IGcpWrappedKeyInfo);

                    /** GcpWrappedKeyInfo keyType. */
                    public keyType: (google.ads.datamanager.v1.GcpWrappedKeyInfo.KeyType|keyof typeof google.ads.datamanager.v1.GcpWrappedKeyInfo.KeyType);

                    /** GcpWrappedKeyInfo wipProvider. */
                    public wipProvider: string;

                    /** GcpWrappedKeyInfo kekUri. */
                    public kekUri: string;

                    /** GcpWrappedKeyInfo encryptedDek. */
                    public encryptedDek: string;

                    /**
                     * Creates a new GcpWrappedKeyInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcpWrappedKeyInfo instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IGcpWrappedKeyInfo): google.ads.datamanager.v1.GcpWrappedKeyInfo;

                    /**
                     * Encodes the specified GcpWrappedKeyInfo message. Does not implicitly {@link google.ads.datamanager.v1.GcpWrappedKeyInfo.verify|verify} messages.
                     * @param message GcpWrappedKeyInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IGcpWrappedKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcpWrappedKeyInfo message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.GcpWrappedKeyInfo.verify|verify} messages.
                     * @param message GcpWrappedKeyInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IGcpWrappedKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcpWrappedKeyInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcpWrappedKeyInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.GcpWrappedKeyInfo;

                    /**
                     * Decodes a GcpWrappedKeyInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcpWrappedKeyInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.GcpWrappedKeyInfo;

                    /**
                     * Verifies a GcpWrappedKeyInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcpWrappedKeyInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcpWrappedKeyInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.GcpWrappedKeyInfo;

                    /**
                     * Creates a plain object from a GcpWrappedKeyInfo message. Also converts values to other types if specified.
                     * @param message GcpWrappedKeyInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.GcpWrappedKeyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcpWrappedKeyInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcpWrappedKeyInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace GcpWrappedKeyInfo {

                    /** KeyType enum. */
                    enum KeyType {
                        KEY_TYPE_UNSPECIFIED = 0,
                        XCHACHA20_POLY1305 = 1
                    }
                }

                /** ErrorReason enum. */
                enum ErrorReason {
                    ERROR_REASON_UNSPECIFIED = 0,
                    INTERNAL_ERROR = 1,
                    DEADLINE_EXCEEDED = 2,
                    RESOURCE_EXHAUSTED = 3,
                    NOT_FOUND = 4,
                    PERMISSION_DENIED = 5,
                    INVALID_ARGUMENT = 6,
                    REQUIRED_FIELD_MISSING = 7,
                    INVALID_FORMAT = 8,
                    INVALID_HEX_ENCODING = 9,
                    INVALID_BASE64_ENCODING = 10,
                    INVALID_SHA256_FORMAT = 11,
                    INVALID_POSTAL_CODE = 12,
                    INVALID_COUNTRY_CODE = 13,
                    INVALID_ENUM_VALUE = 14,
                    INVALID_USER_LIST_TYPE = 15,
                    INVALID_AUDIENCE_MEMBER = 16,
                    TOO_MANY_AUDIENCE_MEMBERS = 17,
                    TOO_MANY_USER_IDENTIFIERS = 18,
                    TOO_MANY_DESTINATIONS = 19,
                    INVALID_DESTINATION = 20,
                    DATA_PARTNER_USER_LIST_MUTATE_NOT_ALLOWED = 21,
                    INVALID_MOBILE_ID_FORMAT = 22,
                    INVALID_USER_LIST_ID = 23,
                    MULTIPLE_DATA_TYPES_NOT_ALLOWED = 24,
                    DIFFERENT_LOGIN_ACCOUNTS_NOT_ALLOWED_FOR_DATA_PARTNER = 25,
                    TERMS_AND_CONDITIONS_NOT_SIGNED = 26,
                    INVALID_NUMBER_FORMAT = 27,
                    INVALID_CONVERSION_ACTION_ID = 28,
                    INVALID_CONVERSION_ACTION_TYPE = 29,
                    INVALID_CURRENCY_CODE = 30,
                    INVALID_EVENT = 31,
                    TOO_MANY_EVENTS = 32,
                    DESTINATION_ACCOUNT_NOT_ENABLED_ENHANCED_CONVERSIONS_FOR_LEADS = 33,
                    DESTINATION_ACCOUNT_DATA_POLICY_PROHIBITS_ENHANCED_CONVERSIONS = 34,
                    DESTINATION_ACCOUNT_ENHANCED_CONVERSIONS_TERMS_NOT_SIGNED = 35,
                    DUPLICATE_DESTINATION_REFERENCE = 36,
                    NO_IDENTIFIERS_PROVIDED = 39,
                    INVALID_REQUEST_ID = 48
                }

                /** Properties of an Event. */
                interface IEvent {

                    /** Event destinationReferences */
                    destinationReferences?: (string[]|null);

                    /** Event transactionId */
                    transactionId?: (string|null);

                    /** Event eventTimestamp */
                    eventTimestamp?: (google.protobuf.ITimestamp|null);

                    /** Event lastUpdatedTimestamp */
                    lastUpdatedTimestamp?: (google.protobuf.ITimestamp|null);

                    /** Event userData */
                    userData?: (google.ads.datamanager.v1.IUserData|null);

                    /** Event consent */
                    consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** Event adIdentifiers */
                    adIdentifiers?: (google.ads.datamanager.v1.IAdIdentifiers|null);

                    /** Event currency */
                    currency?: (string|null);

                    /** Event conversionValue */
                    conversionValue?: (number|null);

                    /** Event eventSource */
                    eventSource?: (google.ads.datamanager.v1.EventSource|keyof typeof google.ads.datamanager.v1.EventSource|null);

                    /** Event eventDeviceInfo */
                    eventDeviceInfo?: (google.ads.datamanager.v1.IDeviceInfo|null);

                    /** Event cartData */
                    cartData?: (google.ads.datamanager.v1.ICartData|null);

                    /** Event customVariables */
                    customVariables?: (google.ads.datamanager.v1.ICustomVariable[]|null);

                    /** Event experimentalFields */
                    experimentalFields?: (google.ads.datamanager.v1.IExperimentalField[]|null);

                    /** Event userProperties */
                    userProperties?: (google.ads.datamanager.v1.IUserProperties|null);
                }

                /** Represents an Event. */
                class Event implements IEvent {

                    /**
                     * Constructs a new Event.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IEvent);

                    /** Event destinationReferences. */
                    public destinationReferences: string[];

                    /** Event transactionId. */
                    public transactionId: string;

                    /** Event eventTimestamp. */
                    public eventTimestamp?: (google.protobuf.ITimestamp|null);

                    /** Event lastUpdatedTimestamp. */
                    public lastUpdatedTimestamp?: (google.protobuf.ITimestamp|null);

                    /** Event userData. */
                    public userData?: (google.ads.datamanager.v1.IUserData|null);

                    /** Event consent. */
                    public consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** Event adIdentifiers. */
                    public adIdentifiers?: (google.ads.datamanager.v1.IAdIdentifiers|null);

                    /** Event currency. */
                    public currency: string;

                    /** Event conversionValue. */
                    public conversionValue: number;

                    /** Event eventSource. */
                    public eventSource: (google.ads.datamanager.v1.EventSource|keyof typeof google.ads.datamanager.v1.EventSource);

                    /** Event eventDeviceInfo. */
                    public eventDeviceInfo?: (google.ads.datamanager.v1.IDeviceInfo|null);

                    /** Event cartData. */
                    public cartData?: (google.ads.datamanager.v1.ICartData|null);

                    /** Event customVariables. */
                    public customVariables: google.ads.datamanager.v1.ICustomVariable[];

                    /** Event experimentalFields. */
                    public experimentalFields: google.ads.datamanager.v1.IExperimentalField[];

                    /** Event userProperties. */
                    public userProperties?: (google.ads.datamanager.v1.IUserProperties|null);

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Event instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IEvent): google.ads.datamanager.v1.Event;

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link google.ads.datamanager.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.Event;

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.Event;

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
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.Event;

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @param message Event
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an AdIdentifiers. */
                interface IAdIdentifiers {

                    /** AdIdentifiers sessionAttributes */
                    sessionAttributes?: (string|null);

                    /** AdIdentifiers gclid */
                    gclid?: (string|null);

                    /** AdIdentifiers gbraid */
                    gbraid?: (string|null);

                    /** AdIdentifiers wbraid */
                    wbraid?: (string|null);

                    /** AdIdentifiers landingPageDeviceInfo */
                    landingPageDeviceInfo?: (google.ads.datamanager.v1.IDeviceInfo|null);
                }

                /** Represents an AdIdentifiers. */
                class AdIdentifiers implements IAdIdentifiers {

                    /**
                     * Constructs a new AdIdentifiers.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IAdIdentifiers);

                    /** AdIdentifiers sessionAttributes. */
                    public sessionAttributes: string;

                    /** AdIdentifiers gclid. */
                    public gclid: string;

                    /** AdIdentifiers gbraid. */
                    public gbraid: string;

                    /** AdIdentifiers wbraid. */
                    public wbraid: string;

                    /** AdIdentifiers landingPageDeviceInfo. */
                    public landingPageDeviceInfo?: (google.ads.datamanager.v1.IDeviceInfo|null);

                    /**
                     * Creates a new AdIdentifiers instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdIdentifiers instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IAdIdentifiers): google.ads.datamanager.v1.AdIdentifiers;

                    /**
                     * Encodes the specified AdIdentifiers message. Does not implicitly {@link google.ads.datamanager.v1.AdIdentifiers.verify|verify} messages.
                     * @param message AdIdentifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IAdIdentifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdIdentifiers message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.AdIdentifiers.verify|verify} messages.
                     * @param message AdIdentifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IAdIdentifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdIdentifiers message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdIdentifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.AdIdentifiers;

                    /**
                     * Decodes an AdIdentifiers message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdIdentifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.AdIdentifiers;

                    /**
                     * Verifies an AdIdentifiers message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdIdentifiers message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdIdentifiers
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.AdIdentifiers;

                    /**
                     * Creates a plain object from an AdIdentifiers message. Also converts values to other types if specified.
                     * @param message AdIdentifiers
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.AdIdentifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdIdentifiers to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdIdentifiers
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomVariable. */
                interface ICustomVariable {

                    /** CustomVariable variable */
                    variable?: (string|null);

                    /** CustomVariable value */
                    value?: (string|null);

                    /** CustomVariable destinationReferences */
                    destinationReferences?: (string[]|null);
                }

                /** Represents a CustomVariable. */
                class CustomVariable implements ICustomVariable {

                    /**
                     * Constructs a new CustomVariable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.ICustomVariable);

                    /** CustomVariable variable. */
                    public variable: string;

                    /** CustomVariable value. */
                    public value: string;

                    /** CustomVariable destinationReferences. */
                    public destinationReferences: string[];

                    /**
                     * Creates a new CustomVariable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomVariable instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.ICustomVariable): google.ads.datamanager.v1.CustomVariable;

                    /**
                     * Encodes the specified CustomVariable message. Does not implicitly {@link google.ads.datamanager.v1.CustomVariable.verify|verify} messages.
                     * @param message CustomVariable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.ICustomVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomVariable message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.CustomVariable.verify|verify} messages.
                     * @param message CustomVariable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.ICustomVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomVariable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomVariable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.CustomVariable;

                    /**
                     * Decodes a CustomVariable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomVariable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.CustomVariable;

                    /**
                     * Verifies a CustomVariable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomVariable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomVariable
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.CustomVariable;

                    /**
                     * Creates a plain object from a CustomVariable message. Also converts values to other types if specified.
                     * @param message CustomVariable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.CustomVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomVariable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomVariable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** EventSource enum. */
                enum EventSource {
                    EVENT_SOURCE_UNSPECIFIED = 0,
                    WEB = 1,
                    APP = 2,
                    IN_STORE = 3,
                    PHONE = 4,
                    OTHER = 5
                }

                /** Properties of an ExperimentalField. */
                interface IExperimentalField {

                    /** ExperimentalField field */
                    field?: (string|null);

                    /** ExperimentalField value */
                    value?: (string|null);
                }

                /** Represents an ExperimentalField. */
                class ExperimentalField implements IExperimentalField {

                    /**
                     * Constructs a new ExperimentalField.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IExperimentalField);

                    /** ExperimentalField field. */
                    public field: string;

                    /** ExperimentalField value. */
                    public value: string;

                    /**
                     * Creates a new ExperimentalField instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExperimentalField instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IExperimentalField): google.ads.datamanager.v1.ExperimentalField;

                    /**
                     * Encodes the specified ExperimentalField message. Does not implicitly {@link google.ads.datamanager.v1.ExperimentalField.verify|verify} messages.
                     * @param message ExperimentalField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IExperimentalField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExperimentalField message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.ExperimentalField.verify|verify} messages.
                     * @param message ExperimentalField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IExperimentalField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExperimentalField message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExperimentalField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.ExperimentalField;

                    /**
                     * Decodes an ExperimentalField message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExperimentalField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.ExperimentalField;

                    /**
                     * Verifies an ExperimentalField message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExperimentalField message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExperimentalField
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.ExperimentalField;

                    /**
                     * Creates a plain object from an ExperimentalField message. Also converts values to other types if specified.
                     * @param message ExperimentalField
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.ExperimentalField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExperimentalField to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExperimentalField
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UserProperties. */
                interface IUserProperties {

                    /** UserProperties customerType */
                    customerType?: (google.ads.datamanager.v1.CustomerType|keyof typeof google.ads.datamanager.v1.CustomerType|null);

                    /** UserProperties customerValueBucket */
                    customerValueBucket?: (google.ads.datamanager.v1.CustomerValueBucket|keyof typeof google.ads.datamanager.v1.CustomerValueBucket|null);
                }

                /** Represents a UserProperties. */
                class UserProperties implements IUserProperties {

                    /**
                     * Constructs a new UserProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IUserProperties);

                    /** UserProperties customerType. */
                    public customerType: (google.ads.datamanager.v1.CustomerType|keyof typeof google.ads.datamanager.v1.CustomerType);

                    /** UserProperties customerValueBucket. */
                    public customerValueBucket: (google.ads.datamanager.v1.CustomerValueBucket|keyof typeof google.ads.datamanager.v1.CustomerValueBucket);

                    /**
                     * Creates a new UserProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserProperties instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IUserProperties): google.ads.datamanager.v1.UserProperties;

                    /**
                     * Encodes the specified UserProperties message. Does not implicitly {@link google.ads.datamanager.v1.UserProperties.verify|verify} messages.
                     * @param message UserProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IUserProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserProperties message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.UserProperties.verify|verify} messages.
                     * @param message UserProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IUserProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.UserProperties;

                    /**
                     * Decodes a UserProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.UserProperties;

                    /**
                     * Verifies a UserProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.UserProperties;

                    /**
                     * Creates a plain object from a UserProperties message. Also converts values to other types if specified.
                     * @param message UserProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.UserProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** CustomerType enum. */
                enum CustomerType {
                    CUSTOMER_TYPE_UNSPECIFIED = 0,
                    NEW = 1,
                    RETURNING = 2,
                    REENGAGED = 3
                }

                /** CustomerValueBucket enum. */
                enum CustomerValueBucket {
                    CUSTOMER_VALUE_BUCKET_UNSPECIFIED = 0,
                    LOW = 1,
                    MEDIUM = 2,
                    HIGH = 3
                }

                /** Represents an IngestionService */
                class IngestionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new IngestionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new IngestionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IngestionService;

                    /**
                     * Calls IngestAudienceMembers.
                     * @param request IngestAudienceMembersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IngestAudienceMembersResponse
                     */
                    public ingestAudienceMembers(request: google.ads.datamanager.v1.IIngestAudienceMembersRequest, callback: google.ads.datamanager.v1.IngestionService.IngestAudienceMembersCallback): void;

                    /**
                     * Calls IngestAudienceMembers.
                     * @param request IngestAudienceMembersRequest message or plain object
                     * @returns Promise
                     */
                    public ingestAudienceMembers(request: google.ads.datamanager.v1.IIngestAudienceMembersRequest): Promise<google.ads.datamanager.v1.IngestAudienceMembersResponse>;

                    /**
                     * Calls RemoveAudienceMembers.
                     * @param request RemoveAudienceMembersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RemoveAudienceMembersResponse
                     */
                    public removeAudienceMembers(request: google.ads.datamanager.v1.IRemoveAudienceMembersRequest, callback: google.ads.datamanager.v1.IngestionService.RemoveAudienceMembersCallback): void;

                    /**
                     * Calls RemoveAudienceMembers.
                     * @param request RemoveAudienceMembersRequest message or plain object
                     * @returns Promise
                     */
                    public removeAudienceMembers(request: google.ads.datamanager.v1.IRemoveAudienceMembersRequest): Promise<google.ads.datamanager.v1.RemoveAudienceMembersResponse>;

                    /**
                     * Calls IngestEvents.
                     * @param request IngestEventsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IngestEventsResponse
                     */
                    public ingestEvents(request: google.ads.datamanager.v1.IIngestEventsRequest, callback: google.ads.datamanager.v1.IngestionService.IngestEventsCallback): void;

                    /**
                     * Calls IngestEvents.
                     * @param request IngestEventsRequest message or plain object
                     * @returns Promise
                     */
                    public ingestEvents(request: google.ads.datamanager.v1.IIngestEventsRequest): Promise<google.ads.datamanager.v1.IngestEventsResponse>;

                    /**
                     * Calls RetrieveRequestStatus.
                     * @param request RetrieveRequestStatusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RetrieveRequestStatusResponse
                     */
                    public retrieveRequestStatus(request: google.ads.datamanager.v1.IRetrieveRequestStatusRequest, callback: google.ads.datamanager.v1.IngestionService.RetrieveRequestStatusCallback): void;

                    /**
                     * Calls RetrieveRequestStatus.
                     * @param request RetrieveRequestStatusRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveRequestStatus(request: google.ads.datamanager.v1.IRetrieveRequestStatusRequest): Promise<google.ads.datamanager.v1.RetrieveRequestStatusResponse>;
                }

                namespace IngestionService {

                    /**
                     * Callback as used by {@link google.ads.datamanager.v1.IngestionService|ingestAudienceMembers}.
                     * @param error Error, if any
                     * @param [response] IngestAudienceMembersResponse
                     */
                    type IngestAudienceMembersCallback = (error: (Error|null), response?: google.ads.datamanager.v1.IngestAudienceMembersResponse) => void;

                    /**
                     * Callback as used by {@link google.ads.datamanager.v1.IngestionService|removeAudienceMembers}.
                     * @param error Error, if any
                     * @param [response] RemoveAudienceMembersResponse
                     */
                    type RemoveAudienceMembersCallback = (error: (Error|null), response?: google.ads.datamanager.v1.RemoveAudienceMembersResponse) => void;

                    /**
                     * Callback as used by {@link google.ads.datamanager.v1.IngestionService|ingestEvents}.
                     * @param error Error, if any
                     * @param [response] IngestEventsResponse
                     */
                    type IngestEventsCallback = (error: (Error|null), response?: google.ads.datamanager.v1.IngestEventsResponse) => void;

                    /**
                     * Callback as used by {@link google.ads.datamanager.v1.IngestionService|retrieveRequestStatus}.
                     * @param error Error, if any
                     * @param [response] RetrieveRequestStatusResponse
                     */
                    type RetrieveRequestStatusCallback = (error: (Error|null), response?: google.ads.datamanager.v1.RetrieveRequestStatusResponse) => void;
                }

                /** Properties of an IngestAudienceMembersRequest. */
                interface IIngestAudienceMembersRequest {

                    /** IngestAudienceMembersRequest destinations */
                    destinations?: (google.ads.datamanager.v1.IDestination[]|null);

                    /** IngestAudienceMembersRequest audienceMembers */
                    audienceMembers?: (google.ads.datamanager.v1.IAudienceMember[]|null);

                    /** IngestAudienceMembersRequest consent */
                    consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** IngestAudienceMembersRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** IngestAudienceMembersRequest encoding */
                    encoding?: (google.ads.datamanager.v1.Encoding|keyof typeof google.ads.datamanager.v1.Encoding|null);

                    /** IngestAudienceMembersRequest encryptionInfo */
                    encryptionInfo?: (google.ads.datamanager.v1.IEncryptionInfo|null);

                    /** IngestAudienceMembersRequest termsOfService */
                    termsOfService?: (google.ads.datamanager.v1.ITermsOfService|null);
                }

                /** Represents an IngestAudienceMembersRequest. */
                class IngestAudienceMembersRequest implements IIngestAudienceMembersRequest {

                    /**
                     * Constructs a new IngestAudienceMembersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IIngestAudienceMembersRequest);

                    /** IngestAudienceMembersRequest destinations. */
                    public destinations: google.ads.datamanager.v1.IDestination[];

                    /** IngestAudienceMembersRequest audienceMembers. */
                    public audienceMembers: google.ads.datamanager.v1.IAudienceMember[];

                    /** IngestAudienceMembersRequest consent. */
                    public consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** IngestAudienceMembersRequest validateOnly. */
                    public validateOnly: boolean;

                    /** IngestAudienceMembersRequest encoding. */
                    public encoding: (google.ads.datamanager.v1.Encoding|keyof typeof google.ads.datamanager.v1.Encoding);

                    /** IngestAudienceMembersRequest encryptionInfo. */
                    public encryptionInfo?: (google.ads.datamanager.v1.IEncryptionInfo|null);

                    /** IngestAudienceMembersRequest termsOfService. */
                    public termsOfService?: (google.ads.datamanager.v1.ITermsOfService|null);

                    /**
                     * Creates a new IngestAudienceMembersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IngestAudienceMembersRequest instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IIngestAudienceMembersRequest): google.ads.datamanager.v1.IngestAudienceMembersRequest;

                    /**
                     * Encodes the specified IngestAudienceMembersRequest message. Does not implicitly {@link google.ads.datamanager.v1.IngestAudienceMembersRequest.verify|verify} messages.
                     * @param message IngestAudienceMembersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IIngestAudienceMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IngestAudienceMembersRequest message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.IngestAudienceMembersRequest.verify|verify} messages.
                     * @param message IngestAudienceMembersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IIngestAudienceMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IngestAudienceMembersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IngestAudienceMembersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.IngestAudienceMembersRequest;

                    /**
                     * Decodes an IngestAudienceMembersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IngestAudienceMembersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.IngestAudienceMembersRequest;

                    /**
                     * Verifies an IngestAudienceMembersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IngestAudienceMembersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IngestAudienceMembersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.IngestAudienceMembersRequest;

                    /**
                     * Creates a plain object from an IngestAudienceMembersRequest message. Also converts values to other types if specified.
                     * @param message IngestAudienceMembersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.IngestAudienceMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IngestAudienceMembersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IngestAudienceMembersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IngestAudienceMembersResponse. */
                interface IIngestAudienceMembersResponse {

                    /** IngestAudienceMembersResponse requestId */
                    requestId?: (string|null);
                }

                /** Represents an IngestAudienceMembersResponse. */
                class IngestAudienceMembersResponse implements IIngestAudienceMembersResponse {

                    /**
                     * Constructs a new IngestAudienceMembersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IIngestAudienceMembersResponse);

                    /** IngestAudienceMembersResponse requestId. */
                    public requestId: string;

                    /**
                     * Creates a new IngestAudienceMembersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IngestAudienceMembersResponse instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IIngestAudienceMembersResponse): google.ads.datamanager.v1.IngestAudienceMembersResponse;

                    /**
                     * Encodes the specified IngestAudienceMembersResponse message. Does not implicitly {@link google.ads.datamanager.v1.IngestAudienceMembersResponse.verify|verify} messages.
                     * @param message IngestAudienceMembersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IIngestAudienceMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IngestAudienceMembersResponse message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.IngestAudienceMembersResponse.verify|verify} messages.
                     * @param message IngestAudienceMembersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IIngestAudienceMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IngestAudienceMembersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IngestAudienceMembersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.IngestAudienceMembersResponse;

                    /**
                     * Decodes an IngestAudienceMembersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IngestAudienceMembersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.IngestAudienceMembersResponse;

                    /**
                     * Verifies an IngestAudienceMembersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IngestAudienceMembersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IngestAudienceMembersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.IngestAudienceMembersResponse;

                    /**
                     * Creates a plain object from an IngestAudienceMembersResponse message. Also converts values to other types if specified.
                     * @param message IngestAudienceMembersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.IngestAudienceMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IngestAudienceMembersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IngestAudienceMembersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveAudienceMembersRequest. */
                interface IRemoveAudienceMembersRequest {

                    /** RemoveAudienceMembersRequest destinations */
                    destinations?: (google.ads.datamanager.v1.IDestination[]|null);

                    /** RemoveAudienceMembersRequest audienceMembers */
                    audienceMembers?: (google.ads.datamanager.v1.IAudienceMember[]|null);

                    /** RemoveAudienceMembersRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** RemoveAudienceMembersRequest encoding */
                    encoding?: (google.ads.datamanager.v1.Encoding|keyof typeof google.ads.datamanager.v1.Encoding|null);

                    /** RemoveAudienceMembersRequest encryptionInfo */
                    encryptionInfo?: (google.ads.datamanager.v1.IEncryptionInfo|null);
                }

                /** Represents a RemoveAudienceMembersRequest. */
                class RemoveAudienceMembersRequest implements IRemoveAudienceMembersRequest {

                    /**
                     * Constructs a new RemoveAudienceMembersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IRemoveAudienceMembersRequest);

                    /** RemoveAudienceMembersRequest destinations. */
                    public destinations: google.ads.datamanager.v1.IDestination[];

                    /** RemoveAudienceMembersRequest audienceMembers. */
                    public audienceMembers: google.ads.datamanager.v1.IAudienceMember[];

                    /** RemoveAudienceMembersRequest validateOnly. */
                    public validateOnly: boolean;

                    /** RemoveAudienceMembersRequest encoding. */
                    public encoding: (google.ads.datamanager.v1.Encoding|keyof typeof google.ads.datamanager.v1.Encoding);

                    /** RemoveAudienceMembersRequest encryptionInfo. */
                    public encryptionInfo?: (google.ads.datamanager.v1.IEncryptionInfo|null);

                    /**
                     * Creates a new RemoveAudienceMembersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveAudienceMembersRequest instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IRemoveAudienceMembersRequest): google.ads.datamanager.v1.RemoveAudienceMembersRequest;

                    /**
                     * Encodes the specified RemoveAudienceMembersRequest message. Does not implicitly {@link google.ads.datamanager.v1.RemoveAudienceMembersRequest.verify|verify} messages.
                     * @param message RemoveAudienceMembersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IRemoveAudienceMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveAudienceMembersRequest message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RemoveAudienceMembersRequest.verify|verify} messages.
                     * @param message RemoveAudienceMembersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IRemoveAudienceMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveAudienceMembersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveAudienceMembersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RemoveAudienceMembersRequest;

                    /**
                     * Decodes a RemoveAudienceMembersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveAudienceMembersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RemoveAudienceMembersRequest;

                    /**
                     * Verifies a RemoveAudienceMembersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveAudienceMembersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveAudienceMembersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RemoveAudienceMembersRequest;

                    /**
                     * Creates a plain object from a RemoveAudienceMembersRequest message. Also converts values to other types if specified.
                     * @param message RemoveAudienceMembersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.RemoveAudienceMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveAudienceMembersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveAudienceMembersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveAudienceMembersResponse. */
                interface IRemoveAudienceMembersResponse {

                    /** RemoveAudienceMembersResponse requestId */
                    requestId?: (string|null);
                }

                /** Represents a RemoveAudienceMembersResponse. */
                class RemoveAudienceMembersResponse implements IRemoveAudienceMembersResponse {

                    /**
                     * Constructs a new RemoveAudienceMembersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IRemoveAudienceMembersResponse);

                    /** RemoveAudienceMembersResponse requestId. */
                    public requestId: string;

                    /**
                     * Creates a new RemoveAudienceMembersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveAudienceMembersResponse instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IRemoveAudienceMembersResponse): google.ads.datamanager.v1.RemoveAudienceMembersResponse;

                    /**
                     * Encodes the specified RemoveAudienceMembersResponse message. Does not implicitly {@link google.ads.datamanager.v1.RemoveAudienceMembersResponse.verify|verify} messages.
                     * @param message RemoveAudienceMembersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IRemoveAudienceMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveAudienceMembersResponse message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RemoveAudienceMembersResponse.verify|verify} messages.
                     * @param message RemoveAudienceMembersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IRemoveAudienceMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveAudienceMembersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveAudienceMembersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RemoveAudienceMembersResponse;

                    /**
                     * Decodes a RemoveAudienceMembersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveAudienceMembersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RemoveAudienceMembersResponse;

                    /**
                     * Verifies a RemoveAudienceMembersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveAudienceMembersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveAudienceMembersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RemoveAudienceMembersResponse;

                    /**
                     * Creates a plain object from a RemoveAudienceMembersResponse message. Also converts values to other types if specified.
                     * @param message RemoveAudienceMembersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.RemoveAudienceMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveAudienceMembersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveAudienceMembersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IngestEventsRequest. */
                interface IIngestEventsRequest {

                    /** IngestEventsRequest destinations */
                    destinations?: (google.ads.datamanager.v1.IDestination[]|null);

                    /** IngestEventsRequest events */
                    events?: (google.ads.datamanager.v1.IEvent[]|null);

                    /** IngestEventsRequest consent */
                    consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** IngestEventsRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** IngestEventsRequest encoding */
                    encoding?: (google.ads.datamanager.v1.Encoding|keyof typeof google.ads.datamanager.v1.Encoding|null);

                    /** IngestEventsRequest encryptionInfo */
                    encryptionInfo?: (google.ads.datamanager.v1.IEncryptionInfo|null);
                }

                /** Represents an IngestEventsRequest. */
                class IngestEventsRequest implements IIngestEventsRequest {

                    /**
                     * Constructs a new IngestEventsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IIngestEventsRequest);

                    /** IngestEventsRequest destinations. */
                    public destinations: google.ads.datamanager.v1.IDestination[];

                    /** IngestEventsRequest events. */
                    public events: google.ads.datamanager.v1.IEvent[];

                    /** IngestEventsRequest consent. */
                    public consent?: (google.ads.datamanager.v1.IConsent|null);

                    /** IngestEventsRequest validateOnly. */
                    public validateOnly: boolean;

                    /** IngestEventsRequest encoding. */
                    public encoding: (google.ads.datamanager.v1.Encoding|keyof typeof google.ads.datamanager.v1.Encoding);

                    /** IngestEventsRequest encryptionInfo. */
                    public encryptionInfo?: (google.ads.datamanager.v1.IEncryptionInfo|null);

                    /**
                     * Creates a new IngestEventsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IngestEventsRequest instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IIngestEventsRequest): google.ads.datamanager.v1.IngestEventsRequest;

                    /**
                     * Encodes the specified IngestEventsRequest message. Does not implicitly {@link google.ads.datamanager.v1.IngestEventsRequest.verify|verify} messages.
                     * @param message IngestEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IIngestEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IngestEventsRequest message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.IngestEventsRequest.verify|verify} messages.
                     * @param message IngestEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IIngestEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IngestEventsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IngestEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.IngestEventsRequest;

                    /**
                     * Decodes an IngestEventsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IngestEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.IngestEventsRequest;

                    /**
                     * Verifies an IngestEventsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IngestEventsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IngestEventsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.IngestEventsRequest;

                    /**
                     * Creates a plain object from an IngestEventsRequest message. Also converts values to other types if specified.
                     * @param message IngestEventsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.IngestEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IngestEventsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IngestEventsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IngestEventsResponse. */
                interface IIngestEventsResponse {

                    /** IngestEventsResponse requestId */
                    requestId?: (string|null);
                }

                /** Represents an IngestEventsResponse. */
                class IngestEventsResponse implements IIngestEventsResponse {

                    /**
                     * Constructs a new IngestEventsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IIngestEventsResponse);

                    /** IngestEventsResponse requestId. */
                    public requestId: string;

                    /**
                     * Creates a new IngestEventsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IngestEventsResponse instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IIngestEventsResponse): google.ads.datamanager.v1.IngestEventsResponse;

                    /**
                     * Encodes the specified IngestEventsResponse message. Does not implicitly {@link google.ads.datamanager.v1.IngestEventsResponse.verify|verify} messages.
                     * @param message IngestEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IIngestEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IngestEventsResponse message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.IngestEventsResponse.verify|verify} messages.
                     * @param message IngestEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IIngestEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IngestEventsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IngestEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.IngestEventsResponse;

                    /**
                     * Decodes an IngestEventsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IngestEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.IngestEventsResponse;

                    /**
                     * Verifies an IngestEventsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IngestEventsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IngestEventsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.IngestEventsResponse;

                    /**
                     * Creates a plain object from an IngestEventsResponse message. Also converts values to other types if specified.
                     * @param message IngestEventsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.IngestEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IngestEventsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IngestEventsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetrieveRequestStatusRequest. */
                interface IRetrieveRequestStatusRequest {

                    /** RetrieveRequestStatusRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a RetrieveRequestStatusRequest. */
                class RetrieveRequestStatusRequest implements IRetrieveRequestStatusRequest {

                    /**
                     * Constructs a new RetrieveRequestStatusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IRetrieveRequestStatusRequest);

                    /** RetrieveRequestStatusRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new RetrieveRequestStatusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveRequestStatusRequest instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IRetrieveRequestStatusRequest): google.ads.datamanager.v1.RetrieveRequestStatusRequest;

                    /**
                     * Encodes the specified RetrieveRequestStatusRequest message. Does not implicitly {@link google.ads.datamanager.v1.RetrieveRequestStatusRequest.verify|verify} messages.
                     * @param message RetrieveRequestStatusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IRetrieveRequestStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveRequestStatusRequest message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RetrieveRequestStatusRequest.verify|verify} messages.
                     * @param message RetrieveRequestStatusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IRetrieveRequestStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveRequestStatusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveRequestStatusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RetrieveRequestStatusRequest;

                    /**
                     * Decodes a RetrieveRequestStatusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveRequestStatusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RetrieveRequestStatusRequest;

                    /**
                     * Verifies a RetrieveRequestStatusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveRequestStatusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveRequestStatusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RetrieveRequestStatusRequest;

                    /**
                     * Creates a plain object from a RetrieveRequestStatusRequest message. Also converts values to other types if specified.
                     * @param message RetrieveRequestStatusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.RetrieveRequestStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveRequestStatusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetrieveRequestStatusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetrieveRequestStatusResponse. */
                interface IRetrieveRequestStatusResponse {

                    /** RetrieveRequestStatusResponse requestStatusPerDestination */
                    requestStatusPerDestination?: (google.ads.datamanager.v1.IRequestStatusPerDestination[]|null);
                }

                /** Represents a RetrieveRequestStatusResponse. */
                class RetrieveRequestStatusResponse implements IRetrieveRequestStatusResponse {

                    /**
                     * Constructs a new RetrieveRequestStatusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IRetrieveRequestStatusResponse);

                    /** RetrieveRequestStatusResponse requestStatusPerDestination. */
                    public requestStatusPerDestination: google.ads.datamanager.v1.IRequestStatusPerDestination[];

                    /**
                     * Creates a new RetrieveRequestStatusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveRequestStatusResponse instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IRetrieveRequestStatusResponse): google.ads.datamanager.v1.RetrieveRequestStatusResponse;

                    /**
                     * Encodes the specified RetrieveRequestStatusResponse message. Does not implicitly {@link google.ads.datamanager.v1.RetrieveRequestStatusResponse.verify|verify} messages.
                     * @param message RetrieveRequestStatusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IRetrieveRequestStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveRequestStatusResponse message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RetrieveRequestStatusResponse.verify|verify} messages.
                     * @param message RetrieveRequestStatusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IRetrieveRequestStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveRequestStatusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveRequestStatusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RetrieveRequestStatusResponse;

                    /**
                     * Decodes a RetrieveRequestStatusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveRequestStatusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RetrieveRequestStatusResponse;

                    /**
                     * Verifies a RetrieveRequestStatusResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveRequestStatusResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveRequestStatusResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RetrieveRequestStatusResponse;

                    /**
                     * Creates a plain object from a RetrieveRequestStatusResponse message. Also converts values to other types if specified.
                     * @param message RetrieveRequestStatusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.RetrieveRequestStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveRequestStatusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetrieveRequestStatusResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Encoding enum. */
                enum Encoding {
                    ENCODING_UNSPECIFIED = 0,
                    HEX = 1,
                    BASE64 = 2
                }

                /** Properties of a RequestStatusPerDestination. */
                interface IRequestStatusPerDestination {

                    /** RequestStatusPerDestination destination */
                    destination?: (google.ads.datamanager.v1.IDestination|null);

                    /** RequestStatusPerDestination requestStatus */
                    requestStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.RequestStatus|keyof typeof google.ads.datamanager.v1.RequestStatusPerDestination.RequestStatus|null);

                    /** RequestStatusPerDestination errorInfo */
                    errorInfo?: (google.ads.datamanager.v1.IErrorInfo|null);

                    /** RequestStatusPerDestination warningInfo */
                    warningInfo?: (google.ads.datamanager.v1.IWarningInfo|null);

                    /** RequestStatusPerDestination audienceMembersIngestionStatus */
                    audienceMembersIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestAudienceMembersStatus|null);

                    /** RequestStatusPerDestination eventsIngestionStatus */
                    eventsIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestEventsStatus|null);

                    /** RequestStatusPerDestination audienceMembersRemovalStatus */
                    audienceMembersRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveAudienceMembersStatus|null);
                }

                /** Represents a RequestStatusPerDestination. */
                class RequestStatusPerDestination implements IRequestStatusPerDestination {

                    /**
                     * Constructs a new RequestStatusPerDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IRequestStatusPerDestination);

                    /** RequestStatusPerDestination destination. */
                    public destination?: (google.ads.datamanager.v1.IDestination|null);

                    /** RequestStatusPerDestination requestStatus. */
                    public requestStatus: (google.ads.datamanager.v1.RequestStatusPerDestination.RequestStatus|keyof typeof google.ads.datamanager.v1.RequestStatusPerDestination.RequestStatus);

                    /** RequestStatusPerDestination errorInfo. */
                    public errorInfo?: (google.ads.datamanager.v1.IErrorInfo|null);

                    /** RequestStatusPerDestination warningInfo. */
                    public warningInfo?: (google.ads.datamanager.v1.IWarningInfo|null);

                    /** RequestStatusPerDestination audienceMembersIngestionStatus. */
                    public audienceMembersIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestAudienceMembersStatus|null);

                    /** RequestStatusPerDestination eventsIngestionStatus. */
                    public eventsIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestEventsStatus|null);

                    /** RequestStatusPerDestination audienceMembersRemovalStatus. */
                    public audienceMembersRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveAudienceMembersStatus|null);

                    /** RequestStatusPerDestination status. */
                    public status?: ("audienceMembersIngestionStatus"|"eventsIngestionStatus"|"audienceMembersRemovalStatus");

                    /**
                     * Creates a new RequestStatusPerDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RequestStatusPerDestination instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IRequestStatusPerDestination): google.ads.datamanager.v1.RequestStatusPerDestination;

                    /**
                     * Encodes the specified RequestStatusPerDestination message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.verify|verify} messages.
                     * @param message RequestStatusPerDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IRequestStatusPerDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RequestStatusPerDestination message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.verify|verify} messages.
                     * @param message RequestStatusPerDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IRequestStatusPerDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RequestStatusPerDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RequestStatusPerDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination;

                    /**
                     * Decodes a RequestStatusPerDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RequestStatusPerDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination;

                    /**
                     * Verifies a RequestStatusPerDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RequestStatusPerDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RequestStatusPerDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination;

                    /**
                     * Creates a plain object from a RequestStatusPerDestination message. Also converts values to other types if specified.
                     * @param message RequestStatusPerDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RequestStatusPerDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RequestStatusPerDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RequestStatusPerDestination {

                    /** RequestStatus enum. */
                    enum RequestStatus {
                        REQUEST_STATUS_UNKNOWN = 0,
                        SUCCESS = 1,
                        PROCESSING = 2,
                        FAILED = 3,
                        PARTIAL_SUCCESS = 4
                    }

                    /** Properties of an IngestAudienceMembersStatus. */
                    interface IIngestAudienceMembersStatus {

                        /** IngestAudienceMembersStatus userDataIngestionStatus */
                        userDataIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestUserDataStatus|null);

                        /** IngestAudienceMembersStatus mobileDataIngestionStatus */
                        mobileDataIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestMobileDataStatus|null);

                        /** IngestAudienceMembersStatus pairDataIngestionStatus */
                        pairDataIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestPairDataStatus|null);
                    }

                    /** Represents an IngestAudienceMembersStatus. */
                    class IngestAudienceMembersStatus implements IIngestAudienceMembersStatus {

                        /**
                         * Constructs a new IngestAudienceMembersStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestAudienceMembersStatus);

                        /** IngestAudienceMembersStatus userDataIngestionStatus. */
                        public userDataIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestUserDataStatus|null);

                        /** IngestAudienceMembersStatus mobileDataIngestionStatus. */
                        public mobileDataIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestMobileDataStatus|null);

                        /** IngestAudienceMembersStatus pairDataIngestionStatus. */
                        public pairDataIngestionStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IIngestPairDataStatus|null);

                        /** IngestAudienceMembersStatus status. */
                        public status?: ("userDataIngestionStatus"|"mobileDataIngestionStatus"|"pairDataIngestionStatus");

                        /**
                         * Creates a new IngestAudienceMembersStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngestAudienceMembersStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestAudienceMembersStatus): google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus;

                        /**
                         * Encodes the specified IngestAudienceMembersStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus.verify|verify} messages.
                         * @param message IngestAudienceMembersStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestAudienceMembersStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngestAudienceMembersStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus.verify|verify} messages.
                         * @param message IngestAudienceMembersStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestAudienceMembersStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngestAudienceMembersStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngestAudienceMembersStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus;

                        /**
                         * Decodes an IngestAudienceMembersStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngestAudienceMembersStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus;

                        /**
                         * Verifies an IngestAudienceMembersStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngestAudienceMembersStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngestAudienceMembersStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus;

                        /**
                         * Creates a plain object from an IngestAudienceMembersStatus message. Also converts values to other types if specified.
                         * @param message IngestAudienceMembersStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.IngestAudienceMembersStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngestAudienceMembersStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IngestAudienceMembersStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RemoveAudienceMembersStatus. */
                    interface IRemoveAudienceMembersStatus {

                        /** RemoveAudienceMembersStatus userDataRemovalStatus */
                        userDataRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveUserDataStatus|null);

                        /** RemoveAudienceMembersStatus mobileDataRemovalStatus */
                        mobileDataRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveMobileDataStatus|null);

                        /** RemoveAudienceMembersStatus pairDataRemovalStatus */
                        pairDataRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemovePairDataStatus|null);
                    }

                    /** Represents a RemoveAudienceMembersStatus. */
                    class RemoveAudienceMembersStatus implements IRemoveAudienceMembersStatus {

                        /**
                         * Constructs a new RemoveAudienceMembersStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveAudienceMembersStatus);

                        /** RemoveAudienceMembersStatus userDataRemovalStatus. */
                        public userDataRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveUserDataStatus|null);

                        /** RemoveAudienceMembersStatus mobileDataRemovalStatus. */
                        public mobileDataRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveMobileDataStatus|null);

                        /** RemoveAudienceMembersStatus pairDataRemovalStatus. */
                        public pairDataRemovalStatus?: (google.ads.datamanager.v1.RequestStatusPerDestination.IRemovePairDataStatus|null);

                        /** RemoveAudienceMembersStatus status. */
                        public status?: ("userDataRemovalStatus"|"mobileDataRemovalStatus"|"pairDataRemovalStatus");

                        /**
                         * Creates a new RemoveAudienceMembersStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveAudienceMembersStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveAudienceMembersStatus): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus;

                        /**
                         * Encodes the specified RemoveAudienceMembersStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus.verify|verify} messages.
                         * @param message RemoveAudienceMembersStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveAudienceMembersStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveAudienceMembersStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus.verify|verify} messages.
                         * @param message RemoveAudienceMembersStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveAudienceMembersStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveAudienceMembersStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveAudienceMembersStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus;

                        /**
                         * Decodes a RemoveAudienceMembersStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveAudienceMembersStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus;

                        /**
                         * Verifies a RemoveAudienceMembersStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveAudienceMembersStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveAudienceMembersStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus;

                        /**
                         * Creates a plain object from a RemoveAudienceMembersStatus message. Also converts values to other types if specified.
                         * @param message RemoveAudienceMembersStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.RemoveAudienceMembersStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveAudienceMembersStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RemoveAudienceMembersStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IngestEventsStatus. */
                    interface IIngestEventsStatus {

                        /** IngestEventsStatus recordCount */
                        recordCount?: (number|Long|string|null);
                    }

                    /** Represents an IngestEventsStatus. */
                    class IngestEventsStatus implements IIngestEventsStatus {

                        /**
                         * Constructs a new IngestEventsStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestEventsStatus);

                        /** IngestEventsStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /**
                         * Creates a new IngestEventsStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngestEventsStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestEventsStatus): google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus;

                        /**
                         * Encodes the specified IngestEventsStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus.verify|verify} messages.
                         * @param message IngestEventsStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestEventsStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngestEventsStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus.verify|verify} messages.
                         * @param message IngestEventsStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestEventsStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngestEventsStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngestEventsStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus;

                        /**
                         * Decodes an IngestEventsStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngestEventsStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus;

                        /**
                         * Verifies an IngestEventsStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngestEventsStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngestEventsStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus;

                        /**
                         * Creates a plain object from an IngestEventsStatus message. Also converts values to other types if specified.
                         * @param message IngestEventsStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.IngestEventsStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngestEventsStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IngestEventsStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IngestUserDataStatus. */
                    interface IIngestUserDataStatus {

                        /** IngestUserDataStatus recordCount */
                        recordCount?: (number|Long|string|null);

                        /** IngestUserDataStatus userIdentifierCount */
                        userIdentifierCount?: (number|Long|string|null);

                        /** IngestUserDataStatus uploadMatchRateRange */
                        uploadMatchRateRange?: (google.ads.datamanager.v1.MatchRateRange|keyof typeof google.ads.datamanager.v1.MatchRateRange|null);
                    }

                    /** Represents an IngestUserDataStatus. */
                    class IngestUserDataStatus implements IIngestUserDataStatus {

                        /**
                         * Constructs a new IngestUserDataStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestUserDataStatus);

                        /** IngestUserDataStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /** IngestUserDataStatus userIdentifierCount. */
                        public userIdentifierCount: (number|Long|string);

                        /** IngestUserDataStatus uploadMatchRateRange. */
                        public uploadMatchRateRange: (google.ads.datamanager.v1.MatchRateRange|keyof typeof google.ads.datamanager.v1.MatchRateRange);

                        /**
                         * Creates a new IngestUserDataStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngestUserDataStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestUserDataStatus): google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus;

                        /**
                         * Encodes the specified IngestUserDataStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus.verify|verify} messages.
                         * @param message IngestUserDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestUserDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngestUserDataStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus.verify|verify} messages.
                         * @param message IngestUserDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestUserDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngestUserDataStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngestUserDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus;

                        /**
                         * Decodes an IngestUserDataStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngestUserDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus;

                        /**
                         * Verifies an IngestUserDataStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngestUserDataStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngestUserDataStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus;

                        /**
                         * Creates a plain object from an IngestUserDataStatus message. Also converts values to other types if specified.
                         * @param message IngestUserDataStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.IngestUserDataStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngestUserDataStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IngestUserDataStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RemoveUserDataStatus. */
                    interface IRemoveUserDataStatus {

                        /** RemoveUserDataStatus recordCount */
                        recordCount?: (number|Long|string|null);

                        /** RemoveUserDataStatus userIdentifierCount */
                        userIdentifierCount?: (number|Long|string|null);
                    }

                    /** Represents a RemoveUserDataStatus. */
                    class RemoveUserDataStatus implements IRemoveUserDataStatus {

                        /**
                         * Constructs a new RemoveUserDataStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveUserDataStatus);

                        /** RemoveUserDataStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /** RemoveUserDataStatus userIdentifierCount. */
                        public userIdentifierCount: (number|Long|string);

                        /**
                         * Creates a new RemoveUserDataStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveUserDataStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveUserDataStatus): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus;

                        /**
                         * Encodes the specified RemoveUserDataStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus.verify|verify} messages.
                         * @param message RemoveUserDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveUserDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveUserDataStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus.verify|verify} messages.
                         * @param message RemoveUserDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveUserDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveUserDataStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveUserDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus;

                        /**
                         * Decodes a RemoveUserDataStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveUserDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus;

                        /**
                         * Verifies a RemoveUserDataStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveUserDataStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveUserDataStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus;

                        /**
                         * Creates a plain object from a RemoveUserDataStatus message. Also converts values to other types if specified.
                         * @param message RemoveUserDataStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.RemoveUserDataStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveUserDataStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RemoveUserDataStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IngestMobileDataStatus. */
                    interface IIngestMobileDataStatus {

                        /** IngestMobileDataStatus recordCount */
                        recordCount?: (number|Long|string|null);

                        /** IngestMobileDataStatus mobileIdCount */
                        mobileIdCount?: (number|Long|string|null);
                    }

                    /** Represents an IngestMobileDataStatus. */
                    class IngestMobileDataStatus implements IIngestMobileDataStatus {

                        /**
                         * Constructs a new IngestMobileDataStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestMobileDataStatus);

                        /** IngestMobileDataStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /** IngestMobileDataStatus mobileIdCount. */
                        public mobileIdCount: (number|Long|string);

                        /**
                         * Creates a new IngestMobileDataStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngestMobileDataStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestMobileDataStatus): google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus;

                        /**
                         * Encodes the specified IngestMobileDataStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus.verify|verify} messages.
                         * @param message IngestMobileDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestMobileDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngestMobileDataStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus.verify|verify} messages.
                         * @param message IngestMobileDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestMobileDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngestMobileDataStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngestMobileDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus;

                        /**
                         * Decodes an IngestMobileDataStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngestMobileDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus;

                        /**
                         * Verifies an IngestMobileDataStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngestMobileDataStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngestMobileDataStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus;

                        /**
                         * Creates a plain object from an IngestMobileDataStatus message. Also converts values to other types if specified.
                         * @param message IngestMobileDataStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.IngestMobileDataStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngestMobileDataStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IngestMobileDataStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RemoveMobileDataStatus. */
                    interface IRemoveMobileDataStatus {

                        /** RemoveMobileDataStatus recordCount */
                        recordCount?: (number|Long|string|null);

                        /** RemoveMobileDataStatus mobileIdCount */
                        mobileIdCount?: (number|Long|string|null);
                    }

                    /** Represents a RemoveMobileDataStatus. */
                    class RemoveMobileDataStatus implements IRemoveMobileDataStatus {

                        /**
                         * Constructs a new RemoveMobileDataStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveMobileDataStatus);

                        /** RemoveMobileDataStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /** RemoveMobileDataStatus mobileIdCount. */
                        public mobileIdCount: (number|Long|string);

                        /**
                         * Creates a new RemoveMobileDataStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemoveMobileDataStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveMobileDataStatus): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus;

                        /**
                         * Encodes the specified RemoveMobileDataStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus.verify|verify} messages.
                         * @param message RemoveMobileDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveMobileDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemoveMobileDataStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus.verify|verify} messages.
                         * @param message RemoveMobileDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemoveMobileDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemoveMobileDataStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemoveMobileDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus;

                        /**
                         * Decodes a RemoveMobileDataStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemoveMobileDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus;

                        /**
                         * Verifies a RemoveMobileDataStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemoveMobileDataStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemoveMobileDataStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus;

                        /**
                         * Creates a plain object from a RemoveMobileDataStatus message. Also converts values to other types if specified.
                         * @param message RemoveMobileDataStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.RemoveMobileDataStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemoveMobileDataStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RemoveMobileDataStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IngestPairDataStatus. */
                    interface IIngestPairDataStatus {

                        /** IngestPairDataStatus recordCount */
                        recordCount?: (number|Long|string|null);

                        /** IngestPairDataStatus pairIdCount */
                        pairIdCount?: (number|Long|string|null);
                    }

                    /** Represents an IngestPairDataStatus. */
                    class IngestPairDataStatus implements IIngestPairDataStatus {

                        /**
                         * Constructs a new IngestPairDataStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestPairDataStatus);

                        /** IngestPairDataStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /** IngestPairDataStatus pairIdCount. */
                        public pairIdCount: (number|Long|string);

                        /**
                         * Creates a new IngestPairDataStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngestPairDataStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestPairDataStatus): google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus;

                        /**
                         * Encodes the specified IngestPairDataStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus.verify|verify} messages.
                         * @param message IngestPairDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestPairDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngestPairDataStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus.verify|verify} messages.
                         * @param message IngestPairDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IIngestPairDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngestPairDataStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngestPairDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus;

                        /**
                         * Decodes an IngestPairDataStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngestPairDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus;

                        /**
                         * Verifies an IngestPairDataStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngestPairDataStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngestPairDataStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus;

                        /**
                         * Creates a plain object from an IngestPairDataStatus message. Also converts values to other types if specified.
                         * @param message IngestPairDataStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.IngestPairDataStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngestPairDataStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IngestPairDataStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RemovePairDataStatus. */
                    interface IRemovePairDataStatus {

                        /** RemovePairDataStatus recordCount */
                        recordCount?: (number|Long|string|null);

                        /** RemovePairDataStatus pairIdCount */
                        pairIdCount?: (number|Long|string|null);
                    }

                    /** Represents a RemovePairDataStatus. */
                    class RemovePairDataStatus implements IRemovePairDataStatus {

                        /**
                         * Constructs a new RemovePairDataStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemovePairDataStatus);

                        /** RemovePairDataStatus recordCount. */
                        public recordCount: (number|Long|string);

                        /** RemovePairDataStatus pairIdCount. */
                        public pairIdCount: (number|Long|string);

                        /**
                         * Creates a new RemovePairDataStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RemovePairDataStatus instance
                         */
                        public static create(properties?: google.ads.datamanager.v1.RequestStatusPerDestination.IRemovePairDataStatus): google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus;

                        /**
                         * Encodes the specified RemovePairDataStatus message. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus.verify|verify} messages.
                         * @param message RemovePairDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemovePairDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RemovePairDataStatus message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus.verify|verify} messages.
                         * @param message RemovePairDataStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.datamanager.v1.RequestStatusPerDestination.IRemovePairDataStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RemovePairDataStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RemovePairDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus;

                        /**
                         * Decodes a RemovePairDataStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RemovePairDataStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus;

                        /**
                         * Verifies a RemovePairDataStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RemovePairDataStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RemovePairDataStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus;

                        /**
                         * Creates a plain object from a RemovePairDataStatus message. Also converts values to other types if specified.
                         * @param message RemovePairDataStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.datamanager.v1.RequestStatusPerDestination.RemovePairDataStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RemovePairDataStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RemovePairDataStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** MatchRateRange enum. */
                enum MatchRateRange {
                    MATCH_RATE_RANGE_UNKNOWN = 0,
                    MATCH_RATE_RANGE_NOT_ELIGIBLE = 1,
                    MATCH_RATE_RANGE_LESS_THAN_20 = 2,
                    MATCH_RATE_RANGE_20_TO_30 = 3,
                    MATCH_RATE_RANGE_31_TO_40 = 4,
                    MATCH_RATE_RANGE_41_TO_50 = 5,
                    MATCH_RATE_RANGE_51_TO_60 = 6,
                    MATCH_RATE_RANGE_61_TO_70 = 7,
                    MATCH_RATE_RANGE_71_TO_80 = 8,
                    MATCH_RATE_RANGE_81_TO_90 = 9,
                    MATCH_RATE_RANGE_91_TO_100 = 10
                }

                /** Properties of an ErrorInfo. */
                interface IErrorInfo {

                    /** ErrorInfo errorCounts */
                    errorCounts?: (google.ads.datamanager.v1.IErrorCount[]|null);
                }

                /** Represents an ErrorInfo. */
                class ErrorInfo implements IErrorInfo {

                    /**
                     * Constructs a new ErrorInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IErrorInfo);

                    /** ErrorInfo errorCounts. */
                    public errorCounts: google.ads.datamanager.v1.IErrorCount[];

                    /**
                     * Creates a new ErrorInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ErrorInfo instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IErrorInfo): google.ads.datamanager.v1.ErrorInfo;

                    /**
                     * Encodes the specified ErrorInfo message. Does not implicitly {@link google.ads.datamanager.v1.ErrorInfo.verify|verify} messages.
                     * @param message ErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.ErrorInfo.verify|verify} messages.
                     * @param message ErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ErrorInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.ErrorInfo;

                    /**
                     * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.ErrorInfo;

                    /**
                     * Verifies an ErrorInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ErrorInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.ErrorInfo;

                    /**
                     * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
                     * @param message ErrorInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ErrorInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ErrorInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ErrorCount. */
                interface IErrorCount {

                    /** ErrorCount recordCount */
                    recordCount?: (number|Long|string|null);

                    /** ErrorCount reason */
                    reason?: (google.ads.datamanager.v1.ProcessingErrorReason|keyof typeof google.ads.datamanager.v1.ProcessingErrorReason|null);
                }

                /** Represents an ErrorCount. */
                class ErrorCount implements IErrorCount {

                    /**
                     * Constructs a new ErrorCount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IErrorCount);

                    /** ErrorCount recordCount. */
                    public recordCount: (number|Long|string);

                    /** ErrorCount reason. */
                    public reason: (google.ads.datamanager.v1.ProcessingErrorReason|keyof typeof google.ads.datamanager.v1.ProcessingErrorReason);

                    /**
                     * Creates a new ErrorCount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ErrorCount instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IErrorCount): google.ads.datamanager.v1.ErrorCount;

                    /**
                     * Encodes the specified ErrorCount message. Does not implicitly {@link google.ads.datamanager.v1.ErrorCount.verify|verify} messages.
                     * @param message ErrorCount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IErrorCount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ErrorCount message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.ErrorCount.verify|verify} messages.
                     * @param message ErrorCount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IErrorCount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ErrorCount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ErrorCount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.ErrorCount;

                    /**
                     * Decodes an ErrorCount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ErrorCount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.ErrorCount;

                    /**
                     * Verifies an ErrorCount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ErrorCount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ErrorCount
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.ErrorCount;

                    /**
                     * Creates a plain object from an ErrorCount message. Also converts values to other types if specified.
                     * @param message ErrorCount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.ErrorCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ErrorCount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ErrorCount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WarningInfo. */
                interface IWarningInfo {

                    /** WarningInfo warningCounts */
                    warningCounts?: (google.ads.datamanager.v1.IWarningCount[]|null);
                }

                /** Represents a WarningInfo. */
                class WarningInfo implements IWarningInfo {

                    /**
                     * Constructs a new WarningInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IWarningInfo);

                    /** WarningInfo warningCounts. */
                    public warningCounts: google.ads.datamanager.v1.IWarningCount[];

                    /**
                     * Creates a new WarningInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WarningInfo instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IWarningInfo): google.ads.datamanager.v1.WarningInfo;

                    /**
                     * Encodes the specified WarningInfo message. Does not implicitly {@link google.ads.datamanager.v1.WarningInfo.verify|verify} messages.
                     * @param message WarningInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IWarningInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WarningInfo message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.WarningInfo.verify|verify} messages.
                     * @param message WarningInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IWarningInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WarningInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WarningInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.WarningInfo;

                    /**
                     * Decodes a WarningInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WarningInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.WarningInfo;

                    /**
                     * Verifies a WarningInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WarningInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WarningInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.WarningInfo;

                    /**
                     * Creates a plain object from a WarningInfo message. Also converts values to other types if specified.
                     * @param message WarningInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.WarningInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WarningInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WarningInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WarningCount. */
                interface IWarningCount {

                    /** WarningCount recordCount */
                    recordCount?: (number|Long|string|null);

                    /** WarningCount reason */
                    reason?: (google.ads.datamanager.v1.ProcessingWarningReason|keyof typeof google.ads.datamanager.v1.ProcessingWarningReason|null);
                }

                /** Represents a WarningCount. */
                class WarningCount implements IWarningCount {

                    /**
                     * Constructs a new WarningCount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.IWarningCount);

                    /** WarningCount recordCount. */
                    public recordCount: (number|Long|string);

                    /** WarningCount reason. */
                    public reason: (google.ads.datamanager.v1.ProcessingWarningReason|keyof typeof google.ads.datamanager.v1.ProcessingWarningReason);

                    /**
                     * Creates a new WarningCount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WarningCount instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.IWarningCount): google.ads.datamanager.v1.WarningCount;

                    /**
                     * Encodes the specified WarningCount message. Does not implicitly {@link google.ads.datamanager.v1.WarningCount.verify|verify} messages.
                     * @param message WarningCount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.IWarningCount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WarningCount message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.WarningCount.verify|verify} messages.
                     * @param message WarningCount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.IWarningCount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WarningCount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WarningCount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.WarningCount;

                    /**
                     * Decodes a WarningCount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WarningCount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.WarningCount;

                    /**
                     * Verifies a WarningCount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WarningCount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WarningCount
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.WarningCount;

                    /**
                     * Creates a plain object from a WarningCount message. Also converts values to other types if specified.
                     * @param message WarningCount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.WarningCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WarningCount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WarningCount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** ProcessingErrorReason enum. */
                enum ProcessingErrorReason {
                    PROCESSING_ERROR_REASON_UNSPECIFIED = 0,
                    PROCESSING_ERROR_REASON_INVALID_CUSTOM_VARIABLE = 1,
                    PROCESSING_ERROR_REASON_CUSTOM_VARIABLE_NOT_ENABLED = 2,
                    PROCESSING_ERROR_REASON_EVENT_TOO_OLD = 3,
                    PROCESSING_ERROR_REASON_DENIED_CONSENT = 4,
                    PROCESSING_ERROR_REASON_NO_CONSENT = 5,
                    PROCESSING_ERROR_REASON_UNKNOWN_CONSENT = 6,
                    PROCESSING_ERROR_REASON_DUPLICATE_GCLID = 7,
                    PROCESSING_ERROR_REASON_DUPLICATE_TRANSACTION_ID = 8,
                    PROCESSING_ERROR_REASON_INVALID_GBRAID = 9,
                    PROCESSING_ERROR_REASON_INVALID_GCLID = 10,
                    PROCESSING_ERROR_REASON_INVALID_MERCHANT_ID = 11,
                    PROCESSING_ERROR_REASON_INVALID_WBRAID = 12,
                    PROCESSING_ERROR_REASON_INTERNAL_ERROR = 13,
                    PROCESSING_ERROR_REASON_DESTINATION_ACCOUNT_ENHANCED_CONVERSIONS_TERMS_NOT_SIGNED = 14,
                    PROCESSING_ERROR_REASON_INVALID_EVENT = 15,
                    PROCESSING_ERROR_REASON_INSUFFICIENT_MATCHED_TRANSACTIONS = 16,
                    PROCESSING_ERROR_REASON_INSUFFICIENT_TRANSACTIONS = 17,
                    PROCESSING_ERROR_REASON_INVALID_FORMAT = 18,
                    PROCESSING_ERROR_REASON_DECRYPTION_ERROR = 19,
                    PROCESSING_ERROR_REASON_DEK_DECRYPTION_ERROR = 20,
                    PROCESSING_ERROR_REASON_INVALID_WIP = 21,
                    PROCESSING_ERROR_REASON_INVALID_KEK = 22,
                    PROCESSING_ERROR_REASON_WIP_AUTH_FAILED = 23,
                    PROCESSING_ERROR_REASON_KEK_PERMISSION_DENIED = 24,
                    PROCESSING_ERROR_REASON_USER_IDENTIFIER_DECRYPTION_ERROR = 25,
                    PROCESSING_ERROR_OPERATING_ACCOUNT_MISMATCH_FOR_AD_IDENTIFIER = 26
                }

                /** ProcessingWarningReason enum. */
                enum ProcessingWarningReason {
                    PROCESSING_WARNING_REASON_UNSPECIFIED = 0,
                    PROCESSING_WARNING_REASON_KEK_PERMISSION_DENIED = 1,
                    PROCESSING_WARNING_REASON_DEK_DECRYPTION_ERROR = 2,
                    PROCESSING_WARNING_REASON_DECRYPTION_ERROR = 3,
                    PROCESSING_WARNING_REASON_WIP_AUTH_FAILED = 4,
                    PROCESSING_WARNING_REASON_INVALID_WIP = 5,
                    PROCESSING_WARNING_REASON_INVALID_KEK = 6,
                    PROCESSING_WARNING_REASON_USER_IDENTIFIER_DECRYPTION_ERROR = 7,
                    PROCESSING_WARNING_REASON_INTERNAL_ERROR = 8
                }

                /** Properties of a TermsOfService. */
                interface ITermsOfService {

                    /** TermsOfService customerMatchTermsOfServiceStatus */
                    customerMatchTermsOfServiceStatus?: (google.ads.datamanager.v1.TermsOfServiceStatus|keyof typeof google.ads.datamanager.v1.TermsOfServiceStatus|null);
                }

                /** Represents a TermsOfService. */
                class TermsOfService implements ITermsOfService {

                    /**
                     * Constructs a new TermsOfService.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ads.datamanager.v1.ITermsOfService);

                    /** TermsOfService customerMatchTermsOfServiceStatus. */
                    public customerMatchTermsOfServiceStatus: (google.ads.datamanager.v1.TermsOfServiceStatus|keyof typeof google.ads.datamanager.v1.TermsOfServiceStatus);

                    /**
                     * Creates a new TermsOfService instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TermsOfService instance
                     */
                    public static create(properties?: google.ads.datamanager.v1.ITermsOfService): google.ads.datamanager.v1.TermsOfService;

                    /**
                     * Encodes the specified TermsOfService message. Does not implicitly {@link google.ads.datamanager.v1.TermsOfService.verify|verify} messages.
                     * @param message TermsOfService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ads.datamanager.v1.ITermsOfService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TermsOfService message, length delimited. Does not implicitly {@link google.ads.datamanager.v1.TermsOfService.verify|verify} messages.
                     * @param message TermsOfService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ads.datamanager.v1.ITermsOfService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TermsOfService message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TermsOfService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.datamanager.v1.TermsOfService;

                    /**
                     * Decodes a TermsOfService message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TermsOfService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.datamanager.v1.TermsOfService;

                    /**
                     * Verifies a TermsOfService message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TermsOfService message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TermsOfService
                     */
                    public static fromObject(object: { [k: string]: any }): google.ads.datamanager.v1.TermsOfService;

                    /**
                     * Creates a plain object from a TermsOfService message. Also converts values to other types if specified.
                     * @param message TermsOfService
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ads.datamanager.v1.TermsOfService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TermsOfService to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TermsOfService
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** TermsOfServiceStatus enum. */
                enum TermsOfServiceStatus {
                    TERMS_OF_SERVICE_STATUS_UNSPECIFIED = 0,
                    ACCEPTED = 1,
                    REJECTED = 2
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
