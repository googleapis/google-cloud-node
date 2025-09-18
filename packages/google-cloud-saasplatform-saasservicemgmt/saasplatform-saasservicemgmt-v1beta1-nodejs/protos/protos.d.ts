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

        /** Namespace saasplatform. */
        namespace saasplatform {

            /** Namespace saasservicemgmt. */
            namespace saasservicemgmt {

                /** Namespace v1beta1. */
                namespace v1beta1 {

                    /** UnitOperationErrorCategory enum. */
                    enum UnitOperationErrorCategory {
                        UNIT_OPERATION_ERROR_CATEGORY_UNSPECIFIED = 0,
                        NOT_APPLICABLE = 1,
                        FATAL = 2,
                        RETRIABLE = 3,
                        IGNORABLE = 4,
                        STANDARD = 5
                    }

                    /** Properties of a Blueprint. */
                    interface IBlueprint {

                        /** Blueprint package */
                        "package"?: (string|null);

                        /** Blueprint engine */
                        engine?: (string|null);

                        /** Blueprint version */
                        version?: (string|null);
                    }

                    /** Represents a Blueprint. */
                    class Blueprint implements IBlueprint {

                        /**
                         * Constructs a new Blueprint.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IBlueprint);

                        /** Blueprint package. */
                        public package: string;

                        /** Blueprint engine. */
                        public engine: string;

                        /** Blueprint version. */
                        public version: string;

                        /**
                         * Creates a new Blueprint instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Blueprint instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IBlueprint): google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint;

                        /**
                         * Encodes the specified Blueprint message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint.verify|verify} messages.
                         * @param message Blueprint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Blueprint message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint.verify|verify} messages.
                         * @param message Blueprint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Blueprint message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Blueprint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint;

                        /**
                         * Decodes a Blueprint message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Blueprint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint;

                        /**
                         * Verifies a Blueprint message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Blueprint message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Blueprint
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint;

                        /**
                         * Creates a plain object from a Blueprint message. Also converts values to other types if specified.
                         * @param message Blueprint
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Blueprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Blueprint to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Blueprint
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UnitVariable. */
                    interface IUnitVariable {

                        /** UnitVariable variable */
                        variable?: (string|null);

                        /** UnitVariable type */
                        type?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable.Type|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable.Type|null);

                        /** UnitVariable value */
                        value?: (string|null);
                    }

                    /** Represents an UnitVariable. */
                    class UnitVariable implements IUnitVariable {

                        /**
                         * Constructs a new UnitVariable.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable);

                        /** UnitVariable variable. */
                        public variable: string;

                        /** UnitVariable type. */
                        public type: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable.Type|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable.Type);

                        /** UnitVariable value. */
                        public value: string;

                        /**
                         * Creates a new UnitVariable instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitVariable instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable;

                        /**
                         * Encodes the specified UnitVariable message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable.verify|verify} messages.
                         * @param message UnitVariable message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitVariable message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable.verify|verify} messages.
                         * @param message UnitVariable message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitVariable message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitVariable
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable;

                        /**
                         * Decodes an UnitVariable message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitVariable
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable;

                        /**
                         * Verifies an UnitVariable message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitVariable message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitVariable
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable;

                        /**
                         * Creates a plain object from an UnitVariable message. Also converts values to other types if specified.
                         * @param message UnitVariable
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitVariable to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitVariable
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace UnitVariable {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            STRING = 1,
                            INT = 2,
                            BOOL = 3
                        }
                    }

                    /** Properties of an UnitCondition. */
                    interface IUnitCondition {

                        /** UnitCondition status */
                        status?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Status|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Status|null);

                        /** UnitCondition type */
                        type?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Type|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Type|null);

                        /** UnitCondition lastTransitionTime */
                        lastTransitionTime?: (google.protobuf.ITimestamp|null);

                        /** UnitCondition message */
                        message?: (string|null);

                        /** UnitCondition reason */
                        reason?: (string|null);
                    }

                    /** Represents an UnitCondition. */
                    class UnitCondition implements IUnitCondition {

                        /**
                         * Constructs a new UnitCondition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitCondition);

                        /** UnitCondition status. */
                        public status: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Status|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Status);

                        /** UnitCondition type. */
                        public type: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Type|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.Type);

                        /** UnitCondition lastTransitionTime. */
                        public lastTransitionTime?: (google.protobuf.ITimestamp|null);

                        /** UnitCondition message. */
                        public message: string;

                        /** UnitCondition reason. */
                        public reason: string;

                        /**
                         * Creates a new UnitCondition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitCondition instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitCondition): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition;

                        /**
                         * Encodes the specified UnitCondition message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.verify|verify} messages.
                         * @param message UnitCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitCondition message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition.verify|verify} messages.
                         * @param message UnitCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitCondition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition;

                        /**
                         * Decodes an UnitCondition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition;

                        /**
                         * Verifies an UnitCondition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitCondition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitCondition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition;

                        /**
                         * Creates a plain object from an UnitCondition message. Also converts values to other types if specified.
                         * @param message UnitCondition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitCondition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitCondition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace UnitCondition {

                        /** Status enum. */
                        enum Status {
                            STATUS_UNSPECIFIED = 0,
                            STATUS_UNKNOWN = 1,
                            STATUS_TRUE = 2,
                            STATUS_FALSE = 3
                        }

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            TYPE_READY = 1,
                            TYPE_UPDATING = 2,
                            TYPE_PROVISIONED = 3,
                            TYPE_OPERATION_ERROR = 4
                        }
                    }

                    /** Properties of an UnitOperationCondition. */
                    interface IUnitOperationCondition {

                        /** UnitOperationCondition status */
                        status?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Status|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Status|null);

                        /** UnitOperationCondition type */
                        type?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Type|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Type|null);

                        /** UnitOperationCondition lastTransitionTime */
                        lastTransitionTime?: (google.protobuf.ITimestamp|null);

                        /** UnitOperationCondition message */
                        message?: (string|null);

                        /** UnitOperationCondition reason */
                        reason?: (string|null);
                    }

                    /** Represents an UnitOperationCondition. */
                    class UnitOperationCondition implements IUnitOperationCondition {

                        /**
                         * Constructs a new UnitOperationCondition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperationCondition);

                        /** UnitOperationCondition status. */
                        public status: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Status|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Status);

                        /** UnitOperationCondition type. */
                        public type: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Type|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.Type);

                        /** UnitOperationCondition lastTransitionTime. */
                        public lastTransitionTime?: (google.protobuf.ITimestamp|null);

                        /** UnitOperationCondition message. */
                        public message: string;

                        /** UnitOperationCondition reason. */
                        public reason: string;

                        /**
                         * Creates a new UnitOperationCondition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitOperationCondition instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperationCondition): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition;

                        /**
                         * Encodes the specified UnitOperationCondition message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.verify|verify} messages.
                         * @param message UnitOperationCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperationCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitOperationCondition message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition.verify|verify} messages.
                         * @param message UnitOperationCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperationCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitOperationCondition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitOperationCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition;

                        /**
                         * Decodes an UnitOperationCondition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitOperationCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition;

                        /**
                         * Verifies an UnitOperationCondition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitOperationCondition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitOperationCondition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition;

                        /**
                         * Creates a plain object from an UnitOperationCondition message. Also converts values to other types if specified.
                         * @param message UnitOperationCondition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitOperationCondition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitOperationCondition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace UnitOperationCondition {

                        /** Status enum. */
                        enum Status {
                            STATUS_UNSPECIFIED = 0,
                            STATUS_UNKNOWN = 1,
                            STATUS_TRUE = 2,
                            STATUS_FALSE = 3
                        }

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            TYPE_SCHEDULED = 2,
                            TYPE_RUNNING = 3,
                            TYPE_SUCCEEDED = 4,
                            TYPE_CANCELLED = 5
                        }
                    }

                    /** Properties of an Aggregate. */
                    interface IAggregate {

                        /** Aggregate group */
                        group?: (string|null);

                        /** Aggregate count */
                        count?: (number|null);
                    }

                    /** Represents an Aggregate. */
                    class Aggregate implements IAggregate {

                        /**
                         * Constructs a new Aggregate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IAggregate);

                        /** Aggregate group. */
                        public group: string;

                        /** Aggregate count. */
                        public count: number;

                        /**
                         * Creates a new Aggregate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Aggregate instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IAggregate): google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate;

                        /**
                         * Encodes the specified Aggregate message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate.verify|verify} messages.
                         * @param message Aggregate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IAggregate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Aggregate message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate.verify|verify} messages.
                         * @param message Aggregate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IAggregate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Aggregate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Aggregate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate;

                        /**
                         * Decodes an Aggregate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Aggregate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate;

                        /**
                         * Verifies an Aggregate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Aggregate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Aggregate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate;

                        /**
                         * Creates a plain object from an Aggregate message. Also converts values to other types if specified.
                         * @param message Aggregate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Aggregate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Aggregate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Aggregate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Location. */
                    interface ILocation {

                        /** Location name */
                        name?: (string|null);
                    }

                    /** Represents a Location. */
                    class Location implements ILocation {

                        /**
                         * Constructs a new Location.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ILocation);

                        /** Location name. */
                        public name: string;

                        /**
                         * Creates a new Location instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Location instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ILocation): google.cloud.saasplatform.saasservicemgmt.v1beta1.Location;

                        /**
                         * Encodes the specified Location message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Location.verify|verify} messages.
                         * @param message Location message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Location message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Location.verify|verify} messages.
                         * @param message Location message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Location message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Location
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Location;

                        /**
                         * Decodes a Location message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Location
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Location;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Location;

                        /**
                         * Creates a plain object from a Location message. Also converts values to other types if specified.
                         * @param message Location
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a Saas. */
                    interface ISaas {

                        /** Saas name */
                        name?: (string|null);

                        /** Saas locations */
                        locations?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ILocation[]|null);

                        /** Saas labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Saas annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** Saas uid */
                        uid?: (string|null);

                        /** Saas etag */
                        etag?: (string|null);

                        /** Saas createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Saas updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Saas. */
                    class Saas implements ISaas {

                        /**
                         * Constructs a new Saas.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas);

                        /** Saas name. */
                        public name: string;

                        /** Saas locations. */
                        public locations: google.cloud.saasplatform.saasservicemgmt.v1beta1.ILocation[];

                        /** Saas labels. */
                        public labels: { [k: string]: string };

                        /** Saas annotations. */
                        public annotations: { [k: string]: string };

                        /** Saas uid. */
                        public uid: string;

                        /** Saas etag. */
                        public etag: string;

                        /** Saas createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Saas updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Saas instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Saas instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas): google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas;

                        /**
                         * Encodes the specified Saas message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas.verify|verify} messages.
                         * @param message Saas message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Saas message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas.verify|verify} messages.
                         * @param message Saas message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Saas message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Saas
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas;

                        /**
                         * Decodes a Saas message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Saas
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas;

                        /**
                         * Verifies a Saas message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Saas message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Saas
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas;

                        /**
                         * Creates a plain object from a Saas message. Also converts values to other types if specified.
                         * @param message Saas
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Saas to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Saas
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Tenant. */
                    interface ITenant {

                        /** Tenant name */
                        name?: (string|null);

                        /** Tenant consumerResource */
                        consumerResource?: (string|null);

                        /** Tenant saas */
                        saas?: (string|null);

                        /** Tenant labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Tenant annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** Tenant uid */
                        uid?: (string|null);

                        /** Tenant etag */
                        etag?: (string|null);

                        /** Tenant createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Tenant updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Tenant. */
                    class Tenant implements ITenant {

                        /**
                         * Constructs a new Tenant.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant);

                        /** Tenant name. */
                        public name: string;

                        /** Tenant consumerResource. */
                        public consumerResource: string;

                        /** Tenant saas. */
                        public saas: string;

                        /** Tenant labels. */
                        public labels: { [k: string]: string };

                        /** Tenant annotations. */
                        public annotations: { [k: string]: string };

                        /** Tenant uid. */
                        public uid: string;

                        /** Tenant etag. */
                        public etag: string;

                        /** Tenant createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Tenant updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Tenant instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tenant instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant): google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant;

                        /**
                         * Encodes the specified Tenant message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant.verify|verify} messages.
                         * @param message Tenant message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tenant message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant.verify|verify} messages.
                         * @param message Tenant message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tenant message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tenant
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant;

                        /**
                         * Decodes a Tenant message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tenant
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant;

                        /**
                         * Verifies a Tenant message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tenant message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tenant
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant;

                        /**
                         * Creates a plain object from a Tenant message. Also converts values to other types if specified.
                         * @param message Tenant
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tenant to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Tenant
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UnitKind. */
                    interface IUnitKind {

                        /** UnitKind name */
                        name?: (string|null);

                        /** UnitKind defaultRelease */
                        defaultRelease?: (string|null);

                        /** UnitKind dependencies */
                        dependencies?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IDependency[]|null);

                        /** UnitKind inputVariableMappings */
                        inputVariableMappings?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping[]|null);

                        /** UnitKind outputVariableMappings */
                        outputVariableMappings?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping[]|null);

                        /** UnitKind saas */
                        saas?: (string|null);

                        /** UnitKind labels */
                        labels?: ({ [k: string]: string }|null);

                        /** UnitKind annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** UnitKind uid */
                        uid?: (string|null);

                        /** UnitKind etag */
                        etag?: (string|null);

                        /** UnitKind createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** UnitKind updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents an UnitKind. */
                    class UnitKind implements IUnitKind {

                        /**
                         * Constructs a new UnitKind.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind);

                        /** UnitKind name. */
                        public name: string;

                        /** UnitKind defaultRelease. */
                        public defaultRelease: string;

                        /** UnitKind dependencies. */
                        public dependencies: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDependency[];

                        /** UnitKind inputVariableMappings. */
                        public inputVariableMappings: google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping[];

                        /** UnitKind outputVariableMappings. */
                        public outputVariableMappings: google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping[];

                        /** UnitKind saas. */
                        public saas: string;

                        /** UnitKind labels. */
                        public labels: { [k: string]: string };

                        /** UnitKind annotations. */
                        public annotations: { [k: string]: string };

                        /** UnitKind uid. */
                        public uid: string;

                        /** UnitKind etag. */
                        public etag: string;

                        /** UnitKind createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** UnitKind updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new UnitKind instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitKind instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind;

                        /**
                         * Encodes the specified UnitKind message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind.verify|verify} messages.
                         * @param message UnitKind message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitKind message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind.verify|verify} messages.
                         * @param message UnitKind message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitKind message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitKind
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind;

                        /**
                         * Decodes an UnitKind message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitKind
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind;

                        /**
                         * Verifies an UnitKind message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitKind message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitKind
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind;

                        /**
                         * Creates a plain object from an UnitKind message. Also converts values to other types if specified.
                         * @param message UnitKind
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitKind to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitKind
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Unit. */
                    interface IUnit {

                        /** Unit name */
                        name?: (string|null);

                        /** Unit unitKind */
                        unitKind?: (string|null);

                        /** Unit release */
                        release?: (string|null);

                        /** Unit tenant */
                        tenant?: (string|null);

                        /** Unit ongoingOperations */
                        ongoingOperations?: (string[]|null);

                        /** Unit pendingOperations */
                        pendingOperations?: (string[]|null);

                        /** Unit scheduledOperations */
                        scheduledOperations?: (string[]|null);

                        /** Unit dependents */
                        dependents?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency[]|null);

                        /** Unit dependencies */
                        dependencies?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency[]|null);

                        /** Unit inputVariables */
                        inputVariables?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);

                        /** Unit outputVariables */
                        outputVariables?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);

                        /** Unit maintenance */
                        maintenance?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.IMaintenanceSettings|null);

                        /** Unit state */
                        state?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.UnitState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.UnitState|null);

                        /** Unit conditions */
                        conditions?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitCondition[]|null);

                        /** Unit managementMode */
                        managementMode?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.ManagementMode|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.ManagementMode|null);

                        /** Unit systemManagedState */
                        systemManagedState?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.SystemManagedState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.SystemManagedState|null);

                        /** Unit systemCleanupAt */
                        systemCleanupAt?: (google.protobuf.ITimestamp|null);

                        /** Unit labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Unit annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** Unit uid */
                        uid?: (string|null);

                        /** Unit etag */
                        etag?: (string|null);

                        /** Unit createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Unit updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents an Unit. */
                    class Unit implements IUnit {

                        /**
                         * Constructs a new Unit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit);

                        /** Unit name. */
                        public name: string;

                        /** Unit unitKind. */
                        public unitKind: string;

                        /** Unit release. */
                        public release: string;

                        /** Unit tenant. */
                        public tenant: string;

                        /** Unit ongoingOperations. */
                        public ongoingOperations: string[];

                        /** Unit pendingOperations. */
                        public pendingOperations: string[];

                        /** Unit scheduledOperations. */
                        public scheduledOperations: string[];

                        /** Unit dependents. */
                        public dependents: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency[];

                        /** Unit dependencies. */
                        public dependencies: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency[];

                        /** Unit inputVariables. */
                        public inputVariables: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /** Unit outputVariables. */
                        public outputVariables: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /** Unit maintenance. */
                        public maintenance?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.IMaintenanceSettings|null);

                        /** Unit state. */
                        public state: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.UnitState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.UnitState);

                        /** Unit conditions. */
                        public conditions: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitCondition[];

                        /** Unit managementMode. */
                        public managementMode: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.ManagementMode|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.ManagementMode);

                        /** Unit systemManagedState. */
                        public systemManagedState: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.SystemManagedState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.SystemManagedState);

                        /** Unit systemCleanupAt. */
                        public systemCleanupAt?: (google.protobuf.ITimestamp|null);

                        /** Unit labels. */
                        public labels: { [k: string]: string };

                        /** Unit annotations. */
                        public annotations: { [k: string]: string };

                        /** Unit uid. */
                        public uid: string;

                        /** Unit etag. */
                        public etag: string;

                        /** Unit createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Unit updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Unit instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Unit instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit;

                        /**
                         * Encodes the specified Unit message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.verify|verify} messages.
                         * @param message Unit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Unit message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.verify|verify} messages.
                         * @param message Unit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Unit message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Unit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit;

                        /**
                         * Decodes an Unit message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Unit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit;

                        /**
                         * Verifies an Unit message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Unit message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Unit
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit;

                        /**
                         * Creates a plain object from an Unit message. Also converts values to other types if specified.
                         * @param message Unit
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Unit to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Unit
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Unit {

                        /** Properties of a MaintenanceSettings. */
                        interface IMaintenanceSettings {

                            /** MaintenanceSettings pinnedUntilTime */
                            pinnedUntilTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a MaintenanceSettings. */
                        class MaintenanceSettings implements IMaintenanceSettings {

                            /**
                             * Constructs a new MaintenanceSettings.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.IMaintenanceSettings);

                            /** MaintenanceSettings pinnedUntilTime. */
                            public pinnedUntilTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new MaintenanceSettings instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MaintenanceSettings instance
                             */
                            public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.IMaintenanceSettings): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings;

                            /**
                             * Encodes the specified MaintenanceSettings message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings.verify|verify} messages.
                             * @param message MaintenanceSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.IMaintenanceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MaintenanceSettings message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings.verify|verify} messages.
                             * @param message MaintenanceSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.IMaintenanceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MaintenanceSettings message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MaintenanceSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings;

                            /**
                             * Decodes a MaintenanceSettings message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MaintenanceSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings;

                            /**
                             * Verifies a MaintenanceSettings message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MaintenanceSettings message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MaintenanceSettings
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings;

                            /**
                             * Creates a plain object from a MaintenanceSettings message. Also converts values to other types if specified.
                             * @param message MaintenanceSettings
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit.MaintenanceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MaintenanceSettings to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MaintenanceSettings
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** UnitState enum. */
                        enum UnitState {
                            UNIT_STATE_UNSPECIFIED = 0,
                            UNIT_STATE_NOT_PROVISIONED = 1,
                            UNIT_STATE_PROVISIONING = 2,
                            UNIT_STATE_UPDATING = 3,
                            UNIT_STATE_DEPROVISIONING = 4,
                            UNIT_STATE_READY = 5,
                            UNIT_STATE_ERROR = 6
                        }

                        /** ManagementMode enum. */
                        enum ManagementMode {
                            MANAGEMENT_MODE_UNSPECIFIED = 0,
                            MANAGEMENT_MODE_USER = 1,
                            MANAGEMENT_MODE_SYSTEM = 2
                        }

                        /** SystemManagedState enum. */
                        enum SystemManagedState {
                            SYSTEM_MANAGED_STATE_UNSPECIFIED = 0,
                            SYSTEM_MANAGED_STATE_ACTIVE = 1,
                            SYSTEM_MANAGED_STATE_INACTIVE = 2,
                            SYSTEM_MANAGED_STATE_DECOMMISSIONED = 3
                        }
                    }

                    /** Properties of an UnitDependency. */
                    interface IUnitDependency {

                        /** UnitDependency alias */
                        alias?: (string|null);

                        /** UnitDependency unit */
                        unit?: (string|null);
                    }

                    /** Represents an UnitDependency. */
                    class UnitDependency implements IUnitDependency {

                        /**
                         * Constructs a new UnitDependency.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency);

                        /** UnitDependency alias. */
                        public alias: string;

                        /** UnitDependency unit. */
                        public unit: string;

                        /**
                         * Creates a new UnitDependency instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitDependency instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency;

                        /**
                         * Encodes the specified UnitDependency message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency.verify|verify} messages.
                         * @param message UnitDependency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitDependency message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency.verify|verify} messages.
                         * @param message UnitDependency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitDependency message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitDependency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency;

                        /**
                         * Decodes an UnitDependency message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitDependency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency;

                        /**
                         * Verifies an UnitDependency message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitDependency message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitDependency
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency;

                        /**
                         * Creates a plain object from an UnitDependency message. Also converts values to other types if specified.
                         * @param message UnitDependency
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitDependency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitDependency to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitDependency
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UnitOperation. */
                    interface IUnitOperation {

                        /** UnitOperation provision */
                        provision?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IProvision|null);

                        /** UnitOperation upgrade */
                        upgrade?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpgrade|null);

                        /** UnitOperation deprovision */
                        deprovision?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeprovision|null);

                        /** UnitOperation name */
                        name?: (string|null);

                        /** UnitOperation unit */
                        unit?: (string|null);

                        /** UnitOperation parentUnitOperation */
                        parentUnitOperation?: (string|null);

                        /** UnitOperation rollout */
                        rollout?: (string|null);

                        /** UnitOperation cancel */
                        cancel?: (boolean|null);

                        /** UnitOperation state */
                        state?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation.UnitOperationState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation.UnitOperationState|null);

                        /** UnitOperation conditions */
                        conditions?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperationCondition[]|null);

                        /** UnitOperation schedule */
                        schedule?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISchedule|null);

                        /** UnitOperation engineState */
                        engineState?: (string|null);

                        /** UnitOperation errorCategory */
                        errorCategory?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationErrorCategory|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationErrorCategory|null);

                        /** UnitOperation labels */
                        labels?: ({ [k: string]: string }|null);

                        /** UnitOperation annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** UnitOperation uid */
                        uid?: (string|null);

                        /** UnitOperation etag */
                        etag?: (string|null);

                        /** UnitOperation createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** UnitOperation updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents an UnitOperation. */
                    class UnitOperation implements IUnitOperation {

                        /**
                         * Constructs a new UnitOperation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation);

                        /** UnitOperation provision. */
                        public provision?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IProvision|null);

                        /** UnitOperation upgrade. */
                        public upgrade?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpgrade|null);

                        /** UnitOperation deprovision. */
                        public deprovision?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeprovision|null);

                        /** UnitOperation name. */
                        public name: string;

                        /** UnitOperation unit. */
                        public unit: string;

                        /** UnitOperation parentUnitOperation. */
                        public parentUnitOperation: string;

                        /** UnitOperation rollout. */
                        public rollout: string;

                        /** UnitOperation cancel. */
                        public cancel: boolean;

                        /** UnitOperation state. */
                        public state: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation.UnitOperationState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation.UnitOperationState);

                        /** UnitOperation conditions. */
                        public conditions: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperationCondition[];

                        /** UnitOperation schedule. */
                        public schedule?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISchedule|null);

                        /** UnitOperation engineState. */
                        public engineState: string;

                        /** UnitOperation errorCategory. */
                        public errorCategory: (google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationErrorCategory|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperationErrorCategory);

                        /** UnitOperation labels. */
                        public labels: { [k: string]: string };

                        /** UnitOperation annotations. */
                        public annotations: { [k: string]: string };

                        /** UnitOperation uid. */
                        public uid: string;

                        /** UnitOperation etag. */
                        public etag: string;

                        /** UnitOperation createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** UnitOperation updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** UnitOperation unitOperationType. */
                        public unitOperationType?: ("provision"|"upgrade"|"deprovision");

                        /**
                         * Creates a new UnitOperation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitOperation instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation;

                        /**
                         * Encodes the specified UnitOperation message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation.verify|verify} messages.
                         * @param message UnitOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitOperation message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation.verify|verify} messages.
                         * @param message UnitOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitOperation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation;

                        /**
                         * Decodes an UnitOperation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation;

                        /**
                         * Verifies an UnitOperation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitOperation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitOperation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation;

                        /**
                         * Creates a plain object from an UnitOperation message. Also converts values to other types if specified.
                         * @param message UnitOperation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitOperation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitOperation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace UnitOperation {

                        /** UnitOperationState enum. */
                        enum UnitOperationState {
                            UNIT_OPERATION_STATE_UNKNOWN = 0,
                            UNIT_OPERATION_STATE_PENDING = 1,
                            UNIT_OPERATION_STATE_SCHEDULED = 2,
                            UNIT_OPERATION_STATE_RUNNING = 4,
                            UNIT_OPERATION_STATE_SUCCEEDED = 5,
                            UNIT_OPERATION_STATE_FAILED = 6,
                            UNIT_OPERATION_STATE_CANCELLED = 7
                        }
                    }

                    /** Properties of a Provision. */
                    interface IProvision {

                        /** Provision release */
                        release?: (string|null);

                        /** Provision inputVariables */
                        inputVariables?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);
                    }

                    /** Represents a Provision. */
                    class Provision implements IProvision {

                        /**
                         * Constructs a new Provision.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IProvision);

                        /** Provision release. */
                        public release: string;

                        /** Provision inputVariables. */
                        public inputVariables: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /**
                         * Creates a new Provision instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Provision instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IProvision): google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision;

                        /**
                         * Encodes the specified Provision message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision.verify|verify} messages.
                         * @param message Provision message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IProvision, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Provision message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision.verify|verify} messages.
                         * @param message Provision message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IProvision, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Provision message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Provision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision;

                        /**
                         * Decodes a Provision message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Provision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision;

                        /**
                         * Verifies a Provision message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Provision message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Provision
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision;

                        /**
                         * Creates a plain object from a Provision message. Also converts values to other types if specified.
                         * @param message Provision
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Provision, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Provision to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Provision
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Deprovision. */
                    interface IDeprovision {
                    }

                    /** Represents a Deprovision. */
                    class Deprovision implements IDeprovision {

                        /**
                         * Constructs a new Deprovision.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeprovision);

                        /**
                         * Creates a new Deprovision instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Deprovision instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeprovision): google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision;

                        /**
                         * Encodes the specified Deprovision message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision.verify|verify} messages.
                         * @param message Deprovision message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeprovision, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Deprovision message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision.verify|verify} messages.
                         * @param message Deprovision message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeprovision, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Deprovision message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Deprovision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision;

                        /**
                         * Decodes a Deprovision message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Deprovision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision;

                        /**
                         * Verifies a Deprovision message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Deprovision message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Deprovision
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision;

                        /**
                         * Creates a plain object from a Deprovision message. Also converts values to other types if specified.
                         * @param message Deprovision
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Deprovision, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Deprovision to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Deprovision
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Upgrade. */
                    interface IUpgrade {

                        /** Upgrade release */
                        release?: (string|null);

                        /** Upgrade inputVariables */
                        inputVariables?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);
                    }

                    /** Represents an Upgrade. */
                    class Upgrade implements IUpgrade {

                        /**
                         * Constructs a new Upgrade.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpgrade);

                        /** Upgrade release. */
                        public release: string;

                        /** Upgrade inputVariables. */
                        public inputVariables: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /**
                         * Creates a new Upgrade instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Upgrade instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpgrade): google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade;

                        /**
                         * Encodes the specified Upgrade message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade.verify|verify} messages.
                         * @param message Upgrade message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Upgrade message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade.verify|verify} messages.
                         * @param message Upgrade message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Upgrade message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Upgrade
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade;

                        /**
                         * Decodes an Upgrade message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Upgrade
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade;

                        /**
                         * Verifies an Upgrade message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Upgrade message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Upgrade
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade;

                        /**
                         * Creates a plain object from an Upgrade message. Also converts values to other types if specified.
                         * @param message Upgrade
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Upgrade to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Upgrade
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Schedule. */
                    interface ISchedule {

                        /** Schedule startTime */
                        startTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Schedule. */
                    class Schedule implements ISchedule {

                        /**
                         * Constructs a new Schedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISchedule);

                        /** Schedule startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Schedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Schedule instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISchedule): google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule;

                        /**
                         * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule;

                        /**
                         * Verifies a Schedule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Schedule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule;

                        /**
                         * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                         * @param message Schedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Schedule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Schedule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Release. */
                    interface IRelease {

                        /** Release name */
                        name?: (string|null);

                        /** Release unitKind */
                        unitKind?: (string|null);

                        /** Release blueprint */
                        blueprint?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IBlueprint|null);

                        /** Release releaseRequirements */
                        releaseRequirements?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.IReleaseRequirements|null);

                        /** Release inputVariables */
                        inputVariables?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);

                        /** Release outputVariables */
                        outputVariables?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);

                        /** Release inputVariableDefaults */
                        inputVariableDefaults?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[]|null);

                        /** Release labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Release annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** Release uid */
                        uid?: (string|null);

                        /** Release etag */
                        etag?: (string|null);

                        /** Release createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Release updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Release. */
                    class Release implements IRelease {

                        /**
                         * Constructs a new Release.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease);

                        /** Release name. */
                        public name: string;

                        /** Release unitKind. */
                        public unitKind: string;

                        /** Release blueprint. */
                        public blueprint?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IBlueprint|null);

                        /** Release releaseRequirements. */
                        public releaseRequirements?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.IReleaseRequirements|null);

                        /** Release inputVariables. */
                        public inputVariables: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /** Release outputVariables. */
                        public outputVariables: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /** Release inputVariableDefaults. */
                        public inputVariableDefaults: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitVariable[];

                        /** Release labels. */
                        public labels: { [k: string]: string };

                        /** Release annotations. */
                        public annotations: { [k: string]: string };

                        /** Release uid. */
                        public uid: string;

                        /** Release etag. */
                        public etag: string;

                        /** Release createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Release updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Release instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Release instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release;

                        /**
                         * Encodes the specified Release message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.verify|verify} messages.
                         * @param message Release message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Release message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.verify|verify} messages.
                         * @param message Release message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Release message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Release
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release;

                        /**
                         * Decodes a Release message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Release
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release;

                        /**
                         * Verifies a Release message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Release message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Release
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release;

                        /**
                         * Creates a plain object from a Release message. Also converts values to other types if specified.
                         * @param message Release
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Release to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Release
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Release {

                        /** Properties of a ReleaseRequirements. */
                        interface IReleaseRequirements {

                            /** ReleaseRequirements upgradeableFromReleases */
                            upgradeableFromReleases?: (string[]|null);
                        }

                        /** Represents a ReleaseRequirements. */
                        class ReleaseRequirements implements IReleaseRequirements {

                            /**
                             * Constructs a new ReleaseRequirements.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.IReleaseRequirements);

                            /** ReleaseRequirements upgradeableFromReleases. */
                            public upgradeableFromReleases: string[];

                            /**
                             * Creates a new ReleaseRequirements instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ReleaseRequirements instance
                             */
                            public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.IReleaseRequirements): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements;

                            /**
                             * Encodes the specified ReleaseRequirements message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements.verify|verify} messages.
                             * @param message ReleaseRequirements message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.IReleaseRequirements, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ReleaseRequirements message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements.verify|verify} messages.
                             * @param message ReleaseRequirements message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.IReleaseRequirements, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ReleaseRequirements message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ReleaseRequirements
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements;

                            /**
                             * Decodes a ReleaseRequirements message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ReleaseRequirements
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements;

                            /**
                             * Verifies a ReleaseRequirements message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ReleaseRequirements message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ReleaseRequirements
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements;

                            /**
                             * Creates a plain object from a ReleaseRequirements message. Also converts values to other types if specified.
                             * @param message ReleaseRequirements
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release.ReleaseRequirements, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ReleaseRequirements to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ReleaseRequirements
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a VariableMapping. */
                    interface IVariableMapping {

                        /** VariableMapping from */
                        from?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IFromMapping|null);

                        /** VariableMapping to */
                        to?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IToMapping|null);

                        /** VariableMapping variable */
                        variable?: (string|null);
                    }

                    /** Represents a VariableMapping. */
                    class VariableMapping implements IVariableMapping {

                        /**
                         * Constructs a new VariableMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping);

                        /** VariableMapping from. */
                        public from?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IFromMapping|null);

                        /** VariableMapping to. */
                        public to?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IToMapping|null);

                        /** VariableMapping variable. */
                        public variable: string;

                        /** VariableMapping mappingType. */
                        public mappingType?: ("from"|"to");

                        /**
                         * Creates a new VariableMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VariableMapping instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping): google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping;

                        /**
                         * Encodes the specified VariableMapping message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping.verify|verify} messages.
                         * @param message VariableMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VariableMapping message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping.verify|verify} messages.
                         * @param message VariableMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IVariableMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VariableMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VariableMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping;

                        /**
                         * Decodes a VariableMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VariableMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping;

                        /**
                         * Verifies a VariableMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VariableMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VariableMapping
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping;

                        /**
                         * Creates a plain object from a VariableMapping message. Also converts values to other types if specified.
                         * @param message VariableMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.VariableMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VariableMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VariableMapping
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FromMapping. */
                    interface IFromMapping {

                        /** FromMapping dependency */
                        dependency?: (string|null);

                        /** FromMapping outputVariable */
                        outputVariable?: (string|null);
                    }

                    /** Represents a FromMapping. */
                    class FromMapping implements IFromMapping {

                        /**
                         * Constructs a new FromMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IFromMapping);

                        /** FromMapping dependency. */
                        public dependency: string;

                        /** FromMapping outputVariable. */
                        public outputVariable: string;

                        /**
                         * Creates a new FromMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FromMapping instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IFromMapping): google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping;

                        /**
                         * Encodes the specified FromMapping message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping.verify|verify} messages.
                         * @param message FromMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IFromMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FromMapping message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping.verify|verify} messages.
                         * @param message FromMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IFromMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FromMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FromMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping;

                        /**
                         * Decodes a FromMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FromMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping;

                        /**
                         * Verifies a FromMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FromMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FromMapping
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping;

                        /**
                         * Creates a plain object from a FromMapping message. Also converts values to other types if specified.
                         * @param message FromMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.FromMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FromMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FromMapping
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ToMapping. */
                    interface IToMapping {

                        /** ToMapping dependency */
                        dependency?: (string|null);

                        /** ToMapping inputVariable */
                        inputVariable?: (string|null);

                        /** ToMapping ignoreForLookup */
                        ignoreForLookup?: (boolean|null);
                    }

                    /** Represents a ToMapping. */
                    class ToMapping implements IToMapping {

                        /**
                         * Constructs a new ToMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IToMapping);

                        /** ToMapping dependency. */
                        public dependency: string;

                        /** ToMapping inputVariable. */
                        public inputVariable: string;

                        /** ToMapping ignoreForLookup. */
                        public ignoreForLookup: boolean;

                        /**
                         * Creates a new ToMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ToMapping instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IToMapping): google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping;

                        /**
                         * Encodes the specified ToMapping message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping.verify|verify} messages.
                         * @param message ToMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IToMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ToMapping message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping.verify|verify} messages.
                         * @param message ToMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IToMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ToMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ToMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping;

                        /**
                         * Decodes a ToMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ToMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping;

                        /**
                         * Verifies a ToMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ToMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ToMapping
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping;

                        /**
                         * Creates a plain object from a ToMapping message. Also converts values to other types if specified.
                         * @param message ToMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ToMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ToMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ToMapping
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Dependency. */
                    interface IDependency {

                        /** Dependency unitKind */
                        unitKind?: (string|null);

                        /** Dependency alias */
                        alias?: (string|null);
                    }

                    /** Represents a Dependency. */
                    class Dependency implements IDependency {

                        /**
                         * Constructs a new Dependency.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDependency);

                        /** Dependency unitKind. */
                        public unitKind: string;

                        /** Dependency alias. */
                        public alias: string;

                        /**
                         * Creates a new Dependency instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Dependency instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDependency): google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency;

                        /**
                         * Encodes the specified Dependency message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency.verify|verify} messages.
                         * @param message Dependency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Dependency message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency.verify|verify} messages.
                         * @param message Dependency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Dependency message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Dependency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency;

                        /**
                         * Decodes a Dependency message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Dependency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency;

                        /**
                         * Verifies a Dependency message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Dependency message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Dependency
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency;

                        /**
                         * Creates a plain object from a Dependency message. Also converts values to other types if specified.
                         * @param message Dependency
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Dependency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Dependency to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Dependency
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a SaasDeployments */
                    class SaasDeployments extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new SaasDeployments service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new SaasDeployments service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SaasDeployments;

                        /**
                         * Calls ListSaas.
                         * @param request ListSaasRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListSaasResponse
                         */
                        public listSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.ListSaasCallback): void;

                        /**
                         * Calls ListSaas.
                         * @param request ListSaasRequest message or plain object
                         * @returns Promise
                         */
                        public listSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse>;

                        /**
                         * Calls GetSaas.
                         * @param request GetSaasRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Saas
                         */
                        public getSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetSaasRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.GetSaasCallback): void;

                        /**
                         * Calls GetSaas.
                         * @param request GetSaasRequest message or plain object
                         * @returns Promise
                         */
                        public getSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetSaasRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas>;

                        /**
                         * Calls CreateSaas.
                         * @param request CreateSaasRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Saas
                         */
                        public createSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateSaasRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.CreateSaasCallback): void;

                        /**
                         * Calls CreateSaas.
                         * @param request CreateSaasRequest message or plain object
                         * @returns Promise
                         */
                        public createSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateSaasRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas>;

                        /**
                         * Calls UpdateSaas.
                         * @param request UpdateSaasRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Saas
                         */
                        public updateSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateSaasRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.UpdateSaasCallback): void;

                        /**
                         * Calls UpdateSaas.
                         * @param request UpdateSaasRequest message or plain object
                         * @returns Promise
                         */
                        public updateSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateSaasRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas>;

                        /**
                         * Calls DeleteSaas.
                         * @param request DeleteSaasRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteSaasRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.DeleteSaasCallback): void;

                        /**
                         * Calls DeleteSaas.
                         * @param request DeleteSaasRequest message or plain object
                         * @returns Promise
                         */
                        public deleteSaas(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteSaasRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListTenants.
                         * @param request ListTenantsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListTenantsResponse
                         */
                        public listTenants(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.ListTenantsCallback): void;

                        /**
                         * Calls ListTenants.
                         * @param request ListTenantsRequest message or plain object
                         * @returns Promise
                         */
                        public listTenants(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse>;

                        /**
                         * Calls GetTenant.
                         * @param request GetTenantRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Tenant
                         */
                        public getTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetTenantRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.GetTenantCallback): void;

                        /**
                         * Calls GetTenant.
                         * @param request GetTenantRequest message or plain object
                         * @returns Promise
                         */
                        public getTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetTenantRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant>;

                        /**
                         * Calls CreateTenant.
                         * @param request CreateTenantRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Tenant
                         */
                        public createTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateTenantRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.CreateTenantCallback): void;

                        /**
                         * Calls CreateTenant.
                         * @param request CreateTenantRequest message or plain object
                         * @returns Promise
                         */
                        public createTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateTenantRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant>;

                        /**
                         * Calls UpdateTenant.
                         * @param request UpdateTenantRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Tenant
                         */
                        public updateTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateTenantRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.UpdateTenantCallback): void;

                        /**
                         * Calls UpdateTenant.
                         * @param request UpdateTenantRequest message or plain object
                         * @returns Promise
                         */
                        public updateTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateTenantRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant>;

                        /**
                         * Calls DeleteTenant.
                         * @param request DeleteTenantRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteTenantRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.DeleteTenantCallback): void;

                        /**
                         * Calls DeleteTenant.
                         * @param request DeleteTenantRequest message or plain object
                         * @returns Promise
                         */
                        public deleteTenant(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteTenantRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListUnitKinds.
                         * @param request ListUnitKindsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListUnitKindsResponse
                         */
                        public listUnitKinds(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.ListUnitKindsCallback): void;

                        /**
                         * Calls ListUnitKinds.
                         * @param request ListUnitKindsRequest message or plain object
                         * @returns Promise
                         */
                        public listUnitKinds(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse>;

                        /**
                         * Calls GetUnitKind.
                         * @param request GetUnitKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and UnitKind
                         */
                        public getUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.GetUnitKindCallback): void;

                        /**
                         * Calls GetUnitKind.
                         * @param request GetUnitKindRequest message or plain object
                         * @returns Promise
                         */
                        public getUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitKindRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind>;

                        /**
                         * Calls CreateUnitKind.
                         * @param request CreateUnitKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and UnitKind
                         */
                        public createUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.CreateUnitKindCallback): void;

                        /**
                         * Calls CreateUnitKind.
                         * @param request CreateUnitKindRequest message or plain object
                         * @returns Promise
                         */
                        public createUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitKindRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind>;

                        /**
                         * Calls UpdateUnitKind.
                         * @param request UpdateUnitKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and UnitKind
                         */
                        public updateUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.UpdateUnitKindCallback): void;

                        /**
                         * Calls UpdateUnitKind.
                         * @param request UpdateUnitKindRequest message or plain object
                         * @returns Promise
                         */
                        public updateUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitKindRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind>;

                        /**
                         * Calls DeleteUnitKind.
                         * @param request DeleteUnitKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.DeleteUnitKindCallback): void;

                        /**
                         * Calls DeleteUnitKind.
                         * @param request DeleteUnitKindRequest message or plain object
                         * @returns Promise
                         */
                        public deleteUnitKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitKindRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListUnits.
                         * @param request ListUnitsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListUnitsResponse
                         */
                        public listUnits(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.ListUnitsCallback): void;

                        /**
                         * Calls ListUnits.
                         * @param request ListUnitsRequest message or plain object
                         * @returns Promise
                         */
                        public listUnits(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse>;

                        /**
                         * Calls GetUnit.
                         * @param request GetUnitRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Unit
                         */
                        public getUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.GetUnitCallback): void;

                        /**
                         * Calls GetUnit.
                         * @param request GetUnitRequest message or plain object
                         * @returns Promise
                         */
                        public getUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit>;

                        /**
                         * Calls CreateUnit.
                         * @param request CreateUnitRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Unit
                         */
                        public createUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.CreateUnitCallback): void;

                        /**
                         * Calls CreateUnit.
                         * @param request CreateUnitRequest message or plain object
                         * @returns Promise
                         */
                        public createUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit>;

                        /**
                         * Calls UpdateUnit.
                         * @param request UpdateUnitRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Unit
                         */
                        public updateUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.UpdateUnitCallback): void;

                        /**
                         * Calls UpdateUnit.
                         * @param request UpdateUnitRequest message or plain object
                         * @returns Promise
                         */
                        public updateUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit>;

                        /**
                         * Calls DeleteUnit.
                         * @param request DeleteUnitRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.DeleteUnitCallback): void;

                        /**
                         * Calls DeleteUnit.
                         * @param request DeleteUnitRequest message or plain object
                         * @returns Promise
                         */
                        public deleteUnit(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListUnitOperations.
                         * @param request ListUnitOperationsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListUnitOperationsResponse
                         */
                        public listUnitOperations(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.ListUnitOperationsCallback): void;

                        /**
                         * Calls ListUnitOperations.
                         * @param request ListUnitOperationsRequest message or plain object
                         * @returns Promise
                         */
                        public listUnitOperations(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse>;

                        /**
                         * Calls GetUnitOperation.
                         * @param request GetUnitOperationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and UnitOperation
                         */
                        public getUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitOperationRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.GetUnitOperationCallback): void;

                        /**
                         * Calls GetUnitOperation.
                         * @param request GetUnitOperationRequest message or plain object
                         * @returns Promise
                         */
                        public getUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitOperationRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation>;

                        /**
                         * Calls CreateUnitOperation.
                         * @param request CreateUnitOperationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and UnitOperation
                         */
                        public createUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitOperationRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.CreateUnitOperationCallback): void;

                        /**
                         * Calls CreateUnitOperation.
                         * @param request CreateUnitOperationRequest message or plain object
                         * @returns Promise
                         */
                        public createUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitOperationRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation>;

                        /**
                         * Calls UpdateUnitOperation.
                         * @param request UpdateUnitOperationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and UnitOperation
                         */
                        public updateUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitOperationRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.UpdateUnitOperationCallback): void;

                        /**
                         * Calls UpdateUnitOperation.
                         * @param request UpdateUnitOperationRequest message or plain object
                         * @returns Promise
                         */
                        public updateUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitOperationRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation>;

                        /**
                         * Calls DeleteUnitOperation.
                         * @param request DeleteUnitOperationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitOperationRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.DeleteUnitOperationCallback): void;

                        /**
                         * Calls DeleteUnitOperation.
                         * @param request DeleteUnitOperationRequest message or plain object
                         * @returns Promise
                         */
                        public deleteUnitOperation(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitOperationRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListReleases.
                         * @param request ListReleasesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListReleasesResponse
                         */
                        public listReleases(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.ListReleasesCallback): void;

                        /**
                         * Calls ListReleases.
                         * @param request ListReleasesRequest message or plain object
                         * @returns Promise
                         */
                        public listReleases(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse>;

                        /**
                         * Calls GetRelease.
                         * @param request GetReleaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Release
                         */
                        public getRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetReleaseRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.GetReleaseCallback): void;

                        /**
                         * Calls GetRelease.
                         * @param request GetReleaseRequest message or plain object
                         * @returns Promise
                         */
                        public getRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetReleaseRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Release>;

                        /**
                         * Calls CreateRelease.
                         * @param request CreateReleaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Release
                         */
                        public createRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateReleaseRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.CreateReleaseCallback): void;

                        /**
                         * Calls CreateRelease.
                         * @param request CreateReleaseRequest message or plain object
                         * @returns Promise
                         */
                        public createRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateReleaseRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Release>;

                        /**
                         * Calls UpdateRelease.
                         * @param request UpdateReleaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Release
                         */
                        public updateRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateReleaseRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.UpdateReleaseCallback): void;

                        /**
                         * Calls UpdateRelease.
                         * @param request UpdateReleaseRequest message or plain object
                         * @returns Promise
                         */
                        public updateRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateReleaseRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Release>;

                        /**
                         * Calls DeleteRelease.
                         * @param request DeleteReleaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteReleaseRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments.DeleteReleaseCallback): void;

                        /**
                         * Calls DeleteRelease.
                         * @param request DeleteReleaseRequest message or plain object
                         * @returns Promise
                         */
                        public deleteRelease(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteReleaseRequest): Promise<google.protobuf.Empty>;
                    }

                    namespace SaasDeployments {

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|listSaas}.
                         * @param error Error, if any
                         * @param [response] ListSaasResponse
                         */
                        type ListSaasCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|getSaas}.
                         * @param error Error, if any
                         * @param [response] Saas
                         */
                        type GetSaasCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|createSaas}.
                         * @param error Error, if any
                         * @param [response] Saas
                         */
                        type CreateSaasCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|updateSaas}.
                         * @param error Error, if any
                         * @param [response] Saas
                         */
                        type UpdateSaasCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Saas) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|deleteSaas}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteSaasCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|listTenants}.
                         * @param error Error, if any
                         * @param [response] ListTenantsResponse
                         */
                        type ListTenantsCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|getTenant}.
                         * @param error Error, if any
                         * @param [response] Tenant
                         */
                        type GetTenantCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|createTenant}.
                         * @param error Error, if any
                         * @param [response] Tenant
                         */
                        type CreateTenantCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|updateTenant}.
                         * @param error Error, if any
                         * @param [response] Tenant
                         */
                        type UpdateTenantCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Tenant) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|deleteTenant}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteTenantCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|listUnitKinds}.
                         * @param error Error, if any
                         * @param [response] ListUnitKindsResponse
                         */
                        type ListUnitKindsCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|getUnitKind}.
                         * @param error Error, if any
                         * @param [response] UnitKind
                         */
                        type GetUnitKindCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|createUnitKind}.
                         * @param error Error, if any
                         * @param [response] UnitKind
                         */
                        type CreateUnitKindCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|updateUnitKind}.
                         * @param error Error, if any
                         * @param [response] UnitKind
                         */
                        type UpdateUnitKindCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitKind) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|deleteUnitKind}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteUnitKindCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|listUnits}.
                         * @param error Error, if any
                         * @param [response] ListUnitsResponse
                         */
                        type ListUnitsCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|getUnit}.
                         * @param error Error, if any
                         * @param [response] Unit
                         */
                        type GetUnitCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|createUnit}.
                         * @param error Error, if any
                         * @param [response] Unit
                         */
                        type CreateUnitCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|updateUnit}.
                         * @param error Error, if any
                         * @param [response] Unit
                         */
                        type UpdateUnitCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Unit) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|deleteUnit}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteUnitCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|listUnitOperations}.
                         * @param error Error, if any
                         * @param [response] ListUnitOperationsResponse
                         */
                        type ListUnitOperationsCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|getUnitOperation}.
                         * @param error Error, if any
                         * @param [response] UnitOperation
                         */
                        type GetUnitOperationCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|createUnitOperation}.
                         * @param error Error, if any
                         * @param [response] UnitOperation
                         */
                        type CreateUnitOperationCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|updateUnitOperation}.
                         * @param error Error, if any
                         * @param [response] UnitOperation
                         */
                        type UpdateUnitOperationCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.UnitOperation) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|deleteUnitOperation}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteUnitOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|listReleases}.
                         * @param error Error, if any
                         * @param [response] ListReleasesResponse
                         */
                        type ListReleasesCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|getRelease}.
                         * @param error Error, if any
                         * @param [response] Release
                         */
                        type GetReleaseCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|createRelease}.
                         * @param error Error, if any
                         * @param [response] Release
                         */
                        type CreateReleaseCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|updateRelease}.
                         * @param error Error, if any
                         * @param [response] Release
                         */
                        type UpdateReleaseCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Release) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasDeployments|deleteRelease}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteReleaseCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                    }

                    /** Properties of a ListSaasRequest. */
                    interface IListSaasRequest {

                        /** ListSaasRequest parent */
                        parent?: (string|null);

                        /** ListSaasRequest pageSize */
                        pageSize?: (number|null);

                        /** ListSaasRequest pageToken */
                        pageToken?: (string|null);

                        /** ListSaasRequest filter */
                        filter?: (string|null);

                        /** ListSaasRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListSaasRequest. */
                    class ListSaasRequest implements IListSaasRequest {

                        /**
                         * Constructs a new ListSaasRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasRequest);

                        /** ListSaasRequest parent. */
                        public parent: string;

                        /** ListSaasRequest pageSize. */
                        public pageSize: number;

                        /** ListSaasRequest pageToken. */
                        public pageToken: string;

                        /** ListSaasRequest filter. */
                        public filter: string;

                        /** ListSaasRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListSaasRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSaasRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest;

                        /**
                         * Encodes the specified ListSaasRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest.verify|verify} messages.
                         * @param message ListSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSaasRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest.verify|verify} messages.
                         * @param message ListSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSaasRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest;

                        /**
                         * Decodes a ListSaasRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest;

                        /**
                         * Verifies a ListSaasRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSaasRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSaasRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest;

                        /**
                         * Creates a plain object from a ListSaasRequest message. Also converts values to other types if specified.
                         * @param message ListSaasRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSaasRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSaasRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListSaasResponse. */
                    interface IListSaasResponse {

                        /** ListSaasResponse saas */
                        saas?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas[]|null);

                        /** ListSaasResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListSaasResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListSaasResponse. */
                    class ListSaasResponse implements IListSaasResponse {

                        /**
                         * Constructs a new ListSaasResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasResponse);

                        /** ListSaasResponse saas. */
                        public saas: google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas[];

                        /** ListSaasResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListSaasResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListSaasResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListSaasResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse;

                        /**
                         * Encodes the specified ListSaasResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse.verify|verify} messages.
                         * @param message ListSaasResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListSaasResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse.verify|verify} messages.
                         * @param message ListSaasResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListSaasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListSaasResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListSaasResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse;

                        /**
                         * Decodes a ListSaasResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListSaasResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse;

                        /**
                         * Verifies a ListSaasResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListSaasResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListSaasResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse;

                        /**
                         * Creates a plain object from a ListSaasResponse message. Also converts values to other types if specified.
                         * @param message ListSaasResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListSaasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListSaasResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListSaasResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetSaasRequest. */
                    interface IGetSaasRequest {

                        /** GetSaasRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetSaasRequest. */
                    class GetSaasRequest implements IGetSaasRequest {

                        /**
                         * Constructs a new GetSaasRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetSaasRequest);

                        /** GetSaasRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetSaasRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetSaasRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetSaasRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest;

                        /**
                         * Encodes the specified GetSaasRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest.verify|verify} messages.
                         * @param message GetSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetSaasRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest.verify|verify} messages.
                         * @param message GetSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetSaasRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest;

                        /**
                         * Decodes a GetSaasRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest;

                        /**
                         * Verifies a GetSaasRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetSaasRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetSaasRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest;

                        /**
                         * Creates a plain object from a GetSaasRequest message. Also converts values to other types if specified.
                         * @param message GetSaasRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetSaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetSaasRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetSaasRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateSaasRequest. */
                    interface ICreateSaasRequest {

                        /** CreateSaasRequest parent */
                        parent?: (string|null);

                        /** CreateSaasRequest saasId */
                        saasId?: (string|null);

                        /** CreateSaasRequest saas */
                        saas?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas|null);

                        /** CreateSaasRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateSaasRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateSaasRequest. */
                    class CreateSaasRequest implements ICreateSaasRequest {

                        /**
                         * Constructs a new CreateSaasRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateSaasRequest);

                        /** CreateSaasRequest parent. */
                        public parent: string;

                        /** CreateSaasRequest saasId. */
                        public saasId: string;

                        /** CreateSaasRequest saas. */
                        public saas?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas|null);

                        /** CreateSaasRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateSaasRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateSaasRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateSaasRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateSaasRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest;

                        /**
                         * Encodes the specified CreateSaasRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest.verify|verify} messages.
                         * @param message CreateSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateSaasRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest.verify|verify} messages.
                         * @param message CreateSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateSaasRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest;

                        /**
                         * Decodes a CreateSaasRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest;

                        /**
                         * Verifies a CreateSaasRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateSaasRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateSaasRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest;

                        /**
                         * Creates a plain object from a CreateSaasRequest message. Also converts values to other types if specified.
                         * @param message CreateSaasRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateSaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateSaasRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateSaasRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateSaasRequest. */
                    interface IUpdateSaasRequest {

                        /** UpdateSaasRequest saas */
                        saas?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas|null);

                        /** UpdateSaasRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateSaasRequest requestId */
                        requestId?: (string|null);

                        /** UpdateSaasRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateSaasRequest. */
                    class UpdateSaasRequest implements IUpdateSaasRequest {

                        /**
                         * Constructs a new UpdateSaasRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateSaasRequest);

                        /** UpdateSaasRequest saas. */
                        public saas?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ISaas|null);

                        /** UpdateSaasRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateSaasRequest requestId. */
                        public requestId: string;

                        /** UpdateSaasRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateSaasRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateSaasRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateSaasRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest;

                        /**
                         * Encodes the specified UpdateSaasRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest.verify|verify} messages.
                         * @param message UpdateSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateSaasRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest.verify|verify} messages.
                         * @param message UpdateSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateSaasRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest;

                        /**
                         * Decodes an UpdateSaasRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest;

                        /**
                         * Verifies an UpdateSaasRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateSaasRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateSaasRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest;

                        /**
                         * Creates a plain object from an UpdateSaasRequest message. Also converts values to other types if specified.
                         * @param message UpdateSaasRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateSaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateSaasRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateSaasRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteSaasRequest. */
                    interface IDeleteSaasRequest {

                        /** DeleteSaasRequest name */
                        name?: (string|null);

                        /** DeleteSaasRequest etag */
                        etag?: (string|null);

                        /** DeleteSaasRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteSaasRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteSaasRequest. */
                    class DeleteSaasRequest implements IDeleteSaasRequest {

                        /**
                         * Constructs a new DeleteSaasRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteSaasRequest);

                        /** DeleteSaasRequest name. */
                        public name: string;

                        /** DeleteSaasRequest etag. */
                        public etag: string;

                        /** DeleteSaasRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteSaasRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteSaasRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteSaasRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteSaasRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest;

                        /**
                         * Encodes the specified DeleteSaasRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest.verify|verify} messages.
                         * @param message DeleteSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteSaasRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest.verify|verify} messages.
                         * @param message DeleteSaasRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteSaasRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest;

                        /**
                         * Decodes a DeleteSaasRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteSaasRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest;

                        /**
                         * Verifies a DeleteSaasRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteSaasRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteSaasRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest;

                        /**
                         * Creates a plain object from a DeleteSaasRequest message. Also converts values to other types if specified.
                         * @param message DeleteSaasRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteSaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteSaasRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteSaasRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListTenantsRequest. */
                    interface IListTenantsRequest {

                        /** ListTenantsRequest parent */
                        parent?: (string|null);

                        /** ListTenantsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListTenantsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListTenantsRequest filter */
                        filter?: (string|null);

                        /** ListTenantsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListTenantsRequest. */
                    class ListTenantsRequest implements IListTenantsRequest {

                        /**
                         * Constructs a new ListTenantsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsRequest);

                        /** ListTenantsRequest parent. */
                        public parent: string;

                        /** ListTenantsRequest pageSize. */
                        public pageSize: number;

                        /** ListTenantsRequest pageToken. */
                        public pageToken: string;

                        /** ListTenantsRequest filter. */
                        public filter: string;

                        /** ListTenantsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListTenantsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListTenantsRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest;

                        /**
                         * Encodes the specified ListTenantsRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest.verify|verify} messages.
                         * @param message ListTenantsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListTenantsRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest.verify|verify} messages.
                         * @param message ListTenantsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListTenantsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListTenantsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest;

                        /**
                         * Decodes a ListTenantsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListTenantsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest;

                        /**
                         * Verifies a ListTenantsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListTenantsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListTenantsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest;

                        /**
                         * Creates a plain object from a ListTenantsRequest message. Also converts values to other types if specified.
                         * @param message ListTenantsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListTenantsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListTenantsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListTenantsResponse. */
                    interface IListTenantsResponse {

                        /** ListTenantsResponse tenants */
                        tenants?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant[]|null);

                        /** ListTenantsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListTenantsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListTenantsResponse. */
                    class ListTenantsResponse implements IListTenantsResponse {

                        /**
                         * Constructs a new ListTenantsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsResponse);

                        /** ListTenantsResponse tenants. */
                        public tenants: google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant[];

                        /** ListTenantsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListTenantsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListTenantsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListTenantsResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse;

                        /**
                         * Encodes the specified ListTenantsResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse.verify|verify} messages.
                         * @param message ListTenantsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListTenantsResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse.verify|verify} messages.
                         * @param message ListTenantsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListTenantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListTenantsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListTenantsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse;

                        /**
                         * Decodes a ListTenantsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListTenantsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse;

                        /**
                         * Verifies a ListTenantsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListTenantsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListTenantsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse;

                        /**
                         * Creates a plain object from a ListTenantsResponse message. Also converts values to other types if specified.
                         * @param message ListTenantsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListTenantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListTenantsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListTenantsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetTenantRequest. */
                    interface IGetTenantRequest {

                        /** GetTenantRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetTenantRequest. */
                    class GetTenantRequest implements IGetTenantRequest {

                        /**
                         * Constructs a new GetTenantRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetTenantRequest);

                        /** GetTenantRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetTenantRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetTenantRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetTenantRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest;

                        /**
                         * Encodes the specified GetTenantRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest.verify|verify} messages.
                         * @param message GetTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetTenantRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest.verify|verify} messages.
                         * @param message GetTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetTenantRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest;

                        /**
                         * Decodes a GetTenantRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest;

                        /**
                         * Verifies a GetTenantRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetTenantRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetTenantRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest;

                        /**
                         * Creates a plain object from a GetTenantRequest message. Also converts values to other types if specified.
                         * @param message GetTenantRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetTenantRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetTenantRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateTenantRequest. */
                    interface ICreateTenantRequest {

                        /** CreateTenantRequest parent */
                        parent?: (string|null);

                        /** CreateTenantRequest tenantId */
                        tenantId?: (string|null);

                        /** CreateTenantRequest tenant */
                        tenant?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant|null);

                        /** CreateTenantRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateTenantRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateTenantRequest. */
                    class CreateTenantRequest implements ICreateTenantRequest {

                        /**
                         * Constructs a new CreateTenantRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateTenantRequest);

                        /** CreateTenantRequest parent. */
                        public parent: string;

                        /** CreateTenantRequest tenantId. */
                        public tenantId: string;

                        /** CreateTenantRequest tenant. */
                        public tenant?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant|null);

                        /** CreateTenantRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateTenantRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateTenantRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateTenantRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateTenantRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest;

                        /**
                         * Encodes the specified CreateTenantRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest.verify|verify} messages.
                         * @param message CreateTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateTenantRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest.verify|verify} messages.
                         * @param message CreateTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateTenantRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest;

                        /**
                         * Decodes a CreateTenantRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest;

                        /**
                         * Verifies a CreateTenantRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateTenantRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateTenantRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest;

                        /**
                         * Creates a plain object from a CreateTenantRequest message. Also converts values to other types if specified.
                         * @param message CreateTenantRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateTenantRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateTenantRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateTenantRequest. */
                    interface IUpdateTenantRequest {

                        /** UpdateTenantRequest tenant */
                        tenant?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant|null);

                        /** UpdateTenantRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateTenantRequest requestId */
                        requestId?: (string|null);

                        /** UpdateTenantRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateTenantRequest. */
                    class UpdateTenantRequest implements IUpdateTenantRequest {

                        /**
                         * Constructs a new UpdateTenantRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateTenantRequest);

                        /** UpdateTenantRequest tenant. */
                        public tenant?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.ITenant|null);

                        /** UpdateTenantRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateTenantRequest requestId. */
                        public requestId: string;

                        /** UpdateTenantRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateTenantRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateTenantRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateTenantRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest;

                        /**
                         * Encodes the specified UpdateTenantRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest.verify|verify} messages.
                         * @param message UpdateTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateTenantRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest.verify|verify} messages.
                         * @param message UpdateTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateTenantRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest;

                        /**
                         * Decodes an UpdateTenantRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest;

                        /**
                         * Verifies an UpdateTenantRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateTenantRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateTenantRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest;

                        /**
                         * Creates a plain object from an UpdateTenantRequest message. Also converts values to other types if specified.
                         * @param message UpdateTenantRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateTenantRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateTenantRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteTenantRequest. */
                    interface IDeleteTenantRequest {

                        /** DeleteTenantRequest name */
                        name?: (string|null);

                        /** DeleteTenantRequest etag */
                        etag?: (string|null);

                        /** DeleteTenantRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteTenantRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteTenantRequest. */
                    class DeleteTenantRequest implements IDeleteTenantRequest {

                        /**
                         * Constructs a new DeleteTenantRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteTenantRequest);

                        /** DeleteTenantRequest name. */
                        public name: string;

                        /** DeleteTenantRequest etag. */
                        public etag: string;

                        /** DeleteTenantRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteTenantRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteTenantRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteTenantRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteTenantRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest;

                        /**
                         * Encodes the specified DeleteTenantRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest.verify|verify} messages.
                         * @param message DeleteTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteTenantRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest.verify|verify} messages.
                         * @param message DeleteTenantRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteTenantRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest;

                        /**
                         * Decodes a DeleteTenantRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteTenantRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest;

                        /**
                         * Verifies a DeleteTenantRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteTenantRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteTenantRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest;

                        /**
                         * Creates a plain object from a DeleteTenantRequest message. Also converts values to other types if specified.
                         * @param message DeleteTenantRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteTenantRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteTenantRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListUnitKindsRequest. */
                    interface IListUnitKindsRequest {

                        /** ListUnitKindsRequest parent */
                        parent?: (string|null);

                        /** ListUnitKindsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListUnitKindsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListUnitKindsRequest filter */
                        filter?: (string|null);

                        /** ListUnitKindsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListUnitKindsRequest. */
                    class ListUnitKindsRequest implements IListUnitKindsRequest {

                        /**
                         * Constructs a new ListUnitKindsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsRequest);

                        /** ListUnitKindsRequest parent. */
                        public parent: string;

                        /** ListUnitKindsRequest pageSize. */
                        public pageSize: number;

                        /** ListUnitKindsRequest pageToken. */
                        public pageToken: string;

                        /** ListUnitKindsRequest filter. */
                        public filter: string;

                        /** ListUnitKindsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListUnitKindsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListUnitKindsRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest;

                        /**
                         * Encodes the specified ListUnitKindsRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest.verify|verify} messages.
                         * @param message ListUnitKindsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListUnitKindsRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest.verify|verify} messages.
                         * @param message ListUnitKindsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListUnitKindsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListUnitKindsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest;

                        /**
                         * Decodes a ListUnitKindsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListUnitKindsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest;

                        /**
                         * Verifies a ListUnitKindsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListUnitKindsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListUnitKindsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest;

                        /**
                         * Creates a plain object from a ListUnitKindsRequest message. Also converts values to other types if specified.
                         * @param message ListUnitKindsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListUnitKindsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListUnitKindsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListUnitKindsResponse. */
                    interface IListUnitKindsResponse {

                        /** ListUnitKindsResponse unitKinds */
                        unitKinds?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind[]|null);

                        /** ListUnitKindsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListUnitKindsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListUnitKindsResponse. */
                    class ListUnitKindsResponse implements IListUnitKindsResponse {

                        /**
                         * Constructs a new ListUnitKindsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsResponse);

                        /** ListUnitKindsResponse unitKinds. */
                        public unitKinds: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind[];

                        /** ListUnitKindsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListUnitKindsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListUnitKindsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListUnitKindsResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse;

                        /**
                         * Encodes the specified ListUnitKindsResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse.verify|verify} messages.
                         * @param message ListUnitKindsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListUnitKindsResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse.verify|verify} messages.
                         * @param message ListUnitKindsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitKindsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListUnitKindsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListUnitKindsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse;

                        /**
                         * Decodes a ListUnitKindsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListUnitKindsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse;

                        /**
                         * Verifies a ListUnitKindsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListUnitKindsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListUnitKindsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse;

                        /**
                         * Creates a plain object from a ListUnitKindsResponse message. Also converts values to other types if specified.
                         * @param message ListUnitKindsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitKindsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListUnitKindsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListUnitKindsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetUnitKindRequest. */
                    interface IGetUnitKindRequest {

                        /** GetUnitKindRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetUnitKindRequest. */
                    class GetUnitKindRequest implements IGetUnitKindRequest {

                        /**
                         * Constructs a new GetUnitKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitKindRequest);

                        /** GetUnitKindRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetUnitKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetUnitKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest;

                        /**
                         * Encodes the specified GetUnitKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest.verify|verify} messages.
                         * @param message GetUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetUnitKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest.verify|verify} messages.
                         * @param message GetUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetUnitKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest;

                        /**
                         * Decodes a GetUnitKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest;

                        /**
                         * Verifies a GetUnitKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetUnitKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetUnitKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest;

                        /**
                         * Creates a plain object from a GetUnitKindRequest message. Also converts values to other types if specified.
                         * @param message GetUnitKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetUnitKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetUnitKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateUnitKindRequest. */
                    interface ICreateUnitKindRequest {

                        /** CreateUnitKindRequest parent */
                        parent?: (string|null);

                        /** CreateUnitKindRequest unitKindId */
                        unitKindId?: (string|null);

                        /** CreateUnitKindRequest unitKind */
                        unitKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind|null);

                        /** CreateUnitKindRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateUnitKindRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateUnitKindRequest. */
                    class CreateUnitKindRequest implements ICreateUnitKindRequest {

                        /**
                         * Constructs a new CreateUnitKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitKindRequest);

                        /** CreateUnitKindRequest parent. */
                        public parent: string;

                        /** CreateUnitKindRequest unitKindId. */
                        public unitKindId: string;

                        /** CreateUnitKindRequest unitKind. */
                        public unitKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind|null);

                        /** CreateUnitKindRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateUnitKindRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateUnitKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateUnitKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest;

                        /**
                         * Encodes the specified CreateUnitKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest.verify|verify} messages.
                         * @param message CreateUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateUnitKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest.verify|verify} messages.
                         * @param message CreateUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateUnitKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest;

                        /**
                         * Decodes a CreateUnitKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest;

                        /**
                         * Verifies a CreateUnitKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateUnitKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateUnitKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest;

                        /**
                         * Creates a plain object from a CreateUnitKindRequest message. Also converts values to other types if specified.
                         * @param message CreateUnitKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateUnitKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateUnitKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateUnitKindRequest. */
                    interface IUpdateUnitKindRequest {

                        /** UpdateUnitKindRequest unitKind */
                        unitKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind|null);

                        /** UpdateUnitKindRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateUnitKindRequest requestId */
                        requestId?: (string|null);

                        /** UpdateUnitKindRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateUnitKindRequest. */
                    class UpdateUnitKindRequest implements IUpdateUnitKindRequest {

                        /**
                         * Constructs a new UpdateUnitKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitKindRequest);

                        /** UpdateUnitKindRequest unitKind. */
                        public unitKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitKind|null);

                        /** UpdateUnitKindRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateUnitKindRequest requestId. */
                        public requestId: string;

                        /** UpdateUnitKindRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateUnitKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateUnitKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest;

                        /**
                         * Encodes the specified UpdateUnitKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest.verify|verify} messages.
                         * @param message UpdateUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateUnitKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest.verify|verify} messages.
                         * @param message UpdateUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateUnitKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest;

                        /**
                         * Decodes an UpdateUnitKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest;

                        /**
                         * Verifies an UpdateUnitKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateUnitKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateUnitKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest;

                        /**
                         * Creates a plain object from an UpdateUnitKindRequest message. Also converts values to other types if specified.
                         * @param message UpdateUnitKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateUnitKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateUnitKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteUnitKindRequest. */
                    interface IDeleteUnitKindRequest {

                        /** DeleteUnitKindRequest name */
                        name?: (string|null);

                        /** DeleteUnitKindRequest etag */
                        etag?: (string|null);

                        /** DeleteUnitKindRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteUnitKindRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteUnitKindRequest. */
                    class DeleteUnitKindRequest implements IDeleteUnitKindRequest {

                        /**
                         * Constructs a new DeleteUnitKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitKindRequest);

                        /** DeleteUnitKindRequest name. */
                        public name: string;

                        /** DeleteUnitKindRequest etag. */
                        public etag: string;

                        /** DeleteUnitKindRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteUnitKindRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteUnitKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteUnitKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest;

                        /**
                         * Encodes the specified DeleteUnitKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest.verify|verify} messages.
                         * @param message DeleteUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteUnitKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest.verify|verify} messages.
                         * @param message DeleteUnitKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteUnitKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest;

                        /**
                         * Decodes a DeleteUnitKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteUnitKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest;

                        /**
                         * Verifies a DeleteUnitKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteUnitKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteUnitKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest;

                        /**
                         * Creates a plain object from a DeleteUnitKindRequest message. Also converts values to other types if specified.
                         * @param message DeleteUnitKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteUnitKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteUnitKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListUnitsRequest. */
                    interface IListUnitsRequest {

                        /** ListUnitsRequest parent */
                        parent?: (string|null);

                        /** ListUnitsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListUnitsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListUnitsRequest filter */
                        filter?: (string|null);

                        /** ListUnitsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListUnitsRequest. */
                    class ListUnitsRequest implements IListUnitsRequest {

                        /**
                         * Constructs a new ListUnitsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsRequest);

                        /** ListUnitsRequest parent. */
                        public parent: string;

                        /** ListUnitsRequest pageSize. */
                        public pageSize: number;

                        /** ListUnitsRequest pageToken. */
                        public pageToken: string;

                        /** ListUnitsRequest filter. */
                        public filter: string;

                        /** ListUnitsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListUnitsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListUnitsRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest;

                        /**
                         * Encodes the specified ListUnitsRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest.verify|verify} messages.
                         * @param message ListUnitsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListUnitsRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest.verify|verify} messages.
                         * @param message ListUnitsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListUnitsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListUnitsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest;

                        /**
                         * Decodes a ListUnitsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListUnitsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest;

                        /**
                         * Verifies a ListUnitsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListUnitsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListUnitsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest;

                        /**
                         * Creates a plain object from a ListUnitsRequest message. Also converts values to other types if specified.
                         * @param message ListUnitsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListUnitsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListUnitsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListUnitsResponse. */
                    interface IListUnitsResponse {

                        /** ListUnitsResponse units */
                        units?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit[]|null);

                        /** ListUnitsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListUnitsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListUnitsResponse. */
                    class ListUnitsResponse implements IListUnitsResponse {

                        /**
                         * Constructs a new ListUnitsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsResponse);

                        /** ListUnitsResponse units. */
                        public units: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit[];

                        /** ListUnitsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListUnitsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListUnitsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListUnitsResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse;

                        /**
                         * Encodes the specified ListUnitsResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse.verify|verify} messages.
                         * @param message ListUnitsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListUnitsResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse.verify|verify} messages.
                         * @param message ListUnitsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListUnitsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListUnitsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse;

                        /**
                         * Decodes a ListUnitsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListUnitsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse;

                        /**
                         * Verifies a ListUnitsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListUnitsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListUnitsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse;

                        /**
                         * Creates a plain object from a ListUnitsResponse message. Also converts values to other types if specified.
                         * @param message ListUnitsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListUnitsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListUnitsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetUnitRequest. */
                    interface IGetUnitRequest {

                        /** GetUnitRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetUnitRequest. */
                    class GetUnitRequest implements IGetUnitRequest {

                        /**
                         * Constructs a new GetUnitRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitRequest);

                        /** GetUnitRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetUnitRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetUnitRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest;

                        /**
                         * Encodes the specified GetUnitRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest.verify|verify} messages.
                         * @param message GetUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetUnitRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest.verify|verify} messages.
                         * @param message GetUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetUnitRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest;

                        /**
                         * Decodes a GetUnitRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest;

                        /**
                         * Verifies a GetUnitRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetUnitRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetUnitRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest;

                        /**
                         * Creates a plain object from a GetUnitRequest message. Also converts values to other types if specified.
                         * @param message GetUnitRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetUnitRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetUnitRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateUnitRequest. */
                    interface ICreateUnitRequest {

                        /** CreateUnitRequest parent */
                        parent?: (string|null);

                        /** CreateUnitRequest unitId */
                        unitId?: (string|null);

                        /** CreateUnitRequest unit */
                        unit?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit|null);

                        /** CreateUnitRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateUnitRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateUnitRequest. */
                    class CreateUnitRequest implements ICreateUnitRequest {

                        /**
                         * Constructs a new CreateUnitRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitRequest);

                        /** CreateUnitRequest parent. */
                        public parent: string;

                        /** CreateUnitRequest unitId. */
                        public unitId: string;

                        /** CreateUnitRequest unit. */
                        public unit?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit|null);

                        /** CreateUnitRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateUnitRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateUnitRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateUnitRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest;

                        /**
                         * Encodes the specified CreateUnitRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest.verify|verify} messages.
                         * @param message CreateUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateUnitRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest.verify|verify} messages.
                         * @param message CreateUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateUnitRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest;

                        /**
                         * Decodes a CreateUnitRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest;

                        /**
                         * Verifies a CreateUnitRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateUnitRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateUnitRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest;

                        /**
                         * Creates a plain object from a CreateUnitRequest message. Also converts values to other types if specified.
                         * @param message CreateUnitRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateUnitRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateUnitRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateUnitRequest. */
                    interface IUpdateUnitRequest {

                        /** UpdateUnitRequest unit */
                        unit?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit|null);

                        /** UpdateUnitRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateUnitRequest requestId */
                        requestId?: (string|null);

                        /** UpdateUnitRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateUnitRequest. */
                    class UpdateUnitRequest implements IUpdateUnitRequest {

                        /**
                         * Constructs a new UpdateUnitRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitRequest);

                        /** UpdateUnitRequest unit. */
                        public unit?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnit|null);

                        /** UpdateUnitRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateUnitRequest requestId. */
                        public requestId: string;

                        /** UpdateUnitRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateUnitRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateUnitRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest;

                        /**
                         * Encodes the specified UpdateUnitRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest.verify|verify} messages.
                         * @param message UpdateUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateUnitRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest.verify|verify} messages.
                         * @param message UpdateUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateUnitRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest;

                        /**
                         * Decodes an UpdateUnitRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest;

                        /**
                         * Verifies an UpdateUnitRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateUnitRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateUnitRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest;

                        /**
                         * Creates a plain object from an UpdateUnitRequest message. Also converts values to other types if specified.
                         * @param message UpdateUnitRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateUnitRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateUnitRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteUnitRequest. */
                    interface IDeleteUnitRequest {

                        /** DeleteUnitRequest name */
                        name?: (string|null);

                        /** DeleteUnitRequest etag */
                        etag?: (string|null);

                        /** DeleteUnitRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteUnitRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteUnitRequest. */
                    class DeleteUnitRequest implements IDeleteUnitRequest {

                        /**
                         * Constructs a new DeleteUnitRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitRequest);

                        /** DeleteUnitRequest name. */
                        public name: string;

                        /** DeleteUnitRequest etag. */
                        public etag: string;

                        /** DeleteUnitRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteUnitRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteUnitRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteUnitRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest;

                        /**
                         * Encodes the specified DeleteUnitRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest.verify|verify} messages.
                         * @param message DeleteUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteUnitRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest.verify|verify} messages.
                         * @param message DeleteUnitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteUnitRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest;

                        /**
                         * Decodes a DeleteUnitRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteUnitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest;

                        /**
                         * Verifies a DeleteUnitRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteUnitRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteUnitRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest;

                        /**
                         * Creates a plain object from a DeleteUnitRequest message. Also converts values to other types if specified.
                         * @param message DeleteUnitRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteUnitRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteUnitRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListUnitOperationsRequest. */
                    interface IListUnitOperationsRequest {

                        /** ListUnitOperationsRequest parent */
                        parent?: (string|null);

                        /** ListUnitOperationsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListUnitOperationsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListUnitOperationsRequest filter */
                        filter?: (string|null);

                        /** ListUnitOperationsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListUnitOperationsRequest. */
                    class ListUnitOperationsRequest implements IListUnitOperationsRequest {

                        /**
                         * Constructs a new ListUnitOperationsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsRequest);

                        /** ListUnitOperationsRequest parent. */
                        public parent: string;

                        /** ListUnitOperationsRequest pageSize. */
                        public pageSize: number;

                        /** ListUnitOperationsRequest pageToken. */
                        public pageToken: string;

                        /** ListUnitOperationsRequest filter. */
                        public filter: string;

                        /** ListUnitOperationsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListUnitOperationsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListUnitOperationsRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest;

                        /**
                         * Encodes the specified ListUnitOperationsRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest.verify|verify} messages.
                         * @param message ListUnitOperationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListUnitOperationsRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest.verify|verify} messages.
                         * @param message ListUnitOperationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListUnitOperationsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListUnitOperationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest;

                        /**
                         * Decodes a ListUnitOperationsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListUnitOperationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest;

                        /**
                         * Verifies a ListUnitOperationsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListUnitOperationsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListUnitOperationsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest;

                        /**
                         * Creates a plain object from a ListUnitOperationsRequest message. Also converts values to other types if specified.
                         * @param message ListUnitOperationsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListUnitOperationsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListUnitOperationsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListUnitOperationsResponse. */
                    interface IListUnitOperationsResponse {

                        /** ListUnitOperationsResponse unitOperations */
                        unitOperations?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation[]|null);

                        /** ListUnitOperationsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListUnitOperationsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListUnitOperationsResponse. */
                    class ListUnitOperationsResponse implements IListUnitOperationsResponse {

                        /**
                         * Constructs a new ListUnitOperationsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsResponse);

                        /** ListUnitOperationsResponse unitOperations. */
                        public unitOperations: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation[];

                        /** ListUnitOperationsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListUnitOperationsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListUnitOperationsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListUnitOperationsResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse;

                        /**
                         * Encodes the specified ListUnitOperationsResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse.verify|verify} messages.
                         * @param message ListUnitOperationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListUnitOperationsResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse.verify|verify} messages.
                         * @param message ListUnitOperationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListUnitOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListUnitOperationsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListUnitOperationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse;

                        /**
                         * Decodes a ListUnitOperationsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListUnitOperationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse;

                        /**
                         * Verifies a ListUnitOperationsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListUnitOperationsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListUnitOperationsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse;

                        /**
                         * Creates a plain object from a ListUnitOperationsResponse message. Also converts values to other types if specified.
                         * @param message ListUnitOperationsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListUnitOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListUnitOperationsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListUnitOperationsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetUnitOperationRequest. */
                    interface IGetUnitOperationRequest {

                        /** GetUnitOperationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetUnitOperationRequest. */
                    class GetUnitOperationRequest implements IGetUnitOperationRequest {

                        /**
                         * Constructs a new GetUnitOperationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitOperationRequest);

                        /** GetUnitOperationRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetUnitOperationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetUnitOperationRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitOperationRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest;

                        /**
                         * Encodes the specified GetUnitOperationRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest.verify|verify} messages.
                         * @param message GetUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetUnitOperationRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest.verify|verify} messages.
                         * @param message GetUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetUnitOperationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest;

                        /**
                         * Decodes a GetUnitOperationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest;

                        /**
                         * Verifies a GetUnitOperationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetUnitOperationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetUnitOperationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest;

                        /**
                         * Creates a plain object from a GetUnitOperationRequest message. Also converts values to other types if specified.
                         * @param message GetUnitOperationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetUnitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetUnitOperationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetUnitOperationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateUnitOperationRequest. */
                    interface ICreateUnitOperationRequest {

                        /** CreateUnitOperationRequest parent */
                        parent?: (string|null);

                        /** CreateUnitOperationRequest unitOperationId */
                        unitOperationId?: (string|null);

                        /** CreateUnitOperationRequest unitOperation */
                        unitOperation?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation|null);

                        /** CreateUnitOperationRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateUnitOperationRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateUnitOperationRequest. */
                    class CreateUnitOperationRequest implements ICreateUnitOperationRequest {

                        /**
                         * Constructs a new CreateUnitOperationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitOperationRequest);

                        /** CreateUnitOperationRequest parent. */
                        public parent: string;

                        /** CreateUnitOperationRequest unitOperationId. */
                        public unitOperationId: string;

                        /** CreateUnitOperationRequest unitOperation. */
                        public unitOperation?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation|null);

                        /** CreateUnitOperationRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateUnitOperationRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateUnitOperationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateUnitOperationRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitOperationRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest;

                        /**
                         * Encodes the specified CreateUnitOperationRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest.verify|verify} messages.
                         * @param message CreateUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateUnitOperationRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest.verify|verify} messages.
                         * @param message CreateUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateUnitOperationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest;

                        /**
                         * Decodes a CreateUnitOperationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest;

                        /**
                         * Verifies a CreateUnitOperationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateUnitOperationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateUnitOperationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest;

                        /**
                         * Creates a plain object from a CreateUnitOperationRequest message. Also converts values to other types if specified.
                         * @param message CreateUnitOperationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateUnitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateUnitOperationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateUnitOperationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateUnitOperationRequest. */
                    interface IUpdateUnitOperationRequest {

                        /** UpdateUnitOperationRequest unitOperation */
                        unitOperation?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation|null);

                        /** UpdateUnitOperationRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateUnitOperationRequest requestId */
                        requestId?: (string|null);

                        /** UpdateUnitOperationRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateUnitOperationRequest. */
                    class UpdateUnitOperationRequest implements IUpdateUnitOperationRequest {

                        /**
                         * Constructs a new UpdateUnitOperationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitOperationRequest);

                        /** UpdateUnitOperationRequest unitOperation. */
                        public unitOperation?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IUnitOperation|null);

                        /** UpdateUnitOperationRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateUnitOperationRequest requestId. */
                        public requestId: string;

                        /** UpdateUnitOperationRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateUnitOperationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateUnitOperationRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitOperationRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest;

                        /**
                         * Encodes the specified UpdateUnitOperationRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest.verify|verify} messages.
                         * @param message UpdateUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateUnitOperationRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest.verify|verify} messages.
                         * @param message UpdateUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateUnitOperationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest;

                        /**
                         * Decodes an UpdateUnitOperationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest;

                        /**
                         * Verifies an UpdateUnitOperationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateUnitOperationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateUnitOperationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest;

                        /**
                         * Creates a plain object from an UpdateUnitOperationRequest message. Also converts values to other types if specified.
                         * @param message UpdateUnitOperationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateUnitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateUnitOperationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateUnitOperationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteUnitOperationRequest. */
                    interface IDeleteUnitOperationRequest {

                        /** DeleteUnitOperationRequest name */
                        name?: (string|null);

                        /** DeleteUnitOperationRequest etag */
                        etag?: (string|null);

                        /** DeleteUnitOperationRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteUnitOperationRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteUnitOperationRequest. */
                    class DeleteUnitOperationRequest implements IDeleteUnitOperationRequest {

                        /**
                         * Constructs a new DeleteUnitOperationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitOperationRequest);

                        /** DeleteUnitOperationRequest name. */
                        public name: string;

                        /** DeleteUnitOperationRequest etag. */
                        public etag: string;

                        /** DeleteUnitOperationRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteUnitOperationRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteUnitOperationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteUnitOperationRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitOperationRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest;

                        /**
                         * Encodes the specified DeleteUnitOperationRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest.verify|verify} messages.
                         * @param message DeleteUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteUnitOperationRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest.verify|verify} messages.
                         * @param message DeleteUnitOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteUnitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteUnitOperationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest;

                        /**
                         * Decodes a DeleteUnitOperationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteUnitOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest;

                        /**
                         * Verifies a DeleteUnitOperationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteUnitOperationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteUnitOperationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest;

                        /**
                         * Creates a plain object from a DeleteUnitOperationRequest message. Also converts values to other types if specified.
                         * @param message DeleteUnitOperationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteUnitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteUnitOperationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteUnitOperationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReleasesRequest. */
                    interface IListReleasesRequest {

                        /** ListReleasesRequest parent */
                        parent?: (string|null);

                        /** ListReleasesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListReleasesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListReleasesRequest filter */
                        filter?: (string|null);

                        /** ListReleasesRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListReleasesRequest. */
                    class ListReleasesRequest implements IListReleasesRequest {

                        /**
                         * Constructs a new ListReleasesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesRequest);

                        /** ListReleasesRequest parent. */
                        public parent: string;

                        /** ListReleasesRequest pageSize. */
                        public pageSize: number;

                        /** ListReleasesRequest pageToken. */
                        public pageToken: string;

                        /** ListReleasesRequest filter. */
                        public filter: string;

                        /** ListReleasesRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListReleasesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReleasesRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest;

                        /**
                         * Encodes the specified ListReleasesRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest.verify|verify} messages.
                         * @param message ListReleasesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReleasesRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest.verify|verify} messages.
                         * @param message ListReleasesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReleasesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReleasesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest;

                        /**
                         * Decodes a ListReleasesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReleasesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest;

                        /**
                         * Verifies a ListReleasesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReleasesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReleasesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest;

                        /**
                         * Creates a plain object from a ListReleasesRequest message. Also converts values to other types if specified.
                         * @param message ListReleasesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReleasesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReleasesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListReleasesResponse. */
                    interface IListReleasesResponse {

                        /** ListReleasesResponse releases */
                        releases?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease[]|null);

                        /** ListReleasesResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListReleasesResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListReleasesResponse. */
                    class ListReleasesResponse implements IListReleasesResponse {

                        /**
                         * Constructs a new ListReleasesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesResponse);

                        /** ListReleasesResponse releases. */
                        public releases: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease[];

                        /** ListReleasesResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListReleasesResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListReleasesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReleasesResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse;

                        /**
                         * Encodes the specified ListReleasesResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse.verify|verify} messages.
                         * @param message ListReleasesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReleasesResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse.verify|verify} messages.
                         * @param message ListReleasesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListReleasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReleasesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReleasesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse;

                        /**
                         * Decodes a ListReleasesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReleasesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse;

                        /**
                         * Verifies a ListReleasesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReleasesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReleasesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse;

                        /**
                         * Creates a plain object from a ListReleasesResponse message. Also converts values to other types if specified.
                         * @param message ListReleasesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListReleasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReleasesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListReleasesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetReleaseRequest. */
                    interface IGetReleaseRequest {

                        /** GetReleaseRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetReleaseRequest. */
                    class GetReleaseRequest implements IGetReleaseRequest {

                        /**
                         * Constructs a new GetReleaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetReleaseRequest);

                        /** GetReleaseRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetReleaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetReleaseRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetReleaseRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest;

                        /**
                         * Encodes the specified GetReleaseRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest.verify|verify} messages.
                         * @param message GetReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetReleaseRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest.verify|verify} messages.
                         * @param message GetReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetReleaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest;

                        /**
                         * Decodes a GetReleaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest;

                        /**
                         * Verifies a GetReleaseRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetReleaseRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetReleaseRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest;

                        /**
                         * Creates a plain object from a GetReleaseRequest message. Also converts values to other types if specified.
                         * @param message GetReleaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetReleaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetReleaseRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetReleaseRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateReleaseRequest. */
                    interface ICreateReleaseRequest {

                        /** CreateReleaseRequest parent */
                        parent?: (string|null);

                        /** CreateReleaseRequest releaseId */
                        releaseId?: (string|null);

                        /** CreateReleaseRequest release */
                        release?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease|null);

                        /** CreateReleaseRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateReleaseRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateReleaseRequest. */
                    class CreateReleaseRequest implements ICreateReleaseRequest {

                        /**
                         * Constructs a new CreateReleaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateReleaseRequest);

                        /** CreateReleaseRequest parent. */
                        public parent: string;

                        /** CreateReleaseRequest releaseId. */
                        public releaseId: string;

                        /** CreateReleaseRequest release. */
                        public release?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease|null);

                        /** CreateReleaseRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateReleaseRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateReleaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateReleaseRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateReleaseRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest;

                        /**
                         * Encodes the specified CreateReleaseRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest.verify|verify} messages.
                         * @param message CreateReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateReleaseRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest.verify|verify} messages.
                         * @param message CreateReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateReleaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest;

                        /**
                         * Decodes a CreateReleaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest;

                        /**
                         * Verifies a CreateReleaseRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateReleaseRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateReleaseRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest;

                        /**
                         * Creates a plain object from a CreateReleaseRequest message. Also converts values to other types if specified.
                         * @param message CreateReleaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateReleaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateReleaseRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateReleaseRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateReleaseRequest. */
                    interface IUpdateReleaseRequest {

                        /** UpdateReleaseRequest release */
                        release?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease|null);

                        /** UpdateReleaseRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateReleaseRequest requestId */
                        requestId?: (string|null);

                        /** UpdateReleaseRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateReleaseRequest. */
                    class UpdateReleaseRequest implements IUpdateReleaseRequest {

                        /**
                         * Constructs a new UpdateReleaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateReleaseRequest);

                        /** UpdateReleaseRequest release. */
                        public release?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRelease|null);

                        /** UpdateReleaseRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateReleaseRequest requestId. */
                        public requestId: string;

                        /** UpdateReleaseRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateReleaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateReleaseRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateReleaseRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest;

                        /**
                         * Encodes the specified UpdateReleaseRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest.verify|verify} messages.
                         * @param message UpdateReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateReleaseRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest.verify|verify} messages.
                         * @param message UpdateReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateReleaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest;

                        /**
                         * Decodes an UpdateReleaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest;

                        /**
                         * Verifies an UpdateReleaseRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateReleaseRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateReleaseRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest;

                        /**
                         * Creates a plain object from an UpdateReleaseRequest message. Also converts values to other types if specified.
                         * @param message UpdateReleaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateReleaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateReleaseRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateReleaseRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteReleaseRequest. */
                    interface IDeleteReleaseRequest {

                        /** DeleteReleaseRequest name */
                        name?: (string|null);

                        /** DeleteReleaseRequest etag */
                        etag?: (string|null);

                        /** DeleteReleaseRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteReleaseRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteReleaseRequest. */
                    class DeleteReleaseRequest implements IDeleteReleaseRequest {

                        /**
                         * Constructs a new DeleteReleaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteReleaseRequest);

                        /** DeleteReleaseRequest name. */
                        public name: string;

                        /** DeleteReleaseRequest etag. */
                        public etag: string;

                        /** DeleteReleaseRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteReleaseRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteReleaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteReleaseRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteReleaseRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest;

                        /**
                         * Encodes the specified DeleteReleaseRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest.verify|verify} messages.
                         * @param message DeleteReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteReleaseRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest.verify|verify} messages.
                         * @param message DeleteReleaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteReleaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest;

                        /**
                         * Decodes a DeleteReleaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteReleaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest;

                        /**
                         * Verifies a DeleteReleaseRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteReleaseRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteReleaseRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest;

                        /**
                         * Creates a plain object from a DeleteReleaseRequest message. Also converts values to other types if specified.
                         * @param message DeleteReleaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteReleaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteReleaseRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteReleaseRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RolloutAction enum. */
                    enum RolloutAction {
                        ROLLOUT_ACTION_UNSPECIFIED = 0,
                        ROLLOUT_ACTION_RUN = 1,
                        ROLLOUT_ACTION_PAUSE = 2,
                        ROLLOUT_ACTION_CANCEL = 3
                    }

                    /** Properties of a Rollout. */
                    interface IRollout {

                        /** Rollout name */
                        name?: (string|null);

                        /** Rollout release */
                        release?: (string|null);

                        /** Rollout startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout endTime */
                        endTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout state */
                        state?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout.RolloutState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout.RolloutState|null);

                        /** Rollout stateMessage */
                        stateMessage?: (string|null);

                        /** Rollout stateTransitionTime */
                        stateTransitionTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout rootRollout */
                        rootRollout?: (string|null);

                        /** Rollout parentRollout */
                        parentRollout?: (string|null);

                        /** Rollout rolloutOrchestrationStrategy */
                        rolloutOrchestrationStrategy?: (string|null);

                        /** Rollout unitFilter */
                        unitFilter?: (string|null);

                        /** Rollout rolloutKind */
                        rolloutKind?: (string|null);

                        /** Rollout stats */
                        stats?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutStats|null);

                        /** Rollout control */
                        control?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutControl|null);

                        /** Rollout labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Rollout annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** Rollout uid */
                        uid?: (string|null);

                        /** Rollout etag */
                        etag?: (string|null);

                        /** Rollout createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Rollout. */
                    class Rollout implements IRollout {

                        /**
                         * Constructs a new Rollout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout);

                        /** Rollout name. */
                        public name: string;

                        /** Rollout release. */
                        public release: string;

                        /** Rollout startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout state. */
                        public state: (google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout.RolloutState|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout.RolloutState);

                        /** Rollout stateMessage. */
                        public stateMessage: string;

                        /** Rollout stateTransitionTime. */
                        public stateTransitionTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout rootRollout. */
                        public rootRollout: string;

                        /** Rollout parentRollout. */
                        public parentRollout: string;

                        /** Rollout rolloutOrchestrationStrategy. */
                        public rolloutOrchestrationStrategy: string;

                        /** Rollout unitFilter. */
                        public unitFilter: string;

                        /** Rollout rolloutKind. */
                        public rolloutKind: string;

                        /** Rollout stats. */
                        public stats?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutStats|null);

                        /** Rollout control. */
                        public control?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutControl|null);

                        /** Rollout labels. */
                        public labels: { [k: string]: string };

                        /** Rollout annotations. */
                        public annotations: { [k: string]: string };

                        /** Rollout uid. */
                        public uid: string;

                        /** Rollout etag. */
                        public etag: string;

                        /** Rollout createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Rollout updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Rollout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Rollout instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout): google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout;

                        /**
                         * Encodes the specified Rollout message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout.verify|verify} messages.
                         * @param message Rollout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Rollout message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout.verify|verify} messages.
                         * @param message Rollout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Rollout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Rollout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout;

                        /**
                         * Decodes a Rollout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Rollout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout;

                        /**
                         * Creates a plain object from a Rollout message. Also converts values to other types if specified.
                         * @param message Rollout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    namespace Rollout {

                        /** RolloutState enum. */
                        enum RolloutState {
                            ROLLOUT_STATE_UNSPECIFIED = 0,
                            ROLLOUT_STATE_RUNNING = 1,
                            ROLLOUT_STATE_PAUSED = 2,
                            ROLLOUT_STATE_SUCCEEDED = 3,
                            ROLLOUT_STATE_FAILED = 4,
                            ROLLOUT_STATE_CANCELLED = 5,
                            ROLLOUT_STATE_WAITING = 6,
                            ROLLOUT_STATE_CANCELLING = 7,
                            ROLLOUT_STATE_RESUMING = 8,
                            ROLLOUT_STATE_PAUSING = 9
                        }
                    }

                    /** Properties of a RolloutKind. */
                    interface IRolloutKind {

                        /** RolloutKind name */
                        name?: (string|null);

                        /** RolloutKind unitKind */
                        unitKind?: (string|null);

                        /** RolloutKind rolloutOrchestrationStrategy */
                        rolloutOrchestrationStrategy?: (string|null);

                        /** RolloutKind unitFilter */
                        unitFilter?: (string|null);

                        /** RolloutKind updateUnitKindStrategy */
                        updateUnitKindStrategy?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind.UpdateUnitKindStrategy|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind.UpdateUnitKindStrategy|null);

                        /** RolloutKind errorBudget */
                        errorBudget?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IErrorBudget|null);

                        /** RolloutKind labels */
                        labels?: ({ [k: string]: string }|null);

                        /** RolloutKind annotations */
                        annotations?: ({ [k: string]: string }|null);

                        /** RolloutKind uid */
                        uid?: (string|null);

                        /** RolloutKind etag */
                        etag?: (string|null);

                        /** RolloutKind createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** RolloutKind updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a RolloutKind. */
                    class RolloutKind implements IRolloutKind {

                        /**
                         * Constructs a new RolloutKind.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind);

                        /** RolloutKind name. */
                        public name: string;

                        /** RolloutKind unitKind. */
                        public unitKind: string;

                        /** RolloutKind rolloutOrchestrationStrategy. */
                        public rolloutOrchestrationStrategy: string;

                        /** RolloutKind unitFilter. */
                        public unitFilter: string;

                        /** RolloutKind updateUnitKindStrategy. */
                        public updateUnitKindStrategy: (google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind.UpdateUnitKindStrategy|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind.UpdateUnitKindStrategy);

                        /** RolloutKind errorBudget. */
                        public errorBudget?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IErrorBudget|null);

                        /** RolloutKind labels. */
                        public labels: { [k: string]: string };

                        /** RolloutKind annotations. */
                        public annotations: { [k: string]: string };

                        /** RolloutKind uid. */
                        public uid: string;

                        /** RolloutKind etag. */
                        public etag: string;

                        /** RolloutKind createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** RolloutKind updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new RolloutKind instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RolloutKind instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind;

                        /**
                         * Encodes the specified RolloutKind message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind.verify|verify} messages.
                         * @param message RolloutKind message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RolloutKind message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind.verify|verify} messages.
                         * @param message RolloutKind message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RolloutKind message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RolloutKind
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind;

                        /**
                         * Decodes a RolloutKind message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RolloutKind
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind;

                        /**
                         * Verifies a RolloutKind message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RolloutKind message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RolloutKind
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind;

                        /**
                         * Creates a plain object from a RolloutKind message. Also converts values to other types if specified.
                         * @param message RolloutKind
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RolloutKind to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RolloutKind
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RolloutKind {

                        /** UpdateUnitKindStrategy enum. */
                        enum UpdateUnitKindStrategy {
                            UPDATE_UNIT_KIND_STRATEGY_UNSPECIFIED = 0,
                            UPDATE_UNIT_KIND_STRATEGY_ON_START = 1,
                            UPDATE_UNIT_KIND_STRATEGY_NEVER = 2
                        }
                    }

                    /** Properties of an ErrorBudget. */
                    interface IErrorBudget {

                        /** ErrorBudget allowedCount */
                        allowedCount?: (number|null);

                        /** ErrorBudget allowedPercentage */
                        allowedPercentage?: (number|null);
                    }

                    /** Represents an ErrorBudget. */
                    class ErrorBudget implements IErrorBudget {

                        /**
                         * Constructs a new ErrorBudget.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IErrorBudget);

                        /** ErrorBudget allowedCount. */
                        public allowedCount: number;

                        /** ErrorBudget allowedPercentage. */
                        public allowedPercentage: number;

                        /**
                         * Creates a new ErrorBudget instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ErrorBudget instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IErrorBudget): google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget;

                        /**
                         * Encodes the specified ErrorBudget message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget.verify|verify} messages.
                         * @param message ErrorBudget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IErrorBudget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ErrorBudget message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget.verify|verify} messages.
                         * @param message ErrorBudget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IErrorBudget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ErrorBudget message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ErrorBudget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget;

                        /**
                         * Decodes an ErrorBudget message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ErrorBudget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget;

                        /**
                         * Verifies an ErrorBudget message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ErrorBudget message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ErrorBudget
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget;

                        /**
                         * Creates a plain object from an ErrorBudget message. Also converts values to other types if specified.
                         * @param message ErrorBudget
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ErrorBudget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ErrorBudget to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ErrorBudget
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RolloutStats. */
                    interface IRolloutStats {

                        /** RolloutStats operationsByState */
                        operationsByState?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IAggregate[]|null);
                    }

                    /** Represents a RolloutStats. */
                    class RolloutStats implements IRolloutStats {

                        /**
                         * Constructs a new RolloutStats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutStats);

                        /** RolloutStats operationsByState. */
                        public operationsByState: google.cloud.saasplatform.saasservicemgmt.v1beta1.IAggregate[];

                        /**
                         * Creates a new RolloutStats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RolloutStats instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutStats): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats;

                        /**
                         * Encodes the specified RolloutStats message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats.verify|verify} messages.
                         * @param message RolloutStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RolloutStats message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats.verify|verify} messages.
                         * @param message RolloutStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RolloutStats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RolloutStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats;

                        /**
                         * Decodes a RolloutStats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RolloutStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats;

                        /**
                         * Verifies a RolloutStats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RolloutStats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RolloutStats
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats;

                        /**
                         * Creates a plain object from a RolloutStats message. Also converts values to other types if specified.
                         * @param message RolloutStats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RolloutStats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RolloutStats
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RolloutControl. */
                    interface IRolloutControl {

                        /** RolloutControl runParams */
                        runParams?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.IRunRolloutActionParams|null);

                        /** RolloutControl action */
                        action?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutAction|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutAction|null);
                    }

                    /** Represents a RolloutControl. */
                    class RolloutControl implements IRolloutControl {

                        /**
                         * Constructs a new RolloutControl.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutControl);

                        /** RolloutControl runParams. */
                        public runParams?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.IRunRolloutActionParams|null);

                        /** RolloutControl action. */
                        public action: (google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutAction|keyof typeof google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutAction);

                        /** RolloutControl actionParams. */
                        public actionParams?: "runParams";

                        /**
                         * Creates a new RolloutControl instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RolloutControl instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutControl): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl;

                        /**
                         * Encodes the specified RolloutControl message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.verify|verify} messages.
                         * @param message RolloutControl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutControl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RolloutControl message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.verify|verify} messages.
                         * @param message RolloutControl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutControl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RolloutControl message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RolloutControl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl;

                        /**
                         * Decodes a RolloutControl message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RolloutControl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl;

                        /**
                         * Verifies a RolloutControl message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RolloutControl message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RolloutControl
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl;

                        /**
                         * Creates a plain object from a RolloutControl message. Also converts values to other types if specified.
                         * @param message RolloutControl
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RolloutControl to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RolloutControl
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RolloutControl {

                        /** Properties of a RunRolloutActionParams. */
                        interface IRunRolloutActionParams {

                            /** RunRolloutActionParams retryFailedOperations */
                            retryFailedOperations?: (boolean|null);
                        }

                        /** Represents a RunRolloutActionParams. */
                        class RunRolloutActionParams implements IRunRolloutActionParams {

                            /**
                             * Constructs a new RunRolloutActionParams.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.IRunRolloutActionParams);

                            /** RunRolloutActionParams retryFailedOperations. */
                            public retryFailedOperations: boolean;

                            /**
                             * Creates a new RunRolloutActionParams instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RunRolloutActionParams instance
                             */
                            public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.IRunRolloutActionParams): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams;

                            /**
                             * Encodes the specified RunRolloutActionParams message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams.verify|verify} messages.
                             * @param message RunRolloutActionParams message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.IRunRolloutActionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RunRolloutActionParams message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams.verify|verify} messages.
                             * @param message RunRolloutActionParams message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.IRunRolloutActionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RunRolloutActionParams message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RunRolloutActionParams
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams;

                            /**
                             * Decodes a RunRolloutActionParams message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RunRolloutActionParams
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams;

                            /**
                             * Verifies a RunRolloutActionParams message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RunRolloutActionParams message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RunRolloutActionParams
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams;

                            /**
                             * Creates a plain object from a RunRolloutActionParams message. Also converts values to other types if specified.
                             * @param message RunRolloutActionParams
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutControl.RunRolloutActionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RunRolloutActionParams to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RunRolloutActionParams
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Represents a SaasRollouts */
                    class SaasRollouts extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new SaasRollouts service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new SaasRollouts service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SaasRollouts;

                        /**
                         * Calls ListRollouts.
                         * @param request ListRolloutsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListRolloutsResponse
                         */
                        public listRollouts(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.ListRolloutsCallback): void;

                        /**
                         * Calls ListRollouts.
                         * @param request ListRolloutsRequest message or plain object
                         * @returns Promise
                         */
                        public listRollouts(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse>;

                        /**
                         * Calls GetRollout.
                         * @param request GetRolloutRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Rollout
                         */
                        public getRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.GetRolloutCallback): void;

                        /**
                         * Calls GetRollout.
                         * @param request GetRolloutRequest message or plain object
                         * @returns Promise
                         */
                        public getRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout>;

                        /**
                         * Calls CreateRollout.
                         * @param request CreateRolloutRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Rollout
                         */
                        public createRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.CreateRolloutCallback): void;

                        /**
                         * Calls CreateRollout.
                         * @param request CreateRolloutRequest message or plain object
                         * @returns Promise
                         */
                        public createRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout>;

                        /**
                         * Calls UpdateRollout.
                         * @param request UpdateRolloutRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Rollout
                         */
                        public updateRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.UpdateRolloutCallback): void;

                        /**
                         * Calls UpdateRollout.
                         * @param request UpdateRolloutRequest message or plain object
                         * @returns Promise
                         */
                        public updateRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout>;

                        /**
                         * Calls DeleteRollout.
                         * @param request DeleteRolloutRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.DeleteRolloutCallback): void;

                        /**
                         * Calls DeleteRollout.
                         * @param request DeleteRolloutRequest message or plain object
                         * @returns Promise
                         */
                        public deleteRollout(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListRolloutKinds.
                         * @param request ListRolloutKindsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListRolloutKindsResponse
                         */
                        public listRolloutKinds(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.ListRolloutKindsCallback): void;

                        /**
                         * Calls ListRolloutKinds.
                         * @param request ListRolloutKindsRequest message or plain object
                         * @returns Promise
                         */
                        public listRolloutKinds(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse>;

                        /**
                         * Calls GetRolloutKind.
                         * @param request GetRolloutKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RolloutKind
                         */
                        public getRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.GetRolloutKindCallback): void;

                        /**
                         * Calls GetRolloutKind.
                         * @param request GetRolloutKindRequest message or plain object
                         * @returns Promise
                         */
                        public getRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutKindRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind>;

                        /**
                         * Calls CreateRolloutKind.
                         * @param request CreateRolloutKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RolloutKind
                         */
                        public createRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.CreateRolloutKindCallback): void;

                        /**
                         * Calls CreateRolloutKind.
                         * @param request CreateRolloutKindRequest message or plain object
                         * @returns Promise
                         */
                        public createRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutKindRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind>;

                        /**
                         * Calls UpdateRolloutKind.
                         * @param request UpdateRolloutKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RolloutKind
                         */
                        public updateRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.UpdateRolloutKindCallback): void;

                        /**
                         * Calls UpdateRolloutKind.
                         * @param request UpdateRolloutKindRequest message or plain object
                         * @returns Promise
                         */
                        public updateRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutKindRequest): Promise<google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind>;

                        /**
                         * Calls DeleteRolloutKind.
                         * @param request DeleteRolloutKindRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutKindRequest, callback: google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts.DeleteRolloutKindCallback): void;

                        /**
                         * Calls DeleteRolloutKind.
                         * @param request DeleteRolloutKindRequest message or plain object
                         * @returns Promise
                         */
                        public deleteRolloutKind(request: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutKindRequest): Promise<google.protobuf.Empty>;
                    }

                    namespace SaasRollouts {

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|listRollouts}.
                         * @param error Error, if any
                         * @param [response] ListRolloutsResponse
                         */
                        type ListRolloutsCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|getRollout}.
                         * @param error Error, if any
                         * @param [response] Rollout
                         */
                        type GetRolloutCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|createRollout}.
                         * @param error Error, if any
                         * @param [response] Rollout
                         */
                        type CreateRolloutCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|updateRollout}.
                         * @param error Error, if any
                         * @param [response] Rollout
                         */
                        type UpdateRolloutCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.Rollout) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|deleteRollout}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteRolloutCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|listRolloutKinds}.
                         * @param error Error, if any
                         * @param [response] ListRolloutKindsResponse
                         */
                        type ListRolloutKindsCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|getRolloutKind}.
                         * @param error Error, if any
                         * @param [response] RolloutKind
                         */
                        type GetRolloutKindCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|createRolloutKind}.
                         * @param error Error, if any
                         * @param [response] RolloutKind
                         */
                        type CreateRolloutKindCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|updateRolloutKind}.
                         * @param error Error, if any
                         * @param [response] RolloutKind
                         */
                        type UpdateRolloutKindCallback = (error: (Error|null), response?: google.cloud.saasplatform.saasservicemgmt.v1beta1.RolloutKind) => void;

                        /**
                         * Callback as used by {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.SaasRollouts|deleteRolloutKind}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteRolloutKindCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                    }

                    /** Properties of a ListRolloutsRequest. */
                    interface IListRolloutsRequest {

                        /** ListRolloutsRequest parent */
                        parent?: (string|null);

                        /** ListRolloutsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListRolloutsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListRolloutsRequest filter */
                        filter?: (string|null);

                        /** ListRolloutsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListRolloutsRequest. */
                    class ListRolloutsRequest implements IListRolloutsRequest {

                        /**
                         * Constructs a new ListRolloutsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsRequest);

                        /** ListRolloutsRequest parent. */
                        public parent: string;

                        /** ListRolloutsRequest pageSize. */
                        public pageSize: number;

                        /** ListRolloutsRequest pageToken. */
                        public pageToken: string;

                        /** ListRolloutsRequest filter. */
                        public filter: string;

                        /** ListRolloutsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListRolloutsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListRolloutsRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest;

                        /**
                         * Encodes the specified ListRolloutsRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest.verify|verify} messages.
                         * @param message ListRolloutsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListRolloutsRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest.verify|verify} messages.
                         * @param message ListRolloutsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListRolloutsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListRolloutsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest;

                        /**
                         * Decodes a ListRolloutsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListRolloutsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest;

                        /**
                         * Verifies a ListRolloutsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListRolloutsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListRolloutsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest;

                        /**
                         * Creates a plain object from a ListRolloutsRequest message. Also converts values to other types if specified.
                         * @param message ListRolloutsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListRolloutsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListRolloutsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListRolloutsResponse. */
                    interface IListRolloutsResponse {

                        /** ListRolloutsResponse rollouts */
                        rollouts?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout[]|null);

                        /** ListRolloutsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListRolloutsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListRolloutsResponse. */
                    class ListRolloutsResponse implements IListRolloutsResponse {

                        /**
                         * Constructs a new ListRolloutsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsResponse);

                        /** ListRolloutsResponse rollouts. */
                        public rollouts: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout[];

                        /** ListRolloutsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListRolloutsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListRolloutsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListRolloutsResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse;

                        /**
                         * Encodes the specified ListRolloutsResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse.verify|verify} messages.
                         * @param message ListRolloutsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListRolloutsResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse.verify|verify} messages.
                         * @param message ListRolloutsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListRolloutsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListRolloutsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse;

                        /**
                         * Decodes a ListRolloutsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListRolloutsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse;

                        /**
                         * Verifies a ListRolloutsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListRolloutsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListRolloutsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse;

                        /**
                         * Creates a plain object from a ListRolloutsResponse message. Also converts values to other types if specified.
                         * @param message ListRolloutsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListRolloutsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListRolloutsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetRolloutRequest. */
                    interface IGetRolloutRequest {

                        /** GetRolloutRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetRolloutRequest. */
                    class GetRolloutRequest implements IGetRolloutRequest {

                        /**
                         * Constructs a new GetRolloutRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutRequest);

                        /** GetRolloutRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetRolloutRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetRolloutRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest;

                        /**
                         * Encodes the specified GetRolloutRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest.verify|verify} messages.
                         * @param message GetRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest.verify|verify} messages.
                         * @param message GetRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetRolloutRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest;

                        /**
                         * Decodes a GetRolloutRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest;

                        /**
                         * Verifies a GetRolloutRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetRolloutRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetRolloutRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest;

                        /**
                         * Creates a plain object from a GetRolloutRequest message. Also converts values to other types if specified.
                         * @param message GetRolloutRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetRolloutRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetRolloutRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateRolloutRequest. */
                    interface ICreateRolloutRequest {

                        /** CreateRolloutRequest parent */
                        parent?: (string|null);

                        /** CreateRolloutRequest rolloutId */
                        rolloutId?: (string|null);

                        /** CreateRolloutRequest rollout */
                        rollout?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout|null);

                        /** CreateRolloutRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateRolloutRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateRolloutRequest. */
                    class CreateRolloutRequest implements ICreateRolloutRequest {

                        /**
                         * Constructs a new CreateRolloutRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutRequest);

                        /** CreateRolloutRequest parent. */
                        public parent: string;

                        /** CreateRolloutRequest rolloutId. */
                        public rolloutId: string;

                        /** CreateRolloutRequest rollout. */
                        public rollout?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout|null);

                        /** CreateRolloutRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateRolloutRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateRolloutRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateRolloutRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest;

                        /**
                         * Encodes the specified CreateRolloutRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest.verify|verify} messages.
                         * @param message CreateRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest.verify|verify} messages.
                         * @param message CreateRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateRolloutRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest;

                        /**
                         * Decodes a CreateRolloutRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest;

                        /**
                         * Verifies a CreateRolloutRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateRolloutRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateRolloutRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest;

                        /**
                         * Creates a plain object from a CreateRolloutRequest message. Also converts values to other types if specified.
                         * @param message CreateRolloutRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateRolloutRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateRolloutRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateRolloutRequest. */
                    interface IUpdateRolloutRequest {

                        /** UpdateRolloutRequest rollout */
                        rollout?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout|null);

                        /** UpdateRolloutRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateRolloutRequest requestId */
                        requestId?: (string|null);

                        /** UpdateRolloutRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateRolloutRequest. */
                    class UpdateRolloutRequest implements IUpdateRolloutRequest {

                        /**
                         * Constructs a new UpdateRolloutRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutRequest);

                        /** UpdateRolloutRequest rollout. */
                        public rollout?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRollout|null);

                        /** UpdateRolloutRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateRolloutRequest requestId. */
                        public requestId: string;

                        /** UpdateRolloutRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateRolloutRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateRolloutRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest;

                        /**
                         * Encodes the specified UpdateRolloutRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest.verify|verify} messages.
                         * @param message UpdateRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest.verify|verify} messages.
                         * @param message UpdateRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateRolloutRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest;

                        /**
                         * Decodes an UpdateRolloutRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest;

                        /**
                         * Verifies an UpdateRolloutRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateRolloutRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateRolloutRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest;

                        /**
                         * Creates a plain object from an UpdateRolloutRequest message. Also converts values to other types if specified.
                         * @param message UpdateRolloutRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateRolloutRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateRolloutRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteRolloutRequest. */
                    interface IDeleteRolloutRequest {

                        /** DeleteRolloutRequest name */
                        name?: (string|null);

                        /** DeleteRolloutRequest etag */
                        etag?: (string|null);

                        /** DeleteRolloutRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteRolloutRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteRolloutRequest. */
                    class DeleteRolloutRequest implements IDeleteRolloutRequest {

                        /**
                         * Constructs a new DeleteRolloutRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutRequest);

                        /** DeleteRolloutRequest name. */
                        public name: string;

                        /** DeleteRolloutRequest etag. */
                        public etag: string;

                        /** DeleteRolloutRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteRolloutRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteRolloutRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteRolloutRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest;

                        /**
                         * Encodes the specified DeleteRolloutRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest.verify|verify} messages.
                         * @param message DeleteRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest.verify|verify} messages.
                         * @param message DeleteRolloutRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteRolloutRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest;

                        /**
                         * Decodes a DeleteRolloutRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteRolloutRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest;

                        /**
                         * Verifies a DeleteRolloutRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteRolloutRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteRolloutRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest;

                        /**
                         * Creates a plain object from a DeleteRolloutRequest message. Also converts values to other types if specified.
                         * @param message DeleteRolloutRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteRolloutRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteRolloutRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListRolloutKindsRequest. */
                    interface IListRolloutKindsRequest {

                        /** ListRolloutKindsRequest parent */
                        parent?: (string|null);

                        /** ListRolloutKindsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListRolloutKindsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListRolloutKindsRequest filter */
                        filter?: (string|null);

                        /** ListRolloutKindsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListRolloutKindsRequest. */
                    class ListRolloutKindsRequest implements IListRolloutKindsRequest {

                        /**
                         * Constructs a new ListRolloutKindsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsRequest);

                        /** ListRolloutKindsRequest parent. */
                        public parent: string;

                        /** ListRolloutKindsRequest pageSize. */
                        public pageSize: number;

                        /** ListRolloutKindsRequest pageToken. */
                        public pageToken: string;

                        /** ListRolloutKindsRequest filter. */
                        public filter: string;

                        /** ListRolloutKindsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListRolloutKindsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListRolloutKindsRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest;

                        /**
                         * Encodes the specified ListRolloutKindsRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest.verify|verify} messages.
                         * @param message ListRolloutKindsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListRolloutKindsRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest.verify|verify} messages.
                         * @param message ListRolloutKindsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListRolloutKindsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListRolloutKindsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest;

                        /**
                         * Decodes a ListRolloutKindsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListRolloutKindsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest;

                        /**
                         * Verifies a ListRolloutKindsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListRolloutKindsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListRolloutKindsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest;

                        /**
                         * Creates a plain object from a ListRolloutKindsRequest message. Also converts values to other types if specified.
                         * @param message ListRolloutKindsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListRolloutKindsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListRolloutKindsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListRolloutKindsResponse. */
                    interface IListRolloutKindsResponse {

                        /** ListRolloutKindsResponse rolloutKinds */
                        rolloutKinds?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind[]|null);

                        /** ListRolloutKindsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListRolloutKindsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListRolloutKindsResponse. */
                    class ListRolloutKindsResponse implements IListRolloutKindsResponse {

                        /**
                         * Constructs a new ListRolloutKindsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsResponse);

                        /** ListRolloutKindsResponse rolloutKinds. */
                        public rolloutKinds: google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind[];

                        /** ListRolloutKindsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListRolloutKindsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListRolloutKindsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListRolloutKindsResponse instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsResponse): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse;

                        /**
                         * Encodes the specified ListRolloutKindsResponse message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse.verify|verify} messages.
                         * @param message ListRolloutKindsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListRolloutKindsResponse message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse.verify|verify} messages.
                         * @param message ListRolloutKindsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IListRolloutKindsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListRolloutKindsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListRolloutKindsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse;

                        /**
                         * Decodes a ListRolloutKindsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListRolloutKindsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse;

                        /**
                         * Verifies a ListRolloutKindsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListRolloutKindsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListRolloutKindsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse;

                        /**
                         * Creates a plain object from a ListRolloutKindsResponse message. Also converts values to other types if specified.
                         * @param message ListRolloutKindsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ListRolloutKindsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListRolloutKindsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListRolloutKindsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetRolloutKindRequest. */
                    interface IGetRolloutKindRequest {

                        /** GetRolloutKindRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetRolloutKindRequest. */
                    class GetRolloutKindRequest implements IGetRolloutKindRequest {

                        /**
                         * Constructs a new GetRolloutKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutKindRequest);

                        /** GetRolloutKindRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetRolloutKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetRolloutKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest;

                        /**
                         * Encodes the specified GetRolloutKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest.verify|verify} messages.
                         * @param message GetRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetRolloutKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest.verify|verify} messages.
                         * @param message GetRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IGetRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetRolloutKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest;

                        /**
                         * Decodes a GetRolloutKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest;

                        /**
                         * Verifies a GetRolloutKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetRolloutKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetRolloutKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest;

                        /**
                         * Creates a plain object from a GetRolloutKindRequest message. Also converts values to other types if specified.
                         * @param message GetRolloutKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.GetRolloutKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetRolloutKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetRolloutKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateRolloutKindRequest. */
                    interface ICreateRolloutKindRequest {

                        /** CreateRolloutKindRequest parent */
                        parent?: (string|null);

                        /** CreateRolloutKindRequest rolloutKindId */
                        rolloutKindId?: (string|null);

                        /** CreateRolloutKindRequest rolloutKind */
                        rolloutKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind|null);

                        /** CreateRolloutKindRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** CreateRolloutKindRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a CreateRolloutKindRequest. */
                    class CreateRolloutKindRequest implements ICreateRolloutKindRequest {

                        /**
                         * Constructs a new CreateRolloutKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutKindRequest);

                        /** CreateRolloutKindRequest parent. */
                        public parent: string;

                        /** CreateRolloutKindRequest rolloutKindId. */
                        public rolloutKindId: string;

                        /** CreateRolloutKindRequest rolloutKind. */
                        public rolloutKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind|null);

                        /** CreateRolloutKindRequest validateOnly. */
                        public validateOnly: boolean;

                        /** CreateRolloutKindRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new CreateRolloutKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateRolloutKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest;

                        /**
                         * Encodes the specified CreateRolloutKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest.verify|verify} messages.
                         * @param message CreateRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateRolloutKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest.verify|verify} messages.
                         * @param message CreateRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.ICreateRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateRolloutKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest;

                        /**
                         * Decodes a CreateRolloutKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest;

                        /**
                         * Verifies a CreateRolloutKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateRolloutKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateRolloutKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest;

                        /**
                         * Creates a plain object from a CreateRolloutKindRequest message. Also converts values to other types if specified.
                         * @param message CreateRolloutKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.CreateRolloutKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateRolloutKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateRolloutKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateRolloutKindRequest. */
                    interface IUpdateRolloutKindRequest {

                        /** UpdateRolloutKindRequest rolloutKind */
                        rolloutKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind|null);

                        /** UpdateRolloutKindRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** UpdateRolloutKindRequest requestId */
                        requestId?: (string|null);

                        /** UpdateRolloutKindRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateRolloutKindRequest. */
                    class UpdateRolloutKindRequest implements IUpdateRolloutKindRequest {

                        /**
                         * Constructs a new UpdateRolloutKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutKindRequest);

                        /** UpdateRolloutKindRequest rolloutKind. */
                        public rolloutKind?: (google.cloud.saasplatform.saasservicemgmt.v1beta1.IRolloutKind|null);

                        /** UpdateRolloutKindRequest validateOnly. */
                        public validateOnly: boolean;

                        /** UpdateRolloutKindRequest requestId. */
                        public requestId: string;

                        /** UpdateRolloutKindRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateRolloutKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateRolloutKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest;

                        /**
                         * Encodes the specified UpdateRolloutKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest.verify|verify} messages.
                         * @param message UpdateRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateRolloutKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest.verify|verify} messages.
                         * @param message UpdateRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IUpdateRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateRolloutKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest;

                        /**
                         * Decodes an UpdateRolloutKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest;

                        /**
                         * Verifies an UpdateRolloutKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateRolloutKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateRolloutKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest;

                        /**
                         * Creates a plain object from an UpdateRolloutKindRequest message. Also converts values to other types if specified.
                         * @param message UpdateRolloutKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.UpdateRolloutKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateRolloutKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateRolloutKindRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteRolloutKindRequest. */
                    interface IDeleteRolloutKindRequest {

                        /** DeleteRolloutKindRequest name */
                        name?: (string|null);

                        /** DeleteRolloutKindRequest etag */
                        etag?: (string|null);

                        /** DeleteRolloutKindRequest validateOnly */
                        validateOnly?: (boolean|null);

                        /** DeleteRolloutKindRequest requestId */
                        requestId?: (string|null);
                    }

                    /** Represents a DeleteRolloutKindRequest. */
                    class DeleteRolloutKindRequest implements IDeleteRolloutKindRequest {

                        /**
                         * Constructs a new DeleteRolloutKindRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutKindRequest);

                        /** DeleteRolloutKindRequest name. */
                        public name: string;

                        /** DeleteRolloutKindRequest etag. */
                        public etag: string;

                        /** DeleteRolloutKindRequest validateOnly. */
                        public validateOnly: boolean;

                        /** DeleteRolloutKindRequest requestId. */
                        public requestId: string;

                        /**
                         * Creates a new DeleteRolloutKindRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteRolloutKindRequest instance
                         */
                        public static create(properties?: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutKindRequest): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest;

                        /**
                         * Encodes the specified DeleteRolloutKindRequest message. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest.verify|verify} messages.
                         * @param message DeleteRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteRolloutKindRequest message, length delimited. Does not implicitly {@link google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest.verify|verify} messages.
                         * @param message DeleteRolloutKindRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.IDeleteRolloutKindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteRolloutKindRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest;

                        /**
                         * Decodes a DeleteRolloutKindRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteRolloutKindRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest;

                        /**
                         * Verifies a DeleteRolloutKindRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteRolloutKindRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteRolloutKindRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest;

                        /**
                         * Creates a plain object from a DeleteRolloutKindRequest message. Also converts values to other types if specified.
                         * @param message DeleteRolloutKindRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.saasplatform.saasservicemgmt.v1beta1.DeleteRolloutKindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteRolloutKindRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteRolloutKindRequest
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

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);

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
}
