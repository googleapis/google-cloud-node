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

        /** Namespace policytroubleshooter. */
        namespace policytroubleshooter {

            /** Namespace iam. */
            namespace iam {

                /** Namespace v3. */
                namespace v3 {

                    /** Represents a PolicyTroubleshooter */
                    class PolicyTroubleshooter extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new PolicyTroubleshooter service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new PolicyTroubleshooter service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyTroubleshooter;

                        /**
                         * Calls TroubleshootIamPolicy.
                         * @param request TroubleshootIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TroubleshootIamPolicyResponse
                         */
                        public troubleshootIamPolicy(request: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyRequest, callback: google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooter.TroubleshootIamPolicyCallback): void;

                        /**
                         * Calls TroubleshootIamPolicy.
                         * @param request TroubleshootIamPolicyRequest message or plain object
                         * @returns Promise
                         */
                        public troubleshootIamPolicy(request: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyRequest): Promise<google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse>;
                    }

                    namespace PolicyTroubleshooter {

                        /**
                         * Callback as used by {@link google.cloud.policytroubleshooter.iam.v3.PolicyTroubleshooter|troubleshootIamPolicy}.
                         * @param error Error, if any
                         * @param [response] TroubleshootIamPolicyResponse
                         */
                        type TroubleshootIamPolicyCallback = (error: (Error|null), response?: google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse) => void;
                    }

                    /** AllowAccessState enum. */
                    enum AllowAccessState {
                        ALLOW_ACCESS_STATE_UNSPECIFIED = 0,
                        ALLOW_ACCESS_STATE_GRANTED = 1,
                        ALLOW_ACCESS_STATE_NOT_GRANTED = 2,
                        ALLOW_ACCESS_STATE_UNKNOWN_CONDITIONAL = 3,
                        ALLOW_ACCESS_STATE_UNKNOWN_INFO = 4
                    }

                    /** DenyAccessState enum. */
                    enum DenyAccessState {
                        DENY_ACCESS_STATE_UNSPECIFIED = 0,
                        DENY_ACCESS_STATE_DENIED = 1,
                        DENY_ACCESS_STATE_NOT_DENIED = 2,
                        DENY_ACCESS_STATE_UNKNOWN_CONDITIONAL = 3,
                        DENY_ACCESS_STATE_UNKNOWN_INFO = 4
                    }

                    /** RolePermissionInclusionState enum. */
                    enum RolePermissionInclusionState {
                        ROLE_PERMISSION_INCLUSION_STATE_UNSPECIFIED = 0,
                        ROLE_PERMISSION_INCLUDED = 1,
                        ROLE_PERMISSION_NOT_INCLUDED = 2,
                        ROLE_PERMISSION_UNKNOWN_INFO = 3
                    }

                    /** PermissionPatternMatchingState enum. */
                    enum PermissionPatternMatchingState {
                        PERMISSION_PATTERN_MATCHING_STATE_UNSPECIFIED = 0,
                        PERMISSION_PATTERN_MATCHED = 1,
                        PERMISSION_PATTERN_NOT_MATCHED = 2
                    }

                    /** MembershipMatchingState enum. */
                    enum MembershipMatchingState {
                        MEMBERSHIP_MATCHING_STATE_UNSPECIFIED = 0,
                        MEMBERSHIP_MATCHED = 1,
                        MEMBERSHIP_NOT_MATCHED = 2,
                        MEMBERSHIP_UNKNOWN_INFO = 3,
                        MEMBERSHIP_UNKNOWN_UNSUPPORTED = 4
                    }

                    /** HeuristicRelevance enum. */
                    enum HeuristicRelevance {
                        HEURISTIC_RELEVANCE_UNSPECIFIED = 0,
                        HEURISTIC_RELEVANCE_NORMAL = 1,
                        HEURISTIC_RELEVANCE_HIGH = 2
                    }

                    /** Properties of a TroubleshootIamPolicyRequest. */
                    interface ITroubleshootIamPolicyRequest {

                        /** TroubleshootIamPolicyRequest accessTuple */
                        accessTuple?: (google.cloud.policytroubleshooter.iam.v3.IAccessTuple|null);
                    }

                    /** Represents a TroubleshootIamPolicyRequest. */
                    class TroubleshootIamPolicyRequest implements ITroubleshootIamPolicyRequest {

                        /**
                         * Constructs a new TroubleshootIamPolicyRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyRequest);

                        /** TroubleshootIamPolicyRequest accessTuple. */
                        public accessTuple?: (google.cloud.policytroubleshooter.iam.v3.IAccessTuple|null);

                        /**
                         * Creates a new TroubleshootIamPolicyRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TroubleshootIamPolicyRequest instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyRequest): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest;

                        /**
                         * Encodes the specified TroubleshootIamPolicyRequest message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest.verify|verify} messages.
                         * @param message TroubleshootIamPolicyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TroubleshootIamPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest.verify|verify} messages.
                         * @param message TroubleshootIamPolicyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TroubleshootIamPolicyRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TroubleshootIamPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest;

                        /**
                         * Decodes a TroubleshootIamPolicyRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TroubleshootIamPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest;

                        /**
                         * Verifies a TroubleshootIamPolicyRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TroubleshootIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TroubleshootIamPolicyRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest;

                        /**
                         * Creates a plain object from a TroubleshootIamPolicyRequest message. Also converts values to other types if specified.
                         * @param message TroubleshootIamPolicyRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TroubleshootIamPolicyRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TroubleshootIamPolicyRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TroubleshootIamPolicyResponse. */
                    interface ITroubleshootIamPolicyResponse {

                        /** TroubleshootIamPolicyResponse overallAccessState */
                        overallAccessState?: (google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse.OverallAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse.OverallAccessState|null);

                        /** TroubleshootIamPolicyResponse accessTuple */
                        accessTuple?: (google.cloud.policytroubleshooter.iam.v3.IAccessTuple|null);

                        /** TroubleshootIamPolicyResponse allowPolicyExplanation */
                        allowPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3.IAllowPolicyExplanation|null);

                        /** TroubleshootIamPolicyResponse denyPolicyExplanation */
                        denyPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3.IDenyPolicyExplanation|null);
                    }

                    /** Represents a TroubleshootIamPolicyResponse. */
                    class TroubleshootIamPolicyResponse implements ITroubleshootIamPolicyResponse {

                        /**
                         * Constructs a new TroubleshootIamPolicyResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyResponse);

                        /** TroubleshootIamPolicyResponse overallAccessState. */
                        public overallAccessState: (google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse.OverallAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse.OverallAccessState);

                        /** TroubleshootIamPolicyResponse accessTuple. */
                        public accessTuple?: (google.cloud.policytroubleshooter.iam.v3.IAccessTuple|null);

                        /** TroubleshootIamPolicyResponse allowPolicyExplanation. */
                        public allowPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3.IAllowPolicyExplanation|null);

                        /** TroubleshootIamPolicyResponse denyPolicyExplanation. */
                        public denyPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3.IDenyPolicyExplanation|null);

                        /**
                         * Creates a new TroubleshootIamPolicyResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TroubleshootIamPolicyResponse instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyResponse): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse;

                        /**
                         * Encodes the specified TroubleshootIamPolicyResponse message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse.verify|verify} messages.
                         * @param message TroubleshootIamPolicyResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TroubleshootIamPolicyResponse message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse.verify|verify} messages.
                         * @param message TroubleshootIamPolicyResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ITroubleshootIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TroubleshootIamPolicyResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TroubleshootIamPolicyResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse;

                        /**
                         * Decodes a TroubleshootIamPolicyResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TroubleshootIamPolicyResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse;

                        /**
                         * Verifies a TroubleshootIamPolicyResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TroubleshootIamPolicyResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TroubleshootIamPolicyResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse;

                        /**
                         * Creates a plain object from a TroubleshootIamPolicyResponse message. Also converts values to other types if specified.
                         * @param message TroubleshootIamPolicyResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.TroubleshootIamPolicyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TroubleshootIamPolicyResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TroubleshootIamPolicyResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TroubleshootIamPolicyResponse {

                        /** OverallAccessState enum. */
                        enum OverallAccessState {
                            OVERALL_ACCESS_STATE_UNSPECIFIED = 0,
                            CAN_ACCESS = 1,
                            CANNOT_ACCESS = 2,
                            UNKNOWN_INFO = 3,
                            UNKNOWN_CONDITIONAL = 4
                        }
                    }

                    /** Properties of an AccessTuple. */
                    interface IAccessTuple {

                        /** AccessTuple principal */
                        principal?: (string|null);

                        /** AccessTuple fullResourceName */
                        fullResourceName?: (string|null);

                        /** AccessTuple permission */
                        permission?: (string|null);

                        /** AccessTuple permissionFqdn */
                        permissionFqdn?: (string|null);

                        /** AccessTuple conditionContext */
                        conditionContext?: (google.cloud.policytroubleshooter.iam.v3.IConditionContext|null);
                    }

                    /** Represents an AccessTuple. */
                    class AccessTuple implements IAccessTuple {

                        /**
                         * Constructs a new AccessTuple.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IAccessTuple);

                        /** AccessTuple principal. */
                        public principal: string;

                        /** AccessTuple fullResourceName. */
                        public fullResourceName: string;

                        /** AccessTuple permission. */
                        public permission: string;

                        /** AccessTuple permissionFqdn. */
                        public permissionFqdn: string;

                        /** AccessTuple conditionContext. */
                        public conditionContext?: (google.cloud.policytroubleshooter.iam.v3.IConditionContext|null);

                        /**
                         * Creates a new AccessTuple instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccessTuple instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IAccessTuple): google.cloud.policytroubleshooter.iam.v3.AccessTuple;

                        /**
                         * Encodes the specified AccessTuple message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AccessTuple.verify|verify} messages.
                         * @param message AccessTuple message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccessTuple message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AccessTuple.verify|verify} messages.
                         * @param message AccessTuple message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccessTuple message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccessTuple
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.AccessTuple;

                        /**
                         * Decodes an AccessTuple message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccessTuple
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.AccessTuple;

                        /**
                         * Verifies an AccessTuple message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccessTuple message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccessTuple
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.AccessTuple;

                        /**
                         * Creates a plain object from an AccessTuple message. Also converts values to other types if specified.
                         * @param message AccessTuple
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.AccessTuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccessTuple to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AccessTuple
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ConditionContext. */
                    interface IConditionContext {

                        /** ConditionContext resource */
                        resource?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IResource|null);

                        /** ConditionContext destination */
                        destination?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IPeer|null);

                        /** ConditionContext request */
                        request?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IRequest|null);

                        /** ConditionContext effectiveTags */
                        effectiveTags?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IEffectiveTag[]|null);
                    }

                    /** Represents a ConditionContext. */
                    class ConditionContext implements IConditionContext {

                        /**
                         * Constructs a new ConditionContext.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IConditionContext);

                        /** ConditionContext resource. */
                        public resource?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IResource|null);

                        /** ConditionContext destination. */
                        public destination?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IPeer|null);

                        /** ConditionContext request. */
                        public request?: (google.cloud.policytroubleshooter.iam.v3.ConditionContext.IRequest|null);

                        /** ConditionContext effectiveTags. */
                        public effectiveTags: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IEffectiveTag[];

                        /**
                         * Creates a new ConditionContext instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConditionContext instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IConditionContext): google.cloud.policytroubleshooter.iam.v3.ConditionContext;

                        /**
                         * Encodes the specified ConditionContext message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.verify|verify} messages.
                         * @param message ConditionContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IConditionContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConditionContext message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.verify|verify} messages.
                         * @param message ConditionContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IConditionContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConditionContext message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConditionContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionContext;

                        /**
                         * Decodes a ConditionContext message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConditionContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionContext;

                        /**
                         * Verifies a ConditionContext message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConditionContext message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConditionContext
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionContext;

                        /**
                         * Creates a plain object from a ConditionContext message. Also converts values to other types if specified.
                         * @param message ConditionContext
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConditionContext to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConditionContext
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ConditionContext {

                        /** Properties of a Resource. */
                        interface IResource {

                            /** Resource service */
                            service?: (string|null);

                            /** Resource name */
                            name?: (string|null);

                            /** Resource type */
                            type?: (string|null);
                        }

                        /** Represents a Resource. */
                        class Resource implements IResource {

                            /**
                             * Constructs a new Resource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IResource);

                            /** Resource service. */
                            public service: string;

                            /** Resource name. */
                            public name: string;

                            /** Resource type. */
                            public type: string;

                            /**
                             * Creates a new Resource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Resource instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IResource): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource;

                            /**
                             * Encodes the specified Resource message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource.verify|verify} messages.
                             * @param message Resource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource.verify|verify} messages.
                             * @param message Resource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Resource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Resource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource;

                            /**
                             * Decodes a Resource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Resource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource;

                            /**
                             * Creates a plain object from a Resource message. Also converts values to other types if specified.
                             * @param message Resource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        /** Properties of a Peer. */
                        interface IPeer {

                            /** Peer ip */
                            ip?: (string|null);

                            /** Peer port */
                            port?: (number|Long|string|null);
                        }

                        /** Represents a Peer. */
                        class Peer implements IPeer {

                            /**
                             * Constructs a new Peer.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IPeer);

                            /** Peer ip. */
                            public ip: string;

                            /** Peer port. */
                            public port: (number|Long|string);

                            /**
                             * Creates a new Peer instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Peer instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IPeer): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer;

                            /**
                             * Encodes the specified Peer message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer.verify|verify} messages.
                             * @param message Peer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Peer message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer.verify|verify} messages.
                             * @param message Peer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Peer message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Peer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer;

                            /**
                             * Decodes a Peer message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Peer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer;

                            /**
                             * Verifies a Peer message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Peer message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Peer
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer;

                            /**
                             * Creates a plain object from a Peer message. Also converts values to other types if specified.
                             * @param message Peer
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.Peer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Peer to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Peer
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Request. */
                        interface IRequest {

                            /** Request receiveTime */
                            receiveTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a Request. */
                        class Request implements IRequest {

                            /**
                             * Constructs a new Request.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IRequest);

                            /** Request receiveTime. */
                            public receiveTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new Request instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Request instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IRequest): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request;

                            /**
                             * Encodes the specified Request message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request.verify|verify} messages.
                             * @param message Request message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Request message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request.verify|verify} messages.
                             * @param message Request message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Request message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Request
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request;

                            /**
                             * Decodes a Request message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Request
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request;

                            /**
                             * Verifies a Request message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Request message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Request
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request;

                            /**
                             * Creates a plain object from a Request message. Also converts values to other types if specified.
                             * @param message Request
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Request to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Request
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an EffectiveTag. */
                        interface IEffectiveTag {

                            /** EffectiveTag tagValue */
                            tagValue?: (string|null);

                            /** EffectiveTag namespacedTagValue */
                            namespacedTagValue?: (string|null);

                            /** EffectiveTag tagKey */
                            tagKey?: (string|null);

                            /** EffectiveTag namespacedTagKey */
                            namespacedTagKey?: (string|null);

                            /** EffectiveTag tagKeyParentName */
                            tagKeyParentName?: (string|null);

                            /** EffectiveTag inherited */
                            inherited?: (boolean|null);
                        }

                        /** Represents an EffectiveTag. */
                        class EffectiveTag implements IEffectiveTag {

                            /**
                             * Constructs a new EffectiveTag.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IEffectiveTag);

                            /** EffectiveTag tagValue. */
                            public tagValue: string;

                            /** EffectiveTag namespacedTagValue. */
                            public namespacedTagValue: string;

                            /** EffectiveTag tagKey. */
                            public tagKey: string;

                            /** EffectiveTag namespacedTagKey. */
                            public namespacedTagKey: string;

                            /** EffectiveTag tagKeyParentName. */
                            public tagKeyParentName: string;

                            /** EffectiveTag inherited. */
                            public inherited: boolean;

                            /**
                             * Creates a new EffectiveTag instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EffectiveTag instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IEffectiveTag): google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag;

                            /**
                             * Encodes the specified EffectiveTag message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag.verify|verify} messages.
                             * @param message EffectiveTag message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IEffectiveTag, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EffectiveTag message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag.verify|verify} messages.
                             * @param message EffectiveTag message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.IEffectiveTag, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EffectiveTag message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EffectiveTag
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag;

                            /**
                             * Decodes an EffectiveTag message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EffectiveTag
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag;

                            /**
                             * Verifies an EffectiveTag message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EffectiveTag message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EffectiveTag
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag;

                            /**
                             * Creates a plain object from an EffectiveTag message. Also converts values to other types if specified.
                             * @param message EffectiveTag
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionContext.EffectiveTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EffectiveTag to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EffectiveTag
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an AllowPolicyExplanation. */
                    interface IAllowPolicyExplanation {

                        /** AllowPolicyExplanation allowAccessState */
                        allowAccessState?: (google.cloud.policytroubleshooter.iam.v3.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.AllowAccessState|null);

                        /** AllowPolicyExplanation explainedPolicies */
                        explainedPolicies?: (google.cloud.policytroubleshooter.iam.v3.IExplainedAllowPolicy[]|null);

                        /** AllowPolicyExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);
                    }

                    /** Represents an AllowPolicyExplanation. */
                    class AllowPolicyExplanation implements IAllowPolicyExplanation {

                        /**
                         * Constructs a new AllowPolicyExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IAllowPolicyExplanation);

                        /** AllowPolicyExplanation allowAccessState. */
                        public allowAccessState: (google.cloud.policytroubleshooter.iam.v3.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.AllowAccessState);

                        /** AllowPolicyExplanation explainedPolicies. */
                        public explainedPolicies: google.cloud.policytroubleshooter.iam.v3.IExplainedAllowPolicy[];

                        /** AllowPolicyExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /**
                         * Creates a new AllowPolicyExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllowPolicyExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IAllowPolicyExplanation): google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation;

                        /**
                         * Encodes the specified AllowPolicyExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation.verify|verify} messages.
                         * @param message AllowPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IAllowPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllowPolicyExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation.verify|verify} messages.
                         * @param message AllowPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IAllowPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllowPolicyExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllowPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation;

                        /**
                         * Decodes an AllowPolicyExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllowPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation;

                        /**
                         * Verifies an AllowPolicyExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllowPolicyExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllowPolicyExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation;

                        /**
                         * Creates a plain object from an AllowPolicyExplanation message. Also converts values to other types if specified.
                         * @param message AllowPolicyExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.AllowPolicyExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllowPolicyExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllowPolicyExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExplainedAllowPolicy. */
                    interface IExplainedAllowPolicy {

                        /** ExplainedAllowPolicy allowAccessState */
                        allowAccessState?: (google.cloud.policytroubleshooter.iam.v3.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.AllowAccessState|null);

                        /** ExplainedAllowPolicy fullResourceName */
                        fullResourceName?: (string|null);

                        /** ExplainedAllowPolicy bindingExplanations */
                        bindingExplanations?: (google.cloud.policytroubleshooter.iam.v3.IAllowBindingExplanation[]|null);

                        /** ExplainedAllowPolicy relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);

                        /** ExplainedAllowPolicy policy */
                        policy?: (google.iam.v1.IPolicy|null);
                    }

                    /** Represents an ExplainedAllowPolicy. */
                    class ExplainedAllowPolicy implements IExplainedAllowPolicy {

                        /**
                         * Constructs a new ExplainedAllowPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IExplainedAllowPolicy);

                        /** ExplainedAllowPolicy allowAccessState. */
                        public allowAccessState: (google.cloud.policytroubleshooter.iam.v3.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.AllowAccessState);

                        /** ExplainedAllowPolicy fullResourceName. */
                        public fullResourceName: string;

                        /** ExplainedAllowPolicy bindingExplanations. */
                        public bindingExplanations: google.cloud.policytroubleshooter.iam.v3.IAllowBindingExplanation[];

                        /** ExplainedAllowPolicy relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /** ExplainedAllowPolicy policy. */
                        public policy?: (google.iam.v1.IPolicy|null);

                        /**
                         * Creates a new ExplainedAllowPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExplainedAllowPolicy instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IExplainedAllowPolicy): google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy;

                        /**
                         * Encodes the specified ExplainedAllowPolicy message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy.verify|verify} messages.
                         * @param message ExplainedAllowPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IExplainedAllowPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExplainedAllowPolicy message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy.verify|verify} messages.
                         * @param message ExplainedAllowPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IExplainedAllowPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExplainedAllowPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExplainedAllowPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy;

                        /**
                         * Decodes an ExplainedAllowPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExplainedAllowPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy;

                        /**
                         * Verifies an ExplainedAllowPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExplainedAllowPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExplainedAllowPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy;

                        /**
                         * Creates a plain object from an ExplainedAllowPolicy message. Also converts values to other types if specified.
                         * @param message ExplainedAllowPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ExplainedAllowPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExplainedAllowPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExplainedAllowPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AllowBindingExplanation. */
                    interface IAllowBindingExplanation {

                        /** AllowBindingExplanation allowAccessState */
                        allowAccessState?: (google.cloud.policytroubleshooter.iam.v3.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.AllowAccessState|null);

                        /** AllowBindingExplanation role */
                        role?: (string|null);

                        /** AllowBindingExplanation rolePermission */
                        rolePermission?: (google.cloud.policytroubleshooter.iam.v3.RolePermissionInclusionState|keyof typeof google.cloud.policytroubleshooter.iam.v3.RolePermissionInclusionState|null);

                        /** AllowBindingExplanation rolePermissionRelevance */
                        rolePermissionRelevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);

                        /** AllowBindingExplanation combinedMembership */
                        combinedMembership?: (google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership|null);

                        /** AllowBindingExplanation memberships */
                        memberships?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership }|null);

                        /** AllowBindingExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);

                        /** AllowBindingExplanation condition */
                        condition?: (google.type.IExpr|null);

                        /** AllowBindingExplanation conditionExplanation */
                        conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3.IConditionExplanation|null);
                    }

                    /** Represents an AllowBindingExplanation. */
                    class AllowBindingExplanation implements IAllowBindingExplanation {

                        /**
                         * Constructs a new AllowBindingExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IAllowBindingExplanation);

                        /** AllowBindingExplanation allowAccessState. */
                        public allowAccessState: (google.cloud.policytroubleshooter.iam.v3.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.AllowAccessState);

                        /** AllowBindingExplanation role. */
                        public role: string;

                        /** AllowBindingExplanation rolePermission. */
                        public rolePermission: (google.cloud.policytroubleshooter.iam.v3.RolePermissionInclusionState|keyof typeof google.cloud.policytroubleshooter.iam.v3.RolePermissionInclusionState);

                        /** AllowBindingExplanation rolePermissionRelevance. */
                        public rolePermissionRelevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /** AllowBindingExplanation combinedMembership. */
                        public combinedMembership?: (google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership|null);

                        /** AllowBindingExplanation memberships. */
                        public memberships: { [k: string]: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership };

                        /** AllowBindingExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /** AllowBindingExplanation condition. */
                        public condition?: (google.type.IExpr|null);

                        /** AllowBindingExplanation conditionExplanation. */
                        public conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3.IConditionExplanation|null);

                        /**
                         * Creates a new AllowBindingExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllowBindingExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IAllowBindingExplanation): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation;

                        /**
                         * Encodes the specified AllowBindingExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.verify|verify} messages.
                         * @param message AllowBindingExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IAllowBindingExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllowBindingExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.verify|verify} messages.
                         * @param message AllowBindingExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IAllowBindingExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllowBindingExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllowBindingExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation;

                        /**
                         * Decodes an AllowBindingExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllowBindingExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation;

                        /**
                         * Verifies an AllowBindingExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllowBindingExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllowBindingExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation;

                        /**
                         * Creates a plain object from an AllowBindingExplanation message. Also converts values to other types if specified.
                         * @param message AllowBindingExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllowBindingExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllowBindingExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AllowBindingExplanation {

                        /** Properties of an AnnotatedAllowMembership. */
                        interface IAnnotatedAllowMembership {

                            /** AnnotatedAllowMembership membership */
                            membership?: (google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState|null);

                            /** AnnotatedAllowMembership relevance */
                            relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);
                        }

                        /** Represents an AnnotatedAllowMembership. */
                        class AnnotatedAllowMembership implements IAnnotatedAllowMembership {

                            /**
                             * Constructs a new AnnotatedAllowMembership.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership);

                            /** AnnotatedAllowMembership membership. */
                            public membership: (google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState);

                            /** AnnotatedAllowMembership relevance. */
                            public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                            /**
                             * Creates a new AnnotatedAllowMembership instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnnotatedAllowMembership instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Encodes the specified AnnotatedAllowMembership message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership.verify|verify} messages.
                             * @param message AnnotatedAllowMembership message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnnotatedAllowMembership message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership.verify|verify} messages.
                             * @param message AnnotatedAllowMembership message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.IAnnotatedAllowMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnnotatedAllowMembership message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnnotatedAllowMembership
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Decodes an AnnotatedAllowMembership message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnnotatedAllowMembership
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Verifies an AnnotatedAllowMembership message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnnotatedAllowMembership message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnnotatedAllowMembership
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Creates a plain object from an AnnotatedAllowMembership message. Also converts values to other types if specified.
                             * @param message AnnotatedAllowMembership
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.AllowBindingExplanation.AnnotatedAllowMembership, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnnotatedAllowMembership to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnnotatedAllowMembership
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a DenyPolicyExplanation. */
                    interface IDenyPolicyExplanation {

                        /** DenyPolicyExplanation denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState|null);

                        /** DenyPolicyExplanation explainedResources */
                        explainedResources?: (google.cloud.policytroubleshooter.iam.v3.IExplainedDenyResource[]|null);

                        /** DenyPolicyExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);

                        /** DenyPolicyExplanation permissionDeniable */
                        permissionDeniable?: (boolean|null);
                    }

                    /** Represents a DenyPolicyExplanation. */
                    class DenyPolicyExplanation implements IDenyPolicyExplanation {

                        /**
                         * Constructs a new DenyPolicyExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IDenyPolicyExplanation);

                        /** DenyPolicyExplanation denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState);

                        /** DenyPolicyExplanation explainedResources. */
                        public explainedResources: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyResource[];

                        /** DenyPolicyExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /** DenyPolicyExplanation permissionDeniable. */
                        public permissionDeniable: boolean;

                        /**
                         * Creates a new DenyPolicyExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DenyPolicyExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IDenyPolicyExplanation): google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation;

                        /**
                         * Encodes the specified DenyPolicyExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation.verify|verify} messages.
                         * @param message DenyPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IDenyPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DenyPolicyExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation.verify|verify} messages.
                         * @param message DenyPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IDenyPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DenyPolicyExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DenyPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation;

                        /**
                         * Decodes a DenyPolicyExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DenyPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation;

                        /**
                         * Verifies a DenyPolicyExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DenyPolicyExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DenyPolicyExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation;

                        /**
                         * Creates a plain object from a DenyPolicyExplanation message. Also converts values to other types if specified.
                         * @param message DenyPolicyExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.DenyPolicyExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DenyPolicyExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DenyPolicyExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExplainedDenyResource. */
                    interface IExplainedDenyResource {

                        /** ExplainedDenyResource denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState|null);

                        /** ExplainedDenyResource fullResourceName */
                        fullResourceName?: (string|null);

                        /** ExplainedDenyResource explainedPolicies */
                        explainedPolicies?: (google.cloud.policytroubleshooter.iam.v3.IExplainedDenyPolicy[]|null);

                        /** ExplainedDenyResource relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);
                    }

                    /** Represents an ExplainedDenyResource. */
                    class ExplainedDenyResource implements IExplainedDenyResource {

                        /**
                         * Constructs a new ExplainedDenyResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyResource);

                        /** ExplainedDenyResource denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState);

                        /** ExplainedDenyResource fullResourceName. */
                        public fullResourceName: string;

                        /** ExplainedDenyResource explainedPolicies. */
                        public explainedPolicies: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyPolicy[];

                        /** ExplainedDenyResource relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /**
                         * Creates a new ExplainedDenyResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExplainedDenyResource instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyResource): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource;

                        /**
                         * Encodes the specified ExplainedDenyResource message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource.verify|verify} messages.
                         * @param message ExplainedDenyResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExplainedDenyResource message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource.verify|verify} messages.
                         * @param message ExplainedDenyResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExplainedDenyResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExplainedDenyResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource;

                        /**
                         * Decodes an ExplainedDenyResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExplainedDenyResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource;

                        /**
                         * Verifies an ExplainedDenyResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExplainedDenyResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExplainedDenyResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource;

                        /**
                         * Creates a plain object from an ExplainedDenyResource message. Also converts values to other types if specified.
                         * @param message ExplainedDenyResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ExplainedDenyResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExplainedDenyResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExplainedDenyResource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExplainedDenyPolicy. */
                    interface IExplainedDenyPolicy {

                        /** ExplainedDenyPolicy denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState|null);

                        /** ExplainedDenyPolicy policy */
                        policy?: (google.iam.v2.IPolicy|null);

                        /** ExplainedDenyPolicy ruleExplanations */
                        ruleExplanations?: (google.cloud.policytroubleshooter.iam.v3.IDenyRuleExplanation[]|null);

                        /** ExplainedDenyPolicy relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);
                    }

                    /** Represents an ExplainedDenyPolicy. */
                    class ExplainedDenyPolicy implements IExplainedDenyPolicy {

                        /**
                         * Constructs a new ExplainedDenyPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyPolicy);

                        /** ExplainedDenyPolicy denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState);

                        /** ExplainedDenyPolicy policy. */
                        public policy?: (google.iam.v2.IPolicy|null);

                        /** ExplainedDenyPolicy ruleExplanations. */
                        public ruleExplanations: google.cloud.policytroubleshooter.iam.v3.IDenyRuleExplanation[];

                        /** ExplainedDenyPolicy relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /**
                         * Creates a new ExplainedDenyPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExplainedDenyPolicy instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyPolicy): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy;

                        /**
                         * Encodes the specified ExplainedDenyPolicy message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy.verify|verify} messages.
                         * @param message ExplainedDenyPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExplainedDenyPolicy message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy.verify|verify} messages.
                         * @param message ExplainedDenyPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IExplainedDenyPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExplainedDenyPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExplainedDenyPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy;

                        /**
                         * Decodes an ExplainedDenyPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExplainedDenyPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy;

                        /**
                         * Verifies an ExplainedDenyPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExplainedDenyPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExplainedDenyPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy;

                        /**
                         * Creates a plain object from an ExplainedDenyPolicy message. Also converts values to other types if specified.
                         * @param message ExplainedDenyPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ExplainedDenyPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExplainedDenyPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExplainedDenyPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DenyRuleExplanation. */
                    interface IDenyRuleExplanation {

                        /** DenyRuleExplanation denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState|null);

                        /** DenyRuleExplanation combinedDeniedPermission */
                        combinedDeniedPermission?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation deniedPermissions */
                        deniedPermissions?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching }|null);

                        /** DenyRuleExplanation combinedExceptionPermission */
                        combinedExceptionPermission?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation exceptionPermissions */
                        exceptionPermissions?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching }|null);

                        /** DenyRuleExplanation combinedDeniedPrincipal */
                        combinedDeniedPrincipal?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation deniedPrincipals */
                        deniedPrincipals?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching }|null);

                        /** DenyRuleExplanation combinedExceptionPrincipal */
                        combinedExceptionPrincipal?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation exceptionPrincipals */
                        exceptionPrincipals?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching }|null);

                        /** DenyRuleExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);

                        /** DenyRuleExplanation condition */
                        condition?: (google.type.IExpr|null);

                        /** DenyRuleExplanation conditionExplanation */
                        conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3.IConditionExplanation|null);
                    }

                    /** Represents a DenyRuleExplanation. */
                    class DenyRuleExplanation implements IDenyRuleExplanation {

                        /**
                         * Constructs a new DenyRuleExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IDenyRuleExplanation);

                        /** DenyRuleExplanation denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3.DenyAccessState);

                        /** DenyRuleExplanation combinedDeniedPermission. */
                        public combinedDeniedPermission?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation deniedPermissions. */
                        public deniedPermissions: { [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching };

                        /** DenyRuleExplanation combinedExceptionPermission. */
                        public combinedExceptionPermission?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation exceptionPermissions. */
                        public exceptionPermissions: { [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching };

                        /** DenyRuleExplanation combinedDeniedPrincipal. */
                        public combinedDeniedPrincipal?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation deniedPrincipals. */
                        public deniedPrincipals: { [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching };

                        /** DenyRuleExplanation combinedExceptionPrincipal. */
                        public combinedExceptionPrincipal?: (google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation exceptionPrincipals. */
                        public exceptionPrincipals: { [k: string]: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching };

                        /** DenyRuleExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                        /** DenyRuleExplanation condition. */
                        public condition?: (google.type.IExpr|null);

                        /** DenyRuleExplanation conditionExplanation. */
                        public conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3.IConditionExplanation|null);

                        /**
                         * Creates a new DenyRuleExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DenyRuleExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IDenyRuleExplanation): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation;

                        /**
                         * Encodes the specified DenyRuleExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.verify|verify} messages.
                         * @param message DenyRuleExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IDenyRuleExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DenyRuleExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.verify|verify} messages.
                         * @param message DenyRuleExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IDenyRuleExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DenyRuleExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DenyRuleExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation;

                        /**
                         * Decodes a DenyRuleExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DenyRuleExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation;

                        /**
                         * Verifies a DenyRuleExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DenyRuleExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DenyRuleExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation;

                        /**
                         * Creates a plain object from a DenyRuleExplanation message. Also converts values to other types if specified.
                         * @param message DenyRuleExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DenyRuleExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DenyRuleExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace DenyRuleExplanation {

                        /** Properties of an AnnotatedPermissionMatching. */
                        interface IAnnotatedPermissionMatching {

                            /** AnnotatedPermissionMatching permissionMatchingState */
                            permissionMatchingState?: (google.cloud.policytroubleshooter.iam.v3.PermissionPatternMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3.PermissionPatternMatchingState|null);

                            /** AnnotatedPermissionMatching relevance */
                            relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);
                        }

                        /** Represents an AnnotatedPermissionMatching. */
                        class AnnotatedPermissionMatching implements IAnnotatedPermissionMatching {

                            /**
                             * Constructs a new AnnotatedPermissionMatching.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching);

                            /** AnnotatedPermissionMatching permissionMatchingState. */
                            public permissionMatchingState: (google.cloud.policytroubleshooter.iam.v3.PermissionPatternMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3.PermissionPatternMatchingState);

                            /** AnnotatedPermissionMatching relevance. */
                            public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                            /**
                             * Creates a new AnnotatedPermissionMatching instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnnotatedPermissionMatching instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Encodes the specified AnnotatedPermissionMatching message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching.verify|verify} messages.
                             * @param message AnnotatedPermissionMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnnotatedPermissionMatching message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching.verify|verify} messages.
                             * @param message AnnotatedPermissionMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedPermissionMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnnotatedPermissionMatching message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnnotatedPermissionMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Decodes an AnnotatedPermissionMatching message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnnotatedPermissionMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Verifies an AnnotatedPermissionMatching message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnnotatedPermissionMatching message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnnotatedPermissionMatching
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Creates a plain object from an AnnotatedPermissionMatching message. Also converts values to other types if specified.
                             * @param message AnnotatedPermissionMatching
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedPermissionMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnnotatedPermissionMatching to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnnotatedPermissionMatching
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AnnotatedDenyPrincipalMatching. */
                        interface IAnnotatedDenyPrincipalMatching {

                            /** AnnotatedDenyPrincipalMatching membership */
                            membership?: (google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState|null);

                            /** AnnotatedDenyPrincipalMatching relevance */
                            relevance?: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|null);
                        }

                        /** Represents an AnnotatedDenyPrincipalMatching. */
                        class AnnotatedDenyPrincipalMatching implements IAnnotatedDenyPrincipalMatching {

                            /**
                             * Constructs a new AnnotatedDenyPrincipalMatching.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching);

                            /** AnnotatedDenyPrincipalMatching membership. */
                            public membership: (google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3.MembershipMatchingState);

                            /** AnnotatedDenyPrincipalMatching relevance. */
                            public relevance: (google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3.HeuristicRelevance);

                            /**
                             * Creates a new AnnotatedDenyPrincipalMatching instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnnotatedDenyPrincipalMatching instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Encodes the specified AnnotatedDenyPrincipalMatching message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching.verify|verify} messages.
                             * @param message AnnotatedDenyPrincipalMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnnotatedDenyPrincipalMatching message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching.verify|verify} messages.
                             * @param message AnnotatedDenyPrincipalMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnnotatedDenyPrincipalMatching message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnnotatedDenyPrincipalMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Decodes an AnnotatedDenyPrincipalMatching message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnnotatedDenyPrincipalMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Verifies an AnnotatedDenyPrincipalMatching message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnnotatedDenyPrincipalMatching message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnnotatedDenyPrincipalMatching
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Creates a plain object from an AnnotatedDenyPrincipalMatching message. Also converts values to other types if specified.
                             * @param message AnnotatedDenyPrincipalMatching
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.DenyRuleExplanation.AnnotatedDenyPrincipalMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnnotatedDenyPrincipalMatching to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnnotatedDenyPrincipalMatching
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ConditionExplanation. */
                    interface IConditionExplanation {

                        /** ConditionExplanation value */
                        value?: (google.protobuf.IValue|null);

                        /** ConditionExplanation errors */
                        errors?: (google.rpc.IStatus[]|null);

                        /** ConditionExplanation evaluationStates */
                        evaluationStates?: (google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.IEvaluationState[]|null);
                    }

                    /** Represents a ConditionExplanation. */
                    class ConditionExplanation implements IConditionExplanation {

                        /**
                         * Constructs a new ConditionExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3.IConditionExplanation);

                        /** ConditionExplanation value. */
                        public value?: (google.protobuf.IValue|null);

                        /** ConditionExplanation errors. */
                        public errors: google.rpc.IStatus[];

                        /** ConditionExplanation evaluationStates. */
                        public evaluationStates: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.IEvaluationState[];

                        /**
                         * Creates a new ConditionExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConditionExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3.IConditionExplanation): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation;

                        /**
                         * Encodes the specified ConditionExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.verify|verify} messages.
                         * @param message ConditionExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3.IConditionExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConditionExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.verify|verify} messages.
                         * @param message ConditionExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.IConditionExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConditionExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConditionExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation;

                        /**
                         * Decodes a ConditionExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConditionExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation;

                        /**
                         * Verifies a ConditionExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConditionExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConditionExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation;

                        /**
                         * Creates a plain object from a ConditionExplanation message. Also converts values to other types if specified.
                         * @param message ConditionExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConditionExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConditionExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ConditionExplanation {

                        /** Properties of an EvaluationState. */
                        interface IEvaluationState {

                            /** EvaluationState start */
                            start?: (number|null);

                            /** EvaluationState end */
                            end?: (number|null);

                            /** EvaluationState value */
                            value?: (google.protobuf.IValue|null);

                            /** EvaluationState errors */
                            errors?: (google.rpc.IStatus[]|null);
                        }

                        /** Represents an EvaluationState. */
                        class EvaluationState implements IEvaluationState {

                            /**
                             * Constructs a new EvaluationState.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.IEvaluationState);

                            /** EvaluationState start. */
                            public start: number;

                            /** EvaluationState end. */
                            public end: number;

                            /** EvaluationState value. */
                            public value?: (google.protobuf.IValue|null);

                            /** EvaluationState errors. */
                            public errors: google.rpc.IStatus[];

                            /**
                             * Creates a new EvaluationState instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EvaluationState instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.IEvaluationState): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState;

                            /**
                             * Encodes the specified EvaluationState message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState.verify|verify} messages.
                             * @param message EvaluationState message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.IEvaluationState, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EvaluationState message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState.verify|verify} messages.
                             * @param message EvaluationState message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.IEvaluationState, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EvaluationState message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EvaluationState
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState;

                            /**
                             * Decodes an EvaluationState message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EvaluationState
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState;

                            /**
                             * Verifies an EvaluationState message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EvaluationState message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EvaluationState
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState;

                            /**
                             * Creates a plain object from an EvaluationState message. Also converts values to other types if specified.
                             * @param message EvaluationState
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3.ConditionExplanation.EvaluationState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EvaluationState to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EvaluationState
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Namespace v3beta. */
                namespace v3beta {

                    /** Represents a PolicyTroubleshooter */
                    class PolicyTroubleshooter extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new PolicyTroubleshooter service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new PolicyTroubleshooter service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyTroubleshooter;

                        /**
                         * Calls TroubleshootIamPolicy.
                         * @param request TroubleshootIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TroubleshootIamPolicyResponse
                         */
                        public troubleshootIamPolicy(request: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyRequest, callback: google.cloud.policytroubleshooter.iam.v3beta.PolicyTroubleshooter.TroubleshootIamPolicyCallback): void;

                        /**
                         * Calls TroubleshootIamPolicy.
                         * @param request TroubleshootIamPolicyRequest message or plain object
                         * @returns Promise
                         */
                        public troubleshootIamPolicy(request: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyRequest): Promise<google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse>;
                    }

                    namespace PolicyTroubleshooter {

                        /**
                         * Callback as used by {@link google.cloud.policytroubleshooter.iam.v3beta.PolicyTroubleshooter|troubleshootIamPolicy}.
                         * @param error Error, if any
                         * @param [response] TroubleshootIamPolicyResponse
                         */
                        type TroubleshootIamPolicyCallback = (error: (Error|null), response?: google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse) => void;
                    }

                    /** AllowAccessState enum. */
                    enum AllowAccessState {
                        ALLOW_ACCESS_STATE_UNSPECIFIED = 0,
                        ALLOW_ACCESS_STATE_GRANTED = 1,
                        ALLOW_ACCESS_STATE_NOT_GRANTED = 2,
                        ALLOW_ACCESS_STATE_UNKNOWN_CONDITIONAL = 3,
                        ALLOW_ACCESS_STATE_UNKNOWN_INFO = 4
                    }

                    /** DenyAccessState enum. */
                    enum DenyAccessState {
                        DENY_ACCESS_STATE_UNSPECIFIED = 0,
                        DENY_ACCESS_STATE_DENIED = 1,
                        DENY_ACCESS_STATE_NOT_DENIED = 2,
                        DENY_ACCESS_STATE_UNKNOWN_CONDITIONAL = 3,
                        DENY_ACCESS_STATE_UNKNOWN_INFO = 4
                    }

                    /** RolePermissionInclusionState enum. */
                    enum RolePermissionInclusionState {
                        ROLE_PERMISSION_INCLUSION_STATE_UNSPECIFIED = 0,
                        ROLE_PERMISSION_INCLUDED = 1,
                        ROLE_PERMISSION_NOT_INCLUDED = 2,
                        ROLE_PERMISSION_UNKNOWN_INFO = 3
                    }

                    /** PermissionPatternMatchingState enum. */
                    enum PermissionPatternMatchingState {
                        PERMISSION_PATTERN_MATCHING_STATE_UNSPECIFIED = 0,
                        PERMISSION_PATTERN_MATCHED = 1,
                        PERMISSION_PATTERN_NOT_MATCHED = 2
                    }

                    /** MembershipMatchingState enum. */
                    enum MembershipMatchingState {
                        MEMBERSHIP_MATCHING_STATE_UNSPECIFIED = 0,
                        MEMBERSHIP_MATCHED = 1,
                        MEMBERSHIP_NOT_MATCHED = 2,
                        MEMBERSHIP_UNKNOWN_INFO = 3,
                        MEMBERSHIP_UNKNOWN_UNSUPPORTED = 4
                    }

                    /** HeuristicRelevance enum. */
                    enum HeuristicRelevance {
                        HEURISTIC_RELEVANCE_UNSPECIFIED = 0,
                        HEURISTIC_RELEVANCE_NORMAL = 1,
                        HEURISTIC_RELEVANCE_HIGH = 2
                    }

                    /** Properties of a TroubleshootIamPolicyRequest. */
                    interface ITroubleshootIamPolicyRequest {

                        /** TroubleshootIamPolicyRequest accessTuple */
                        accessTuple?: (google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple|null);
                    }

                    /** Represents a TroubleshootIamPolicyRequest. */
                    class TroubleshootIamPolicyRequest implements ITroubleshootIamPolicyRequest {

                        /**
                         * Constructs a new TroubleshootIamPolicyRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyRequest);

                        /** TroubleshootIamPolicyRequest accessTuple. */
                        public accessTuple?: (google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple|null);

                        /**
                         * Creates a new TroubleshootIamPolicyRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TroubleshootIamPolicyRequest instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyRequest): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest;

                        /**
                         * Encodes the specified TroubleshootIamPolicyRequest message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest.verify|verify} messages.
                         * @param message TroubleshootIamPolicyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TroubleshootIamPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest.verify|verify} messages.
                         * @param message TroubleshootIamPolicyRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TroubleshootIamPolicyRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TroubleshootIamPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest;

                        /**
                         * Decodes a TroubleshootIamPolicyRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TroubleshootIamPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest;

                        /**
                         * Verifies a TroubleshootIamPolicyRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TroubleshootIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TroubleshootIamPolicyRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest;

                        /**
                         * Creates a plain object from a TroubleshootIamPolicyRequest message. Also converts values to other types if specified.
                         * @param message TroubleshootIamPolicyRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TroubleshootIamPolicyRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TroubleshootIamPolicyRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TroubleshootIamPolicyResponse. */
                    interface ITroubleshootIamPolicyResponse {

                        /** TroubleshootIamPolicyResponse overallAccessState */
                        overallAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse.OverallAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse.OverallAccessState|null);

                        /** TroubleshootIamPolicyResponse accessTuple */
                        accessTuple?: (google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple|null);

                        /** TroubleshootIamPolicyResponse allowPolicyExplanation */
                        allowPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IAllowPolicyExplanation|null);

                        /** TroubleshootIamPolicyResponse denyPolicyExplanation */
                        denyPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IDenyPolicyExplanation|null);
                    }

                    /** Represents a TroubleshootIamPolicyResponse. */
                    class TroubleshootIamPolicyResponse implements ITroubleshootIamPolicyResponse {

                        /**
                         * Constructs a new TroubleshootIamPolicyResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyResponse);

                        /** TroubleshootIamPolicyResponse overallAccessState. */
                        public overallAccessState: (google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse.OverallAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse.OverallAccessState);

                        /** TroubleshootIamPolicyResponse accessTuple. */
                        public accessTuple?: (google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple|null);

                        /** TroubleshootIamPolicyResponse allowPolicyExplanation. */
                        public allowPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IAllowPolicyExplanation|null);

                        /** TroubleshootIamPolicyResponse denyPolicyExplanation. */
                        public denyPolicyExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IDenyPolicyExplanation|null);

                        /**
                         * Creates a new TroubleshootIamPolicyResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TroubleshootIamPolicyResponse instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyResponse): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse;

                        /**
                         * Encodes the specified TroubleshootIamPolicyResponse message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse.verify|verify} messages.
                         * @param message TroubleshootIamPolicyResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TroubleshootIamPolicyResponse message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse.verify|verify} messages.
                         * @param message TroubleshootIamPolicyResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ITroubleshootIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TroubleshootIamPolicyResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TroubleshootIamPolicyResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse;

                        /**
                         * Decodes a TroubleshootIamPolicyResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TroubleshootIamPolicyResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse;

                        /**
                         * Verifies a TroubleshootIamPolicyResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TroubleshootIamPolicyResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TroubleshootIamPolicyResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse;

                        /**
                         * Creates a plain object from a TroubleshootIamPolicyResponse message. Also converts values to other types if specified.
                         * @param message TroubleshootIamPolicyResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.TroubleshootIamPolicyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TroubleshootIamPolicyResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TroubleshootIamPolicyResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TroubleshootIamPolicyResponse {

                        /** OverallAccessState enum. */
                        enum OverallAccessState {
                            OVERALL_ACCESS_STATE_UNSPECIFIED = 0,
                            CAN_ACCESS = 1,
                            CANNOT_ACCESS = 2,
                            UNKNOWN_INFO = 3,
                            UNKNOWN_CONDITIONAL = 4
                        }
                    }

                    /** Properties of an AccessTuple. */
                    interface IAccessTuple {

                        /** AccessTuple principal */
                        principal?: (string|null);

                        /** AccessTuple fullResourceName */
                        fullResourceName?: (string|null);

                        /** AccessTuple permission */
                        permission?: (string|null);

                        /** AccessTuple permissionFqdn */
                        permissionFqdn?: (string|null);

                        /** AccessTuple conditionContext */
                        conditionContext?: (google.cloud.policytroubleshooter.iam.v3beta.IConditionContext|null);
                    }

                    /** Represents an AccessTuple. */
                    class AccessTuple implements IAccessTuple {

                        /**
                         * Constructs a new AccessTuple.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple);

                        /** AccessTuple principal. */
                        public principal: string;

                        /** AccessTuple fullResourceName. */
                        public fullResourceName: string;

                        /** AccessTuple permission. */
                        public permission: string;

                        /** AccessTuple permissionFqdn. */
                        public permissionFqdn: string;

                        /** AccessTuple conditionContext. */
                        public conditionContext?: (google.cloud.policytroubleshooter.iam.v3beta.IConditionContext|null);

                        /**
                         * Creates a new AccessTuple instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccessTuple instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple): google.cloud.policytroubleshooter.iam.v3beta.AccessTuple;

                        /**
                         * Encodes the specified AccessTuple message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AccessTuple.verify|verify} messages.
                         * @param message AccessTuple message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccessTuple message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AccessTuple.verify|verify} messages.
                         * @param message AccessTuple message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccessTuple message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccessTuple
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.AccessTuple;

                        /**
                         * Decodes an AccessTuple message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccessTuple
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.AccessTuple;

                        /**
                         * Verifies an AccessTuple message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccessTuple message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccessTuple
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.AccessTuple;

                        /**
                         * Creates a plain object from an AccessTuple message. Also converts values to other types if specified.
                         * @param message AccessTuple
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.AccessTuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccessTuple to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AccessTuple
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ConditionContext. */
                    interface IConditionContext {

                        /** ConditionContext resource */
                        resource?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IResource|null);

                        /** ConditionContext destination */
                        destination?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IPeer|null);

                        /** ConditionContext request */
                        request?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IRequest|null);

                        /** ConditionContext effectiveTags */
                        effectiveTags?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IEffectiveTag[]|null);
                    }

                    /** Represents a ConditionContext. */
                    class ConditionContext implements IConditionContext {

                        /**
                         * Constructs a new ConditionContext.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IConditionContext);

                        /** ConditionContext resource. */
                        public resource?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IResource|null);

                        /** ConditionContext destination. */
                        public destination?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IPeer|null);

                        /** ConditionContext request. */
                        public request?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IRequest|null);

                        /** ConditionContext effectiveTags. */
                        public effectiveTags: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IEffectiveTag[];

                        /**
                         * Creates a new ConditionContext instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConditionContext instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IConditionContext): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext;

                        /**
                         * Encodes the specified ConditionContext message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.verify|verify} messages.
                         * @param message ConditionContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IConditionContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConditionContext message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.verify|verify} messages.
                         * @param message ConditionContext message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IConditionContext, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConditionContext message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConditionContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext;

                        /**
                         * Decodes a ConditionContext message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConditionContext
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext;

                        /**
                         * Verifies a ConditionContext message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConditionContext message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConditionContext
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext;

                        /**
                         * Creates a plain object from a ConditionContext message. Also converts values to other types if specified.
                         * @param message ConditionContext
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConditionContext to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConditionContext
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ConditionContext {

                        /** Properties of a Resource. */
                        interface IResource {

                            /** Resource service */
                            service?: (string|null);

                            /** Resource name */
                            name?: (string|null);

                            /** Resource type */
                            type?: (string|null);
                        }

                        /** Represents a Resource. */
                        class Resource implements IResource {

                            /**
                             * Constructs a new Resource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IResource);

                            /** Resource service. */
                            public service: string;

                            /** Resource name. */
                            public name: string;

                            /** Resource type. */
                            public type: string;

                            /**
                             * Creates a new Resource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Resource instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IResource): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource;

                            /**
                             * Encodes the specified Resource message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource.verify|verify} messages.
                             * @param message Resource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource.verify|verify} messages.
                             * @param message Resource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Resource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Resource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource;

                            /**
                             * Decodes a Resource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Resource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource;

                            /**
                             * Creates a plain object from a Resource message. Also converts values to other types if specified.
                             * @param message Resource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        /** Properties of a Peer. */
                        interface IPeer {

                            /** Peer ip */
                            ip?: (string|null);

                            /** Peer port */
                            port?: (number|Long|string|null);
                        }

                        /** Represents a Peer. */
                        class Peer implements IPeer {

                            /**
                             * Constructs a new Peer.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IPeer);

                            /** Peer ip. */
                            public ip: string;

                            /** Peer port. */
                            public port: (number|Long|string);

                            /**
                             * Creates a new Peer instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Peer instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IPeer): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer;

                            /**
                             * Encodes the specified Peer message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer.verify|verify} messages.
                             * @param message Peer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Peer message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer.verify|verify} messages.
                             * @param message Peer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Peer message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Peer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer;

                            /**
                             * Decodes a Peer message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Peer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer;

                            /**
                             * Verifies a Peer message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Peer message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Peer
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer;

                            /**
                             * Creates a plain object from a Peer message. Also converts values to other types if specified.
                             * @param message Peer
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Peer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Peer to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Peer
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Request. */
                        interface IRequest {

                            /** Request receiveTime */
                            receiveTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a Request. */
                        class Request implements IRequest {

                            /**
                             * Constructs a new Request.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IRequest);

                            /** Request receiveTime. */
                            public receiveTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new Request instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Request instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IRequest): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request;

                            /**
                             * Encodes the specified Request message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request.verify|verify} messages.
                             * @param message Request message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Request message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request.verify|verify} messages.
                             * @param message Request message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Request message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Request
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request;

                            /**
                             * Decodes a Request message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Request
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request;

                            /**
                             * Verifies a Request message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Request message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Request
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request;

                            /**
                             * Creates a plain object from a Request message. Also converts values to other types if specified.
                             * @param message Request
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Request to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Request
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an EffectiveTag. */
                        interface IEffectiveTag {

                            /** EffectiveTag tagValue */
                            tagValue?: (string|null);

                            /** EffectiveTag namespacedTagValue */
                            namespacedTagValue?: (string|null);

                            /** EffectiveTag tagKey */
                            tagKey?: (string|null);

                            /** EffectiveTag namespacedTagKey */
                            namespacedTagKey?: (string|null);

                            /** EffectiveTag tagKeyParentName */
                            tagKeyParentName?: (string|null);

                            /** EffectiveTag inherited */
                            inherited?: (boolean|null);
                        }

                        /** Represents an EffectiveTag. */
                        class EffectiveTag implements IEffectiveTag {

                            /**
                             * Constructs a new EffectiveTag.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IEffectiveTag);

                            /** EffectiveTag tagValue. */
                            public tagValue: string;

                            /** EffectiveTag namespacedTagValue. */
                            public namespacedTagValue: string;

                            /** EffectiveTag tagKey. */
                            public tagKey: string;

                            /** EffectiveTag namespacedTagKey. */
                            public namespacedTagKey: string;

                            /** EffectiveTag tagKeyParentName. */
                            public tagKeyParentName: string;

                            /** EffectiveTag inherited. */
                            public inherited: boolean;

                            /**
                             * Creates a new EffectiveTag instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EffectiveTag instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IEffectiveTag): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag;

                            /**
                             * Encodes the specified EffectiveTag message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag.verify|verify} messages.
                             * @param message EffectiveTag message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IEffectiveTag, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EffectiveTag message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag.verify|verify} messages.
                             * @param message EffectiveTag message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.IEffectiveTag, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EffectiveTag message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EffectiveTag
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag;

                            /**
                             * Decodes an EffectiveTag message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EffectiveTag
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag;

                            /**
                             * Verifies an EffectiveTag message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EffectiveTag message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EffectiveTag
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag;

                            /**
                             * Creates a plain object from an EffectiveTag message. Also converts values to other types if specified.
                             * @param message EffectiveTag
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionContext.EffectiveTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EffectiveTag to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EffectiveTag
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an AllowPolicyExplanation. */
                    interface IAllowPolicyExplanation {

                        /** AllowPolicyExplanation allowAccessState */
                        allowAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|null);

                        /** AllowPolicyExplanation explainedPolicies */
                        explainedPolicies?: (google.cloud.policytroubleshooter.iam.v3beta.IExplainedAllowPolicy[]|null);

                        /** AllowPolicyExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);
                    }

                    /** Represents an AllowPolicyExplanation. */
                    class AllowPolicyExplanation implements IAllowPolicyExplanation {

                        /**
                         * Constructs a new AllowPolicyExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IAllowPolicyExplanation);

                        /** AllowPolicyExplanation allowAccessState. */
                        public allowAccessState: (google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState);

                        /** AllowPolicyExplanation explainedPolicies. */
                        public explainedPolicies: google.cloud.policytroubleshooter.iam.v3beta.IExplainedAllowPolicy[];

                        /** AllowPolicyExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /**
                         * Creates a new AllowPolicyExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllowPolicyExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IAllowPolicyExplanation): google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation;

                        /**
                         * Encodes the specified AllowPolicyExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation.verify|verify} messages.
                         * @param message AllowPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IAllowPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllowPolicyExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation.verify|verify} messages.
                         * @param message AllowPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IAllowPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllowPolicyExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllowPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation;

                        /**
                         * Decodes an AllowPolicyExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllowPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation;

                        /**
                         * Verifies an AllowPolicyExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllowPolicyExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllowPolicyExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation;

                        /**
                         * Creates a plain object from an AllowPolicyExplanation message. Also converts values to other types if specified.
                         * @param message AllowPolicyExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.AllowPolicyExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllowPolicyExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllowPolicyExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExplainedAllowPolicy. */
                    interface IExplainedAllowPolicy {

                        /** ExplainedAllowPolicy allowAccessState */
                        allowAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|null);

                        /** ExplainedAllowPolicy fullResourceName */
                        fullResourceName?: (string|null);

                        /** ExplainedAllowPolicy bindingExplanations */
                        bindingExplanations?: (google.cloud.policytroubleshooter.iam.v3beta.IAllowBindingExplanation[]|null);

                        /** ExplainedAllowPolicy relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);

                        /** ExplainedAllowPolicy policy */
                        policy?: (google.iam.v1.IPolicy|null);
                    }

                    /** Represents an ExplainedAllowPolicy. */
                    class ExplainedAllowPolicy implements IExplainedAllowPolicy {

                        /**
                         * Constructs a new ExplainedAllowPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IExplainedAllowPolicy);

                        /** ExplainedAllowPolicy allowAccessState. */
                        public allowAccessState: (google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState);

                        /** ExplainedAllowPolicy fullResourceName. */
                        public fullResourceName: string;

                        /** ExplainedAllowPolicy bindingExplanations. */
                        public bindingExplanations: google.cloud.policytroubleshooter.iam.v3beta.IAllowBindingExplanation[];

                        /** ExplainedAllowPolicy relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /** ExplainedAllowPolicy policy. */
                        public policy?: (google.iam.v1.IPolicy|null);

                        /**
                         * Creates a new ExplainedAllowPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExplainedAllowPolicy instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IExplainedAllowPolicy): google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy;

                        /**
                         * Encodes the specified ExplainedAllowPolicy message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy.verify|verify} messages.
                         * @param message ExplainedAllowPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IExplainedAllowPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExplainedAllowPolicy message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy.verify|verify} messages.
                         * @param message ExplainedAllowPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IExplainedAllowPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExplainedAllowPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExplainedAllowPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy;

                        /**
                         * Decodes an ExplainedAllowPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExplainedAllowPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy;

                        /**
                         * Verifies an ExplainedAllowPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExplainedAllowPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExplainedAllowPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy;

                        /**
                         * Creates a plain object from an ExplainedAllowPolicy message. Also converts values to other types if specified.
                         * @param message ExplainedAllowPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ExplainedAllowPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExplainedAllowPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExplainedAllowPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AllowBindingExplanation. */
                    interface IAllowBindingExplanation {

                        /** AllowBindingExplanation allowAccessState */
                        allowAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|null);

                        /** AllowBindingExplanation role */
                        role?: (string|null);

                        /** AllowBindingExplanation rolePermission */
                        rolePermission?: (google.cloud.policytroubleshooter.iam.v3beta.RolePermissionInclusionState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.RolePermissionInclusionState|null);

                        /** AllowBindingExplanation rolePermissionRelevance */
                        rolePermissionRelevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);

                        /** AllowBindingExplanation combinedMembership */
                        combinedMembership?: (google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership|null);

                        /** AllowBindingExplanation memberships */
                        memberships?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership }|null);

                        /** AllowBindingExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);

                        /** AllowBindingExplanation condition */
                        condition?: (google.type.IExpr|null);

                        /** AllowBindingExplanation conditionExplanation */
                        conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation|null);
                    }

                    /** Represents an AllowBindingExplanation. */
                    class AllowBindingExplanation implements IAllowBindingExplanation {

                        /**
                         * Constructs a new AllowBindingExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IAllowBindingExplanation);

                        /** AllowBindingExplanation allowAccessState. */
                        public allowAccessState: (google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.AllowAccessState);

                        /** AllowBindingExplanation role. */
                        public role: string;

                        /** AllowBindingExplanation rolePermission. */
                        public rolePermission: (google.cloud.policytroubleshooter.iam.v3beta.RolePermissionInclusionState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.RolePermissionInclusionState);

                        /** AllowBindingExplanation rolePermissionRelevance. */
                        public rolePermissionRelevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /** AllowBindingExplanation combinedMembership. */
                        public combinedMembership?: (google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership|null);

                        /** AllowBindingExplanation memberships. */
                        public memberships: { [k: string]: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership };

                        /** AllowBindingExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /** AllowBindingExplanation condition. */
                        public condition?: (google.type.IExpr|null);

                        /** AllowBindingExplanation conditionExplanation. */
                        public conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation|null);

                        /**
                         * Creates a new AllowBindingExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllowBindingExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IAllowBindingExplanation): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation;

                        /**
                         * Encodes the specified AllowBindingExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.verify|verify} messages.
                         * @param message AllowBindingExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IAllowBindingExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllowBindingExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.verify|verify} messages.
                         * @param message AllowBindingExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IAllowBindingExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllowBindingExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllowBindingExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation;

                        /**
                         * Decodes an AllowBindingExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllowBindingExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation;

                        /**
                         * Verifies an AllowBindingExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllowBindingExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllowBindingExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation;

                        /**
                         * Creates a plain object from an AllowBindingExplanation message. Also converts values to other types if specified.
                         * @param message AllowBindingExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllowBindingExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllowBindingExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AllowBindingExplanation {

                        /** Properties of an AnnotatedAllowMembership. */
                        interface IAnnotatedAllowMembership {

                            /** AnnotatedAllowMembership membership */
                            membership?: (google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState|null);

                            /** AnnotatedAllowMembership relevance */
                            relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);
                        }

                        /** Represents an AnnotatedAllowMembership. */
                        class AnnotatedAllowMembership implements IAnnotatedAllowMembership {

                            /**
                             * Constructs a new AnnotatedAllowMembership.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership);

                            /** AnnotatedAllowMembership membership. */
                            public membership: (google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState);

                            /** AnnotatedAllowMembership relevance. */
                            public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                            /**
                             * Creates a new AnnotatedAllowMembership instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnnotatedAllowMembership instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Encodes the specified AnnotatedAllowMembership message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership.verify|verify} messages.
                             * @param message AnnotatedAllowMembership message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnnotatedAllowMembership message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership.verify|verify} messages.
                             * @param message AnnotatedAllowMembership message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.IAnnotatedAllowMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnnotatedAllowMembership message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnnotatedAllowMembership
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Decodes an AnnotatedAllowMembership message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnnotatedAllowMembership
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Verifies an AnnotatedAllowMembership message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnnotatedAllowMembership message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnnotatedAllowMembership
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership;

                            /**
                             * Creates a plain object from an AnnotatedAllowMembership message. Also converts values to other types if specified.
                             * @param message AnnotatedAllowMembership
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.AllowBindingExplanation.AnnotatedAllowMembership, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnnotatedAllowMembership to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnnotatedAllowMembership
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a DenyPolicyExplanation. */
                    interface IDenyPolicyExplanation {

                        /** DenyPolicyExplanation denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|null);

                        /** DenyPolicyExplanation explainedResources */
                        explainedResources?: (google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyResource[]|null);

                        /** DenyPolicyExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);

                        /** DenyPolicyExplanation permissionDeniable */
                        permissionDeniable?: (boolean|null);
                    }

                    /** Represents a DenyPolicyExplanation. */
                    class DenyPolicyExplanation implements IDenyPolicyExplanation {

                        /**
                         * Constructs a new DenyPolicyExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IDenyPolicyExplanation);

                        /** DenyPolicyExplanation denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState);

                        /** DenyPolicyExplanation explainedResources. */
                        public explainedResources: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyResource[];

                        /** DenyPolicyExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /** DenyPolicyExplanation permissionDeniable. */
                        public permissionDeniable: boolean;

                        /**
                         * Creates a new DenyPolicyExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DenyPolicyExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IDenyPolicyExplanation): google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation;

                        /**
                         * Encodes the specified DenyPolicyExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation.verify|verify} messages.
                         * @param message DenyPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IDenyPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DenyPolicyExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation.verify|verify} messages.
                         * @param message DenyPolicyExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IDenyPolicyExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DenyPolicyExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DenyPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation;

                        /**
                         * Decodes a DenyPolicyExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DenyPolicyExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation;

                        /**
                         * Verifies a DenyPolicyExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DenyPolicyExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DenyPolicyExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation;

                        /**
                         * Creates a plain object from a DenyPolicyExplanation message. Also converts values to other types if specified.
                         * @param message DenyPolicyExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.DenyPolicyExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DenyPolicyExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DenyPolicyExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExplainedDenyResource. */
                    interface IExplainedDenyResource {

                        /** ExplainedDenyResource denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|null);

                        /** ExplainedDenyResource fullResourceName */
                        fullResourceName?: (string|null);

                        /** ExplainedDenyResource explainedPolicies */
                        explainedPolicies?: (google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyPolicy[]|null);

                        /** ExplainedDenyResource relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);
                    }

                    /** Represents an ExplainedDenyResource. */
                    class ExplainedDenyResource implements IExplainedDenyResource {

                        /**
                         * Constructs a new ExplainedDenyResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyResource);

                        /** ExplainedDenyResource denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState);

                        /** ExplainedDenyResource fullResourceName. */
                        public fullResourceName: string;

                        /** ExplainedDenyResource explainedPolicies. */
                        public explainedPolicies: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyPolicy[];

                        /** ExplainedDenyResource relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /**
                         * Creates a new ExplainedDenyResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExplainedDenyResource instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyResource): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource;

                        /**
                         * Encodes the specified ExplainedDenyResource message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource.verify|verify} messages.
                         * @param message ExplainedDenyResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExplainedDenyResource message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource.verify|verify} messages.
                         * @param message ExplainedDenyResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExplainedDenyResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExplainedDenyResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource;

                        /**
                         * Decodes an ExplainedDenyResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExplainedDenyResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource;

                        /**
                         * Verifies an ExplainedDenyResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExplainedDenyResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExplainedDenyResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource;

                        /**
                         * Creates a plain object from an ExplainedDenyResource message. Also converts values to other types if specified.
                         * @param message ExplainedDenyResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExplainedDenyResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExplainedDenyResource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ExplainedDenyPolicy. */
                    interface IExplainedDenyPolicy {

                        /** ExplainedDenyPolicy denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|null);

                        /** ExplainedDenyPolicy policy */
                        policy?: (google.iam.v2.IPolicy|null);

                        /** ExplainedDenyPolicy ruleExplanations */
                        ruleExplanations?: (google.cloud.policytroubleshooter.iam.v3beta.IDenyRuleExplanation[]|null);

                        /** ExplainedDenyPolicy relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);
                    }

                    /** Represents an ExplainedDenyPolicy. */
                    class ExplainedDenyPolicy implements IExplainedDenyPolicy {

                        /**
                         * Constructs a new ExplainedDenyPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyPolicy);

                        /** ExplainedDenyPolicy denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState);

                        /** ExplainedDenyPolicy policy. */
                        public policy?: (google.iam.v2.IPolicy|null);

                        /** ExplainedDenyPolicy ruleExplanations. */
                        public ruleExplanations: google.cloud.policytroubleshooter.iam.v3beta.IDenyRuleExplanation[];

                        /** ExplainedDenyPolicy relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /**
                         * Creates a new ExplainedDenyPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExplainedDenyPolicy instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyPolicy): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy;

                        /**
                         * Encodes the specified ExplainedDenyPolicy message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy.verify|verify} messages.
                         * @param message ExplainedDenyPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExplainedDenyPolicy message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy.verify|verify} messages.
                         * @param message ExplainedDenyPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IExplainedDenyPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExplainedDenyPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExplainedDenyPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy;

                        /**
                         * Decodes an ExplainedDenyPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExplainedDenyPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy;

                        /**
                         * Verifies an ExplainedDenyPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExplainedDenyPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExplainedDenyPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy;

                        /**
                         * Creates a plain object from an ExplainedDenyPolicy message. Also converts values to other types if specified.
                         * @param message ExplainedDenyPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ExplainedDenyPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExplainedDenyPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExplainedDenyPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DenyRuleExplanation. */
                    interface IDenyRuleExplanation {

                        /** DenyRuleExplanation denyAccessState */
                        denyAccessState?: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|null);

                        /** DenyRuleExplanation combinedDeniedPermission */
                        combinedDeniedPermission?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation deniedPermissions */
                        deniedPermissions?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching }|null);

                        /** DenyRuleExplanation combinedExceptionPermission */
                        combinedExceptionPermission?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation exceptionPermissions */
                        exceptionPermissions?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching }|null);

                        /** DenyRuleExplanation combinedDeniedPrincipal */
                        combinedDeniedPrincipal?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation deniedPrincipals */
                        deniedPrincipals?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching }|null);

                        /** DenyRuleExplanation combinedExceptionPrincipal */
                        combinedExceptionPrincipal?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation exceptionPrincipals */
                        exceptionPrincipals?: ({ [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching }|null);

                        /** DenyRuleExplanation relevance */
                        relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);

                        /** DenyRuleExplanation condition */
                        condition?: (google.type.IExpr|null);

                        /** DenyRuleExplanation conditionExplanation */
                        conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation|null);
                    }

                    /** Represents a DenyRuleExplanation. */
                    class DenyRuleExplanation implements IDenyRuleExplanation {

                        /**
                         * Constructs a new DenyRuleExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IDenyRuleExplanation);

                        /** DenyRuleExplanation denyAccessState. */
                        public denyAccessState: (google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.DenyAccessState);

                        /** DenyRuleExplanation combinedDeniedPermission. */
                        public combinedDeniedPermission?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation deniedPermissions. */
                        public deniedPermissions: { [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching };

                        /** DenyRuleExplanation combinedExceptionPermission. */
                        public combinedExceptionPermission?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching|null);

                        /** DenyRuleExplanation exceptionPermissions. */
                        public exceptionPermissions: { [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching };

                        /** DenyRuleExplanation combinedDeniedPrincipal. */
                        public combinedDeniedPrincipal?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation deniedPrincipals. */
                        public deniedPrincipals: { [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching };

                        /** DenyRuleExplanation combinedExceptionPrincipal. */
                        public combinedExceptionPrincipal?: (google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching|null);

                        /** DenyRuleExplanation exceptionPrincipals. */
                        public exceptionPrincipals: { [k: string]: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching };

                        /** DenyRuleExplanation relevance. */
                        public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                        /** DenyRuleExplanation condition. */
                        public condition?: (google.type.IExpr|null);

                        /** DenyRuleExplanation conditionExplanation. */
                        public conditionExplanation?: (google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation|null);

                        /**
                         * Creates a new DenyRuleExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DenyRuleExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IDenyRuleExplanation): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation;

                        /**
                         * Encodes the specified DenyRuleExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.verify|verify} messages.
                         * @param message DenyRuleExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IDenyRuleExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DenyRuleExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.verify|verify} messages.
                         * @param message DenyRuleExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IDenyRuleExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DenyRuleExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DenyRuleExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation;

                        /**
                         * Decodes a DenyRuleExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DenyRuleExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation;

                        /**
                         * Verifies a DenyRuleExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DenyRuleExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DenyRuleExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation;

                        /**
                         * Creates a plain object from a DenyRuleExplanation message. Also converts values to other types if specified.
                         * @param message DenyRuleExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DenyRuleExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DenyRuleExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace DenyRuleExplanation {

                        /** Properties of an AnnotatedPermissionMatching. */
                        interface IAnnotatedPermissionMatching {

                            /** AnnotatedPermissionMatching permissionMatchingState */
                            permissionMatchingState?: (google.cloud.policytroubleshooter.iam.v3beta.PermissionPatternMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.PermissionPatternMatchingState|null);

                            /** AnnotatedPermissionMatching relevance */
                            relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);
                        }

                        /** Represents an AnnotatedPermissionMatching. */
                        class AnnotatedPermissionMatching implements IAnnotatedPermissionMatching {

                            /**
                             * Constructs a new AnnotatedPermissionMatching.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching);

                            /** AnnotatedPermissionMatching permissionMatchingState. */
                            public permissionMatchingState: (google.cloud.policytroubleshooter.iam.v3beta.PermissionPatternMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.PermissionPatternMatchingState);

                            /** AnnotatedPermissionMatching relevance. */
                            public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                            /**
                             * Creates a new AnnotatedPermissionMatching instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnnotatedPermissionMatching instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Encodes the specified AnnotatedPermissionMatching message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching.verify|verify} messages.
                             * @param message AnnotatedPermissionMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnnotatedPermissionMatching message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching.verify|verify} messages.
                             * @param message AnnotatedPermissionMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedPermissionMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnnotatedPermissionMatching message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnnotatedPermissionMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Decodes an AnnotatedPermissionMatching message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnnotatedPermissionMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Verifies an AnnotatedPermissionMatching message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnnotatedPermissionMatching message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnnotatedPermissionMatching
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching;

                            /**
                             * Creates a plain object from an AnnotatedPermissionMatching message. Also converts values to other types if specified.
                             * @param message AnnotatedPermissionMatching
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedPermissionMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnnotatedPermissionMatching to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnnotatedPermissionMatching
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AnnotatedDenyPrincipalMatching. */
                        interface IAnnotatedDenyPrincipalMatching {

                            /** AnnotatedDenyPrincipalMatching membership */
                            membership?: (google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState|null);

                            /** AnnotatedDenyPrincipalMatching relevance */
                            relevance?: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|null);
                        }

                        /** Represents an AnnotatedDenyPrincipalMatching. */
                        class AnnotatedDenyPrincipalMatching implements IAnnotatedDenyPrincipalMatching {

                            /**
                             * Constructs a new AnnotatedDenyPrincipalMatching.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching);

                            /** AnnotatedDenyPrincipalMatching membership. */
                            public membership: (google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.MembershipMatchingState);

                            /** AnnotatedDenyPrincipalMatching relevance. */
                            public relevance: (google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance|keyof typeof google.cloud.policytroubleshooter.iam.v3beta.HeuristicRelevance);

                            /**
                             * Creates a new AnnotatedDenyPrincipalMatching instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnnotatedDenyPrincipalMatching instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Encodes the specified AnnotatedDenyPrincipalMatching message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching.verify|verify} messages.
                             * @param message AnnotatedDenyPrincipalMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnnotatedDenyPrincipalMatching message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching.verify|verify} messages.
                             * @param message AnnotatedDenyPrincipalMatching message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.IAnnotatedDenyPrincipalMatching, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnnotatedDenyPrincipalMatching message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnnotatedDenyPrincipalMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Decodes an AnnotatedDenyPrincipalMatching message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnnotatedDenyPrincipalMatching
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Verifies an AnnotatedDenyPrincipalMatching message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnnotatedDenyPrincipalMatching message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnnotatedDenyPrincipalMatching
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching;

                            /**
                             * Creates a plain object from an AnnotatedDenyPrincipalMatching message. Also converts values to other types if specified.
                             * @param message AnnotatedDenyPrincipalMatching
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.DenyRuleExplanation.AnnotatedDenyPrincipalMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnnotatedDenyPrincipalMatching to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnnotatedDenyPrincipalMatching
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ConditionExplanation. */
                    interface IConditionExplanation {

                        /** ConditionExplanation value */
                        value?: (google.protobuf.IValue|null);

                        /** ConditionExplanation errors */
                        errors?: (google.rpc.IStatus[]|null);

                        /** ConditionExplanation evaluationStates */
                        evaluationStates?: (google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.IEvaluationState[]|null);
                    }

                    /** Represents a ConditionExplanation. */
                    class ConditionExplanation implements IConditionExplanation {

                        /**
                         * Constructs a new ConditionExplanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation);

                        /** ConditionExplanation value. */
                        public value?: (google.protobuf.IValue|null);

                        /** ConditionExplanation errors. */
                        public errors: google.rpc.IStatus[];

                        /** ConditionExplanation evaluationStates. */
                        public evaluationStates: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.IEvaluationState[];

                        /**
                         * Creates a new ConditionExplanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConditionExplanation instance
                         */
                        public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation;

                        /**
                         * Encodes the specified ConditionExplanation message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.verify|verify} messages.
                         * @param message ConditionExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConditionExplanation message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.verify|verify} messages.
                         * @param message ConditionExplanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.IConditionExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConditionExplanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConditionExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation;

                        /**
                         * Decodes a ConditionExplanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConditionExplanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation;

                        /**
                         * Verifies a ConditionExplanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConditionExplanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConditionExplanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation;

                        /**
                         * Creates a plain object from a ConditionExplanation message. Also converts values to other types if specified.
                         * @param message ConditionExplanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConditionExplanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConditionExplanation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ConditionExplanation {

                        /** Properties of an EvaluationState. */
                        interface IEvaluationState {

                            /** EvaluationState start */
                            start?: (number|null);

                            /** EvaluationState end */
                            end?: (number|null);

                            /** EvaluationState value */
                            value?: (google.protobuf.IValue|null);

                            /** EvaluationState errors */
                            errors?: (google.rpc.IStatus[]|null);
                        }

                        /** Represents an EvaluationState. */
                        class EvaluationState implements IEvaluationState {

                            /**
                             * Constructs a new EvaluationState.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.IEvaluationState);

                            /** EvaluationState start. */
                            public start: number;

                            /** EvaluationState end. */
                            public end: number;

                            /** EvaluationState value. */
                            public value?: (google.protobuf.IValue|null);

                            /** EvaluationState errors. */
                            public errors: google.rpc.IStatus[];

                            /**
                             * Creates a new EvaluationState instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EvaluationState instance
                             */
                            public static create(properties?: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.IEvaluationState): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState;

                            /**
                             * Encodes the specified EvaluationState message. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState.verify|verify} messages.
                             * @param message EvaluationState message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.IEvaluationState, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EvaluationState message, length delimited. Does not implicitly {@link google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState.verify|verify} messages.
                             * @param message EvaluationState message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.IEvaluationState, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EvaluationState message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EvaluationState
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState;

                            /**
                             * Decodes an EvaluationState message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EvaluationState
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState;

                            /**
                             * Verifies an EvaluationState message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EvaluationState message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EvaluationState
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState;

                            /**
                             * Creates a plain object from an EvaluationState message. Also converts values to other types if specified.
                             * @param message EvaluationState
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.policytroubleshooter.iam.v3beta.ConditionExplanation.EvaluationState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EvaluationState to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EvaluationState
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

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
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

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|Buffer|string|null);
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
                public etag: (Uint8Array|Buffer|string);

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

        /** Namespace v2. */
        namespace v2 {

            /** Represents a Policies */
            class Policies extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Policies service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Policies service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Policies;

                /**
                 * Calls ListPolicies.
                 * @param request ListPoliciesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPoliciesResponse
                 */
                public listPolicies(request: google.iam.v2.IListPoliciesRequest, callback: google.iam.v2.Policies.ListPoliciesCallback): void;

                /**
                 * Calls ListPolicies.
                 * @param request ListPoliciesRequest message or plain object
                 * @returns Promise
                 */
                public listPolicies(request: google.iam.v2.IListPoliciesRequest): Promise<google.iam.v2.ListPoliciesResponse>;

                /**
                 * Calls GetPolicy.
                 * @param request GetPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getPolicy(request: google.iam.v2.IGetPolicyRequest, callback: google.iam.v2.Policies.GetPolicyCallback): void;

                /**
                 * Calls GetPolicy.
                 * @param request GetPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getPolicy(request: google.iam.v2.IGetPolicyRequest): Promise<google.iam.v2.Policy>;

                /**
                 * Calls CreatePolicy.
                 * @param request CreatePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPolicy(request: google.iam.v2.ICreatePolicyRequest, callback: google.iam.v2.Policies.CreatePolicyCallback): void;

                /**
                 * Calls CreatePolicy.
                 * @param request CreatePolicyRequest message or plain object
                 * @returns Promise
                 */
                public createPolicy(request: google.iam.v2.ICreatePolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdatePolicy.
                 * @param request UpdatePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePolicy(request: google.iam.v2.IUpdatePolicyRequest, callback: google.iam.v2.Policies.UpdatePolicyCallback): void;

                /**
                 * Calls UpdatePolicy.
                 * @param request UpdatePolicyRequest message or plain object
                 * @returns Promise
                 */
                public updatePolicy(request: google.iam.v2.IUpdatePolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePolicy.
                 * @param request DeletePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePolicy(request: google.iam.v2.IDeletePolicyRequest, callback: google.iam.v2.Policies.DeletePolicyCallback): void;

                /**
                 * Calls DeletePolicy.
                 * @param request DeletePolicyRequest message or plain object
                 * @returns Promise
                 */
                public deletePolicy(request: google.iam.v2.IDeletePolicyRequest): Promise<google.longrunning.Operation>;
            }

            namespace Policies {

                /**
                 * Callback as used by {@link google.iam.v2.Policies|listPolicies}.
                 * @param error Error, if any
                 * @param [response] ListPoliciesResponse
                 */
                type ListPoliciesCallback = (error: (Error|null), response?: google.iam.v2.ListPoliciesResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|getPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetPolicyCallback = (error: (Error|null), response?: google.iam.v2.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|createPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|updatePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|deletePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy name */
                name?: (string|null);

                /** Policy uid */
                uid?: (string|null);

                /** Policy kind */
                kind?: (string|null);

                /** Policy displayName */
                displayName?: (string|null);

                /** Policy annotations */
                annotations?: ({ [k: string]: string }|null);

                /** Policy etag */
                etag?: (string|null);

                /** Policy createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Policy updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** Policy deleteTime */
                deleteTime?: (google.protobuf.ITimestamp|null);

                /** Policy rules */
                rules?: (google.iam.v2.IPolicyRule[]|null);

                /** Policy managingAuthority */
                managingAuthority?: (string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IPolicy);

                /** Policy name. */
                public name: string;

                /** Policy uid. */
                public uid: string;

                /** Policy kind. */
                public kind: string;

                /** Policy displayName. */
                public displayName: string;

                /** Policy annotations. */
                public annotations: { [k: string]: string };

                /** Policy etag. */
                public etag: string;

                /** Policy createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Policy updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** Policy deleteTime. */
                public deleteTime?: (google.protobuf.ITimestamp|null);

                /** Policy rules. */
                public rules: google.iam.v2.IPolicyRule[];

                /** Policy managingAuthority. */
                public managingAuthority: string;

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v2.IPolicy): google.iam.v2.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v2.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v2.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.Policy;

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
                public static fromObject(object: { [k: string]: any }): google.iam.v2.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a PolicyRule. */
            interface IPolicyRule {

                /** PolicyRule denyRule */
                denyRule?: (google.iam.v2.IDenyRule|null);

                /** PolicyRule description */
                description?: (string|null);
            }

            /** Represents a PolicyRule. */
            class PolicyRule implements IPolicyRule {

                /**
                 * Constructs a new PolicyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IPolicyRule);

                /** PolicyRule denyRule. */
                public denyRule?: (google.iam.v2.IDenyRule|null);

                /** PolicyRule description. */
                public description: string;

                /** PolicyRule kind. */
                public kind?: "denyRule";

                /**
                 * Creates a new PolicyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyRule instance
                 */
                public static create(properties?: google.iam.v2.IPolicyRule): google.iam.v2.PolicyRule;

                /**
                 * Encodes the specified PolicyRule message. Does not implicitly {@link google.iam.v2.PolicyRule.verify|verify} messages.
                 * @param message PolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyRule message, length delimited. Does not implicitly {@link google.iam.v2.PolicyRule.verify|verify} messages.
                 * @param message PolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.PolicyRule;

                /**
                 * Decodes a PolicyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.PolicyRule;

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
                public static fromObject(object: { [k: string]: any }): google.iam.v2.PolicyRule;

                /**
                 * Creates a plain object from a PolicyRule message. Also converts values to other types if specified.
                 * @param message PolicyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.PolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a ListPoliciesRequest. */
            interface IListPoliciesRequest {

                /** ListPoliciesRequest parent */
                parent?: (string|null);

                /** ListPoliciesRequest pageSize */
                pageSize?: (number|null);

                /** ListPoliciesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListPoliciesRequest. */
            class ListPoliciesRequest implements IListPoliciesRequest {

                /**
                 * Constructs a new ListPoliciesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IListPoliciesRequest);

                /** ListPoliciesRequest parent. */
                public parent: string;

                /** ListPoliciesRequest pageSize. */
                public pageSize: number;

                /** ListPoliciesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListPoliciesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPoliciesRequest instance
                 */
                public static create(properties?: google.iam.v2.IListPoliciesRequest): google.iam.v2.ListPoliciesRequest;

                /**
                 * Encodes the specified ListPoliciesRequest message. Does not implicitly {@link google.iam.v2.ListPoliciesRequest.verify|verify} messages.
                 * @param message ListPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPoliciesRequest message, length delimited. Does not implicitly {@link google.iam.v2.ListPoliciesRequest.verify|verify} messages.
                 * @param message ListPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPoliciesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.ListPoliciesRequest;

                /**
                 * Decodes a ListPoliciesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.ListPoliciesRequest;

                /**
                 * Verifies a ListPoliciesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPoliciesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.ListPoliciesRequest;

                /**
                 * Creates a plain object from a ListPoliciesRequest message. Also converts values to other types if specified.
                 * @param message ListPoliciesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.ListPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPoliciesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPoliciesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPoliciesResponse. */
            interface IListPoliciesResponse {

                /** ListPoliciesResponse policies */
                policies?: (google.iam.v2.IPolicy[]|null);

                /** ListPoliciesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPoliciesResponse. */
            class ListPoliciesResponse implements IListPoliciesResponse {

                /**
                 * Constructs a new ListPoliciesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IListPoliciesResponse);

                /** ListPoliciesResponse policies. */
                public policies: google.iam.v2.IPolicy[];

                /** ListPoliciesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPoliciesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPoliciesResponse instance
                 */
                public static create(properties?: google.iam.v2.IListPoliciesResponse): google.iam.v2.ListPoliciesResponse;

                /**
                 * Encodes the specified ListPoliciesResponse message. Does not implicitly {@link google.iam.v2.ListPoliciesResponse.verify|verify} messages.
                 * @param message ListPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPoliciesResponse message, length delimited. Does not implicitly {@link google.iam.v2.ListPoliciesResponse.verify|verify} messages.
                 * @param message ListPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPoliciesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.ListPoliciesResponse;

                /**
                 * Decodes a ListPoliciesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.ListPoliciesResponse;

                /**
                 * Verifies a ListPoliciesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPoliciesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.ListPoliciesResponse;

                /**
                 * Creates a plain object from a ListPoliciesResponse message. Also converts values to other types if specified.
                 * @param message ListPoliciesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.ListPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPoliciesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPoliciesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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
                constructor(properties?: google.iam.v2.IGetPolicyRequest);

                /** GetPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new GetPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.IGetPolicyRequest): google.iam.v2.GetPolicyRequest;

                /**
                 * Encodes the specified GetPolicyRequest message. Does not implicitly {@link google.iam.v2.GetPolicyRequest.verify|verify} messages.
                 * @param message GetPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.GetPolicyRequest.verify|verify} messages.
                 * @param message GetPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.GetPolicyRequest;

                /**
                 * Decodes a GetPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.GetPolicyRequest;

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
                public static fromObject(object: { [k: string]: any }): google.iam.v2.GetPolicyRequest;

                /**
                 * Creates a plain object from a GetPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.GetPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a CreatePolicyRequest. */
            interface ICreatePolicyRequest {

                /** CreatePolicyRequest parent */
                parent?: (string|null);

                /** CreatePolicyRequest policy */
                policy?: (google.iam.v2.IPolicy|null);

                /** CreatePolicyRequest policyId */
                policyId?: (string|null);
            }

            /** Represents a CreatePolicyRequest. */
            class CreatePolicyRequest implements ICreatePolicyRequest {

                /**
                 * Constructs a new CreatePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.ICreatePolicyRequest);

                /** CreatePolicyRequest parent. */
                public parent: string;

                /** CreatePolicyRequest policy. */
                public policy?: (google.iam.v2.IPolicy|null);

                /** CreatePolicyRequest policyId. */
                public policyId: string;

                /**
                 * Creates a new CreatePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.ICreatePolicyRequest): google.iam.v2.CreatePolicyRequest;

                /**
                 * Encodes the specified CreatePolicyRequest message. Does not implicitly {@link google.iam.v2.CreatePolicyRequest.verify|verify} messages.
                 * @param message CreatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.CreatePolicyRequest.verify|verify} messages.
                 * @param message CreatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.CreatePolicyRequest;

                /**
                 * Decodes a CreatePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.CreatePolicyRequest;

                /**
                 * Verifies a CreatePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.CreatePolicyRequest;

                /**
                 * Creates a plain object from a CreatePolicyRequest message. Also converts values to other types if specified.
                 * @param message CreatePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.CreatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePolicyRequest. */
            interface IUpdatePolicyRequest {

                /** UpdatePolicyRequest policy */
                policy?: (google.iam.v2.IPolicy|null);
            }

            /** Represents an UpdatePolicyRequest. */
            class UpdatePolicyRequest implements IUpdatePolicyRequest {

                /**
                 * Constructs a new UpdatePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IUpdatePolicyRequest);

                /** UpdatePolicyRequest policy. */
                public policy?: (google.iam.v2.IPolicy|null);

                /**
                 * Creates a new UpdatePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.IUpdatePolicyRequest): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Encodes the specified UpdatePolicyRequest message. Does not implicitly {@link google.iam.v2.UpdatePolicyRequest.verify|verify} messages.
                 * @param message UpdatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.UpdatePolicyRequest.verify|verify} messages.
                 * @param message UpdatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Decodes an UpdatePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.UpdatePolicyRequest;

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
                public static fromObject(object: { [k: string]: any }): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Creates a plain object from an UpdatePolicyRequest message. Also converts values to other types if specified.
                 * @param message UpdatePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.UpdatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a DeletePolicyRequest. */
            interface IDeletePolicyRequest {

                /** DeletePolicyRequest name */
                name?: (string|null);

                /** DeletePolicyRequest etag */
                etag?: (string|null);
            }

            /** Represents a DeletePolicyRequest. */
            class DeletePolicyRequest implements IDeletePolicyRequest {

                /**
                 * Constructs a new DeletePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IDeletePolicyRequest);

                /** DeletePolicyRequest name. */
                public name: string;

                /** DeletePolicyRequest etag. */
                public etag: string;

                /**
                 * Creates a new DeletePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.IDeletePolicyRequest): google.iam.v2.DeletePolicyRequest;

                /**
                 * Encodes the specified DeletePolicyRequest message. Does not implicitly {@link google.iam.v2.DeletePolicyRequest.verify|verify} messages.
                 * @param message DeletePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.DeletePolicyRequest.verify|verify} messages.
                 * @param message DeletePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.DeletePolicyRequest;

                /**
                 * Decodes a DeletePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.DeletePolicyRequest;

                /**
                 * Verifies a DeletePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.DeletePolicyRequest;

                /**
                 * Creates a plain object from a DeletePolicyRequest message. Also converts values to other types if specified.
                 * @param message DeletePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.DeletePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PolicyOperationMetadata. */
            interface IPolicyOperationMetadata {

                /** PolicyOperationMetadata createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PolicyOperationMetadata. */
            class PolicyOperationMetadata implements IPolicyOperationMetadata {

                /**
                 * Constructs a new PolicyOperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IPolicyOperationMetadata);

                /** PolicyOperationMetadata createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PolicyOperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyOperationMetadata instance
                 */
                public static create(properties?: google.iam.v2.IPolicyOperationMetadata): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Encodes the specified PolicyOperationMetadata message. Does not implicitly {@link google.iam.v2.PolicyOperationMetadata.verify|verify} messages.
                 * @param message PolicyOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IPolicyOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyOperationMetadata message, length delimited. Does not implicitly {@link google.iam.v2.PolicyOperationMetadata.verify|verify} messages.
                 * @param message PolicyOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IPolicyOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyOperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Decodes a PolicyOperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Verifies a PolicyOperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyOperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyOperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Creates a plain object from a PolicyOperationMetadata message. Also converts values to other types if specified.
                 * @param message PolicyOperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.PolicyOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyOperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyOperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DenyRule. */
            interface IDenyRule {

                /** DenyRule deniedPrincipals */
                deniedPrincipals?: (string[]|null);

                /** DenyRule exceptionPrincipals */
                exceptionPrincipals?: (string[]|null);

                /** DenyRule deniedPermissions */
                deniedPermissions?: (string[]|null);

                /** DenyRule exceptionPermissions */
                exceptionPermissions?: (string[]|null);

                /** DenyRule denialCondition */
                denialCondition?: (google.type.IExpr|null);
            }

            /** Represents a DenyRule. */
            class DenyRule implements IDenyRule {

                /**
                 * Constructs a new DenyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IDenyRule);

                /** DenyRule deniedPrincipals. */
                public deniedPrincipals: string[];

                /** DenyRule exceptionPrincipals. */
                public exceptionPrincipals: string[];

                /** DenyRule deniedPermissions. */
                public deniedPermissions: string[];

                /** DenyRule exceptionPermissions. */
                public exceptionPermissions: string[];

                /** DenyRule denialCondition. */
                public denialCondition?: (google.type.IExpr|null);

                /**
                 * Creates a new DenyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenyRule instance
                 */
                public static create(properties?: google.iam.v2.IDenyRule): google.iam.v2.DenyRule;

                /**
                 * Encodes the specified DenyRule message. Does not implicitly {@link google.iam.v2.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DenyRule message, length delimited. Does not implicitly {@link google.iam.v2.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.DenyRule;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.DenyRule;

                /**
                 * Verifies a DenyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DenyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DenyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.DenyRule;

                /**
                 * Creates a plain object from a DenyRule message. Also converts values to other types if specified.
                 * @param message DenyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.DenyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DenyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DenyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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
