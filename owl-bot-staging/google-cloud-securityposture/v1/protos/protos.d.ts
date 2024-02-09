// Copyright 2024 Google LLC
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

        /** Namespace securityposture. */
        namespace securityposture {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a PolicyRule. */
                interface IPolicyRule {

                    /** PolicyRule values */
                    values?: (google.cloud.securityposture.v1.PolicyRule.IStringValues|null);

                    /** PolicyRule allowAll */
                    allowAll?: (boolean|null);

                    /** PolicyRule denyAll */
                    denyAll?: (boolean|null);

                    /** PolicyRule enforce */
                    enforce?: (boolean|null);

                    /** PolicyRule condition */
                    condition?: (google.type.IExpr|null);
                }

                /** Represents a PolicyRule. */
                class PolicyRule implements IPolicyRule {

                    /**
                     * Constructs a new PolicyRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IPolicyRule);

                    /** PolicyRule values. */
                    public values?: (google.cloud.securityposture.v1.PolicyRule.IStringValues|null);

                    /** PolicyRule allowAll. */
                    public allowAll?: (boolean|null);

                    /** PolicyRule denyAll. */
                    public denyAll?: (boolean|null);

                    /** PolicyRule enforce. */
                    public enforce?: (boolean|null);

                    /** PolicyRule condition. */
                    public condition?: (google.type.IExpr|null);

                    /** PolicyRule kind. */
                    public kind?: ("values"|"allowAll"|"denyAll"|"enforce");

                    /**
                     * Creates a new PolicyRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PolicyRule instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IPolicyRule): google.cloud.securityposture.v1.PolicyRule;

                    /**
                     * Encodes the specified PolicyRule message. Does not implicitly {@link google.cloud.securityposture.v1.PolicyRule.verify|verify} messages.
                     * @param message PolicyRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PolicyRule message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.PolicyRule.verify|verify} messages.
                     * @param message PolicyRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PolicyRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PolicyRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.PolicyRule;

                    /**
                     * Decodes a PolicyRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PolicyRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.PolicyRule;

                    /**
                     * Verifies a PolicyRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PolicyRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PolicyRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.PolicyRule;

                    /**
                     * Creates a plain object from a PolicyRule message. Also converts values to other types if specified.
                     * @param message PolicyRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.PolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PolicyRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PolicyRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PolicyRule {

                    /** Properties of a StringValues. */
                    interface IStringValues {

                        /** StringValues allowedValues */
                        allowedValues?: (string[]|null);

                        /** StringValues deniedValues */
                        deniedValues?: (string[]|null);
                    }

                    /** Represents a StringValues. */
                    class StringValues implements IStringValues {

                        /**
                         * Constructs a new StringValues.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securityposture.v1.PolicyRule.IStringValues);

                        /** StringValues allowedValues. */
                        public allowedValues: string[];

                        /** StringValues deniedValues. */
                        public deniedValues: string[];

                        /**
                         * Creates a new StringValues instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StringValues instance
                         */
                        public static create(properties?: google.cloud.securityposture.v1.PolicyRule.IStringValues): google.cloud.securityposture.v1.PolicyRule.StringValues;

                        /**
                         * Encodes the specified StringValues message. Does not implicitly {@link google.cloud.securityposture.v1.PolicyRule.StringValues.verify|verify} messages.
                         * @param message StringValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securityposture.v1.PolicyRule.IStringValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StringValues message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.PolicyRule.StringValues.verify|verify} messages.
                         * @param message StringValues message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securityposture.v1.PolicyRule.IStringValues, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StringValues message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StringValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.PolicyRule.StringValues;

                        /**
                         * Decodes a StringValues message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StringValues
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.PolicyRule.StringValues;

                        /**
                         * Verifies a StringValues message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StringValues message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StringValues
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.PolicyRule.StringValues;

                        /**
                         * Creates a plain object from a StringValues message. Also converts values to other types if specified.
                         * @param message StringValues
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securityposture.v1.PolicyRule.StringValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StringValues to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StringValues
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a CustomConstraint. */
                interface ICustomConstraint {

                    /** CustomConstraint name */
                    name?: (string|null);

                    /** CustomConstraint resourceTypes */
                    resourceTypes?: (string[]|null);

                    /** CustomConstraint methodTypes */
                    methodTypes?: (google.cloud.securityposture.v1.CustomConstraint.MethodType[]|null);

                    /** CustomConstraint condition */
                    condition?: (string|null);

                    /** CustomConstraint actionType */
                    actionType?: (google.cloud.securityposture.v1.CustomConstraint.ActionType|keyof typeof google.cloud.securityposture.v1.CustomConstraint.ActionType|null);

                    /** CustomConstraint displayName */
                    displayName?: (string|null);

                    /** CustomConstraint description */
                    description?: (string|null);

                    /** CustomConstraint updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CustomConstraint. */
                class CustomConstraint implements ICustomConstraint {

                    /**
                     * Constructs a new CustomConstraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.ICustomConstraint);

                    /** CustomConstraint name. */
                    public name: string;

                    /** CustomConstraint resourceTypes. */
                    public resourceTypes: string[];

                    /** CustomConstraint methodTypes. */
                    public methodTypes: google.cloud.securityposture.v1.CustomConstraint.MethodType[];

                    /** CustomConstraint condition. */
                    public condition: string;

                    /** CustomConstraint actionType. */
                    public actionType: (google.cloud.securityposture.v1.CustomConstraint.ActionType|keyof typeof google.cloud.securityposture.v1.CustomConstraint.ActionType);

                    /** CustomConstraint displayName. */
                    public displayName: string;

                    /** CustomConstraint description. */
                    public description: string;

                    /** CustomConstraint updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CustomConstraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomConstraint instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.ICustomConstraint): google.cloud.securityposture.v1.CustomConstraint;

                    /**
                     * Encodes the specified CustomConstraint message. Does not implicitly {@link google.cloud.securityposture.v1.CustomConstraint.verify|verify} messages.
                     * @param message CustomConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.ICustomConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomConstraint message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CustomConstraint.verify|verify} messages.
                     * @param message CustomConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.ICustomConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CustomConstraint;

                    /**
                     * Decodes a CustomConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CustomConstraint;

                    /**
                     * Verifies a CustomConstraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomConstraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomConstraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CustomConstraint;

                    /**
                     * Creates a plain object from a CustomConstraint message. Also converts values to other types if specified.
                     * @param message CustomConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.CustomConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomConstraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomConstraint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomConstraint {

                    /** MethodType enum. */
                    enum MethodType {
                        METHOD_TYPE_UNSPECIFIED = 0,
                        CREATE = 1,
                        UPDATE = 2,
                        DELETE = 3
                    }

                    /** ActionType enum. */
                    enum ActionType {
                        ACTION_TYPE_UNSPECIFIED = 0,
                        ALLOW = 1,
                        DENY = 2
                    }
                }

                /** Properties of an OrgPolicyConstraint. */
                interface IOrgPolicyConstraint {

                    /** OrgPolicyConstraint cannedConstraintId */
                    cannedConstraintId?: (string|null);

                    /** OrgPolicyConstraint policyRules */
                    policyRules?: (google.cloud.securityposture.v1.IPolicyRule[]|null);
                }

                /** Represents an OrgPolicyConstraint. */
                class OrgPolicyConstraint implements IOrgPolicyConstraint {

                    /**
                     * Constructs a new OrgPolicyConstraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IOrgPolicyConstraint);

                    /** OrgPolicyConstraint cannedConstraintId. */
                    public cannedConstraintId: string;

                    /** OrgPolicyConstraint policyRules. */
                    public policyRules: google.cloud.securityposture.v1.IPolicyRule[];

                    /**
                     * Creates a new OrgPolicyConstraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrgPolicyConstraint instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IOrgPolicyConstraint): google.cloud.securityposture.v1.OrgPolicyConstraint;

                    /**
                     * Encodes the specified OrgPolicyConstraint message. Does not implicitly {@link google.cloud.securityposture.v1.OrgPolicyConstraint.verify|verify} messages.
                     * @param message OrgPolicyConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IOrgPolicyConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrgPolicyConstraint message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.OrgPolicyConstraint.verify|verify} messages.
                     * @param message OrgPolicyConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IOrgPolicyConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrgPolicyConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrgPolicyConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.OrgPolicyConstraint;

                    /**
                     * Decodes an OrgPolicyConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrgPolicyConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.OrgPolicyConstraint;

                    /**
                     * Verifies an OrgPolicyConstraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrgPolicyConstraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrgPolicyConstraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.OrgPolicyConstraint;

                    /**
                     * Creates a plain object from an OrgPolicyConstraint message. Also converts values to other types if specified.
                     * @param message OrgPolicyConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.OrgPolicyConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrgPolicyConstraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrgPolicyConstraint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OrgPolicyConstraintCustom. */
                interface IOrgPolicyConstraintCustom {

                    /** OrgPolicyConstraintCustom customConstraint */
                    customConstraint?: (google.cloud.securityposture.v1.ICustomConstraint|null);

                    /** OrgPolicyConstraintCustom policyRules */
                    policyRules?: (google.cloud.securityposture.v1.IPolicyRule[]|null);
                }

                /** Represents an OrgPolicyConstraintCustom. */
                class OrgPolicyConstraintCustom implements IOrgPolicyConstraintCustom {

                    /**
                     * Constructs a new OrgPolicyConstraintCustom.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IOrgPolicyConstraintCustom);

                    /** OrgPolicyConstraintCustom customConstraint. */
                    public customConstraint?: (google.cloud.securityposture.v1.ICustomConstraint|null);

                    /** OrgPolicyConstraintCustom policyRules. */
                    public policyRules: google.cloud.securityposture.v1.IPolicyRule[];

                    /**
                     * Creates a new OrgPolicyConstraintCustom instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrgPolicyConstraintCustom instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IOrgPolicyConstraintCustom): google.cloud.securityposture.v1.OrgPolicyConstraintCustom;

                    /**
                     * Encodes the specified OrgPolicyConstraintCustom message. Does not implicitly {@link google.cloud.securityposture.v1.OrgPolicyConstraintCustom.verify|verify} messages.
                     * @param message OrgPolicyConstraintCustom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IOrgPolicyConstraintCustom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrgPolicyConstraintCustom message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.OrgPolicyConstraintCustom.verify|verify} messages.
                     * @param message OrgPolicyConstraintCustom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IOrgPolicyConstraintCustom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrgPolicyConstraintCustom message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrgPolicyConstraintCustom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.OrgPolicyConstraintCustom;

                    /**
                     * Decodes an OrgPolicyConstraintCustom message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrgPolicyConstraintCustom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.OrgPolicyConstraintCustom;

                    /**
                     * Verifies an OrgPolicyConstraintCustom message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrgPolicyConstraintCustom message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrgPolicyConstraintCustom
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.OrgPolicyConstraintCustom;

                    /**
                     * Creates a plain object from an OrgPolicyConstraintCustom message. Also converts values to other types if specified.
                     * @param message OrgPolicyConstraintCustom
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.OrgPolicyConstraintCustom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrgPolicyConstraintCustom to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrgPolicyConstraintCustom
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a SecurityPosture */
                class SecurityPosture extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SecurityPosture service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SecurityPosture service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SecurityPosture;

                    /**
                     * Calls ListPostures.
                     * @param request ListPosturesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPosturesResponse
                     */
                    public listPostures(request: google.cloud.securityposture.v1.IListPosturesRequest, callback: google.cloud.securityposture.v1.SecurityPosture.ListPosturesCallback): void;

                    /**
                     * Calls ListPostures.
                     * @param request ListPosturesRequest message or plain object
                     * @returns Promise
                     */
                    public listPostures(request: google.cloud.securityposture.v1.IListPosturesRequest): Promise<google.cloud.securityposture.v1.ListPosturesResponse>;

                    /**
                     * Calls ListPostureRevisions.
                     * @param request ListPostureRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPostureRevisionsResponse
                     */
                    public listPostureRevisions(request: google.cloud.securityposture.v1.IListPostureRevisionsRequest, callback: google.cloud.securityposture.v1.SecurityPosture.ListPostureRevisionsCallback): void;

                    /**
                     * Calls ListPostureRevisions.
                     * @param request ListPostureRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listPostureRevisions(request: google.cloud.securityposture.v1.IListPostureRevisionsRequest): Promise<google.cloud.securityposture.v1.ListPostureRevisionsResponse>;

                    /**
                     * Calls GetPosture.
                     * @param request GetPostureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Posture
                     */
                    public getPosture(request: google.cloud.securityposture.v1.IGetPostureRequest, callback: google.cloud.securityposture.v1.SecurityPosture.GetPostureCallback): void;

                    /**
                     * Calls GetPosture.
                     * @param request GetPostureRequest message or plain object
                     * @returns Promise
                     */
                    public getPosture(request: google.cloud.securityposture.v1.IGetPostureRequest): Promise<google.cloud.securityposture.v1.Posture>;

                    /**
                     * Calls CreatePosture.
                     * @param request CreatePostureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPosture(request: google.cloud.securityposture.v1.ICreatePostureRequest, callback: google.cloud.securityposture.v1.SecurityPosture.CreatePostureCallback): void;

                    /**
                     * Calls CreatePosture.
                     * @param request CreatePostureRequest message or plain object
                     * @returns Promise
                     */
                    public createPosture(request: google.cloud.securityposture.v1.ICreatePostureRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdatePosture.
                     * @param request UpdatePostureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePosture(request: google.cloud.securityposture.v1.IUpdatePostureRequest, callback: google.cloud.securityposture.v1.SecurityPosture.UpdatePostureCallback): void;

                    /**
                     * Calls UpdatePosture.
                     * @param request UpdatePostureRequest message or plain object
                     * @returns Promise
                     */
                    public updatePosture(request: google.cloud.securityposture.v1.IUpdatePostureRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePosture.
                     * @param request DeletePostureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePosture(request: google.cloud.securityposture.v1.IDeletePostureRequest, callback: google.cloud.securityposture.v1.SecurityPosture.DeletePostureCallback): void;

                    /**
                     * Calls DeletePosture.
                     * @param request DeletePostureRequest message or plain object
                     * @returns Promise
                     */
                    public deletePosture(request: google.cloud.securityposture.v1.IDeletePostureRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExtractPosture.
                     * @param request ExtractPostureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public extractPosture(request: google.cloud.securityposture.v1.IExtractPostureRequest, callback: google.cloud.securityposture.v1.SecurityPosture.ExtractPostureCallback): void;

                    /**
                     * Calls ExtractPosture.
                     * @param request ExtractPostureRequest message or plain object
                     * @returns Promise
                     */
                    public extractPosture(request: google.cloud.securityposture.v1.IExtractPostureRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListPostureDeployments.
                     * @param request ListPostureDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPostureDeploymentsResponse
                     */
                    public listPostureDeployments(request: google.cloud.securityposture.v1.IListPostureDeploymentsRequest, callback: google.cloud.securityposture.v1.SecurityPosture.ListPostureDeploymentsCallback): void;

                    /**
                     * Calls ListPostureDeployments.
                     * @param request ListPostureDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listPostureDeployments(request: google.cloud.securityposture.v1.IListPostureDeploymentsRequest): Promise<google.cloud.securityposture.v1.ListPostureDeploymentsResponse>;

                    /**
                     * Calls GetPostureDeployment.
                     * @param request GetPostureDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PostureDeployment
                     */
                    public getPostureDeployment(request: google.cloud.securityposture.v1.IGetPostureDeploymentRequest, callback: google.cloud.securityposture.v1.SecurityPosture.GetPostureDeploymentCallback): void;

                    /**
                     * Calls GetPostureDeployment.
                     * @param request GetPostureDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getPostureDeployment(request: google.cloud.securityposture.v1.IGetPostureDeploymentRequest): Promise<google.cloud.securityposture.v1.PostureDeployment>;

                    /**
                     * Calls CreatePostureDeployment.
                     * @param request CreatePostureDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPostureDeployment(request: google.cloud.securityposture.v1.ICreatePostureDeploymentRequest, callback: google.cloud.securityposture.v1.SecurityPosture.CreatePostureDeploymentCallback): void;

                    /**
                     * Calls CreatePostureDeployment.
                     * @param request CreatePostureDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createPostureDeployment(request: google.cloud.securityposture.v1.ICreatePostureDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdatePostureDeployment.
                     * @param request UpdatePostureDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePostureDeployment(request: google.cloud.securityposture.v1.IUpdatePostureDeploymentRequest, callback: google.cloud.securityposture.v1.SecurityPosture.UpdatePostureDeploymentCallback): void;

                    /**
                     * Calls UpdatePostureDeployment.
                     * @param request UpdatePostureDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updatePostureDeployment(request: google.cloud.securityposture.v1.IUpdatePostureDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePostureDeployment.
                     * @param request DeletePostureDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePostureDeployment(request: google.cloud.securityposture.v1.IDeletePostureDeploymentRequest, callback: google.cloud.securityposture.v1.SecurityPosture.DeletePostureDeploymentCallback): void;

                    /**
                     * Calls DeletePostureDeployment.
                     * @param request DeletePostureDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deletePostureDeployment(request: google.cloud.securityposture.v1.IDeletePostureDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListPostureTemplates.
                     * @param request ListPostureTemplatesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPostureTemplatesResponse
                     */
                    public listPostureTemplates(request: google.cloud.securityposture.v1.IListPostureTemplatesRequest, callback: google.cloud.securityposture.v1.SecurityPosture.ListPostureTemplatesCallback): void;

                    /**
                     * Calls ListPostureTemplates.
                     * @param request ListPostureTemplatesRequest message or plain object
                     * @returns Promise
                     */
                    public listPostureTemplates(request: google.cloud.securityposture.v1.IListPostureTemplatesRequest): Promise<google.cloud.securityposture.v1.ListPostureTemplatesResponse>;

                    /**
                     * Calls GetPostureTemplate.
                     * @param request GetPostureTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PostureTemplate
                     */
                    public getPostureTemplate(request: google.cloud.securityposture.v1.IGetPostureTemplateRequest, callback: google.cloud.securityposture.v1.SecurityPosture.GetPostureTemplateCallback): void;

                    /**
                     * Calls GetPostureTemplate.
                     * @param request GetPostureTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public getPostureTemplate(request: google.cloud.securityposture.v1.IGetPostureTemplateRequest): Promise<google.cloud.securityposture.v1.PostureTemplate>;
                }

                namespace SecurityPosture {

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|listPostures}.
                     * @param error Error, if any
                     * @param [response] ListPosturesResponse
                     */
                    type ListPosturesCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.ListPosturesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|listPostureRevisions}.
                     * @param error Error, if any
                     * @param [response] ListPostureRevisionsResponse
                     */
                    type ListPostureRevisionsCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.ListPostureRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|getPosture}.
                     * @param error Error, if any
                     * @param [response] Posture
                     */
                    type GetPostureCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.Posture) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|createPosture}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePostureCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|updatePosture}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePostureCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|deletePosture}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePostureCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|extractPosture}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExtractPostureCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|listPostureDeployments}.
                     * @param error Error, if any
                     * @param [response] ListPostureDeploymentsResponse
                     */
                    type ListPostureDeploymentsCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.ListPostureDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|getPostureDeployment}.
                     * @param error Error, if any
                     * @param [response] PostureDeployment
                     */
                    type GetPostureDeploymentCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.PostureDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|createPostureDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePostureDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|updatePostureDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePostureDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|deletePostureDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePostureDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|listPostureTemplates}.
                     * @param error Error, if any
                     * @param [response] ListPostureTemplatesResponse
                     */
                    type ListPostureTemplatesCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.ListPostureTemplatesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securityposture.v1.SecurityPosture|getPostureTemplate}.
                     * @param error Error, if any
                     * @param [response] PostureTemplate
                     */
                    type GetPostureTemplateCallback = (error: (Error|null), response?: google.cloud.securityposture.v1.PostureTemplate) => void;
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

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata errorMessage */
                    errorMessage?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata errorMessage. */
                    public errorMessage: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IOperationMetadata): google.cloud.securityposture.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.securityposture.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Posture. */
                interface IPosture {

                    /** Posture name */
                    name?: (string|null);

                    /** Posture state */
                    state?: (google.cloud.securityposture.v1.Posture.State|keyof typeof google.cloud.securityposture.v1.Posture.State|null);

                    /** Posture revisionId */
                    revisionId?: (string|null);

                    /** Posture createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Posture updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Posture description */
                    description?: (string|null);

                    /** Posture policySets */
                    policySets?: (google.cloud.securityposture.v1.IPolicySet[]|null);

                    /** Posture etag */
                    etag?: (string|null);

                    /** Posture annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Posture reconciling */
                    reconciling?: (boolean|null);
                }

                /** Represents a Posture. */
                class Posture implements IPosture {

                    /**
                     * Constructs a new Posture.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IPosture);

                    /** Posture name. */
                    public name: string;

                    /** Posture state. */
                    public state: (google.cloud.securityposture.v1.Posture.State|keyof typeof google.cloud.securityposture.v1.Posture.State);

                    /** Posture revisionId. */
                    public revisionId: string;

                    /** Posture createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Posture updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Posture description. */
                    public description: string;

                    /** Posture policySets. */
                    public policySets: google.cloud.securityposture.v1.IPolicySet[];

                    /** Posture etag. */
                    public etag: string;

                    /** Posture annotations. */
                    public annotations: { [k: string]: string };

                    /** Posture reconciling. */
                    public reconciling: boolean;

                    /**
                     * Creates a new Posture instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Posture instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IPosture): google.cloud.securityposture.v1.Posture;

                    /**
                     * Encodes the specified Posture message. Does not implicitly {@link google.cloud.securityposture.v1.Posture.verify|verify} messages.
                     * @param message Posture message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IPosture, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Posture message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.Posture.verify|verify} messages.
                     * @param message Posture message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IPosture, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Posture message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Posture
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.Posture;

                    /**
                     * Decodes a Posture message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Posture
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.Posture;

                    /**
                     * Verifies a Posture message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Posture message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Posture
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.Posture;

                    /**
                     * Creates a plain object from a Posture message. Also converts values to other types if specified.
                     * @param message Posture
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.Posture, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Posture to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Posture
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Posture {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DEPRECATED = 1,
                        DRAFT = 2,
                        ACTIVE = 3
                    }
                }

                /** Properties of a PolicySet. */
                interface IPolicySet {

                    /** PolicySet policySetId */
                    policySetId?: (string|null);

                    /** PolicySet description */
                    description?: (string|null);

                    /** PolicySet policies */
                    policies?: (google.cloud.securityposture.v1.IPolicy[]|null);
                }

                /** Represents a PolicySet. */
                class PolicySet implements IPolicySet {

                    /**
                     * Constructs a new PolicySet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IPolicySet);

                    /** PolicySet policySetId. */
                    public policySetId: string;

                    /** PolicySet description. */
                    public description: string;

                    /** PolicySet policies. */
                    public policies: google.cloud.securityposture.v1.IPolicy[];

                    /**
                     * Creates a new PolicySet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PolicySet instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IPolicySet): google.cloud.securityposture.v1.PolicySet;

                    /**
                     * Encodes the specified PolicySet message. Does not implicitly {@link google.cloud.securityposture.v1.PolicySet.verify|verify} messages.
                     * @param message PolicySet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IPolicySet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PolicySet message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.PolicySet.verify|verify} messages.
                     * @param message PolicySet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IPolicySet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PolicySet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PolicySet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.PolicySet;

                    /**
                     * Decodes a PolicySet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PolicySet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.PolicySet;

                    /**
                     * Verifies a PolicySet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PolicySet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PolicySet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.PolicySet;

                    /**
                     * Creates a plain object from a PolicySet message. Also converts values to other types if specified.
                     * @param message PolicySet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.PolicySet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PolicySet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PolicySet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Policy. */
                interface IPolicy {

                    /** Policy policyId */
                    policyId?: (string|null);

                    /** Policy complianceStandards */
                    complianceStandards?: (google.cloud.securityposture.v1.Policy.IComplianceStandard[]|null);

                    /** Policy constraint */
                    constraint?: (google.cloud.securityposture.v1.IConstraint|null);

                    /** Policy description */
                    description?: (string|null);
                }

                /** Represents a Policy. */
                class Policy implements IPolicy {

                    /**
                     * Constructs a new Policy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IPolicy);

                    /** Policy policyId. */
                    public policyId: string;

                    /** Policy complianceStandards. */
                    public complianceStandards: google.cloud.securityposture.v1.Policy.IComplianceStandard[];

                    /** Policy constraint. */
                    public constraint?: (google.cloud.securityposture.v1.IConstraint|null);

                    /** Policy description. */
                    public description: string;

                    /**
                     * Creates a new Policy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Policy instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IPolicy): google.cloud.securityposture.v1.Policy;

                    /**
                     * Encodes the specified Policy message. Does not implicitly {@link google.cloud.securityposture.v1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Policy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.Policy;

                    /**
                     * Decodes a Policy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.Policy;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.Policy;

                    /**
                     * Creates a plain object from a Policy message. Also converts values to other types if specified.
                     * @param message Policy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ComplianceStandard. */
                    interface IComplianceStandard {

                        /** ComplianceStandard standard */
                        standard?: (string|null);

                        /** ComplianceStandard control */
                        control?: (string|null);
                    }

                    /** Represents a ComplianceStandard. */
                    class ComplianceStandard implements IComplianceStandard {

                        /**
                         * Constructs a new ComplianceStandard.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securityposture.v1.Policy.IComplianceStandard);

                        /** ComplianceStandard standard. */
                        public standard: string;

                        /** ComplianceStandard control. */
                        public control: string;

                        /**
                         * Creates a new ComplianceStandard instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ComplianceStandard instance
                         */
                        public static create(properties?: google.cloud.securityposture.v1.Policy.IComplianceStandard): google.cloud.securityposture.v1.Policy.ComplianceStandard;

                        /**
                         * Encodes the specified ComplianceStandard message. Does not implicitly {@link google.cloud.securityposture.v1.Policy.ComplianceStandard.verify|verify} messages.
                         * @param message ComplianceStandard message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securityposture.v1.Policy.IComplianceStandard, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ComplianceStandard message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.Policy.ComplianceStandard.verify|verify} messages.
                         * @param message ComplianceStandard message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securityposture.v1.Policy.IComplianceStandard, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ComplianceStandard message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ComplianceStandard
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.Policy.ComplianceStandard;

                        /**
                         * Decodes a ComplianceStandard message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ComplianceStandard
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.Policy.ComplianceStandard;

                        /**
                         * Verifies a ComplianceStandard message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ComplianceStandard message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ComplianceStandard
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.Policy.ComplianceStandard;

                        /**
                         * Creates a plain object from a ComplianceStandard message. Also converts values to other types if specified.
                         * @param message ComplianceStandard
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securityposture.v1.Policy.ComplianceStandard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ComplianceStandard to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ComplianceStandard
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Constraint. */
                interface IConstraint {

                    /** Constraint securityHealthAnalyticsModule */
                    securityHealthAnalyticsModule?: (google.cloud.securityposture.v1.ISecurityHealthAnalyticsModule|null);

                    /** Constraint securityHealthAnalyticsCustomModule */
                    securityHealthAnalyticsCustomModule?: (google.cloud.securityposture.v1.ISecurityHealthAnalyticsCustomModule|null);

                    /** Constraint orgPolicyConstraint */
                    orgPolicyConstraint?: (google.cloud.securityposture.v1.IOrgPolicyConstraint|null);

                    /** Constraint orgPolicyConstraintCustom */
                    orgPolicyConstraintCustom?: (google.cloud.securityposture.v1.IOrgPolicyConstraintCustom|null);
                }

                /** Represents a Constraint. */
                class Constraint implements IConstraint {

                    /**
                     * Constructs a new Constraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IConstraint);

                    /** Constraint securityHealthAnalyticsModule. */
                    public securityHealthAnalyticsModule?: (google.cloud.securityposture.v1.ISecurityHealthAnalyticsModule|null);

                    /** Constraint securityHealthAnalyticsCustomModule. */
                    public securityHealthAnalyticsCustomModule?: (google.cloud.securityposture.v1.ISecurityHealthAnalyticsCustomModule|null);

                    /** Constraint orgPolicyConstraint. */
                    public orgPolicyConstraint?: (google.cloud.securityposture.v1.IOrgPolicyConstraint|null);

                    /** Constraint orgPolicyConstraintCustom. */
                    public orgPolicyConstraintCustom?: (google.cloud.securityposture.v1.IOrgPolicyConstraintCustom|null);

                    /** Constraint implementation. */
                    public implementation?: ("securityHealthAnalyticsModule"|"securityHealthAnalyticsCustomModule"|"orgPolicyConstraint"|"orgPolicyConstraintCustom");

                    /**
                     * Creates a new Constraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Constraint instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IConstraint): google.cloud.securityposture.v1.Constraint;

                    /**
                     * Encodes the specified Constraint message. Does not implicitly {@link google.cloud.securityposture.v1.Constraint.verify|verify} messages.
                     * @param message Constraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Constraint message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.Constraint.verify|verify} messages.
                     * @param message Constraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Constraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Constraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.Constraint;

                    /**
                     * Decodes a Constraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Constraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.Constraint;

                    /**
                     * Verifies a Constraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Constraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Constraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.Constraint;

                    /**
                     * Creates a plain object from a Constraint message. Also converts values to other types if specified.
                     * @param message Constraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.Constraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Constraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Constraint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPosturesRequest. */
                interface IListPosturesRequest {

                    /** ListPosturesRequest parent */
                    parent?: (string|null);

                    /** ListPosturesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPosturesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPosturesRequest. */
                class ListPosturesRequest implements IListPosturesRequest {

                    /**
                     * Constructs a new ListPosturesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPosturesRequest);

                    /** ListPosturesRequest parent. */
                    public parent: string;

                    /** ListPosturesRequest pageSize. */
                    public pageSize: number;

                    /** ListPosturesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPosturesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPosturesRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPosturesRequest): google.cloud.securityposture.v1.ListPosturesRequest;

                    /**
                     * Encodes the specified ListPosturesRequest message. Does not implicitly {@link google.cloud.securityposture.v1.ListPosturesRequest.verify|verify} messages.
                     * @param message ListPosturesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPosturesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPosturesRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPosturesRequest.verify|verify} messages.
                     * @param message ListPosturesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPosturesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPosturesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPosturesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPosturesRequest;

                    /**
                     * Decodes a ListPosturesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPosturesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPosturesRequest;

                    /**
                     * Verifies a ListPosturesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPosturesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPosturesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPosturesRequest;

                    /**
                     * Creates a plain object from a ListPosturesRequest message. Also converts values to other types if specified.
                     * @param message ListPosturesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPosturesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPosturesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPosturesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPosturesResponse. */
                interface IListPosturesResponse {

                    /** ListPosturesResponse postures */
                    postures?: (google.cloud.securityposture.v1.IPosture[]|null);

                    /** ListPosturesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPosturesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPosturesResponse. */
                class ListPosturesResponse implements IListPosturesResponse {

                    /**
                     * Constructs a new ListPosturesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPosturesResponse);

                    /** ListPosturesResponse postures. */
                    public postures: google.cloud.securityposture.v1.IPosture[];

                    /** ListPosturesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPosturesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPosturesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPosturesResponse instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPosturesResponse): google.cloud.securityposture.v1.ListPosturesResponse;

                    /**
                     * Encodes the specified ListPosturesResponse message. Does not implicitly {@link google.cloud.securityposture.v1.ListPosturesResponse.verify|verify} messages.
                     * @param message ListPosturesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPosturesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPosturesResponse message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPosturesResponse.verify|verify} messages.
                     * @param message ListPosturesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPosturesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPosturesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPosturesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPosturesResponse;

                    /**
                     * Decodes a ListPosturesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPosturesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPosturesResponse;

                    /**
                     * Verifies a ListPosturesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPosturesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPosturesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPosturesResponse;

                    /**
                     * Creates a plain object from a ListPosturesResponse message. Also converts values to other types if specified.
                     * @param message ListPosturesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPosturesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPosturesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPosturesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPostureRevisionsRequest. */
                interface IListPostureRevisionsRequest {

                    /** ListPostureRevisionsRequest name */
                    name?: (string|null);

                    /** ListPostureRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPostureRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPostureRevisionsRequest. */
                class ListPostureRevisionsRequest implements IListPostureRevisionsRequest {

                    /**
                     * Constructs a new ListPostureRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPostureRevisionsRequest);

                    /** ListPostureRevisionsRequest name. */
                    public name: string;

                    /** ListPostureRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListPostureRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPostureRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPostureRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPostureRevisionsRequest): google.cloud.securityposture.v1.ListPostureRevisionsRequest;

                    /**
                     * Encodes the specified ListPostureRevisionsRequest message. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureRevisionsRequest.verify|verify} messages.
                     * @param message ListPostureRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPostureRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPostureRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureRevisionsRequest.verify|verify} messages.
                     * @param message ListPostureRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPostureRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPostureRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPostureRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPostureRevisionsRequest;

                    /**
                     * Decodes a ListPostureRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPostureRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPostureRevisionsRequest;

                    /**
                     * Verifies a ListPostureRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPostureRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPostureRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPostureRevisionsRequest;

                    /**
                     * Creates a plain object from a ListPostureRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListPostureRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPostureRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPostureRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPostureRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPostureRevisionsResponse. */
                interface IListPostureRevisionsResponse {

                    /** ListPostureRevisionsResponse revisions */
                    revisions?: (google.cloud.securityposture.v1.IPosture[]|null);

                    /** ListPostureRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPostureRevisionsResponse. */
                class ListPostureRevisionsResponse implements IListPostureRevisionsResponse {

                    /**
                     * Constructs a new ListPostureRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPostureRevisionsResponse);

                    /** ListPostureRevisionsResponse revisions. */
                    public revisions: google.cloud.securityposture.v1.IPosture[];

                    /** ListPostureRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPostureRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPostureRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPostureRevisionsResponse): google.cloud.securityposture.v1.ListPostureRevisionsResponse;

                    /**
                     * Encodes the specified ListPostureRevisionsResponse message. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureRevisionsResponse.verify|verify} messages.
                     * @param message ListPostureRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPostureRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPostureRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureRevisionsResponse.verify|verify} messages.
                     * @param message ListPostureRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPostureRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPostureRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPostureRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPostureRevisionsResponse;

                    /**
                     * Decodes a ListPostureRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPostureRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPostureRevisionsResponse;

                    /**
                     * Verifies a ListPostureRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPostureRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPostureRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPostureRevisionsResponse;

                    /**
                     * Creates a plain object from a ListPostureRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListPostureRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPostureRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPostureRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPostureRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPostureRequest. */
                interface IGetPostureRequest {

                    /** GetPostureRequest name */
                    name?: (string|null);

                    /** GetPostureRequest revisionId */
                    revisionId?: (string|null);
                }

                /** Represents a GetPostureRequest. */
                class GetPostureRequest implements IGetPostureRequest {

                    /**
                     * Constructs a new GetPostureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IGetPostureRequest);

                    /** GetPostureRequest name. */
                    public name: string;

                    /** GetPostureRequest revisionId. */
                    public revisionId: string;

                    /**
                     * Creates a new GetPostureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPostureRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IGetPostureRequest): google.cloud.securityposture.v1.GetPostureRequest;

                    /**
                     * Encodes the specified GetPostureRequest message. Does not implicitly {@link google.cloud.securityposture.v1.GetPostureRequest.verify|verify} messages.
                     * @param message GetPostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IGetPostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPostureRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.GetPostureRequest.verify|verify} messages.
                     * @param message GetPostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IGetPostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPostureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.GetPostureRequest;

                    /**
                     * Decodes a GetPostureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.GetPostureRequest;

                    /**
                     * Verifies a GetPostureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPostureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPostureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.GetPostureRequest;

                    /**
                     * Creates a plain object from a GetPostureRequest message. Also converts values to other types if specified.
                     * @param message GetPostureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.GetPostureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPostureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPostureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePostureRequest. */
                interface ICreatePostureRequest {

                    /** CreatePostureRequest parent */
                    parent?: (string|null);

                    /** CreatePostureRequest postureId */
                    postureId?: (string|null);

                    /** CreatePostureRequest posture */
                    posture?: (google.cloud.securityposture.v1.IPosture|null);
                }

                /** Represents a CreatePostureRequest. */
                class CreatePostureRequest implements ICreatePostureRequest {

                    /**
                     * Constructs a new CreatePostureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.ICreatePostureRequest);

                    /** CreatePostureRequest parent. */
                    public parent: string;

                    /** CreatePostureRequest postureId. */
                    public postureId: string;

                    /** CreatePostureRequest posture. */
                    public posture?: (google.cloud.securityposture.v1.IPosture|null);

                    /**
                     * Creates a new CreatePostureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePostureRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.ICreatePostureRequest): google.cloud.securityposture.v1.CreatePostureRequest;

                    /**
                     * Encodes the specified CreatePostureRequest message. Does not implicitly {@link google.cloud.securityposture.v1.CreatePostureRequest.verify|verify} messages.
                     * @param message CreatePostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.ICreatePostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePostureRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CreatePostureRequest.verify|verify} messages.
                     * @param message CreatePostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.ICreatePostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePostureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CreatePostureRequest;

                    /**
                     * Decodes a CreatePostureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CreatePostureRequest;

                    /**
                     * Verifies a CreatePostureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePostureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePostureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CreatePostureRequest;

                    /**
                     * Creates a plain object from a CreatePostureRequest message. Also converts values to other types if specified.
                     * @param message CreatePostureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.CreatePostureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePostureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePostureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePostureRequest. */
                interface IUpdatePostureRequest {

                    /** UpdatePostureRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePostureRequest posture */
                    posture?: (google.cloud.securityposture.v1.IPosture|null);

                    /** UpdatePostureRequest revisionId */
                    revisionId?: (string|null);
                }

                /** Represents an UpdatePostureRequest. */
                class UpdatePostureRequest implements IUpdatePostureRequest {

                    /**
                     * Constructs a new UpdatePostureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IUpdatePostureRequest);

                    /** UpdatePostureRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePostureRequest posture. */
                    public posture?: (google.cloud.securityposture.v1.IPosture|null);

                    /** UpdatePostureRequest revisionId. */
                    public revisionId: string;

                    /**
                     * Creates a new UpdatePostureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePostureRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IUpdatePostureRequest): google.cloud.securityposture.v1.UpdatePostureRequest;

                    /**
                     * Encodes the specified UpdatePostureRequest message. Does not implicitly {@link google.cloud.securityposture.v1.UpdatePostureRequest.verify|verify} messages.
                     * @param message UpdatePostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IUpdatePostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePostureRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.UpdatePostureRequest.verify|verify} messages.
                     * @param message UpdatePostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IUpdatePostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePostureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.UpdatePostureRequest;

                    /**
                     * Decodes an UpdatePostureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.UpdatePostureRequest;

                    /**
                     * Verifies an UpdatePostureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePostureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePostureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.UpdatePostureRequest;

                    /**
                     * Creates a plain object from an UpdatePostureRequest message. Also converts values to other types if specified.
                     * @param message UpdatePostureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.UpdatePostureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePostureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePostureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePostureRequest. */
                interface IDeletePostureRequest {

                    /** DeletePostureRequest name */
                    name?: (string|null);

                    /** DeletePostureRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeletePostureRequest. */
                class DeletePostureRequest implements IDeletePostureRequest {

                    /**
                     * Constructs a new DeletePostureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IDeletePostureRequest);

                    /** DeletePostureRequest name. */
                    public name: string;

                    /** DeletePostureRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeletePostureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePostureRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IDeletePostureRequest): google.cloud.securityposture.v1.DeletePostureRequest;

                    /**
                     * Encodes the specified DeletePostureRequest message. Does not implicitly {@link google.cloud.securityposture.v1.DeletePostureRequest.verify|verify} messages.
                     * @param message DeletePostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IDeletePostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePostureRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.DeletePostureRequest.verify|verify} messages.
                     * @param message DeletePostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IDeletePostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePostureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.DeletePostureRequest;

                    /**
                     * Decodes a DeletePostureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.DeletePostureRequest;

                    /**
                     * Verifies a DeletePostureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePostureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePostureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.DeletePostureRequest;

                    /**
                     * Creates a plain object from a DeletePostureRequest message. Also converts values to other types if specified.
                     * @param message DeletePostureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.DeletePostureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePostureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePostureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExtractPostureRequest. */
                interface IExtractPostureRequest {

                    /** ExtractPostureRequest parent */
                    parent?: (string|null);

                    /** ExtractPostureRequest postureId */
                    postureId?: (string|null);

                    /** ExtractPostureRequest workload */
                    workload?: (string|null);
                }

                /** Represents an ExtractPostureRequest. */
                class ExtractPostureRequest implements IExtractPostureRequest {

                    /**
                     * Constructs a new ExtractPostureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IExtractPostureRequest);

                    /** ExtractPostureRequest parent. */
                    public parent: string;

                    /** ExtractPostureRequest postureId. */
                    public postureId: string;

                    /** ExtractPostureRequest workload. */
                    public workload: string;

                    /**
                     * Creates a new ExtractPostureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExtractPostureRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IExtractPostureRequest): google.cloud.securityposture.v1.ExtractPostureRequest;

                    /**
                     * Encodes the specified ExtractPostureRequest message. Does not implicitly {@link google.cloud.securityposture.v1.ExtractPostureRequest.verify|verify} messages.
                     * @param message ExtractPostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IExtractPostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExtractPostureRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ExtractPostureRequest.verify|verify} messages.
                     * @param message ExtractPostureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IExtractPostureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExtractPostureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExtractPostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ExtractPostureRequest;

                    /**
                     * Decodes an ExtractPostureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExtractPostureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ExtractPostureRequest;

                    /**
                     * Verifies an ExtractPostureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExtractPostureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExtractPostureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ExtractPostureRequest;

                    /**
                     * Creates a plain object from an ExtractPostureRequest message. Also converts values to other types if specified.
                     * @param message ExtractPostureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ExtractPostureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExtractPostureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExtractPostureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PostureDeployment. */
                interface IPostureDeployment {

                    /** PostureDeployment name */
                    name?: (string|null);

                    /** PostureDeployment targetResource */
                    targetResource?: (string|null);

                    /** PostureDeployment state */
                    state?: (google.cloud.securityposture.v1.PostureDeployment.State|keyof typeof google.cloud.securityposture.v1.PostureDeployment.State|null);

                    /** PostureDeployment postureId */
                    postureId?: (string|null);

                    /** PostureDeployment postureRevisionId */
                    postureRevisionId?: (string|null);

                    /** PostureDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PostureDeployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PostureDeployment description */
                    description?: (string|null);

                    /** PostureDeployment etag */
                    etag?: (string|null);

                    /** PostureDeployment annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** PostureDeployment reconciling */
                    reconciling?: (boolean|null);

                    /** PostureDeployment desiredPostureId */
                    desiredPostureId?: (string|null);

                    /** PostureDeployment desiredPostureRevisionId */
                    desiredPostureRevisionId?: (string|null);

                    /** PostureDeployment failureMessage */
                    failureMessage?: (string|null);
                }

                /** Represents a PostureDeployment. */
                class PostureDeployment implements IPostureDeployment {

                    /**
                     * Constructs a new PostureDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IPostureDeployment);

                    /** PostureDeployment name. */
                    public name: string;

                    /** PostureDeployment targetResource. */
                    public targetResource: string;

                    /** PostureDeployment state. */
                    public state: (google.cloud.securityposture.v1.PostureDeployment.State|keyof typeof google.cloud.securityposture.v1.PostureDeployment.State);

                    /** PostureDeployment postureId. */
                    public postureId: string;

                    /** PostureDeployment postureRevisionId. */
                    public postureRevisionId: string;

                    /** PostureDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PostureDeployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PostureDeployment description. */
                    public description: string;

                    /** PostureDeployment etag. */
                    public etag: string;

                    /** PostureDeployment annotations. */
                    public annotations: { [k: string]: string };

                    /** PostureDeployment reconciling. */
                    public reconciling: boolean;

                    /** PostureDeployment desiredPostureId. */
                    public desiredPostureId: string;

                    /** PostureDeployment desiredPostureRevisionId. */
                    public desiredPostureRevisionId: string;

                    /** PostureDeployment failureMessage. */
                    public failureMessage: string;

                    /**
                     * Creates a new PostureDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostureDeployment instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IPostureDeployment): google.cloud.securityposture.v1.PostureDeployment;

                    /**
                     * Encodes the specified PostureDeployment message. Does not implicitly {@link google.cloud.securityposture.v1.PostureDeployment.verify|verify} messages.
                     * @param message PostureDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IPostureDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostureDeployment message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.PostureDeployment.verify|verify} messages.
                     * @param message PostureDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IPostureDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostureDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostureDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.PostureDeployment;

                    /**
                     * Decodes a PostureDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostureDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.PostureDeployment;

                    /**
                     * Verifies a PostureDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostureDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostureDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.PostureDeployment;

                    /**
                     * Creates a plain object from a PostureDeployment message. Also converts values to other types if specified.
                     * @param message PostureDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.PostureDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostureDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PostureDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PostureDeployment {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        DELETING = 2,
                        UPDATING = 3,
                        ACTIVE = 4,
                        CREATE_FAILED = 5,
                        UPDATE_FAILED = 6,
                        DELETE_FAILED = 7
                    }
                }

                /** Properties of a ListPostureDeploymentsRequest. */
                interface IListPostureDeploymentsRequest {

                    /** ListPostureDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListPostureDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPostureDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPostureDeploymentsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPostureDeploymentsRequest. */
                class ListPostureDeploymentsRequest implements IListPostureDeploymentsRequest {

                    /**
                     * Constructs a new ListPostureDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPostureDeploymentsRequest);

                    /** ListPostureDeploymentsRequest parent. */
                    public parent: string;

                    /** ListPostureDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListPostureDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListPostureDeploymentsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPostureDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPostureDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPostureDeploymentsRequest): google.cloud.securityposture.v1.ListPostureDeploymentsRequest;

                    /**
                     * Encodes the specified ListPostureDeploymentsRequest message. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureDeploymentsRequest.verify|verify} messages.
                     * @param message ListPostureDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPostureDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPostureDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureDeploymentsRequest.verify|verify} messages.
                     * @param message ListPostureDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPostureDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPostureDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPostureDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPostureDeploymentsRequest;

                    /**
                     * Decodes a ListPostureDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPostureDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPostureDeploymentsRequest;

                    /**
                     * Verifies a ListPostureDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPostureDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPostureDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPostureDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListPostureDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListPostureDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPostureDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPostureDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPostureDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPostureDeploymentsResponse. */
                interface IListPostureDeploymentsResponse {

                    /** ListPostureDeploymentsResponse postureDeployments */
                    postureDeployments?: (google.cloud.securityposture.v1.IPostureDeployment[]|null);

                    /** ListPostureDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPostureDeploymentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPostureDeploymentsResponse. */
                class ListPostureDeploymentsResponse implements IListPostureDeploymentsResponse {

                    /**
                     * Constructs a new ListPostureDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPostureDeploymentsResponse);

                    /** ListPostureDeploymentsResponse postureDeployments. */
                    public postureDeployments: google.cloud.securityposture.v1.IPostureDeployment[];

                    /** ListPostureDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPostureDeploymentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPostureDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPostureDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPostureDeploymentsResponse): google.cloud.securityposture.v1.ListPostureDeploymentsResponse;

                    /**
                     * Encodes the specified ListPostureDeploymentsResponse message. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureDeploymentsResponse.verify|verify} messages.
                     * @param message ListPostureDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPostureDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPostureDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureDeploymentsResponse.verify|verify} messages.
                     * @param message ListPostureDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPostureDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPostureDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPostureDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPostureDeploymentsResponse;

                    /**
                     * Decodes a ListPostureDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPostureDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPostureDeploymentsResponse;

                    /**
                     * Verifies a ListPostureDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPostureDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPostureDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPostureDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListPostureDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListPostureDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPostureDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPostureDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPostureDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPostureDeploymentRequest. */
                interface IGetPostureDeploymentRequest {

                    /** GetPostureDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPostureDeploymentRequest. */
                class GetPostureDeploymentRequest implements IGetPostureDeploymentRequest {

                    /**
                     * Constructs a new GetPostureDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IGetPostureDeploymentRequest);

                    /** GetPostureDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPostureDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPostureDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IGetPostureDeploymentRequest): google.cloud.securityposture.v1.GetPostureDeploymentRequest;

                    /**
                     * Encodes the specified GetPostureDeploymentRequest message. Does not implicitly {@link google.cloud.securityposture.v1.GetPostureDeploymentRequest.verify|verify} messages.
                     * @param message GetPostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IGetPostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPostureDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.GetPostureDeploymentRequest.verify|verify} messages.
                     * @param message GetPostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IGetPostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPostureDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.GetPostureDeploymentRequest;

                    /**
                     * Decodes a GetPostureDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.GetPostureDeploymentRequest;

                    /**
                     * Verifies a GetPostureDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPostureDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPostureDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.GetPostureDeploymentRequest;

                    /**
                     * Creates a plain object from a GetPostureDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetPostureDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.GetPostureDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPostureDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPostureDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePostureDeploymentRequest. */
                interface ICreatePostureDeploymentRequest {

                    /** CreatePostureDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreatePostureDeploymentRequest postureDeploymentId */
                    postureDeploymentId?: (string|null);

                    /** CreatePostureDeploymentRequest postureDeployment */
                    postureDeployment?: (google.cloud.securityposture.v1.IPostureDeployment|null);
                }

                /** Represents a CreatePostureDeploymentRequest. */
                class CreatePostureDeploymentRequest implements ICreatePostureDeploymentRequest {

                    /**
                     * Constructs a new CreatePostureDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.ICreatePostureDeploymentRequest);

                    /** CreatePostureDeploymentRequest parent. */
                    public parent: string;

                    /** CreatePostureDeploymentRequest postureDeploymentId. */
                    public postureDeploymentId: string;

                    /** CreatePostureDeploymentRequest postureDeployment. */
                    public postureDeployment?: (google.cloud.securityposture.v1.IPostureDeployment|null);

                    /**
                     * Creates a new CreatePostureDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePostureDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.ICreatePostureDeploymentRequest): google.cloud.securityposture.v1.CreatePostureDeploymentRequest;

                    /**
                     * Encodes the specified CreatePostureDeploymentRequest message. Does not implicitly {@link google.cloud.securityposture.v1.CreatePostureDeploymentRequest.verify|verify} messages.
                     * @param message CreatePostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.ICreatePostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePostureDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CreatePostureDeploymentRequest.verify|verify} messages.
                     * @param message CreatePostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.ICreatePostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePostureDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CreatePostureDeploymentRequest;

                    /**
                     * Decodes a CreatePostureDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CreatePostureDeploymentRequest;

                    /**
                     * Verifies a CreatePostureDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePostureDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePostureDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CreatePostureDeploymentRequest;

                    /**
                     * Creates a plain object from a CreatePostureDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreatePostureDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.CreatePostureDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePostureDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePostureDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePostureDeploymentRequest. */
                interface IUpdatePostureDeploymentRequest {

                    /** UpdatePostureDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePostureDeploymentRequest postureDeployment */
                    postureDeployment?: (google.cloud.securityposture.v1.IPostureDeployment|null);
                }

                /** Represents an UpdatePostureDeploymentRequest. */
                class UpdatePostureDeploymentRequest implements IUpdatePostureDeploymentRequest {

                    /**
                     * Constructs a new UpdatePostureDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IUpdatePostureDeploymentRequest);

                    /** UpdatePostureDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePostureDeploymentRequest postureDeployment. */
                    public postureDeployment?: (google.cloud.securityposture.v1.IPostureDeployment|null);

                    /**
                     * Creates a new UpdatePostureDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePostureDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IUpdatePostureDeploymentRequest): google.cloud.securityposture.v1.UpdatePostureDeploymentRequest;

                    /**
                     * Encodes the specified UpdatePostureDeploymentRequest message. Does not implicitly {@link google.cloud.securityposture.v1.UpdatePostureDeploymentRequest.verify|verify} messages.
                     * @param message UpdatePostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IUpdatePostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePostureDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.UpdatePostureDeploymentRequest.verify|verify} messages.
                     * @param message UpdatePostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IUpdatePostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePostureDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.UpdatePostureDeploymentRequest;

                    /**
                     * Decodes an UpdatePostureDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.UpdatePostureDeploymentRequest;

                    /**
                     * Verifies an UpdatePostureDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePostureDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePostureDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.UpdatePostureDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdatePostureDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdatePostureDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.UpdatePostureDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePostureDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePostureDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePostureDeploymentRequest. */
                interface IDeletePostureDeploymentRequest {

                    /** DeletePostureDeploymentRequest name */
                    name?: (string|null);

                    /** DeletePostureDeploymentRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeletePostureDeploymentRequest. */
                class DeletePostureDeploymentRequest implements IDeletePostureDeploymentRequest {

                    /**
                     * Constructs a new DeletePostureDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IDeletePostureDeploymentRequest);

                    /** DeletePostureDeploymentRequest name. */
                    public name: string;

                    /** DeletePostureDeploymentRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeletePostureDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePostureDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IDeletePostureDeploymentRequest): google.cloud.securityposture.v1.DeletePostureDeploymentRequest;

                    /**
                     * Encodes the specified DeletePostureDeploymentRequest message. Does not implicitly {@link google.cloud.securityposture.v1.DeletePostureDeploymentRequest.verify|verify} messages.
                     * @param message DeletePostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IDeletePostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePostureDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.DeletePostureDeploymentRequest.verify|verify} messages.
                     * @param message DeletePostureDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IDeletePostureDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePostureDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.DeletePostureDeploymentRequest;

                    /**
                     * Decodes a DeletePostureDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePostureDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.DeletePostureDeploymentRequest;

                    /**
                     * Verifies a DeletePostureDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePostureDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePostureDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.DeletePostureDeploymentRequest;

                    /**
                     * Creates a plain object from a DeletePostureDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeletePostureDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.DeletePostureDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePostureDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePostureDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PostureTemplate. */
                interface IPostureTemplate {

                    /** PostureTemplate name */
                    name?: (string|null);

                    /** PostureTemplate revisionId */
                    revisionId?: (string|null);

                    /** PostureTemplate description */
                    description?: (string|null);

                    /** PostureTemplate state */
                    state?: (google.cloud.securityposture.v1.PostureTemplate.State|keyof typeof google.cloud.securityposture.v1.PostureTemplate.State|null);

                    /** PostureTemplate policySets */
                    policySets?: (google.cloud.securityposture.v1.IPolicySet[]|null);
                }

                /** Represents a PostureTemplate. */
                class PostureTemplate implements IPostureTemplate {

                    /**
                     * Constructs a new PostureTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IPostureTemplate);

                    /** PostureTemplate name. */
                    public name: string;

                    /** PostureTemplate revisionId. */
                    public revisionId: string;

                    /** PostureTemplate description. */
                    public description: string;

                    /** PostureTemplate state. */
                    public state: (google.cloud.securityposture.v1.PostureTemplate.State|keyof typeof google.cloud.securityposture.v1.PostureTemplate.State);

                    /** PostureTemplate policySets. */
                    public policySets: google.cloud.securityposture.v1.IPolicySet[];

                    /**
                     * Creates a new PostureTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostureTemplate instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IPostureTemplate): google.cloud.securityposture.v1.PostureTemplate;

                    /**
                     * Encodes the specified PostureTemplate message. Does not implicitly {@link google.cloud.securityposture.v1.PostureTemplate.verify|verify} messages.
                     * @param message PostureTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IPostureTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostureTemplate message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.PostureTemplate.verify|verify} messages.
                     * @param message PostureTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IPostureTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostureTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostureTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.PostureTemplate;

                    /**
                     * Decodes a PostureTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostureTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.PostureTemplate;

                    /**
                     * Verifies a PostureTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostureTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostureTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.PostureTemplate;

                    /**
                     * Creates a plain object from a PostureTemplate message. Also converts values to other types if specified.
                     * @param message PostureTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.PostureTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostureTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PostureTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PostureTemplate {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        DEPRECATED = 2
                    }
                }

                /** Properties of a ListPostureTemplatesRequest. */
                interface IListPostureTemplatesRequest {

                    /** ListPostureTemplatesRequest parent */
                    parent?: (string|null);

                    /** ListPostureTemplatesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPostureTemplatesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPostureTemplatesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPostureTemplatesRequest. */
                class ListPostureTemplatesRequest implements IListPostureTemplatesRequest {

                    /**
                     * Constructs a new ListPostureTemplatesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPostureTemplatesRequest);

                    /** ListPostureTemplatesRequest parent. */
                    public parent: string;

                    /** ListPostureTemplatesRequest pageSize. */
                    public pageSize: number;

                    /** ListPostureTemplatesRequest pageToken. */
                    public pageToken: string;

                    /** ListPostureTemplatesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPostureTemplatesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPostureTemplatesRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPostureTemplatesRequest): google.cloud.securityposture.v1.ListPostureTemplatesRequest;

                    /**
                     * Encodes the specified ListPostureTemplatesRequest message. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureTemplatesRequest.verify|verify} messages.
                     * @param message ListPostureTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPostureTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPostureTemplatesRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureTemplatesRequest.verify|verify} messages.
                     * @param message ListPostureTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPostureTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPostureTemplatesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPostureTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPostureTemplatesRequest;

                    /**
                     * Decodes a ListPostureTemplatesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPostureTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPostureTemplatesRequest;

                    /**
                     * Verifies a ListPostureTemplatesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPostureTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPostureTemplatesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPostureTemplatesRequest;

                    /**
                     * Creates a plain object from a ListPostureTemplatesRequest message. Also converts values to other types if specified.
                     * @param message ListPostureTemplatesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPostureTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPostureTemplatesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPostureTemplatesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPostureTemplatesResponse. */
                interface IListPostureTemplatesResponse {

                    /** ListPostureTemplatesResponse postureTemplates */
                    postureTemplates?: (google.cloud.securityposture.v1.IPostureTemplate[]|null);

                    /** ListPostureTemplatesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPostureTemplatesResponse. */
                class ListPostureTemplatesResponse implements IListPostureTemplatesResponse {

                    /**
                     * Constructs a new ListPostureTemplatesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IListPostureTemplatesResponse);

                    /** ListPostureTemplatesResponse postureTemplates. */
                    public postureTemplates: google.cloud.securityposture.v1.IPostureTemplate[];

                    /** ListPostureTemplatesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPostureTemplatesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPostureTemplatesResponse instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IListPostureTemplatesResponse): google.cloud.securityposture.v1.ListPostureTemplatesResponse;

                    /**
                     * Encodes the specified ListPostureTemplatesResponse message. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureTemplatesResponse.verify|verify} messages.
                     * @param message ListPostureTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IListPostureTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPostureTemplatesResponse message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.ListPostureTemplatesResponse.verify|verify} messages.
                     * @param message ListPostureTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IListPostureTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPostureTemplatesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPostureTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.ListPostureTemplatesResponse;

                    /**
                     * Decodes a ListPostureTemplatesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPostureTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.ListPostureTemplatesResponse;

                    /**
                     * Verifies a ListPostureTemplatesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPostureTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPostureTemplatesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.ListPostureTemplatesResponse;

                    /**
                     * Creates a plain object from a ListPostureTemplatesResponse message. Also converts values to other types if specified.
                     * @param message ListPostureTemplatesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.ListPostureTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPostureTemplatesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPostureTemplatesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPostureTemplateRequest. */
                interface IGetPostureTemplateRequest {

                    /** GetPostureTemplateRequest name */
                    name?: (string|null);

                    /** GetPostureTemplateRequest revisionId */
                    revisionId?: (string|null);
                }

                /** Represents a GetPostureTemplateRequest. */
                class GetPostureTemplateRequest implements IGetPostureTemplateRequest {

                    /**
                     * Constructs a new GetPostureTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.IGetPostureTemplateRequest);

                    /** GetPostureTemplateRequest name. */
                    public name: string;

                    /** GetPostureTemplateRequest revisionId. */
                    public revisionId: string;

                    /**
                     * Creates a new GetPostureTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPostureTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.IGetPostureTemplateRequest): google.cloud.securityposture.v1.GetPostureTemplateRequest;

                    /**
                     * Encodes the specified GetPostureTemplateRequest message. Does not implicitly {@link google.cloud.securityposture.v1.GetPostureTemplateRequest.verify|verify} messages.
                     * @param message GetPostureTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.IGetPostureTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPostureTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.GetPostureTemplateRequest.verify|verify} messages.
                     * @param message GetPostureTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.IGetPostureTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPostureTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPostureTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.GetPostureTemplateRequest;

                    /**
                     * Decodes a GetPostureTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPostureTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.GetPostureTemplateRequest;

                    /**
                     * Verifies a GetPostureTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPostureTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPostureTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.GetPostureTemplateRequest;

                    /**
                     * Creates a plain object from a GetPostureTemplateRequest message. Also converts values to other types if specified.
                     * @param message GetPostureTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.GetPostureTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPostureTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPostureTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** EnablementState enum. */
                enum EnablementState {
                    ENABLEMENT_STATE_UNSPECIFIED = 0,
                    ENABLED = 1,
                    DISABLED = 2
                }

                /** Properties of a SecurityHealthAnalyticsModule. */
                interface ISecurityHealthAnalyticsModule {

                    /** SecurityHealthAnalyticsModule moduleName */
                    moduleName?: (string|null);

                    /** SecurityHealthAnalyticsModule moduleEnablementState */
                    moduleEnablementState?: (google.cloud.securityposture.v1.EnablementState|keyof typeof google.cloud.securityposture.v1.EnablementState|null);
                }

                /** Represents a SecurityHealthAnalyticsModule. */
                class SecurityHealthAnalyticsModule implements ISecurityHealthAnalyticsModule {

                    /**
                     * Constructs a new SecurityHealthAnalyticsModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.ISecurityHealthAnalyticsModule);

                    /** SecurityHealthAnalyticsModule moduleName. */
                    public moduleName: string;

                    /** SecurityHealthAnalyticsModule moduleEnablementState. */
                    public moduleEnablementState: (google.cloud.securityposture.v1.EnablementState|keyof typeof google.cloud.securityposture.v1.EnablementState);

                    /**
                     * Creates a new SecurityHealthAnalyticsModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityHealthAnalyticsModule instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.ISecurityHealthAnalyticsModule): google.cloud.securityposture.v1.SecurityHealthAnalyticsModule;

                    /**
                     * Encodes the specified SecurityHealthAnalyticsModule message. Does not implicitly {@link google.cloud.securityposture.v1.SecurityHealthAnalyticsModule.verify|verify} messages.
                     * @param message SecurityHealthAnalyticsModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.ISecurityHealthAnalyticsModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityHealthAnalyticsModule message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.SecurityHealthAnalyticsModule.verify|verify} messages.
                     * @param message SecurityHealthAnalyticsModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.ISecurityHealthAnalyticsModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityHealthAnalyticsModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityHealthAnalyticsModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.SecurityHealthAnalyticsModule;

                    /**
                     * Decodes a SecurityHealthAnalyticsModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityHealthAnalyticsModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.SecurityHealthAnalyticsModule;

                    /**
                     * Verifies a SecurityHealthAnalyticsModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityHealthAnalyticsModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityHealthAnalyticsModule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.SecurityHealthAnalyticsModule;

                    /**
                     * Creates a plain object from a SecurityHealthAnalyticsModule message. Also converts values to other types if specified.
                     * @param message SecurityHealthAnalyticsModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.SecurityHealthAnalyticsModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityHealthAnalyticsModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityHealthAnalyticsModule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SecurityHealthAnalyticsCustomModule. */
                interface ISecurityHealthAnalyticsCustomModule {

                    /** SecurityHealthAnalyticsCustomModule id */
                    id?: (string|null);

                    /** SecurityHealthAnalyticsCustomModule displayName */
                    displayName?: (string|null);

                    /** SecurityHealthAnalyticsCustomModule config */
                    config?: (google.cloud.securityposture.v1.ICustomConfig|null);

                    /** SecurityHealthAnalyticsCustomModule moduleEnablementState */
                    moduleEnablementState?: (google.cloud.securityposture.v1.EnablementState|keyof typeof google.cloud.securityposture.v1.EnablementState|null);
                }

                /** Represents a SecurityHealthAnalyticsCustomModule. */
                class SecurityHealthAnalyticsCustomModule implements ISecurityHealthAnalyticsCustomModule {

                    /**
                     * Constructs a new SecurityHealthAnalyticsCustomModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.ISecurityHealthAnalyticsCustomModule);

                    /** SecurityHealthAnalyticsCustomModule id. */
                    public id: string;

                    /** SecurityHealthAnalyticsCustomModule displayName. */
                    public displayName: string;

                    /** SecurityHealthAnalyticsCustomModule config. */
                    public config?: (google.cloud.securityposture.v1.ICustomConfig|null);

                    /** SecurityHealthAnalyticsCustomModule moduleEnablementState. */
                    public moduleEnablementState: (google.cloud.securityposture.v1.EnablementState|keyof typeof google.cloud.securityposture.v1.EnablementState);

                    /**
                     * Creates a new SecurityHealthAnalyticsCustomModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityHealthAnalyticsCustomModule instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.ISecurityHealthAnalyticsCustomModule): google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Encodes the specified SecurityHealthAnalyticsCustomModule message. Does not implicitly {@link google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule.verify|verify} messages.
                     * @param message SecurityHealthAnalyticsCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.ISecurityHealthAnalyticsCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityHealthAnalyticsCustomModule message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule.verify|verify} messages.
                     * @param message SecurityHealthAnalyticsCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.ISecurityHealthAnalyticsCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityHealthAnalyticsCustomModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityHealthAnalyticsCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Decodes a SecurityHealthAnalyticsCustomModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityHealthAnalyticsCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Verifies a SecurityHealthAnalyticsCustomModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityHealthAnalyticsCustomModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityHealthAnalyticsCustomModule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Creates a plain object from a SecurityHealthAnalyticsCustomModule message. Also converts values to other types if specified.
                     * @param message SecurityHealthAnalyticsCustomModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.SecurityHealthAnalyticsCustomModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityHealthAnalyticsCustomModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityHealthAnalyticsCustomModule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomConfig. */
                interface ICustomConfig {

                    /** CustomConfig predicate */
                    predicate?: (google.type.IExpr|null);

                    /** CustomConfig customOutput */
                    customOutput?: (google.cloud.securityposture.v1.CustomConfig.ICustomOutputSpec|null);

                    /** CustomConfig resourceSelector */
                    resourceSelector?: (google.cloud.securityposture.v1.CustomConfig.IResourceSelector|null);

                    /** CustomConfig severity */
                    severity?: (google.cloud.securityposture.v1.CustomConfig.Severity|keyof typeof google.cloud.securityposture.v1.CustomConfig.Severity|null);

                    /** CustomConfig description */
                    description?: (string|null);

                    /** CustomConfig recommendation */
                    recommendation?: (string|null);
                }

                /** Represents a CustomConfig. */
                class CustomConfig implements ICustomConfig {

                    /**
                     * Constructs a new CustomConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securityposture.v1.ICustomConfig);

                    /** CustomConfig predicate. */
                    public predicate?: (google.type.IExpr|null);

                    /** CustomConfig customOutput. */
                    public customOutput?: (google.cloud.securityposture.v1.CustomConfig.ICustomOutputSpec|null);

                    /** CustomConfig resourceSelector. */
                    public resourceSelector?: (google.cloud.securityposture.v1.CustomConfig.IResourceSelector|null);

                    /** CustomConfig severity. */
                    public severity: (google.cloud.securityposture.v1.CustomConfig.Severity|keyof typeof google.cloud.securityposture.v1.CustomConfig.Severity);

                    /** CustomConfig description. */
                    public description: string;

                    /** CustomConfig recommendation. */
                    public recommendation: string;

                    /**
                     * Creates a new CustomConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomConfig instance
                     */
                    public static create(properties?: google.cloud.securityposture.v1.ICustomConfig): google.cloud.securityposture.v1.CustomConfig;

                    /**
                     * Encodes the specified CustomConfig message. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.verify|verify} messages.
                     * @param message CustomConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securityposture.v1.ICustomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomConfig message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.verify|verify} messages.
                     * @param message CustomConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securityposture.v1.ICustomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CustomConfig;

                    /**
                     * Decodes a CustomConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CustomConfig;

                    /**
                     * Verifies a CustomConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CustomConfig;

                    /**
                     * Creates a plain object from a CustomConfig message. Also converts values to other types if specified.
                     * @param message CustomConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securityposture.v1.CustomConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomConfig {

                    /** Properties of a CustomOutputSpec. */
                    interface ICustomOutputSpec {

                        /** CustomOutputSpec properties */
                        properties?: (google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.IProperty[]|null);
                    }

                    /** Represents a CustomOutputSpec. */
                    class CustomOutputSpec implements ICustomOutputSpec {

                        /**
                         * Constructs a new CustomOutputSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securityposture.v1.CustomConfig.ICustomOutputSpec);

                        /** CustomOutputSpec properties. */
                        public properties: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.IProperty[];

                        /**
                         * Creates a new CustomOutputSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomOutputSpec instance
                         */
                        public static create(properties?: google.cloud.securityposture.v1.CustomConfig.ICustomOutputSpec): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Encodes the specified CustomOutputSpec message. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.verify|verify} messages.
                         * @param message CustomOutputSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securityposture.v1.CustomConfig.ICustomOutputSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomOutputSpec message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.verify|verify} messages.
                         * @param message CustomOutputSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securityposture.v1.CustomConfig.ICustomOutputSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomOutputSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomOutputSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Decodes a CustomOutputSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomOutputSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Verifies a CustomOutputSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomOutputSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomOutputSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Creates a plain object from a CustomOutputSpec message. Also converts values to other types if specified.
                         * @param message CustomOutputSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomOutputSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomOutputSpec
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CustomOutputSpec {

                        /** Properties of a Property. */
                        interface IProperty {

                            /** Property name */
                            name?: (string|null);

                            /** Property valueExpression */
                            valueExpression?: (google.type.IExpr|null);
                        }

                        /** Represents a Property. */
                        class Property implements IProperty {

                            /**
                             * Constructs a new Property.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.IProperty);

                            /** Property name. */
                            public name: string;

                            /** Property valueExpression. */
                            public valueExpression?: (google.type.IExpr|null);

                            /**
                             * Creates a new Property instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Property instance
                             */
                            public static create(properties?: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.IProperty): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Encodes the specified Property message. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property.verify|verify} messages.
                             * @param message Property message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Property message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property.verify|verify} messages.
                             * @param message Property message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Property message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Property
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Decodes a Property message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Property
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Verifies a Property message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Property message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Property
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Creates a plain object from a Property message. Also converts values to other types if specified.
                             * @param message Property
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.securityposture.v1.CustomConfig.CustomOutputSpec.Property, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Property to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Property
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ResourceSelector. */
                    interface IResourceSelector {

                        /** ResourceSelector resourceTypes */
                        resourceTypes?: (string[]|null);
                    }

                    /** Represents a ResourceSelector. */
                    class ResourceSelector implements IResourceSelector {

                        /**
                         * Constructs a new ResourceSelector.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securityposture.v1.CustomConfig.IResourceSelector);

                        /** ResourceSelector resourceTypes. */
                        public resourceTypes: string[];

                        /**
                         * Creates a new ResourceSelector instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSelector instance
                         */
                        public static create(properties?: google.cloud.securityposture.v1.CustomConfig.IResourceSelector): google.cloud.securityposture.v1.CustomConfig.ResourceSelector;

                        /**
                         * Encodes the specified ResourceSelector message. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.ResourceSelector.verify|verify} messages.
                         * @param message ResourceSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securityposture.v1.CustomConfig.IResourceSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSelector message, length delimited. Does not implicitly {@link google.cloud.securityposture.v1.CustomConfig.ResourceSelector.verify|verify} messages.
                         * @param message ResourceSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securityposture.v1.CustomConfig.IResourceSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSelector message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securityposture.v1.CustomConfig.ResourceSelector;

                        /**
                         * Decodes a ResourceSelector message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securityposture.v1.CustomConfig.ResourceSelector;

                        /**
                         * Verifies a ResourceSelector message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSelector message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSelector
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securityposture.v1.CustomConfig.ResourceSelector;

                        /**
                         * Creates a plain object from a ResourceSelector message. Also converts values to other types if specified.
                         * @param message ResourceSelector
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securityposture.v1.CustomConfig.ResourceSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSelector to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceSelector
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        HIGH = 2,
                        MEDIUM = 3,
                        LOW = 4
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
