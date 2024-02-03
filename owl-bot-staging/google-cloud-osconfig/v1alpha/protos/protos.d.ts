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

        /** Namespace osconfig. */
        namespace osconfig {

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Properties of a OSPolicyResourceConfigStep. */
                interface IOSPolicyResourceConfigStep {

                    /** OSPolicyResourceConfigStep type */
                    type?: (google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Type|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Type|null);

                    /** OSPolicyResourceConfigStep outcome */
                    outcome?: (google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Outcome|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Outcome|null);

                    /** OSPolicyResourceConfigStep errorMessage */
                    errorMessage?: (string|null);
                }

                /** Represents a OSPolicyResourceConfigStep. */
                class OSPolicyResourceConfigStep implements IOSPolicyResourceConfigStep {

                    /**
                     * Constructs a new OSPolicyResourceConfigStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IOSPolicyResourceConfigStep);

                    /** OSPolicyResourceConfigStep type. */
                    public type: (google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Type|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Type);

                    /** OSPolicyResourceConfigStep outcome. */
                    public outcome: (google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Outcome|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.Outcome);

                    /** OSPolicyResourceConfigStep errorMessage. */
                    public errorMessage: string;

                    /**
                     * Creates a new OSPolicyResourceConfigStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSPolicyResourceConfigStep instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IOSPolicyResourceConfigStep): google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep;

                    /**
                     * Encodes the specified OSPolicyResourceConfigStep message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.verify|verify} messages.
                     * @param message OSPolicyResourceConfigStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IOSPolicyResourceConfigStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSPolicyResourceConfigStep message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep.verify|verify} messages.
                     * @param message OSPolicyResourceConfigStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IOSPolicyResourceConfigStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSPolicyResourceConfigStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSPolicyResourceConfigStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep;

                    /**
                     * Decodes a OSPolicyResourceConfigStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSPolicyResourceConfigStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep;

                    /**
                     * Verifies a OSPolicyResourceConfigStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSPolicyResourceConfigStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSPolicyResourceConfigStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep;

                    /**
                     * Creates a plain object from a OSPolicyResourceConfigStep message. Also converts values to other types if specified.
                     * @param message OSPolicyResourceConfigStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyResourceConfigStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSPolicyResourceConfigStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSPolicyResourceConfigStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OSPolicyResourceConfigStep {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        VALIDATION = 1,
                        DESIRED_STATE_CHECK = 2,
                        DESIRED_STATE_ENFORCEMENT = 3,
                        DESIRED_STATE_CHECK_POST_ENFORCEMENT = 4
                    }

                    /** Outcome enum. */
                    enum Outcome {
                        OUTCOME_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2
                    }
                }

                /** Properties of a OSPolicyResourceCompliance. */
                interface IOSPolicyResourceCompliance {

                    /** OSPolicyResourceCompliance osPolicyResourceId */
                    osPolicyResourceId?: (string|null);

                    /** OSPolicyResourceCompliance configSteps */
                    configSteps?: (google.cloud.osconfig.v1alpha.IOSPolicyResourceConfigStep[]|null);

                    /** OSPolicyResourceCompliance state */
                    state?: (google.cloud.osconfig.v1alpha.OSPolicyComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyComplianceState|null);

                    /** OSPolicyResourceCompliance execResourceOutput */
                    execResourceOutput?: (google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.IExecResourceOutput|null);
                }

                /** Represents a OSPolicyResourceCompliance. */
                class OSPolicyResourceCompliance implements IOSPolicyResourceCompliance {

                    /**
                     * Constructs a new OSPolicyResourceCompliance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IOSPolicyResourceCompliance);

                    /** OSPolicyResourceCompliance osPolicyResourceId. */
                    public osPolicyResourceId: string;

                    /** OSPolicyResourceCompliance configSteps. */
                    public configSteps: google.cloud.osconfig.v1alpha.IOSPolicyResourceConfigStep[];

                    /** OSPolicyResourceCompliance state. */
                    public state: (google.cloud.osconfig.v1alpha.OSPolicyComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyComplianceState);

                    /** OSPolicyResourceCompliance execResourceOutput. */
                    public execResourceOutput?: (google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.IExecResourceOutput|null);

                    /** OSPolicyResourceCompliance output. */
                    public output?: "execResourceOutput";

                    /**
                     * Creates a new OSPolicyResourceCompliance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSPolicyResourceCompliance instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IOSPolicyResourceCompliance): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance;

                    /**
                     * Encodes the specified OSPolicyResourceCompliance message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.verify|verify} messages.
                     * @param message OSPolicyResourceCompliance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IOSPolicyResourceCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSPolicyResourceCompliance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.verify|verify} messages.
                     * @param message OSPolicyResourceCompliance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IOSPolicyResourceCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSPolicyResourceCompliance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSPolicyResourceCompliance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance;

                    /**
                     * Decodes a OSPolicyResourceCompliance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSPolicyResourceCompliance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance;

                    /**
                     * Verifies a OSPolicyResourceCompliance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSPolicyResourceCompliance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSPolicyResourceCompliance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance;

                    /**
                     * Creates a plain object from a OSPolicyResourceCompliance message. Also converts values to other types if specified.
                     * @param message OSPolicyResourceCompliance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSPolicyResourceCompliance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSPolicyResourceCompliance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OSPolicyResourceCompliance {

                    /** Properties of an ExecResourceOutput. */
                    interface IExecResourceOutput {

                        /** ExecResourceOutput enforcementOutput */
                        enforcementOutput?: (Uint8Array|string|null);
                    }

                    /** Represents an ExecResourceOutput. */
                    class ExecResourceOutput implements IExecResourceOutput {

                        /**
                         * Constructs a new ExecResourceOutput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.IExecResourceOutput);

                        /** ExecResourceOutput enforcementOutput. */
                        public enforcementOutput: (Uint8Array|string);

                        /**
                         * Creates a new ExecResourceOutput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecResourceOutput instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.IExecResourceOutput): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput;

                        /**
                         * Encodes the specified ExecResourceOutput message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput.verify|verify} messages.
                         * @param message ExecResourceOutput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.IExecResourceOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecResourceOutput message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput.verify|verify} messages.
                         * @param message ExecResourceOutput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.IExecResourceOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecResourceOutput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecResourceOutput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput;

                        /**
                         * Decodes an ExecResourceOutput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecResourceOutput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput;

                        /**
                         * Verifies an ExecResourceOutput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecResourceOutput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecResourceOutput
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput;

                        /**
                         * Creates a plain object from an ExecResourceOutput message. Also converts values to other types if specified.
                         * @param message ExecResourceOutput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyResourceCompliance.ExecResourceOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecResourceOutput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExecResourceOutput
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** OSPolicyComplianceState enum. */
                enum OSPolicyComplianceState {
                    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = 0,
                    COMPLIANT = 1,
                    NON_COMPLIANT = 2,
                    UNKNOWN = 3,
                    NO_OS_POLICIES_APPLICABLE = 4
                }

                /** Properties of an InstanceOSPoliciesCompliance. */
                interface IInstanceOSPoliciesCompliance {

                    /** InstanceOSPoliciesCompliance name */
                    name?: (string|null);

                    /** InstanceOSPoliciesCompliance instance */
                    instance?: (string|null);

                    /** InstanceOSPoliciesCompliance state */
                    state?: (google.cloud.osconfig.v1alpha.OSPolicyComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyComplianceState|null);

                    /** InstanceOSPoliciesCompliance detailedState */
                    detailedState?: (string|null);

                    /** InstanceOSPoliciesCompliance detailedStateReason */
                    detailedStateReason?: (string|null);

                    /** InstanceOSPoliciesCompliance osPolicyCompliances */
                    osPolicyCompliances?: (google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.IOSPolicyCompliance[]|null);

                    /** InstanceOSPoliciesCompliance lastComplianceCheckTime */
                    lastComplianceCheckTime?: (google.protobuf.ITimestamp|null);

                    /** InstanceOSPoliciesCompliance lastComplianceRunId */
                    lastComplianceRunId?: (string|null);
                }

                /** Represents an InstanceOSPoliciesCompliance. */
                class InstanceOSPoliciesCompliance implements IInstanceOSPoliciesCompliance {

                    /**
                     * Constructs a new InstanceOSPoliciesCompliance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IInstanceOSPoliciesCompliance);

                    /** InstanceOSPoliciesCompliance name. */
                    public name: string;

                    /** InstanceOSPoliciesCompliance instance. */
                    public instance: string;

                    /** InstanceOSPoliciesCompliance state. */
                    public state: (google.cloud.osconfig.v1alpha.OSPolicyComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyComplianceState);

                    /** InstanceOSPoliciesCompliance detailedState. */
                    public detailedState: string;

                    /** InstanceOSPoliciesCompliance detailedStateReason. */
                    public detailedStateReason: string;

                    /** InstanceOSPoliciesCompliance osPolicyCompliances. */
                    public osPolicyCompliances: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.IOSPolicyCompliance[];

                    /** InstanceOSPoliciesCompliance lastComplianceCheckTime. */
                    public lastComplianceCheckTime?: (google.protobuf.ITimestamp|null);

                    /** InstanceOSPoliciesCompliance lastComplianceRunId. */
                    public lastComplianceRunId: string;

                    /**
                     * Creates a new InstanceOSPoliciesCompliance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceOSPoliciesCompliance instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IInstanceOSPoliciesCompliance): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance;

                    /**
                     * Encodes the specified InstanceOSPoliciesCompliance message. Does not implicitly {@link google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.verify|verify} messages.
                     * @param message InstanceOSPoliciesCompliance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IInstanceOSPoliciesCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceOSPoliciesCompliance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.verify|verify} messages.
                     * @param message InstanceOSPoliciesCompliance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IInstanceOSPoliciesCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceOSPoliciesCompliance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceOSPoliciesCompliance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance;

                    /**
                     * Decodes an InstanceOSPoliciesCompliance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceOSPoliciesCompliance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance;

                    /**
                     * Verifies an InstanceOSPoliciesCompliance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceOSPoliciesCompliance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceOSPoliciesCompliance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance;

                    /**
                     * Creates a plain object from an InstanceOSPoliciesCompliance message. Also converts values to other types if specified.
                     * @param message InstanceOSPoliciesCompliance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceOSPoliciesCompliance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InstanceOSPoliciesCompliance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InstanceOSPoliciesCompliance {

                    /** Properties of a OSPolicyCompliance. */
                    interface IOSPolicyCompliance {

                        /** OSPolicyCompliance osPolicyId */
                        osPolicyId?: (string|null);

                        /** OSPolicyCompliance osPolicyAssignment */
                        osPolicyAssignment?: (string|null);

                        /** OSPolicyCompliance state */
                        state?: (google.cloud.osconfig.v1alpha.OSPolicyComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyComplianceState|null);

                        /** OSPolicyCompliance osPolicyResourceCompliances */
                        osPolicyResourceCompliances?: (google.cloud.osconfig.v1alpha.IOSPolicyResourceCompliance[]|null);
                    }

                    /** Represents a OSPolicyCompliance. */
                    class OSPolicyCompliance implements IOSPolicyCompliance {

                        /**
                         * Constructs a new OSPolicyCompliance.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.IOSPolicyCompliance);

                        /** OSPolicyCompliance osPolicyId. */
                        public osPolicyId: string;

                        /** OSPolicyCompliance osPolicyAssignment. */
                        public osPolicyAssignment: string;

                        /** OSPolicyCompliance state. */
                        public state: (google.cloud.osconfig.v1alpha.OSPolicyComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyComplianceState);

                        /** OSPolicyCompliance osPolicyResourceCompliances. */
                        public osPolicyResourceCompliances: google.cloud.osconfig.v1alpha.IOSPolicyResourceCompliance[];

                        /**
                         * Creates a new OSPolicyCompliance instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OSPolicyCompliance instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.IOSPolicyCompliance): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance;

                        /**
                         * Encodes the specified OSPolicyCompliance message. Does not implicitly {@link google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance.verify|verify} messages.
                         * @param message OSPolicyCompliance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.IOSPolicyCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OSPolicyCompliance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance.verify|verify} messages.
                         * @param message OSPolicyCompliance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.IOSPolicyCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a OSPolicyCompliance message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OSPolicyCompliance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance;

                        /**
                         * Decodes a OSPolicyCompliance message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OSPolicyCompliance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance;

                        /**
                         * Verifies a OSPolicyCompliance message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a OSPolicyCompliance message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OSPolicyCompliance
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance;

                        /**
                         * Creates a plain object from a OSPolicyCompliance message. Also converts values to other types if specified.
                         * @param message OSPolicyCompliance
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance.OSPolicyCompliance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OSPolicyCompliance to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OSPolicyCompliance
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GetInstanceOSPoliciesComplianceRequest. */
                interface IGetInstanceOSPoliciesComplianceRequest {

                    /** GetInstanceOSPoliciesComplianceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstanceOSPoliciesComplianceRequest. */
                class GetInstanceOSPoliciesComplianceRequest implements IGetInstanceOSPoliciesComplianceRequest {

                    /**
                     * Constructs a new GetInstanceOSPoliciesComplianceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IGetInstanceOSPoliciesComplianceRequest);

                    /** GetInstanceOSPoliciesComplianceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceOSPoliciesComplianceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceOSPoliciesComplianceRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IGetInstanceOSPoliciesComplianceRequest): google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest;

                    /**
                     * Encodes the specified GetInstanceOSPoliciesComplianceRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest.verify|verify} messages.
                     * @param message GetInstanceOSPoliciesComplianceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IGetInstanceOSPoliciesComplianceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceOSPoliciesComplianceRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest.verify|verify} messages.
                     * @param message GetInstanceOSPoliciesComplianceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IGetInstanceOSPoliciesComplianceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceOSPoliciesComplianceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceOSPoliciesComplianceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest;

                    /**
                     * Decodes a GetInstanceOSPoliciesComplianceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceOSPoliciesComplianceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest;

                    /**
                     * Verifies a GetInstanceOSPoliciesComplianceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceOSPoliciesComplianceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceOSPoliciesComplianceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest;

                    /**
                     * Creates a plain object from a GetInstanceOSPoliciesComplianceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceOSPoliciesComplianceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.GetInstanceOSPoliciesComplianceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceOSPoliciesComplianceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInstanceOSPoliciesComplianceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInstanceOSPoliciesCompliancesRequest. */
                interface IListInstanceOSPoliciesCompliancesRequest {

                    /** ListInstanceOSPoliciesCompliancesRequest parent */
                    parent?: (string|null);

                    /** ListInstanceOSPoliciesCompliancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstanceOSPoliciesCompliancesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInstanceOSPoliciesCompliancesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInstanceOSPoliciesCompliancesRequest. */
                class ListInstanceOSPoliciesCompliancesRequest implements IListInstanceOSPoliciesCompliancesRequest {

                    /**
                     * Constructs a new ListInstanceOSPoliciesCompliancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesRequest);

                    /** ListInstanceOSPoliciesCompliancesRequest parent. */
                    public parent: string;

                    /** ListInstanceOSPoliciesCompliancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstanceOSPoliciesCompliancesRequest pageToken. */
                    public pageToken: string;

                    /** ListInstanceOSPoliciesCompliancesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInstanceOSPoliciesCompliancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstanceOSPoliciesCompliancesRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesRequest): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest;

                    /**
                     * Encodes the specified ListInstanceOSPoliciesCompliancesRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest.verify|verify} messages.
                     * @param message ListInstanceOSPoliciesCompliancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstanceOSPoliciesCompliancesRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest.verify|verify} messages.
                     * @param message ListInstanceOSPoliciesCompliancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstanceOSPoliciesCompliancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstanceOSPoliciesCompliancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest;

                    /**
                     * Decodes a ListInstanceOSPoliciesCompliancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstanceOSPoliciesCompliancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest;

                    /**
                     * Verifies a ListInstanceOSPoliciesCompliancesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstanceOSPoliciesCompliancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstanceOSPoliciesCompliancesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest;

                    /**
                     * Creates a plain object from a ListInstanceOSPoliciesCompliancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstanceOSPoliciesCompliancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstanceOSPoliciesCompliancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInstanceOSPoliciesCompliancesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInstanceOSPoliciesCompliancesResponse. */
                interface IListInstanceOSPoliciesCompliancesResponse {

                    /** ListInstanceOSPoliciesCompliancesResponse instanceOsPoliciesCompliances */
                    instanceOsPoliciesCompliances?: (google.cloud.osconfig.v1alpha.IInstanceOSPoliciesCompliance[]|null);

                    /** ListInstanceOSPoliciesCompliancesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListInstanceOSPoliciesCompliancesResponse. */
                class ListInstanceOSPoliciesCompliancesResponse implements IListInstanceOSPoliciesCompliancesResponse {

                    /**
                     * Constructs a new ListInstanceOSPoliciesCompliancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesResponse);

                    /** ListInstanceOSPoliciesCompliancesResponse instanceOsPoliciesCompliances. */
                    public instanceOsPoliciesCompliances: google.cloud.osconfig.v1alpha.IInstanceOSPoliciesCompliance[];

                    /** ListInstanceOSPoliciesCompliancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListInstanceOSPoliciesCompliancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstanceOSPoliciesCompliancesResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesResponse): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse;

                    /**
                     * Encodes the specified ListInstanceOSPoliciesCompliancesResponse message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse.verify|verify} messages.
                     * @param message ListInstanceOSPoliciesCompliancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstanceOSPoliciesCompliancesResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse.verify|verify} messages.
                     * @param message ListInstanceOSPoliciesCompliancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstanceOSPoliciesCompliancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstanceOSPoliciesCompliancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse;

                    /**
                     * Decodes a ListInstanceOSPoliciesCompliancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstanceOSPoliciesCompliancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse;

                    /**
                     * Verifies a ListInstanceOSPoliciesCompliancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstanceOSPoliciesCompliancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstanceOSPoliciesCompliancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse;

                    /**
                     * Creates a plain object from a ListInstanceOSPoliciesCompliancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstanceOSPoliciesCompliancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstanceOSPoliciesCompliancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInstanceOSPoliciesCompliancesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Inventory. */
                interface IInventory {

                    /** Inventory name */
                    name?: (string|null);

                    /** Inventory osInfo */
                    osInfo?: (google.cloud.osconfig.v1alpha.Inventory.IOsInfo|null);

                    /** Inventory items */
                    items?: ({ [k: string]: google.cloud.osconfig.v1alpha.Inventory.IItem }|null);

                    /** Inventory updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Inventory. */
                class Inventory implements IInventory {

                    /**
                     * Constructs a new Inventory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IInventory);

                    /** Inventory name. */
                    public name: string;

                    /** Inventory osInfo. */
                    public osInfo?: (google.cloud.osconfig.v1alpha.Inventory.IOsInfo|null);

                    /** Inventory items. */
                    public items: { [k: string]: google.cloud.osconfig.v1alpha.Inventory.IItem };

                    /** Inventory updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Inventory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Inventory instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IInventory): google.cloud.osconfig.v1alpha.Inventory;

                    /**
                     * Encodes the specified Inventory message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.verify|verify} messages.
                     * @param message Inventory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Inventory message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.verify|verify} messages.
                     * @param message Inventory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Inventory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Inventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory;

                    /**
                     * Decodes an Inventory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Inventory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory;

                    /**
                     * Verifies an Inventory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Inventory
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory;

                    /**
                     * Creates a plain object from an Inventory message. Also converts values to other types if specified.
                     * @param message Inventory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Inventory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Inventory
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Inventory {

                    /** Properties of an OsInfo. */
                    interface IOsInfo {

                        /** OsInfo hostname */
                        hostname?: (string|null);

                        /** OsInfo longName */
                        longName?: (string|null);

                        /** OsInfo shortName */
                        shortName?: (string|null);

                        /** OsInfo version */
                        version?: (string|null);

                        /** OsInfo architecture */
                        architecture?: (string|null);

                        /** OsInfo kernelVersion */
                        kernelVersion?: (string|null);

                        /** OsInfo kernelRelease */
                        kernelRelease?: (string|null);

                        /** OsInfo osconfigAgentVersion */
                        osconfigAgentVersion?: (string|null);
                    }

                    /** Represents an OsInfo. */
                    class OsInfo implements IOsInfo {

                        /**
                         * Constructs a new OsInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IOsInfo);

                        /** OsInfo hostname. */
                        public hostname: string;

                        /** OsInfo longName. */
                        public longName: string;

                        /** OsInfo shortName. */
                        public shortName: string;

                        /** OsInfo version. */
                        public version: string;

                        /** OsInfo architecture. */
                        public architecture: string;

                        /** OsInfo kernelVersion. */
                        public kernelVersion: string;

                        /** OsInfo kernelRelease. */
                        public kernelRelease: string;

                        /** OsInfo osconfigAgentVersion. */
                        public osconfigAgentVersion: string;

                        /**
                         * Creates a new OsInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OsInfo instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IOsInfo): google.cloud.osconfig.v1alpha.Inventory.OsInfo;

                        /**
                         * Encodes the specified OsInfo message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.OsInfo.verify|verify} messages.
                         * @param message OsInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IOsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OsInfo message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.OsInfo.verify|verify} messages.
                         * @param message OsInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IOsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OsInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OsInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.OsInfo;

                        /**
                         * Decodes an OsInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OsInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.OsInfo;

                        /**
                         * Verifies an OsInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OsInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OsInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.OsInfo;

                        /**
                         * Creates a plain object from an OsInfo message. Also converts values to other types if specified.
                         * @param message OsInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.OsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OsInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OsInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Item. */
                    interface IItem {

                        /** Item id */
                        id?: (string|null);

                        /** Item originType */
                        originType?: (google.cloud.osconfig.v1alpha.Inventory.Item.OriginType|keyof typeof google.cloud.osconfig.v1alpha.Inventory.Item.OriginType|null);

                        /** Item createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Item updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Item type */
                        type?: (google.cloud.osconfig.v1alpha.Inventory.Item.Type|keyof typeof google.cloud.osconfig.v1alpha.Inventory.Item.Type|null);

                        /** Item installedPackage */
                        installedPackage?: (google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage|null);

                        /** Item availablePackage */
                        availablePackage?: (google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage|null);
                    }

                    /** Represents an Item. */
                    class Item implements IItem {

                        /**
                         * Constructs a new Item.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IItem);

                        /** Item id. */
                        public id: string;

                        /** Item originType. */
                        public originType: (google.cloud.osconfig.v1alpha.Inventory.Item.OriginType|keyof typeof google.cloud.osconfig.v1alpha.Inventory.Item.OriginType);

                        /** Item createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Item updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Item type. */
                        public type: (google.cloud.osconfig.v1alpha.Inventory.Item.Type|keyof typeof google.cloud.osconfig.v1alpha.Inventory.Item.Type);

                        /** Item installedPackage. */
                        public installedPackage?: (google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage|null);

                        /** Item availablePackage. */
                        public availablePackage?: (google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage|null);

                        /** Item details. */
                        public details?: ("installedPackage"|"availablePackage");

                        /**
                         * Creates a new Item instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Item instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IItem): google.cloud.osconfig.v1alpha.Inventory.Item;

                        /**
                         * Encodes the specified Item message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.Item.verify|verify} messages.
                         * @param message Item message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Item message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.Item.verify|verify} messages.
                         * @param message Item message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Item message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Item
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.Item;

                        /**
                         * Decodes an Item message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Item
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.Item;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.Item;

                        /**
                         * Creates a plain object from an Item message. Also converts values to other types if specified.
                         * @param message Item
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    namespace Item {

                        /** OriginType enum. */
                        enum OriginType {
                            ORIGIN_TYPE_UNSPECIFIED = 0,
                            INVENTORY_REPORT = 1
                        }

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            INSTALLED_PACKAGE = 1,
                            AVAILABLE_PACKAGE = 2
                        }
                    }

                    /** Properties of a SoftwarePackage. */
                    interface ISoftwarePackage {

                        /** SoftwarePackage yumPackage */
                        yumPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage aptPackage */
                        aptPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage zypperPackage */
                        zypperPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage googetPackage */
                        googetPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage zypperPatch */
                        zypperPatch?: (google.cloud.osconfig.v1alpha.Inventory.IZypperPatch|null);

                        /** SoftwarePackage wuaPackage */
                        wuaPackage?: (google.cloud.osconfig.v1alpha.Inventory.IWindowsUpdatePackage|null);

                        /** SoftwarePackage qfePackage */
                        qfePackage?: (google.cloud.osconfig.v1alpha.Inventory.IWindowsQuickFixEngineeringPackage|null);

                        /** SoftwarePackage cosPackage */
                        cosPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage windowsApplication */
                        windowsApplication?: (google.cloud.osconfig.v1alpha.Inventory.IWindowsApplication|null);
                    }

                    /** Represents a SoftwarePackage. */
                    class SoftwarePackage implements ISoftwarePackage {

                        /**
                         * Constructs a new SoftwarePackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage);

                        /** SoftwarePackage yumPackage. */
                        public yumPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage aptPackage. */
                        public aptPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage zypperPackage. */
                        public zypperPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage googetPackage. */
                        public googetPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage zypperPatch. */
                        public zypperPatch?: (google.cloud.osconfig.v1alpha.Inventory.IZypperPatch|null);

                        /** SoftwarePackage wuaPackage. */
                        public wuaPackage?: (google.cloud.osconfig.v1alpha.Inventory.IWindowsUpdatePackage|null);

                        /** SoftwarePackage qfePackage. */
                        public qfePackage?: (google.cloud.osconfig.v1alpha.Inventory.IWindowsQuickFixEngineeringPackage|null);

                        /** SoftwarePackage cosPackage. */
                        public cosPackage?: (google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage|null);

                        /** SoftwarePackage windowsApplication. */
                        public windowsApplication?: (google.cloud.osconfig.v1alpha.Inventory.IWindowsApplication|null);

                        /** SoftwarePackage details. */
                        public details?: ("yumPackage"|"aptPackage"|"zypperPackage"|"googetPackage"|"zypperPatch"|"wuaPackage"|"qfePackage"|"cosPackage"|"windowsApplication");

                        /**
                         * Creates a new SoftwarePackage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SoftwarePackage instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage): google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage;

                        /**
                         * Encodes the specified SoftwarePackage message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage.verify|verify} messages.
                         * @param message SoftwarePackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SoftwarePackage message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage.verify|verify} messages.
                         * @param message SoftwarePackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.ISoftwarePackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SoftwarePackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SoftwarePackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage;

                        /**
                         * Decodes a SoftwarePackage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SoftwarePackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage;

                        /**
                         * Verifies a SoftwarePackage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SoftwarePackage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SoftwarePackage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage;

                        /**
                         * Creates a plain object from a SoftwarePackage message. Also converts values to other types if specified.
                         * @param message SoftwarePackage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.SoftwarePackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SoftwarePackage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SoftwarePackage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VersionedPackage. */
                    interface IVersionedPackage {

                        /** VersionedPackage packageName */
                        packageName?: (string|null);

                        /** VersionedPackage architecture */
                        architecture?: (string|null);

                        /** VersionedPackage version */
                        version?: (string|null);
                    }

                    /** Represents a VersionedPackage. */
                    class VersionedPackage implements IVersionedPackage {

                        /**
                         * Constructs a new VersionedPackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage);

                        /** VersionedPackage packageName. */
                        public packageName: string;

                        /** VersionedPackage architecture. */
                        public architecture: string;

                        /** VersionedPackage version. */
                        public version: string;

                        /**
                         * Creates a new VersionedPackage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VersionedPackage instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage): google.cloud.osconfig.v1alpha.Inventory.VersionedPackage;

                        /**
                         * Encodes the specified VersionedPackage message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.VersionedPackage.verify|verify} messages.
                         * @param message VersionedPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VersionedPackage message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.VersionedPackage.verify|verify} messages.
                         * @param message VersionedPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IVersionedPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VersionedPackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VersionedPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.VersionedPackage;

                        /**
                         * Decodes a VersionedPackage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VersionedPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.VersionedPackage;

                        /**
                         * Verifies a VersionedPackage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VersionedPackage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VersionedPackage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.VersionedPackage;

                        /**
                         * Creates a plain object from a VersionedPackage message. Also converts values to other types if specified.
                         * @param message VersionedPackage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.VersionedPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VersionedPackage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VersionedPackage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ZypperPatch. */
                    interface IZypperPatch {

                        /** ZypperPatch patchName */
                        patchName?: (string|null);

                        /** ZypperPatch category */
                        category?: (string|null);

                        /** ZypperPatch severity */
                        severity?: (string|null);

                        /** ZypperPatch summary */
                        summary?: (string|null);
                    }

                    /** Represents a ZypperPatch. */
                    class ZypperPatch implements IZypperPatch {

                        /**
                         * Constructs a new ZypperPatch.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IZypperPatch);

                        /** ZypperPatch patchName. */
                        public patchName: string;

                        /** ZypperPatch category. */
                        public category: string;

                        /** ZypperPatch severity. */
                        public severity: string;

                        /** ZypperPatch summary. */
                        public summary: string;

                        /**
                         * Creates a new ZypperPatch instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ZypperPatch instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IZypperPatch): google.cloud.osconfig.v1alpha.Inventory.ZypperPatch;

                        /**
                         * Encodes the specified ZypperPatch message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.ZypperPatch.verify|verify} messages.
                         * @param message ZypperPatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IZypperPatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ZypperPatch message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.ZypperPatch.verify|verify} messages.
                         * @param message ZypperPatch message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IZypperPatch, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ZypperPatch message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ZypperPatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.ZypperPatch;

                        /**
                         * Decodes a ZypperPatch message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ZypperPatch
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.ZypperPatch;

                        /**
                         * Verifies a ZypperPatch message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ZypperPatch message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ZypperPatch
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.ZypperPatch;

                        /**
                         * Creates a plain object from a ZypperPatch message. Also converts values to other types if specified.
                         * @param message ZypperPatch
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.ZypperPatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ZypperPatch to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ZypperPatch
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WindowsUpdatePackage. */
                    interface IWindowsUpdatePackage {

                        /** WindowsUpdatePackage title */
                        title?: (string|null);

                        /** WindowsUpdatePackage description */
                        description?: (string|null);

                        /** WindowsUpdatePackage categories */
                        categories?: (google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.IWindowsUpdateCategory[]|null);

                        /** WindowsUpdatePackage kbArticleIds */
                        kbArticleIds?: (string[]|null);

                        /** WindowsUpdatePackage supportUrl */
                        supportUrl?: (string|null);

                        /** WindowsUpdatePackage moreInfoUrls */
                        moreInfoUrls?: (string[]|null);

                        /** WindowsUpdatePackage updateId */
                        updateId?: (string|null);

                        /** WindowsUpdatePackage revisionNumber */
                        revisionNumber?: (number|null);

                        /** WindowsUpdatePackage lastDeploymentChangeTime */
                        lastDeploymentChangeTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a WindowsUpdatePackage. */
                    class WindowsUpdatePackage implements IWindowsUpdatePackage {

                        /**
                         * Constructs a new WindowsUpdatePackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IWindowsUpdatePackage);

                        /** WindowsUpdatePackage title. */
                        public title: string;

                        /** WindowsUpdatePackage description. */
                        public description: string;

                        /** WindowsUpdatePackage categories. */
                        public categories: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.IWindowsUpdateCategory[];

                        /** WindowsUpdatePackage kbArticleIds. */
                        public kbArticleIds: string[];

                        /** WindowsUpdatePackage supportUrl. */
                        public supportUrl: string;

                        /** WindowsUpdatePackage moreInfoUrls. */
                        public moreInfoUrls: string[];

                        /** WindowsUpdatePackage updateId. */
                        public updateId: string;

                        /** WindowsUpdatePackage revisionNumber. */
                        public revisionNumber: number;

                        /** WindowsUpdatePackage lastDeploymentChangeTime. */
                        public lastDeploymentChangeTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new WindowsUpdatePackage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WindowsUpdatePackage instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IWindowsUpdatePackage): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage;

                        /**
                         * Encodes the specified WindowsUpdatePackage message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.verify|verify} messages.
                         * @param message WindowsUpdatePackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IWindowsUpdatePackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WindowsUpdatePackage message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.verify|verify} messages.
                         * @param message WindowsUpdatePackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IWindowsUpdatePackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WindowsUpdatePackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WindowsUpdatePackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage;

                        /**
                         * Decodes a WindowsUpdatePackage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WindowsUpdatePackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage;

                        /**
                         * Verifies a WindowsUpdatePackage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WindowsUpdatePackage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WindowsUpdatePackage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage;

                        /**
                         * Creates a plain object from a WindowsUpdatePackage message. Also converts values to other types if specified.
                         * @param message WindowsUpdatePackage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WindowsUpdatePackage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WindowsUpdatePackage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace WindowsUpdatePackage {

                        /** Properties of a WindowsUpdateCategory. */
                        interface IWindowsUpdateCategory {

                            /** WindowsUpdateCategory id */
                            id?: (string|null);

                            /** WindowsUpdateCategory name */
                            name?: (string|null);
                        }

                        /** Represents a WindowsUpdateCategory. */
                        class WindowsUpdateCategory implements IWindowsUpdateCategory {

                            /**
                             * Constructs a new WindowsUpdateCategory.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.IWindowsUpdateCategory);

                            /** WindowsUpdateCategory id. */
                            public id: string;

                            /** WindowsUpdateCategory name. */
                            public name: string;

                            /**
                             * Creates a new WindowsUpdateCategory instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WindowsUpdateCategory instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.IWindowsUpdateCategory): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory;

                            /**
                             * Encodes the specified WindowsUpdateCategory message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory.verify|verify} messages.
                             * @param message WindowsUpdateCategory message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.IWindowsUpdateCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WindowsUpdateCategory message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory.verify|verify} messages.
                             * @param message WindowsUpdateCategory message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.IWindowsUpdateCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WindowsUpdateCategory message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WindowsUpdateCategory
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory;

                            /**
                             * Decodes a WindowsUpdateCategory message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WindowsUpdateCategory
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory;

                            /**
                             * Verifies a WindowsUpdateCategory message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WindowsUpdateCategory message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WindowsUpdateCategory
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory;

                            /**
                             * Creates a plain object from a WindowsUpdateCategory message. Also converts values to other types if specified.
                             * @param message WindowsUpdateCategory
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.WindowsUpdatePackage.WindowsUpdateCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WindowsUpdateCategory to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for WindowsUpdateCategory
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a WindowsQuickFixEngineeringPackage. */
                    interface IWindowsQuickFixEngineeringPackage {

                        /** WindowsQuickFixEngineeringPackage caption */
                        caption?: (string|null);

                        /** WindowsQuickFixEngineeringPackage description */
                        description?: (string|null);

                        /** WindowsQuickFixEngineeringPackage hotFixId */
                        hotFixId?: (string|null);

                        /** WindowsQuickFixEngineeringPackage installTime */
                        installTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a WindowsQuickFixEngineeringPackage. */
                    class WindowsQuickFixEngineeringPackage implements IWindowsQuickFixEngineeringPackage {

                        /**
                         * Constructs a new WindowsQuickFixEngineeringPackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IWindowsQuickFixEngineeringPackage);

                        /** WindowsQuickFixEngineeringPackage caption. */
                        public caption: string;

                        /** WindowsQuickFixEngineeringPackage description. */
                        public description: string;

                        /** WindowsQuickFixEngineeringPackage hotFixId. */
                        public hotFixId: string;

                        /** WindowsQuickFixEngineeringPackage installTime. */
                        public installTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new WindowsQuickFixEngineeringPackage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WindowsQuickFixEngineeringPackage instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IWindowsQuickFixEngineeringPackage): google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage;

                        /**
                         * Encodes the specified WindowsQuickFixEngineeringPackage message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage.verify|verify} messages.
                         * @param message WindowsQuickFixEngineeringPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IWindowsQuickFixEngineeringPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WindowsQuickFixEngineeringPackage message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage.verify|verify} messages.
                         * @param message WindowsQuickFixEngineeringPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IWindowsQuickFixEngineeringPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WindowsQuickFixEngineeringPackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WindowsQuickFixEngineeringPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage;

                        /**
                         * Decodes a WindowsQuickFixEngineeringPackage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WindowsQuickFixEngineeringPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage;

                        /**
                         * Verifies a WindowsQuickFixEngineeringPackage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WindowsQuickFixEngineeringPackage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WindowsQuickFixEngineeringPackage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage;

                        /**
                         * Creates a plain object from a WindowsQuickFixEngineeringPackage message. Also converts values to other types if specified.
                         * @param message WindowsQuickFixEngineeringPackage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.WindowsQuickFixEngineeringPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WindowsQuickFixEngineeringPackage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WindowsQuickFixEngineeringPackage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WindowsApplication. */
                    interface IWindowsApplication {

                        /** WindowsApplication displayName */
                        displayName?: (string|null);

                        /** WindowsApplication displayVersion */
                        displayVersion?: (string|null);

                        /** WindowsApplication publisher */
                        publisher?: (string|null);

                        /** WindowsApplication installDate */
                        installDate?: (google.type.IDate|null);

                        /** WindowsApplication helpLink */
                        helpLink?: (string|null);
                    }

                    /** Represents a WindowsApplication. */
                    class WindowsApplication implements IWindowsApplication {

                        /**
                         * Constructs a new WindowsApplication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.Inventory.IWindowsApplication);

                        /** WindowsApplication displayName. */
                        public displayName: string;

                        /** WindowsApplication displayVersion. */
                        public displayVersion: string;

                        /** WindowsApplication publisher. */
                        public publisher: string;

                        /** WindowsApplication installDate. */
                        public installDate?: (google.type.IDate|null);

                        /** WindowsApplication helpLink. */
                        public helpLink: string;

                        /**
                         * Creates a new WindowsApplication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WindowsApplication instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.Inventory.IWindowsApplication): google.cloud.osconfig.v1alpha.Inventory.WindowsApplication;

                        /**
                         * Encodes the specified WindowsApplication message. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsApplication.verify|verify} messages.
                         * @param message WindowsApplication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.Inventory.IWindowsApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WindowsApplication message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.Inventory.WindowsApplication.verify|verify} messages.
                         * @param message WindowsApplication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.Inventory.IWindowsApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WindowsApplication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WindowsApplication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.Inventory.WindowsApplication;

                        /**
                         * Decodes a WindowsApplication message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WindowsApplication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.Inventory.WindowsApplication;

                        /**
                         * Verifies a WindowsApplication message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WindowsApplication message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WindowsApplication
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.Inventory.WindowsApplication;

                        /**
                         * Creates a plain object from a WindowsApplication message. Also converts values to other types if specified.
                         * @param message WindowsApplication
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.Inventory.WindowsApplication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WindowsApplication to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WindowsApplication
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GetInventoryRequest. */
                interface IGetInventoryRequest {

                    /** GetInventoryRequest name */
                    name?: (string|null);

                    /** GetInventoryRequest view */
                    view?: (google.cloud.osconfig.v1alpha.InventoryView|keyof typeof google.cloud.osconfig.v1alpha.InventoryView|null);
                }

                /** Represents a GetInventoryRequest. */
                class GetInventoryRequest implements IGetInventoryRequest {

                    /**
                     * Constructs a new GetInventoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IGetInventoryRequest);

                    /** GetInventoryRequest name. */
                    public name: string;

                    /** GetInventoryRequest view. */
                    public view: (google.cloud.osconfig.v1alpha.InventoryView|keyof typeof google.cloud.osconfig.v1alpha.InventoryView);

                    /**
                     * Creates a new GetInventoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInventoryRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IGetInventoryRequest): google.cloud.osconfig.v1alpha.GetInventoryRequest;

                    /**
                     * Encodes the specified GetInventoryRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetInventoryRequest.verify|verify} messages.
                     * @param message GetInventoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IGetInventoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInventoryRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetInventoryRequest.verify|verify} messages.
                     * @param message GetInventoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IGetInventoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInventoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInventoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.GetInventoryRequest;

                    /**
                     * Decodes a GetInventoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInventoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.GetInventoryRequest;

                    /**
                     * Verifies a GetInventoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInventoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInventoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.GetInventoryRequest;

                    /**
                     * Creates a plain object from a GetInventoryRequest message. Also converts values to other types if specified.
                     * @param message GetInventoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.GetInventoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInventoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInventoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInventoriesRequest. */
                interface IListInventoriesRequest {

                    /** ListInventoriesRequest parent */
                    parent?: (string|null);

                    /** ListInventoriesRequest view */
                    view?: (google.cloud.osconfig.v1alpha.InventoryView|keyof typeof google.cloud.osconfig.v1alpha.InventoryView|null);

                    /** ListInventoriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInventoriesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInventoriesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInventoriesRequest. */
                class ListInventoriesRequest implements IListInventoriesRequest {

                    /**
                     * Constructs a new ListInventoriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListInventoriesRequest);

                    /** ListInventoriesRequest parent. */
                    public parent: string;

                    /** ListInventoriesRequest view. */
                    public view: (google.cloud.osconfig.v1alpha.InventoryView|keyof typeof google.cloud.osconfig.v1alpha.InventoryView);

                    /** ListInventoriesRequest pageSize. */
                    public pageSize: number;

                    /** ListInventoriesRequest pageToken. */
                    public pageToken: string;

                    /** ListInventoriesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInventoriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInventoriesRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListInventoriesRequest): google.cloud.osconfig.v1alpha.ListInventoriesRequest;

                    /**
                     * Encodes the specified ListInventoriesRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInventoriesRequest.verify|verify} messages.
                     * @param message ListInventoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListInventoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInventoriesRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInventoriesRequest.verify|verify} messages.
                     * @param message ListInventoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListInventoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInventoriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInventoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListInventoriesRequest;

                    /**
                     * Decodes a ListInventoriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInventoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListInventoriesRequest;

                    /**
                     * Verifies a ListInventoriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInventoriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInventoriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListInventoriesRequest;

                    /**
                     * Creates a plain object from a ListInventoriesRequest message. Also converts values to other types if specified.
                     * @param message ListInventoriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListInventoriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInventoriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInventoriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInventoriesResponse. */
                interface IListInventoriesResponse {

                    /** ListInventoriesResponse inventories */
                    inventories?: (google.cloud.osconfig.v1alpha.IInventory[]|null);

                    /** ListInventoriesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListInventoriesResponse. */
                class ListInventoriesResponse implements IListInventoriesResponse {

                    /**
                     * Constructs a new ListInventoriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListInventoriesResponse);

                    /** ListInventoriesResponse inventories. */
                    public inventories: google.cloud.osconfig.v1alpha.IInventory[];

                    /** ListInventoriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListInventoriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInventoriesResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListInventoriesResponse): google.cloud.osconfig.v1alpha.ListInventoriesResponse;

                    /**
                     * Encodes the specified ListInventoriesResponse message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInventoriesResponse.verify|verify} messages.
                     * @param message ListInventoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListInventoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInventoriesResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListInventoriesResponse.verify|verify} messages.
                     * @param message ListInventoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListInventoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInventoriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInventoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListInventoriesResponse;

                    /**
                     * Decodes a ListInventoriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInventoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListInventoriesResponse;

                    /**
                     * Verifies a ListInventoriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInventoriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInventoriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListInventoriesResponse;

                    /**
                     * Creates a plain object from a ListInventoriesResponse message. Also converts values to other types if specified.
                     * @param message ListInventoriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListInventoriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInventoriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInventoriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** InventoryView enum. */
                enum InventoryView {
                    INVENTORY_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** Properties of a OSPolicy. */
                interface IOSPolicy {

                    /** OSPolicy id */
                    id?: (string|null);

                    /** OSPolicy description */
                    description?: (string|null);

                    /** OSPolicy mode */
                    mode?: (google.cloud.osconfig.v1alpha.OSPolicy.Mode|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Mode|null);

                    /** OSPolicy resourceGroups */
                    resourceGroups?: (google.cloud.osconfig.v1alpha.OSPolicy.IResourceGroup[]|null);

                    /** OSPolicy allowNoResourceGroupMatch */
                    allowNoResourceGroupMatch?: (boolean|null);
                }

                /** Represents a OSPolicy. */
                class OSPolicy implements IOSPolicy {

                    /**
                     * Constructs a new OSPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IOSPolicy);

                    /** OSPolicy id. */
                    public id: string;

                    /** OSPolicy description. */
                    public description: string;

                    /** OSPolicy mode. */
                    public mode: (google.cloud.osconfig.v1alpha.OSPolicy.Mode|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Mode);

                    /** OSPolicy resourceGroups. */
                    public resourceGroups: google.cloud.osconfig.v1alpha.OSPolicy.IResourceGroup[];

                    /** OSPolicy allowNoResourceGroupMatch. */
                    public allowNoResourceGroupMatch: boolean;

                    /**
                     * Creates a new OSPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSPolicy instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IOSPolicy): google.cloud.osconfig.v1alpha.OSPolicy;

                    /**
                     * Encodes the specified OSPolicy message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.verify|verify} messages.
                     * @param message OSPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IOSPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSPolicy message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.verify|verify} messages.
                     * @param message OSPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IOSPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy;

                    /**
                     * Decodes a OSPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy;

                    /**
                     * Verifies a OSPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy;

                    /**
                     * Creates a plain object from a OSPolicy message. Also converts values to other types if specified.
                     * @param message OSPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OSPolicy {

                    /** Mode enum. */
                    enum Mode {
                        MODE_UNSPECIFIED = 0,
                        VALIDATION = 1,
                        ENFORCEMENT = 2
                    }

                    /** Properties of a OSFilter. */
                    interface IOSFilter {

                        /** OSFilter osShortName */
                        osShortName?: (string|null);

                        /** OSFilter osVersion */
                        osVersion?: (string|null);
                    }

                    /** Represents a OSFilter. */
                    class OSFilter implements IOSFilter {

                        /**
                         * Constructs a new OSFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IOSFilter);

                        /** OSFilter osShortName. */
                        public osShortName: string;

                        /** OSFilter osVersion. */
                        public osVersion: string;

                        /**
                         * Creates a new OSFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OSFilter instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IOSFilter): google.cloud.osconfig.v1alpha.OSPolicy.OSFilter;

                        /**
                         * Encodes the specified OSFilter message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.OSFilter.verify|verify} messages.
                         * @param message OSFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.IOSFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OSFilter message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.OSFilter.verify|verify} messages.
                         * @param message OSFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.IOSFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a OSFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OSFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.OSFilter;

                        /**
                         * Decodes a OSFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OSFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.OSFilter;

                        /**
                         * Verifies a OSFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a OSFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OSFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.OSFilter;

                        /**
                         * Creates a plain object from a OSFilter message. Also converts values to other types if specified.
                         * @param message OSFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.OSFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OSFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OSFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InventoryFilter. */
                    interface IInventoryFilter {

                        /** InventoryFilter osShortName */
                        osShortName?: (string|null);

                        /** InventoryFilter osVersion */
                        osVersion?: (string|null);
                    }

                    /** Represents an InventoryFilter. */
                    class InventoryFilter implements IInventoryFilter {

                        /**
                         * Constructs a new InventoryFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IInventoryFilter);

                        /** InventoryFilter osShortName. */
                        public osShortName: string;

                        /** InventoryFilter osVersion. */
                        public osVersion: string;

                        /**
                         * Creates a new InventoryFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InventoryFilter instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IInventoryFilter): google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter;

                        /**
                         * Encodes the specified InventoryFilter message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.verify|verify} messages.
                         * @param message InventoryFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.IInventoryFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InventoryFilter message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter.verify|verify} messages.
                         * @param message InventoryFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.IInventoryFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InventoryFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InventoryFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter;

                        /**
                         * Decodes an InventoryFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InventoryFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter;

                        /**
                         * Verifies an InventoryFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InventoryFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InventoryFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter;

                        /**
                         * Creates a plain object from an InventoryFilter message. Also converts values to other types if specified.
                         * @param message InventoryFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.InventoryFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InventoryFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InventoryFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Resource. */
                    interface IResource {

                        /** Resource id */
                        id?: (string|null);

                        /** Resource pkg */
                        pkg?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IPackageResource|null);

                        /** Resource repository */
                        repository?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IRepositoryResource|null);

                        /** Resource exec */
                        exec?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IExecResource|null);

                        /** Resource file */
                        file?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFileResource|null);
                    }

                    /** Represents a Resource. */
                    class Resource implements IResource {

                        /**
                         * Constructs a new Resource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IResource);

                        /** Resource id. */
                        public id: string;

                        /** Resource pkg. */
                        public pkg?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IPackageResource|null);

                        /** Resource repository. */
                        public repository?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IRepositoryResource|null);

                        /** Resource exec. */
                        public exec?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IExecResource|null);

                        /** Resource file. */
                        public file?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFileResource|null);

                        /** Resource resourceType. */
                        public resourceType?: ("pkg"|"repository"|"exec"|"file");

                        /**
                         * Creates a new Resource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Resource instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IResource): google.cloud.osconfig.v1alpha.OSPolicy.Resource;

                        /**
                         * Encodes the specified Resource message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Resource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource;

                        /**
                         * Decodes a Resource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource;

                        /**
                         * Creates a plain object from a Resource message. Also converts values to other types if specified.
                         * @param message Resource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    namespace Resource {

                        /** Properties of a File. */
                        interface IFile {

                            /** File remote */
                            remote?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IRemote|null);

                            /** File gcs */
                            gcs?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IGcs|null);

                            /** File localPath */
                            localPath?: (string|null);

                            /** File allowInsecure */
                            allowInsecure?: (boolean|null);
                        }

                        /** Represents a File. */
                        class File implements IFile {

                            /**
                             * Constructs a new File.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile);

                            /** File remote. */
                            public remote?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IRemote|null);

                            /** File gcs. */
                            public gcs?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IGcs|null);

                            /** File localPath. */
                            public localPath?: (string|null);

                            /** File allowInsecure. */
                            public allowInsecure: boolean;

                            /** File type. */
                            public type?: ("remote"|"gcs"|"localPath");

                            /**
                             * Creates a new File instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns File instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File;

                            /**
                             * Encodes the specified File message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.verify|verify} messages.
                             * @param message File message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified File message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.verify|verify} messages.
                             * @param message File message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a File message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns File
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File;

                            /**
                             * Decodes a File message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns File
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File;

                            /**
                             * Verifies a File message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a File message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns File
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File;

                            /**
                             * Creates a plain object from a File message. Also converts values to other types if specified.
                             * @param message File
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this File to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for File
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace File {

                            /** Properties of a Remote. */
                            interface IRemote {

                                /** Remote uri */
                                uri?: (string|null);

                                /** Remote sha256Checksum */
                                sha256Checksum?: (string|null);
                            }

                            /** Represents a Remote. */
                            class Remote implements IRemote {

                                /**
                                 * Constructs a new Remote.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IRemote);

                                /** Remote uri. */
                                public uri: string;

                                /** Remote sha256Checksum. */
                                public sha256Checksum: string;

                                /**
                                 * Creates a new Remote instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Remote instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IRemote): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote;

                                /**
                                 * Encodes the specified Remote message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote.verify|verify} messages.
                                 * @param message Remote message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IRemote, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Remote message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote.verify|verify} messages.
                                 * @param message Remote message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IRemote, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Remote message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Remote
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote;

                                /**
                                 * Decodes a Remote message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Remote
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote;

                                /**
                                 * Verifies a Remote message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Remote message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Remote
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote;

                                /**
                                 * Creates a plain object from a Remote message. Also converts values to other types if specified.
                                 * @param message Remote
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Remote, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Remote to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Remote
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Gcs. */
                            interface IGcs {

                                /** Gcs bucket */
                                bucket?: (string|null);

                                /** Gcs object */
                                object?: (string|null);

                                /** Gcs generation */
                                generation?: (number|Long|string|null);
                            }

                            /** Represents a Gcs. */
                            class Gcs implements IGcs {

                                /**
                                 * Constructs a new Gcs.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IGcs);

                                /** Gcs bucket. */
                                public bucket: string;

                                /** Gcs object. */
                                public object: string;

                                /** Gcs generation. */
                                public generation: (number|Long|string);

                                /**
                                 * Creates a new Gcs instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Gcs instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IGcs): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs;

                                /**
                                 * Encodes the specified Gcs message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs.verify|verify} messages.
                                 * @param message Gcs message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IGcs, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Gcs message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs.verify|verify} messages.
                                 * @param message Gcs message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.IGcs, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Gcs message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Gcs
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs;

                                /**
                                 * Decodes a Gcs message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Gcs
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs;

                                /**
                                 * Verifies a Gcs message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Gcs message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Gcs
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs;

                                /**
                                 * Creates a plain object from a Gcs message. Also converts values to other types if specified.
                                 * @param message Gcs
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.File.Gcs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Gcs to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Gcs
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a PackageResource. */
                        interface IPackageResource {

                            /** PackageResource desiredState */
                            desiredState?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.DesiredState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.DesiredState|null);

                            /** PackageResource apt */
                            apt?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IAPT|null);

                            /** PackageResource deb */
                            deb?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IDeb|null);

                            /** PackageResource yum */
                            yum?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IYUM|null);

                            /** PackageResource zypper */
                            zypper?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IZypper|null);

                            /** PackageResource rpm */
                            rpm?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IRPM|null);

                            /** PackageResource googet */
                            googet?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IGooGet|null);

                            /** PackageResource msi */
                            msi?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IMSI|null);
                        }

                        /** Represents a PackageResource. */
                        class PackageResource implements IPackageResource {

                            /**
                             * Constructs a new PackageResource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IPackageResource);

                            /** PackageResource desiredState. */
                            public desiredState: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.DesiredState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.DesiredState);

                            /** PackageResource apt. */
                            public apt?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IAPT|null);

                            /** PackageResource deb. */
                            public deb?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IDeb|null);

                            /** PackageResource yum. */
                            public yum?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IYUM|null);

                            /** PackageResource zypper. */
                            public zypper?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IZypper|null);

                            /** PackageResource rpm. */
                            public rpm?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IRPM|null);

                            /** PackageResource googet. */
                            public googet?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IGooGet|null);

                            /** PackageResource msi. */
                            public msi?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IMSI|null);

                            /** PackageResource systemPackage. */
                            public systemPackage?: ("apt"|"deb"|"yum"|"zypper"|"rpm"|"googet"|"msi");

                            /**
                             * Creates a new PackageResource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PackageResource instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IPackageResource): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource;

                            /**
                             * Encodes the specified PackageResource message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.verify|verify} messages.
                             * @param message PackageResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IPackageResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PackageResource message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.verify|verify} messages.
                             * @param message PackageResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IPackageResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PackageResource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PackageResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource;

                            /**
                             * Decodes a PackageResource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PackageResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource;

                            /**
                             * Verifies a PackageResource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PackageResource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PackageResource
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource;

                            /**
                             * Creates a plain object from a PackageResource message. Also converts values to other types if specified.
                             * @param message PackageResource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PackageResource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PackageResource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace PackageResource {

                            /** DesiredState enum. */
                            enum DesiredState {
                                DESIRED_STATE_UNSPECIFIED = 0,
                                INSTALLED = 1,
                                REMOVED = 2
                            }

                            /** Properties of a Deb. */
                            interface IDeb {

                                /** Deb source */
                                source?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** Deb pullDeps */
                                pullDeps?: (boolean|null);
                            }

                            /** Represents a Deb. */
                            class Deb implements IDeb {

                                /**
                                 * Constructs a new Deb.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IDeb);

                                /** Deb source. */
                                public source?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** Deb pullDeps. */
                                public pullDeps: boolean;

                                /**
                                 * Creates a new Deb instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Deb instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IDeb): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb;

                                /**
                                 * Encodes the specified Deb message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb.verify|verify} messages.
                                 * @param message Deb message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IDeb, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Deb message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb.verify|verify} messages.
                                 * @param message Deb message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IDeb, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Deb message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Deb
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb;

                                /**
                                 * Decodes a Deb message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Deb
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb;

                                /**
                                 * Verifies a Deb message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Deb message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Deb
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb;

                                /**
                                 * Creates a plain object from a Deb message. Also converts values to other types if specified.
                                 * @param message Deb
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Deb, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Deb to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Deb
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a APT. */
                            interface IAPT {

                                /** APT name */
                                name?: (string|null);
                            }

                            /** Represents a APT. */
                            class APT implements IAPT {

                                /**
                                 * Constructs a new APT.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IAPT);

                                /** APT name. */
                                public name: string;

                                /**
                                 * Creates a new APT instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns APT instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IAPT): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT;

                                /**
                                 * Encodes the specified APT message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT.verify|verify} messages.
                                 * @param message APT message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IAPT, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified APT message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT.verify|verify} messages.
                                 * @param message APT message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IAPT, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a APT message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns APT
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT;

                                /**
                                 * Decodes a APT message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns APT
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT;

                                /**
                                 * Verifies a APT message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a APT message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns APT
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT;

                                /**
                                 * Creates a plain object from a APT message. Also converts values to other types if specified.
                                 * @param message APT
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.APT, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this APT to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for APT
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a RPM. */
                            interface IRPM {

                                /** RPM source */
                                source?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** RPM pullDeps */
                                pullDeps?: (boolean|null);
                            }

                            /** Represents a RPM. */
                            class RPM implements IRPM {

                                /**
                                 * Constructs a new RPM.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IRPM);

                                /** RPM source. */
                                public source?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** RPM pullDeps. */
                                public pullDeps: boolean;

                                /**
                                 * Creates a new RPM instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RPM instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IRPM): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM;

                                /**
                                 * Encodes the specified RPM message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM.verify|verify} messages.
                                 * @param message RPM message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IRPM, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified RPM message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM.verify|verify} messages.
                                 * @param message RPM message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IRPM, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a RPM message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RPM
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM;

                                /**
                                 * Decodes a RPM message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RPM
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM;

                                /**
                                 * Verifies a RPM message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RPM message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RPM
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM;

                                /**
                                 * Creates a plain object from a RPM message. Also converts values to other types if specified.
                                 * @param message RPM
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.RPM, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RPM to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for RPM
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a YUM. */
                            interface IYUM {

                                /** YUM name */
                                name?: (string|null);
                            }

                            /** Represents a YUM. */
                            class YUM implements IYUM {

                                /**
                                 * Constructs a new YUM.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IYUM);

                                /** YUM name. */
                                public name: string;

                                /**
                                 * Creates a new YUM instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns YUM instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IYUM): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM;

                                /**
                                 * Encodes the specified YUM message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM.verify|verify} messages.
                                 * @param message YUM message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IYUM, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified YUM message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM.verify|verify} messages.
                                 * @param message YUM message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IYUM, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a YUM message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns YUM
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM;

                                /**
                                 * Decodes a YUM message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns YUM
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM;

                                /**
                                 * Verifies a YUM message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a YUM message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns YUM
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM;

                                /**
                                 * Creates a plain object from a YUM message. Also converts values to other types if specified.
                                 * @param message YUM
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.YUM, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this YUM to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for YUM
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Zypper. */
                            interface IZypper {

                                /** Zypper name */
                                name?: (string|null);
                            }

                            /** Represents a Zypper. */
                            class Zypper implements IZypper {

                                /**
                                 * Constructs a new Zypper.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IZypper);

                                /** Zypper name. */
                                public name: string;

                                /**
                                 * Creates a new Zypper instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Zypper instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IZypper): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper;

                                /**
                                 * Encodes the specified Zypper message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper.verify|verify} messages.
                                 * @param message Zypper message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IZypper, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Zypper message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper.verify|verify} messages.
                                 * @param message Zypper message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IZypper, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Zypper message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Zypper
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper;

                                /**
                                 * Decodes a Zypper message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Zypper
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper;

                                /**
                                 * Verifies a Zypper message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Zypper message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Zypper
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper;

                                /**
                                 * Creates a plain object from a Zypper message. Also converts values to other types if specified.
                                 * @param message Zypper
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.Zypper, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Zypper to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Zypper
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a GooGet. */
                            interface IGooGet {

                                /** GooGet name */
                                name?: (string|null);
                            }

                            /** Represents a GooGet. */
                            class GooGet implements IGooGet {

                                /**
                                 * Constructs a new GooGet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IGooGet);

                                /** GooGet name. */
                                public name: string;

                                /**
                                 * Creates a new GooGet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GooGet instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IGooGet): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet;

                                /**
                                 * Encodes the specified GooGet message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet.verify|verify} messages.
                                 * @param message GooGet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IGooGet, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified GooGet message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet.verify|verify} messages.
                                 * @param message GooGet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IGooGet, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a GooGet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GooGet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet;

                                /**
                                 * Decodes a GooGet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GooGet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet;

                                /**
                                 * Verifies a GooGet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GooGet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GooGet
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet;

                                /**
                                 * Creates a plain object from a GooGet message. Also converts values to other types if specified.
                                 * @param message GooGet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.GooGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GooGet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for GooGet
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a MSI. */
                            interface IMSI {

                                /** MSI source */
                                source?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** MSI properties */
                                properties?: (string[]|null);
                            }

                            /** Represents a MSI. */
                            class MSI implements IMSI {

                                /**
                                 * Constructs a new MSI.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IMSI);

                                /** MSI source. */
                                public source?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** MSI properties. */
                                public properties: string[];

                                /**
                                 * Creates a new MSI instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns MSI instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IMSI): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI;

                                /**
                                 * Encodes the specified MSI message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI.verify|verify} messages.
                                 * @param message MSI message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IMSI, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified MSI message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI.verify|verify} messages.
                                 * @param message MSI message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.IMSI, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a MSI message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns MSI
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI;

                                /**
                                 * Decodes a MSI message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns MSI
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI;

                                /**
                                 * Verifies a MSI message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a MSI message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns MSI
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI;

                                /**
                                 * Creates a plain object from a MSI message. Also converts values to other types if specified.
                                 * @param message MSI
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.PackageResource.MSI, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this MSI to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for MSI
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a RepositoryResource. */
                        interface IRepositoryResource {

                            /** RepositoryResource apt */
                            apt?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IAptRepository|null);

                            /** RepositoryResource yum */
                            yum?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IYumRepository|null);

                            /** RepositoryResource zypper */
                            zypper?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IZypperRepository|null);

                            /** RepositoryResource goo */
                            goo?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IGooRepository|null);
                        }

                        /** Represents a RepositoryResource. */
                        class RepositoryResource implements IRepositoryResource {

                            /**
                             * Constructs a new RepositoryResource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IRepositoryResource);

                            /** RepositoryResource apt. */
                            public apt?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IAptRepository|null);

                            /** RepositoryResource yum. */
                            public yum?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IYumRepository|null);

                            /** RepositoryResource zypper. */
                            public zypper?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IZypperRepository|null);

                            /** RepositoryResource goo. */
                            public goo?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IGooRepository|null);

                            /** RepositoryResource repository. */
                            public repository?: ("apt"|"yum"|"zypper"|"goo");

                            /**
                             * Creates a new RepositoryResource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RepositoryResource instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IRepositoryResource): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource;

                            /**
                             * Encodes the specified RepositoryResource message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.verify|verify} messages.
                             * @param message RepositoryResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IRepositoryResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RepositoryResource message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.verify|verify} messages.
                             * @param message RepositoryResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IRepositoryResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RepositoryResource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RepositoryResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource;

                            /**
                             * Decodes a RepositoryResource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RepositoryResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource;

                            /**
                             * Verifies a RepositoryResource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RepositoryResource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RepositoryResource
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource;

                            /**
                             * Creates a plain object from a RepositoryResource message. Also converts values to other types if specified.
                             * @param message RepositoryResource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RepositoryResource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RepositoryResource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace RepositoryResource {

                            /** Properties of an AptRepository. */
                            interface IAptRepository {

                                /** AptRepository archiveType */
                                archiveType?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository.ArchiveType|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository.ArchiveType|null);

                                /** AptRepository uri */
                                uri?: (string|null);

                                /** AptRepository distribution */
                                distribution?: (string|null);

                                /** AptRepository components */
                                components?: (string[]|null);

                                /** AptRepository gpgKey */
                                gpgKey?: (string|null);
                            }

                            /** Represents an AptRepository. */
                            class AptRepository implements IAptRepository {

                                /**
                                 * Constructs a new AptRepository.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IAptRepository);

                                /** AptRepository archiveType. */
                                public archiveType: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository.ArchiveType|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository.ArchiveType);

                                /** AptRepository uri. */
                                public uri: string;

                                /** AptRepository distribution. */
                                public distribution: string;

                                /** AptRepository components. */
                                public components: string[];

                                /** AptRepository gpgKey. */
                                public gpgKey: string;

                                /**
                                 * Creates a new AptRepository instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AptRepository instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IAptRepository): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository;

                                /**
                                 * Encodes the specified AptRepository message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository.verify|verify} messages.
                                 * @param message AptRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IAptRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AptRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository.verify|verify} messages.
                                 * @param message AptRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IAptRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AptRepository message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AptRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository;

                                /**
                                 * Decodes an AptRepository message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AptRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository;

                                /**
                                 * Verifies an AptRepository message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AptRepository message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AptRepository
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository;

                                /**
                                 * Creates a plain object from an AptRepository message. Also converts values to other types if specified.
                                 * @param message AptRepository
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.AptRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AptRepository to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AptRepository
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace AptRepository {

                                /** ArchiveType enum. */
                                enum ArchiveType {
                                    ARCHIVE_TYPE_UNSPECIFIED = 0,
                                    DEB = 1,
                                    DEB_SRC = 2
                                }
                            }

                            /** Properties of a YumRepository. */
                            interface IYumRepository {

                                /** YumRepository id */
                                id?: (string|null);

                                /** YumRepository displayName */
                                displayName?: (string|null);

                                /** YumRepository baseUrl */
                                baseUrl?: (string|null);

                                /** YumRepository gpgKeys */
                                gpgKeys?: (string[]|null);
                            }

                            /** Represents a YumRepository. */
                            class YumRepository implements IYumRepository {

                                /**
                                 * Constructs a new YumRepository.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IYumRepository);

                                /** YumRepository id. */
                                public id: string;

                                /** YumRepository displayName. */
                                public displayName: string;

                                /** YumRepository baseUrl. */
                                public baseUrl: string;

                                /** YumRepository gpgKeys. */
                                public gpgKeys: string[];

                                /**
                                 * Creates a new YumRepository instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns YumRepository instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IYumRepository): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository;

                                /**
                                 * Encodes the specified YumRepository message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository.verify|verify} messages.
                                 * @param message YumRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IYumRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified YumRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository.verify|verify} messages.
                                 * @param message YumRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IYumRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a YumRepository message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns YumRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository;

                                /**
                                 * Decodes a YumRepository message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns YumRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository;

                                /**
                                 * Verifies a YumRepository message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a YumRepository message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns YumRepository
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository;

                                /**
                                 * Creates a plain object from a YumRepository message. Also converts values to other types if specified.
                                 * @param message YumRepository
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.YumRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this YumRepository to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for YumRepository
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a ZypperRepository. */
                            interface IZypperRepository {

                                /** ZypperRepository id */
                                id?: (string|null);

                                /** ZypperRepository displayName */
                                displayName?: (string|null);

                                /** ZypperRepository baseUrl */
                                baseUrl?: (string|null);

                                /** ZypperRepository gpgKeys */
                                gpgKeys?: (string[]|null);
                            }

                            /** Represents a ZypperRepository. */
                            class ZypperRepository implements IZypperRepository {

                                /**
                                 * Constructs a new ZypperRepository.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IZypperRepository);

                                /** ZypperRepository id. */
                                public id: string;

                                /** ZypperRepository displayName. */
                                public displayName: string;

                                /** ZypperRepository baseUrl. */
                                public baseUrl: string;

                                /** ZypperRepository gpgKeys. */
                                public gpgKeys: string[];

                                /**
                                 * Creates a new ZypperRepository instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZypperRepository instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IZypperRepository): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository;

                                /**
                                 * Encodes the specified ZypperRepository message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository.verify|verify} messages.
                                 * @param message ZypperRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IZypperRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ZypperRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository.verify|verify} messages.
                                 * @param message ZypperRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IZypperRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a ZypperRepository message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZypperRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository;

                                /**
                                 * Decodes a ZypperRepository message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZypperRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository;

                                /**
                                 * Verifies a ZypperRepository message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZypperRepository message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZypperRepository
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository;

                                /**
                                 * Creates a plain object from a ZypperRepository message. Also converts values to other types if specified.
                                 * @param message ZypperRepository
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.ZypperRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZypperRepository to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ZypperRepository
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a GooRepository. */
                            interface IGooRepository {

                                /** GooRepository name */
                                name?: (string|null);

                                /** GooRepository url */
                                url?: (string|null);
                            }

                            /** Represents a GooRepository. */
                            class GooRepository implements IGooRepository {

                                /**
                                 * Constructs a new GooRepository.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IGooRepository);

                                /** GooRepository name. */
                                public name: string;

                                /** GooRepository url. */
                                public url: string;

                                /**
                                 * Creates a new GooRepository instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GooRepository instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IGooRepository): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository;

                                /**
                                 * Encodes the specified GooRepository message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository.verify|verify} messages.
                                 * @param message GooRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IGooRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified GooRepository message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository.verify|verify} messages.
                                 * @param message GooRepository message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.IGooRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a GooRepository message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GooRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository;

                                /**
                                 * Decodes a GooRepository message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GooRepository
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository;

                                /**
                                 * Verifies a GooRepository message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GooRepository message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GooRepository
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository;

                                /**
                                 * Creates a plain object from a GooRepository message. Also converts values to other types if specified.
                                 * @param message GooRepository
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.RepositoryResource.GooRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GooRepository to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for GooRepository
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of an ExecResource. */
                        interface IExecResource {

                            /** ExecResource validate */
                            validate?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec|null);

                            /** ExecResource enforce */
                            enforce?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec|null);
                        }

                        /** Represents an ExecResource. */
                        class ExecResource implements IExecResource {

                            /**
                             * Constructs a new ExecResource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IExecResource);

                            /** ExecResource validate. */
                            public validate?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec|null);

                            /** ExecResource enforce. */
                            public enforce?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec|null);

                            /**
                             * Creates a new ExecResource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ExecResource instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IExecResource): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource;

                            /**
                             * Encodes the specified ExecResource message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.verify|verify} messages.
                             * @param message ExecResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IExecResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ExecResource message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.verify|verify} messages.
                             * @param message ExecResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IExecResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ExecResource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ExecResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource;

                            /**
                             * Decodes an ExecResource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ExecResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource;

                            /**
                             * Verifies an ExecResource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ExecResource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ExecResource
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource;

                            /**
                             * Creates a plain object from an ExecResource message. Also converts values to other types if specified.
                             * @param message ExecResource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ExecResource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ExecResource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ExecResource {

                            /** Properties of an Exec. */
                            interface IExec {

                                /** Exec file */
                                file?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** Exec script */
                                script?: (string|null);

                                /** Exec args */
                                args?: (string[]|null);

                                /** Exec interpreter */
                                interpreter?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec.Interpreter|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec.Interpreter|null);

                                /** Exec outputFilePath */
                                outputFilePath?: (string|null);
                            }

                            /** Represents an Exec. */
                            class Exec implements IExec {

                                /**
                                 * Constructs a new Exec.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec);

                                /** Exec file. */
                                public file?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                                /** Exec script. */
                                public script?: (string|null);

                                /** Exec args. */
                                public args: string[];

                                /** Exec interpreter. */
                                public interpreter: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec.Interpreter|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec.Interpreter);

                                /** Exec outputFilePath. */
                                public outputFilePath: string;

                                /** Exec source. */
                                public source?: ("file"|"script");

                                /**
                                 * Creates a new Exec instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Exec instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec;

                                /**
                                 * Encodes the specified Exec message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec.verify|verify} messages.
                                 * @param message Exec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Exec message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec.verify|verify} messages.
                                 * @param message Exec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.IExec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an Exec message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Exec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec;

                                /**
                                 * Decodes an Exec message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Exec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec;

                                /**
                                 * Verifies an Exec message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an Exec message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Exec
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec;

                                /**
                                 * Creates a plain object from an Exec message. Also converts values to other types if specified.
                                 * @param message Exec
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.ExecResource.Exec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Exec to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Exec
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace Exec {

                                /** Interpreter enum. */
                                enum Interpreter {
                                    INTERPRETER_UNSPECIFIED = 0,
                                    NONE = 1,
                                    SHELL = 2,
                                    POWERSHELL = 3
                                }
                            }
                        }

                        /** Properties of a FileResource. */
                        interface IFileResource {

                            /** FileResource file */
                            file?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                            /** FileResource content */
                            content?: (string|null);

                            /** FileResource path */
                            path?: (string|null);

                            /** FileResource state */
                            state?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource.DesiredState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource.DesiredState|null);

                            /** FileResource permissions */
                            permissions?: (string|null);
                        }

                        /** Represents a FileResource. */
                        class FileResource implements IFileResource {

                            /**
                             * Constructs a new FileResource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFileResource);

                            /** FileResource file. */
                            public file?: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFile|null);

                            /** FileResource content. */
                            public content?: (string|null);

                            /** FileResource path. */
                            public path: string;

                            /** FileResource state. */
                            public state: (google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource.DesiredState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource.DesiredState);

                            /** FileResource permissions. */
                            public permissions: string;

                            /** FileResource source. */
                            public source?: ("file"|"content");

                            /**
                             * Creates a new FileResource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FileResource instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFileResource): google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource;

                            /**
                             * Encodes the specified FileResource message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource.verify|verify} messages.
                             * @param message FileResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFileResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FileResource message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource.verify|verify} messages.
                             * @param message FileResource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.IFileResource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FileResource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FileResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource;

                            /**
                             * Decodes a FileResource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FileResource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource;

                            /**
                             * Verifies a FileResource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FileResource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FileResource
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource;

                            /**
                             * Creates a plain object from a FileResource message. Also converts values to other types if specified.
                             * @param message FileResource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.Resource.FileResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FileResource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for FileResource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace FileResource {

                            /** DesiredState enum. */
                            enum DesiredState {
                                DESIRED_STATE_UNSPECIFIED = 0,
                                PRESENT = 1,
                                ABSENT = 2,
                                CONTENTS_MATCH = 3
                            }
                        }
                    }

                    /** Properties of a ResourceGroup. */
                    interface IResourceGroup {

                        /** ResourceGroup osFilter */
                        osFilter?: (google.cloud.osconfig.v1alpha.OSPolicy.IOSFilter|null);

                        /** ResourceGroup inventoryFilters */
                        inventoryFilters?: (google.cloud.osconfig.v1alpha.OSPolicy.IInventoryFilter[]|null);

                        /** ResourceGroup resources */
                        resources?: (google.cloud.osconfig.v1alpha.OSPolicy.IResource[]|null);
                    }

                    /** Represents a ResourceGroup. */
                    class ResourceGroup implements IResourceGroup {

                        /**
                         * Constructs a new ResourceGroup.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IResourceGroup);

                        /** ResourceGroup osFilter. */
                        public osFilter?: (google.cloud.osconfig.v1alpha.OSPolicy.IOSFilter|null);

                        /** ResourceGroup inventoryFilters. */
                        public inventoryFilters: google.cloud.osconfig.v1alpha.OSPolicy.IInventoryFilter[];

                        /** ResourceGroup resources. */
                        public resources: google.cloud.osconfig.v1alpha.OSPolicy.IResource[];

                        /**
                         * Creates a new ResourceGroup instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceGroup instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicy.IResourceGroup): google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup;

                        /**
                         * Encodes the specified ResourceGroup message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.verify|verify} messages.
                         * @param message ResourceGroup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicy.IResourceGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceGroup message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup.verify|verify} messages.
                         * @param message ResourceGroup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicy.IResourceGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceGroup message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup;

                        /**
                         * Decodes a ResourceGroup message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceGroup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup;

                        /**
                         * Verifies a ResourceGroup message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceGroup message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceGroup
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup;

                        /**
                         * Creates a plain object from a ResourceGroup message. Also converts values to other types if specified.
                         * @param message ResourceGroup
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicy.ResourceGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceGroup to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceGroup
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GetOSPolicyAssignmentReportRequest. */
                interface IGetOSPolicyAssignmentReportRequest {

                    /** GetOSPolicyAssignmentReportRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOSPolicyAssignmentReportRequest. */
                class GetOSPolicyAssignmentReportRequest implements IGetOSPolicyAssignmentReportRequest {

                    /**
                     * Constructs a new GetOSPolicyAssignmentReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentReportRequest);

                    /** GetOSPolicyAssignmentReportRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOSPolicyAssignmentReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOSPolicyAssignmentReportRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentReportRequest): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest;

                    /**
                     * Encodes the specified GetOSPolicyAssignmentReportRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest.verify|verify} messages.
                     * @param message GetOSPolicyAssignmentReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOSPolicyAssignmentReportRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest.verify|verify} messages.
                     * @param message GetOSPolicyAssignmentReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOSPolicyAssignmentReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOSPolicyAssignmentReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest;

                    /**
                     * Decodes a GetOSPolicyAssignmentReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOSPolicyAssignmentReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest;

                    /**
                     * Verifies a GetOSPolicyAssignmentReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOSPolicyAssignmentReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOSPolicyAssignmentReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest;

                    /**
                     * Creates a plain object from a GetOSPolicyAssignmentReportRequest message. Also converts values to other types if specified.
                     * @param message GetOSPolicyAssignmentReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOSPolicyAssignmentReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetOSPolicyAssignmentReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSPolicyAssignmentReportsRequest. */
                interface IListOSPolicyAssignmentReportsRequest {

                    /** ListOSPolicyAssignmentReportsRequest parent */
                    parent?: (string|null);

                    /** ListOSPolicyAssignmentReportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOSPolicyAssignmentReportsRequest filter */
                    filter?: (string|null);

                    /** ListOSPolicyAssignmentReportsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListOSPolicyAssignmentReportsRequest. */
                class ListOSPolicyAssignmentReportsRequest implements IListOSPolicyAssignmentReportsRequest {

                    /**
                     * Constructs a new ListOSPolicyAssignmentReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsRequest);

                    /** ListOSPolicyAssignmentReportsRequest parent. */
                    public parent: string;

                    /** ListOSPolicyAssignmentReportsRequest pageSize. */
                    public pageSize: number;

                    /** ListOSPolicyAssignmentReportsRequest filter. */
                    public filter: string;

                    /** ListOSPolicyAssignmentReportsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListOSPolicyAssignmentReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSPolicyAssignmentReportsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsRequest): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentReportsRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentReportsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSPolicyAssignmentReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSPolicyAssignmentReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest;

                    /**
                     * Decodes a ListOSPolicyAssignmentReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSPolicyAssignmentReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest;

                    /**
                     * Verifies a ListOSPolicyAssignmentReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSPolicyAssignmentReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSPolicyAssignmentReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest;

                    /**
                     * Creates a plain object from a ListOSPolicyAssignmentReportsRequest message. Also converts values to other types if specified.
                     * @param message ListOSPolicyAssignmentReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSPolicyAssignmentReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSPolicyAssignmentReportsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSPolicyAssignmentReportsResponse. */
                interface IListOSPolicyAssignmentReportsResponse {

                    /** ListOSPolicyAssignmentReportsResponse osPolicyAssignmentReports */
                    osPolicyAssignmentReports?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignmentReport[]|null);

                    /** ListOSPolicyAssignmentReportsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOSPolicyAssignmentReportsResponse. */
                class ListOSPolicyAssignmentReportsResponse implements IListOSPolicyAssignmentReportsResponse {

                    /**
                     * Constructs a new ListOSPolicyAssignmentReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsResponse);

                    /** ListOSPolicyAssignmentReportsResponse osPolicyAssignmentReports. */
                    public osPolicyAssignmentReports: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentReport[];

                    /** ListOSPolicyAssignmentReportsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOSPolicyAssignmentReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSPolicyAssignmentReportsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsResponse): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentReportsResponse message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentReportsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSPolicyAssignmentReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSPolicyAssignmentReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse;

                    /**
                     * Decodes a ListOSPolicyAssignmentReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSPolicyAssignmentReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse;

                    /**
                     * Verifies a ListOSPolicyAssignmentReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSPolicyAssignmentReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSPolicyAssignmentReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse;

                    /**
                     * Creates a plain object from a ListOSPolicyAssignmentReportsResponse message. Also converts values to other types if specified.
                     * @param message ListOSPolicyAssignmentReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSPolicyAssignmentReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSPolicyAssignmentReportsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a OSPolicyAssignmentReport. */
                interface IOSPolicyAssignmentReport {

                    /** OSPolicyAssignmentReport name */
                    name?: (string|null);

                    /** OSPolicyAssignmentReport instance */
                    instance?: (string|null);

                    /** OSPolicyAssignmentReport osPolicyAssignment */
                    osPolicyAssignment?: (string|null);

                    /** OSPolicyAssignmentReport osPolicyCompliances */
                    osPolicyCompliances?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.IOSPolicyCompliance[]|null);

                    /** OSPolicyAssignmentReport updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** OSPolicyAssignmentReport lastRunId */
                    lastRunId?: (string|null);
                }

                /** Represents a OSPolicyAssignmentReport. */
                class OSPolicyAssignmentReport implements IOSPolicyAssignmentReport {

                    /**
                     * Constructs a new OSPolicyAssignmentReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentReport);

                    /** OSPolicyAssignmentReport name. */
                    public name: string;

                    /** OSPolicyAssignmentReport instance. */
                    public instance: string;

                    /** OSPolicyAssignmentReport osPolicyAssignment. */
                    public osPolicyAssignment: string;

                    /** OSPolicyAssignmentReport osPolicyCompliances. */
                    public osPolicyCompliances: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.IOSPolicyCompliance[];

                    /** OSPolicyAssignmentReport updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** OSPolicyAssignmentReport lastRunId. */
                    public lastRunId: string;

                    /**
                     * Creates a new OSPolicyAssignmentReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSPolicyAssignmentReport instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentReport): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport;

                    /**
                     * Encodes the specified OSPolicyAssignmentReport message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.verify|verify} messages.
                     * @param message OSPolicyAssignmentReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSPolicyAssignmentReport message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.verify|verify} messages.
                     * @param message OSPolicyAssignmentReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSPolicyAssignmentReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSPolicyAssignmentReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport;

                    /**
                     * Decodes a OSPolicyAssignmentReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSPolicyAssignmentReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport;

                    /**
                     * Verifies a OSPolicyAssignmentReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSPolicyAssignmentReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSPolicyAssignmentReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport;

                    /**
                     * Creates a plain object from a OSPolicyAssignmentReport message. Also converts values to other types if specified.
                     * @param message OSPolicyAssignmentReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSPolicyAssignmentReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSPolicyAssignmentReport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OSPolicyAssignmentReport {

                    /** Properties of a OSPolicyCompliance. */
                    interface IOSPolicyCompliance {

                        /** OSPolicyCompliance osPolicyId */
                        osPolicyId?: (string|null);

                        /** OSPolicyCompliance complianceState */
                        complianceState?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.ComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.ComplianceState|null);

                        /** OSPolicyCompliance complianceStateReason */
                        complianceStateReason?: (string|null);

                        /** OSPolicyCompliance osPolicyResourceCompliances */
                        osPolicyResourceCompliances?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.IOSPolicyResourceCompliance[]|null);
                    }

                    /** Represents a OSPolicyCompliance. */
                    class OSPolicyCompliance implements IOSPolicyCompliance {

                        /**
                         * Constructs a new OSPolicyCompliance.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.IOSPolicyCompliance);

                        /** OSPolicyCompliance osPolicyId. */
                        public osPolicyId: string;

                        /** OSPolicyCompliance complianceState. */
                        public complianceState: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.ComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.ComplianceState);

                        /** OSPolicyCompliance complianceStateReason. */
                        public complianceStateReason: string;

                        /** OSPolicyCompliance osPolicyResourceCompliances. */
                        public osPolicyResourceCompliances: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.IOSPolicyResourceCompliance[];

                        /**
                         * Creates a new OSPolicyCompliance instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OSPolicyCompliance instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.IOSPolicyCompliance): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance;

                        /**
                         * Encodes the specified OSPolicyCompliance message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.verify|verify} messages.
                         * @param message OSPolicyCompliance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.IOSPolicyCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OSPolicyCompliance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.verify|verify} messages.
                         * @param message OSPolicyCompliance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.IOSPolicyCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a OSPolicyCompliance message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OSPolicyCompliance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance;

                        /**
                         * Decodes a OSPolicyCompliance message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OSPolicyCompliance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance;

                        /**
                         * Verifies a OSPolicyCompliance message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a OSPolicyCompliance message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OSPolicyCompliance
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance;

                        /**
                         * Creates a plain object from a OSPolicyCompliance message. Also converts values to other types if specified.
                         * @param message OSPolicyCompliance
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OSPolicyCompliance to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OSPolicyCompliance
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace OSPolicyCompliance {

                        /** ComplianceState enum. */
                        enum ComplianceState {
                            UNKNOWN = 0,
                            COMPLIANT = 1,
                            NON_COMPLIANT = 2
                        }

                        /** Properties of a OSPolicyResourceCompliance. */
                        interface IOSPolicyResourceCompliance {

                            /** OSPolicyResourceCompliance osPolicyResourceId */
                            osPolicyResourceId?: (string|null);

                            /** OSPolicyResourceCompliance configSteps */
                            configSteps?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IOSPolicyResourceConfigStep[]|null);

                            /** OSPolicyResourceCompliance complianceState */
                            complianceState?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ComplianceState|null);

                            /** OSPolicyResourceCompliance complianceStateReason */
                            complianceStateReason?: (string|null);

                            /** OSPolicyResourceCompliance execResourceOutput */
                            execResourceOutput?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IExecResourceOutput|null);
                        }

                        /** Represents a OSPolicyResourceCompliance. */
                        class OSPolicyResourceCompliance implements IOSPolicyResourceCompliance {

                            /**
                             * Constructs a new OSPolicyResourceCompliance.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.IOSPolicyResourceCompliance);

                            /** OSPolicyResourceCompliance osPolicyResourceId. */
                            public osPolicyResourceId: string;

                            /** OSPolicyResourceCompliance configSteps. */
                            public configSteps: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IOSPolicyResourceConfigStep[];

                            /** OSPolicyResourceCompliance complianceState. */
                            public complianceState: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ComplianceState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ComplianceState);

                            /** OSPolicyResourceCompliance complianceStateReason. */
                            public complianceStateReason: string;

                            /** OSPolicyResourceCompliance execResourceOutput. */
                            public execResourceOutput?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IExecResourceOutput|null);

                            /** OSPolicyResourceCompliance output. */
                            public output?: "execResourceOutput";

                            /**
                             * Creates a new OSPolicyResourceCompliance instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns OSPolicyResourceCompliance instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.IOSPolicyResourceCompliance): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance;

                            /**
                             * Encodes the specified OSPolicyResourceCompliance message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.verify|verify} messages.
                             * @param message OSPolicyResourceCompliance message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.IOSPolicyResourceCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified OSPolicyResourceCompliance message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.verify|verify} messages.
                             * @param message OSPolicyResourceCompliance message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.IOSPolicyResourceCompliance, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a OSPolicyResourceCompliance message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns OSPolicyResourceCompliance
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance;

                            /**
                             * Decodes a OSPolicyResourceCompliance message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns OSPolicyResourceCompliance
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance;

                            /**
                             * Verifies a OSPolicyResourceCompliance message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a OSPolicyResourceCompliance message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns OSPolicyResourceCompliance
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance;

                            /**
                             * Creates a plain object from a OSPolicyResourceCompliance message. Also converts values to other types if specified.
                             * @param message OSPolicyResourceCompliance
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this OSPolicyResourceCompliance to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for OSPolicyResourceCompliance
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace OSPolicyResourceCompliance {

                            /** Properties of a OSPolicyResourceConfigStep. */
                            interface IOSPolicyResourceConfigStep {

                                /** OSPolicyResourceConfigStep type */
                                type?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep.Type|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep.Type|null);

                                /** OSPolicyResourceConfigStep errorMessage */
                                errorMessage?: (string|null);
                            }

                            /** Represents a OSPolicyResourceConfigStep. */
                            class OSPolicyResourceConfigStep implements IOSPolicyResourceConfigStep {

                                /**
                                 * Constructs a new OSPolicyResourceConfigStep.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IOSPolicyResourceConfigStep);

                                /** OSPolicyResourceConfigStep type. */
                                public type: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep.Type|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep.Type);

                                /** OSPolicyResourceConfigStep errorMessage. */
                                public errorMessage: string;

                                /**
                                 * Creates a new OSPolicyResourceConfigStep instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OSPolicyResourceConfigStep instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IOSPolicyResourceConfigStep): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep;

                                /**
                                 * Encodes the specified OSPolicyResourceConfigStep message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep.verify|verify} messages.
                                 * @param message OSPolicyResourceConfigStep message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IOSPolicyResourceConfigStep, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified OSPolicyResourceConfigStep message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep.verify|verify} messages.
                                 * @param message OSPolicyResourceConfigStep message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IOSPolicyResourceConfigStep, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a OSPolicyResourceConfigStep message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OSPolicyResourceConfigStep
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep;

                                /**
                                 * Decodes a OSPolicyResourceConfigStep message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OSPolicyResourceConfigStep
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep;

                                /**
                                 * Verifies a OSPolicyResourceConfigStep message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a OSPolicyResourceConfigStep message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OSPolicyResourceConfigStep
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep;

                                /**
                                 * Creates a plain object from a OSPolicyResourceConfigStep message. Also converts values to other types if specified.
                                 * @param message OSPolicyResourceConfigStep
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.OSPolicyResourceConfigStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OSPolicyResourceConfigStep to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for OSPolicyResourceConfigStep
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace OSPolicyResourceConfigStep {

                                /** Type enum. */
                                enum Type {
                                    TYPE_UNSPECIFIED = 0,
                                    VALIDATION = 1,
                                    DESIRED_STATE_CHECK = 2,
                                    DESIRED_STATE_ENFORCEMENT = 3,
                                    DESIRED_STATE_CHECK_POST_ENFORCEMENT = 4
                                }
                            }

                            /** ComplianceState enum. */
                            enum ComplianceState {
                                UNKNOWN = 0,
                                COMPLIANT = 1,
                                NON_COMPLIANT = 2
                            }

                            /** Properties of an ExecResourceOutput. */
                            interface IExecResourceOutput {

                                /** ExecResourceOutput enforcementOutput */
                                enforcementOutput?: (Uint8Array|string|null);
                            }

                            /** Represents an ExecResourceOutput. */
                            class ExecResourceOutput implements IExecResourceOutput {

                                /**
                                 * Constructs a new ExecResourceOutput.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IExecResourceOutput);

                                /** ExecResourceOutput enforcementOutput. */
                                public enforcementOutput: (Uint8Array|string);

                                /**
                                 * Creates a new ExecResourceOutput instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ExecResourceOutput instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IExecResourceOutput): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput;

                                /**
                                 * Encodes the specified ExecResourceOutput message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput.verify|verify} messages.
                                 * @param message ExecResourceOutput message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IExecResourceOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ExecResourceOutput message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput.verify|verify} messages.
                                 * @param message ExecResourceOutput message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.IExecResourceOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ExecResourceOutput message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ExecResourceOutput
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput;

                                /**
                                 * Decodes an ExecResourceOutput message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ExecResourceOutput
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput;

                                /**
                                 * Verifies an ExecResourceOutput message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ExecResourceOutput message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ExecResourceOutput
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput;

                                /**
                                 * Creates a plain object from an ExecResourceOutput message. Also converts values to other types if specified.
                                 * @param message ExecResourceOutput
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport.OSPolicyCompliance.OSPolicyResourceCompliance.ExecResourceOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ExecResourceOutput to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ExecResourceOutput
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }
                }

                /** Properties of a OSPolicyAssignment. */
                interface IOSPolicyAssignment {

                    /** OSPolicyAssignment name */
                    name?: (string|null);

                    /** OSPolicyAssignment description */
                    description?: (string|null);

                    /** OSPolicyAssignment osPolicies */
                    osPolicies?: (google.cloud.osconfig.v1alpha.IOSPolicy[]|null);

                    /** OSPolicyAssignment instanceFilter */
                    instanceFilter?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.IInstanceFilter|null);

                    /** OSPolicyAssignment rollout */
                    rollout?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.IRollout|null);

                    /** OSPolicyAssignment revisionId */
                    revisionId?: (string|null);

                    /** OSPolicyAssignment revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** OSPolicyAssignment etag */
                    etag?: (string|null);

                    /** OSPolicyAssignment rolloutState */
                    rolloutState?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState|null);

                    /** OSPolicyAssignment baseline */
                    baseline?: (boolean|null);

                    /** OSPolicyAssignment deleted */
                    deleted?: (boolean|null);

                    /** OSPolicyAssignment reconciling */
                    reconciling?: (boolean|null);

                    /** OSPolicyAssignment uid */
                    uid?: (string|null);
                }

                /** Represents a OSPolicyAssignment. */
                class OSPolicyAssignment implements IOSPolicyAssignment {

                    /**
                     * Constructs a new OSPolicyAssignment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IOSPolicyAssignment);

                    /** OSPolicyAssignment name. */
                    public name: string;

                    /** OSPolicyAssignment description. */
                    public description: string;

                    /** OSPolicyAssignment osPolicies. */
                    public osPolicies: google.cloud.osconfig.v1alpha.IOSPolicy[];

                    /** OSPolicyAssignment instanceFilter. */
                    public instanceFilter?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.IInstanceFilter|null);

                    /** OSPolicyAssignment rollout. */
                    public rollout?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.IRollout|null);

                    /** OSPolicyAssignment revisionId. */
                    public revisionId: string;

                    /** OSPolicyAssignment revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** OSPolicyAssignment etag. */
                    public etag: string;

                    /** OSPolicyAssignment rolloutState. */
                    public rolloutState: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignment.RolloutState);

                    /** OSPolicyAssignment baseline. */
                    public baseline: boolean;

                    /** OSPolicyAssignment deleted. */
                    public deleted: boolean;

                    /** OSPolicyAssignment reconciling. */
                    public reconciling: boolean;

                    /** OSPolicyAssignment uid. */
                    public uid: string;

                    /**
                     * Creates a new OSPolicyAssignment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSPolicyAssignment instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IOSPolicyAssignment): google.cloud.osconfig.v1alpha.OSPolicyAssignment;

                    /**
                     * Encodes the specified OSPolicyAssignment message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.verify|verify} messages.
                     * @param message OSPolicyAssignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IOSPolicyAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSPolicyAssignment message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.verify|verify} messages.
                     * @param message OSPolicyAssignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IOSPolicyAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSPolicyAssignment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSPolicyAssignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignment;

                    /**
                     * Decodes a OSPolicyAssignment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSPolicyAssignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignment;

                    /**
                     * Verifies a OSPolicyAssignment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSPolicyAssignment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSPolicyAssignment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignment;

                    /**
                     * Creates a plain object from a OSPolicyAssignment message. Also converts values to other types if specified.
                     * @param message OSPolicyAssignment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSPolicyAssignment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSPolicyAssignment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OSPolicyAssignment {

                    /** Properties of a LabelSet. */
                    interface ILabelSet {

                        /** LabelSet labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a LabelSet. */
                    class LabelSet implements ILabelSet {

                        /**
                         * Constructs a new LabelSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet);

                        /** LabelSet labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new LabelSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LabelSet instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet): google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet;

                        /**
                         * Encodes the specified LabelSet message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet.verify|verify} messages.
                         * @param message LabelSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LabelSet message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet.verify|verify} messages.
                         * @param message LabelSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LabelSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LabelSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet;

                        /**
                         * Decodes a LabelSet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LabelSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet;

                        /**
                         * Verifies a LabelSet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LabelSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LabelSet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet;

                        /**
                         * Creates a plain object from a LabelSet message. Also converts values to other types if specified.
                         * @param message LabelSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.LabelSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LabelSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LabelSet
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InstanceFilter. */
                    interface IInstanceFilter {

                        /** InstanceFilter all */
                        all?: (boolean|null);

                        /** InstanceFilter osShortNames */
                        osShortNames?: (string[]|null);

                        /** InstanceFilter inclusionLabels */
                        inclusionLabels?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet[]|null);

                        /** InstanceFilter exclusionLabels */
                        exclusionLabels?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet[]|null);

                        /** InstanceFilter inventories */
                        inventories?: (google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.IInventory[]|null);
                    }

                    /** Represents an InstanceFilter. */
                    class InstanceFilter implements IInstanceFilter {

                        /**
                         * Constructs a new InstanceFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IInstanceFilter);

                        /** InstanceFilter all. */
                        public all: boolean;

                        /** InstanceFilter osShortNames. */
                        public osShortNames: string[];

                        /** InstanceFilter inclusionLabels. */
                        public inclusionLabels: google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet[];

                        /** InstanceFilter exclusionLabels. */
                        public exclusionLabels: google.cloud.osconfig.v1alpha.OSPolicyAssignment.ILabelSet[];

                        /** InstanceFilter inventories. */
                        public inventories: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.IInventory[];

                        /**
                         * Creates a new InstanceFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstanceFilter instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IInstanceFilter): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter;

                        /**
                         * Encodes the specified InstanceFilter message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.verify|verify} messages.
                         * @param message InstanceFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IInstanceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstanceFilter message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.verify|verify} messages.
                         * @param message InstanceFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IInstanceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstanceFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstanceFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter;

                        /**
                         * Decodes an InstanceFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstanceFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter;

                        /**
                         * Verifies an InstanceFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstanceFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstanceFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter;

                        /**
                         * Creates a plain object from an InstanceFilter message. Also converts values to other types if specified.
                         * @param message InstanceFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstanceFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstanceFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace InstanceFilter {

                        /** Properties of an Inventory. */
                        interface IInventory {

                            /** Inventory osShortName */
                            osShortName?: (string|null);

                            /** Inventory osVersion */
                            osVersion?: (string|null);
                        }

                        /** Represents an Inventory. */
                        class Inventory implements IInventory {

                            /**
                             * Constructs a new Inventory.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.IInventory);

                            /** Inventory osShortName. */
                            public osShortName: string;

                            /** Inventory osVersion. */
                            public osVersion: string;

                            /**
                             * Creates a new Inventory instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Inventory instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.IInventory): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory;

                            /**
                             * Encodes the specified Inventory message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory.verify|verify} messages.
                             * @param message Inventory message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Inventory message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory.verify|verify} messages.
                             * @param message Inventory message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.IInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Inventory message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Inventory
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory;

                            /**
                             * Decodes an Inventory message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Inventory
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory;

                            /**
                             * Verifies an Inventory message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Inventory message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Inventory
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory;

                            /**
                             * Creates a plain object from an Inventory message. Also converts values to other types if specified.
                             * @param message Inventory
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.InstanceFilter.Inventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Inventory to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Inventory
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Rollout. */
                    interface IRollout {

                        /** Rollout disruptionBudget */
                        disruptionBudget?: (google.cloud.osconfig.v1alpha.IFixedOrPercent|null);

                        /** Rollout minWaitDuration */
                        minWaitDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a Rollout. */
                    class Rollout implements IRollout {

                        /**
                         * Constructs a new Rollout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IRollout);

                        /** Rollout disruptionBudget. */
                        public disruptionBudget?: (google.cloud.osconfig.v1alpha.IFixedOrPercent|null);

                        /** Rollout minWaitDuration. */
                        public minWaitDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new Rollout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Rollout instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IRollout): google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout;

                        /**
                         * Encodes the specified Rollout message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout.verify|verify} messages.
                         * @param message Rollout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Rollout message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout.verify|verify} messages.
                         * @param message Rollout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Rollout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Rollout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout;

                        /**
                         * Decodes a Rollout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Rollout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout;

                        /**
                         * Verifies a Rollout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Rollout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Rollout
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout;

                        /**
                         * Creates a plain object from a Rollout message. Also converts values to other types if specified.
                         * @param message Rollout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignment.Rollout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Rollout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Rollout
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RolloutState enum. */
                    enum RolloutState {
                        ROLLOUT_STATE_UNSPECIFIED = 0,
                        IN_PROGRESS = 1,
                        CANCELLING = 2,
                        CANCELLED = 3,
                        SUCCEEDED = 4
                    }
                }

                /** Properties of a OSPolicyAssignmentOperationMetadata. */
                interface IOSPolicyAssignmentOperationMetadata {

                    /** OSPolicyAssignmentOperationMetadata osPolicyAssignment */
                    osPolicyAssignment?: (string|null);

                    /** OSPolicyAssignmentOperationMetadata apiMethod */
                    apiMethod?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod|null);

                    /** OSPolicyAssignmentOperationMetadata rolloutState */
                    rolloutState?: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState|null);

                    /** OSPolicyAssignmentOperationMetadata rolloutStartTime */
                    rolloutStartTime?: (google.protobuf.ITimestamp|null);

                    /** OSPolicyAssignmentOperationMetadata rolloutUpdateTime */
                    rolloutUpdateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a OSPolicyAssignmentOperationMetadata. */
                class OSPolicyAssignmentOperationMetadata implements IOSPolicyAssignmentOperationMetadata {

                    /**
                     * Constructs a new OSPolicyAssignmentOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentOperationMetadata);

                    /** OSPolicyAssignmentOperationMetadata osPolicyAssignment. */
                    public osPolicyAssignment: string;

                    /** OSPolicyAssignmentOperationMetadata apiMethod. */
                    public apiMethod: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.APIMethod);

                    /** OSPolicyAssignmentOperationMetadata rolloutState. */
                    public rolloutState: (google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState|keyof typeof google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.RolloutState);

                    /** OSPolicyAssignmentOperationMetadata rolloutStartTime. */
                    public rolloutStartTime?: (google.protobuf.ITimestamp|null);

                    /** OSPolicyAssignmentOperationMetadata rolloutUpdateTime. */
                    public rolloutUpdateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OSPolicyAssignmentOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSPolicyAssignmentOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentOperationMetadata): google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata;

                    /**
                     * Encodes the specified OSPolicyAssignmentOperationMetadata message. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.verify|verify} messages.
                     * @param message OSPolicyAssignmentOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSPolicyAssignmentOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata.verify|verify} messages.
                     * @param message OSPolicyAssignmentOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IOSPolicyAssignmentOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSPolicyAssignmentOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSPolicyAssignmentOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata;

                    /**
                     * Decodes a OSPolicyAssignmentOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSPolicyAssignmentOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata;

                    /**
                     * Verifies a OSPolicyAssignmentOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSPolicyAssignmentOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSPolicyAssignmentOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata;

                    /**
                     * Creates a plain object from a OSPolicyAssignmentOperationMetadata message. Also converts values to other types if specified.
                     * @param message OSPolicyAssignmentOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.OSPolicyAssignmentOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSPolicyAssignmentOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSPolicyAssignmentOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OSPolicyAssignmentOperationMetadata {

                    /** APIMethod enum. */
                    enum APIMethod {
                        API_METHOD_UNSPECIFIED = 0,
                        CREATE = 1,
                        UPDATE = 2,
                        DELETE = 3
                    }

                    /** RolloutState enum. */
                    enum RolloutState {
                        ROLLOUT_STATE_UNSPECIFIED = 0,
                        IN_PROGRESS = 1,
                        CANCELLING = 2,
                        CANCELLED = 3,
                        SUCCEEDED = 4
                    }
                }

                /** Properties of a CreateOSPolicyAssignmentRequest. */
                interface ICreateOSPolicyAssignmentRequest {

                    /** CreateOSPolicyAssignmentRequest parent */
                    parent?: (string|null);

                    /** CreateOSPolicyAssignmentRequest osPolicyAssignment */
                    osPolicyAssignment?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignment|null);

                    /** CreateOSPolicyAssignmentRequest osPolicyAssignmentId */
                    osPolicyAssignmentId?: (string|null);
                }

                /** Represents a CreateOSPolicyAssignmentRequest. */
                class CreateOSPolicyAssignmentRequest implements ICreateOSPolicyAssignmentRequest {

                    /**
                     * Constructs a new CreateOSPolicyAssignmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.ICreateOSPolicyAssignmentRequest);

                    /** CreateOSPolicyAssignmentRequest parent. */
                    public parent: string;

                    /** CreateOSPolicyAssignmentRequest osPolicyAssignment. */
                    public osPolicyAssignment?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignment|null);

                    /** CreateOSPolicyAssignmentRequest osPolicyAssignmentId. */
                    public osPolicyAssignmentId: string;

                    /**
                     * Creates a new CreateOSPolicyAssignmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateOSPolicyAssignmentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.ICreateOSPolicyAssignmentRequest): google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest;

                    /**
                     * Encodes the specified CreateOSPolicyAssignmentRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message CreateOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.ICreateOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateOSPolicyAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message CreateOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.ICreateOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateOSPolicyAssignmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest;

                    /**
                     * Decodes a CreateOSPolicyAssignmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest;

                    /**
                     * Verifies a CreateOSPolicyAssignmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateOSPolicyAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateOSPolicyAssignmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest;

                    /**
                     * Creates a plain object from a CreateOSPolicyAssignmentRequest message. Also converts values to other types if specified.
                     * @param message CreateOSPolicyAssignmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.CreateOSPolicyAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateOSPolicyAssignmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateOSPolicyAssignmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateOSPolicyAssignmentRequest. */
                interface IUpdateOSPolicyAssignmentRequest {

                    /** UpdateOSPolicyAssignmentRequest osPolicyAssignment */
                    osPolicyAssignment?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignment|null);

                    /** UpdateOSPolicyAssignmentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateOSPolicyAssignmentRequest. */
                class UpdateOSPolicyAssignmentRequest implements IUpdateOSPolicyAssignmentRequest {

                    /**
                     * Constructs a new UpdateOSPolicyAssignmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IUpdateOSPolicyAssignmentRequest);

                    /** UpdateOSPolicyAssignmentRequest osPolicyAssignment. */
                    public osPolicyAssignment?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignment|null);

                    /** UpdateOSPolicyAssignmentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateOSPolicyAssignmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateOSPolicyAssignmentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IUpdateOSPolicyAssignmentRequest): google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest;

                    /**
                     * Encodes the specified UpdateOSPolicyAssignmentRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message UpdateOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IUpdateOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateOSPolicyAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message UpdateOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IUpdateOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateOSPolicyAssignmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest;

                    /**
                     * Decodes an UpdateOSPolicyAssignmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest;

                    /**
                     * Verifies an UpdateOSPolicyAssignmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateOSPolicyAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateOSPolicyAssignmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest;

                    /**
                     * Creates a plain object from an UpdateOSPolicyAssignmentRequest message. Also converts values to other types if specified.
                     * @param message UpdateOSPolicyAssignmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.UpdateOSPolicyAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateOSPolicyAssignmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateOSPolicyAssignmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetOSPolicyAssignmentRequest. */
                interface IGetOSPolicyAssignmentRequest {

                    /** GetOSPolicyAssignmentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOSPolicyAssignmentRequest. */
                class GetOSPolicyAssignmentRequest implements IGetOSPolicyAssignmentRequest {

                    /**
                     * Constructs a new GetOSPolicyAssignmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentRequest);

                    /** GetOSPolicyAssignmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOSPolicyAssignmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOSPolicyAssignmentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentRequest): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest;

                    /**
                     * Encodes the specified GetOSPolicyAssignmentRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message GetOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOSPolicyAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message GetOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOSPolicyAssignmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest;

                    /**
                     * Decodes a GetOSPolicyAssignmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest;

                    /**
                     * Verifies a GetOSPolicyAssignmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOSPolicyAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOSPolicyAssignmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest;

                    /**
                     * Creates a plain object from a GetOSPolicyAssignmentRequest message. Also converts values to other types if specified.
                     * @param message GetOSPolicyAssignmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.GetOSPolicyAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOSPolicyAssignmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetOSPolicyAssignmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSPolicyAssignmentsRequest. */
                interface IListOSPolicyAssignmentsRequest {

                    /** ListOSPolicyAssignmentsRequest parent */
                    parent?: (string|null);

                    /** ListOSPolicyAssignmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOSPolicyAssignmentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListOSPolicyAssignmentsRequest. */
                class ListOSPolicyAssignmentsRequest implements IListOSPolicyAssignmentsRequest {

                    /**
                     * Constructs a new ListOSPolicyAssignmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsRequest);

                    /** ListOSPolicyAssignmentsRequest parent. */
                    public parent: string;

                    /** ListOSPolicyAssignmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListOSPolicyAssignmentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListOSPolicyAssignmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSPolicyAssignmentsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsRequest): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentsRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSPolicyAssignmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSPolicyAssignmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest;

                    /**
                     * Decodes a ListOSPolicyAssignmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSPolicyAssignmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest;

                    /**
                     * Verifies a ListOSPolicyAssignmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSPolicyAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSPolicyAssignmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest;

                    /**
                     * Creates a plain object from a ListOSPolicyAssignmentsRequest message. Also converts values to other types if specified.
                     * @param message ListOSPolicyAssignmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSPolicyAssignmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSPolicyAssignmentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSPolicyAssignmentsResponse. */
                interface IListOSPolicyAssignmentsResponse {

                    /** ListOSPolicyAssignmentsResponse osPolicyAssignments */
                    osPolicyAssignments?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignment[]|null);

                    /** ListOSPolicyAssignmentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOSPolicyAssignmentsResponse. */
                class ListOSPolicyAssignmentsResponse implements IListOSPolicyAssignmentsResponse {

                    /**
                     * Constructs a new ListOSPolicyAssignmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsResponse);

                    /** ListOSPolicyAssignmentsResponse osPolicyAssignments. */
                    public osPolicyAssignments: google.cloud.osconfig.v1alpha.IOSPolicyAssignment[];

                    /** ListOSPolicyAssignmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOSPolicyAssignmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSPolicyAssignmentsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsResponse): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentsResponse message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSPolicyAssignmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSPolicyAssignmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse;

                    /**
                     * Decodes a ListOSPolicyAssignmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSPolicyAssignmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse;

                    /**
                     * Verifies a ListOSPolicyAssignmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSPolicyAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSPolicyAssignmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse;

                    /**
                     * Creates a plain object from a ListOSPolicyAssignmentsResponse message. Also converts values to other types if specified.
                     * @param message ListOSPolicyAssignmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSPolicyAssignmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSPolicyAssignmentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSPolicyAssignmentRevisionsRequest. */
                interface IListOSPolicyAssignmentRevisionsRequest {

                    /** ListOSPolicyAssignmentRevisionsRequest name */
                    name?: (string|null);

                    /** ListOSPolicyAssignmentRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOSPolicyAssignmentRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListOSPolicyAssignmentRevisionsRequest. */
                class ListOSPolicyAssignmentRevisionsRequest implements IListOSPolicyAssignmentRevisionsRequest {

                    /**
                     * Constructs a new ListOSPolicyAssignmentRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsRequest);

                    /** ListOSPolicyAssignmentRevisionsRequest name. */
                    public name: string;

                    /** ListOSPolicyAssignmentRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListOSPolicyAssignmentRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListOSPolicyAssignmentRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSPolicyAssignmentRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsRequest): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentRevisionsRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSPolicyAssignmentRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSPolicyAssignmentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest;

                    /**
                     * Decodes a ListOSPolicyAssignmentRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSPolicyAssignmentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest;

                    /**
                     * Verifies a ListOSPolicyAssignmentRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSPolicyAssignmentRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSPolicyAssignmentRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest;

                    /**
                     * Creates a plain object from a ListOSPolicyAssignmentRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListOSPolicyAssignmentRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSPolicyAssignmentRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSPolicyAssignmentRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSPolicyAssignmentRevisionsResponse. */
                interface IListOSPolicyAssignmentRevisionsResponse {

                    /** ListOSPolicyAssignmentRevisionsResponse osPolicyAssignments */
                    osPolicyAssignments?: (google.cloud.osconfig.v1alpha.IOSPolicyAssignment[]|null);

                    /** ListOSPolicyAssignmentRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOSPolicyAssignmentRevisionsResponse. */
                class ListOSPolicyAssignmentRevisionsResponse implements IListOSPolicyAssignmentRevisionsResponse {

                    /**
                     * Constructs a new ListOSPolicyAssignmentRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsResponse);

                    /** ListOSPolicyAssignmentRevisionsResponse osPolicyAssignments. */
                    public osPolicyAssignments: google.cloud.osconfig.v1alpha.IOSPolicyAssignment[];

                    /** ListOSPolicyAssignmentRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOSPolicyAssignmentRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSPolicyAssignmentRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsResponse): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentRevisionsResponse message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSPolicyAssignmentRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse.verify|verify} messages.
                     * @param message ListOSPolicyAssignmentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSPolicyAssignmentRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSPolicyAssignmentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse;

                    /**
                     * Decodes a ListOSPolicyAssignmentRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSPolicyAssignmentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse;

                    /**
                     * Verifies a ListOSPolicyAssignmentRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSPolicyAssignmentRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSPolicyAssignmentRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse;

                    /**
                     * Creates a plain object from a ListOSPolicyAssignmentRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListOSPolicyAssignmentRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSPolicyAssignmentRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSPolicyAssignmentRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteOSPolicyAssignmentRequest. */
                interface IDeleteOSPolicyAssignmentRequest {

                    /** DeleteOSPolicyAssignmentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteOSPolicyAssignmentRequest. */
                class DeleteOSPolicyAssignmentRequest implements IDeleteOSPolicyAssignmentRequest {

                    /**
                     * Constructs a new DeleteOSPolicyAssignmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IDeleteOSPolicyAssignmentRequest);

                    /** DeleteOSPolicyAssignmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteOSPolicyAssignmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteOSPolicyAssignmentRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IDeleteOSPolicyAssignmentRequest): google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest;

                    /**
                     * Encodes the specified DeleteOSPolicyAssignmentRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message DeleteOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IDeleteOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteOSPolicyAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest.verify|verify} messages.
                     * @param message DeleteOSPolicyAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IDeleteOSPolicyAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteOSPolicyAssignmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest;

                    /**
                     * Decodes a DeleteOSPolicyAssignmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteOSPolicyAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest;

                    /**
                     * Verifies a DeleteOSPolicyAssignmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteOSPolicyAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteOSPolicyAssignmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest;

                    /**
                     * Creates a plain object from a DeleteOSPolicyAssignmentRequest message. Also converts values to other types if specified.
                     * @param message DeleteOSPolicyAssignmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.DeleteOSPolicyAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteOSPolicyAssignmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteOSPolicyAssignmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FixedOrPercent. */
                interface IFixedOrPercent {

                    /** FixedOrPercent fixed */
                    fixed?: (number|null);

                    /** FixedOrPercent percent */
                    percent?: (number|null);
                }

                /** Represents a FixedOrPercent. */
                class FixedOrPercent implements IFixedOrPercent {

                    /**
                     * Constructs a new FixedOrPercent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IFixedOrPercent);

                    /** FixedOrPercent fixed. */
                    public fixed?: (number|null);

                    /** FixedOrPercent percent. */
                    public percent?: (number|null);

                    /** FixedOrPercent mode. */
                    public mode?: ("fixed"|"percent");

                    /**
                     * Creates a new FixedOrPercent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FixedOrPercent instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IFixedOrPercent): google.cloud.osconfig.v1alpha.FixedOrPercent;

                    /**
                     * Encodes the specified FixedOrPercent message. Does not implicitly {@link google.cloud.osconfig.v1alpha.FixedOrPercent.verify|verify} messages.
                     * @param message FixedOrPercent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IFixedOrPercent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FixedOrPercent message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.FixedOrPercent.verify|verify} messages.
                     * @param message FixedOrPercent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IFixedOrPercent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FixedOrPercent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FixedOrPercent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.FixedOrPercent;

                    /**
                     * Decodes a FixedOrPercent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FixedOrPercent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.FixedOrPercent;

                    /**
                     * Verifies a FixedOrPercent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FixedOrPercent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FixedOrPercent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.FixedOrPercent;

                    /**
                     * Creates a plain object from a FixedOrPercent message. Also converts values to other types if specified.
                     * @param message FixedOrPercent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.FixedOrPercent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FixedOrPercent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FixedOrPercent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an OsConfigZonalService */
                class OsConfigZonalService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OsConfigZonalService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OsConfigZonalService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OsConfigZonalService;

                    /**
                     * Calls CreateOSPolicyAssignment.
                     * @param request CreateOSPolicyAssignmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.ICreateOSPolicyAssignmentRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.CreateOSPolicyAssignmentCallback): void;

                    /**
                     * Calls CreateOSPolicyAssignment.
                     * @param request CreateOSPolicyAssignmentRequest message or plain object
                     * @returns Promise
                     */
                    public createOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.ICreateOSPolicyAssignmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateOSPolicyAssignment.
                     * @param request UpdateOSPolicyAssignmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.IUpdateOSPolicyAssignmentRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.UpdateOSPolicyAssignmentCallback): void;

                    /**
                     * Calls UpdateOSPolicyAssignment.
                     * @param request UpdateOSPolicyAssignmentRequest message or plain object
                     * @returns Promise
                     */
                    public updateOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.IUpdateOSPolicyAssignmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetOSPolicyAssignment.
                     * @param request GetOSPolicyAssignmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OSPolicyAssignment
                     */
                    public getOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.GetOSPolicyAssignmentCallback): void;

                    /**
                     * Calls GetOSPolicyAssignment.
                     * @param request GetOSPolicyAssignmentRequest message or plain object
                     * @returns Promise
                     */
                    public getOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentRequest): Promise<google.cloud.osconfig.v1alpha.OSPolicyAssignment>;

                    /**
                     * Calls ListOSPolicyAssignments.
                     * @param request ListOSPolicyAssignmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOSPolicyAssignmentsResponse
                     */
                    public listOSPolicyAssignments(request: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.ListOSPolicyAssignmentsCallback): void;

                    /**
                     * Calls ListOSPolicyAssignments.
                     * @param request ListOSPolicyAssignmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listOSPolicyAssignments(request: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentsRequest): Promise<google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse>;

                    /**
                     * Calls ListOSPolicyAssignmentRevisions.
                     * @param request ListOSPolicyAssignmentRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOSPolicyAssignmentRevisionsResponse
                     */
                    public listOSPolicyAssignmentRevisions(request: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.ListOSPolicyAssignmentRevisionsCallback): void;

                    /**
                     * Calls ListOSPolicyAssignmentRevisions.
                     * @param request ListOSPolicyAssignmentRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listOSPolicyAssignmentRevisions(request: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentRevisionsRequest): Promise<google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse>;

                    /**
                     * Calls DeleteOSPolicyAssignment.
                     * @param request DeleteOSPolicyAssignmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.IDeleteOSPolicyAssignmentRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.DeleteOSPolicyAssignmentCallback): void;

                    /**
                     * Calls DeleteOSPolicyAssignment.
                     * @param request DeleteOSPolicyAssignmentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteOSPolicyAssignment(request: google.cloud.osconfig.v1alpha.IDeleteOSPolicyAssignmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetInstanceOSPoliciesCompliance.
                     * @param request GetInstanceOSPoliciesComplianceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InstanceOSPoliciesCompliance
                     */
                    public getInstanceOSPoliciesCompliance(request: google.cloud.osconfig.v1alpha.IGetInstanceOSPoliciesComplianceRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.GetInstanceOSPoliciesComplianceCallback): void;

                    /**
                     * Calls GetInstanceOSPoliciesCompliance.
                     * @param request GetInstanceOSPoliciesComplianceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstanceOSPoliciesCompliance(request: google.cloud.osconfig.v1alpha.IGetInstanceOSPoliciesComplianceRequest): Promise<google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance>;

                    /**
                     * Calls ListInstanceOSPoliciesCompliances.
                     * @param request ListInstanceOSPoliciesCompliancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstanceOSPoliciesCompliancesResponse
                     */
                    public listInstanceOSPoliciesCompliances(request: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.ListInstanceOSPoliciesCompliancesCallback): void;

                    /**
                     * Calls ListInstanceOSPoliciesCompliances.
                     * @param request ListInstanceOSPoliciesCompliancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstanceOSPoliciesCompliances(request: google.cloud.osconfig.v1alpha.IListInstanceOSPoliciesCompliancesRequest): Promise<google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse>;

                    /**
                     * Calls GetOSPolicyAssignmentReport.
                     * @param request GetOSPolicyAssignmentReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OSPolicyAssignmentReport
                     */
                    public getOSPolicyAssignmentReport(request: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentReportRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.GetOSPolicyAssignmentReportCallback): void;

                    /**
                     * Calls GetOSPolicyAssignmentReport.
                     * @param request GetOSPolicyAssignmentReportRequest message or plain object
                     * @returns Promise
                     */
                    public getOSPolicyAssignmentReport(request: google.cloud.osconfig.v1alpha.IGetOSPolicyAssignmentReportRequest): Promise<google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport>;

                    /**
                     * Calls ListOSPolicyAssignmentReports.
                     * @param request ListOSPolicyAssignmentReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOSPolicyAssignmentReportsResponse
                     */
                    public listOSPolicyAssignmentReports(request: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.ListOSPolicyAssignmentReportsCallback): void;

                    /**
                     * Calls ListOSPolicyAssignmentReports.
                     * @param request ListOSPolicyAssignmentReportsRequest message or plain object
                     * @returns Promise
                     */
                    public listOSPolicyAssignmentReports(request: google.cloud.osconfig.v1alpha.IListOSPolicyAssignmentReportsRequest): Promise<google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse>;

                    /**
                     * Calls GetInventory.
                     * @param request GetInventoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Inventory
                     */
                    public getInventory(request: google.cloud.osconfig.v1alpha.IGetInventoryRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.GetInventoryCallback): void;

                    /**
                     * Calls GetInventory.
                     * @param request GetInventoryRequest message or plain object
                     * @returns Promise
                     */
                    public getInventory(request: google.cloud.osconfig.v1alpha.IGetInventoryRequest): Promise<google.cloud.osconfig.v1alpha.Inventory>;

                    /**
                     * Calls ListInventories.
                     * @param request ListInventoriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInventoriesResponse
                     */
                    public listInventories(request: google.cloud.osconfig.v1alpha.IListInventoriesRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.ListInventoriesCallback): void;

                    /**
                     * Calls ListInventories.
                     * @param request ListInventoriesRequest message or plain object
                     * @returns Promise
                     */
                    public listInventories(request: google.cloud.osconfig.v1alpha.IListInventoriesRequest): Promise<google.cloud.osconfig.v1alpha.ListInventoriesResponse>;

                    /**
                     * Calls GetVulnerabilityReport.
                     * @param request GetVulnerabilityReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VulnerabilityReport
                     */
                    public getVulnerabilityReport(request: google.cloud.osconfig.v1alpha.IGetVulnerabilityReportRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.GetVulnerabilityReportCallback): void;

                    /**
                     * Calls GetVulnerabilityReport.
                     * @param request GetVulnerabilityReportRequest message or plain object
                     * @returns Promise
                     */
                    public getVulnerabilityReport(request: google.cloud.osconfig.v1alpha.IGetVulnerabilityReportRequest): Promise<google.cloud.osconfig.v1alpha.VulnerabilityReport>;

                    /**
                     * Calls ListVulnerabilityReports.
                     * @param request ListVulnerabilityReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVulnerabilityReportsResponse
                     */
                    public listVulnerabilityReports(request: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsRequest, callback: google.cloud.osconfig.v1alpha.OsConfigZonalService.ListVulnerabilityReportsCallback): void;

                    /**
                     * Calls ListVulnerabilityReports.
                     * @param request ListVulnerabilityReportsRequest message or plain object
                     * @returns Promise
                     */
                    public listVulnerabilityReports(request: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsRequest): Promise<google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse>;
                }

                namespace OsConfigZonalService {

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|createOSPolicyAssignment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateOSPolicyAssignmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|updateOSPolicyAssignment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateOSPolicyAssignmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|getOSPolicyAssignment}.
                     * @param error Error, if any
                     * @param [response] OSPolicyAssignment
                     */
                    type GetOSPolicyAssignmentCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.OSPolicyAssignment) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|listOSPolicyAssignments}.
                     * @param error Error, if any
                     * @param [response] ListOSPolicyAssignmentsResponse
                     */
                    type ListOSPolicyAssignmentsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|listOSPolicyAssignmentRevisions}.
                     * @param error Error, if any
                     * @param [response] ListOSPolicyAssignmentRevisionsResponse
                     */
                    type ListOSPolicyAssignmentRevisionsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|deleteOSPolicyAssignment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteOSPolicyAssignmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|getInstanceOSPoliciesCompliance}.
                     * @param error Error, if any
                     * @param [response] InstanceOSPoliciesCompliance
                     */
                    type GetInstanceOSPoliciesComplianceCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.InstanceOSPoliciesCompliance) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|listInstanceOSPoliciesCompliances}.
                     * @param error Error, if any
                     * @param [response] ListInstanceOSPoliciesCompliancesResponse
                     */
                    type ListInstanceOSPoliciesCompliancesCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.ListInstanceOSPoliciesCompliancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|getOSPolicyAssignmentReport}.
                     * @param error Error, if any
                     * @param [response] OSPolicyAssignmentReport
                     */
                    type GetOSPolicyAssignmentReportCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.OSPolicyAssignmentReport) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|listOSPolicyAssignmentReports}.
                     * @param error Error, if any
                     * @param [response] ListOSPolicyAssignmentReportsResponse
                     */
                    type ListOSPolicyAssignmentReportsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.ListOSPolicyAssignmentReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|getInventory}.
                     * @param error Error, if any
                     * @param [response] Inventory
                     */
                    type GetInventoryCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.Inventory) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|listInventories}.
                     * @param error Error, if any
                     * @param [response] ListInventoriesResponse
                     */
                    type ListInventoriesCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.ListInventoriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|getVulnerabilityReport}.
                     * @param error Error, if any
                     * @param [response] VulnerabilityReport
                     */
                    type GetVulnerabilityReportCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.VulnerabilityReport) => void;

                    /**
                     * Callback as used by {@link google.cloud.osconfig.v1alpha.OsConfigZonalService|listVulnerabilityReports}.
                     * @param error Error, if any
                     * @param [response] ListVulnerabilityReportsResponse
                     */
                    type ListVulnerabilityReportsCallback = (error: (Error|null), response?: google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse) => void;
                }

                /** Properties of a VulnerabilityReport. */
                interface IVulnerabilityReport {

                    /** VulnerabilityReport name */
                    name?: (string|null);

                    /** VulnerabilityReport vulnerabilities */
                    vulnerabilities?: (google.cloud.osconfig.v1alpha.VulnerabilityReport.IVulnerability[]|null);

                    /** VulnerabilityReport updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a VulnerabilityReport. */
                class VulnerabilityReport implements IVulnerabilityReport {

                    /**
                     * Constructs a new VulnerabilityReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IVulnerabilityReport);

                    /** VulnerabilityReport name. */
                    public name: string;

                    /** VulnerabilityReport vulnerabilities. */
                    public vulnerabilities: google.cloud.osconfig.v1alpha.VulnerabilityReport.IVulnerability[];

                    /** VulnerabilityReport updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new VulnerabilityReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerabilityReport instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IVulnerabilityReport): google.cloud.osconfig.v1alpha.VulnerabilityReport;

                    /**
                     * Encodes the specified VulnerabilityReport message. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.verify|verify} messages.
                     * @param message VulnerabilityReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IVulnerabilityReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerabilityReport message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.verify|verify} messages.
                     * @param message VulnerabilityReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IVulnerabilityReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerabilityReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerabilityReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.VulnerabilityReport;

                    /**
                     * Decodes a VulnerabilityReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerabilityReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.VulnerabilityReport;

                    /**
                     * Verifies a VulnerabilityReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerabilityReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerabilityReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.VulnerabilityReport;

                    /**
                     * Creates a plain object from a VulnerabilityReport message. Also converts values to other types if specified.
                     * @param message VulnerabilityReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.VulnerabilityReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerabilityReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VulnerabilityReport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VulnerabilityReport {

                    /** Properties of a Vulnerability. */
                    interface IVulnerability {

                        /** Vulnerability details */
                        details?: (google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IDetails|null);

                        /** Vulnerability installedInventoryItemIds */
                        installedInventoryItemIds?: (string[]|null);

                        /** Vulnerability availableInventoryItemIds */
                        availableInventoryItemIds?: (string[]|null);

                        /** Vulnerability createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Vulnerability updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** Vulnerability items */
                        items?: (google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IItem[]|null);
                    }

                    /** Represents a Vulnerability. */
                    class Vulnerability implements IVulnerability {

                        /**
                         * Constructs a new Vulnerability.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.IVulnerability);

                        /** Vulnerability details. */
                        public details?: (google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IDetails|null);

                        /** Vulnerability installedInventoryItemIds. */
                        public installedInventoryItemIds: string[];

                        /** Vulnerability availableInventoryItemIds. */
                        public availableInventoryItemIds: string[];

                        /** Vulnerability createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Vulnerability updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** Vulnerability items. */
                        public items: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IItem[];

                        /**
                         * Creates a new Vulnerability instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Vulnerability instance
                         */
                        public static create(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.IVulnerability): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability;

                        /**
                         * Encodes the specified Vulnerability message. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.verify|verify} messages.
                         * @param message Vulnerability message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.IVulnerability, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Vulnerability message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.verify|verify} messages.
                         * @param message Vulnerability message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.IVulnerability, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Vulnerability message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Vulnerability
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability;

                        /**
                         * Decodes a Vulnerability message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Vulnerability
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability;

                        /**
                         * Creates a plain object from a Vulnerability message. Also converts values to other types if specified.
                         * @param message Vulnerability
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        /** Properties of a Details. */
                        interface IDetails {

                            /** Details cve */
                            cve?: (string|null);

                            /** Details cvssV2Score */
                            cvssV2Score?: (number|null);

                            /** Details cvssV3 */
                            cvssV3?: (google.cloud.osconfig.v1alpha.ICVSSv3|null);

                            /** Details severity */
                            severity?: (string|null);

                            /** Details description */
                            description?: (string|null);

                            /** Details references */
                            references?: (google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.IReference[]|null);
                        }

                        /** Represents a Details. */
                        class Details implements IDetails {

                            /**
                             * Constructs a new Details.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IDetails);

                            /** Details cve. */
                            public cve: string;

                            /** Details cvssV2Score. */
                            public cvssV2Score: number;

                            /** Details cvssV3. */
                            public cvssV3?: (google.cloud.osconfig.v1alpha.ICVSSv3|null);

                            /** Details severity. */
                            public severity: string;

                            /** Details description. */
                            public description: string;

                            /** Details references. */
                            public references: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.IReference[];

                            /**
                             * Creates a new Details instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Details instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IDetails): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details;

                            /**
                             * Encodes the specified Details message. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.verify|verify} messages.
                             * @param message Details message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Details message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.verify|verify} messages.
                             * @param message Details message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Details message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Details
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details;

                            /**
                             * Decodes a Details message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Details
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details;

                            /**
                             * Creates a plain object from a Details message. Also converts values to other types if specified.
                             * @param message Details
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        namespace Details {

                            /** Properties of a Reference. */
                            interface IReference {

                                /** Reference url */
                                url?: (string|null);

                                /** Reference source */
                                source?: (string|null);
                            }

                            /** Represents a Reference. */
                            class Reference implements IReference {

                                /**
                                 * Constructs a new Reference.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.IReference);

                                /** Reference url. */
                                public url: string;

                                /** Reference source. */
                                public source: string;

                                /**
                                 * Creates a new Reference instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Reference instance
                                 */
                                public static create(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.IReference): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference;

                                /**
                                 * Encodes the specified Reference message. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference.verify|verify} messages.
                                 * @param message Reference message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Reference message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference.verify|verify} messages.
                                 * @param message Reference message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Reference message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Reference
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference;

                                /**
                                 * Decodes a Reference message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Reference
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference;

                                /**
                                 * Verifies a Reference message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Reference message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Reference
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference;

                                /**
                                 * Creates a plain object from a Reference message. Also converts values to other types if specified.
                                 * @param message Reference
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Details.Reference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Reference to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Reference
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of an Item. */
                        interface IItem {

                            /** Item installedInventoryItemId */
                            installedInventoryItemId?: (string|null);

                            /** Item availableInventoryItemId */
                            availableInventoryItemId?: (string|null);

                            /** Item fixedCpeUri */
                            fixedCpeUri?: (string|null);

                            /** Item upstreamFix */
                            upstreamFix?: (string|null);
                        }

                        /** Represents an Item. */
                        class Item implements IItem {

                            /**
                             * Constructs a new Item.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IItem);

                            /** Item installedInventoryItemId. */
                            public installedInventoryItemId: string;

                            /** Item availableInventoryItemId. */
                            public availableInventoryItemId: string;

                            /** Item fixedCpeUri. */
                            public fixedCpeUri: string;

                            /** Item upstreamFix. */
                            public upstreamFix: string;

                            /**
                             * Creates a new Item instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Item instance
                             */
                            public static create(properties?: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IItem): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item;

                            /**
                             * Encodes the specified Item message. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item.verify|verify} messages.
                             * @param message Item message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Item message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item.verify|verify} messages.
                             * @param message Item message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Item message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Item
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item;

                            /**
                             * Decodes an Item message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Item
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item;

                            /**
                             * Creates a plain object from an Item message. Also converts values to other types if specified.
                             * @param message Item
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.osconfig.v1alpha.VulnerabilityReport.Vulnerability.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    }
                }

                /** Properties of a GetVulnerabilityReportRequest. */
                interface IGetVulnerabilityReportRequest {

                    /** GetVulnerabilityReportRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVulnerabilityReportRequest. */
                class GetVulnerabilityReportRequest implements IGetVulnerabilityReportRequest {

                    /**
                     * Constructs a new GetVulnerabilityReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IGetVulnerabilityReportRequest);

                    /** GetVulnerabilityReportRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVulnerabilityReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVulnerabilityReportRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IGetVulnerabilityReportRequest): google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest;

                    /**
                     * Encodes the specified GetVulnerabilityReportRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest.verify|verify} messages.
                     * @param message GetVulnerabilityReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IGetVulnerabilityReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVulnerabilityReportRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest.verify|verify} messages.
                     * @param message GetVulnerabilityReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IGetVulnerabilityReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVulnerabilityReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVulnerabilityReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest;

                    /**
                     * Decodes a GetVulnerabilityReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVulnerabilityReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest;

                    /**
                     * Verifies a GetVulnerabilityReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVulnerabilityReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVulnerabilityReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest;

                    /**
                     * Creates a plain object from a GetVulnerabilityReportRequest message. Also converts values to other types if specified.
                     * @param message GetVulnerabilityReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.GetVulnerabilityReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVulnerabilityReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVulnerabilityReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVulnerabilityReportsRequest. */
                interface IListVulnerabilityReportsRequest {

                    /** ListVulnerabilityReportsRequest parent */
                    parent?: (string|null);

                    /** ListVulnerabilityReportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVulnerabilityReportsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVulnerabilityReportsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListVulnerabilityReportsRequest. */
                class ListVulnerabilityReportsRequest implements IListVulnerabilityReportsRequest {

                    /**
                     * Constructs a new ListVulnerabilityReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsRequest);

                    /** ListVulnerabilityReportsRequest parent. */
                    public parent: string;

                    /** ListVulnerabilityReportsRequest pageSize. */
                    public pageSize: number;

                    /** ListVulnerabilityReportsRequest pageToken. */
                    public pageToken: string;

                    /** ListVulnerabilityReportsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListVulnerabilityReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVulnerabilityReportsRequest instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsRequest): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest;

                    /**
                     * Encodes the specified ListVulnerabilityReportsRequest message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest.verify|verify} messages.
                     * @param message ListVulnerabilityReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVulnerabilityReportsRequest message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest.verify|verify} messages.
                     * @param message ListVulnerabilityReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVulnerabilityReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVulnerabilityReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest;

                    /**
                     * Decodes a ListVulnerabilityReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVulnerabilityReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest;

                    /**
                     * Verifies a ListVulnerabilityReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVulnerabilityReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVulnerabilityReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest;

                    /**
                     * Creates a plain object from a ListVulnerabilityReportsRequest message. Also converts values to other types if specified.
                     * @param message ListVulnerabilityReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListVulnerabilityReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVulnerabilityReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVulnerabilityReportsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVulnerabilityReportsResponse. */
                interface IListVulnerabilityReportsResponse {

                    /** ListVulnerabilityReportsResponse vulnerabilityReports */
                    vulnerabilityReports?: (google.cloud.osconfig.v1alpha.IVulnerabilityReport[]|null);

                    /** ListVulnerabilityReportsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListVulnerabilityReportsResponse. */
                class ListVulnerabilityReportsResponse implements IListVulnerabilityReportsResponse {

                    /**
                     * Constructs a new ListVulnerabilityReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsResponse);

                    /** ListVulnerabilityReportsResponse vulnerabilityReports. */
                    public vulnerabilityReports: google.cloud.osconfig.v1alpha.IVulnerabilityReport[];

                    /** ListVulnerabilityReportsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListVulnerabilityReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVulnerabilityReportsResponse instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsResponse): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse;

                    /**
                     * Encodes the specified ListVulnerabilityReportsResponse message. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse.verify|verify} messages.
                     * @param message ListVulnerabilityReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVulnerabilityReportsResponse message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse.verify|verify} messages.
                     * @param message ListVulnerabilityReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.IListVulnerabilityReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVulnerabilityReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVulnerabilityReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse;

                    /**
                     * Decodes a ListVulnerabilityReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVulnerabilityReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse;

                    /**
                     * Verifies a ListVulnerabilityReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVulnerabilityReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVulnerabilityReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse;

                    /**
                     * Creates a plain object from a ListVulnerabilityReportsResponse message. Also converts values to other types if specified.
                     * @param message ListVulnerabilityReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.ListVulnerabilityReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVulnerabilityReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVulnerabilityReportsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    attackVector?: (google.cloud.osconfig.v1alpha.CVSSv3.AttackVector|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.AttackVector|null);

                    /** CVSSv3 attackComplexity */
                    attackComplexity?: (google.cloud.osconfig.v1alpha.CVSSv3.AttackComplexity|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.AttackComplexity|null);

                    /** CVSSv3 privilegesRequired */
                    privilegesRequired?: (google.cloud.osconfig.v1alpha.CVSSv3.PrivilegesRequired|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.PrivilegesRequired|null);

                    /** CVSSv3 userInteraction */
                    userInteraction?: (google.cloud.osconfig.v1alpha.CVSSv3.UserInteraction|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.UserInteraction|null);

                    /** CVSSv3 scope */
                    scope?: (google.cloud.osconfig.v1alpha.CVSSv3.Scope|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Scope|null);

                    /** CVSSv3 confidentialityImpact */
                    confidentialityImpact?: (google.cloud.osconfig.v1alpha.CVSSv3.Impact|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Impact|null);

                    /** CVSSv3 integrityImpact */
                    integrityImpact?: (google.cloud.osconfig.v1alpha.CVSSv3.Impact|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Impact|null);

                    /** CVSSv3 availabilityImpact */
                    availabilityImpact?: (google.cloud.osconfig.v1alpha.CVSSv3.Impact|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Impact|null);
                }

                /** Represents a CVSSv3. */
                class CVSSv3 implements ICVSSv3 {

                    /**
                     * Constructs a new CVSSv3.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.osconfig.v1alpha.ICVSSv3);

                    /** CVSSv3 baseScore. */
                    public baseScore: number;

                    /** CVSSv3 exploitabilityScore. */
                    public exploitabilityScore: number;

                    /** CVSSv3 impactScore. */
                    public impactScore: number;

                    /** CVSSv3 attackVector. */
                    public attackVector: (google.cloud.osconfig.v1alpha.CVSSv3.AttackVector|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.AttackVector);

                    /** CVSSv3 attackComplexity. */
                    public attackComplexity: (google.cloud.osconfig.v1alpha.CVSSv3.AttackComplexity|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.AttackComplexity);

                    /** CVSSv3 privilegesRequired. */
                    public privilegesRequired: (google.cloud.osconfig.v1alpha.CVSSv3.PrivilegesRequired|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.PrivilegesRequired);

                    /** CVSSv3 userInteraction. */
                    public userInteraction: (google.cloud.osconfig.v1alpha.CVSSv3.UserInteraction|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.UserInteraction);

                    /** CVSSv3 scope. */
                    public scope: (google.cloud.osconfig.v1alpha.CVSSv3.Scope|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Scope);

                    /** CVSSv3 confidentialityImpact. */
                    public confidentialityImpact: (google.cloud.osconfig.v1alpha.CVSSv3.Impact|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Impact);

                    /** CVSSv3 integrityImpact. */
                    public integrityImpact: (google.cloud.osconfig.v1alpha.CVSSv3.Impact|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Impact);

                    /** CVSSv3 availabilityImpact. */
                    public availabilityImpact: (google.cloud.osconfig.v1alpha.CVSSv3.Impact|keyof typeof google.cloud.osconfig.v1alpha.CVSSv3.Impact);

                    /**
                     * Creates a new CVSSv3 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CVSSv3 instance
                     */
                    public static create(properties?: google.cloud.osconfig.v1alpha.ICVSSv3): google.cloud.osconfig.v1alpha.CVSSv3;

                    /**
                     * Encodes the specified CVSSv3 message. Does not implicitly {@link google.cloud.osconfig.v1alpha.CVSSv3.verify|verify} messages.
                     * @param message CVSSv3 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.osconfig.v1alpha.ICVSSv3, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CVSSv3 message, length delimited. Does not implicitly {@link google.cloud.osconfig.v1alpha.CVSSv3.verify|verify} messages.
                     * @param message CVSSv3 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.osconfig.v1alpha.ICVSSv3, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CVSSv3 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CVSSv3
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.osconfig.v1alpha.CVSSv3;

                    /**
                     * Decodes a CVSSv3 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CVSSv3
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.osconfig.v1alpha.CVSSv3;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.osconfig.v1alpha.CVSSv3;

                    /**
                     * Creates a plain object from a CVSSv3 message. Also converts values to other types if specified.
                     * @param message CVSSv3
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.osconfig.v1alpha.CVSSv3, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Namespace type. */
    namespace type {

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