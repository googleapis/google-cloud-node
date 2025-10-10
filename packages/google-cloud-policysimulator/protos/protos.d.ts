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

        /** Namespace orgpolicy. */
        namespace orgpolicy {

            /** Namespace v2. */
            namespace v2 {

                /** Properties of a Constraint. */
                interface IConstraint {

                    /** Constraint name */
                    name?: (string|null);

                    /** Constraint displayName */
                    displayName?: (string|null);

                    /** Constraint description */
                    description?: (string|null);

                    /** Constraint constraintDefault */
                    constraintDefault?: (google.cloud.orgpolicy.v2.Constraint.ConstraintDefault|keyof typeof google.cloud.orgpolicy.v2.Constraint.ConstraintDefault|null);

                    /** Constraint listConstraint */
                    listConstraint?: (google.cloud.orgpolicy.v2.Constraint.IListConstraint|null);

                    /** Constraint booleanConstraint */
                    booleanConstraint?: (google.cloud.orgpolicy.v2.Constraint.IBooleanConstraint|null);

                    /** Constraint supportsDryRun */
                    supportsDryRun?: (boolean|null);

                    /** Constraint equivalentConstraint */
                    equivalentConstraint?: (string|null);

                    /** Constraint supportsSimulation */
                    supportsSimulation?: (boolean|null);
                }

                /** Represents a Constraint. */
                class Constraint implements IConstraint {

                    /**
                     * Constructs a new Constraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IConstraint);

                    /** Constraint name. */
                    public name: string;

                    /** Constraint displayName. */
                    public displayName: string;

                    /** Constraint description. */
                    public description: string;

                    /** Constraint constraintDefault. */
                    public constraintDefault: (google.cloud.orgpolicy.v2.Constraint.ConstraintDefault|keyof typeof google.cloud.orgpolicy.v2.Constraint.ConstraintDefault);

                    /** Constraint listConstraint. */
                    public listConstraint?: (google.cloud.orgpolicy.v2.Constraint.IListConstraint|null);

                    /** Constraint booleanConstraint. */
                    public booleanConstraint?: (google.cloud.orgpolicy.v2.Constraint.IBooleanConstraint|null);

                    /** Constraint supportsDryRun. */
                    public supportsDryRun: boolean;

                    /** Constraint equivalentConstraint. */
                    public equivalentConstraint: string;

                    /** Constraint supportsSimulation. */
                    public supportsSimulation: boolean;

                    /** Constraint constraintType. */
                    public constraintType?: ("listConstraint"|"booleanConstraint");

                    /**
                     * Creates a new Constraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Constraint instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IConstraint): google.cloud.orgpolicy.v2.Constraint;

                    /**
                     * Encodes the specified Constraint message. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.verify|verify} messages.
                     * @param message Constraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Constraint message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.verify|verify} messages.
                     * @param message Constraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Constraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Constraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Constraint;

                    /**
                     * Decodes a Constraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Constraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Constraint;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Constraint;

                    /**
                     * Creates a plain object from a Constraint message. Also converts values to other types if specified.
                     * @param message Constraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.Constraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Constraint {

                    /** ConstraintDefault enum. */
                    enum ConstraintDefault {
                        CONSTRAINT_DEFAULT_UNSPECIFIED = 0,
                        ALLOW = 1,
                        DENY = 2
                    }

                    /** Properties of a ListConstraint. */
                    interface IListConstraint {

                        /** ListConstraint supportsIn */
                        supportsIn?: (boolean|null);

                        /** ListConstraint supportsUnder */
                        supportsUnder?: (boolean|null);
                    }

                    /** Represents a ListConstraint. */
                    class ListConstraint implements IListConstraint {

                        /**
                         * Constructs a new ListConstraint.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v2.Constraint.IListConstraint);

                        /** ListConstraint supportsIn. */
                        public supportsIn: boolean;

                        /** ListConstraint supportsUnder. */
                        public supportsUnder: boolean;

                        /**
                         * Creates a new ListConstraint instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListConstraint instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v2.Constraint.IListConstraint): google.cloud.orgpolicy.v2.Constraint.ListConstraint;

                        /**
                         * Encodes the specified ListConstraint message. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.ListConstraint.verify|verify} messages.
                         * @param message ListConstraint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v2.Constraint.IListConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListConstraint message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.ListConstraint.verify|verify} messages.
                         * @param message ListConstraint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v2.Constraint.IListConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListConstraint message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListConstraint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Constraint.ListConstraint;

                        /**
                         * Decodes a ListConstraint message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListConstraint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Constraint.ListConstraint;

                        /**
                         * Verifies a ListConstraint message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListConstraint message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListConstraint
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Constraint.ListConstraint;

                        /**
                         * Creates a plain object from a ListConstraint message. Also converts values to other types if specified.
                         * @param message ListConstraint
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v2.Constraint.ListConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListConstraint to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListConstraint
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CustomConstraintDefinition. */
                    interface ICustomConstraintDefinition {

                        /** CustomConstraintDefinition resourceTypes */
                        resourceTypes?: (string[]|null);

                        /** CustomConstraintDefinition methodTypes */
                        methodTypes?: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.MethodType[]|null);

                        /** CustomConstraintDefinition condition */
                        condition?: (string|null);

                        /** CustomConstraintDefinition actionType */
                        actionType?: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.ActionType|keyof typeof google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.ActionType|null);

                        /** CustomConstraintDefinition parameters */
                        parameters?: ({ [k: string]: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.IParameter }|null);
                    }

                    /** Represents a CustomConstraintDefinition. */
                    class CustomConstraintDefinition implements ICustomConstraintDefinition {

                        /**
                         * Constructs a new CustomConstraintDefinition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v2.Constraint.ICustomConstraintDefinition);

                        /** CustomConstraintDefinition resourceTypes. */
                        public resourceTypes: string[];

                        /** CustomConstraintDefinition methodTypes. */
                        public methodTypes: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.MethodType[];

                        /** CustomConstraintDefinition condition. */
                        public condition: string;

                        /** CustomConstraintDefinition actionType. */
                        public actionType: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.ActionType|keyof typeof google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.ActionType);

                        /** CustomConstraintDefinition parameters. */
                        public parameters: { [k: string]: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.IParameter };

                        /**
                         * Creates a new CustomConstraintDefinition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomConstraintDefinition instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v2.Constraint.ICustomConstraintDefinition): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition;

                        /**
                         * Encodes the specified CustomConstraintDefinition message. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.verify|verify} messages.
                         * @param message CustomConstraintDefinition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v2.Constraint.ICustomConstraintDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomConstraintDefinition message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.verify|verify} messages.
                         * @param message CustomConstraintDefinition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v2.Constraint.ICustomConstraintDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomConstraintDefinition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomConstraintDefinition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition;

                        /**
                         * Decodes a CustomConstraintDefinition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomConstraintDefinition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition;

                        /**
                         * Verifies a CustomConstraintDefinition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomConstraintDefinition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomConstraintDefinition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition;

                        /**
                         * Creates a plain object from a CustomConstraintDefinition message. Also converts values to other types if specified.
                         * @param message CustomConstraintDefinition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomConstraintDefinition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomConstraintDefinition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CustomConstraintDefinition {

                        /** MethodType enum. */
                        enum MethodType {
                            METHOD_TYPE_UNSPECIFIED = 0,
                            CREATE = 1,
                            UPDATE = 2,
                            DELETE = 3,
                            REMOVE_GRANT = 4,
                            GOVERN_TAGS = 5
                        }

                        /** ActionType enum. */
                        enum ActionType {
                            ACTION_TYPE_UNSPECIFIED = 0,
                            ALLOW = 1,
                            DENY = 2
                        }

                        /** Properties of a Parameter. */
                        interface IParameter {

                            /** Parameter type */
                            type?: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type|keyof typeof google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type|null);

                            /** Parameter defaultValue */
                            defaultValue?: (google.protobuf.IValue|null);

                            /** Parameter validValuesExpr */
                            validValuesExpr?: (string|null);

                            /** Parameter metadata */
                            metadata?: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.IMetadata|null);

                            /** Parameter item */
                            item?: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type|keyof typeof google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type|null);
                        }

                        /** Represents a Parameter. */
                        class Parameter implements IParameter {

                            /**
                             * Constructs a new Parameter.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.IParameter);

                            /** Parameter type. */
                            public type: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type|keyof typeof google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type);

                            /** Parameter defaultValue. */
                            public defaultValue?: (google.protobuf.IValue|null);

                            /** Parameter validValuesExpr. */
                            public validValuesExpr: string;

                            /** Parameter metadata. */
                            public metadata?: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.IMetadata|null);

                            /** Parameter item. */
                            public item: (google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type|keyof typeof google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Type);

                            /**
                             * Creates a new Parameter instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Parameter instance
                             */
                            public static create(properties?: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.IParameter): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter;

                            /**
                             * Encodes the specified Parameter message. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.verify|verify} messages.
                             * @param message Parameter message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Parameter message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.verify|verify} messages.
                             * @param message Parameter message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Parameter message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Parameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter;

                            /**
                             * Decodes a Parameter message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Parameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter;

                            /**
                             * Verifies a Parameter message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Parameter
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter;

                            /**
                             * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                             * @param message Parameter
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Parameter to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Parameter
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Parameter {

                            /** Type enum. */
                            enum Type {
                                TYPE_UNSPECIFIED = 0,
                                LIST = 1,
                                STRING = 2,
                                BOOLEAN = 3
                            }

                            /** Properties of a Metadata. */
                            interface IMetadata {

                                /** Metadata description */
                                description?: (string|null);
                            }

                            /** Represents a Metadata. */
                            class Metadata implements IMetadata {

                                /**
                                 * Constructs a new Metadata.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.IMetadata);

                                /** Metadata description. */
                                public description: string;

                                /**
                                 * Creates a new Metadata instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Metadata instance
                                 */
                                public static create(properties?: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.IMetadata): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata;

                                /**
                                 * Encodes the specified Metadata message. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata.verify|verify} messages.
                                 * @param message Metadata message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata.verify|verify} messages.
                                 * @param message Metadata message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Metadata message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Metadata
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata;

                                /**
                                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Metadata
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata;

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
                                public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata;

                                /**
                                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                                 * @param message Metadata
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.orgpolicy.v2.Constraint.CustomConstraintDefinition.Parameter.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Metadata to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Metadata
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Properties of a BooleanConstraint. */
                    interface IBooleanConstraint {

                        /** BooleanConstraint customConstraintDefinition */
                        customConstraintDefinition?: (google.cloud.orgpolicy.v2.Constraint.ICustomConstraintDefinition|null);
                    }

                    /** Represents a BooleanConstraint. */
                    class BooleanConstraint implements IBooleanConstraint {

                        /**
                         * Constructs a new BooleanConstraint.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v2.Constraint.IBooleanConstraint);

                        /** BooleanConstraint customConstraintDefinition. */
                        public customConstraintDefinition?: (google.cloud.orgpolicy.v2.Constraint.ICustomConstraintDefinition|null);

                        /**
                         * Creates a new BooleanConstraint instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BooleanConstraint instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v2.Constraint.IBooleanConstraint): google.cloud.orgpolicy.v2.Constraint.BooleanConstraint;

                        /**
                         * Encodes the specified BooleanConstraint message. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.BooleanConstraint.verify|verify} messages.
                         * @param message BooleanConstraint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v2.Constraint.IBooleanConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BooleanConstraint message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Constraint.BooleanConstraint.verify|verify} messages.
                         * @param message BooleanConstraint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v2.Constraint.IBooleanConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BooleanConstraint message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BooleanConstraint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Constraint.BooleanConstraint;

                        /**
                         * Decodes a BooleanConstraint message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BooleanConstraint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Constraint.BooleanConstraint;

                        /**
                         * Verifies a BooleanConstraint message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BooleanConstraint message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BooleanConstraint
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Constraint.BooleanConstraint;

                        /**
                         * Creates a plain object from a BooleanConstraint message. Also converts values to other types if specified.
                         * @param message BooleanConstraint
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v2.Constraint.BooleanConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BooleanConstraint to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BooleanConstraint
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
                    methodTypes?: (google.cloud.orgpolicy.v2.CustomConstraint.MethodType[]|null);

                    /** CustomConstraint condition */
                    condition?: (string|null);

                    /** CustomConstraint actionType */
                    actionType?: (google.cloud.orgpolicy.v2.CustomConstraint.ActionType|keyof typeof google.cloud.orgpolicy.v2.CustomConstraint.ActionType|null);

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
                    constructor(properties?: google.cloud.orgpolicy.v2.ICustomConstraint);

                    /** CustomConstraint name. */
                    public name: string;

                    /** CustomConstraint resourceTypes. */
                    public resourceTypes: string[];

                    /** CustomConstraint methodTypes. */
                    public methodTypes: google.cloud.orgpolicy.v2.CustomConstraint.MethodType[];

                    /** CustomConstraint condition. */
                    public condition: string;

                    /** CustomConstraint actionType. */
                    public actionType: (google.cloud.orgpolicy.v2.CustomConstraint.ActionType|keyof typeof google.cloud.orgpolicy.v2.CustomConstraint.ActionType);

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
                    public static create(properties?: google.cloud.orgpolicy.v2.ICustomConstraint): google.cloud.orgpolicy.v2.CustomConstraint;

                    /**
                     * Encodes the specified CustomConstraint message. Does not implicitly {@link google.cloud.orgpolicy.v2.CustomConstraint.verify|verify} messages.
                     * @param message CustomConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.ICustomConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomConstraint message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.CustomConstraint.verify|verify} messages.
                     * @param message CustomConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.ICustomConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.CustomConstraint;

                    /**
                     * Decodes a CustomConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.CustomConstraint;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.CustomConstraint;

                    /**
                     * Creates a plain object from a CustomConstraint message. Also converts values to other types if specified.
                     * @param message CustomConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.CustomConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        DELETE = 3,
                        REMOVE_GRANT = 4,
                        GOVERN_TAGS = 5
                    }

                    /** ActionType enum. */
                    enum ActionType {
                        ACTION_TYPE_UNSPECIFIED = 0,
                        ALLOW = 1,
                        DENY = 2
                    }
                }

                /** Represents an OrgPolicy */
                class OrgPolicy extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OrgPolicy service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OrgPolicy service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OrgPolicy;

                    /**
                     * Calls ListConstraints.
                     * @param request ListConstraintsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConstraintsResponse
                     */
                    public listConstraints(request: google.cloud.orgpolicy.v2.IListConstraintsRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.ListConstraintsCallback): void;

                    /**
                     * Calls ListConstraints.
                     * @param request ListConstraintsRequest message or plain object
                     * @returns Promise
                     */
                    public listConstraints(request: google.cloud.orgpolicy.v2.IListConstraintsRequest): Promise<google.cloud.orgpolicy.v2.ListConstraintsResponse>;

                    /**
                     * Calls ListPolicies.
                     * @param request ListPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPoliciesResponse
                     */
                    public listPolicies(request: google.cloud.orgpolicy.v2.IListPoliciesRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.ListPoliciesCallback): void;

                    /**
                     * Calls ListPolicies.
                     * @param request ListPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listPolicies(request: google.cloud.orgpolicy.v2.IListPoliciesRequest): Promise<google.cloud.orgpolicy.v2.ListPoliciesResponse>;

                    /**
                     * Calls GetPolicy.
                     * @param request GetPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getPolicy(request: google.cloud.orgpolicy.v2.IGetPolicyRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.GetPolicyCallback): void;

                    /**
                     * Calls GetPolicy.
                     * @param request GetPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getPolicy(request: google.cloud.orgpolicy.v2.IGetPolicyRequest): Promise<google.cloud.orgpolicy.v2.Policy>;

                    /**
                     * Calls GetEffectivePolicy.
                     * @param request GetEffectivePolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getEffectivePolicy(request: google.cloud.orgpolicy.v2.IGetEffectivePolicyRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.GetEffectivePolicyCallback): void;

                    /**
                     * Calls GetEffectivePolicy.
                     * @param request GetEffectivePolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getEffectivePolicy(request: google.cloud.orgpolicy.v2.IGetEffectivePolicyRequest): Promise<google.cloud.orgpolicy.v2.Policy>;

                    /**
                     * Calls CreatePolicy.
                     * @param request CreatePolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public createPolicy(request: google.cloud.orgpolicy.v2.ICreatePolicyRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.CreatePolicyCallback): void;

                    /**
                     * Calls CreatePolicy.
                     * @param request CreatePolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createPolicy(request: google.cloud.orgpolicy.v2.ICreatePolicyRequest): Promise<google.cloud.orgpolicy.v2.Policy>;

                    /**
                     * Calls UpdatePolicy.
                     * @param request UpdatePolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public updatePolicy(request: google.cloud.orgpolicy.v2.IUpdatePolicyRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.UpdatePolicyCallback): void;

                    /**
                     * Calls UpdatePolicy.
                     * @param request UpdatePolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updatePolicy(request: google.cloud.orgpolicy.v2.IUpdatePolicyRequest): Promise<google.cloud.orgpolicy.v2.Policy>;

                    /**
                     * Calls DeletePolicy.
                     * @param request DeletePolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePolicy(request: google.cloud.orgpolicy.v2.IDeletePolicyRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.DeletePolicyCallback): void;

                    /**
                     * Calls DeletePolicy.
                     * @param request DeletePolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deletePolicy(request: google.cloud.orgpolicy.v2.IDeletePolicyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateCustomConstraint.
                     * @param request CreateCustomConstraintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CustomConstraint
                     */
                    public createCustomConstraint(request: google.cloud.orgpolicy.v2.ICreateCustomConstraintRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.CreateCustomConstraintCallback): void;

                    /**
                     * Calls CreateCustomConstraint.
                     * @param request CreateCustomConstraintRequest message or plain object
                     * @returns Promise
                     */
                    public createCustomConstraint(request: google.cloud.orgpolicy.v2.ICreateCustomConstraintRequest): Promise<google.cloud.orgpolicy.v2.CustomConstraint>;

                    /**
                     * Calls UpdateCustomConstraint.
                     * @param request UpdateCustomConstraintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CustomConstraint
                     */
                    public updateCustomConstraint(request: google.cloud.orgpolicy.v2.IUpdateCustomConstraintRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.UpdateCustomConstraintCallback): void;

                    /**
                     * Calls UpdateCustomConstraint.
                     * @param request UpdateCustomConstraintRequest message or plain object
                     * @returns Promise
                     */
                    public updateCustomConstraint(request: google.cloud.orgpolicy.v2.IUpdateCustomConstraintRequest): Promise<google.cloud.orgpolicy.v2.CustomConstraint>;

                    /**
                     * Calls GetCustomConstraint.
                     * @param request GetCustomConstraintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CustomConstraint
                     */
                    public getCustomConstraint(request: google.cloud.orgpolicy.v2.IGetCustomConstraintRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.GetCustomConstraintCallback): void;

                    /**
                     * Calls GetCustomConstraint.
                     * @param request GetCustomConstraintRequest message or plain object
                     * @returns Promise
                     */
                    public getCustomConstraint(request: google.cloud.orgpolicy.v2.IGetCustomConstraintRequest): Promise<google.cloud.orgpolicy.v2.CustomConstraint>;

                    /**
                     * Calls ListCustomConstraints.
                     * @param request ListCustomConstraintsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCustomConstraintsResponse
                     */
                    public listCustomConstraints(request: google.cloud.orgpolicy.v2.IListCustomConstraintsRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.ListCustomConstraintsCallback): void;

                    /**
                     * Calls ListCustomConstraints.
                     * @param request ListCustomConstraintsRequest message or plain object
                     * @returns Promise
                     */
                    public listCustomConstraints(request: google.cloud.orgpolicy.v2.IListCustomConstraintsRequest): Promise<google.cloud.orgpolicy.v2.ListCustomConstraintsResponse>;

                    /**
                     * Calls DeleteCustomConstraint.
                     * @param request DeleteCustomConstraintRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCustomConstraint(request: google.cloud.orgpolicy.v2.IDeleteCustomConstraintRequest, callback: google.cloud.orgpolicy.v2.OrgPolicy.DeleteCustomConstraintCallback): void;

                    /**
                     * Calls DeleteCustomConstraint.
                     * @param request DeleteCustomConstraintRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCustomConstraint(request: google.cloud.orgpolicy.v2.IDeleteCustomConstraintRequest): Promise<google.protobuf.Empty>;
                }

                namespace OrgPolicy {

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|listConstraints}.
                     * @param error Error, if any
                     * @param [response] ListConstraintsResponse
                     */
                    type ListConstraintsCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.ListConstraintsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|listPolicies}.
                     * @param error Error, if any
                     * @param [response] ListPoliciesResponse
                     */
                    type ListPoliciesCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.ListPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|getPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetPolicyCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|getEffectivePolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetEffectivePolicyCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|createPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type CreatePolicyCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|updatePolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type UpdatePolicyCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|deletePolicy}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePolicyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|createCustomConstraint}.
                     * @param error Error, if any
                     * @param [response] CustomConstraint
                     */
                    type CreateCustomConstraintCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.CustomConstraint) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|updateCustomConstraint}.
                     * @param error Error, if any
                     * @param [response] CustomConstraint
                     */
                    type UpdateCustomConstraintCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.CustomConstraint) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|getCustomConstraint}.
                     * @param error Error, if any
                     * @param [response] CustomConstraint
                     */
                    type GetCustomConstraintCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.CustomConstraint) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|listCustomConstraints}.
                     * @param error Error, if any
                     * @param [response] ListCustomConstraintsResponse
                     */
                    type ListCustomConstraintsCallback = (error: (Error|null), response?: google.cloud.orgpolicy.v2.ListCustomConstraintsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.orgpolicy.v2.OrgPolicy|deleteCustomConstraint}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCustomConstraintCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a Policy. */
                interface IPolicy {

                    /** Policy name */
                    name?: (string|null);

                    /** Policy spec */
                    spec?: (google.cloud.orgpolicy.v2.IPolicySpec|null);

                    /** Policy alternate */
                    alternate?: (google.cloud.orgpolicy.v2.IAlternatePolicySpec|null);

                    /** Policy dryRunSpec */
                    dryRunSpec?: (google.cloud.orgpolicy.v2.IPolicySpec|null);

                    /** Policy etag */
                    etag?: (string|null);
                }

                /** Represents a Policy. */
                class Policy implements IPolicy {

                    /**
                     * Constructs a new Policy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IPolicy);

                    /** Policy name. */
                    public name: string;

                    /** Policy spec. */
                    public spec?: (google.cloud.orgpolicy.v2.IPolicySpec|null);

                    /** Policy alternate. */
                    public alternate?: (google.cloud.orgpolicy.v2.IAlternatePolicySpec|null);

                    /** Policy dryRunSpec. */
                    public dryRunSpec?: (google.cloud.orgpolicy.v2.IPolicySpec|null);

                    /** Policy etag. */
                    public etag: string;

                    /**
                     * Creates a new Policy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Policy instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IPolicy): google.cloud.orgpolicy.v2.Policy;

                    /**
                     * Encodes the specified Policy message. Does not implicitly {@link google.cloud.orgpolicy.v2.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Policy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.Policy;

                    /**
                     * Decodes a Policy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.Policy;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.Policy;

                    /**
                     * Creates a plain object from a Policy message. Also converts values to other types if specified.
                     * @param message Policy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an AlternatePolicySpec. */
                interface IAlternatePolicySpec {

                    /** AlternatePolicySpec launch */
                    launch?: (string|null);

                    /** AlternatePolicySpec spec */
                    spec?: (google.cloud.orgpolicy.v2.IPolicySpec|null);
                }

                /** Represents an AlternatePolicySpec. */
                class AlternatePolicySpec implements IAlternatePolicySpec {

                    /**
                     * Constructs a new AlternatePolicySpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IAlternatePolicySpec);

                    /** AlternatePolicySpec launch. */
                    public launch: string;

                    /** AlternatePolicySpec spec. */
                    public spec?: (google.cloud.orgpolicy.v2.IPolicySpec|null);

                    /**
                     * Creates a new AlternatePolicySpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AlternatePolicySpec instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IAlternatePolicySpec): google.cloud.orgpolicy.v2.AlternatePolicySpec;

                    /**
                     * Encodes the specified AlternatePolicySpec message. Does not implicitly {@link google.cloud.orgpolicy.v2.AlternatePolicySpec.verify|verify} messages.
                     * @param message AlternatePolicySpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IAlternatePolicySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AlternatePolicySpec message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.AlternatePolicySpec.verify|verify} messages.
                     * @param message AlternatePolicySpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IAlternatePolicySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AlternatePolicySpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AlternatePolicySpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.AlternatePolicySpec;

                    /**
                     * Decodes an AlternatePolicySpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AlternatePolicySpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.AlternatePolicySpec;

                    /**
                     * Verifies an AlternatePolicySpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AlternatePolicySpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AlternatePolicySpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.AlternatePolicySpec;

                    /**
                     * Creates a plain object from an AlternatePolicySpec message. Also converts values to other types if specified.
                     * @param message AlternatePolicySpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.AlternatePolicySpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AlternatePolicySpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AlternatePolicySpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PolicySpec. */
                interface IPolicySpec {

                    /** PolicySpec etag */
                    etag?: (string|null);

                    /** PolicySpec updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PolicySpec rules */
                    rules?: (google.cloud.orgpolicy.v2.PolicySpec.IPolicyRule[]|null);

                    /** PolicySpec inheritFromParent */
                    inheritFromParent?: (boolean|null);

                    /** PolicySpec reset */
                    reset?: (boolean|null);
                }

                /** Represents a PolicySpec. */
                class PolicySpec implements IPolicySpec {

                    /**
                     * Constructs a new PolicySpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IPolicySpec);

                    /** PolicySpec etag. */
                    public etag: string;

                    /** PolicySpec updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PolicySpec rules. */
                    public rules: google.cloud.orgpolicy.v2.PolicySpec.IPolicyRule[];

                    /** PolicySpec inheritFromParent. */
                    public inheritFromParent: boolean;

                    /** PolicySpec reset. */
                    public reset: boolean;

                    /**
                     * Creates a new PolicySpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PolicySpec instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IPolicySpec): google.cloud.orgpolicy.v2.PolicySpec;

                    /**
                     * Encodes the specified PolicySpec message. Does not implicitly {@link google.cloud.orgpolicy.v2.PolicySpec.verify|verify} messages.
                     * @param message PolicySpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IPolicySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PolicySpec message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.PolicySpec.verify|verify} messages.
                     * @param message PolicySpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IPolicySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PolicySpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PolicySpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.PolicySpec;

                    /**
                     * Decodes a PolicySpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PolicySpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.PolicySpec;

                    /**
                     * Verifies a PolicySpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PolicySpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PolicySpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.PolicySpec;

                    /**
                     * Creates a plain object from a PolicySpec message. Also converts values to other types if specified.
                     * @param message PolicySpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.PolicySpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PolicySpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PolicySpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PolicySpec {

                    /** Properties of a PolicyRule. */
                    interface IPolicyRule {

                        /** PolicyRule values */
                        values?: (google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.IStringValues|null);

                        /** PolicyRule allowAll */
                        allowAll?: (boolean|null);

                        /** PolicyRule denyAll */
                        denyAll?: (boolean|null);

                        /** PolicyRule enforce */
                        enforce?: (boolean|null);

                        /** PolicyRule condition */
                        condition?: (google.type.IExpr|null);

                        /** PolicyRule parameters */
                        parameters?: (google.protobuf.IStruct|null);
                    }

                    /** Represents a PolicyRule. */
                    class PolicyRule implements IPolicyRule {

                        /**
                         * Constructs a new PolicyRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v2.PolicySpec.IPolicyRule);

                        /** PolicyRule values. */
                        public values?: (google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.IStringValues|null);

                        /** PolicyRule allowAll. */
                        public allowAll?: (boolean|null);

                        /** PolicyRule denyAll. */
                        public denyAll?: (boolean|null);

                        /** PolicyRule enforce. */
                        public enforce?: (boolean|null);

                        /** PolicyRule condition. */
                        public condition?: (google.type.IExpr|null);

                        /** PolicyRule parameters. */
                        public parameters?: (google.protobuf.IStruct|null);

                        /** PolicyRule kind. */
                        public kind?: ("values"|"allowAll"|"denyAll"|"enforce");

                        /**
                         * Creates a new PolicyRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PolicyRule instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v2.PolicySpec.IPolicyRule): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule;

                        /**
                         * Encodes the specified PolicyRule message. Does not implicitly {@link google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.verify|verify} messages.
                         * @param message PolicyRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v2.PolicySpec.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PolicyRule message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.verify|verify} messages.
                         * @param message PolicyRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v2.PolicySpec.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PolicyRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PolicyRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule;

                        /**
                         * Decodes a PolicyRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PolicyRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule;

                        /**
                         * Creates a plain object from a PolicyRule message. Also converts values to other types if specified.
                         * @param message PolicyRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v2.PolicySpec.PolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                            constructor(properties?: google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.IStringValues);

                            /** StringValues allowedValues. */
                            public allowedValues: string[];

                            /** StringValues deniedValues. */
                            public deniedValues: string[];

                            /**
                             * Creates a new StringValues instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StringValues instance
                             */
                            public static create(properties?: google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.IStringValues): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues;

                            /**
                             * Encodes the specified StringValues message. Does not implicitly {@link google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues.verify|verify} messages.
                             * @param message StringValues message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.IStringValues, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StringValues message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues.verify|verify} messages.
                             * @param message StringValues message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.IStringValues, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StringValues message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StringValues
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues;

                            /**
                             * Decodes a StringValues message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StringValues
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues;

                            /**
                             * Creates a plain object from a StringValues message. Also converts values to other types if specified.
                             * @param message StringValues
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orgpolicy.v2.PolicySpec.PolicyRule.StringValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                }

                /** Properties of a ListConstraintsRequest. */
                interface IListConstraintsRequest {

                    /** ListConstraintsRequest parent */
                    parent?: (string|null);

                    /** ListConstraintsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConstraintsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListConstraintsRequest. */
                class ListConstraintsRequest implements IListConstraintsRequest {

                    /**
                     * Constructs a new ListConstraintsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IListConstraintsRequest);

                    /** ListConstraintsRequest parent. */
                    public parent: string;

                    /** ListConstraintsRequest pageSize. */
                    public pageSize: number;

                    /** ListConstraintsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListConstraintsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConstraintsRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IListConstraintsRequest): google.cloud.orgpolicy.v2.ListConstraintsRequest;

                    /**
                     * Encodes the specified ListConstraintsRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.ListConstraintsRequest.verify|verify} messages.
                     * @param message ListConstraintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IListConstraintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConstraintsRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.ListConstraintsRequest.verify|verify} messages.
                     * @param message ListConstraintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IListConstraintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConstraintsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConstraintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.ListConstraintsRequest;

                    /**
                     * Decodes a ListConstraintsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConstraintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.ListConstraintsRequest;

                    /**
                     * Verifies a ListConstraintsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConstraintsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConstraintsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.ListConstraintsRequest;

                    /**
                     * Creates a plain object from a ListConstraintsRequest message. Also converts values to other types if specified.
                     * @param message ListConstraintsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.ListConstraintsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConstraintsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConstraintsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConstraintsResponse. */
                interface IListConstraintsResponse {

                    /** ListConstraintsResponse constraints */
                    constraints?: (google.cloud.orgpolicy.v2.IConstraint[]|null);

                    /** ListConstraintsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConstraintsResponse. */
                class ListConstraintsResponse implements IListConstraintsResponse {

                    /**
                     * Constructs a new ListConstraintsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IListConstraintsResponse);

                    /** ListConstraintsResponse constraints. */
                    public constraints: google.cloud.orgpolicy.v2.IConstraint[];

                    /** ListConstraintsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConstraintsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConstraintsResponse instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IListConstraintsResponse): google.cloud.orgpolicy.v2.ListConstraintsResponse;

                    /**
                     * Encodes the specified ListConstraintsResponse message. Does not implicitly {@link google.cloud.orgpolicy.v2.ListConstraintsResponse.verify|verify} messages.
                     * @param message ListConstraintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IListConstraintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConstraintsResponse message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.ListConstraintsResponse.verify|verify} messages.
                     * @param message ListConstraintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IListConstraintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConstraintsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConstraintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.ListConstraintsResponse;

                    /**
                     * Decodes a ListConstraintsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConstraintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.ListConstraintsResponse;

                    /**
                     * Verifies a ListConstraintsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConstraintsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConstraintsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.ListConstraintsResponse;

                    /**
                     * Creates a plain object from a ListConstraintsResponse message. Also converts values to other types if specified.
                     * @param message ListConstraintsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.ListConstraintsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConstraintsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConstraintsResponse
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
                    constructor(properties?: google.cloud.orgpolicy.v2.IListPoliciesRequest);

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
                    public static create(properties?: google.cloud.orgpolicy.v2.IListPoliciesRequest): google.cloud.orgpolicy.v2.ListPoliciesRequest;

                    /**
                     * Encodes the specified ListPoliciesRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.ListPoliciesRequest.verify|verify} messages.
                     * @param message ListPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.ListPoliciesRequest.verify|verify} messages.
                     * @param message ListPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.ListPoliciesRequest;

                    /**
                     * Decodes a ListPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.ListPoliciesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.ListPoliciesRequest;

                    /**
                     * Creates a plain object from a ListPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.ListPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    policies?: (google.cloud.orgpolicy.v2.IPolicy[]|null);

                    /** ListPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPoliciesResponse. */
                class ListPoliciesResponse implements IListPoliciesResponse {

                    /**
                     * Constructs a new ListPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IListPoliciesResponse);

                    /** ListPoliciesResponse policies. */
                    public policies: google.cloud.orgpolicy.v2.IPolicy[];

                    /** ListPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IListPoliciesResponse): google.cloud.orgpolicy.v2.ListPoliciesResponse;

                    /**
                     * Encodes the specified ListPoliciesResponse message. Does not implicitly {@link google.cloud.orgpolicy.v2.ListPoliciesResponse.verify|verify} messages.
                     * @param message ListPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.ListPoliciesResponse.verify|verify} messages.
                     * @param message ListPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.ListPoliciesResponse;

                    /**
                     * Decodes a ListPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.ListPoliciesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.ListPoliciesResponse;

                    /**
                     * Creates a plain object from a ListPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.ListPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.orgpolicy.v2.IGetPolicyRequest);

                    /** GetPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IGetPolicyRequest): google.cloud.orgpolicy.v2.GetPolicyRequest;

                    /**
                     * Encodes the specified GetPolicyRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.GetPolicyRequest.verify|verify} messages.
                     * @param message GetPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.GetPolicyRequest.verify|verify} messages.
                     * @param message GetPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.GetPolicyRequest;

                    /**
                     * Decodes a GetPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.GetPolicyRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.GetPolicyRequest;

                    /**
                     * Creates a plain object from a GetPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.GetPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a GetEffectivePolicyRequest. */
                interface IGetEffectivePolicyRequest {

                    /** GetEffectivePolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEffectivePolicyRequest. */
                class GetEffectivePolicyRequest implements IGetEffectivePolicyRequest {

                    /**
                     * Constructs a new GetEffectivePolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IGetEffectivePolicyRequest);

                    /** GetEffectivePolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEffectivePolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEffectivePolicyRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IGetEffectivePolicyRequest): google.cloud.orgpolicy.v2.GetEffectivePolicyRequest;

                    /**
                     * Encodes the specified GetEffectivePolicyRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.GetEffectivePolicyRequest.verify|verify} messages.
                     * @param message GetEffectivePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IGetEffectivePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEffectivePolicyRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.GetEffectivePolicyRequest.verify|verify} messages.
                     * @param message GetEffectivePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IGetEffectivePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEffectivePolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEffectivePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.GetEffectivePolicyRequest;

                    /**
                     * Decodes a GetEffectivePolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEffectivePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.GetEffectivePolicyRequest;

                    /**
                     * Verifies a GetEffectivePolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEffectivePolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEffectivePolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.GetEffectivePolicyRequest;

                    /**
                     * Creates a plain object from a GetEffectivePolicyRequest message. Also converts values to other types if specified.
                     * @param message GetEffectivePolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.GetEffectivePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEffectivePolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEffectivePolicyRequest
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
                    policy?: (google.cloud.orgpolicy.v2.IPolicy|null);
                }

                /** Represents a CreatePolicyRequest. */
                class CreatePolicyRequest implements ICreatePolicyRequest {

                    /**
                     * Constructs a new CreatePolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.ICreatePolicyRequest);

                    /** CreatePolicyRequest parent. */
                    public parent: string;

                    /** CreatePolicyRequest policy. */
                    public policy?: (google.cloud.orgpolicy.v2.IPolicy|null);

                    /**
                     * Creates a new CreatePolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePolicyRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.ICreatePolicyRequest): google.cloud.orgpolicy.v2.CreatePolicyRequest;

                    /**
                     * Encodes the specified CreatePolicyRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.CreatePolicyRequest.verify|verify} messages.
                     * @param message CreatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePolicyRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.CreatePolicyRequest.verify|verify} messages.
                     * @param message CreatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.CreatePolicyRequest;

                    /**
                     * Decodes a CreatePolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.CreatePolicyRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.CreatePolicyRequest;

                    /**
                     * Creates a plain object from a CreatePolicyRequest message. Also converts values to other types if specified.
                     * @param message CreatePolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.CreatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    policy?: (google.cloud.orgpolicy.v2.IPolicy|null);

                    /** UpdatePolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePolicyRequest. */
                class UpdatePolicyRequest implements IUpdatePolicyRequest {

                    /**
                     * Constructs a new UpdatePolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IUpdatePolicyRequest);

                    /** UpdatePolicyRequest policy. */
                    public policy?: (google.cloud.orgpolicy.v2.IPolicy|null);

                    /** UpdatePolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePolicyRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IUpdatePolicyRequest): google.cloud.orgpolicy.v2.UpdatePolicyRequest;

                    /**
                     * Encodes the specified UpdatePolicyRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.UpdatePolicyRequest.verify|verify} messages.
                     * @param message UpdatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePolicyRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.UpdatePolicyRequest.verify|verify} messages.
                     * @param message UpdatePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.UpdatePolicyRequest;

                    /**
                     * Decodes an UpdatePolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.UpdatePolicyRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.UpdatePolicyRequest;

                    /**
                     * Creates a plain object from an UpdatePolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdatePolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.UpdatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.orgpolicy.v2.IDeletePolicyRequest);

                    /** DeletePolicyRequest name. */
                    public name: string;

                    /** DeletePolicyRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeletePolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePolicyRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IDeletePolicyRequest): google.cloud.orgpolicy.v2.DeletePolicyRequest;

                    /**
                     * Encodes the specified DeletePolicyRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.DeletePolicyRequest.verify|verify} messages.
                     * @param message DeletePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePolicyRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.DeletePolicyRequest.verify|verify} messages.
                     * @param message DeletePolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.DeletePolicyRequest;

                    /**
                     * Decodes a DeletePolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.DeletePolicyRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.DeletePolicyRequest;

                    /**
                     * Creates a plain object from a DeletePolicyRequest message. Also converts values to other types if specified.
                     * @param message DeletePolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.DeletePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a CreateCustomConstraintRequest. */
                interface ICreateCustomConstraintRequest {

                    /** CreateCustomConstraintRequest parent */
                    parent?: (string|null);

                    /** CreateCustomConstraintRequest customConstraint */
                    customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);
                }

                /** Represents a CreateCustomConstraintRequest. */
                class CreateCustomConstraintRequest implements ICreateCustomConstraintRequest {

                    /**
                     * Constructs a new CreateCustomConstraintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.ICreateCustomConstraintRequest);

                    /** CreateCustomConstraintRequest parent. */
                    public parent: string;

                    /** CreateCustomConstraintRequest customConstraint. */
                    public customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);

                    /**
                     * Creates a new CreateCustomConstraintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCustomConstraintRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.ICreateCustomConstraintRequest): google.cloud.orgpolicy.v2.CreateCustomConstraintRequest;

                    /**
                     * Encodes the specified CreateCustomConstraintRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.CreateCustomConstraintRequest.verify|verify} messages.
                     * @param message CreateCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.ICreateCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCustomConstraintRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.CreateCustomConstraintRequest.verify|verify} messages.
                     * @param message CreateCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.ICreateCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCustomConstraintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.CreateCustomConstraintRequest;

                    /**
                     * Decodes a CreateCustomConstraintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.CreateCustomConstraintRequest;

                    /**
                     * Verifies a CreateCustomConstraintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCustomConstraintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCustomConstraintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.CreateCustomConstraintRequest;

                    /**
                     * Creates a plain object from a CreateCustomConstraintRequest message. Also converts values to other types if specified.
                     * @param message CreateCustomConstraintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.CreateCustomConstraintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCustomConstraintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCustomConstraintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCustomConstraintRequest. */
                interface IGetCustomConstraintRequest {

                    /** GetCustomConstraintRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCustomConstraintRequest. */
                class GetCustomConstraintRequest implements IGetCustomConstraintRequest {

                    /**
                     * Constructs a new GetCustomConstraintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IGetCustomConstraintRequest);

                    /** GetCustomConstraintRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCustomConstraintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCustomConstraintRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IGetCustomConstraintRequest): google.cloud.orgpolicy.v2.GetCustomConstraintRequest;

                    /**
                     * Encodes the specified GetCustomConstraintRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.GetCustomConstraintRequest.verify|verify} messages.
                     * @param message GetCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IGetCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCustomConstraintRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.GetCustomConstraintRequest.verify|verify} messages.
                     * @param message GetCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IGetCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCustomConstraintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.GetCustomConstraintRequest;

                    /**
                     * Decodes a GetCustomConstraintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.GetCustomConstraintRequest;

                    /**
                     * Verifies a GetCustomConstraintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCustomConstraintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCustomConstraintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.GetCustomConstraintRequest;

                    /**
                     * Creates a plain object from a GetCustomConstraintRequest message. Also converts values to other types if specified.
                     * @param message GetCustomConstraintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.GetCustomConstraintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCustomConstraintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCustomConstraintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomConstraintsRequest. */
                interface IListCustomConstraintsRequest {

                    /** ListCustomConstraintsRequest parent */
                    parent?: (string|null);

                    /** ListCustomConstraintsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCustomConstraintsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListCustomConstraintsRequest. */
                class ListCustomConstraintsRequest implements IListCustomConstraintsRequest {

                    /**
                     * Constructs a new ListCustomConstraintsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IListCustomConstraintsRequest);

                    /** ListCustomConstraintsRequest parent. */
                    public parent: string;

                    /** ListCustomConstraintsRequest pageSize. */
                    public pageSize: number;

                    /** ListCustomConstraintsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListCustomConstraintsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomConstraintsRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IListCustomConstraintsRequest): google.cloud.orgpolicy.v2.ListCustomConstraintsRequest;

                    /**
                     * Encodes the specified ListCustomConstraintsRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.ListCustomConstraintsRequest.verify|verify} messages.
                     * @param message ListCustomConstraintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IListCustomConstraintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomConstraintsRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.ListCustomConstraintsRequest.verify|verify} messages.
                     * @param message ListCustomConstraintsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IListCustomConstraintsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomConstraintsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomConstraintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.ListCustomConstraintsRequest;

                    /**
                     * Decodes a ListCustomConstraintsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomConstraintsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.ListCustomConstraintsRequest;

                    /**
                     * Verifies a ListCustomConstraintsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomConstraintsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomConstraintsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.ListCustomConstraintsRequest;

                    /**
                     * Creates a plain object from a ListCustomConstraintsRequest message. Also converts values to other types if specified.
                     * @param message ListCustomConstraintsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.ListCustomConstraintsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomConstraintsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomConstraintsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomConstraintsResponse. */
                interface IListCustomConstraintsResponse {

                    /** ListCustomConstraintsResponse customConstraints */
                    customConstraints?: (google.cloud.orgpolicy.v2.ICustomConstraint[]|null);

                    /** ListCustomConstraintsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCustomConstraintsResponse. */
                class ListCustomConstraintsResponse implements IListCustomConstraintsResponse {

                    /**
                     * Constructs a new ListCustomConstraintsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IListCustomConstraintsResponse);

                    /** ListCustomConstraintsResponse customConstraints. */
                    public customConstraints: google.cloud.orgpolicy.v2.ICustomConstraint[];

                    /** ListCustomConstraintsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCustomConstraintsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomConstraintsResponse instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IListCustomConstraintsResponse): google.cloud.orgpolicy.v2.ListCustomConstraintsResponse;

                    /**
                     * Encodes the specified ListCustomConstraintsResponse message. Does not implicitly {@link google.cloud.orgpolicy.v2.ListCustomConstraintsResponse.verify|verify} messages.
                     * @param message ListCustomConstraintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IListCustomConstraintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomConstraintsResponse message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.ListCustomConstraintsResponse.verify|verify} messages.
                     * @param message ListCustomConstraintsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IListCustomConstraintsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomConstraintsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomConstraintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.ListCustomConstraintsResponse;

                    /**
                     * Decodes a ListCustomConstraintsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomConstraintsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.ListCustomConstraintsResponse;

                    /**
                     * Verifies a ListCustomConstraintsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomConstraintsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomConstraintsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.ListCustomConstraintsResponse;

                    /**
                     * Creates a plain object from a ListCustomConstraintsResponse message. Also converts values to other types if specified.
                     * @param message ListCustomConstraintsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.ListCustomConstraintsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomConstraintsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomConstraintsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCustomConstraintRequest. */
                interface IUpdateCustomConstraintRequest {

                    /** UpdateCustomConstraintRequest customConstraint */
                    customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);
                }

                /** Represents an UpdateCustomConstraintRequest. */
                class UpdateCustomConstraintRequest implements IUpdateCustomConstraintRequest {

                    /**
                     * Constructs a new UpdateCustomConstraintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IUpdateCustomConstraintRequest);

                    /** UpdateCustomConstraintRequest customConstraint. */
                    public customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);

                    /**
                     * Creates a new UpdateCustomConstraintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCustomConstraintRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IUpdateCustomConstraintRequest): google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest;

                    /**
                     * Encodes the specified UpdateCustomConstraintRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest.verify|verify} messages.
                     * @param message UpdateCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IUpdateCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCustomConstraintRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest.verify|verify} messages.
                     * @param message UpdateCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IUpdateCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCustomConstraintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest;

                    /**
                     * Decodes an UpdateCustomConstraintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest;

                    /**
                     * Verifies an UpdateCustomConstraintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCustomConstraintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCustomConstraintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest;

                    /**
                     * Creates a plain object from an UpdateCustomConstraintRequest message. Also converts values to other types if specified.
                     * @param message UpdateCustomConstraintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.UpdateCustomConstraintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCustomConstraintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCustomConstraintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCustomConstraintRequest. */
                interface IDeleteCustomConstraintRequest {

                    /** DeleteCustomConstraintRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCustomConstraintRequest. */
                class DeleteCustomConstraintRequest implements IDeleteCustomConstraintRequest {

                    /**
                     * Constructs a new DeleteCustomConstraintRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v2.IDeleteCustomConstraintRequest);

                    /** DeleteCustomConstraintRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCustomConstraintRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCustomConstraintRequest instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v2.IDeleteCustomConstraintRequest): google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest;

                    /**
                     * Encodes the specified DeleteCustomConstraintRequest message. Does not implicitly {@link google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest.verify|verify} messages.
                     * @param message DeleteCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v2.IDeleteCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCustomConstraintRequest message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest.verify|verify} messages.
                     * @param message DeleteCustomConstraintRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v2.IDeleteCustomConstraintRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCustomConstraintRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest;

                    /**
                     * Decodes a DeleteCustomConstraintRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCustomConstraintRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest;

                    /**
                     * Verifies a DeleteCustomConstraintRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCustomConstraintRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCustomConstraintRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest;

                    /**
                     * Creates a plain object from a DeleteCustomConstraintRequest message. Also converts values to other types if specified.
                     * @param message DeleteCustomConstraintRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v2.DeleteCustomConstraintRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCustomConstraintRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCustomConstraintRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }

        /** Namespace policysimulator. */
        namespace policysimulator {

            /** Namespace v1. */
            namespace v1 {

                /** AccessState enum. */
                enum AccessState {
                    ACCESS_STATE_UNSPECIFIED = 0,
                    GRANTED = 1,
                    NOT_GRANTED = 2,
                    UNKNOWN_CONDITIONAL = 3,
                    UNKNOWN_INFO_DENIED = 4
                }

                /** HeuristicRelevance enum. */
                enum HeuristicRelevance {
                    HEURISTIC_RELEVANCE_UNSPECIFIED = 0,
                    NORMAL = 1,
                    HIGH = 2
                }

                /** Properties of an AccessTuple. */
                interface IAccessTuple {

                    /** AccessTuple principal */
                    principal?: (string|null);

                    /** AccessTuple fullResourceName */
                    fullResourceName?: (string|null);

                    /** AccessTuple permission */
                    permission?: (string|null);
                }

                /** Represents an AccessTuple. */
                class AccessTuple implements IAccessTuple {

                    /**
                     * Constructs a new AccessTuple.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IAccessTuple);

                    /** AccessTuple principal. */
                    public principal: string;

                    /** AccessTuple fullResourceName. */
                    public fullResourceName: string;

                    /** AccessTuple permission. */
                    public permission: string;

                    /**
                     * Creates a new AccessTuple instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessTuple instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IAccessTuple): google.cloud.policysimulator.v1.AccessTuple;

                    /**
                     * Encodes the specified AccessTuple message. Does not implicitly {@link google.cloud.policysimulator.v1.AccessTuple.verify|verify} messages.
                     * @param message AccessTuple message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessTuple message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.AccessTuple.verify|verify} messages.
                     * @param message AccessTuple message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessTuple message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessTuple
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.AccessTuple;

                    /**
                     * Decodes an AccessTuple message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessTuple
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.AccessTuple;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.AccessTuple;

                    /**
                     * Creates a plain object from an AccessTuple message. Also converts values to other types if specified.
                     * @param message AccessTuple
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.AccessTuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an ExplainedPolicy. */
                interface IExplainedPolicy {

                    /** ExplainedPolicy access */
                    access?: (google.cloud.policysimulator.v1.AccessState|keyof typeof google.cloud.policysimulator.v1.AccessState|null);

                    /** ExplainedPolicy fullResourceName */
                    fullResourceName?: (string|null);

                    /** ExplainedPolicy policy */
                    policy?: (google.iam.v1.IPolicy|null);

                    /** ExplainedPolicy bindingExplanations */
                    bindingExplanations?: (google.cloud.policysimulator.v1.IBindingExplanation[]|null);

                    /** ExplainedPolicy relevance */
                    relevance?: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance|null);
                }

                /** Represents an ExplainedPolicy. */
                class ExplainedPolicy implements IExplainedPolicy {

                    /**
                     * Constructs a new ExplainedPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IExplainedPolicy);

                    /** ExplainedPolicy access. */
                    public access: (google.cloud.policysimulator.v1.AccessState|keyof typeof google.cloud.policysimulator.v1.AccessState);

                    /** ExplainedPolicy fullResourceName. */
                    public fullResourceName: string;

                    /** ExplainedPolicy policy. */
                    public policy?: (google.iam.v1.IPolicy|null);

                    /** ExplainedPolicy bindingExplanations. */
                    public bindingExplanations: google.cloud.policysimulator.v1.IBindingExplanation[];

                    /** ExplainedPolicy relevance. */
                    public relevance: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance);

                    /**
                     * Creates a new ExplainedPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplainedPolicy instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IExplainedPolicy): google.cloud.policysimulator.v1.ExplainedPolicy;

                    /**
                     * Encodes the specified ExplainedPolicy message. Does not implicitly {@link google.cloud.policysimulator.v1.ExplainedPolicy.verify|verify} messages.
                     * @param message ExplainedPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IExplainedPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplainedPolicy message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ExplainedPolicy.verify|verify} messages.
                     * @param message ExplainedPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IExplainedPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplainedPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplainedPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ExplainedPolicy;

                    /**
                     * Decodes an ExplainedPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplainedPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ExplainedPolicy;

                    /**
                     * Verifies an ExplainedPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplainedPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplainedPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ExplainedPolicy;

                    /**
                     * Creates a plain object from an ExplainedPolicy message. Also converts values to other types if specified.
                     * @param message ExplainedPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ExplainedPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplainedPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplainedPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BindingExplanation. */
                interface IBindingExplanation {

                    /** BindingExplanation access */
                    access?: (google.cloud.policysimulator.v1.AccessState|keyof typeof google.cloud.policysimulator.v1.AccessState|null);

                    /** BindingExplanation role */
                    role?: (string|null);

                    /** BindingExplanation rolePermission */
                    rolePermission?: (google.cloud.policysimulator.v1.BindingExplanation.RolePermission|keyof typeof google.cloud.policysimulator.v1.BindingExplanation.RolePermission|null);

                    /** BindingExplanation rolePermissionRelevance */
                    rolePermissionRelevance?: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance|null);

                    /** BindingExplanation memberships */
                    memberships?: ({ [k: string]: google.cloud.policysimulator.v1.BindingExplanation.IAnnotatedMembership }|null);

                    /** BindingExplanation relevance */
                    relevance?: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance|null);

                    /** BindingExplanation condition */
                    condition?: (google.type.IExpr|null);
                }

                /** Represents a BindingExplanation. */
                class BindingExplanation implements IBindingExplanation {

                    /**
                     * Constructs a new BindingExplanation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IBindingExplanation);

                    /** BindingExplanation access. */
                    public access: (google.cloud.policysimulator.v1.AccessState|keyof typeof google.cloud.policysimulator.v1.AccessState);

                    /** BindingExplanation role. */
                    public role: string;

                    /** BindingExplanation rolePermission. */
                    public rolePermission: (google.cloud.policysimulator.v1.BindingExplanation.RolePermission|keyof typeof google.cloud.policysimulator.v1.BindingExplanation.RolePermission);

                    /** BindingExplanation rolePermissionRelevance. */
                    public rolePermissionRelevance: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance);

                    /** BindingExplanation memberships. */
                    public memberships: { [k: string]: google.cloud.policysimulator.v1.BindingExplanation.IAnnotatedMembership };

                    /** BindingExplanation relevance. */
                    public relevance: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance);

                    /** BindingExplanation condition. */
                    public condition?: (google.type.IExpr|null);

                    /**
                     * Creates a new BindingExplanation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BindingExplanation instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IBindingExplanation): google.cloud.policysimulator.v1.BindingExplanation;

                    /**
                     * Encodes the specified BindingExplanation message. Does not implicitly {@link google.cloud.policysimulator.v1.BindingExplanation.verify|verify} messages.
                     * @param message BindingExplanation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IBindingExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BindingExplanation message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.BindingExplanation.verify|verify} messages.
                     * @param message BindingExplanation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IBindingExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BindingExplanation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BindingExplanation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.BindingExplanation;

                    /**
                     * Decodes a BindingExplanation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BindingExplanation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.BindingExplanation;

                    /**
                     * Verifies a BindingExplanation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BindingExplanation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BindingExplanation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.BindingExplanation;

                    /**
                     * Creates a plain object from a BindingExplanation message. Also converts values to other types if specified.
                     * @param message BindingExplanation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.BindingExplanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BindingExplanation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BindingExplanation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BindingExplanation {

                    /** Properties of an AnnotatedMembership. */
                    interface IAnnotatedMembership {

                        /** AnnotatedMembership membership */
                        membership?: (google.cloud.policysimulator.v1.BindingExplanation.Membership|keyof typeof google.cloud.policysimulator.v1.BindingExplanation.Membership|null);

                        /** AnnotatedMembership relevance */
                        relevance?: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance|null);
                    }

                    /** Represents an AnnotatedMembership. */
                    class AnnotatedMembership implements IAnnotatedMembership {

                        /**
                         * Constructs a new AnnotatedMembership.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policysimulator.v1.BindingExplanation.IAnnotatedMembership);

                        /** AnnotatedMembership membership. */
                        public membership: (google.cloud.policysimulator.v1.BindingExplanation.Membership|keyof typeof google.cloud.policysimulator.v1.BindingExplanation.Membership);

                        /** AnnotatedMembership relevance. */
                        public relevance: (google.cloud.policysimulator.v1.HeuristicRelevance|keyof typeof google.cloud.policysimulator.v1.HeuristicRelevance);

                        /**
                         * Creates a new AnnotatedMembership instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnnotatedMembership instance
                         */
                        public static create(properties?: google.cloud.policysimulator.v1.BindingExplanation.IAnnotatedMembership): google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership;

                        /**
                         * Encodes the specified AnnotatedMembership message. Does not implicitly {@link google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership.verify|verify} messages.
                         * @param message AnnotatedMembership message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policysimulator.v1.BindingExplanation.IAnnotatedMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnnotatedMembership message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership.verify|verify} messages.
                         * @param message AnnotatedMembership message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policysimulator.v1.BindingExplanation.IAnnotatedMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnnotatedMembership message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnnotatedMembership
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership;

                        /**
                         * Decodes an AnnotatedMembership message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnnotatedMembership
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership;

                        /**
                         * Verifies an AnnotatedMembership message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnnotatedMembership message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnnotatedMembership
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership;

                        /**
                         * Creates a plain object from an AnnotatedMembership message. Also converts values to other types if specified.
                         * @param message AnnotatedMembership
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policysimulator.v1.BindingExplanation.AnnotatedMembership, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnnotatedMembership to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AnnotatedMembership
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RolePermission enum. */
                    enum RolePermission {
                        ROLE_PERMISSION_UNSPECIFIED = 0,
                        ROLE_PERMISSION_INCLUDED = 1,
                        ROLE_PERMISSION_NOT_INCLUDED = 2,
                        ROLE_PERMISSION_UNKNOWN_INFO_DENIED = 3
                    }

                    /** Membership enum. */
                    enum Membership {
                        MEMBERSHIP_UNSPECIFIED = 0,
                        MEMBERSHIP_INCLUDED = 1,
                        MEMBERSHIP_NOT_INCLUDED = 2,
                        MEMBERSHIP_UNKNOWN_INFO_DENIED = 3,
                        MEMBERSHIP_UNKNOWN_UNSUPPORTED = 4
                    }
                }

                /** Represents an OrgPolicyViolationsPreviewService */
                class OrgPolicyViolationsPreviewService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OrgPolicyViolationsPreviewService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OrgPolicyViolationsPreviewService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OrgPolicyViolationsPreviewService;

                    /**
                     * Calls ListOrgPolicyViolationsPreviews.
                     * @param request ListOrgPolicyViolationsPreviewsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOrgPolicyViolationsPreviewsResponse
                     */
                    public listOrgPolicyViolationsPreviews(request: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsRequest, callback: google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsPreviewsCallback): void;

                    /**
                     * Calls ListOrgPolicyViolationsPreviews.
                     * @param request ListOrgPolicyViolationsPreviewsRequest message or plain object
                     * @returns Promise
                     */
                    public listOrgPolicyViolationsPreviews(request: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsRequest): Promise<google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse>;

                    /**
                     * Calls GetOrgPolicyViolationsPreview.
                     * @param request GetOrgPolicyViolationsPreviewRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OrgPolicyViolationsPreview
                     */
                    public getOrgPolicyViolationsPreview(request: google.cloud.policysimulator.v1.IGetOrgPolicyViolationsPreviewRequest, callback: google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.GetOrgPolicyViolationsPreviewCallback): void;

                    /**
                     * Calls GetOrgPolicyViolationsPreview.
                     * @param request GetOrgPolicyViolationsPreviewRequest message or plain object
                     * @returns Promise
                     */
                    public getOrgPolicyViolationsPreview(request: google.cloud.policysimulator.v1.IGetOrgPolicyViolationsPreviewRequest): Promise<google.cloud.policysimulator.v1.OrgPolicyViolationsPreview>;

                    /**
                     * Calls CreateOrgPolicyViolationsPreview.
                     * @param request CreateOrgPolicyViolationsPreviewRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createOrgPolicyViolationsPreview(request: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewRequest, callback: google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreviewCallback): void;

                    /**
                     * Calls CreateOrgPolicyViolationsPreview.
                     * @param request CreateOrgPolicyViolationsPreviewRequest message or plain object
                     * @returns Promise
                     */
                    public createOrgPolicyViolationsPreview(request: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListOrgPolicyViolations.
                     * @param request ListOrgPolicyViolationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOrgPolicyViolationsResponse
                     */
                    public listOrgPolicyViolations(request: google.cloud.policysimulator.v1.IListOrgPolicyViolationsRequest, callback: google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsCallback): void;

                    /**
                     * Calls ListOrgPolicyViolations.
                     * @param request ListOrgPolicyViolationsRequest message or plain object
                     * @returns Promise
                     */
                    public listOrgPolicyViolations(request: google.cloud.policysimulator.v1.IListOrgPolicyViolationsRequest): Promise<google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse>;
                }

                namespace OrgPolicyViolationsPreviewService {

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService|listOrgPolicyViolationsPreviews}.
                     * @param error Error, if any
                     * @param [response] ListOrgPolicyViolationsPreviewsResponse
                     */
                    type ListOrgPolicyViolationsPreviewsCallback = (error: (Error|null), response?: google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService|getOrgPolicyViolationsPreview}.
                     * @param error Error, if any
                     * @param [response] OrgPolicyViolationsPreview
                     */
                    type GetOrgPolicyViolationsPreviewCallback = (error: (Error|null), response?: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview) => void;

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService|createOrgPolicyViolationsPreview}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateOrgPolicyViolationsPreviewCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService|listOrgPolicyViolations}.
                     * @param error Error, if any
                     * @param [response] ListOrgPolicyViolationsResponse
                     */
                    type ListOrgPolicyViolationsCallback = (error: (Error|null), response?: google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse) => void;
                }

                /** PreviewState enum. */
                enum PreviewState {
                    PREVIEW_STATE_UNSPECIFIED = 0,
                    PREVIEW_PENDING = 1,
                    PREVIEW_RUNNING = 2,
                    PREVIEW_SUCCEEDED = 3,
                    PREVIEW_FAILED = 4
                }

                /** Properties of an OrgPolicyViolationsPreview. */
                interface IOrgPolicyViolationsPreview {

                    /** OrgPolicyViolationsPreview name */
                    name?: (string|null);

                    /** OrgPolicyViolationsPreview state */
                    state?: (google.cloud.policysimulator.v1.PreviewState|keyof typeof google.cloud.policysimulator.v1.PreviewState|null);

                    /** OrgPolicyViolationsPreview overlay */
                    overlay?: (google.cloud.policysimulator.v1.IOrgPolicyOverlay|null);

                    /** OrgPolicyViolationsPreview violationsCount */
                    violationsCount?: (number|null);

                    /** OrgPolicyViolationsPreview resourceCounts */
                    resourceCounts?: (google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.IResourceCounts|null);

                    /** OrgPolicyViolationsPreview customConstraints */
                    customConstraints?: (string[]|null);

                    /** OrgPolicyViolationsPreview createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OrgPolicyViolationsPreview. */
                class OrgPolicyViolationsPreview implements IOrgPolicyViolationsPreview {

                    /**
                     * Constructs a new OrgPolicyViolationsPreview.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview);

                    /** OrgPolicyViolationsPreview name. */
                    public name: string;

                    /** OrgPolicyViolationsPreview state. */
                    public state: (google.cloud.policysimulator.v1.PreviewState|keyof typeof google.cloud.policysimulator.v1.PreviewState);

                    /** OrgPolicyViolationsPreview overlay. */
                    public overlay?: (google.cloud.policysimulator.v1.IOrgPolicyOverlay|null);

                    /** OrgPolicyViolationsPreview violationsCount. */
                    public violationsCount: number;

                    /** OrgPolicyViolationsPreview resourceCounts. */
                    public resourceCounts?: (google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.IResourceCounts|null);

                    /** OrgPolicyViolationsPreview customConstraints. */
                    public customConstraints: string[];

                    /** OrgPolicyViolationsPreview createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OrgPolicyViolationsPreview instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrgPolicyViolationsPreview instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview;

                    /**
                     * Encodes the specified OrgPolicyViolationsPreview message. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.verify|verify} messages.
                     * @param message OrgPolicyViolationsPreview message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrgPolicyViolationsPreview message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.verify|verify} messages.
                     * @param message OrgPolicyViolationsPreview message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrgPolicyViolationsPreview message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrgPolicyViolationsPreview
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview;

                    /**
                     * Decodes an OrgPolicyViolationsPreview message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrgPolicyViolationsPreview
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview;

                    /**
                     * Verifies an OrgPolicyViolationsPreview message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrgPolicyViolationsPreview message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrgPolicyViolationsPreview
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview;

                    /**
                     * Creates a plain object from an OrgPolicyViolationsPreview message. Also converts values to other types if specified.
                     * @param message OrgPolicyViolationsPreview
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrgPolicyViolationsPreview to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrgPolicyViolationsPreview
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OrgPolicyViolationsPreview {

                    /** Properties of a ResourceCounts. */
                    interface IResourceCounts {

                        /** ResourceCounts scanned */
                        scanned?: (number|null);

                        /** ResourceCounts noncompliant */
                        noncompliant?: (number|null);

                        /** ResourceCounts compliant */
                        compliant?: (number|null);

                        /** ResourceCounts unenforced */
                        unenforced?: (number|null);

                        /** ResourceCounts errors */
                        errors?: (number|null);
                    }

                    /** Represents a ResourceCounts. */
                    class ResourceCounts implements IResourceCounts {

                        /**
                         * Constructs a new ResourceCounts.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.IResourceCounts);

                        /** ResourceCounts scanned. */
                        public scanned: number;

                        /** ResourceCounts noncompliant. */
                        public noncompliant: number;

                        /** ResourceCounts compliant. */
                        public compliant: number;

                        /** ResourceCounts unenforced. */
                        public unenforced: number;

                        /** ResourceCounts errors. */
                        public errors: number;

                        /**
                         * Creates a new ResourceCounts instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceCounts instance
                         */
                        public static create(properties?: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.IResourceCounts): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts;

                        /**
                         * Encodes the specified ResourceCounts message. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts.verify|verify} messages.
                         * @param message ResourceCounts message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.IResourceCounts, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceCounts message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts.verify|verify} messages.
                         * @param message ResourceCounts message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.IResourceCounts, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceCounts message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceCounts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts;

                        /**
                         * Decodes a ResourceCounts message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceCounts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts;

                        /**
                         * Verifies a ResourceCounts message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceCounts message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceCounts
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts;

                        /**
                         * Creates a plain object from a ResourceCounts message. Also converts values to other types if specified.
                         * @param message ResourceCounts
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policysimulator.v1.OrgPolicyViolationsPreview.ResourceCounts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceCounts to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceCounts
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an OrgPolicyViolation. */
                interface IOrgPolicyViolation {

                    /** OrgPolicyViolation name */
                    name?: (string|null);

                    /** OrgPolicyViolation resource */
                    resource?: (google.cloud.policysimulator.v1.IResourceContext|null);

                    /** OrgPolicyViolation customConstraint */
                    customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);

                    /** OrgPolicyViolation error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents an OrgPolicyViolation. */
                class OrgPolicyViolation implements IOrgPolicyViolation {

                    /**
                     * Constructs a new OrgPolicyViolation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IOrgPolicyViolation);

                    /** OrgPolicyViolation name. */
                    public name: string;

                    /** OrgPolicyViolation resource. */
                    public resource?: (google.cloud.policysimulator.v1.IResourceContext|null);

                    /** OrgPolicyViolation customConstraint. */
                    public customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);

                    /** OrgPolicyViolation error. */
                    public error?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new OrgPolicyViolation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrgPolicyViolation instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IOrgPolicyViolation): google.cloud.policysimulator.v1.OrgPolicyViolation;

                    /**
                     * Encodes the specified OrgPolicyViolation message. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyViolation.verify|verify} messages.
                     * @param message OrgPolicyViolation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IOrgPolicyViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrgPolicyViolation message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyViolation.verify|verify} messages.
                     * @param message OrgPolicyViolation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IOrgPolicyViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrgPolicyViolation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrgPolicyViolation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.OrgPolicyViolation;

                    /**
                     * Decodes an OrgPolicyViolation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrgPolicyViolation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.OrgPolicyViolation;

                    /**
                     * Verifies an OrgPolicyViolation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrgPolicyViolation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrgPolicyViolation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.OrgPolicyViolation;

                    /**
                     * Creates a plain object from an OrgPolicyViolation message. Also converts values to other types if specified.
                     * @param message OrgPolicyViolation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.OrgPolicyViolation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrgPolicyViolation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrgPolicyViolation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceContext. */
                interface IResourceContext {

                    /** ResourceContext resource */
                    resource?: (string|null);

                    /** ResourceContext assetType */
                    assetType?: (string|null);

                    /** ResourceContext ancestors */
                    ancestors?: (string[]|null);
                }

                /** Represents a ResourceContext. */
                class ResourceContext implements IResourceContext {

                    /**
                     * Constructs a new ResourceContext.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IResourceContext);

                    /** ResourceContext resource. */
                    public resource: string;

                    /** ResourceContext assetType. */
                    public assetType: string;

                    /** ResourceContext ancestors. */
                    public ancestors: string[];

                    /**
                     * Creates a new ResourceContext instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceContext instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IResourceContext): google.cloud.policysimulator.v1.ResourceContext;

                    /**
                     * Encodes the specified ResourceContext message. Does not implicitly {@link google.cloud.policysimulator.v1.ResourceContext.verify|verify} messages.
                     * @param message ResourceContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IResourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceContext message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ResourceContext.verify|verify} messages.
                     * @param message ResourceContext message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IResourceContext, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceContext message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ResourceContext;

                    /**
                     * Decodes a ResourceContext message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceContext
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ResourceContext;

                    /**
                     * Verifies a ResourceContext message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceContext message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceContext
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ResourceContext;

                    /**
                     * Creates a plain object from a ResourceContext message. Also converts values to other types if specified.
                     * @param message ResourceContext
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ResourceContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceContext to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceContext
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OrgPolicyOverlay. */
                interface IOrgPolicyOverlay {

                    /** OrgPolicyOverlay policies */
                    policies?: (google.cloud.policysimulator.v1.OrgPolicyOverlay.IPolicyOverlay[]|null);

                    /** OrgPolicyOverlay customConstraints */
                    customConstraints?: (google.cloud.policysimulator.v1.OrgPolicyOverlay.ICustomConstraintOverlay[]|null);
                }

                /** Represents an OrgPolicyOverlay. */
                class OrgPolicyOverlay implements IOrgPolicyOverlay {

                    /**
                     * Constructs a new OrgPolicyOverlay.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IOrgPolicyOverlay);

                    /** OrgPolicyOverlay policies. */
                    public policies: google.cloud.policysimulator.v1.OrgPolicyOverlay.IPolicyOverlay[];

                    /** OrgPolicyOverlay customConstraints. */
                    public customConstraints: google.cloud.policysimulator.v1.OrgPolicyOverlay.ICustomConstraintOverlay[];

                    /**
                     * Creates a new OrgPolicyOverlay instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrgPolicyOverlay instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IOrgPolicyOverlay): google.cloud.policysimulator.v1.OrgPolicyOverlay;

                    /**
                     * Encodes the specified OrgPolicyOverlay message. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyOverlay.verify|verify} messages.
                     * @param message OrgPolicyOverlay message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IOrgPolicyOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrgPolicyOverlay message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyOverlay.verify|verify} messages.
                     * @param message OrgPolicyOverlay message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IOrgPolicyOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrgPolicyOverlay message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrgPolicyOverlay
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.OrgPolicyOverlay;

                    /**
                     * Decodes an OrgPolicyOverlay message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrgPolicyOverlay
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.OrgPolicyOverlay;

                    /**
                     * Verifies an OrgPolicyOverlay message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrgPolicyOverlay message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrgPolicyOverlay
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.OrgPolicyOverlay;

                    /**
                     * Creates a plain object from an OrgPolicyOverlay message. Also converts values to other types if specified.
                     * @param message OrgPolicyOverlay
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.OrgPolicyOverlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrgPolicyOverlay to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrgPolicyOverlay
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OrgPolicyOverlay {

                    /** Properties of a PolicyOverlay. */
                    interface IPolicyOverlay {

                        /** PolicyOverlay policyParent */
                        policyParent?: (string|null);

                        /** PolicyOverlay policy */
                        policy?: (google.cloud.orgpolicy.v2.IPolicy|null);
                    }

                    /** Represents a PolicyOverlay. */
                    class PolicyOverlay implements IPolicyOverlay {

                        /**
                         * Constructs a new PolicyOverlay.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policysimulator.v1.OrgPolicyOverlay.IPolicyOverlay);

                        /** PolicyOverlay policyParent. */
                        public policyParent: string;

                        /** PolicyOverlay policy. */
                        public policy?: (google.cloud.orgpolicy.v2.IPolicy|null);

                        /**
                         * Creates a new PolicyOverlay instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PolicyOverlay instance
                         */
                        public static create(properties?: google.cloud.policysimulator.v1.OrgPolicyOverlay.IPolicyOverlay): google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay;

                        /**
                         * Encodes the specified PolicyOverlay message. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay.verify|verify} messages.
                         * @param message PolicyOverlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policysimulator.v1.OrgPolicyOverlay.IPolicyOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PolicyOverlay message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay.verify|verify} messages.
                         * @param message PolicyOverlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policysimulator.v1.OrgPolicyOverlay.IPolicyOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PolicyOverlay message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PolicyOverlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay;

                        /**
                         * Decodes a PolicyOverlay message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PolicyOverlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay;

                        /**
                         * Verifies a PolicyOverlay message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PolicyOverlay message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PolicyOverlay
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay;

                        /**
                         * Creates a plain object from a PolicyOverlay message. Also converts values to other types if specified.
                         * @param message PolicyOverlay
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policysimulator.v1.OrgPolicyOverlay.PolicyOverlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PolicyOverlay to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PolicyOverlay
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CustomConstraintOverlay. */
                    interface ICustomConstraintOverlay {

                        /** CustomConstraintOverlay customConstraintParent */
                        customConstraintParent?: (string|null);

                        /** CustomConstraintOverlay customConstraint */
                        customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);
                    }

                    /** Represents a CustomConstraintOverlay. */
                    class CustomConstraintOverlay implements ICustomConstraintOverlay {

                        /**
                         * Constructs a new CustomConstraintOverlay.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policysimulator.v1.OrgPolicyOverlay.ICustomConstraintOverlay);

                        /** CustomConstraintOverlay customConstraintParent. */
                        public customConstraintParent: string;

                        /** CustomConstraintOverlay customConstraint. */
                        public customConstraint?: (google.cloud.orgpolicy.v2.ICustomConstraint|null);

                        /**
                         * Creates a new CustomConstraintOverlay instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomConstraintOverlay instance
                         */
                        public static create(properties?: google.cloud.policysimulator.v1.OrgPolicyOverlay.ICustomConstraintOverlay): google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay;

                        /**
                         * Encodes the specified CustomConstraintOverlay message. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay.verify|verify} messages.
                         * @param message CustomConstraintOverlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policysimulator.v1.OrgPolicyOverlay.ICustomConstraintOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomConstraintOverlay message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay.verify|verify} messages.
                         * @param message CustomConstraintOverlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policysimulator.v1.OrgPolicyOverlay.ICustomConstraintOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomConstraintOverlay message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomConstraintOverlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay;

                        /**
                         * Decodes a CustomConstraintOverlay message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomConstraintOverlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay;

                        /**
                         * Verifies a CustomConstraintOverlay message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomConstraintOverlay message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomConstraintOverlay
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay;

                        /**
                         * Creates a plain object from a CustomConstraintOverlay message. Also converts values to other types if specified.
                         * @param message CustomConstraintOverlay
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policysimulator.v1.OrgPolicyOverlay.CustomConstraintOverlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomConstraintOverlay to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomConstraintOverlay
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a CreateOrgPolicyViolationsPreviewOperationMetadata. */
                interface ICreateOrgPolicyViolationsPreviewOperationMetadata {

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata requestTime */
                    requestTime?: (google.protobuf.ITimestamp|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata state */
                    state?: (google.cloud.policysimulator.v1.PreviewState|keyof typeof google.cloud.policysimulator.v1.PreviewState|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata resourcesFound */
                    resourcesFound?: (number|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata resourcesScanned */
                    resourcesScanned?: (number|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata resourcesPending */
                    resourcesPending?: (number|null);
                }

                /** Represents a CreateOrgPolicyViolationsPreviewOperationMetadata. */
                class CreateOrgPolicyViolationsPreviewOperationMetadata implements ICreateOrgPolicyViolationsPreviewOperationMetadata {

                    /**
                     * Constructs a new CreateOrgPolicyViolationsPreviewOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewOperationMetadata);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata requestTime. */
                    public requestTime?: (google.protobuf.ITimestamp|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata state. */
                    public state: (google.cloud.policysimulator.v1.PreviewState|keyof typeof google.cloud.policysimulator.v1.PreviewState);

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata resourcesFound. */
                    public resourcesFound: number;

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata resourcesScanned. */
                    public resourcesScanned: number;

                    /** CreateOrgPolicyViolationsPreviewOperationMetadata resourcesPending. */
                    public resourcesPending: number;

                    /**
                     * Creates a new CreateOrgPolicyViolationsPreviewOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateOrgPolicyViolationsPreviewOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewOperationMetadata): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata;

                    /**
                     * Encodes the specified CreateOrgPolicyViolationsPreviewOperationMetadata message. Does not implicitly {@link google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata.verify|verify} messages.
                     * @param message CreateOrgPolicyViolationsPreviewOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateOrgPolicyViolationsPreviewOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata.verify|verify} messages.
                     * @param message CreateOrgPolicyViolationsPreviewOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateOrgPolicyViolationsPreviewOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateOrgPolicyViolationsPreviewOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata;

                    /**
                     * Decodes a CreateOrgPolicyViolationsPreviewOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateOrgPolicyViolationsPreviewOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata;

                    /**
                     * Verifies a CreateOrgPolicyViolationsPreviewOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateOrgPolicyViolationsPreviewOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateOrgPolicyViolationsPreviewOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata;

                    /**
                     * Creates a plain object from a CreateOrgPolicyViolationsPreviewOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateOrgPolicyViolationsPreviewOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateOrgPolicyViolationsPreviewOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateOrgPolicyViolationsPreviewOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOrgPolicyViolationsPreviewsRequest. */
                interface IListOrgPolicyViolationsPreviewsRequest {

                    /** ListOrgPolicyViolationsPreviewsRequest parent */
                    parent?: (string|null);

                    /** ListOrgPolicyViolationsPreviewsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOrgPolicyViolationsPreviewsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListOrgPolicyViolationsPreviewsRequest. */
                class ListOrgPolicyViolationsPreviewsRequest implements IListOrgPolicyViolationsPreviewsRequest {

                    /**
                     * Constructs a new ListOrgPolicyViolationsPreviewsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsRequest);

                    /** ListOrgPolicyViolationsPreviewsRequest parent. */
                    public parent: string;

                    /** ListOrgPolicyViolationsPreviewsRequest pageSize. */
                    public pageSize: number;

                    /** ListOrgPolicyViolationsPreviewsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListOrgPolicyViolationsPreviewsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrgPolicyViolationsPreviewsRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsRequest): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsPreviewsRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsPreviewsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsPreviewsRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsPreviewsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrgPolicyViolationsPreviewsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrgPolicyViolationsPreviewsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest;

                    /**
                     * Decodes a ListOrgPolicyViolationsPreviewsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrgPolicyViolationsPreviewsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest;

                    /**
                     * Verifies a ListOrgPolicyViolationsPreviewsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrgPolicyViolationsPreviewsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrgPolicyViolationsPreviewsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest;

                    /**
                     * Creates a plain object from a ListOrgPolicyViolationsPreviewsRequest message. Also converts values to other types if specified.
                     * @param message ListOrgPolicyViolationsPreviewsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrgPolicyViolationsPreviewsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrgPolicyViolationsPreviewsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOrgPolicyViolationsPreviewsResponse. */
                interface IListOrgPolicyViolationsPreviewsResponse {

                    /** ListOrgPolicyViolationsPreviewsResponse orgPolicyViolationsPreviews */
                    orgPolicyViolationsPreviews?: (google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview[]|null);

                    /** ListOrgPolicyViolationsPreviewsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOrgPolicyViolationsPreviewsResponse. */
                class ListOrgPolicyViolationsPreviewsResponse implements IListOrgPolicyViolationsPreviewsResponse {

                    /**
                     * Constructs a new ListOrgPolicyViolationsPreviewsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsResponse);

                    /** ListOrgPolicyViolationsPreviewsResponse orgPolicyViolationsPreviews. */
                    public orgPolicyViolationsPreviews: google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview[];

                    /** ListOrgPolicyViolationsPreviewsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOrgPolicyViolationsPreviewsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrgPolicyViolationsPreviewsResponse instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsResponse): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsPreviewsResponse message. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsPreviewsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsPreviewsResponse message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsPreviewsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsPreviewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrgPolicyViolationsPreviewsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrgPolicyViolationsPreviewsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse;

                    /**
                     * Decodes a ListOrgPolicyViolationsPreviewsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrgPolicyViolationsPreviewsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse;

                    /**
                     * Verifies a ListOrgPolicyViolationsPreviewsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrgPolicyViolationsPreviewsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrgPolicyViolationsPreviewsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse;

                    /**
                     * Creates a plain object from a ListOrgPolicyViolationsPreviewsResponse message. Also converts values to other types if specified.
                     * @param message ListOrgPolicyViolationsPreviewsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ListOrgPolicyViolationsPreviewsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrgPolicyViolationsPreviewsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrgPolicyViolationsPreviewsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetOrgPolicyViolationsPreviewRequest. */
                interface IGetOrgPolicyViolationsPreviewRequest {

                    /** GetOrgPolicyViolationsPreviewRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOrgPolicyViolationsPreviewRequest. */
                class GetOrgPolicyViolationsPreviewRequest implements IGetOrgPolicyViolationsPreviewRequest {

                    /**
                     * Constructs a new GetOrgPolicyViolationsPreviewRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IGetOrgPolicyViolationsPreviewRequest);

                    /** GetOrgPolicyViolationsPreviewRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOrgPolicyViolationsPreviewRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOrgPolicyViolationsPreviewRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IGetOrgPolicyViolationsPreviewRequest): google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest;

                    /**
                     * Encodes the specified GetOrgPolicyViolationsPreviewRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest.verify|verify} messages.
                     * @param message GetOrgPolicyViolationsPreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IGetOrgPolicyViolationsPreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOrgPolicyViolationsPreviewRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest.verify|verify} messages.
                     * @param message GetOrgPolicyViolationsPreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IGetOrgPolicyViolationsPreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOrgPolicyViolationsPreviewRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOrgPolicyViolationsPreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest;

                    /**
                     * Decodes a GetOrgPolicyViolationsPreviewRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOrgPolicyViolationsPreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest;

                    /**
                     * Verifies a GetOrgPolicyViolationsPreviewRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOrgPolicyViolationsPreviewRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOrgPolicyViolationsPreviewRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest;

                    /**
                     * Creates a plain object from a GetOrgPolicyViolationsPreviewRequest message. Also converts values to other types if specified.
                     * @param message GetOrgPolicyViolationsPreviewRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.GetOrgPolicyViolationsPreviewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOrgPolicyViolationsPreviewRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetOrgPolicyViolationsPreviewRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateOrgPolicyViolationsPreviewRequest. */
                interface ICreateOrgPolicyViolationsPreviewRequest {

                    /** CreateOrgPolicyViolationsPreviewRequest parent */
                    parent?: (string|null);

                    /** CreateOrgPolicyViolationsPreviewRequest orgPolicyViolationsPreview */
                    orgPolicyViolationsPreview?: (google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview|null);

                    /** CreateOrgPolicyViolationsPreviewRequest orgPolicyViolationsPreviewId */
                    orgPolicyViolationsPreviewId?: (string|null);
                }

                /** Represents a CreateOrgPolicyViolationsPreviewRequest. */
                class CreateOrgPolicyViolationsPreviewRequest implements ICreateOrgPolicyViolationsPreviewRequest {

                    /**
                     * Constructs a new CreateOrgPolicyViolationsPreviewRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewRequest);

                    /** CreateOrgPolicyViolationsPreviewRequest parent. */
                    public parent: string;

                    /** CreateOrgPolicyViolationsPreviewRequest orgPolicyViolationsPreview. */
                    public orgPolicyViolationsPreview?: (google.cloud.policysimulator.v1.IOrgPolicyViolationsPreview|null);

                    /** CreateOrgPolicyViolationsPreviewRequest orgPolicyViolationsPreviewId. */
                    public orgPolicyViolationsPreviewId: string;

                    /**
                     * Creates a new CreateOrgPolicyViolationsPreviewRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateOrgPolicyViolationsPreviewRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewRequest): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest;

                    /**
                     * Encodes the specified CreateOrgPolicyViolationsPreviewRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest.verify|verify} messages.
                     * @param message CreateOrgPolicyViolationsPreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateOrgPolicyViolationsPreviewRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest.verify|verify} messages.
                     * @param message CreateOrgPolicyViolationsPreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.ICreateOrgPolicyViolationsPreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateOrgPolicyViolationsPreviewRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateOrgPolicyViolationsPreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest;

                    /**
                     * Decodes a CreateOrgPolicyViolationsPreviewRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateOrgPolicyViolationsPreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest;

                    /**
                     * Verifies a CreateOrgPolicyViolationsPreviewRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateOrgPolicyViolationsPreviewRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateOrgPolicyViolationsPreviewRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest;

                    /**
                     * Creates a plain object from a CreateOrgPolicyViolationsPreviewRequest message. Also converts values to other types if specified.
                     * @param message CreateOrgPolicyViolationsPreviewRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.CreateOrgPolicyViolationsPreviewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateOrgPolicyViolationsPreviewRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateOrgPolicyViolationsPreviewRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOrgPolicyViolationsRequest. */
                interface IListOrgPolicyViolationsRequest {

                    /** ListOrgPolicyViolationsRequest parent */
                    parent?: (string|null);

                    /** ListOrgPolicyViolationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOrgPolicyViolationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListOrgPolicyViolationsRequest. */
                class ListOrgPolicyViolationsRequest implements IListOrgPolicyViolationsRequest {

                    /**
                     * Constructs a new ListOrgPolicyViolationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsRequest);

                    /** ListOrgPolicyViolationsRequest parent. */
                    public parent: string;

                    /** ListOrgPolicyViolationsRequest pageSize. */
                    public pageSize: number;

                    /** ListOrgPolicyViolationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListOrgPolicyViolationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrgPolicyViolationsRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsRequest): google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrgPolicyViolationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrgPolicyViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest;

                    /**
                     * Decodes a ListOrgPolicyViolationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrgPolicyViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest;

                    /**
                     * Verifies a ListOrgPolicyViolationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrgPolicyViolationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrgPolicyViolationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest;

                    /**
                     * Creates a plain object from a ListOrgPolicyViolationsRequest message. Also converts values to other types if specified.
                     * @param message ListOrgPolicyViolationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ListOrgPolicyViolationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrgPolicyViolationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrgPolicyViolationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOrgPolicyViolationsResponse. */
                interface IListOrgPolicyViolationsResponse {

                    /** ListOrgPolicyViolationsResponse orgPolicyViolations */
                    orgPolicyViolations?: (google.cloud.policysimulator.v1.IOrgPolicyViolation[]|null);

                    /** ListOrgPolicyViolationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOrgPolicyViolationsResponse. */
                class ListOrgPolicyViolationsResponse implements IListOrgPolicyViolationsResponse {

                    /**
                     * Constructs a new ListOrgPolicyViolationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsResponse);

                    /** ListOrgPolicyViolationsResponse orgPolicyViolations. */
                    public orgPolicyViolations: google.cloud.policysimulator.v1.IOrgPolicyViolation[];

                    /** ListOrgPolicyViolationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOrgPolicyViolationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrgPolicyViolationsResponse instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IListOrgPolicyViolationsResponse): google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsResponse message. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrgPolicyViolationsResponse message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse.verify|verify} messages.
                     * @param message ListOrgPolicyViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IListOrgPolicyViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrgPolicyViolationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrgPolicyViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse;

                    /**
                     * Decodes a ListOrgPolicyViolationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrgPolicyViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse;

                    /**
                     * Verifies a ListOrgPolicyViolationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrgPolicyViolationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrgPolicyViolationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse;

                    /**
                     * Creates a plain object from a ListOrgPolicyViolationsResponse message. Also converts values to other types if specified.
                     * @param message ListOrgPolicyViolationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ListOrgPolicyViolationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrgPolicyViolationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrgPolicyViolationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Simulator */
                class Simulator extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Simulator service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Simulator service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Simulator;

                    /**
                     * Calls GetReplay.
                     * @param request GetReplayRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Replay
                     */
                    public getReplay(request: google.cloud.policysimulator.v1.IGetReplayRequest, callback: google.cloud.policysimulator.v1.Simulator.GetReplayCallback): void;

                    /**
                     * Calls GetReplay.
                     * @param request GetReplayRequest message or plain object
                     * @returns Promise
                     */
                    public getReplay(request: google.cloud.policysimulator.v1.IGetReplayRequest): Promise<google.cloud.policysimulator.v1.Replay>;

                    /**
                     * Calls CreateReplay.
                     * @param request CreateReplayRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createReplay(request: google.cloud.policysimulator.v1.ICreateReplayRequest, callback: google.cloud.policysimulator.v1.Simulator.CreateReplayCallback): void;

                    /**
                     * Calls CreateReplay.
                     * @param request CreateReplayRequest message or plain object
                     * @returns Promise
                     */
                    public createReplay(request: google.cloud.policysimulator.v1.ICreateReplayRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListReplayResults.
                     * @param request ListReplayResultsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListReplayResultsResponse
                     */
                    public listReplayResults(request: google.cloud.policysimulator.v1.IListReplayResultsRequest, callback: google.cloud.policysimulator.v1.Simulator.ListReplayResultsCallback): void;

                    /**
                     * Calls ListReplayResults.
                     * @param request ListReplayResultsRequest message or plain object
                     * @returns Promise
                     */
                    public listReplayResults(request: google.cloud.policysimulator.v1.IListReplayResultsRequest): Promise<google.cloud.policysimulator.v1.ListReplayResultsResponse>;
                }

                namespace Simulator {

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.Simulator|getReplay}.
                     * @param error Error, if any
                     * @param [response] Replay
                     */
                    type GetReplayCallback = (error: (Error|null), response?: google.cloud.policysimulator.v1.Replay) => void;

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.Simulator|createReplay}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateReplayCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.policysimulator.v1.Simulator|listReplayResults}.
                     * @param error Error, if any
                     * @param [response] ListReplayResultsResponse
                     */
                    type ListReplayResultsCallback = (error: (Error|null), response?: google.cloud.policysimulator.v1.ListReplayResultsResponse) => void;
                }

                /** Properties of a Replay. */
                interface IReplay {

                    /** Replay name */
                    name?: (string|null);

                    /** Replay state */
                    state?: (google.cloud.policysimulator.v1.Replay.State|keyof typeof google.cloud.policysimulator.v1.Replay.State|null);

                    /** Replay config */
                    config?: (google.cloud.policysimulator.v1.IReplayConfig|null);

                    /** Replay resultsSummary */
                    resultsSummary?: (google.cloud.policysimulator.v1.Replay.IResultsSummary|null);
                }

                /** Represents a Replay. */
                class Replay implements IReplay {

                    /**
                     * Constructs a new Replay.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IReplay);

                    /** Replay name. */
                    public name: string;

                    /** Replay state. */
                    public state: (google.cloud.policysimulator.v1.Replay.State|keyof typeof google.cloud.policysimulator.v1.Replay.State);

                    /** Replay config. */
                    public config?: (google.cloud.policysimulator.v1.IReplayConfig|null);

                    /** Replay resultsSummary. */
                    public resultsSummary?: (google.cloud.policysimulator.v1.Replay.IResultsSummary|null);

                    /**
                     * Creates a new Replay instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Replay instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IReplay): google.cloud.policysimulator.v1.Replay;

                    /**
                     * Encodes the specified Replay message. Does not implicitly {@link google.cloud.policysimulator.v1.Replay.verify|verify} messages.
                     * @param message Replay message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IReplay, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Replay message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.Replay.verify|verify} messages.
                     * @param message Replay message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IReplay, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Replay message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Replay
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.Replay;

                    /**
                     * Decodes a Replay message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Replay
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.Replay;

                    /**
                     * Verifies a Replay message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Replay message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Replay
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.Replay;

                    /**
                     * Creates a plain object from a Replay message. Also converts values to other types if specified.
                     * @param message Replay
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.Replay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Replay to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Replay
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Replay {

                    /** Properties of a ResultsSummary. */
                    interface IResultsSummary {

                        /** ResultsSummary logCount */
                        logCount?: (number|null);

                        /** ResultsSummary unchangedCount */
                        unchangedCount?: (number|null);

                        /** ResultsSummary differenceCount */
                        differenceCount?: (number|null);

                        /** ResultsSummary errorCount */
                        errorCount?: (number|null);

                        /** ResultsSummary oldestDate */
                        oldestDate?: (google.type.IDate|null);

                        /** ResultsSummary newestDate */
                        newestDate?: (google.type.IDate|null);
                    }

                    /** Represents a ResultsSummary. */
                    class ResultsSummary implements IResultsSummary {

                        /**
                         * Constructs a new ResultsSummary.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.policysimulator.v1.Replay.IResultsSummary);

                        /** ResultsSummary logCount. */
                        public logCount: number;

                        /** ResultsSummary unchangedCount. */
                        public unchangedCount: number;

                        /** ResultsSummary differenceCount. */
                        public differenceCount: number;

                        /** ResultsSummary errorCount. */
                        public errorCount: number;

                        /** ResultsSummary oldestDate. */
                        public oldestDate?: (google.type.IDate|null);

                        /** ResultsSummary newestDate. */
                        public newestDate?: (google.type.IDate|null);

                        /**
                         * Creates a new ResultsSummary instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResultsSummary instance
                         */
                        public static create(properties?: google.cloud.policysimulator.v1.Replay.IResultsSummary): google.cloud.policysimulator.v1.Replay.ResultsSummary;

                        /**
                         * Encodes the specified ResultsSummary message. Does not implicitly {@link google.cloud.policysimulator.v1.Replay.ResultsSummary.verify|verify} messages.
                         * @param message ResultsSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.policysimulator.v1.Replay.IResultsSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResultsSummary message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.Replay.ResultsSummary.verify|verify} messages.
                         * @param message ResultsSummary message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.policysimulator.v1.Replay.IResultsSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResultsSummary message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResultsSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.Replay.ResultsSummary;

                        /**
                         * Decodes a ResultsSummary message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResultsSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.Replay.ResultsSummary;

                        /**
                         * Verifies a ResultsSummary message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResultsSummary message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResultsSummary
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.Replay.ResultsSummary;

                        /**
                         * Creates a plain object from a ResultsSummary message. Also converts values to other types if specified.
                         * @param message ResultsSummary
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.policysimulator.v1.Replay.ResultsSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResultsSummary to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResultsSummary
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        RUNNING = 2,
                        SUCCEEDED = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a ReplayResult. */
                interface IReplayResult {

                    /** ReplayResult diff */
                    diff?: (google.cloud.policysimulator.v1.IReplayDiff|null);

                    /** ReplayResult error */
                    error?: (google.rpc.IStatus|null);

                    /** ReplayResult name */
                    name?: (string|null);

                    /** ReplayResult parent */
                    parent?: (string|null);

                    /** ReplayResult accessTuple */
                    accessTuple?: (google.cloud.policysimulator.v1.IAccessTuple|null);

                    /** ReplayResult lastSeenDate */
                    lastSeenDate?: (google.type.IDate|null);
                }

                /** Represents a ReplayResult. */
                class ReplayResult implements IReplayResult {

                    /**
                     * Constructs a new ReplayResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IReplayResult);

                    /** ReplayResult diff. */
                    public diff?: (google.cloud.policysimulator.v1.IReplayDiff|null);

                    /** ReplayResult error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ReplayResult name. */
                    public name: string;

                    /** ReplayResult parent. */
                    public parent: string;

                    /** ReplayResult accessTuple. */
                    public accessTuple?: (google.cloud.policysimulator.v1.IAccessTuple|null);

                    /** ReplayResult lastSeenDate. */
                    public lastSeenDate?: (google.type.IDate|null);

                    /** ReplayResult result. */
                    public result?: ("diff"|"error");

                    /**
                     * Creates a new ReplayResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplayResult instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IReplayResult): google.cloud.policysimulator.v1.ReplayResult;

                    /**
                     * Encodes the specified ReplayResult message. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayResult.verify|verify} messages.
                     * @param message ReplayResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IReplayResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplayResult message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayResult.verify|verify} messages.
                     * @param message ReplayResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IReplayResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplayResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplayResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ReplayResult;

                    /**
                     * Decodes a ReplayResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplayResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ReplayResult;

                    /**
                     * Verifies a ReplayResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplayResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplayResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ReplayResult;

                    /**
                     * Creates a plain object from a ReplayResult message. Also converts values to other types if specified.
                     * @param message ReplayResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ReplayResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplayResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplayResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateReplayRequest. */
                interface ICreateReplayRequest {

                    /** CreateReplayRequest parent */
                    parent?: (string|null);

                    /** CreateReplayRequest replay */
                    replay?: (google.cloud.policysimulator.v1.IReplay|null);
                }

                /** Represents a CreateReplayRequest. */
                class CreateReplayRequest implements ICreateReplayRequest {

                    /**
                     * Constructs a new CreateReplayRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.ICreateReplayRequest);

                    /** CreateReplayRequest parent. */
                    public parent: string;

                    /** CreateReplayRequest replay. */
                    public replay?: (google.cloud.policysimulator.v1.IReplay|null);

                    /**
                     * Creates a new CreateReplayRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateReplayRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.ICreateReplayRequest): google.cloud.policysimulator.v1.CreateReplayRequest;

                    /**
                     * Encodes the specified CreateReplayRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.CreateReplayRequest.verify|verify} messages.
                     * @param message CreateReplayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.ICreateReplayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateReplayRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.CreateReplayRequest.verify|verify} messages.
                     * @param message CreateReplayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.ICreateReplayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateReplayRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateReplayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.CreateReplayRequest;

                    /**
                     * Decodes a CreateReplayRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateReplayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.CreateReplayRequest;

                    /**
                     * Verifies a CreateReplayRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateReplayRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateReplayRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.CreateReplayRequest;

                    /**
                     * Creates a plain object from a CreateReplayRequest message. Also converts values to other types if specified.
                     * @param message CreateReplayRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.CreateReplayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateReplayRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateReplayRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReplayOperationMetadata. */
                interface IReplayOperationMetadata {

                    /** ReplayOperationMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ReplayOperationMetadata. */
                class ReplayOperationMetadata implements IReplayOperationMetadata {

                    /**
                     * Constructs a new ReplayOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IReplayOperationMetadata);

                    /** ReplayOperationMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ReplayOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplayOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IReplayOperationMetadata): google.cloud.policysimulator.v1.ReplayOperationMetadata;

                    /**
                     * Encodes the specified ReplayOperationMetadata message. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayOperationMetadata.verify|verify} messages.
                     * @param message ReplayOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IReplayOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplayOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayOperationMetadata.verify|verify} messages.
                     * @param message ReplayOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IReplayOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplayOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplayOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ReplayOperationMetadata;

                    /**
                     * Decodes a ReplayOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplayOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ReplayOperationMetadata;

                    /**
                     * Verifies a ReplayOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplayOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplayOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ReplayOperationMetadata;

                    /**
                     * Creates a plain object from a ReplayOperationMetadata message. Also converts values to other types if specified.
                     * @param message ReplayOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ReplayOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplayOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplayOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetReplayRequest. */
                interface IGetReplayRequest {

                    /** GetReplayRequest name */
                    name?: (string|null);
                }

                /** Represents a GetReplayRequest. */
                class GetReplayRequest implements IGetReplayRequest {

                    /**
                     * Constructs a new GetReplayRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IGetReplayRequest);

                    /** GetReplayRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetReplayRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetReplayRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IGetReplayRequest): google.cloud.policysimulator.v1.GetReplayRequest;

                    /**
                     * Encodes the specified GetReplayRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.GetReplayRequest.verify|verify} messages.
                     * @param message GetReplayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IGetReplayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetReplayRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.GetReplayRequest.verify|verify} messages.
                     * @param message GetReplayRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IGetReplayRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetReplayRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetReplayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.GetReplayRequest;

                    /**
                     * Decodes a GetReplayRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetReplayRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.GetReplayRequest;

                    /**
                     * Verifies a GetReplayRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetReplayRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetReplayRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.GetReplayRequest;

                    /**
                     * Creates a plain object from a GetReplayRequest message. Also converts values to other types if specified.
                     * @param message GetReplayRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.GetReplayRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetReplayRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetReplayRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReplayResultsRequest. */
                interface IListReplayResultsRequest {

                    /** ListReplayResultsRequest parent */
                    parent?: (string|null);

                    /** ListReplayResultsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListReplayResultsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListReplayResultsRequest. */
                class ListReplayResultsRequest implements IListReplayResultsRequest {

                    /**
                     * Constructs a new ListReplayResultsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IListReplayResultsRequest);

                    /** ListReplayResultsRequest parent. */
                    public parent: string;

                    /** ListReplayResultsRequest pageSize. */
                    public pageSize: number;

                    /** ListReplayResultsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListReplayResultsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReplayResultsRequest instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IListReplayResultsRequest): google.cloud.policysimulator.v1.ListReplayResultsRequest;

                    /**
                     * Encodes the specified ListReplayResultsRequest message. Does not implicitly {@link google.cloud.policysimulator.v1.ListReplayResultsRequest.verify|verify} messages.
                     * @param message ListReplayResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IListReplayResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReplayResultsRequest message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ListReplayResultsRequest.verify|verify} messages.
                     * @param message ListReplayResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IListReplayResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReplayResultsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReplayResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ListReplayResultsRequest;

                    /**
                     * Decodes a ListReplayResultsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReplayResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ListReplayResultsRequest;

                    /**
                     * Verifies a ListReplayResultsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReplayResultsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReplayResultsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ListReplayResultsRequest;

                    /**
                     * Creates a plain object from a ListReplayResultsRequest message. Also converts values to other types if specified.
                     * @param message ListReplayResultsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ListReplayResultsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReplayResultsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReplayResultsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReplayResultsResponse. */
                interface IListReplayResultsResponse {

                    /** ListReplayResultsResponse replayResults */
                    replayResults?: (google.cloud.policysimulator.v1.IReplayResult[]|null);

                    /** ListReplayResultsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListReplayResultsResponse. */
                class ListReplayResultsResponse implements IListReplayResultsResponse {

                    /**
                     * Constructs a new ListReplayResultsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IListReplayResultsResponse);

                    /** ListReplayResultsResponse replayResults. */
                    public replayResults: google.cloud.policysimulator.v1.IReplayResult[];

                    /** ListReplayResultsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListReplayResultsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReplayResultsResponse instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IListReplayResultsResponse): google.cloud.policysimulator.v1.ListReplayResultsResponse;

                    /**
                     * Encodes the specified ListReplayResultsResponse message. Does not implicitly {@link google.cloud.policysimulator.v1.ListReplayResultsResponse.verify|verify} messages.
                     * @param message ListReplayResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IListReplayResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReplayResultsResponse message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ListReplayResultsResponse.verify|verify} messages.
                     * @param message ListReplayResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IListReplayResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReplayResultsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReplayResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ListReplayResultsResponse;

                    /**
                     * Decodes a ListReplayResultsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReplayResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ListReplayResultsResponse;

                    /**
                     * Verifies a ListReplayResultsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReplayResultsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReplayResultsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ListReplayResultsResponse;

                    /**
                     * Creates a plain object from a ListReplayResultsResponse message. Also converts values to other types if specified.
                     * @param message ListReplayResultsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ListReplayResultsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReplayResultsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReplayResultsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReplayConfig. */
                interface IReplayConfig {

                    /** ReplayConfig policyOverlay */
                    policyOverlay?: ({ [k: string]: google.iam.v1.IPolicy }|null);

                    /** ReplayConfig logSource */
                    logSource?: (google.cloud.policysimulator.v1.ReplayConfig.LogSource|keyof typeof google.cloud.policysimulator.v1.ReplayConfig.LogSource|null);
                }

                /** Represents a ReplayConfig. */
                class ReplayConfig implements IReplayConfig {

                    /**
                     * Constructs a new ReplayConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IReplayConfig);

                    /** ReplayConfig policyOverlay. */
                    public policyOverlay: { [k: string]: google.iam.v1.IPolicy };

                    /** ReplayConfig logSource. */
                    public logSource: (google.cloud.policysimulator.v1.ReplayConfig.LogSource|keyof typeof google.cloud.policysimulator.v1.ReplayConfig.LogSource);

                    /**
                     * Creates a new ReplayConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplayConfig instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IReplayConfig): google.cloud.policysimulator.v1.ReplayConfig;

                    /**
                     * Encodes the specified ReplayConfig message. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayConfig.verify|verify} messages.
                     * @param message ReplayConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IReplayConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplayConfig message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayConfig.verify|verify} messages.
                     * @param message ReplayConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IReplayConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplayConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplayConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ReplayConfig;

                    /**
                     * Decodes a ReplayConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplayConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ReplayConfig;

                    /**
                     * Verifies a ReplayConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplayConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplayConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ReplayConfig;

                    /**
                     * Creates a plain object from a ReplayConfig message. Also converts values to other types if specified.
                     * @param message ReplayConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ReplayConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplayConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplayConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ReplayConfig {

                    /** LogSource enum. */
                    enum LogSource {
                        LOG_SOURCE_UNSPECIFIED = 0,
                        RECENT_ACCESSES = 1
                    }
                }

                /** Properties of a ReplayDiff. */
                interface IReplayDiff {

                    /** ReplayDiff accessDiff */
                    accessDiff?: (google.cloud.policysimulator.v1.IAccessStateDiff|null);
                }

                /** Represents a ReplayDiff. */
                class ReplayDiff implements IReplayDiff {

                    /**
                     * Constructs a new ReplayDiff.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IReplayDiff);

                    /** ReplayDiff accessDiff. */
                    public accessDiff?: (google.cloud.policysimulator.v1.IAccessStateDiff|null);

                    /**
                     * Creates a new ReplayDiff instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplayDiff instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IReplayDiff): google.cloud.policysimulator.v1.ReplayDiff;

                    /**
                     * Encodes the specified ReplayDiff message. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayDiff.verify|verify} messages.
                     * @param message ReplayDiff message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IReplayDiff, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplayDiff message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ReplayDiff.verify|verify} messages.
                     * @param message ReplayDiff message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IReplayDiff, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplayDiff message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplayDiff
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ReplayDiff;

                    /**
                     * Decodes a ReplayDiff message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplayDiff
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ReplayDiff;

                    /**
                     * Verifies a ReplayDiff message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplayDiff message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplayDiff
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ReplayDiff;

                    /**
                     * Creates a plain object from a ReplayDiff message. Also converts values to other types if specified.
                     * @param message ReplayDiff
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ReplayDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplayDiff to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplayDiff
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessStateDiff. */
                interface IAccessStateDiff {

                    /** AccessStateDiff baseline */
                    baseline?: (google.cloud.policysimulator.v1.IExplainedAccess|null);

                    /** AccessStateDiff simulated */
                    simulated?: (google.cloud.policysimulator.v1.IExplainedAccess|null);

                    /** AccessStateDiff accessChange */
                    accessChange?: (google.cloud.policysimulator.v1.AccessStateDiff.AccessChangeType|keyof typeof google.cloud.policysimulator.v1.AccessStateDiff.AccessChangeType|null);
                }

                /** Represents an AccessStateDiff. */
                class AccessStateDiff implements IAccessStateDiff {

                    /**
                     * Constructs a new AccessStateDiff.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IAccessStateDiff);

                    /** AccessStateDiff baseline. */
                    public baseline?: (google.cloud.policysimulator.v1.IExplainedAccess|null);

                    /** AccessStateDiff simulated. */
                    public simulated?: (google.cloud.policysimulator.v1.IExplainedAccess|null);

                    /** AccessStateDiff accessChange. */
                    public accessChange: (google.cloud.policysimulator.v1.AccessStateDiff.AccessChangeType|keyof typeof google.cloud.policysimulator.v1.AccessStateDiff.AccessChangeType);

                    /**
                     * Creates a new AccessStateDiff instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessStateDiff instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IAccessStateDiff): google.cloud.policysimulator.v1.AccessStateDiff;

                    /**
                     * Encodes the specified AccessStateDiff message. Does not implicitly {@link google.cloud.policysimulator.v1.AccessStateDiff.verify|verify} messages.
                     * @param message AccessStateDiff message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IAccessStateDiff, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessStateDiff message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.AccessStateDiff.verify|verify} messages.
                     * @param message AccessStateDiff message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IAccessStateDiff, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessStateDiff message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessStateDiff
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.AccessStateDiff;

                    /**
                     * Decodes an AccessStateDiff message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessStateDiff
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.AccessStateDiff;

                    /**
                     * Verifies an AccessStateDiff message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessStateDiff message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessStateDiff
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.AccessStateDiff;

                    /**
                     * Creates a plain object from an AccessStateDiff message. Also converts values to other types if specified.
                     * @param message AccessStateDiff
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.AccessStateDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessStateDiff to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessStateDiff
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccessStateDiff {

                    /** AccessChangeType enum. */
                    enum AccessChangeType {
                        ACCESS_CHANGE_TYPE_UNSPECIFIED = 0,
                        NO_CHANGE = 1,
                        UNKNOWN_CHANGE = 2,
                        ACCESS_REVOKED = 3,
                        ACCESS_GAINED = 4,
                        ACCESS_MAYBE_REVOKED = 5,
                        ACCESS_MAYBE_GAINED = 6
                    }
                }

                /** Properties of an ExplainedAccess. */
                interface IExplainedAccess {

                    /** ExplainedAccess accessState */
                    accessState?: (google.cloud.policysimulator.v1.AccessState|keyof typeof google.cloud.policysimulator.v1.AccessState|null);

                    /** ExplainedAccess policies */
                    policies?: (google.cloud.policysimulator.v1.IExplainedPolicy[]|null);

                    /** ExplainedAccess errors */
                    errors?: (google.rpc.IStatus[]|null);
                }

                /** Represents an ExplainedAccess. */
                class ExplainedAccess implements IExplainedAccess {

                    /**
                     * Constructs a new ExplainedAccess.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.policysimulator.v1.IExplainedAccess);

                    /** ExplainedAccess accessState. */
                    public accessState: (google.cloud.policysimulator.v1.AccessState|keyof typeof google.cloud.policysimulator.v1.AccessState);

                    /** ExplainedAccess policies. */
                    public policies: google.cloud.policysimulator.v1.IExplainedPolicy[];

                    /** ExplainedAccess errors. */
                    public errors: google.rpc.IStatus[];

                    /**
                     * Creates a new ExplainedAccess instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplainedAccess instance
                     */
                    public static create(properties?: google.cloud.policysimulator.v1.IExplainedAccess): google.cloud.policysimulator.v1.ExplainedAccess;

                    /**
                     * Encodes the specified ExplainedAccess message. Does not implicitly {@link google.cloud.policysimulator.v1.ExplainedAccess.verify|verify} messages.
                     * @param message ExplainedAccess message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.policysimulator.v1.IExplainedAccess, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplainedAccess message, length delimited. Does not implicitly {@link google.cloud.policysimulator.v1.ExplainedAccess.verify|verify} messages.
                     * @param message ExplainedAccess message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.policysimulator.v1.IExplainedAccess, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplainedAccess message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplainedAccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.policysimulator.v1.ExplainedAccess;

                    /**
                     * Decodes an ExplainedAccess message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplainedAccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.policysimulator.v1.ExplainedAccess;

                    /**
                     * Verifies an ExplainedAccess message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplainedAccess message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplainedAccess
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.policysimulator.v1.ExplainedAccess;

                    /**
                     * Creates a plain object from an ExplainedAccess message. Also converts values to other types if specified.
                     * @param message ExplainedAccess
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.policysimulator.v1.ExplainedAccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplainedAccess to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplainedAccess
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
