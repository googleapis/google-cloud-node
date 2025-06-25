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

        /** Namespace binaryauthorization. */
        namespace binaryauthorization {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Policy. */
                interface IPolicy {

                    /** Policy name */
                    name?: (string|null);

                    /** Policy description */
                    description?: (string|null);

                    /** Policy globalPolicyEvaluationMode */
                    globalPolicyEvaluationMode?: (google.cloud.binaryauthorization.v1.Policy.GlobalPolicyEvaluationMode|keyof typeof google.cloud.binaryauthorization.v1.Policy.GlobalPolicyEvaluationMode|null);

                    /** Policy admissionWhitelistPatterns */
                    admissionWhitelistPatterns?: (google.cloud.binaryauthorization.v1.IAdmissionWhitelistPattern[]|null);

                    /** Policy clusterAdmissionRules */
                    clusterAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule }|null);

                    /** Policy kubernetesNamespaceAdmissionRules */
                    kubernetesNamespaceAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule }|null);

                    /** Policy kubernetesServiceAccountAdmissionRules */
                    kubernetesServiceAccountAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule }|null);

                    /** Policy istioServiceIdentityAdmissionRules */
                    istioServiceIdentityAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule }|null);

                    /** Policy defaultAdmissionRule */
                    defaultAdmissionRule?: (google.cloud.binaryauthorization.v1.IAdmissionRule|null);

                    /** Policy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Policy. */
                class Policy implements IPolicy {

                    /**
                     * Constructs a new Policy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IPolicy);

                    /** Policy name. */
                    public name: string;

                    /** Policy description. */
                    public description: string;

                    /** Policy globalPolicyEvaluationMode. */
                    public globalPolicyEvaluationMode: (google.cloud.binaryauthorization.v1.Policy.GlobalPolicyEvaluationMode|keyof typeof google.cloud.binaryauthorization.v1.Policy.GlobalPolicyEvaluationMode);

                    /** Policy admissionWhitelistPatterns. */
                    public admissionWhitelistPatterns: google.cloud.binaryauthorization.v1.IAdmissionWhitelistPattern[];

                    /** Policy clusterAdmissionRules. */
                    public clusterAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule };

                    /** Policy kubernetesNamespaceAdmissionRules. */
                    public kubernetesNamespaceAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule };

                    /** Policy kubernetesServiceAccountAdmissionRules. */
                    public kubernetesServiceAccountAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule };

                    /** Policy istioServiceIdentityAdmissionRules. */
                    public istioServiceIdentityAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1.IAdmissionRule };

                    /** Policy defaultAdmissionRule. */
                    public defaultAdmissionRule?: (google.cloud.binaryauthorization.v1.IAdmissionRule|null);

                    /** Policy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Policy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Policy instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IPolicy): google.cloud.binaryauthorization.v1.Policy;

                    /**
                     * Encodes the specified Policy message. Does not implicitly {@link google.cloud.binaryauthorization.v1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Policy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.Policy;

                    /**
                     * Decodes a Policy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.Policy;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.Policy;

                    /**
                     * Creates a plain object from a Policy message. Also converts values to other types if specified.
                     * @param message Policy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Policy {

                    /** GlobalPolicyEvaluationMode enum. */
                    enum GlobalPolicyEvaluationMode {
                        GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = 0,
                        ENABLE = 1,
                        DISABLE = 2
                    }
                }

                /** Properties of an AdmissionWhitelistPattern. */
                interface IAdmissionWhitelistPattern {

                    /** AdmissionWhitelistPattern namePattern */
                    namePattern?: (string|null);
                }

                /** Represents an AdmissionWhitelistPattern. */
                class AdmissionWhitelistPattern implements IAdmissionWhitelistPattern {

                    /**
                     * Constructs a new AdmissionWhitelistPattern.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IAdmissionWhitelistPattern);

                    /** AdmissionWhitelistPattern namePattern. */
                    public namePattern: string;

                    /**
                     * Creates a new AdmissionWhitelistPattern instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdmissionWhitelistPattern instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IAdmissionWhitelistPattern): google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern;

                    /**
                     * Encodes the specified AdmissionWhitelistPattern message. Does not implicitly {@link google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern.verify|verify} messages.
                     * @param message AdmissionWhitelistPattern message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IAdmissionWhitelistPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdmissionWhitelistPattern message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern.verify|verify} messages.
                     * @param message AdmissionWhitelistPattern message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IAdmissionWhitelistPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdmissionWhitelistPattern message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdmissionWhitelistPattern
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern;

                    /**
                     * Decodes an AdmissionWhitelistPattern message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdmissionWhitelistPattern
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern;

                    /**
                     * Verifies an AdmissionWhitelistPattern message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdmissionWhitelistPattern message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdmissionWhitelistPattern
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern;

                    /**
                     * Creates a plain object from an AdmissionWhitelistPattern message. Also converts values to other types if specified.
                     * @param message AdmissionWhitelistPattern
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.AdmissionWhitelistPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdmissionWhitelistPattern to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdmissionWhitelistPattern
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AdmissionRule. */
                interface IAdmissionRule {

                    /** AdmissionRule evaluationMode */
                    evaluationMode?: (google.cloud.binaryauthorization.v1.AdmissionRule.EvaluationMode|keyof typeof google.cloud.binaryauthorization.v1.AdmissionRule.EvaluationMode|null);

                    /** AdmissionRule requireAttestationsBy */
                    requireAttestationsBy?: (string[]|null);

                    /** AdmissionRule enforcementMode */
                    enforcementMode?: (google.cloud.binaryauthorization.v1.AdmissionRule.EnforcementMode|keyof typeof google.cloud.binaryauthorization.v1.AdmissionRule.EnforcementMode|null);
                }

                /** Represents an AdmissionRule. */
                class AdmissionRule implements IAdmissionRule {

                    /**
                     * Constructs a new AdmissionRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IAdmissionRule);

                    /** AdmissionRule evaluationMode. */
                    public evaluationMode: (google.cloud.binaryauthorization.v1.AdmissionRule.EvaluationMode|keyof typeof google.cloud.binaryauthorization.v1.AdmissionRule.EvaluationMode);

                    /** AdmissionRule requireAttestationsBy. */
                    public requireAttestationsBy: string[];

                    /** AdmissionRule enforcementMode. */
                    public enforcementMode: (google.cloud.binaryauthorization.v1.AdmissionRule.EnforcementMode|keyof typeof google.cloud.binaryauthorization.v1.AdmissionRule.EnforcementMode);

                    /**
                     * Creates a new AdmissionRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdmissionRule instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IAdmissionRule): google.cloud.binaryauthorization.v1.AdmissionRule;

                    /**
                     * Encodes the specified AdmissionRule message. Does not implicitly {@link google.cloud.binaryauthorization.v1.AdmissionRule.verify|verify} messages.
                     * @param message AdmissionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IAdmissionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdmissionRule message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.AdmissionRule.verify|verify} messages.
                     * @param message AdmissionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IAdmissionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdmissionRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdmissionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.AdmissionRule;

                    /**
                     * Decodes an AdmissionRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdmissionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.AdmissionRule;

                    /**
                     * Verifies an AdmissionRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdmissionRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdmissionRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.AdmissionRule;

                    /**
                     * Creates a plain object from an AdmissionRule message. Also converts values to other types if specified.
                     * @param message AdmissionRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.AdmissionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdmissionRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdmissionRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AdmissionRule {

                    /** EvaluationMode enum. */
                    enum EvaluationMode {
                        EVALUATION_MODE_UNSPECIFIED = 0,
                        ALWAYS_ALLOW = 1,
                        REQUIRE_ATTESTATION = 2,
                        ALWAYS_DENY = 3
                    }

                    /** EnforcementMode enum. */
                    enum EnforcementMode {
                        ENFORCEMENT_MODE_UNSPECIFIED = 0,
                        ENFORCED_BLOCK_AND_AUDIT_LOG = 1,
                        DRYRUN_AUDIT_LOG_ONLY = 2
                    }
                }

                /** Properties of an Attestor. */
                interface IAttestor {

                    /** Attestor name */
                    name?: (string|null);

                    /** Attestor description */
                    description?: (string|null);

                    /** Attestor userOwnedGrafeasNote */
                    userOwnedGrafeasNote?: (google.cloud.binaryauthorization.v1.IUserOwnedGrafeasNote|null);

                    /** Attestor updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Attestor. */
                class Attestor implements IAttestor {

                    /**
                     * Constructs a new Attestor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IAttestor);

                    /** Attestor name. */
                    public name: string;

                    /** Attestor description. */
                    public description: string;

                    /** Attestor userOwnedGrafeasNote. */
                    public userOwnedGrafeasNote?: (google.cloud.binaryauthorization.v1.IUserOwnedGrafeasNote|null);

                    /** Attestor updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Attestor attestorType. */
                    public attestorType?: "userOwnedGrafeasNote";

                    /**
                     * Creates a new Attestor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attestor instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IAttestor): google.cloud.binaryauthorization.v1.Attestor;

                    /**
                     * Encodes the specified Attestor message. Does not implicitly {@link google.cloud.binaryauthorization.v1.Attestor.verify|verify} messages.
                     * @param message Attestor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IAttestor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attestor message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.Attestor.verify|verify} messages.
                     * @param message Attestor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IAttestor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attestor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attestor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.Attestor;

                    /**
                     * Decodes an Attestor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attestor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.Attestor;

                    /**
                     * Verifies an Attestor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attestor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attestor
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.Attestor;

                    /**
                     * Creates a plain object from an Attestor message. Also converts values to other types if specified.
                     * @param message Attestor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.Attestor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attestor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Attestor
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UserOwnedGrafeasNote. */
                interface IUserOwnedGrafeasNote {

                    /** UserOwnedGrafeasNote noteReference */
                    noteReference?: (string|null);

                    /** UserOwnedGrafeasNote publicKeys */
                    publicKeys?: (google.cloud.binaryauthorization.v1.IAttestorPublicKey[]|null);

                    /** UserOwnedGrafeasNote delegationServiceAccountEmail */
                    delegationServiceAccountEmail?: (string|null);
                }

                /** Represents a UserOwnedGrafeasNote. */
                class UserOwnedGrafeasNote implements IUserOwnedGrafeasNote {

                    /**
                     * Constructs a new UserOwnedGrafeasNote.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IUserOwnedGrafeasNote);

                    /** UserOwnedGrafeasNote noteReference. */
                    public noteReference: string;

                    /** UserOwnedGrafeasNote publicKeys. */
                    public publicKeys: google.cloud.binaryauthorization.v1.IAttestorPublicKey[];

                    /** UserOwnedGrafeasNote delegationServiceAccountEmail. */
                    public delegationServiceAccountEmail: string;

                    /**
                     * Creates a new UserOwnedGrafeasNote instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserOwnedGrafeasNote instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IUserOwnedGrafeasNote): google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote;

                    /**
                     * Encodes the specified UserOwnedGrafeasNote message. Does not implicitly {@link google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote.verify|verify} messages.
                     * @param message UserOwnedGrafeasNote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IUserOwnedGrafeasNote, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserOwnedGrafeasNote message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote.verify|verify} messages.
                     * @param message UserOwnedGrafeasNote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IUserOwnedGrafeasNote, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserOwnedGrafeasNote message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserOwnedGrafeasNote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote;

                    /**
                     * Decodes a UserOwnedGrafeasNote message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserOwnedGrafeasNote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote;

                    /**
                     * Verifies a UserOwnedGrafeasNote message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserOwnedGrafeasNote message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserOwnedGrafeasNote
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote;

                    /**
                     * Creates a plain object from a UserOwnedGrafeasNote message. Also converts values to other types if specified.
                     * @param message UserOwnedGrafeasNote
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.UserOwnedGrafeasNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserOwnedGrafeasNote to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserOwnedGrafeasNote
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PkixPublicKey. */
                interface IPkixPublicKey {

                    /** PkixPublicKey publicKeyPem */
                    publicKeyPem?: (string|null);

                    /** PkixPublicKey signatureAlgorithm */
                    signatureAlgorithm?: (google.cloud.binaryauthorization.v1.PkixPublicKey.SignatureAlgorithm|keyof typeof google.cloud.binaryauthorization.v1.PkixPublicKey.SignatureAlgorithm|null);
                }

                /** Represents a PkixPublicKey. */
                class PkixPublicKey implements IPkixPublicKey {

                    /**
                     * Constructs a new PkixPublicKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IPkixPublicKey);

                    /** PkixPublicKey publicKeyPem. */
                    public publicKeyPem: string;

                    /** PkixPublicKey signatureAlgorithm. */
                    public signatureAlgorithm: (google.cloud.binaryauthorization.v1.PkixPublicKey.SignatureAlgorithm|keyof typeof google.cloud.binaryauthorization.v1.PkixPublicKey.SignatureAlgorithm);

                    /**
                     * Creates a new PkixPublicKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PkixPublicKey instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IPkixPublicKey): google.cloud.binaryauthorization.v1.PkixPublicKey;

                    /**
                     * Encodes the specified PkixPublicKey message. Does not implicitly {@link google.cloud.binaryauthorization.v1.PkixPublicKey.verify|verify} messages.
                     * @param message PkixPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IPkixPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PkixPublicKey message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.PkixPublicKey.verify|verify} messages.
                     * @param message PkixPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IPkixPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PkixPublicKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PkixPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.PkixPublicKey;

                    /**
                     * Decodes a PkixPublicKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PkixPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.PkixPublicKey;

                    /**
                     * Verifies a PkixPublicKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PkixPublicKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PkixPublicKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.PkixPublicKey;

                    /**
                     * Creates a plain object from a PkixPublicKey message. Also converts values to other types if specified.
                     * @param message PkixPublicKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.PkixPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PkixPublicKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PkixPublicKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PkixPublicKey {

                    /** SignatureAlgorithm enum. */
                    enum SignatureAlgorithm {
                        SIGNATURE_ALGORITHM_UNSPECIFIED = 0,
                        RSA_PSS_2048_SHA256 = 1,
                        RSA_PSS_3072_SHA256 = 2,
                        RSA_PSS_4096_SHA256 = 3,
                        RSA_PSS_4096_SHA512 = 4,
                        RSA_SIGN_PKCS1_2048_SHA256 = 5,
                        RSA_SIGN_PKCS1_3072_SHA256 = 6,
                        RSA_SIGN_PKCS1_4096_SHA256 = 7,
                        RSA_SIGN_PKCS1_4096_SHA512 = 8,
                        ECDSA_P256_SHA256 = 9,
                        EC_SIGN_P256_SHA256 = 9,
                        ECDSA_P384_SHA384 = 10,
                        EC_SIGN_P384_SHA384 = 10,
                        ECDSA_P521_SHA512 = 11,
                        EC_SIGN_P521_SHA512 = 11
                    }
                }

                /** Properties of an AttestorPublicKey. */
                interface IAttestorPublicKey {

                    /** AttestorPublicKey comment */
                    comment?: (string|null);

                    /** AttestorPublicKey id */
                    id?: (string|null);

                    /** AttestorPublicKey asciiArmoredPgpPublicKey */
                    asciiArmoredPgpPublicKey?: (string|null);

                    /** AttestorPublicKey pkixPublicKey */
                    pkixPublicKey?: (google.cloud.binaryauthorization.v1.IPkixPublicKey|null);
                }

                /** Represents an AttestorPublicKey. */
                class AttestorPublicKey implements IAttestorPublicKey {

                    /**
                     * Constructs a new AttestorPublicKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IAttestorPublicKey);

                    /** AttestorPublicKey comment. */
                    public comment: string;

                    /** AttestorPublicKey id. */
                    public id: string;

                    /** AttestorPublicKey asciiArmoredPgpPublicKey. */
                    public asciiArmoredPgpPublicKey?: (string|null);

                    /** AttestorPublicKey pkixPublicKey. */
                    public pkixPublicKey?: (google.cloud.binaryauthorization.v1.IPkixPublicKey|null);

                    /** AttestorPublicKey publicKey. */
                    public publicKey?: ("asciiArmoredPgpPublicKey"|"pkixPublicKey");

                    /**
                     * Creates a new AttestorPublicKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AttestorPublicKey instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IAttestorPublicKey): google.cloud.binaryauthorization.v1.AttestorPublicKey;

                    /**
                     * Encodes the specified AttestorPublicKey message. Does not implicitly {@link google.cloud.binaryauthorization.v1.AttestorPublicKey.verify|verify} messages.
                     * @param message AttestorPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IAttestorPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AttestorPublicKey message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.AttestorPublicKey.verify|verify} messages.
                     * @param message AttestorPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IAttestorPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AttestorPublicKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AttestorPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.AttestorPublicKey;

                    /**
                     * Decodes an AttestorPublicKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AttestorPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.AttestorPublicKey;

                    /**
                     * Verifies an AttestorPublicKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AttestorPublicKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AttestorPublicKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.AttestorPublicKey;

                    /**
                     * Creates a plain object from an AttestorPublicKey message. Also converts values to other types if specified.
                     * @param message AttestorPublicKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.AttestorPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AttestorPublicKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AttestorPublicKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a BinauthzManagementServiceV1 */
                class BinauthzManagementServiceV1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BinauthzManagementServiceV1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BinauthzManagementServiceV1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BinauthzManagementServiceV1;

                    /**
                     * Calls GetPolicy.
                     * @param request GetPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getPolicy(request: google.cloud.binaryauthorization.v1.IGetPolicyRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetPolicyCallback): void;

                    /**
                     * Calls GetPolicy.
                     * @param request GetPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getPolicy(request: google.cloud.binaryauthorization.v1.IGetPolicyRequest): Promise<google.cloud.binaryauthorization.v1.Policy>;

                    /**
                     * Calls UpdatePolicy.
                     * @param request UpdatePolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public updatePolicy(request: google.cloud.binaryauthorization.v1.IUpdatePolicyRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdatePolicyCallback): void;

                    /**
                     * Calls UpdatePolicy.
                     * @param request UpdatePolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updatePolicy(request: google.cloud.binaryauthorization.v1.IUpdatePolicyRequest): Promise<google.cloud.binaryauthorization.v1.Policy>;

                    /**
                     * Calls CreateAttestor.
                     * @param request CreateAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Attestor
                     */
                    public createAttestor(request: google.cloud.binaryauthorization.v1.ICreateAttestorRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.CreateAttestorCallback): void;

                    /**
                     * Calls CreateAttestor.
                     * @param request CreateAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public createAttestor(request: google.cloud.binaryauthorization.v1.ICreateAttestorRequest): Promise<google.cloud.binaryauthorization.v1.Attestor>;

                    /**
                     * Calls GetAttestor.
                     * @param request GetAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Attestor
                     */
                    public getAttestor(request: google.cloud.binaryauthorization.v1.IGetAttestorRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.GetAttestorCallback): void;

                    /**
                     * Calls GetAttestor.
                     * @param request GetAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public getAttestor(request: google.cloud.binaryauthorization.v1.IGetAttestorRequest): Promise<google.cloud.binaryauthorization.v1.Attestor>;

                    /**
                     * Calls UpdateAttestor.
                     * @param request UpdateAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Attestor
                     */
                    public updateAttestor(request: google.cloud.binaryauthorization.v1.IUpdateAttestorRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.UpdateAttestorCallback): void;

                    /**
                     * Calls UpdateAttestor.
                     * @param request UpdateAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public updateAttestor(request: google.cloud.binaryauthorization.v1.IUpdateAttestorRequest): Promise<google.cloud.binaryauthorization.v1.Attestor>;

                    /**
                     * Calls ListAttestors.
                     * @param request ListAttestorsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAttestorsResponse
                     */
                    public listAttestors(request: google.cloud.binaryauthorization.v1.IListAttestorsRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.ListAttestorsCallback): void;

                    /**
                     * Calls ListAttestors.
                     * @param request ListAttestorsRequest message or plain object
                     * @returns Promise
                     */
                    public listAttestors(request: google.cloud.binaryauthorization.v1.IListAttestorsRequest): Promise<google.cloud.binaryauthorization.v1.ListAttestorsResponse>;

                    /**
                     * Calls DeleteAttestor.
                     * @param request DeleteAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAttestor(request: google.cloud.binaryauthorization.v1.IDeleteAttestorRequest, callback: google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1.DeleteAttestorCallback): void;

                    /**
                     * Calls DeleteAttestor.
                     * @param request DeleteAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAttestor(request: google.cloud.binaryauthorization.v1.IDeleteAttestorRequest): Promise<google.protobuf.Empty>;
                }

                namespace BinauthzManagementServiceV1 {

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|getPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetPolicyCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|updatePolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type UpdatePolicyCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|createAttestor}.
                     * @param error Error, if any
                     * @param [response] Attestor
                     */
                    type CreateAttestorCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.Attestor) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|getAttestor}.
                     * @param error Error, if any
                     * @param [response] Attestor
                     */
                    type GetAttestorCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.Attestor) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|updateAttestor}.
                     * @param error Error, if any
                     * @param [response] Attestor
                     */
                    type UpdateAttestorCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.Attestor) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|listAttestors}.
                     * @param error Error, if any
                     * @param [response] ListAttestorsResponse
                     */
                    type ListAttestorsCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.ListAttestorsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.BinauthzManagementServiceV1|deleteAttestor}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAttestorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Represents a SystemPolicyV1 */
                class SystemPolicyV1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SystemPolicyV1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SystemPolicyV1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SystemPolicyV1;

                    /**
                     * Calls GetSystemPolicy.
                     * @param request GetSystemPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getSystemPolicy(request: google.cloud.binaryauthorization.v1.IGetSystemPolicyRequest, callback: google.cloud.binaryauthorization.v1.SystemPolicyV1.GetSystemPolicyCallback): void;

                    /**
                     * Calls GetSystemPolicy.
                     * @param request GetSystemPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getSystemPolicy(request: google.cloud.binaryauthorization.v1.IGetSystemPolicyRequest): Promise<google.cloud.binaryauthorization.v1.Policy>;
                }

                namespace SystemPolicyV1 {

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.SystemPolicyV1|getSystemPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetSystemPolicyCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.Policy) => void;
                }

                /** Represents a ValidationHelperV1 */
                class ValidationHelperV1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ValidationHelperV1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ValidationHelperV1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ValidationHelperV1;

                    /**
                     * Calls ValidateAttestationOccurrence.
                     * @param request ValidateAttestationOccurrenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ValidateAttestationOccurrenceResponse
                     */
                    public validateAttestationOccurrence(request: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceRequest, callback: google.cloud.binaryauthorization.v1.ValidationHelperV1.ValidateAttestationOccurrenceCallback): void;

                    /**
                     * Calls ValidateAttestationOccurrence.
                     * @param request ValidateAttestationOccurrenceRequest message or plain object
                     * @returns Promise
                     */
                    public validateAttestationOccurrence(request: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceRequest): Promise<google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse>;
                }

                namespace ValidationHelperV1 {

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1.ValidationHelperV1|validateAttestationOccurrence}.
                     * @param error Error, if any
                     * @param [response] ValidateAttestationOccurrenceResponse
                     */
                    type ValidateAttestationOccurrenceCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse) => void;
                }

                /** Properties of a GetPolicyRequest. */
                interface IGetPolicyRequest {

                    /** GetPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPolicyRequest. */
                class GetPolicyRequest implements IGetPolicyRequest {

                    /**
                     * Constructs a new GetPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IGetPolicyRequest);

                    /** GetPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IGetPolicyRequest): google.cloud.binaryauthorization.v1.GetPolicyRequest;

                    /**
                     * Encodes the specified GetPolicyRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.GetPolicyRequest.verify|verify} messages.
                     * @param message GetPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.GetPolicyRequest.verify|verify} messages.
                     * @param message GetPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.GetPolicyRequest;

                    /**
                     * Decodes a GetPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.GetPolicyRequest;

                    /**
                     * Verifies a GetPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.GetPolicyRequest;

                    /**
                     * Creates a plain object from a GetPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.GetPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePolicyRequest. */
                interface IUpdatePolicyRequest {

                    /** UpdatePolicyRequest policy */
                    policy?: (google.cloud.binaryauthorization.v1.IPolicy|null);
                }

                /** Represents an UpdatePolicyRequest. */
                class UpdatePolicyRequest implements IUpdatePolicyRequest {

                    /**
                     * Constructs a new UpdatePolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IUpdatePolicyRequest);

                    /** UpdatePolicyRequest policy. */
                    public policy?: (google.cloud.binaryauthorization.v1.IPolicy|null);

                    /**
                     * Creates a new UpdatePolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePolicyRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IUpdatePolicyRequest): google.cloud.binaryauthorization.v1.UpdatePolicyRequest;

                    /**
                     * Encodes the specified UpdatePolicyRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.UpdatePolicyRequest.verify|verify} messages.
                     * @param message UpdatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePolicyRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.UpdatePolicyRequest.verify|verify} messages.
                     * @param message UpdatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.UpdatePolicyRequest;

                    /**
                     * Decodes an UpdatePolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.UpdatePolicyRequest;

                    /**
                     * Verifies an UpdatePolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.UpdatePolicyRequest;

                    /**
                     * Creates a plain object from an UpdatePolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdatePolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.UpdatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAttestorRequest. */
                interface ICreateAttestorRequest {

                    /** CreateAttestorRequest parent */
                    parent?: (string|null);

                    /** CreateAttestorRequest attestorId */
                    attestorId?: (string|null);

                    /** CreateAttestorRequest attestor */
                    attestor?: (google.cloud.binaryauthorization.v1.IAttestor|null);
                }

                /** Represents a CreateAttestorRequest. */
                class CreateAttestorRequest implements ICreateAttestorRequest {

                    /**
                     * Constructs a new CreateAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.ICreateAttestorRequest);

                    /** CreateAttestorRequest parent. */
                    public parent: string;

                    /** CreateAttestorRequest attestorId. */
                    public attestorId: string;

                    /** CreateAttestorRequest attestor. */
                    public attestor?: (google.cloud.binaryauthorization.v1.IAttestor|null);

                    /**
                     * Creates a new CreateAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.ICreateAttestorRequest): google.cloud.binaryauthorization.v1.CreateAttestorRequest;

                    /**
                     * Encodes the specified CreateAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.CreateAttestorRequest.verify|verify} messages.
                     * @param message CreateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.ICreateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.CreateAttestorRequest.verify|verify} messages.
                     * @param message CreateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.ICreateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.CreateAttestorRequest;

                    /**
                     * Decodes a CreateAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.CreateAttestorRequest;

                    /**
                     * Verifies a CreateAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.CreateAttestorRequest;

                    /**
                     * Creates a plain object from a CreateAttestorRequest message. Also converts values to other types if specified.
                     * @param message CreateAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.CreateAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAttestorRequest. */
                interface IGetAttestorRequest {

                    /** GetAttestorRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAttestorRequest. */
                class GetAttestorRequest implements IGetAttestorRequest {

                    /**
                     * Constructs a new GetAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IGetAttestorRequest);

                    /** GetAttestorRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IGetAttestorRequest): google.cloud.binaryauthorization.v1.GetAttestorRequest;

                    /**
                     * Encodes the specified GetAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.GetAttestorRequest.verify|verify} messages.
                     * @param message GetAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IGetAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.GetAttestorRequest.verify|verify} messages.
                     * @param message GetAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IGetAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.GetAttestorRequest;

                    /**
                     * Decodes a GetAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.GetAttestorRequest;

                    /**
                     * Verifies a GetAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.GetAttestorRequest;

                    /**
                     * Creates a plain object from a GetAttestorRequest message. Also converts values to other types if specified.
                     * @param message GetAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.GetAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAttestorRequest. */
                interface IUpdateAttestorRequest {

                    /** UpdateAttestorRequest attestor */
                    attestor?: (google.cloud.binaryauthorization.v1.IAttestor|null);
                }

                /** Represents an UpdateAttestorRequest. */
                class UpdateAttestorRequest implements IUpdateAttestorRequest {

                    /**
                     * Constructs a new UpdateAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IUpdateAttestorRequest);

                    /** UpdateAttestorRequest attestor. */
                    public attestor?: (google.cloud.binaryauthorization.v1.IAttestor|null);

                    /**
                     * Creates a new UpdateAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IUpdateAttestorRequest): google.cloud.binaryauthorization.v1.UpdateAttestorRequest;

                    /**
                     * Encodes the specified UpdateAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.UpdateAttestorRequest.verify|verify} messages.
                     * @param message UpdateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IUpdateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.UpdateAttestorRequest.verify|verify} messages.
                     * @param message UpdateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IUpdateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.UpdateAttestorRequest;

                    /**
                     * Decodes an UpdateAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.UpdateAttestorRequest;

                    /**
                     * Verifies an UpdateAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.UpdateAttestorRequest;

                    /**
                     * Creates a plain object from an UpdateAttestorRequest message. Also converts values to other types if specified.
                     * @param message UpdateAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.UpdateAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAttestorsRequest. */
                interface IListAttestorsRequest {

                    /** ListAttestorsRequest parent */
                    parent?: (string|null);

                    /** ListAttestorsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAttestorsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAttestorsRequest. */
                class ListAttestorsRequest implements IListAttestorsRequest {

                    /**
                     * Constructs a new ListAttestorsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IListAttestorsRequest);

                    /** ListAttestorsRequest parent. */
                    public parent: string;

                    /** ListAttestorsRequest pageSize. */
                    public pageSize: number;

                    /** ListAttestorsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAttestorsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAttestorsRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IListAttestorsRequest): google.cloud.binaryauthorization.v1.ListAttestorsRequest;

                    /**
                     * Encodes the specified ListAttestorsRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.ListAttestorsRequest.verify|verify} messages.
                     * @param message ListAttestorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IListAttestorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAttestorsRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.ListAttestorsRequest.verify|verify} messages.
                     * @param message ListAttestorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IListAttestorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAttestorsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAttestorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.ListAttestorsRequest;

                    /**
                     * Decodes a ListAttestorsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAttestorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.ListAttestorsRequest;

                    /**
                     * Verifies a ListAttestorsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAttestorsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAttestorsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.ListAttestorsRequest;

                    /**
                     * Creates a plain object from a ListAttestorsRequest message. Also converts values to other types if specified.
                     * @param message ListAttestorsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.ListAttestorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAttestorsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAttestorsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAttestorsResponse. */
                interface IListAttestorsResponse {

                    /** ListAttestorsResponse attestors */
                    attestors?: (google.cloud.binaryauthorization.v1.IAttestor[]|null);

                    /** ListAttestorsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAttestorsResponse. */
                class ListAttestorsResponse implements IListAttestorsResponse {

                    /**
                     * Constructs a new ListAttestorsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IListAttestorsResponse);

                    /** ListAttestorsResponse attestors. */
                    public attestors: google.cloud.binaryauthorization.v1.IAttestor[];

                    /** ListAttestorsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAttestorsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAttestorsResponse instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IListAttestorsResponse): google.cloud.binaryauthorization.v1.ListAttestorsResponse;

                    /**
                     * Encodes the specified ListAttestorsResponse message. Does not implicitly {@link google.cloud.binaryauthorization.v1.ListAttestorsResponse.verify|verify} messages.
                     * @param message ListAttestorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IListAttestorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAttestorsResponse message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.ListAttestorsResponse.verify|verify} messages.
                     * @param message ListAttestorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IListAttestorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAttestorsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAttestorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.ListAttestorsResponse;

                    /**
                     * Decodes a ListAttestorsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAttestorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.ListAttestorsResponse;

                    /**
                     * Verifies a ListAttestorsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAttestorsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAttestorsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.ListAttestorsResponse;

                    /**
                     * Creates a plain object from a ListAttestorsResponse message. Also converts values to other types if specified.
                     * @param message ListAttestorsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.ListAttestorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAttestorsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAttestorsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAttestorRequest. */
                interface IDeleteAttestorRequest {

                    /** DeleteAttestorRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAttestorRequest. */
                class DeleteAttestorRequest implements IDeleteAttestorRequest {

                    /**
                     * Constructs a new DeleteAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IDeleteAttestorRequest);

                    /** DeleteAttestorRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IDeleteAttestorRequest): google.cloud.binaryauthorization.v1.DeleteAttestorRequest;

                    /**
                     * Encodes the specified DeleteAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.DeleteAttestorRequest.verify|verify} messages.
                     * @param message DeleteAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IDeleteAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.DeleteAttestorRequest.verify|verify} messages.
                     * @param message DeleteAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IDeleteAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.DeleteAttestorRequest;

                    /**
                     * Decodes a DeleteAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.DeleteAttestorRequest;

                    /**
                     * Verifies a DeleteAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.DeleteAttestorRequest;

                    /**
                     * Creates a plain object from a DeleteAttestorRequest message. Also converts values to other types if specified.
                     * @param message DeleteAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.DeleteAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSystemPolicyRequest. */
                interface IGetSystemPolicyRequest {

                    /** GetSystemPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSystemPolicyRequest. */
                class GetSystemPolicyRequest implements IGetSystemPolicyRequest {

                    /**
                     * Constructs a new GetSystemPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IGetSystemPolicyRequest);

                    /** GetSystemPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSystemPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSystemPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IGetSystemPolicyRequest): google.cloud.binaryauthorization.v1.GetSystemPolicyRequest;

                    /**
                     * Encodes the specified GetSystemPolicyRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.GetSystemPolicyRequest.verify|verify} messages.
                     * @param message GetSystemPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IGetSystemPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSystemPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.GetSystemPolicyRequest.verify|verify} messages.
                     * @param message GetSystemPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IGetSystemPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSystemPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSystemPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.GetSystemPolicyRequest;

                    /**
                     * Decodes a GetSystemPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSystemPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.GetSystemPolicyRequest;

                    /**
                     * Verifies a GetSystemPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSystemPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSystemPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.GetSystemPolicyRequest;

                    /**
                     * Creates a plain object from a GetSystemPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetSystemPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.GetSystemPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSystemPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSystemPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidateAttestationOccurrenceRequest. */
                interface IValidateAttestationOccurrenceRequest {

                    /** ValidateAttestationOccurrenceRequest attestor */
                    attestor?: (string|null);

                    /** ValidateAttestationOccurrenceRequest attestation */
                    attestation?: (grafeas.v1.IAttestationOccurrence|null);

                    /** ValidateAttestationOccurrenceRequest occurrenceNote */
                    occurrenceNote?: (string|null);

                    /** ValidateAttestationOccurrenceRequest occurrenceResourceUri */
                    occurrenceResourceUri?: (string|null);
                }

                /** Represents a ValidateAttestationOccurrenceRequest. */
                class ValidateAttestationOccurrenceRequest implements IValidateAttestationOccurrenceRequest {

                    /**
                     * Constructs a new ValidateAttestationOccurrenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceRequest);

                    /** ValidateAttestationOccurrenceRequest attestor. */
                    public attestor: string;

                    /** ValidateAttestationOccurrenceRequest attestation. */
                    public attestation?: (grafeas.v1.IAttestationOccurrence|null);

                    /** ValidateAttestationOccurrenceRequest occurrenceNote. */
                    public occurrenceNote: string;

                    /** ValidateAttestationOccurrenceRequest occurrenceResourceUri. */
                    public occurrenceResourceUri: string;

                    /**
                     * Creates a new ValidateAttestationOccurrenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidateAttestationOccurrenceRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceRequest): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest;

                    /**
                     * Encodes the specified ValidateAttestationOccurrenceRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest.verify|verify} messages.
                     * @param message ValidateAttestationOccurrenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidateAttestationOccurrenceRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest.verify|verify} messages.
                     * @param message ValidateAttestationOccurrenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidateAttestationOccurrenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidateAttestationOccurrenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest;

                    /**
                     * Decodes a ValidateAttestationOccurrenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidateAttestationOccurrenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest;

                    /**
                     * Verifies a ValidateAttestationOccurrenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidateAttestationOccurrenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidateAttestationOccurrenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest;

                    /**
                     * Creates a plain object from a ValidateAttestationOccurrenceRequest message. Also converts values to other types if specified.
                     * @param message ValidateAttestationOccurrenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidateAttestationOccurrenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidateAttestationOccurrenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidateAttestationOccurrenceResponse. */
                interface IValidateAttestationOccurrenceResponse {

                    /** ValidateAttestationOccurrenceResponse result */
                    result?: (google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse.Result|keyof typeof google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse.Result|null);

                    /** ValidateAttestationOccurrenceResponse denialReason */
                    denialReason?: (string|null);
                }

                /** Represents a ValidateAttestationOccurrenceResponse. */
                class ValidateAttestationOccurrenceResponse implements IValidateAttestationOccurrenceResponse {

                    /**
                     * Constructs a new ValidateAttestationOccurrenceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceResponse);

                    /** ValidateAttestationOccurrenceResponse result. */
                    public result: (google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse.Result|keyof typeof google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse.Result);

                    /** ValidateAttestationOccurrenceResponse denialReason. */
                    public denialReason: string;

                    /**
                     * Creates a new ValidateAttestationOccurrenceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidateAttestationOccurrenceResponse instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceResponse): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse;

                    /**
                     * Encodes the specified ValidateAttestationOccurrenceResponse message. Does not implicitly {@link google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse.verify|verify} messages.
                     * @param message ValidateAttestationOccurrenceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidateAttestationOccurrenceResponse message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse.verify|verify} messages.
                     * @param message ValidateAttestationOccurrenceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1.IValidateAttestationOccurrenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidateAttestationOccurrenceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidateAttestationOccurrenceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse;

                    /**
                     * Decodes a ValidateAttestationOccurrenceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidateAttestationOccurrenceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse;

                    /**
                     * Verifies a ValidateAttestationOccurrenceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidateAttestationOccurrenceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidateAttestationOccurrenceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse;

                    /**
                     * Creates a plain object from a ValidateAttestationOccurrenceResponse message. Also converts values to other types if specified.
                     * @param message ValidateAttestationOccurrenceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1.ValidateAttestationOccurrenceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidateAttestationOccurrenceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidateAttestationOccurrenceResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ValidateAttestationOccurrenceResponse {

                    /** Result enum. */
                    enum Result {
                        RESULT_UNSPECIFIED = 0,
                        VERIFIED = 1,
                        ATTESTATION_NOT_VERIFIABLE = 2
                    }
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a ContinuousValidationEvent. */
                interface IContinuousValidationEvent {

                    /** ContinuousValidationEvent podEvent */
                    podEvent?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IContinuousValidationPodEvent|null);

                    /** ContinuousValidationEvent configErrorEvent */
                    configErrorEvent?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IConfigErrorEvent|null);
                }

                /** Represents a ContinuousValidationEvent. */
                class ContinuousValidationEvent implements IContinuousValidationEvent {

                    /**
                     * Constructs a new ContinuousValidationEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IContinuousValidationEvent);

                    /** ContinuousValidationEvent podEvent. */
                    public podEvent?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IContinuousValidationPodEvent|null);

                    /** ContinuousValidationEvent configErrorEvent. */
                    public configErrorEvent?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IConfigErrorEvent|null);

                    /** ContinuousValidationEvent eventType. */
                    public eventType?: ("podEvent"|"configErrorEvent");

                    /**
                     * Creates a new ContinuousValidationEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContinuousValidationEvent instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IContinuousValidationEvent): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent;

                    /**
                     * Encodes the specified ContinuousValidationEvent message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.verify|verify} messages.
                     * @param message ContinuousValidationEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IContinuousValidationEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContinuousValidationEvent message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.verify|verify} messages.
                     * @param message ContinuousValidationEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IContinuousValidationEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContinuousValidationEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContinuousValidationEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent;

                    /**
                     * Decodes a ContinuousValidationEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContinuousValidationEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent;

                    /**
                     * Verifies a ContinuousValidationEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContinuousValidationEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContinuousValidationEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent;

                    /**
                     * Creates a plain object from a ContinuousValidationEvent message. Also converts values to other types if specified.
                     * @param message ContinuousValidationEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContinuousValidationEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ContinuousValidationEvent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ContinuousValidationEvent {

                    /** Properties of a ContinuousValidationPodEvent. */
                    interface IContinuousValidationPodEvent {

                        /** ContinuousValidationPodEvent podNamespace */
                        podNamespace?: (string|null);

                        /** ContinuousValidationPodEvent pod */
                        pod?: (string|null);

                        /** ContinuousValidationPodEvent policyName */
                        policyName?: (string|null);

                        /** ContinuousValidationPodEvent deployTime */
                        deployTime?: (google.protobuf.ITimestamp|null);

                        /** ContinuousValidationPodEvent endTime */
                        endTime?: (google.protobuf.ITimestamp|null);

                        /** ContinuousValidationPodEvent verdict */
                        verdict?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.PolicyConformanceVerdict|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.PolicyConformanceVerdict|null);

                        /** ContinuousValidationPodEvent images */
                        images?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.IImageDetails[]|null);
                    }

                    /** Represents a ContinuousValidationPodEvent. */
                    class ContinuousValidationPodEvent implements IContinuousValidationPodEvent {

                        /**
                         * Constructs a new ContinuousValidationPodEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IContinuousValidationPodEvent);

                        /** ContinuousValidationPodEvent podNamespace. */
                        public podNamespace: string;

                        /** ContinuousValidationPodEvent pod. */
                        public pod: string;

                        /** ContinuousValidationPodEvent policyName. */
                        public policyName: string;

                        /** ContinuousValidationPodEvent deployTime. */
                        public deployTime?: (google.protobuf.ITimestamp|null);

                        /** ContinuousValidationPodEvent endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /** ContinuousValidationPodEvent verdict. */
                        public verdict: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.PolicyConformanceVerdict|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.PolicyConformanceVerdict);

                        /** ContinuousValidationPodEvent images. */
                        public images: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.IImageDetails[];

                        /**
                         * Creates a new ContinuousValidationPodEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ContinuousValidationPodEvent instance
                         */
                        public static create(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IContinuousValidationPodEvent): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent;

                        /**
                         * Encodes the specified ContinuousValidationPodEvent message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.verify|verify} messages.
                         * @param message ContinuousValidationPodEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IContinuousValidationPodEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ContinuousValidationPodEvent message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.verify|verify} messages.
                         * @param message ContinuousValidationPodEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IContinuousValidationPodEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ContinuousValidationPodEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ContinuousValidationPodEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent;

                        /**
                         * Decodes a ContinuousValidationPodEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ContinuousValidationPodEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent;

                        /**
                         * Verifies a ContinuousValidationPodEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ContinuousValidationPodEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ContinuousValidationPodEvent
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent;

                        /**
                         * Creates a plain object from a ContinuousValidationPodEvent message. Also converts values to other types if specified.
                         * @param message ContinuousValidationPodEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ContinuousValidationPodEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ContinuousValidationPodEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ContinuousValidationPodEvent {

                        /** PolicyConformanceVerdict enum. */
                        enum PolicyConformanceVerdict {
                            POLICY_CONFORMANCE_VERDICT_UNSPECIFIED = 0,
                            VIOLATES_POLICY = 1
                        }

                        /** Properties of an ImageDetails. */
                        interface IImageDetails {

                            /** ImageDetails image */
                            image?: (string|null);

                            /** ImageDetails containerName */
                            containerName?: (string|null);

                            /** ImageDetails containerType */
                            containerType?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ContainerType|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ContainerType|null);

                            /** ImageDetails result */
                            result?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.AuditResult|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.AuditResult|null);

                            /** ImageDetails description */
                            description?: (string|null);

                            /** ImageDetails checkResults */
                            checkResults?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ICheckResult[]|null);
                        }

                        /** Represents an ImageDetails. */
                        class ImageDetails implements IImageDetails {

                            /**
                             * Constructs a new ImageDetails.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.IImageDetails);

                            /** ImageDetails image. */
                            public image: string;

                            /** ImageDetails containerName. */
                            public containerName: string;

                            /** ImageDetails containerType. */
                            public containerType: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ContainerType|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ContainerType);

                            /** ImageDetails result. */
                            public result: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.AuditResult|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.AuditResult);

                            /** ImageDetails description. */
                            public description: string;

                            /** ImageDetails checkResults. */
                            public checkResults: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ICheckResult[];

                            /**
                             * Creates a new ImageDetails instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ImageDetails instance
                             */
                            public static create(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.IImageDetails): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails;

                            /**
                             * Encodes the specified ImageDetails message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.verify|verify} messages.
                             * @param message ImageDetails message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.IImageDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ImageDetails message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.verify|verify} messages.
                             * @param message ImageDetails message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.IImageDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ImageDetails message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ImageDetails
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails;

                            /**
                             * Decodes an ImageDetails message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ImageDetails
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails;

                            /**
                             * Verifies an ImageDetails message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ImageDetails message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ImageDetails
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails;

                            /**
                             * Creates a plain object from an ImageDetails message. Also converts values to other types if specified.
                             * @param message ImageDetails
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ImageDetails to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ImageDetails
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ImageDetails {

                            /** ContainerType enum. */
                            enum ContainerType {
                                CONTAINER_TYPE_UNSPECIFIED = 0,
                                CONTAINER = 1,
                                INIT_CONTAINER = 2,
                                EPHEMERAL_CONTAINER = 3
                            }

                            /** AuditResult enum. */
                            enum AuditResult {
                                AUDIT_RESULT_UNSPECIFIED = 0,
                                ALLOW = 1,
                                DENY = 2
                            }

                            /** Properties of a CheckResult. */
                            interface ICheckResult {

                                /** CheckResult checkSetIndex */
                                checkSetIndex?: (string|null);

                                /** CheckResult checkSetName */
                                checkSetName?: (string|null);

                                /** CheckResult checkSetScope */
                                checkSetScope?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.ICheckSetScope|null);

                                /** CheckResult checkIndex */
                                checkIndex?: (string|null);

                                /** CheckResult checkName */
                                checkName?: (string|null);

                                /** CheckResult checkType */
                                checkType?: (string|null);

                                /** CheckResult verdict */
                                verdict?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckVerdict|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckVerdict|null);

                                /** CheckResult explanation */
                                explanation?: (string|null);
                            }

                            /** Represents a CheckResult. */
                            class CheckResult implements ICheckResult {

                                /**
                                 * Constructs a new CheckResult.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ICheckResult);

                                /** CheckResult checkSetIndex. */
                                public checkSetIndex: string;

                                /** CheckResult checkSetName. */
                                public checkSetName: string;

                                /** CheckResult checkSetScope. */
                                public checkSetScope?: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.ICheckSetScope|null);

                                /** CheckResult checkIndex. */
                                public checkIndex: string;

                                /** CheckResult checkName. */
                                public checkName: string;

                                /** CheckResult checkType. */
                                public checkType: string;

                                /** CheckResult verdict. */
                                public verdict: (google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckVerdict|keyof typeof google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckVerdict);

                                /** CheckResult explanation. */
                                public explanation: string;

                                /**
                                 * Creates a new CheckResult instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns CheckResult instance
                                 */
                                public static create(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ICheckResult): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult;

                                /**
                                 * Encodes the specified CheckResult message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.verify|verify} messages.
                                 * @param message CheckResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ICheckResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified CheckResult message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.verify|verify} messages.
                                 * @param message CheckResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.ICheckResult, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a CheckResult message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns CheckResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult;

                                /**
                                 * Decodes a CheckResult message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns CheckResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult;

                                /**
                                 * Verifies a CheckResult message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a CheckResult message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns CheckResult
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult;

                                /**
                                 * Creates a plain object from a CheckResult message. Also converts values to other types if specified.
                                 * @param message CheckResult
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this CheckResult to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for CheckResult
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace CheckResult {

                                /** Properties of a CheckSetScope. */
                                interface ICheckSetScope {

                                    /** CheckSetScope kubernetesServiceAccount */
                                    kubernetesServiceAccount?: (string|null);

                                    /** CheckSetScope kubernetesNamespace */
                                    kubernetesNamespace?: (string|null);
                                }

                                /** Represents a CheckSetScope. */
                                class CheckSetScope implements ICheckSetScope {

                                    /**
                                     * Constructs a new CheckSetScope.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.ICheckSetScope);

                                    /** CheckSetScope kubernetesServiceAccount. */
                                    public kubernetesServiceAccount?: (string|null);

                                    /** CheckSetScope kubernetesNamespace. */
                                    public kubernetesNamespace?: (string|null);

                                    /** CheckSetScope scope. */
                                    public scope?: ("kubernetesServiceAccount"|"kubernetesNamespace");

                                    /**
                                     * Creates a new CheckSetScope instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns CheckSetScope instance
                                     */
                                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.ICheckSetScope): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope;

                                    /**
                                     * Encodes the specified CheckSetScope message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope.verify|verify} messages.
                                     * @param message CheckSetScope message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.ICheckSetScope, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified CheckSetScope message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope.verify|verify} messages.
                                     * @param message CheckSetScope message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.ICheckSetScope, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a CheckSetScope message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns CheckSetScope
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope;

                                    /**
                                     * Decodes a CheckSetScope message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns CheckSetScope
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope;

                                    /**
                                     * Verifies a CheckSetScope message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a CheckSetScope message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns CheckSetScope
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope;

                                    /**
                                     * Creates a plain object from a CheckSetScope message. Also converts values to other types if specified.
                                     * @param message CheckSetScope
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ContinuousValidationPodEvent.ImageDetails.CheckResult.CheckSetScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this CheckSetScope to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for CheckSetScope
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** CheckVerdict enum. */
                                enum CheckVerdict {
                                    CHECK_VERDICT_UNSPECIFIED = 0,
                                    NON_CONFORMANT = 1
                                }
                            }
                        }
                    }

                    /** Properties of a ConfigErrorEvent. */
                    interface IConfigErrorEvent {

                        /** ConfigErrorEvent description */
                        description?: (string|null);
                    }

                    /** Represents a ConfigErrorEvent. */
                    class ConfigErrorEvent implements IConfigErrorEvent {

                        /**
                         * Constructs a new ConfigErrorEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IConfigErrorEvent);

                        /** ConfigErrorEvent description. */
                        public description: string;

                        /**
                         * Creates a new ConfigErrorEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfigErrorEvent instance
                         */
                        public static create(properties?: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IConfigErrorEvent): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent;

                        /**
                         * Encodes the specified ConfigErrorEvent message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent.verify|verify} messages.
                         * @param message ConfigErrorEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IConfigErrorEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfigErrorEvent message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent.verify|verify} messages.
                         * @param message ConfigErrorEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.IConfigErrorEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfigErrorEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfigErrorEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent;

                        /**
                         * Decodes a ConfigErrorEvent message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfigErrorEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent;

                        /**
                         * Verifies a ConfigErrorEvent message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfigErrorEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfigErrorEvent
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent;

                        /**
                         * Creates a plain object from a ConfigErrorEvent message. Also converts values to other types if specified.
                         * @param message ConfigErrorEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent.ConfigErrorEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfigErrorEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConfigErrorEvent
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Policy. */
                interface IPolicy {

                    /** Policy name */
                    name?: (string|null);

                    /** Policy description */
                    description?: (string|null);

                    /** Policy globalPolicyEvaluationMode */
                    globalPolicyEvaluationMode?: (google.cloud.binaryauthorization.v1beta1.Policy.GlobalPolicyEvaluationMode|keyof typeof google.cloud.binaryauthorization.v1beta1.Policy.GlobalPolicyEvaluationMode|null);

                    /** Policy admissionWhitelistPatterns */
                    admissionWhitelistPatterns?: (google.cloud.binaryauthorization.v1beta1.IAdmissionWhitelistPattern[]|null);

                    /** Policy clusterAdmissionRules */
                    clusterAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule }|null);

                    /** Policy kubernetesNamespaceAdmissionRules */
                    kubernetesNamespaceAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule }|null);

                    /** Policy kubernetesServiceAccountAdmissionRules */
                    kubernetesServiceAccountAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule }|null);

                    /** Policy istioServiceIdentityAdmissionRules */
                    istioServiceIdentityAdmissionRules?: ({ [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule }|null);

                    /** Policy defaultAdmissionRule */
                    defaultAdmissionRule?: (google.cloud.binaryauthorization.v1beta1.IAdmissionRule|null);

                    /** Policy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Policy. */
                class Policy implements IPolicy {

                    /**
                     * Constructs a new Policy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IPolicy);

                    /** Policy name. */
                    public name: string;

                    /** Policy description. */
                    public description: string;

                    /** Policy globalPolicyEvaluationMode. */
                    public globalPolicyEvaluationMode: (google.cloud.binaryauthorization.v1beta1.Policy.GlobalPolicyEvaluationMode|keyof typeof google.cloud.binaryauthorization.v1beta1.Policy.GlobalPolicyEvaluationMode);

                    /** Policy admissionWhitelistPatterns. */
                    public admissionWhitelistPatterns: google.cloud.binaryauthorization.v1beta1.IAdmissionWhitelistPattern[];

                    /** Policy clusterAdmissionRules. */
                    public clusterAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule };

                    /** Policy kubernetesNamespaceAdmissionRules. */
                    public kubernetesNamespaceAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule };

                    /** Policy kubernetesServiceAccountAdmissionRules. */
                    public kubernetesServiceAccountAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule };

                    /** Policy istioServiceIdentityAdmissionRules. */
                    public istioServiceIdentityAdmissionRules: { [k: string]: google.cloud.binaryauthorization.v1beta1.IAdmissionRule };

                    /** Policy defaultAdmissionRule. */
                    public defaultAdmissionRule?: (google.cloud.binaryauthorization.v1beta1.IAdmissionRule|null);

                    /** Policy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Policy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Policy instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IPolicy): google.cloud.binaryauthorization.v1beta1.Policy;

                    /**
                     * Encodes the specified Policy message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Policy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.Policy;

                    /**
                     * Decodes a Policy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.Policy;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.Policy;

                    /**
                     * Creates a plain object from a Policy message. Also converts values to other types if specified.
                     * @param message Policy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Policy {

                    /** GlobalPolicyEvaluationMode enum. */
                    enum GlobalPolicyEvaluationMode {
                        GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = 0,
                        ENABLE = 1,
                        DISABLE = 2
                    }
                }

                /** Properties of an AdmissionWhitelistPattern. */
                interface IAdmissionWhitelistPattern {

                    /** AdmissionWhitelistPattern namePattern */
                    namePattern?: (string|null);
                }

                /** Represents an AdmissionWhitelistPattern. */
                class AdmissionWhitelistPattern implements IAdmissionWhitelistPattern {

                    /**
                     * Constructs a new AdmissionWhitelistPattern.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IAdmissionWhitelistPattern);

                    /** AdmissionWhitelistPattern namePattern. */
                    public namePattern: string;

                    /**
                     * Creates a new AdmissionWhitelistPattern instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdmissionWhitelistPattern instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IAdmissionWhitelistPattern): google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern;

                    /**
                     * Encodes the specified AdmissionWhitelistPattern message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern.verify|verify} messages.
                     * @param message AdmissionWhitelistPattern message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IAdmissionWhitelistPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdmissionWhitelistPattern message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern.verify|verify} messages.
                     * @param message AdmissionWhitelistPattern message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IAdmissionWhitelistPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdmissionWhitelistPattern message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdmissionWhitelistPattern
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern;

                    /**
                     * Decodes an AdmissionWhitelistPattern message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdmissionWhitelistPattern
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern;

                    /**
                     * Verifies an AdmissionWhitelistPattern message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdmissionWhitelistPattern message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdmissionWhitelistPattern
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern;

                    /**
                     * Creates a plain object from an AdmissionWhitelistPattern message. Also converts values to other types if specified.
                     * @param message AdmissionWhitelistPattern
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.AdmissionWhitelistPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdmissionWhitelistPattern to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdmissionWhitelistPattern
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AdmissionRule. */
                interface IAdmissionRule {

                    /** AdmissionRule evaluationMode */
                    evaluationMode?: (google.cloud.binaryauthorization.v1beta1.AdmissionRule.EvaluationMode|keyof typeof google.cloud.binaryauthorization.v1beta1.AdmissionRule.EvaluationMode|null);

                    /** AdmissionRule requireAttestationsBy */
                    requireAttestationsBy?: (string[]|null);

                    /** AdmissionRule enforcementMode */
                    enforcementMode?: (google.cloud.binaryauthorization.v1beta1.AdmissionRule.EnforcementMode|keyof typeof google.cloud.binaryauthorization.v1beta1.AdmissionRule.EnforcementMode|null);
                }

                /** Represents an AdmissionRule. */
                class AdmissionRule implements IAdmissionRule {

                    /**
                     * Constructs a new AdmissionRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IAdmissionRule);

                    /** AdmissionRule evaluationMode. */
                    public evaluationMode: (google.cloud.binaryauthorization.v1beta1.AdmissionRule.EvaluationMode|keyof typeof google.cloud.binaryauthorization.v1beta1.AdmissionRule.EvaluationMode);

                    /** AdmissionRule requireAttestationsBy. */
                    public requireAttestationsBy: string[];

                    /** AdmissionRule enforcementMode. */
                    public enforcementMode: (google.cloud.binaryauthorization.v1beta1.AdmissionRule.EnforcementMode|keyof typeof google.cloud.binaryauthorization.v1beta1.AdmissionRule.EnforcementMode);

                    /**
                     * Creates a new AdmissionRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdmissionRule instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IAdmissionRule): google.cloud.binaryauthorization.v1beta1.AdmissionRule;

                    /**
                     * Encodes the specified AdmissionRule message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.AdmissionRule.verify|verify} messages.
                     * @param message AdmissionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IAdmissionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdmissionRule message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.AdmissionRule.verify|verify} messages.
                     * @param message AdmissionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IAdmissionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdmissionRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdmissionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.AdmissionRule;

                    /**
                     * Decodes an AdmissionRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdmissionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.AdmissionRule;

                    /**
                     * Verifies an AdmissionRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdmissionRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdmissionRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.AdmissionRule;

                    /**
                     * Creates a plain object from an AdmissionRule message. Also converts values to other types if specified.
                     * @param message AdmissionRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.AdmissionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdmissionRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdmissionRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AdmissionRule {

                    /** EvaluationMode enum. */
                    enum EvaluationMode {
                        EVALUATION_MODE_UNSPECIFIED = 0,
                        ALWAYS_ALLOW = 1,
                        REQUIRE_ATTESTATION = 2,
                        ALWAYS_DENY = 3
                    }

                    /** EnforcementMode enum. */
                    enum EnforcementMode {
                        ENFORCEMENT_MODE_UNSPECIFIED = 0,
                        ENFORCED_BLOCK_AND_AUDIT_LOG = 1,
                        DRYRUN_AUDIT_LOG_ONLY = 2
                    }
                }

                /** Properties of an Attestor. */
                interface IAttestor {

                    /** Attestor name */
                    name?: (string|null);

                    /** Attestor description */
                    description?: (string|null);

                    /** Attestor userOwnedDrydockNote */
                    userOwnedDrydockNote?: (google.cloud.binaryauthorization.v1beta1.IUserOwnedDrydockNote|null);

                    /** Attestor updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Attestor. */
                class Attestor implements IAttestor {

                    /**
                     * Constructs a new Attestor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IAttestor);

                    /** Attestor name. */
                    public name: string;

                    /** Attestor description. */
                    public description: string;

                    /** Attestor userOwnedDrydockNote. */
                    public userOwnedDrydockNote?: (google.cloud.binaryauthorization.v1beta1.IUserOwnedDrydockNote|null);

                    /** Attestor updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Attestor attestorType. */
                    public attestorType?: "userOwnedDrydockNote";

                    /**
                     * Creates a new Attestor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attestor instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IAttestor): google.cloud.binaryauthorization.v1beta1.Attestor;

                    /**
                     * Encodes the specified Attestor message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.Attestor.verify|verify} messages.
                     * @param message Attestor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IAttestor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attestor message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.Attestor.verify|verify} messages.
                     * @param message Attestor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IAttestor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attestor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attestor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.Attestor;

                    /**
                     * Decodes an Attestor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attestor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.Attestor;

                    /**
                     * Verifies an Attestor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attestor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attestor
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.Attestor;

                    /**
                     * Creates a plain object from an Attestor message. Also converts values to other types if specified.
                     * @param message Attestor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.Attestor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attestor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Attestor
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UserOwnedDrydockNote. */
                interface IUserOwnedDrydockNote {

                    /** UserOwnedDrydockNote noteReference */
                    noteReference?: (string|null);

                    /** UserOwnedDrydockNote publicKeys */
                    publicKeys?: (google.cloud.binaryauthorization.v1beta1.IAttestorPublicKey[]|null);

                    /** UserOwnedDrydockNote delegationServiceAccountEmail */
                    delegationServiceAccountEmail?: (string|null);
                }

                /** Represents a UserOwnedDrydockNote. */
                class UserOwnedDrydockNote implements IUserOwnedDrydockNote {

                    /**
                     * Constructs a new UserOwnedDrydockNote.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IUserOwnedDrydockNote);

                    /** UserOwnedDrydockNote noteReference. */
                    public noteReference: string;

                    /** UserOwnedDrydockNote publicKeys. */
                    public publicKeys: google.cloud.binaryauthorization.v1beta1.IAttestorPublicKey[];

                    /** UserOwnedDrydockNote delegationServiceAccountEmail. */
                    public delegationServiceAccountEmail: string;

                    /**
                     * Creates a new UserOwnedDrydockNote instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserOwnedDrydockNote instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IUserOwnedDrydockNote): google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote;

                    /**
                     * Encodes the specified UserOwnedDrydockNote message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote.verify|verify} messages.
                     * @param message UserOwnedDrydockNote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IUserOwnedDrydockNote, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserOwnedDrydockNote message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote.verify|verify} messages.
                     * @param message UserOwnedDrydockNote message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IUserOwnedDrydockNote, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserOwnedDrydockNote message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserOwnedDrydockNote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote;

                    /**
                     * Decodes a UserOwnedDrydockNote message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserOwnedDrydockNote
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote;

                    /**
                     * Verifies a UserOwnedDrydockNote message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserOwnedDrydockNote message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserOwnedDrydockNote
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote;

                    /**
                     * Creates a plain object from a UserOwnedDrydockNote message. Also converts values to other types if specified.
                     * @param message UserOwnedDrydockNote
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.UserOwnedDrydockNote, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserOwnedDrydockNote to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserOwnedDrydockNote
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PkixPublicKey. */
                interface IPkixPublicKey {

                    /** PkixPublicKey publicKeyPem */
                    publicKeyPem?: (string|null);

                    /** PkixPublicKey signatureAlgorithm */
                    signatureAlgorithm?: (google.cloud.binaryauthorization.v1beta1.PkixPublicKey.SignatureAlgorithm|keyof typeof google.cloud.binaryauthorization.v1beta1.PkixPublicKey.SignatureAlgorithm|null);
                }

                /** Represents a PkixPublicKey. */
                class PkixPublicKey implements IPkixPublicKey {

                    /**
                     * Constructs a new PkixPublicKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IPkixPublicKey);

                    /** PkixPublicKey publicKeyPem. */
                    public publicKeyPem: string;

                    /** PkixPublicKey signatureAlgorithm. */
                    public signatureAlgorithm: (google.cloud.binaryauthorization.v1beta1.PkixPublicKey.SignatureAlgorithm|keyof typeof google.cloud.binaryauthorization.v1beta1.PkixPublicKey.SignatureAlgorithm);

                    /**
                     * Creates a new PkixPublicKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PkixPublicKey instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IPkixPublicKey): google.cloud.binaryauthorization.v1beta1.PkixPublicKey;

                    /**
                     * Encodes the specified PkixPublicKey message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.PkixPublicKey.verify|verify} messages.
                     * @param message PkixPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IPkixPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PkixPublicKey message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.PkixPublicKey.verify|verify} messages.
                     * @param message PkixPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IPkixPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PkixPublicKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PkixPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.PkixPublicKey;

                    /**
                     * Decodes a PkixPublicKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PkixPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.PkixPublicKey;

                    /**
                     * Verifies a PkixPublicKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PkixPublicKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PkixPublicKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.PkixPublicKey;

                    /**
                     * Creates a plain object from a PkixPublicKey message. Also converts values to other types if specified.
                     * @param message PkixPublicKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.PkixPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PkixPublicKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PkixPublicKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PkixPublicKey {

                    /** SignatureAlgorithm enum. */
                    enum SignatureAlgorithm {
                        SIGNATURE_ALGORITHM_UNSPECIFIED = 0,
                        RSA_PSS_2048_SHA256 = 1,
                        RSA_PSS_3072_SHA256 = 2,
                        RSA_PSS_4096_SHA256 = 3,
                        RSA_PSS_4096_SHA512 = 4,
                        RSA_SIGN_PKCS1_2048_SHA256 = 5,
                        RSA_SIGN_PKCS1_3072_SHA256 = 6,
                        RSA_SIGN_PKCS1_4096_SHA256 = 7,
                        RSA_SIGN_PKCS1_4096_SHA512 = 8,
                        ECDSA_P256_SHA256 = 9,
                        EC_SIGN_P256_SHA256 = 9,
                        ECDSA_P384_SHA384 = 10,
                        EC_SIGN_P384_SHA384 = 10,
                        ECDSA_P521_SHA512 = 11,
                        EC_SIGN_P521_SHA512 = 11
                    }
                }

                /** Properties of an AttestorPublicKey. */
                interface IAttestorPublicKey {

                    /** AttestorPublicKey comment */
                    comment?: (string|null);

                    /** AttestorPublicKey id */
                    id?: (string|null);

                    /** AttestorPublicKey asciiArmoredPgpPublicKey */
                    asciiArmoredPgpPublicKey?: (string|null);

                    /** AttestorPublicKey pkixPublicKey */
                    pkixPublicKey?: (google.cloud.binaryauthorization.v1beta1.IPkixPublicKey|null);
                }

                /** Represents an AttestorPublicKey. */
                class AttestorPublicKey implements IAttestorPublicKey {

                    /**
                     * Constructs a new AttestorPublicKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IAttestorPublicKey);

                    /** AttestorPublicKey comment. */
                    public comment: string;

                    /** AttestorPublicKey id. */
                    public id: string;

                    /** AttestorPublicKey asciiArmoredPgpPublicKey. */
                    public asciiArmoredPgpPublicKey?: (string|null);

                    /** AttestorPublicKey pkixPublicKey. */
                    public pkixPublicKey?: (google.cloud.binaryauthorization.v1beta1.IPkixPublicKey|null);

                    /** AttestorPublicKey publicKey. */
                    public publicKey?: ("asciiArmoredPgpPublicKey"|"pkixPublicKey");

                    /**
                     * Creates a new AttestorPublicKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AttestorPublicKey instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IAttestorPublicKey): google.cloud.binaryauthorization.v1beta1.AttestorPublicKey;

                    /**
                     * Encodes the specified AttestorPublicKey message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.AttestorPublicKey.verify|verify} messages.
                     * @param message AttestorPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IAttestorPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AttestorPublicKey message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.AttestorPublicKey.verify|verify} messages.
                     * @param message AttestorPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IAttestorPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AttestorPublicKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AttestorPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.AttestorPublicKey;

                    /**
                     * Decodes an AttestorPublicKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AttestorPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.AttestorPublicKey;

                    /**
                     * Verifies an AttestorPublicKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AttestorPublicKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AttestorPublicKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.AttestorPublicKey;

                    /**
                     * Creates a plain object from an AttestorPublicKey message. Also converts values to other types if specified.
                     * @param message AttestorPublicKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.AttestorPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AttestorPublicKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AttestorPublicKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a BinauthzManagementServiceV1Beta1 */
                class BinauthzManagementServiceV1Beta1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BinauthzManagementServiceV1Beta1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BinauthzManagementServiceV1Beta1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BinauthzManagementServiceV1Beta1;

                    /**
                     * Calls GetPolicy.
                     * @param request GetPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getPolicy(request: google.cloud.binaryauthorization.v1beta1.IGetPolicyRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetPolicyCallback): void;

                    /**
                     * Calls GetPolicy.
                     * @param request GetPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getPolicy(request: google.cloud.binaryauthorization.v1beta1.IGetPolicyRequest): Promise<google.cloud.binaryauthorization.v1beta1.Policy>;

                    /**
                     * Calls UpdatePolicy.
                     * @param request UpdatePolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public updatePolicy(request: google.cloud.binaryauthorization.v1beta1.IUpdatePolicyRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdatePolicyCallback): void;

                    /**
                     * Calls UpdatePolicy.
                     * @param request UpdatePolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updatePolicy(request: google.cloud.binaryauthorization.v1beta1.IUpdatePolicyRequest): Promise<google.cloud.binaryauthorization.v1beta1.Policy>;

                    /**
                     * Calls CreateAttestor.
                     * @param request CreateAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Attestor
                     */
                    public createAttestor(request: google.cloud.binaryauthorization.v1beta1.ICreateAttestorRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.CreateAttestorCallback): void;

                    /**
                     * Calls CreateAttestor.
                     * @param request CreateAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public createAttestor(request: google.cloud.binaryauthorization.v1beta1.ICreateAttestorRequest): Promise<google.cloud.binaryauthorization.v1beta1.Attestor>;

                    /**
                     * Calls GetAttestor.
                     * @param request GetAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Attestor
                     */
                    public getAttestor(request: google.cloud.binaryauthorization.v1beta1.IGetAttestorRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.GetAttestorCallback): void;

                    /**
                     * Calls GetAttestor.
                     * @param request GetAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public getAttestor(request: google.cloud.binaryauthorization.v1beta1.IGetAttestorRequest): Promise<google.cloud.binaryauthorization.v1beta1.Attestor>;

                    /**
                     * Calls UpdateAttestor.
                     * @param request UpdateAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Attestor
                     */
                    public updateAttestor(request: google.cloud.binaryauthorization.v1beta1.IUpdateAttestorRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.UpdateAttestorCallback): void;

                    /**
                     * Calls UpdateAttestor.
                     * @param request UpdateAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public updateAttestor(request: google.cloud.binaryauthorization.v1beta1.IUpdateAttestorRequest): Promise<google.cloud.binaryauthorization.v1beta1.Attestor>;

                    /**
                     * Calls ListAttestors.
                     * @param request ListAttestorsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAttestorsResponse
                     */
                    public listAttestors(request: google.cloud.binaryauthorization.v1beta1.IListAttestorsRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.ListAttestorsCallback): void;

                    /**
                     * Calls ListAttestors.
                     * @param request ListAttestorsRequest message or plain object
                     * @returns Promise
                     */
                    public listAttestors(request: google.cloud.binaryauthorization.v1beta1.IListAttestorsRequest): Promise<google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse>;

                    /**
                     * Calls DeleteAttestor.
                     * @param request DeleteAttestorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAttestor(request: google.cloud.binaryauthorization.v1beta1.IDeleteAttestorRequest, callback: google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1.DeleteAttestorCallback): void;

                    /**
                     * Calls DeleteAttestor.
                     * @param request DeleteAttestorRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAttestor(request: google.cloud.binaryauthorization.v1beta1.IDeleteAttestorRequest): Promise<google.protobuf.Empty>;
                }

                namespace BinauthzManagementServiceV1Beta1 {

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|getPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetPolicyCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|updatePolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type UpdatePolicyCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|createAttestor}.
                     * @param error Error, if any
                     * @param [response] Attestor
                     */
                    type CreateAttestorCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.Attestor) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|getAttestor}.
                     * @param error Error, if any
                     * @param [response] Attestor
                     */
                    type GetAttestorCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.Attestor) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|updateAttestor}.
                     * @param error Error, if any
                     * @param [response] Attestor
                     */
                    type UpdateAttestorCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.Attestor) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|listAttestors}.
                     * @param error Error, if any
                     * @param [response] ListAttestorsResponse
                     */
                    type ListAttestorsCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1|deleteAttestor}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAttestorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a GetPolicyRequest. */
                interface IGetPolicyRequest {

                    /** GetPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPolicyRequest. */
                class GetPolicyRequest implements IGetPolicyRequest {

                    /**
                     * Constructs a new GetPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IGetPolicyRequest);

                    /** GetPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IGetPolicyRequest): google.cloud.binaryauthorization.v1beta1.GetPolicyRequest;

                    /**
                     * Encodes the specified GetPolicyRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.GetPolicyRequest.verify|verify} messages.
                     * @param message GetPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.GetPolicyRequest.verify|verify} messages.
                     * @param message GetPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.GetPolicyRequest;

                    /**
                     * Decodes a GetPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.GetPolicyRequest;

                    /**
                     * Verifies a GetPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.GetPolicyRequest;

                    /**
                     * Creates a plain object from a GetPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.GetPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a SystemPolicyV1Beta1 */
                class SystemPolicyV1Beta1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SystemPolicyV1Beta1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SystemPolicyV1Beta1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SystemPolicyV1Beta1;

                    /**
                     * Calls GetSystemPolicy.
                     * @param request GetSystemPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getSystemPolicy(request: google.cloud.binaryauthorization.v1beta1.IGetSystemPolicyRequest, callback: google.cloud.binaryauthorization.v1beta1.SystemPolicyV1Beta1.GetSystemPolicyCallback): void;

                    /**
                     * Calls GetSystemPolicy.
                     * @param request GetSystemPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getSystemPolicy(request: google.cloud.binaryauthorization.v1beta1.IGetSystemPolicyRequest): Promise<google.cloud.binaryauthorization.v1beta1.Policy>;
                }

                namespace SystemPolicyV1Beta1 {

                    /**
                     * Callback as used by {@link google.cloud.binaryauthorization.v1beta1.SystemPolicyV1Beta1|getSystemPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetSystemPolicyCallback = (error: (Error|null), response?: google.cloud.binaryauthorization.v1beta1.Policy) => void;
                }

                /** Properties of an UpdatePolicyRequest. */
                interface IUpdatePolicyRequest {

                    /** UpdatePolicyRequest policy */
                    policy?: (google.cloud.binaryauthorization.v1beta1.IPolicy|null);
                }

                /** Represents an UpdatePolicyRequest. */
                class UpdatePolicyRequest implements IUpdatePolicyRequest {

                    /**
                     * Constructs a new UpdatePolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IUpdatePolicyRequest);

                    /** UpdatePolicyRequest policy. */
                    public policy?: (google.cloud.binaryauthorization.v1beta1.IPolicy|null);

                    /**
                     * Creates a new UpdatePolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePolicyRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IUpdatePolicyRequest): google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest;

                    /**
                     * Encodes the specified UpdatePolicyRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest.verify|verify} messages.
                     * @param message UpdatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePolicyRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest.verify|verify} messages.
                     * @param message UpdatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest;

                    /**
                     * Decodes an UpdatePolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest;

                    /**
                     * Verifies an UpdatePolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest;

                    /**
                     * Creates a plain object from an UpdatePolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdatePolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.UpdatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAttestorRequest. */
                interface ICreateAttestorRequest {

                    /** CreateAttestorRequest parent */
                    parent?: (string|null);

                    /** CreateAttestorRequest attestorId */
                    attestorId?: (string|null);

                    /** CreateAttestorRequest attestor */
                    attestor?: (google.cloud.binaryauthorization.v1beta1.IAttestor|null);
                }

                /** Represents a CreateAttestorRequest. */
                class CreateAttestorRequest implements ICreateAttestorRequest {

                    /**
                     * Constructs a new CreateAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.ICreateAttestorRequest);

                    /** CreateAttestorRequest parent. */
                    public parent: string;

                    /** CreateAttestorRequest attestorId. */
                    public attestorId: string;

                    /** CreateAttestorRequest attestor. */
                    public attestor?: (google.cloud.binaryauthorization.v1beta1.IAttestor|null);

                    /**
                     * Creates a new CreateAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.ICreateAttestorRequest): google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest;

                    /**
                     * Encodes the specified CreateAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest.verify|verify} messages.
                     * @param message CreateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.ICreateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest.verify|verify} messages.
                     * @param message CreateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.ICreateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest;

                    /**
                     * Decodes a CreateAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest;

                    /**
                     * Verifies a CreateAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest;

                    /**
                     * Creates a plain object from a CreateAttestorRequest message. Also converts values to other types if specified.
                     * @param message CreateAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.CreateAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAttestorRequest. */
                interface IGetAttestorRequest {

                    /** GetAttestorRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAttestorRequest. */
                class GetAttestorRequest implements IGetAttestorRequest {

                    /**
                     * Constructs a new GetAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IGetAttestorRequest);

                    /** GetAttestorRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IGetAttestorRequest): google.cloud.binaryauthorization.v1beta1.GetAttestorRequest;

                    /**
                     * Encodes the specified GetAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.GetAttestorRequest.verify|verify} messages.
                     * @param message GetAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IGetAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.GetAttestorRequest.verify|verify} messages.
                     * @param message GetAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IGetAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.GetAttestorRequest;

                    /**
                     * Decodes a GetAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.GetAttestorRequest;

                    /**
                     * Verifies a GetAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.GetAttestorRequest;

                    /**
                     * Creates a plain object from a GetAttestorRequest message. Also converts values to other types if specified.
                     * @param message GetAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.GetAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAttestorRequest. */
                interface IUpdateAttestorRequest {

                    /** UpdateAttestorRequest attestor */
                    attestor?: (google.cloud.binaryauthorization.v1beta1.IAttestor|null);
                }

                /** Represents an UpdateAttestorRequest. */
                class UpdateAttestorRequest implements IUpdateAttestorRequest {

                    /**
                     * Constructs a new UpdateAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IUpdateAttestorRequest);

                    /** UpdateAttestorRequest attestor. */
                    public attestor?: (google.cloud.binaryauthorization.v1beta1.IAttestor|null);

                    /**
                     * Creates a new UpdateAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IUpdateAttestorRequest): google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest;

                    /**
                     * Encodes the specified UpdateAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest.verify|verify} messages.
                     * @param message UpdateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IUpdateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest.verify|verify} messages.
                     * @param message UpdateAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IUpdateAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest;

                    /**
                     * Decodes an UpdateAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest;

                    /**
                     * Verifies an UpdateAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest;

                    /**
                     * Creates a plain object from an UpdateAttestorRequest message. Also converts values to other types if specified.
                     * @param message UpdateAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.UpdateAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAttestorsRequest. */
                interface IListAttestorsRequest {

                    /** ListAttestorsRequest parent */
                    parent?: (string|null);

                    /** ListAttestorsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAttestorsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAttestorsRequest. */
                class ListAttestorsRequest implements IListAttestorsRequest {

                    /**
                     * Constructs a new ListAttestorsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IListAttestorsRequest);

                    /** ListAttestorsRequest parent. */
                    public parent: string;

                    /** ListAttestorsRequest pageSize. */
                    public pageSize: number;

                    /** ListAttestorsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAttestorsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAttestorsRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IListAttestorsRequest): google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest;

                    /**
                     * Encodes the specified ListAttestorsRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest.verify|verify} messages.
                     * @param message ListAttestorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IListAttestorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAttestorsRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest.verify|verify} messages.
                     * @param message ListAttestorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IListAttestorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAttestorsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAttestorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest;

                    /**
                     * Decodes a ListAttestorsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAttestorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest;

                    /**
                     * Verifies a ListAttestorsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAttestorsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAttestorsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest;

                    /**
                     * Creates a plain object from a ListAttestorsRequest message. Also converts values to other types if specified.
                     * @param message ListAttestorsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.ListAttestorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAttestorsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAttestorsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAttestorsResponse. */
                interface IListAttestorsResponse {

                    /** ListAttestorsResponse attestors */
                    attestors?: (google.cloud.binaryauthorization.v1beta1.IAttestor[]|null);

                    /** ListAttestorsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAttestorsResponse. */
                class ListAttestorsResponse implements IListAttestorsResponse {

                    /**
                     * Constructs a new ListAttestorsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IListAttestorsResponse);

                    /** ListAttestorsResponse attestors. */
                    public attestors: google.cloud.binaryauthorization.v1beta1.IAttestor[];

                    /** ListAttestorsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAttestorsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAttestorsResponse instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IListAttestorsResponse): google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse;

                    /**
                     * Encodes the specified ListAttestorsResponse message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse.verify|verify} messages.
                     * @param message ListAttestorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IListAttestorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAttestorsResponse message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse.verify|verify} messages.
                     * @param message ListAttestorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IListAttestorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAttestorsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAttestorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse;

                    /**
                     * Decodes a ListAttestorsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAttestorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse;

                    /**
                     * Verifies a ListAttestorsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAttestorsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAttestorsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse;

                    /**
                     * Creates a plain object from a ListAttestorsResponse message. Also converts values to other types if specified.
                     * @param message ListAttestorsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAttestorsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAttestorsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAttestorRequest. */
                interface IDeleteAttestorRequest {

                    /** DeleteAttestorRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAttestorRequest. */
                class DeleteAttestorRequest implements IDeleteAttestorRequest {

                    /**
                     * Constructs a new DeleteAttestorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IDeleteAttestorRequest);

                    /** DeleteAttestorRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAttestorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAttestorRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IDeleteAttestorRequest): google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest;

                    /**
                     * Encodes the specified DeleteAttestorRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest.verify|verify} messages.
                     * @param message DeleteAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IDeleteAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAttestorRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest.verify|verify} messages.
                     * @param message DeleteAttestorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IDeleteAttestorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAttestorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest;

                    /**
                     * Decodes a DeleteAttestorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAttestorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest;

                    /**
                     * Verifies a DeleteAttestorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAttestorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAttestorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest;

                    /**
                     * Creates a plain object from a DeleteAttestorRequest message. Also converts values to other types if specified.
                     * @param message DeleteAttestorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.DeleteAttestorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAttestorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAttestorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSystemPolicyRequest. */
                interface IGetSystemPolicyRequest {

                    /** GetSystemPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSystemPolicyRequest. */
                class GetSystemPolicyRequest implements IGetSystemPolicyRequest {

                    /**
                     * Constructs a new GetSystemPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.binaryauthorization.v1beta1.IGetSystemPolicyRequest);

                    /** GetSystemPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSystemPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSystemPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.binaryauthorization.v1beta1.IGetSystemPolicyRequest): google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest;

                    /**
                     * Encodes the specified GetSystemPolicyRequest message. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest.verify|verify} messages.
                     * @param message GetSystemPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.binaryauthorization.v1beta1.IGetSystemPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSystemPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest.verify|verify} messages.
                     * @param message GetSystemPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.binaryauthorization.v1beta1.IGetSystemPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSystemPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSystemPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest;

                    /**
                     * Decodes a GetSystemPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSystemPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest;

                    /**
                     * Verifies a GetSystemPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSystemPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSystemPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest;

                    /**
                     * Creates a plain object from a GetSystemPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetSystemPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSystemPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSystemPolicyRequest
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
}

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

            /**
             * Gets the default type url for AttestationNote
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for Hint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Jwt
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AttestationOccurrence. */
        interface IAttestationOccurrence {

            /** AttestationOccurrence serializedPayload */
            serializedPayload?: (Uint8Array|Buffer|string|null);

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
            public serializedPayload: (Uint8Array|Buffer|string);

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

            /**
             * Gets the default type url for AttestationOccurrence
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
            DSSE_ATTESTATION = 10,
            VULNERABILITY_ASSESSMENT = 11,
            SBOM_REFERENCE = 12,
            SECRET = 13
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
            signature?: (Uint8Array|Buffer|string|null);

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
            public signature: (Uint8Array|Buffer|string);

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

            /**
             * Gets the default type url for Signature
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Envelope. */
        interface IEnvelope {

            /** Envelope payload */
            payload?: (Uint8Array|Buffer|string|null);

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
            public payload: (Uint8Array|Buffer|string);

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

            /**
             * Gets the default type url for Envelope
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnvelopeSignature. */
        interface IEnvelopeSignature {

            /** EnvelopeSignature sig */
            sig?: (Uint8Array|Buffer|string|null);

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
            public sig: (Uint8Array|Buffer|string);

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

            /**
             * Gets the default type url for EnvelopeSignature
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileLocation. */
        interface IFileLocation {

            /** FileLocation filePath */
            filePath?: (string|null);

            /** FileLocation layerDetails */
            layerDetails?: (grafeas.v1.ILayerDetails|null);
        }

        /** Represents a FileLocation. */
        class FileLocation implements IFileLocation {

            /**
             * Constructs a new FileLocation.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IFileLocation);

            /** FileLocation filePath. */
            public filePath: string;

            /** FileLocation layerDetails. */
            public layerDetails?: (grafeas.v1.ILayerDetails|null);

            /**
             * Creates a new FileLocation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileLocation instance
             */
            public static create(properties?: grafeas.v1.IFileLocation): grafeas.v1.FileLocation;

            /**
             * Encodes the specified FileLocation message. Does not implicitly {@link grafeas.v1.FileLocation.verify|verify} messages.
             * @param message FileLocation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IFileLocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileLocation message, length delimited. Does not implicitly {@link grafeas.v1.FileLocation.verify|verify} messages.
             * @param message FileLocation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IFileLocation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileLocation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileLocation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.FileLocation;

            /**
             * Decodes a FileLocation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileLocation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.FileLocation;

            /**
             * Verifies a FileLocation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileLocation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileLocation
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.FileLocation;

            /**
             * Creates a plain object from a FileLocation message. Also converts values to other types if specified.
             * @param message FileLocation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.FileLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileLocation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileLocation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BaseImage. */
        interface IBaseImage {

            /** BaseImage name */
            name?: (string|null);

            /** BaseImage repository */
            repository?: (string|null);

            /** BaseImage layerCount */
            layerCount?: (number|null);
        }

        /** Represents a BaseImage. */
        class BaseImage implements IBaseImage {

            /**
             * Constructs a new BaseImage.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IBaseImage);

            /** BaseImage name. */
            public name: string;

            /** BaseImage repository. */
            public repository: string;

            /** BaseImage layerCount. */
            public layerCount: number;

            /**
             * Creates a new BaseImage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BaseImage instance
             */
            public static create(properties?: grafeas.v1.IBaseImage): grafeas.v1.BaseImage;

            /**
             * Encodes the specified BaseImage message. Does not implicitly {@link grafeas.v1.BaseImage.verify|verify} messages.
             * @param message BaseImage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IBaseImage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaseImage message, length delimited. Does not implicitly {@link grafeas.v1.BaseImage.verify|verify} messages.
             * @param message BaseImage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IBaseImage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaseImage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaseImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.BaseImage;

            /**
             * Decodes a BaseImage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaseImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.BaseImage;

            /**
             * Verifies a BaseImage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaseImage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaseImage
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.BaseImage;

            /**
             * Creates a plain object from a BaseImage message. Also converts values to other types if specified.
             * @param message BaseImage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.BaseImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaseImage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BaseImage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LayerDetails. */
        interface ILayerDetails {

            /** LayerDetails index */
            index?: (number|null);

            /** LayerDetails diffId */
            diffId?: (string|null);

            /** LayerDetails chainId */
            chainId?: (string|null);

            /** LayerDetails command */
            command?: (string|null);

            /** LayerDetails baseImages */
            baseImages?: (grafeas.v1.IBaseImage[]|null);
        }

        /** Represents a LayerDetails. */
        class LayerDetails implements ILayerDetails {

            /**
             * Constructs a new LayerDetails.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ILayerDetails);

            /** LayerDetails index. */
            public index: number;

            /** LayerDetails diffId. */
            public diffId: string;

            /** LayerDetails chainId. */
            public chainId: string;

            /** LayerDetails command. */
            public command: string;

            /** LayerDetails baseImages. */
            public baseImages: grafeas.v1.IBaseImage[];

            /**
             * Creates a new LayerDetails instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LayerDetails instance
             */
            public static create(properties?: grafeas.v1.ILayerDetails): grafeas.v1.LayerDetails;

            /**
             * Encodes the specified LayerDetails message. Does not implicitly {@link grafeas.v1.LayerDetails.verify|verify} messages.
             * @param message LayerDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ILayerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LayerDetails message, length delimited. Does not implicitly {@link grafeas.v1.LayerDetails.verify|verify} messages.
             * @param message LayerDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ILayerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LayerDetails message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LayerDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.LayerDetails;

            /**
             * Decodes a LayerDetails message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LayerDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.LayerDetails;

            /**
             * Verifies a LayerDetails message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LayerDetails message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LayerDetails
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.LayerDetails;

            /**
             * Creates a plain object from a LayerDetails message. Also converts values to other types if specified.
             * @param message LayerDetails
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.LayerDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LayerDetails to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LayerDetails
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a License. */
        interface ILicense {

            /** License expression */
            expression?: (string|null);

            /** License comments */
            comments?: (string|null);
        }

        /** Represents a License. */
        class License implements ILicense {

            /**
             * Constructs a new License.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.ILicense);

            /** License expression. */
            public expression: string;

            /** License comments. */
            public comments: string;

            /**
             * Creates a new License instance using the specified properties.
             * @param [properties] Properties to set
             * @returns License instance
             */
            public static create(properties?: grafeas.v1.ILicense): grafeas.v1.License;

            /**
             * Encodes the specified License message. Does not implicitly {@link grafeas.v1.License.verify|verify} messages.
             * @param message License message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified License message, length delimited. Does not implicitly {@link grafeas.v1.License.verify|verify} messages.
             * @param message License message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a License message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns License
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.License;

            /**
             * Decodes a License message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns License
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.License;

            /**
             * Verifies a License message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a License message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns License
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.License;

            /**
             * Creates a plain object from a License message. Also converts values to other types if specified.
             * @param message License
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.License, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this License to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for License
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Digest. */
        interface IDigest {

            /** Digest algo */
            algo?: (string|null);

            /** Digest digestBytes */
            digestBytes?: (Uint8Array|Buffer|string|null);
        }

        /** Represents a Digest. */
        class Digest implements IDigest {

            /**
             * Constructs a new Digest.
             * @param [properties] Properties to set
             */
            constructor(properties?: grafeas.v1.IDigest);

            /** Digest algo. */
            public algo: string;

            /** Digest digestBytes. */
            public digestBytes: (Uint8Array|Buffer|string);

            /**
             * Creates a new Digest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Digest instance
             */
            public static create(properties?: grafeas.v1.IDigest): grafeas.v1.Digest;

            /**
             * Encodes the specified Digest message. Does not implicitly {@link grafeas.v1.Digest.verify|verify} messages.
             * @param message Digest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: grafeas.v1.IDigest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Digest message, length delimited. Does not implicitly {@link grafeas.v1.Digest.verify|verify} messages.
             * @param message Digest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: grafeas.v1.IDigest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Digest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Digest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grafeas.v1.Digest;

            /**
             * Decodes a Digest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Digest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grafeas.v1.Digest;

            /**
             * Verifies a Digest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Digest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Digest
             */
            public static fromObject(object: { [k: string]: any }): grafeas.v1.Digest;

            /**
             * Creates a plain object from a Digest message. Also converts values to other types if specified.
             * @param message Digest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: grafeas.v1.Digest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Digest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Digest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
