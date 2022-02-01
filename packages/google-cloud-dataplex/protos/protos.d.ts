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
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace dataplex. */
        namespace dataplex {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a DiscoveryEvent. */
                interface IDiscoveryEvent {

                    /** DiscoveryEvent message */
                    message?: (string|null);

                    /** DiscoveryEvent lakeId */
                    lakeId?: (string|null);

                    /** DiscoveryEvent zoneId */
                    zoneId?: (string|null);

                    /** DiscoveryEvent assetId */
                    assetId?: (string|null);

                    /** DiscoveryEvent dataLocation */
                    dataLocation?: (string|null);

                    /** DiscoveryEvent type */
                    type?: (google.cloud.dataplex.v1.DiscoveryEvent.EventType|keyof typeof google.cloud.dataplex.v1.DiscoveryEvent.EventType|null);

                    /** DiscoveryEvent config */
                    config?: (google.cloud.dataplex.v1.DiscoveryEvent.IConfigDetails|null);

                    /** DiscoveryEvent entity */
                    entity?: (google.cloud.dataplex.v1.DiscoveryEvent.IEntityDetails|null);

                    /** DiscoveryEvent partition */
                    partition?: (google.cloud.dataplex.v1.DiscoveryEvent.IPartitionDetails|null);

                    /** DiscoveryEvent action */
                    action?: (google.cloud.dataplex.v1.DiscoveryEvent.IActionDetails|null);
                }

                /** Represents a DiscoveryEvent. */
                class DiscoveryEvent implements IDiscoveryEvent {

                    /**
                     * Constructs a new DiscoveryEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IDiscoveryEvent);

                    /** DiscoveryEvent message. */
                    public message: string;

                    /** DiscoveryEvent lakeId. */
                    public lakeId: string;

                    /** DiscoveryEvent zoneId. */
                    public zoneId: string;

                    /** DiscoveryEvent assetId. */
                    public assetId: string;

                    /** DiscoveryEvent dataLocation. */
                    public dataLocation: string;

                    /** DiscoveryEvent type. */
                    public type: (google.cloud.dataplex.v1.DiscoveryEvent.EventType|keyof typeof google.cloud.dataplex.v1.DiscoveryEvent.EventType);

                    /** DiscoveryEvent config. */
                    public config?: (google.cloud.dataplex.v1.DiscoveryEvent.IConfigDetails|null);

                    /** DiscoveryEvent entity. */
                    public entity?: (google.cloud.dataplex.v1.DiscoveryEvent.IEntityDetails|null);

                    /** DiscoveryEvent partition. */
                    public partition?: (google.cloud.dataplex.v1.DiscoveryEvent.IPartitionDetails|null);

                    /** DiscoveryEvent action. */
                    public action?: (google.cloud.dataplex.v1.DiscoveryEvent.IActionDetails|null);

                    /** DiscoveryEvent details. */
                    public details?: ("config"|"entity"|"partition"|"action");

                    /**
                     * Creates a new DiscoveryEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiscoveryEvent instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IDiscoveryEvent): google.cloud.dataplex.v1.DiscoveryEvent;

                    /**
                     * Encodes the specified DiscoveryEvent message. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.verify|verify} messages.
                     * @param message DiscoveryEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IDiscoveryEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiscoveryEvent message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.verify|verify} messages.
                     * @param message DiscoveryEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IDiscoveryEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiscoveryEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiscoveryEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DiscoveryEvent;

                    /**
                     * Decodes a DiscoveryEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiscoveryEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DiscoveryEvent;

                    /**
                     * Verifies a DiscoveryEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiscoveryEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiscoveryEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DiscoveryEvent;

                    /**
                     * Creates a plain object from a DiscoveryEvent message. Also converts values to other types if specified.
                     * @param message DiscoveryEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.DiscoveryEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiscoveryEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DiscoveryEvent {

                    /** EventType enum. */
                    enum EventType {
                        EVENT_TYPE_UNSPECIFIED = 0,
                        CONFIG = 1,
                        ENTITY_CREATED = 2,
                        ENTITY_UPDATED = 3,
                        ENTITY_DELETED = 4,
                        PARTITION_CREATED = 5,
                        PARTITION_UPDATED = 6,
                        PARTITION_DELETED = 7
                    }

                    /** EntityType enum. */
                    enum EntityType {
                        ENTITY_TYPE_UNSPECIFIED = 0,
                        TABLE = 1,
                        FILESET = 2
                    }

                    /** Properties of a ConfigDetails. */
                    interface IConfigDetails {

                        /** ConfigDetails parameters */
                        parameters?: ({ [k: string]: string }|null);
                    }

                    /** Represents a ConfigDetails. */
                    class ConfigDetails implements IConfigDetails {

                        /**
                         * Constructs a new ConfigDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IConfigDetails);

                        /** ConfigDetails parameters. */
                        public parameters: { [k: string]: string };

                        /**
                         * Creates a new ConfigDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfigDetails instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IConfigDetails): google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails;

                        /**
                         * Encodes the specified ConfigDetails message. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails.verify|verify} messages.
                         * @param message ConfigDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.DiscoveryEvent.IConfigDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfigDetails message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails.verify|verify} messages.
                         * @param message ConfigDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.DiscoveryEvent.IConfigDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfigDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfigDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails;

                        /**
                         * Decodes a ConfigDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfigDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails;

                        /**
                         * Verifies a ConfigDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfigDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfigDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails;

                        /**
                         * Creates a plain object from a ConfigDetails message. Also converts values to other types if specified.
                         * @param message ConfigDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.DiscoveryEvent.ConfigDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfigDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EntityDetails. */
                    interface IEntityDetails {

                        /** EntityDetails entity */
                        entity?: (string|null);

                        /** EntityDetails type */
                        type?: (google.cloud.dataplex.v1.DiscoveryEvent.EntityType|keyof typeof google.cloud.dataplex.v1.DiscoveryEvent.EntityType|null);
                    }

                    /** Represents an EntityDetails. */
                    class EntityDetails implements IEntityDetails {

                        /**
                         * Constructs a new EntityDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IEntityDetails);

                        /** EntityDetails entity. */
                        public entity: string;

                        /** EntityDetails type. */
                        public type: (google.cloud.dataplex.v1.DiscoveryEvent.EntityType|keyof typeof google.cloud.dataplex.v1.DiscoveryEvent.EntityType);

                        /**
                         * Creates a new EntityDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EntityDetails instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IEntityDetails): google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails;

                        /**
                         * Encodes the specified EntityDetails message. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails.verify|verify} messages.
                         * @param message EntityDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.DiscoveryEvent.IEntityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EntityDetails message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails.verify|verify} messages.
                         * @param message EntityDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.DiscoveryEvent.IEntityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EntityDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EntityDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails;

                        /**
                         * Decodes an EntityDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EntityDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails;

                        /**
                         * Verifies an EntityDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EntityDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EntityDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails;

                        /**
                         * Creates a plain object from an EntityDetails message. Also converts values to other types if specified.
                         * @param message EntityDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.DiscoveryEvent.EntityDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EntityDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PartitionDetails. */
                    interface IPartitionDetails {

                        /** PartitionDetails partition */
                        partition?: (string|null);

                        /** PartitionDetails entity */
                        entity?: (string|null);

                        /** PartitionDetails type */
                        type?: (google.cloud.dataplex.v1.DiscoveryEvent.EntityType|keyof typeof google.cloud.dataplex.v1.DiscoveryEvent.EntityType|null);
                    }

                    /** Represents a PartitionDetails. */
                    class PartitionDetails implements IPartitionDetails {

                        /**
                         * Constructs a new PartitionDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IPartitionDetails);

                        /** PartitionDetails partition. */
                        public partition: string;

                        /** PartitionDetails entity. */
                        public entity: string;

                        /** PartitionDetails type. */
                        public type: (google.cloud.dataplex.v1.DiscoveryEvent.EntityType|keyof typeof google.cloud.dataplex.v1.DiscoveryEvent.EntityType);

                        /**
                         * Creates a new PartitionDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PartitionDetails instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IPartitionDetails): google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails;

                        /**
                         * Encodes the specified PartitionDetails message. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails.verify|verify} messages.
                         * @param message PartitionDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.DiscoveryEvent.IPartitionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PartitionDetails message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails.verify|verify} messages.
                         * @param message PartitionDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.DiscoveryEvent.IPartitionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PartitionDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PartitionDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails;

                        /**
                         * Decodes a PartitionDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PartitionDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails;

                        /**
                         * Verifies a PartitionDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PartitionDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PartitionDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails;

                        /**
                         * Creates a plain object from a PartitionDetails message. Also converts values to other types if specified.
                         * @param message PartitionDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.DiscoveryEvent.PartitionDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PartitionDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an ActionDetails. */
                    interface IActionDetails {

                        /** ActionDetails type */
                        type?: (string|null);
                    }

                    /** Represents an ActionDetails. */
                    class ActionDetails implements IActionDetails {

                        /**
                         * Constructs a new ActionDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IActionDetails);

                        /** ActionDetails type. */
                        public type: string;

                        /**
                         * Creates a new ActionDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionDetails instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.DiscoveryEvent.IActionDetails): google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails;

                        /**
                         * Encodes the specified ActionDetails message. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails.verify|verify} messages.
                         * @param message ActionDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.DiscoveryEvent.IActionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionDetails message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails.verify|verify} messages.
                         * @param message ActionDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.DiscoveryEvent.IActionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails;

                        /**
                         * Decodes an ActionDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails;

                        /**
                         * Verifies an ActionDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails;

                        /**
                         * Creates a plain object from an ActionDetails message. Also converts values to other types if specified.
                         * @param message ActionDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.DiscoveryEvent.ActionDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a JobEvent. */
                interface IJobEvent {

                    /** JobEvent message */
                    message?: (string|null);

                    /** JobEvent jobId */
                    jobId?: (string|null);

                    /** JobEvent startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** JobEvent endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** JobEvent state */
                    state?: (google.cloud.dataplex.v1.JobEvent.State|keyof typeof google.cloud.dataplex.v1.JobEvent.State|null);

                    /** JobEvent retries */
                    retries?: (number|null);

                    /** JobEvent type */
                    type?: (google.cloud.dataplex.v1.JobEvent.Type|keyof typeof google.cloud.dataplex.v1.JobEvent.Type|null);

                    /** JobEvent service */
                    service?: (google.cloud.dataplex.v1.JobEvent.Service|keyof typeof google.cloud.dataplex.v1.JobEvent.Service|null);

                    /** JobEvent serviceJob */
                    serviceJob?: (string|null);
                }

                /** Represents a JobEvent. */
                class JobEvent implements IJobEvent {

                    /**
                     * Constructs a new JobEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IJobEvent);

                    /** JobEvent message. */
                    public message: string;

                    /** JobEvent jobId. */
                    public jobId: string;

                    /** JobEvent startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** JobEvent endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** JobEvent state. */
                    public state: (google.cloud.dataplex.v1.JobEvent.State|keyof typeof google.cloud.dataplex.v1.JobEvent.State);

                    /** JobEvent retries. */
                    public retries: number;

                    /** JobEvent type. */
                    public type: (google.cloud.dataplex.v1.JobEvent.Type|keyof typeof google.cloud.dataplex.v1.JobEvent.Type);

                    /** JobEvent service. */
                    public service: (google.cloud.dataplex.v1.JobEvent.Service|keyof typeof google.cloud.dataplex.v1.JobEvent.Service);

                    /** JobEvent serviceJob. */
                    public serviceJob: string;

                    /**
                     * Creates a new JobEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobEvent instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IJobEvent): google.cloud.dataplex.v1.JobEvent;

                    /**
                     * Encodes the specified JobEvent message. Does not implicitly {@link google.cloud.dataplex.v1.JobEvent.verify|verify} messages.
                     * @param message JobEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IJobEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobEvent message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.JobEvent.verify|verify} messages.
                     * @param message JobEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IJobEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.JobEvent;

                    /**
                     * Decodes a JobEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.JobEvent;

                    /**
                     * Verifies a JobEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.JobEvent;

                    /**
                     * Creates a plain object from a JobEvent message. Also converts values to other types if specified.
                     * @param message JobEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.JobEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace JobEvent {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        SPARK = 1,
                        NOTEBOOK = 2
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2,
                        CANCELLED = 3,
                        ABORTED = 4
                    }

                    /** Service enum. */
                    enum Service {
                        SERVICE_UNSPECIFIED = 0,
                        DATAPROC = 1
                    }
                }

                /** Properties of a SessionEvent. */
                interface ISessionEvent {

                    /** SessionEvent message */
                    message?: (string|null);

                    /** SessionEvent userId */
                    userId?: (string|null);

                    /** SessionEvent sessionId */
                    sessionId?: (string|null);

                    /** SessionEvent type */
                    type?: (google.cloud.dataplex.v1.SessionEvent.EventType|keyof typeof google.cloud.dataplex.v1.SessionEvent.EventType|null);

                    /** SessionEvent query */
                    query?: (google.cloud.dataplex.v1.SessionEvent.IQueryDetail|null);
                }

                /** Represents a SessionEvent. */
                class SessionEvent implements ISessionEvent {

                    /**
                     * Constructs a new SessionEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ISessionEvent);

                    /** SessionEvent message. */
                    public message: string;

                    /** SessionEvent userId. */
                    public userId: string;

                    /** SessionEvent sessionId. */
                    public sessionId: string;

                    /** SessionEvent type. */
                    public type: (google.cloud.dataplex.v1.SessionEvent.EventType|keyof typeof google.cloud.dataplex.v1.SessionEvent.EventType);

                    /** SessionEvent query. */
                    public query?: (google.cloud.dataplex.v1.SessionEvent.IQueryDetail|null);

                    /** SessionEvent detail. */
                    public detail?: "query";

                    /**
                     * Creates a new SessionEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SessionEvent instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ISessionEvent): google.cloud.dataplex.v1.SessionEvent;

                    /**
                     * Encodes the specified SessionEvent message. Does not implicitly {@link google.cloud.dataplex.v1.SessionEvent.verify|verify} messages.
                     * @param message SessionEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ISessionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SessionEvent message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.SessionEvent.verify|verify} messages.
                     * @param message SessionEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ISessionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SessionEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SessionEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.SessionEvent;

                    /**
                     * Decodes a SessionEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SessionEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.SessionEvent;

                    /**
                     * Verifies a SessionEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SessionEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SessionEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.SessionEvent;

                    /**
                     * Creates a plain object from a SessionEvent message. Also converts values to other types if specified.
                     * @param message SessionEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.SessionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SessionEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SessionEvent {

                    /** EventType enum. */
                    enum EventType {
                        EVENT_TYPE_UNSPECIFIED = 0,
                        START = 1,
                        STOP = 2,
                        QUERY = 3
                    }

                    /** Properties of a QueryDetail. */
                    interface IQueryDetail {

                        /** QueryDetail queryId */
                        queryId?: (string|null);

                        /** QueryDetail queryText */
                        queryText?: (string|null);

                        /** QueryDetail engine */
                        engine?: (google.cloud.dataplex.v1.SessionEvent.QueryDetail.Engine|keyof typeof google.cloud.dataplex.v1.SessionEvent.QueryDetail.Engine|null);

                        /** QueryDetail duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** QueryDetail resultSizeBytes */
                        resultSizeBytes?: (number|Long|string|null);

                        /** QueryDetail dataProcessedBytes */
                        dataProcessedBytes?: (number|Long|string|null);
                    }

                    /** Represents a QueryDetail. */
                    class QueryDetail implements IQueryDetail {

                        /**
                         * Constructs a new QueryDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.SessionEvent.IQueryDetail);

                        /** QueryDetail queryId. */
                        public queryId: string;

                        /** QueryDetail queryText. */
                        public queryText: string;

                        /** QueryDetail engine. */
                        public engine: (google.cloud.dataplex.v1.SessionEvent.QueryDetail.Engine|keyof typeof google.cloud.dataplex.v1.SessionEvent.QueryDetail.Engine);

                        /** QueryDetail duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** QueryDetail resultSizeBytes. */
                        public resultSizeBytes: (number|Long|string);

                        /** QueryDetail dataProcessedBytes. */
                        public dataProcessedBytes: (number|Long|string);

                        /**
                         * Creates a new QueryDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueryDetail instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.SessionEvent.IQueryDetail): google.cloud.dataplex.v1.SessionEvent.QueryDetail;

                        /**
                         * Encodes the specified QueryDetail message. Does not implicitly {@link google.cloud.dataplex.v1.SessionEvent.QueryDetail.verify|verify} messages.
                         * @param message QueryDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.SessionEvent.IQueryDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QueryDetail message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.SessionEvent.QueryDetail.verify|verify} messages.
                         * @param message QueryDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.SessionEvent.IQueryDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueryDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueryDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.SessionEvent.QueryDetail;

                        /**
                         * Decodes a QueryDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QueryDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.SessionEvent.QueryDetail;

                        /**
                         * Verifies a QueryDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QueryDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QueryDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.SessionEvent.QueryDetail;

                        /**
                         * Creates a plain object from a QueryDetail message. Also converts values to other types if specified.
                         * @param message QueryDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.SessionEvent.QueryDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QueryDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace QueryDetail {

                        /** Engine enum. */
                        enum Engine {
                            ENGINE_UNSPECIFIED = 0,
                            SPARK_SQL = 1,
                            BIGQUERY = 2
                        }
                    }
                }

                /** Represents a MetadataService */
                class MetadataService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new MetadataService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new MetadataService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MetadataService;

                    /**
                     * Calls GetEntity.
                     * @param request GetEntityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Entity
                     */
                    public getEntity(request: google.cloud.dataplex.v1.IGetEntityRequest, callback: google.cloud.dataplex.v1.MetadataService.GetEntityCallback): void;

                    /**
                     * Calls GetEntity.
                     * @param request GetEntityRequest message or plain object
                     * @returns Promise
                     */
                    public getEntity(request: google.cloud.dataplex.v1.IGetEntityRequest): Promise<google.cloud.dataplex.v1.Entity>;

                    /**
                     * Calls ListEntities.
                     * @param request ListEntitiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEntitiesResponse
                     */
                    public listEntities(request: google.cloud.dataplex.v1.IListEntitiesRequest, callback: google.cloud.dataplex.v1.MetadataService.ListEntitiesCallback): void;

                    /**
                     * Calls ListEntities.
                     * @param request ListEntitiesRequest message or plain object
                     * @returns Promise
                     */
                    public listEntities(request: google.cloud.dataplex.v1.IListEntitiesRequest): Promise<google.cloud.dataplex.v1.ListEntitiesResponse>;

                    /**
                     * Calls GetPartition.
                     * @param request GetPartitionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Partition
                     */
                    public getPartition(request: google.cloud.dataplex.v1.IGetPartitionRequest, callback: google.cloud.dataplex.v1.MetadataService.GetPartitionCallback): void;

                    /**
                     * Calls GetPartition.
                     * @param request GetPartitionRequest message or plain object
                     * @returns Promise
                     */
                    public getPartition(request: google.cloud.dataplex.v1.IGetPartitionRequest): Promise<google.cloud.dataplex.v1.Partition>;

                    /**
                     * Calls ListPartitions.
                     * @param request ListPartitionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPartitionsResponse
                     */
                    public listPartitions(request: google.cloud.dataplex.v1.IListPartitionsRequest, callback: google.cloud.dataplex.v1.MetadataService.ListPartitionsCallback): void;

                    /**
                     * Calls ListPartitions.
                     * @param request ListPartitionsRequest message or plain object
                     * @returns Promise
                     */
                    public listPartitions(request: google.cloud.dataplex.v1.IListPartitionsRequest): Promise<google.cloud.dataplex.v1.ListPartitionsResponse>;
                }

                namespace MetadataService {

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.MetadataService#getEntity}.
                     * @param error Error, if any
                     * @param [response] Entity
                     */
                    type GetEntityCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Entity) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.MetadataService#listEntities}.
                     * @param error Error, if any
                     * @param [response] ListEntitiesResponse
                     */
                    type ListEntitiesCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListEntitiesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.MetadataService#getPartition}.
                     * @param error Error, if any
                     * @param [response] Partition
                     */
                    type GetPartitionCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Partition) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.MetadataService#listPartitions}.
                     * @param error Error, if any
                     * @param [response] ListPartitionsResponse
                     */
                    type ListPartitionsCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListPartitionsResponse) => void;
                }

                /** Properties of a ListEntitiesRequest. */
                interface IListEntitiesRequest {

                    /** ListEntitiesRequest parent */
                    parent?: (string|null);

                    /** ListEntitiesRequest view */
                    view?: (google.cloud.dataplex.v1.ListEntitiesRequest.EntityView|keyof typeof google.cloud.dataplex.v1.ListEntitiesRequest.EntityView|null);

                    /** ListEntitiesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEntitiesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEntitiesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListEntitiesRequest. */
                class ListEntitiesRequest implements IListEntitiesRequest {

                    /**
                     * Constructs a new ListEntitiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListEntitiesRequest);

                    /** ListEntitiesRequest parent. */
                    public parent: string;

                    /** ListEntitiesRequest view. */
                    public view: (google.cloud.dataplex.v1.ListEntitiesRequest.EntityView|keyof typeof google.cloud.dataplex.v1.ListEntitiesRequest.EntityView);

                    /** ListEntitiesRequest pageSize. */
                    public pageSize: number;

                    /** ListEntitiesRequest pageToken. */
                    public pageToken: string;

                    /** ListEntitiesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListEntitiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntitiesRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListEntitiesRequest): google.cloud.dataplex.v1.ListEntitiesRequest;

                    /**
                     * Encodes the specified ListEntitiesRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListEntitiesRequest.verify|verify} messages.
                     * @param message ListEntitiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntitiesRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListEntitiesRequest.verify|verify} messages.
                     * @param message ListEntitiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntitiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntitiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListEntitiesRequest;

                    /**
                     * Decodes a ListEntitiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntitiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListEntitiesRequest;

                    /**
                     * Verifies a ListEntitiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntitiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntitiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListEntitiesRequest;

                    /**
                     * Creates a plain object from a ListEntitiesRequest message. Also converts values to other types if specified.
                     * @param message ListEntitiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListEntitiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntitiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListEntitiesRequest {

                    /** EntityView enum. */
                    enum EntityView {
                        ENTITY_VIEW_UNSPECIFIED = 0,
                        TABLES = 1,
                        FILESETS = 2
                    }
                }

                /** Properties of a ListEntitiesResponse. */
                interface IListEntitiesResponse {

                    /** ListEntitiesResponse entities */
                    entities?: (google.cloud.dataplex.v1.IEntity[]|null);

                    /** ListEntitiesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEntitiesResponse. */
                class ListEntitiesResponse implements IListEntitiesResponse {

                    /**
                     * Constructs a new ListEntitiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListEntitiesResponse);

                    /** ListEntitiesResponse entities. */
                    public entities: google.cloud.dataplex.v1.IEntity[];

                    /** ListEntitiesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEntitiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntitiesResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListEntitiesResponse): google.cloud.dataplex.v1.ListEntitiesResponse;

                    /**
                     * Encodes the specified ListEntitiesResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListEntitiesResponse.verify|verify} messages.
                     * @param message ListEntitiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListEntitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntitiesResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListEntitiesResponse.verify|verify} messages.
                     * @param message ListEntitiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListEntitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntitiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntitiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListEntitiesResponse;

                    /**
                     * Decodes a ListEntitiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntitiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListEntitiesResponse;

                    /**
                     * Verifies a ListEntitiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntitiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntitiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListEntitiesResponse;

                    /**
                     * Creates a plain object from a ListEntitiesResponse message. Also converts values to other types if specified.
                     * @param message ListEntitiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListEntitiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntitiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEntityRequest. */
                interface IGetEntityRequest {

                    /** GetEntityRequest name */
                    name?: (string|null);

                    /** GetEntityRequest view */
                    view?: (google.cloud.dataplex.v1.GetEntityRequest.EntityView|keyof typeof google.cloud.dataplex.v1.GetEntityRequest.EntityView|null);
                }

                /** Represents a GetEntityRequest. */
                class GetEntityRequest implements IGetEntityRequest {

                    /**
                     * Constructs a new GetEntityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetEntityRequest);

                    /** GetEntityRequest name. */
                    public name: string;

                    /** GetEntityRequest view. */
                    public view: (google.cloud.dataplex.v1.GetEntityRequest.EntityView|keyof typeof google.cloud.dataplex.v1.GetEntityRequest.EntityView);

                    /**
                     * Creates a new GetEntityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEntityRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetEntityRequest): google.cloud.dataplex.v1.GetEntityRequest;

                    /**
                     * Encodes the specified GetEntityRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetEntityRequest.verify|verify} messages.
                     * @param message GetEntityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEntityRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetEntityRequest.verify|verify} messages.
                     * @param message GetEntityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetEntityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEntityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEntityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetEntityRequest;

                    /**
                     * Decodes a GetEntityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEntityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetEntityRequest;

                    /**
                     * Verifies a GetEntityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEntityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEntityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetEntityRequest;

                    /**
                     * Creates a plain object from a GetEntityRequest message. Also converts values to other types if specified.
                     * @param message GetEntityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetEntityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEntityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GetEntityRequest {

                    /** EntityView enum. */
                    enum EntityView {
                        ENTITY_VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        SCHEMA = 2,
                        FULL = 4
                    }
                }

                /** Properties of a ListPartitionsRequest. */
                interface IListPartitionsRequest {

                    /** ListPartitionsRequest parent */
                    parent?: (string|null);

                    /** ListPartitionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPartitionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPartitionsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPartitionsRequest. */
                class ListPartitionsRequest implements IListPartitionsRequest {

                    /**
                     * Constructs a new ListPartitionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListPartitionsRequest);

                    /** ListPartitionsRequest parent. */
                    public parent: string;

                    /** ListPartitionsRequest pageSize. */
                    public pageSize: number;

                    /** ListPartitionsRequest pageToken. */
                    public pageToken: string;

                    /** ListPartitionsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPartitionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPartitionsRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListPartitionsRequest): google.cloud.dataplex.v1.ListPartitionsRequest;

                    /**
                     * Encodes the specified ListPartitionsRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListPartitionsRequest.verify|verify} messages.
                     * @param message ListPartitionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListPartitionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPartitionsRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListPartitionsRequest.verify|verify} messages.
                     * @param message ListPartitionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListPartitionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPartitionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPartitionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListPartitionsRequest;

                    /**
                     * Decodes a ListPartitionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPartitionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListPartitionsRequest;

                    /**
                     * Verifies a ListPartitionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPartitionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPartitionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListPartitionsRequest;

                    /**
                     * Creates a plain object from a ListPartitionsRequest message. Also converts values to other types if specified.
                     * @param message ListPartitionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListPartitionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPartitionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPartitionsResponse. */
                interface IListPartitionsResponse {

                    /** ListPartitionsResponse partitions */
                    partitions?: (google.cloud.dataplex.v1.IPartition[]|null);

                    /** ListPartitionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPartitionsResponse. */
                class ListPartitionsResponse implements IListPartitionsResponse {

                    /**
                     * Constructs a new ListPartitionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListPartitionsResponse);

                    /** ListPartitionsResponse partitions. */
                    public partitions: google.cloud.dataplex.v1.IPartition[];

                    /** ListPartitionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPartitionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPartitionsResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListPartitionsResponse): google.cloud.dataplex.v1.ListPartitionsResponse;

                    /**
                     * Encodes the specified ListPartitionsResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListPartitionsResponse.verify|verify} messages.
                     * @param message ListPartitionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListPartitionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPartitionsResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListPartitionsResponse.verify|verify} messages.
                     * @param message ListPartitionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListPartitionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPartitionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPartitionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListPartitionsResponse;

                    /**
                     * Decodes a ListPartitionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPartitionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListPartitionsResponse;

                    /**
                     * Verifies a ListPartitionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPartitionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPartitionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListPartitionsResponse;

                    /**
                     * Creates a plain object from a ListPartitionsResponse message. Also converts values to other types if specified.
                     * @param message ListPartitionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListPartitionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPartitionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPartitionRequest. */
                interface IGetPartitionRequest {

                    /** GetPartitionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPartitionRequest. */
                class GetPartitionRequest implements IGetPartitionRequest {

                    /**
                     * Constructs a new GetPartitionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetPartitionRequest);

                    /** GetPartitionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPartitionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPartitionRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetPartitionRequest): google.cloud.dataplex.v1.GetPartitionRequest;

                    /**
                     * Encodes the specified GetPartitionRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetPartitionRequest.verify|verify} messages.
                     * @param message GetPartitionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetPartitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPartitionRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetPartitionRequest.verify|verify} messages.
                     * @param message GetPartitionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetPartitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPartitionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPartitionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetPartitionRequest;

                    /**
                     * Decodes a GetPartitionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPartitionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetPartitionRequest;

                    /**
                     * Verifies a GetPartitionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPartitionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPartitionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetPartitionRequest;

                    /**
                     * Creates a plain object from a GetPartitionRequest message. Also converts values to other types if specified.
                     * @param message GetPartitionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetPartitionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPartitionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Entity. */
                interface IEntity {

                    /** Entity name */
                    name?: (string|null);

                    /** Entity displayName */
                    displayName?: (string|null);

                    /** Entity description */
                    description?: (string|null);

                    /** Entity createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Entity updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Entity id */
                    id?: (string|null);

                    /** Entity etag */
                    etag?: (string|null);

                    /** Entity type */
                    type?: (google.cloud.dataplex.v1.Entity.Type|keyof typeof google.cloud.dataplex.v1.Entity.Type|null);

                    /** Entity asset */
                    asset?: (string|null);

                    /** Entity dataPath */
                    dataPath?: (string|null);

                    /** Entity dataPathPattern */
                    dataPathPattern?: (string|null);

                    /** Entity catalogEntry */
                    catalogEntry?: (string|null);

                    /** Entity system */
                    system?: (google.cloud.dataplex.v1.StorageSystem|keyof typeof google.cloud.dataplex.v1.StorageSystem|null);

                    /** Entity format */
                    format?: (google.cloud.dataplex.v1.IStorageFormat|null);

                    /** Entity compatibility */
                    compatibility?: (google.cloud.dataplex.v1.Entity.ICompatibilityStatus|null);

                    /** Entity schema */
                    schema?: (google.cloud.dataplex.v1.ISchema|null);
                }

                /** Represents an Entity. */
                class Entity implements IEntity {

                    /**
                     * Constructs a new Entity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IEntity);

                    /** Entity name. */
                    public name: string;

                    /** Entity displayName. */
                    public displayName: string;

                    /** Entity description. */
                    public description: string;

                    /** Entity createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Entity updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Entity id. */
                    public id: string;

                    /** Entity etag. */
                    public etag: string;

                    /** Entity type. */
                    public type: (google.cloud.dataplex.v1.Entity.Type|keyof typeof google.cloud.dataplex.v1.Entity.Type);

                    /** Entity asset. */
                    public asset: string;

                    /** Entity dataPath. */
                    public dataPath: string;

                    /** Entity dataPathPattern. */
                    public dataPathPattern: string;

                    /** Entity catalogEntry. */
                    public catalogEntry: string;

                    /** Entity system. */
                    public system: (google.cloud.dataplex.v1.StorageSystem|keyof typeof google.cloud.dataplex.v1.StorageSystem);

                    /** Entity format. */
                    public format?: (google.cloud.dataplex.v1.IStorageFormat|null);

                    /** Entity compatibility. */
                    public compatibility?: (google.cloud.dataplex.v1.Entity.ICompatibilityStatus|null);

                    /** Entity schema. */
                    public schema?: (google.cloud.dataplex.v1.ISchema|null);

                    /**
                     * Creates a new Entity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entity instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IEntity): google.cloud.dataplex.v1.Entity;

                    /**
                     * Encodes the specified Entity message. Does not implicitly {@link google.cloud.dataplex.v1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Entity;

                    /**
                     * Decodes an Entity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Entity;

                    /**
                     * Verifies an Entity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Entity;

                    /**
                     * Creates a plain object from an Entity message. Also converts values to other types if specified.
                     * @param message Entity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Entity {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        TABLE = 1,
                        FILESET = 2
                    }

                    /** Properties of a CompatibilityStatus. */
                    interface ICompatibilityStatus {

                        /** CompatibilityStatus hiveMetastore */
                        hiveMetastore?: (google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility|null);

                        /** CompatibilityStatus bigquery */
                        bigquery?: (google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility|null);
                    }

                    /** Represents a CompatibilityStatus. */
                    class CompatibilityStatus implements ICompatibilityStatus {

                        /**
                         * Constructs a new CompatibilityStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Entity.ICompatibilityStatus);

                        /** CompatibilityStatus hiveMetastore. */
                        public hiveMetastore?: (google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility|null);

                        /** CompatibilityStatus bigquery. */
                        public bigquery?: (google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility|null);

                        /**
                         * Creates a new CompatibilityStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompatibilityStatus instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Entity.ICompatibilityStatus): google.cloud.dataplex.v1.Entity.CompatibilityStatus;

                        /**
                         * Encodes the specified CompatibilityStatus message. Does not implicitly {@link google.cloud.dataplex.v1.Entity.CompatibilityStatus.verify|verify} messages.
                         * @param message CompatibilityStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Entity.ICompatibilityStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompatibilityStatus message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Entity.CompatibilityStatus.verify|verify} messages.
                         * @param message CompatibilityStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Entity.ICompatibilityStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompatibilityStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompatibilityStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Entity.CompatibilityStatus;

                        /**
                         * Decodes a CompatibilityStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompatibilityStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Entity.CompatibilityStatus;

                        /**
                         * Verifies a CompatibilityStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompatibilityStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompatibilityStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Entity.CompatibilityStatus;

                        /**
                         * Creates a plain object from a CompatibilityStatus message. Also converts values to other types if specified.
                         * @param message CompatibilityStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Entity.CompatibilityStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompatibilityStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace CompatibilityStatus {

                        /** Properties of a Compatibility. */
                        interface ICompatibility {

                            /** Compatibility compatible */
                            compatible?: (boolean|null);

                            /** Compatibility reason */
                            reason?: (string|null);
                        }

                        /** Represents a Compatibility. */
                        class Compatibility implements ICompatibility {

                            /**
                             * Constructs a new Compatibility.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility);

                            /** Compatibility compatible. */
                            public compatible: boolean;

                            /** Compatibility reason. */
                            public reason: string;

                            /**
                             * Creates a new Compatibility instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Compatibility instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility): google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility;

                            /**
                             * Encodes the specified Compatibility message. Does not implicitly {@link google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility.verify|verify} messages.
                             * @param message Compatibility message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Compatibility message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility.verify|verify} messages.
                             * @param message Compatibility message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Entity.CompatibilityStatus.ICompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Compatibility message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Compatibility
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility;

                            /**
                             * Decodes a Compatibility message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Compatibility
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility;

                            /**
                             * Verifies a Compatibility message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Compatibility message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Compatibility
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility;

                            /**
                             * Creates a plain object from a Compatibility message. Also converts values to other types if specified.
                             * @param message Compatibility
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Entity.CompatibilityStatus.Compatibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Compatibility to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a Partition. */
                interface IPartition {

                    /** Partition name */
                    name?: (string|null);

                    /** Partition values */
                    values?: (string[]|null);

                    /** Partition location */
                    location?: (string|null);

                    /** Partition etag */
                    etag?: (string|null);
                }

                /** Represents a Partition. */
                class Partition implements IPartition {

                    /**
                     * Constructs a new Partition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IPartition);

                    /** Partition name. */
                    public name: string;

                    /** Partition values. */
                    public values: string[];

                    /** Partition location. */
                    public location: string;

                    /** Partition etag. */
                    public etag: string;

                    /**
                     * Creates a new Partition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Partition instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IPartition): google.cloud.dataplex.v1.Partition;

                    /**
                     * Encodes the specified Partition message. Does not implicitly {@link google.cloud.dataplex.v1.Partition.verify|verify} messages.
                     * @param message Partition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IPartition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Partition message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Partition.verify|verify} messages.
                     * @param message Partition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IPartition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Partition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Partition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Partition;

                    /**
                     * Decodes a Partition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Partition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Partition;

                    /**
                     * Verifies a Partition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Partition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Partition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Partition;

                    /**
                     * Creates a plain object from a Partition message. Also converts values to other types if specified.
                     * @param message Partition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Partition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Partition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Schema. */
                interface ISchema {

                    /** Schema userManaged */
                    userManaged?: (boolean|null);

                    /** Schema fields */
                    fields?: (google.cloud.dataplex.v1.Schema.ISchemaField[]|null);

                    /** Schema partitionFields */
                    partitionFields?: (google.cloud.dataplex.v1.Schema.IPartitionField[]|null);

                    /** Schema partitionStyle */
                    partitionStyle?: (google.cloud.dataplex.v1.Schema.PartitionStyle|keyof typeof google.cloud.dataplex.v1.Schema.PartitionStyle|null);
                }

                /** Represents a Schema. */
                class Schema implements ISchema {

                    /**
                     * Constructs a new Schema.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ISchema);

                    /** Schema userManaged. */
                    public userManaged: boolean;

                    /** Schema fields. */
                    public fields: google.cloud.dataplex.v1.Schema.ISchemaField[];

                    /** Schema partitionFields. */
                    public partitionFields: google.cloud.dataplex.v1.Schema.IPartitionField[];

                    /** Schema partitionStyle. */
                    public partitionStyle: (google.cloud.dataplex.v1.Schema.PartitionStyle|keyof typeof google.cloud.dataplex.v1.Schema.PartitionStyle);

                    /**
                     * Creates a new Schema instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Schema instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ISchema): google.cloud.dataplex.v1.Schema;

                    /**
                     * Encodes the specified Schema message. Does not implicitly {@link google.cloud.dataplex.v1.Schema.verify|verify} messages.
                     * @param message Schema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Schema message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Schema.verify|verify} messages.
                     * @param message Schema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Schema message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Schema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Schema;

                    /**
                     * Decodes a Schema message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Schema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Schema;

                    /**
                     * Verifies a Schema message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Schema message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Schema
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Schema;

                    /**
                     * Creates a plain object from a Schema message. Also converts values to other types if specified.
                     * @param message Schema
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Schema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Schema to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Schema {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        BOOLEAN = 1,
                        BYTE = 2,
                        INT16 = 3,
                        INT32 = 4,
                        INT64 = 5,
                        FLOAT = 6,
                        DOUBLE = 7,
                        DECIMAL = 8,
                        STRING = 9,
                        BINARY = 10,
                        TIMESTAMP = 11,
                        DATE = 12,
                        TIME = 13,
                        RECORD = 14,
                        NULL = 100
                    }

                    /** Mode enum. */
                    enum Mode {
                        MODE_UNSPECIFIED = 0,
                        REQUIRED = 1,
                        NULLABLE = 2,
                        REPEATED = 3
                    }

                    /** Properties of a SchemaField. */
                    interface ISchemaField {

                        /** SchemaField name */
                        name?: (string|null);

                        /** SchemaField description */
                        description?: (string|null);

                        /** SchemaField type */
                        type?: (google.cloud.dataplex.v1.Schema.Type|keyof typeof google.cloud.dataplex.v1.Schema.Type|null);

                        /** SchemaField mode */
                        mode?: (google.cloud.dataplex.v1.Schema.Mode|keyof typeof google.cloud.dataplex.v1.Schema.Mode|null);

                        /** SchemaField fields */
                        fields?: (google.cloud.dataplex.v1.Schema.ISchemaField[]|null);
                    }

                    /** Represents a SchemaField. */
                    class SchemaField implements ISchemaField {

                        /**
                         * Constructs a new SchemaField.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Schema.ISchemaField);

                        /** SchemaField name. */
                        public name: string;

                        /** SchemaField description. */
                        public description: string;

                        /** SchemaField type. */
                        public type: (google.cloud.dataplex.v1.Schema.Type|keyof typeof google.cloud.dataplex.v1.Schema.Type);

                        /** SchemaField mode. */
                        public mode: (google.cloud.dataplex.v1.Schema.Mode|keyof typeof google.cloud.dataplex.v1.Schema.Mode);

                        /** SchemaField fields. */
                        public fields: google.cloud.dataplex.v1.Schema.ISchemaField[];

                        /**
                         * Creates a new SchemaField instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaField instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Schema.ISchemaField): google.cloud.dataplex.v1.Schema.SchemaField;

                        /**
                         * Encodes the specified SchemaField message. Does not implicitly {@link google.cloud.dataplex.v1.Schema.SchemaField.verify|verify} messages.
                         * @param message SchemaField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Schema.ISchemaField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaField message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Schema.SchemaField.verify|verify} messages.
                         * @param message SchemaField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Schema.ISchemaField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaField message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Schema.SchemaField;

                        /**
                         * Decodes a SchemaField message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Schema.SchemaField;

                        /**
                         * Verifies a SchemaField message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaField message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaField
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Schema.SchemaField;

                        /**
                         * Creates a plain object from a SchemaField message. Also converts values to other types if specified.
                         * @param message SchemaField
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Schema.SchemaField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaField to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PartitionField. */
                    interface IPartitionField {

                        /** PartitionField name */
                        name?: (string|null);

                        /** PartitionField type */
                        type?: (google.cloud.dataplex.v1.Schema.Type|keyof typeof google.cloud.dataplex.v1.Schema.Type|null);
                    }

                    /** Represents a PartitionField. */
                    class PartitionField implements IPartitionField {

                        /**
                         * Constructs a new PartitionField.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Schema.IPartitionField);

                        /** PartitionField name. */
                        public name: string;

                        /** PartitionField type. */
                        public type: (google.cloud.dataplex.v1.Schema.Type|keyof typeof google.cloud.dataplex.v1.Schema.Type);

                        /**
                         * Creates a new PartitionField instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PartitionField instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Schema.IPartitionField): google.cloud.dataplex.v1.Schema.PartitionField;

                        /**
                         * Encodes the specified PartitionField message. Does not implicitly {@link google.cloud.dataplex.v1.Schema.PartitionField.verify|verify} messages.
                         * @param message PartitionField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Schema.IPartitionField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PartitionField message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Schema.PartitionField.verify|verify} messages.
                         * @param message PartitionField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Schema.IPartitionField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PartitionField message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PartitionField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Schema.PartitionField;

                        /**
                         * Decodes a PartitionField message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PartitionField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Schema.PartitionField;

                        /**
                         * Verifies a PartitionField message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PartitionField message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PartitionField
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Schema.PartitionField;

                        /**
                         * Creates a plain object from a PartitionField message. Also converts values to other types if specified.
                         * @param message PartitionField
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Schema.PartitionField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PartitionField to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** PartitionStyle enum. */
                    enum PartitionStyle {
                        PARTITION_STYLE_UNSPECIFIED = 0,
                        HIVE_COMPATIBLE = 1
                    }
                }

                /** Properties of a StorageFormat. */
                interface IStorageFormat {

                    /** StorageFormat format */
                    format?: (google.cloud.dataplex.v1.StorageFormat.Format|keyof typeof google.cloud.dataplex.v1.StorageFormat.Format|null);

                    /** StorageFormat compressionFormat */
                    compressionFormat?: (google.cloud.dataplex.v1.StorageFormat.CompressionFormat|keyof typeof google.cloud.dataplex.v1.StorageFormat.CompressionFormat|null);

                    /** StorageFormat mimeType */
                    mimeType?: (string|null);

                    /** StorageFormat csv */
                    csv?: (google.cloud.dataplex.v1.StorageFormat.ICsvOptions|null);

                    /** StorageFormat json */
                    json?: (google.cloud.dataplex.v1.StorageFormat.IJsonOptions|null);
                }

                /** Represents a StorageFormat. */
                class StorageFormat implements IStorageFormat {

                    /**
                     * Constructs a new StorageFormat.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IStorageFormat);

                    /** StorageFormat format. */
                    public format: (google.cloud.dataplex.v1.StorageFormat.Format|keyof typeof google.cloud.dataplex.v1.StorageFormat.Format);

                    /** StorageFormat compressionFormat. */
                    public compressionFormat: (google.cloud.dataplex.v1.StorageFormat.CompressionFormat|keyof typeof google.cloud.dataplex.v1.StorageFormat.CompressionFormat);

                    /** StorageFormat mimeType. */
                    public mimeType: string;

                    /** StorageFormat csv. */
                    public csv?: (google.cloud.dataplex.v1.StorageFormat.ICsvOptions|null);

                    /** StorageFormat json. */
                    public json?: (google.cloud.dataplex.v1.StorageFormat.IJsonOptions|null);

                    /** StorageFormat options. */
                    public options?: ("csv"|"json");

                    /**
                     * Creates a new StorageFormat instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorageFormat instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IStorageFormat): google.cloud.dataplex.v1.StorageFormat;

                    /**
                     * Encodes the specified StorageFormat message. Does not implicitly {@link google.cloud.dataplex.v1.StorageFormat.verify|verify} messages.
                     * @param message StorageFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IStorageFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorageFormat message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.StorageFormat.verify|verify} messages.
                     * @param message StorageFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IStorageFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorageFormat message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorageFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.StorageFormat;

                    /**
                     * Decodes a StorageFormat message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorageFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.StorageFormat;

                    /**
                     * Verifies a StorageFormat message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorageFormat message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorageFormat
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.StorageFormat;

                    /**
                     * Creates a plain object from a StorageFormat message. Also converts values to other types if specified.
                     * @param message StorageFormat
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.StorageFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorageFormat to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace StorageFormat {

                    /** Properties of a CsvOptions. */
                    interface ICsvOptions {

                        /** CsvOptions encoding */
                        encoding?: (string|null);

                        /** CsvOptions headerRows */
                        headerRows?: (number|null);

                        /** CsvOptions delimiter */
                        delimiter?: (string|null);

                        /** CsvOptions quote */
                        quote?: (string|null);
                    }

                    /** Represents a CsvOptions. */
                    class CsvOptions implements ICsvOptions {

                        /**
                         * Constructs a new CsvOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.StorageFormat.ICsvOptions);

                        /** CsvOptions encoding. */
                        public encoding: string;

                        /** CsvOptions headerRows. */
                        public headerRows: number;

                        /** CsvOptions delimiter. */
                        public delimiter: string;

                        /** CsvOptions quote. */
                        public quote: string;

                        /**
                         * Creates a new CsvOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CsvOptions instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.StorageFormat.ICsvOptions): google.cloud.dataplex.v1.StorageFormat.CsvOptions;

                        /**
                         * Encodes the specified CsvOptions message. Does not implicitly {@link google.cloud.dataplex.v1.StorageFormat.CsvOptions.verify|verify} messages.
                         * @param message CsvOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.StorageFormat.ICsvOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CsvOptions message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.StorageFormat.CsvOptions.verify|verify} messages.
                         * @param message CsvOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.StorageFormat.ICsvOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CsvOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CsvOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.StorageFormat.CsvOptions;

                        /**
                         * Decodes a CsvOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CsvOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.StorageFormat.CsvOptions;

                        /**
                         * Verifies a CsvOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CsvOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CsvOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.StorageFormat.CsvOptions;

                        /**
                         * Creates a plain object from a CsvOptions message. Also converts values to other types if specified.
                         * @param message CsvOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.StorageFormat.CsvOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CsvOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a JsonOptions. */
                    interface IJsonOptions {

                        /** JsonOptions encoding */
                        encoding?: (string|null);
                    }

                    /** Represents a JsonOptions. */
                    class JsonOptions implements IJsonOptions {

                        /**
                         * Constructs a new JsonOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.StorageFormat.IJsonOptions);

                        /** JsonOptions encoding. */
                        public encoding: string;

                        /**
                         * Creates a new JsonOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JsonOptions instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.StorageFormat.IJsonOptions): google.cloud.dataplex.v1.StorageFormat.JsonOptions;

                        /**
                         * Encodes the specified JsonOptions message. Does not implicitly {@link google.cloud.dataplex.v1.StorageFormat.JsonOptions.verify|verify} messages.
                         * @param message JsonOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.StorageFormat.IJsonOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JsonOptions message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.StorageFormat.JsonOptions.verify|verify} messages.
                         * @param message JsonOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.StorageFormat.IJsonOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JsonOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JsonOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.StorageFormat.JsonOptions;

                        /**
                         * Decodes a JsonOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JsonOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.StorageFormat.JsonOptions;

                        /**
                         * Verifies a JsonOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JsonOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JsonOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.StorageFormat.JsonOptions;

                        /**
                         * Creates a plain object from a JsonOptions message. Also converts values to other types if specified.
                         * @param message JsonOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.StorageFormat.JsonOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JsonOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Format enum. */
                    enum Format {
                        FORMAT_UNSPECIFIED = 0,
                        PARQUET = 1,
                        AVRO = 2,
                        ORC = 3,
                        CSV = 100,
                        JSON = 101,
                        IMAGE = 200,
                        AUDIO = 201,
                        VIDEO = 202,
                        TEXT = 203,
                        TFRECORD = 204,
                        OTHER = 1000,
                        UNKNOWN = 1001
                    }

                    /** CompressionFormat enum. */
                    enum CompressionFormat {
                        COMPRESSION_FORMAT_UNSPECIFIED = 0,
                        GZIP = 2,
                        BZIP2 = 3
                    }
                }

                /** StorageSystem enum. */
                enum StorageSystem {
                    STORAGE_SYSTEM_UNSPECIFIED = 0,
                    CLOUD_STORAGE = 1,
                    BIGQUERY = 2
                }

                /** Properties of a Lake. */
                interface ILake {

                    /** Lake name */
                    name?: (string|null);

                    /** Lake displayName */
                    displayName?: (string|null);

                    /** Lake uid */
                    uid?: (string|null);

                    /** Lake createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Lake updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Lake labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Lake description */
                    description?: (string|null);

                    /** Lake state */
                    state?: (google.cloud.dataplex.v1.Lake.MetastoreStatus.State|keyof typeof google.cloud.dataplex.v1.Lake.MetastoreStatus.State|null);

                    /** Lake serviceAccount */
                    serviceAccount?: (string|null);

                    /** Lake metastore */
                    metastore?: (google.cloud.dataplex.v1.Lake.IMetastore|null);

                    /** Lake assetStatus */
                    assetStatus?: (google.cloud.dataplex.v1.IAssetStatus|null);

                    /** Lake metastoreStatus */
                    metastoreStatus?: (google.cloud.dataplex.v1.Lake.IMetastoreStatus|null);
                }

                /** Represents a Lake. */
                class Lake implements ILake {

                    /**
                     * Constructs a new Lake.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ILake);

                    /** Lake name. */
                    public name: string;

                    /** Lake displayName. */
                    public displayName: string;

                    /** Lake uid. */
                    public uid: string;

                    /** Lake createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Lake updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Lake labels. */
                    public labels: { [k: string]: string };

                    /** Lake description. */
                    public description: string;

                    /** Lake state. */
                    public state: (google.cloud.dataplex.v1.Lake.MetastoreStatus.State|keyof typeof google.cloud.dataplex.v1.Lake.MetastoreStatus.State);

                    /** Lake serviceAccount. */
                    public serviceAccount: string;

                    /** Lake metastore. */
                    public metastore?: (google.cloud.dataplex.v1.Lake.IMetastore|null);

                    /** Lake assetStatus. */
                    public assetStatus?: (google.cloud.dataplex.v1.IAssetStatus|null);

                    /** Lake metastoreStatus. */
                    public metastoreStatus?: (google.cloud.dataplex.v1.Lake.IMetastoreStatus|null);

                    /**
                     * Creates a new Lake instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Lake instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ILake): google.cloud.dataplex.v1.Lake;

                    /**
                     * Encodes the specified Lake message. Does not implicitly {@link google.cloud.dataplex.v1.Lake.verify|verify} messages.
                     * @param message Lake message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ILake, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Lake message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Lake.verify|verify} messages.
                     * @param message Lake message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ILake, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Lake message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Lake
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Lake;

                    /**
                     * Decodes a Lake message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Lake
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Lake;

                    /**
                     * Verifies a Lake message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Lake message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Lake
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Lake;

                    /**
                     * Creates a plain object from a Lake message. Also converts values to other types if specified.
                     * @param message Lake
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Lake, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Lake to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Lake {

                    /** Properties of a Metastore. */
                    interface IMetastore {

                        /** Metastore service */
                        service?: (string|null);
                    }

                    /** Represents a Metastore. */
                    class Metastore implements IMetastore {

                        /**
                         * Constructs a new Metastore.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Lake.IMetastore);

                        /** Metastore service. */
                        public service: string;

                        /**
                         * Creates a new Metastore instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Metastore instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Lake.IMetastore): google.cloud.dataplex.v1.Lake.Metastore;

                        /**
                         * Encodes the specified Metastore message. Does not implicitly {@link google.cloud.dataplex.v1.Lake.Metastore.verify|verify} messages.
                         * @param message Metastore message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Lake.IMetastore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Metastore message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Lake.Metastore.verify|verify} messages.
                         * @param message Metastore message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Lake.IMetastore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Metastore message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Metastore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Lake.Metastore;

                        /**
                         * Decodes a Metastore message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Metastore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Lake.Metastore;

                        /**
                         * Verifies a Metastore message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Metastore message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Metastore
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Lake.Metastore;

                        /**
                         * Creates a plain object from a Metastore message. Also converts values to other types if specified.
                         * @param message Metastore
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Lake.Metastore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Metastore to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MetastoreStatus. */
                    interface IMetastoreStatus {

                        /** MetastoreStatus state */
                        state?: (google.cloud.dataplex.v1.Lake.MetastoreStatus.State|keyof typeof google.cloud.dataplex.v1.Lake.MetastoreStatus.State|null);

                        /** MetastoreStatus message */
                        message?: (string|null);

                        /** MetastoreStatus updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** MetastoreStatus endpoint */
                        endpoint?: (string|null);
                    }

                    /** Represents a MetastoreStatus. */
                    class MetastoreStatus implements IMetastoreStatus {

                        /**
                         * Constructs a new MetastoreStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Lake.IMetastoreStatus);

                        /** MetastoreStatus state. */
                        public state: (google.cloud.dataplex.v1.Lake.MetastoreStatus.State|keyof typeof google.cloud.dataplex.v1.Lake.MetastoreStatus.State);

                        /** MetastoreStatus message. */
                        public message: string;

                        /** MetastoreStatus updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** MetastoreStatus endpoint. */
                        public endpoint: string;

                        /**
                         * Creates a new MetastoreStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetastoreStatus instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Lake.IMetastoreStatus): google.cloud.dataplex.v1.Lake.MetastoreStatus;

                        /**
                         * Encodes the specified MetastoreStatus message. Does not implicitly {@link google.cloud.dataplex.v1.Lake.MetastoreStatus.verify|verify} messages.
                         * @param message MetastoreStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Lake.IMetastoreStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetastoreStatus message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Lake.MetastoreStatus.verify|verify} messages.
                         * @param message MetastoreStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Lake.IMetastoreStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetastoreStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetastoreStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Lake.MetastoreStatus;

                        /**
                         * Decodes a MetastoreStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetastoreStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Lake.MetastoreStatus;

                        /**
                         * Verifies a MetastoreStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetastoreStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetastoreStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Lake.MetastoreStatus;

                        /**
                         * Creates a plain object from a MetastoreStatus message. Also converts values to other types if specified.
                         * @param message MetastoreStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Lake.MetastoreStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetastoreStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace MetastoreStatus {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            NONE = 1,
                            READY = 2,
                            UPDATING = 3,
                            ERROR = 4
                        }
                    }
                }

                /** Properties of an AssetStatus. */
                interface IAssetStatus {

                    /** AssetStatus updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AssetStatus activeAssets */
                    activeAssets?: (number|null);

                    /** AssetStatus securityPolicyApplyingAssets */
                    securityPolicyApplyingAssets?: (number|null);
                }

                /** Represents an AssetStatus. */
                class AssetStatus implements IAssetStatus {

                    /**
                     * Constructs a new AssetStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IAssetStatus);

                    /** AssetStatus updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AssetStatus activeAssets. */
                    public activeAssets: number;

                    /** AssetStatus securityPolicyApplyingAssets. */
                    public securityPolicyApplyingAssets: number;

                    /**
                     * Creates a new AssetStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AssetStatus instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IAssetStatus): google.cloud.dataplex.v1.AssetStatus;

                    /**
                     * Encodes the specified AssetStatus message. Does not implicitly {@link google.cloud.dataplex.v1.AssetStatus.verify|verify} messages.
                     * @param message AssetStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IAssetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AssetStatus message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.AssetStatus.verify|verify} messages.
                     * @param message AssetStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IAssetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AssetStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AssetStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.AssetStatus;

                    /**
                     * Decodes an AssetStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AssetStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.AssetStatus;

                    /**
                     * Verifies an AssetStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AssetStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AssetStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.AssetStatus;

                    /**
                     * Creates a plain object from an AssetStatus message. Also converts values to other types if specified.
                     * @param message AssetStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.AssetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AssetStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Zone. */
                interface IZone {

                    /** Zone name */
                    name?: (string|null);

                    /** Zone displayName */
                    displayName?: (string|null);

                    /** Zone uid */
                    uid?: (string|null);

                    /** Zone createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Zone updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Zone labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Zone description */
                    description?: (string|null);

                    /** Zone state */
                    state?: (google.cloud.dataplex.v1.State|keyof typeof google.cloud.dataplex.v1.State|null);

                    /** Zone type */
                    type?: (google.cloud.dataplex.v1.Zone.Type|keyof typeof google.cloud.dataplex.v1.Zone.Type|null);

                    /** Zone discoverySpec */
                    discoverySpec?: (google.cloud.dataplex.v1.Zone.IDiscoverySpec|null);

                    /** Zone resourceSpec */
                    resourceSpec?: (google.cloud.dataplex.v1.Zone.IResourceSpec|null);

                    /** Zone assetStatus */
                    assetStatus?: (google.cloud.dataplex.v1.IAssetStatus|null);
                }

                /** Represents a Zone. */
                class Zone implements IZone {

                    /**
                     * Constructs a new Zone.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IZone);

                    /** Zone name. */
                    public name: string;

                    /** Zone displayName. */
                    public displayName: string;

                    /** Zone uid. */
                    public uid: string;

                    /** Zone createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Zone updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Zone labels. */
                    public labels: { [k: string]: string };

                    /** Zone description. */
                    public description: string;

                    /** Zone state. */
                    public state: (google.cloud.dataplex.v1.State|keyof typeof google.cloud.dataplex.v1.State);

                    /** Zone type. */
                    public type: (google.cloud.dataplex.v1.Zone.Type|keyof typeof google.cloud.dataplex.v1.Zone.Type);

                    /** Zone discoverySpec. */
                    public discoverySpec?: (google.cloud.dataplex.v1.Zone.IDiscoverySpec|null);

                    /** Zone resourceSpec. */
                    public resourceSpec?: (google.cloud.dataplex.v1.Zone.IResourceSpec|null);

                    /** Zone assetStatus. */
                    public assetStatus?: (google.cloud.dataplex.v1.IAssetStatus|null);

                    /**
                     * Creates a new Zone instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Zone instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IZone): google.cloud.dataplex.v1.Zone;

                    /**
                     * Encodes the specified Zone message. Does not implicitly {@link google.cloud.dataplex.v1.Zone.verify|verify} messages.
                     * @param message Zone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IZone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Zone message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Zone.verify|verify} messages.
                     * @param message Zone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IZone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Zone message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Zone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Zone;

                    /**
                     * Decodes a Zone message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Zone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Zone;

                    /**
                     * Verifies a Zone message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Zone message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Zone
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Zone;

                    /**
                     * Creates a plain object from a Zone message. Also converts values to other types if specified.
                     * @param message Zone
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Zone, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Zone to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Zone {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        RAW = 1,
                        CURATED = 2
                    }

                    /** Properties of a ResourceSpec. */
                    interface IResourceSpec {

                        /** ResourceSpec locationType */
                        locationType?: (google.cloud.dataplex.v1.Zone.ResourceSpec.LocationType|keyof typeof google.cloud.dataplex.v1.Zone.ResourceSpec.LocationType|null);
                    }

                    /** Represents a ResourceSpec. */
                    class ResourceSpec implements IResourceSpec {

                        /**
                         * Constructs a new ResourceSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Zone.IResourceSpec);

                        /** ResourceSpec locationType. */
                        public locationType: (google.cloud.dataplex.v1.Zone.ResourceSpec.LocationType|keyof typeof google.cloud.dataplex.v1.Zone.ResourceSpec.LocationType);

                        /**
                         * Creates a new ResourceSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Zone.IResourceSpec): google.cloud.dataplex.v1.Zone.ResourceSpec;

                        /**
                         * Encodes the specified ResourceSpec message. Does not implicitly {@link google.cloud.dataplex.v1.Zone.ResourceSpec.verify|verify} messages.
                         * @param message ResourceSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Zone.IResourceSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Zone.ResourceSpec.verify|verify} messages.
                         * @param message ResourceSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Zone.IResourceSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Zone.ResourceSpec;

                        /**
                         * Decodes a ResourceSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Zone.ResourceSpec;

                        /**
                         * Verifies a ResourceSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Zone.ResourceSpec;

                        /**
                         * Creates a plain object from a ResourceSpec message. Also converts values to other types if specified.
                         * @param message ResourceSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Zone.ResourceSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ResourceSpec {

                        /** LocationType enum. */
                        enum LocationType {
                            LOCATION_TYPE_UNSPECIFIED = 0,
                            SINGLE_REGION = 1,
                            MULTI_REGION = 2
                        }
                    }

                    /** Properties of a DiscoverySpec. */
                    interface IDiscoverySpec {

                        /** DiscoverySpec enabled */
                        enabled?: (boolean|null);

                        /** DiscoverySpec includePatterns */
                        includePatterns?: (string[]|null);

                        /** DiscoverySpec excludePatterns */
                        excludePatterns?: (string[]|null);

                        /** DiscoverySpec csvOptions */
                        csvOptions?: (google.cloud.dataplex.v1.Zone.DiscoverySpec.ICsvOptions|null);

                        /** DiscoverySpec jsonOptions */
                        jsonOptions?: (google.cloud.dataplex.v1.Zone.DiscoverySpec.IJsonOptions|null);

                        /** DiscoverySpec schedule */
                        schedule?: (string|null);
                    }

                    /** Represents a DiscoverySpec. */
                    class DiscoverySpec implements IDiscoverySpec {

                        /**
                         * Constructs a new DiscoverySpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Zone.IDiscoverySpec);

                        /** DiscoverySpec enabled. */
                        public enabled: boolean;

                        /** DiscoverySpec includePatterns. */
                        public includePatterns: string[];

                        /** DiscoverySpec excludePatterns. */
                        public excludePatterns: string[];

                        /** DiscoverySpec csvOptions. */
                        public csvOptions?: (google.cloud.dataplex.v1.Zone.DiscoverySpec.ICsvOptions|null);

                        /** DiscoverySpec jsonOptions. */
                        public jsonOptions?: (google.cloud.dataplex.v1.Zone.DiscoverySpec.IJsonOptions|null);

                        /** DiscoverySpec schedule. */
                        public schedule?: (string|null);

                        /** DiscoverySpec trigger. */
                        public trigger?: "schedule";

                        /**
                         * Creates a new DiscoverySpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DiscoverySpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Zone.IDiscoverySpec): google.cloud.dataplex.v1.Zone.DiscoverySpec;

                        /**
                         * Encodes the specified DiscoverySpec message. Does not implicitly {@link google.cloud.dataplex.v1.Zone.DiscoverySpec.verify|verify} messages.
                         * @param message DiscoverySpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Zone.IDiscoverySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DiscoverySpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Zone.DiscoverySpec.verify|verify} messages.
                         * @param message DiscoverySpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Zone.IDiscoverySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DiscoverySpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DiscoverySpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Zone.DiscoverySpec;

                        /**
                         * Decodes a DiscoverySpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DiscoverySpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Zone.DiscoverySpec;

                        /**
                         * Verifies a DiscoverySpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DiscoverySpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DiscoverySpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Zone.DiscoverySpec;

                        /**
                         * Creates a plain object from a DiscoverySpec message. Also converts values to other types if specified.
                         * @param message DiscoverySpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Zone.DiscoverySpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DiscoverySpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DiscoverySpec {

                        /** Properties of a CsvOptions. */
                        interface ICsvOptions {

                            /** CsvOptions headerRows */
                            headerRows?: (number|null);

                            /** CsvOptions delimiter */
                            delimiter?: (string|null);

                            /** CsvOptions encoding */
                            encoding?: (string|null);

                            /** CsvOptions disableTypeInference */
                            disableTypeInference?: (boolean|null);
                        }

                        /** Represents a CsvOptions. */
                        class CsvOptions implements ICsvOptions {

                            /**
                             * Constructs a new CsvOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Zone.DiscoverySpec.ICsvOptions);

                            /** CsvOptions headerRows. */
                            public headerRows: number;

                            /** CsvOptions delimiter. */
                            public delimiter: string;

                            /** CsvOptions encoding. */
                            public encoding: string;

                            /** CsvOptions disableTypeInference. */
                            public disableTypeInference: boolean;

                            /**
                             * Creates a new CsvOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CsvOptions instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Zone.DiscoverySpec.ICsvOptions): google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions;

                            /**
                             * Encodes the specified CsvOptions message. Does not implicitly {@link google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions.verify|verify} messages.
                             * @param message CsvOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Zone.DiscoverySpec.ICsvOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CsvOptions message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions.verify|verify} messages.
                             * @param message CsvOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Zone.DiscoverySpec.ICsvOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CsvOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CsvOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions;

                            /**
                             * Decodes a CsvOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CsvOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions;

                            /**
                             * Verifies a CsvOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CsvOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CsvOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions;

                            /**
                             * Creates a plain object from a CsvOptions message. Also converts values to other types if specified.
                             * @param message CsvOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Zone.DiscoverySpec.CsvOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CsvOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a JsonOptions. */
                        interface IJsonOptions {

                            /** JsonOptions encoding */
                            encoding?: (string|null);

                            /** JsonOptions disableTypeInference */
                            disableTypeInference?: (boolean|null);
                        }

                        /** Represents a JsonOptions. */
                        class JsonOptions implements IJsonOptions {

                            /**
                             * Constructs a new JsonOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Zone.DiscoverySpec.IJsonOptions);

                            /** JsonOptions encoding. */
                            public encoding: string;

                            /** JsonOptions disableTypeInference. */
                            public disableTypeInference: boolean;

                            /**
                             * Creates a new JsonOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns JsonOptions instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Zone.DiscoverySpec.IJsonOptions): google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions;

                            /**
                             * Encodes the specified JsonOptions message. Does not implicitly {@link google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions.verify|verify} messages.
                             * @param message JsonOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Zone.DiscoverySpec.IJsonOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified JsonOptions message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions.verify|verify} messages.
                             * @param message JsonOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Zone.DiscoverySpec.IJsonOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a JsonOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns JsonOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions;

                            /**
                             * Decodes a JsonOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns JsonOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions;

                            /**
                             * Verifies a JsonOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a JsonOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns JsonOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions;

                            /**
                             * Creates a plain object from a JsonOptions message. Also converts values to other types if specified.
                             * @param message JsonOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Zone.DiscoverySpec.JsonOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this JsonOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of an Action. */
                interface IAction {

                    /** Action category */
                    category?: (google.cloud.dataplex.v1.Action.Category|keyof typeof google.cloud.dataplex.v1.Action.Category|null);

                    /** Action issue */
                    issue?: (string|null);

                    /** Action detectTime */
                    detectTime?: (google.protobuf.ITimestamp|null);

                    /** Action name */
                    name?: (string|null);

                    /** Action lake */
                    lake?: (string|null);

                    /** Action zone */
                    zone?: (string|null);

                    /** Action asset */
                    asset?: (string|null);

                    /** Action dataLocations */
                    dataLocations?: (string[]|null);

                    /** Action invalidDataFormat */
                    invalidDataFormat?: (google.cloud.dataplex.v1.Action.IInvalidDataFormat|null);

                    /** Action incompatibleDataSchema */
                    incompatibleDataSchema?: (google.cloud.dataplex.v1.Action.IIncompatibleDataSchema|null);

                    /** Action invalidDataPartition */
                    invalidDataPartition?: (google.cloud.dataplex.v1.Action.IInvalidDataPartition|null);

                    /** Action missingData */
                    missingData?: (google.cloud.dataplex.v1.Action.IMissingData|null);

                    /** Action missingResource */
                    missingResource?: (google.cloud.dataplex.v1.Action.IMissingResource|null);

                    /** Action unauthorizedResource */
                    unauthorizedResource?: (google.cloud.dataplex.v1.Action.IUnauthorizedResource|null);

                    /** Action failedSecurityPolicyApply */
                    failedSecurityPolicyApply?: (google.cloud.dataplex.v1.Action.IFailedSecurityPolicyApply|null);

                    /** Action invalidDataOrganization */
                    invalidDataOrganization?: (google.cloud.dataplex.v1.Action.IInvalidDataOrganization|null);
                }

                /** Represents an Action. */
                class Action implements IAction {

                    /**
                     * Constructs a new Action.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IAction);

                    /** Action category. */
                    public category: (google.cloud.dataplex.v1.Action.Category|keyof typeof google.cloud.dataplex.v1.Action.Category);

                    /** Action issue. */
                    public issue: string;

                    /** Action detectTime. */
                    public detectTime?: (google.protobuf.ITimestamp|null);

                    /** Action name. */
                    public name: string;

                    /** Action lake. */
                    public lake: string;

                    /** Action zone. */
                    public zone: string;

                    /** Action asset. */
                    public asset: string;

                    /** Action dataLocations. */
                    public dataLocations: string[];

                    /** Action invalidDataFormat. */
                    public invalidDataFormat?: (google.cloud.dataplex.v1.Action.IInvalidDataFormat|null);

                    /** Action incompatibleDataSchema. */
                    public incompatibleDataSchema?: (google.cloud.dataplex.v1.Action.IIncompatibleDataSchema|null);

                    /** Action invalidDataPartition. */
                    public invalidDataPartition?: (google.cloud.dataplex.v1.Action.IInvalidDataPartition|null);

                    /** Action missingData. */
                    public missingData?: (google.cloud.dataplex.v1.Action.IMissingData|null);

                    /** Action missingResource. */
                    public missingResource?: (google.cloud.dataplex.v1.Action.IMissingResource|null);

                    /** Action unauthorizedResource. */
                    public unauthorizedResource?: (google.cloud.dataplex.v1.Action.IUnauthorizedResource|null);

                    /** Action failedSecurityPolicyApply. */
                    public failedSecurityPolicyApply?: (google.cloud.dataplex.v1.Action.IFailedSecurityPolicyApply|null);

                    /** Action invalidDataOrganization. */
                    public invalidDataOrganization?: (google.cloud.dataplex.v1.Action.IInvalidDataOrganization|null);

                    /** Action details. */
                    public details?: ("invalidDataFormat"|"incompatibleDataSchema"|"invalidDataPartition"|"missingData"|"missingResource"|"unauthorizedResource"|"failedSecurityPolicyApply"|"invalidDataOrganization");

                    /**
                     * Creates a new Action instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Action instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IAction): google.cloud.dataplex.v1.Action;

                    /**
                     * Encodes the specified Action message. Does not implicitly {@link google.cloud.dataplex.v1.Action.verify|verify} messages.
                     * @param message Action message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Action message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.verify|verify} messages.
                     * @param message Action message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Action message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Action
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action;

                    /**
                     * Decodes an Action message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Action
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action;

                    /**
                     * Verifies an Action message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Action message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Action
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action;

                    /**
                     * Creates a plain object from an Action message. Also converts values to other types if specified.
                     * @param message Action
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Action to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Action {

                    /** Category enum. */
                    enum Category {
                        CATEGORY_UNSPECIFIED = 0,
                        RESOURCE_MANAGEMENT = 1,
                        SECURITY_POLICY = 2,
                        DATA_DISCOVERY = 3
                    }

                    /** Properties of a MissingResource. */
                    interface IMissingResource {
                    }

                    /** Represents a MissingResource. */
                    class MissingResource implements IMissingResource {

                        /**
                         * Constructs a new MissingResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IMissingResource);

                        /**
                         * Creates a new MissingResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MissingResource instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IMissingResource): google.cloud.dataplex.v1.Action.MissingResource;

                        /**
                         * Encodes the specified MissingResource message. Does not implicitly {@link google.cloud.dataplex.v1.Action.MissingResource.verify|verify} messages.
                         * @param message MissingResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IMissingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MissingResource message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.MissingResource.verify|verify} messages.
                         * @param message MissingResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IMissingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MissingResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MissingResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.MissingResource;

                        /**
                         * Decodes a MissingResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MissingResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.MissingResource;

                        /**
                         * Verifies a MissingResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MissingResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MissingResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.MissingResource;

                        /**
                         * Creates a plain object from a MissingResource message. Also converts values to other types if specified.
                         * @param message MissingResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.MissingResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MissingResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UnauthorizedResource. */
                    interface IUnauthorizedResource {
                    }

                    /** Represents an UnauthorizedResource. */
                    class UnauthorizedResource implements IUnauthorizedResource {

                        /**
                         * Constructs a new UnauthorizedResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IUnauthorizedResource);

                        /**
                         * Creates a new UnauthorizedResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnauthorizedResource instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IUnauthorizedResource): google.cloud.dataplex.v1.Action.UnauthorizedResource;

                        /**
                         * Encodes the specified UnauthorizedResource message. Does not implicitly {@link google.cloud.dataplex.v1.Action.UnauthorizedResource.verify|verify} messages.
                         * @param message UnauthorizedResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IUnauthorizedResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnauthorizedResource message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.UnauthorizedResource.verify|verify} messages.
                         * @param message UnauthorizedResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IUnauthorizedResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnauthorizedResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnauthorizedResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.UnauthorizedResource;

                        /**
                         * Decodes an UnauthorizedResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnauthorizedResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.UnauthorizedResource;

                        /**
                         * Verifies an UnauthorizedResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnauthorizedResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnauthorizedResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.UnauthorizedResource;

                        /**
                         * Creates a plain object from an UnauthorizedResource message. Also converts values to other types if specified.
                         * @param message UnauthorizedResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.UnauthorizedResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnauthorizedResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a FailedSecurityPolicyApply. */
                    interface IFailedSecurityPolicyApply {

                        /** FailedSecurityPolicyApply asset */
                        asset?: (string|null);
                    }

                    /** Represents a FailedSecurityPolicyApply. */
                    class FailedSecurityPolicyApply implements IFailedSecurityPolicyApply {

                        /**
                         * Constructs a new FailedSecurityPolicyApply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IFailedSecurityPolicyApply);

                        /** FailedSecurityPolicyApply asset. */
                        public asset: string;

                        /**
                         * Creates a new FailedSecurityPolicyApply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FailedSecurityPolicyApply instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IFailedSecurityPolicyApply): google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply;

                        /**
                         * Encodes the specified FailedSecurityPolicyApply message. Does not implicitly {@link google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply.verify|verify} messages.
                         * @param message FailedSecurityPolicyApply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IFailedSecurityPolicyApply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FailedSecurityPolicyApply message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply.verify|verify} messages.
                         * @param message FailedSecurityPolicyApply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IFailedSecurityPolicyApply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FailedSecurityPolicyApply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FailedSecurityPolicyApply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply;

                        /**
                         * Decodes a FailedSecurityPolicyApply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FailedSecurityPolicyApply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply;

                        /**
                         * Verifies a FailedSecurityPolicyApply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FailedSecurityPolicyApply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FailedSecurityPolicyApply
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply;

                        /**
                         * Creates a plain object from a FailedSecurityPolicyApply message. Also converts values to other types if specified.
                         * @param message FailedSecurityPolicyApply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.FailedSecurityPolicyApply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FailedSecurityPolicyApply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an InvalidDataFormat. */
                    interface IInvalidDataFormat {

                        /** InvalidDataFormat sampledDataLocations */
                        sampledDataLocations?: (string[]|null);

                        /** InvalidDataFormat expectedFormat */
                        expectedFormat?: (string|null);

                        /** InvalidDataFormat newFormat */
                        newFormat?: (string|null);
                    }

                    /** Represents an InvalidDataFormat. */
                    class InvalidDataFormat implements IInvalidDataFormat {

                        /**
                         * Constructs a new InvalidDataFormat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IInvalidDataFormat);

                        /** InvalidDataFormat sampledDataLocations. */
                        public sampledDataLocations: string[];

                        /** InvalidDataFormat expectedFormat. */
                        public expectedFormat: string;

                        /** InvalidDataFormat newFormat. */
                        public newFormat: string;

                        /**
                         * Creates a new InvalidDataFormat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InvalidDataFormat instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IInvalidDataFormat): google.cloud.dataplex.v1.Action.InvalidDataFormat;

                        /**
                         * Encodes the specified InvalidDataFormat message. Does not implicitly {@link google.cloud.dataplex.v1.Action.InvalidDataFormat.verify|verify} messages.
                         * @param message InvalidDataFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IInvalidDataFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InvalidDataFormat message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.InvalidDataFormat.verify|verify} messages.
                         * @param message InvalidDataFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IInvalidDataFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InvalidDataFormat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InvalidDataFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.InvalidDataFormat;

                        /**
                         * Decodes an InvalidDataFormat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InvalidDataFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.InvalidDataFormat;

                        /**
                         * Verifies an InvalidDataFormat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InvalidDataFormat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InvalidDataFormat
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.InvalidDataFormat;

                        /**
                         * Creates a plain object from an InvalidDataFormat message. Also converts values to other types if specified.
                         * @param message InvalidDataFormat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.InvalidDataFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InvalidDataFormat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IncompatibleDataSchema. */
                    interface IIncompatibleDataSchema {

                        /** IncompatibleDataSchema table */
                        table?: (string|null);

                        /** IncompatibleDataSchema existingSchema */
                        existingSchema?: (string|null);

                        /** IncompatibleDataSchema newSchema */
                        newSchema?: (string|null);

                        /** IncompatibleDataSchema sampledDataLocations */
                        sampledDataLocations?: (string[]|null);

                        /** IncompatibleDataSchema schemaChange */
                        schemaChange?: (google.cloud.dataplex.v1.Action.IncompatibleDataSchema.SchemaChange|keyof typeof google.cloud.dataplex.v1.Action.IncompatibleDataSchema.SchemaChange|null);
                    }

                    /** Represents an IncompatibleDataSchema. */
                    class IncompatibleDataSchema implements IIncompatibleDataSchema {

                        /**
                         * Constructs a new IncompatibleDataSchema.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IIncompatibleDataSchema);

                        /** IncompatibleDataSchema table. */
                        public table: string;

                        /** IncompatibleDataSchema existingSchema. */
                        public existingSchema: string;

                        /** IncompatibleDataSchema newSchema. */
                        public newSchema: string;

                        /** IncompatibleDataSchema sampledDataLocations. */
                        public sampledDataLocations: string[];

                        /** IncompatibleDataSchema schemaChange. */
                        public schemaChange: (google.cloud.dataplex.v1.Action.IncompatibleDataSchema.SchemaChange|keyof typeof google.cloud.dataplex.v1.Action.IncompatibleDataSchema.SchemaChange);

                        /**
                         * Creates a new IncompatibleDataSchema instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IncompatibleDataSchema instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IIncompatibleDataSchema): google.cloud.dataplex.v1.Action.IncompatibleDataSchema;

                        /**
                         * Encodes the specified IncompatibleDataSchema message. Does not implicitly {@link google.cloud.dataplex.v1.Action.IncompatibleDataSchema.verify|verify} messages.
                         * @param message IncompatibleDataSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IIncompatibleDataSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IncompatibleDataSchema message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.IncompatibleDataSchema.verify|verify} messages.
                         * @param message IncompatibleDataSchema message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IIncompatibleDataSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IncompatibleDataSchema message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IncompatibleDataSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.IncompatibleDataSchema;

                        /**
                         * Decodes an IncompatibleDataSchema message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IncompatibleDataSchema
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.IncompatibleDataSchema;

                        /**
                         * Verifies an IncompatibleDataSchema message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IncompatibleDataSchema message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IncompatibleDataSchema
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.IncompatibleDataSchema;

                        /**
                         * Creates a plain object from an IncompatibleDataSchema message. Also converts values to other types if specified.
                         * @param message IncompatibleDataSchema
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.IncompatibleDataSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IncompatibleDataSchema to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace IncompatibleDataSchema {

                        /** SchemaChange enum. */
                        enum SchemaChange {
                            SCHEMA_CHANGE_UNSPECIFIED = 0,
                            INCOMPATIBLE = 1,
                            MODIFIED = 2
                        }
                    }

                    /** Properties of an InvalidDataPartition. */
                    interface IInvalidDataPartition {

                        /** InvalidDataPartition expectedStructure */
                        expectedStructure?: (google.cloud.dataplex.v1.Action.InvalidDataPartition.PartitionStructure|keyof typeof google.cloud.dataplex.v1.Action.InvalidDataPartition.PartitionStructure|null);
                    }

                    /** Represents an InvalidDataPartition. */
                    class InvalidDataPartition implements IInvalidDataPartition {

                        /**
                         * Constructs a new InvalidDataPartition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IInvalidDataPartition);

                        /** InvalidDataPartition expectedStructure. */
                        public expectedStructure: (google.cloud.dataplex.v1.Action.InvalidDataPartition.PartitionStructure|keyof typeof google.cloud.dataplex.v1.Action.InvalidDataPartition.PartitionStructure);

                        /**
                         * Creates a new InvalidDataPartition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InvalidDataPartition instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IInvalidDataPartition): google.cloud.dataplex.v1.Action.InvalidDataPartition;

                        /**
                         * Encodes the specified InvalidDataPartition message. Does not implicitly {@link google.cloud.dataplex.v1.Action.InvalidDataPartition.verify|verify} messages.
                         * @param message InvalidDataPartition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IInvalidDataPartition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InvalidDataPartition message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.InvalidDataPartition.verify|verify} messages.
                         * @param message InvalidDataPartition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IInvalidDataPartition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InvalidDataPartition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InvalidDataPartition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.InvalidDataPartition;

                        /**
                         * Decodes an InvalidDataPartition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InvalidDataPartition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.InvalidDataPartition;

                        /**
                         * Verifies an InvalidDataPartition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InvalidDataPartition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InvalidDataPartition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.InvalidDataPartition;

                        /**
                         * Creates a plain object from an InvalidDataPartition message. Also converts values to other types if specified.
                         * @param message InvalidDataPartition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.InvalidDataPartition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InvalidDataPartition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace InvalidDataPartition {

                        /** PartitionStructure enum. */
                        enum PartitionStructure {
                            PARTITION_STRUCTURE_UNSPECIFIED = 0,
                            CONSISTENT_KEYS = 1,
                            HIVE_STYLE_KEYS = 2
                        }
                    }

                    /** Properties of a MissingData. */
                    interface IMissingData {
                    }

                    /** Represents a MissingData. */
                    class MissingData implements IMissingData {

                        /**
                         * Constructs a new MissingData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IMissingData);

                        /**
                         * Creates a new MissingData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MissingData instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IMissingData): google.cloud.dataplex.v1.Action.MissingData;

                        /**
                         * Encodes the specified MissingData message. Does not implicitly {@link google.cloud.dataplex.v1.Action.MissingData.verify|verify} messages.
                         * @param message MissingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IMissingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MissingData message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.MissingData.verify|verify} messages.
                         * @param message MissingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IMissingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MissingData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MissingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.MissingData;

                        /**
                         * Decodes a MissingData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MissingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.MissingData;

                        /**
                         * Verifies a MissingData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MissingData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MissingData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.MissingData;

                        /**
                         * Creates a plain object from a MissingData message. Also converts values to other types if specified.
                         * @param message MissingData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.MissingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MissingData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an InvalidDataOrganization. */
                    interface IInvalidDataOrganization {
                    }

                    /** Represents an InvalidDataOrganization. */
                    class InvalidDataOrganization implements IInvalidDataOrganization {

                        /**
                         * Constructs a new InvalidDataOrganization.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Action.IInvalidDataOrganization);

                        /**
                         * Creates a new InvalidDataOrganization instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InvalidDataOrganization instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Action.IInvalidDataOrganization): google.cloud.dataplex.v1.Action.InvalidDataOrganization;

                        /**
                         * Encodes the specified InvalidDataOrganization message. Does not implicitly {@link google.cloud.dataplex.v1.Action.InvalidDataOrganization.verify|verify} messages.
                         * @param message InvalidDataOrganization message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Action.IInvalidDataOrganization, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InvalidDataOrganization message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Action.InvalidDataOrganization.verify|verify} messages.
                         * @param message InvalidDataOrganization message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Action.IInvalidDataOrganization, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InvalidDataOrganization message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InvalidDataOrganization
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Action.InvalidDataOrganization;

                        /**
                         * Decodes an InvalidDataOrganization message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InvalidDataOrganization
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Action.InvalidDataOrganization;

                        /**
                         * Verifies an InvalidDataOrganization message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InvalidDataOrganization message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InvalidDataOrganization
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Action.InvalidDataOrganization;

                        /**
                         * Creates a plain object from an InvalidDataOrganization message. Also converts values to other types if specified.
                         * @param message InvalidDataOrganization
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Action.InvalidDataOrganization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InvalidDataOrganization to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset name */
                    name?: (string|null);

                    /** Asset displayName */
                    displayName?: (string|null);

                    /** Asset uid */
                    uid?: (string|null);

                    /** Asset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Asset updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Asset labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Asset description */
                    description?: (string|null);

                    /** Asset state */
                    state?: (google.cloud.dataplex.v1.Asset.SecurityStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.SecurityStatus.State|null);

                    /** Asset resourceSpec */
                    resourceSpec?: (google.cloud.dataplex.v1.Asset.IResourceSpec|null);

                    /** Asset resourceStatus */
                    resourceStatus?: (google.cloud.dataplex.v1.Asset.IResourceStatus|null);

                    /** Asset securityStatus */
                    securityStatus?: (google.cloud.dataplex.v1.Asset.ISecurityStatus|null);

                    /** Asset discoverySpec */
                    discoverySpec?: (google.cloud.dataplex.v1.Asset.IDiscoverySpec|null);

                    /** Asset discoveryStatus */
                    discoveryStatus?: (google.cloud.dataplex.v1.Asset.IDiscoveryStatus|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IAsset);

                    /** Asset name. */
                    public name: string;

                    /** Asset displayName. */
                    public displayName: string;

                    /** Asset uid. */
                    public uid: string;

                    /** Asset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Asset updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Asset labels. */
                    public labels: { [k: string]: string };

                    /** Asset description. */
                    public description: string;

                    /** Asset state. */
                    public state: (google.cloud.dataplex.v1.Asset.SecurityStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.SecurityStatus.State);

                    /** Asset resourceSpec. */
                    public resourceSpec?: (google.cloud.dataplex.v1.Asset.IResourceSpec|null);

                    /** Asset resourceStatus. */
                    public resourceStatus?: (google.cloud.dataplex.v1.Asset.IResourceStatus|null);

                    /** Asset securityStatus. */
                    public securityStatus?: (google.cloud.dataplex.v1.Asset.ISecurityStatus|null);

                    /** Asset discoverySpec. */
                    public discoverySpec?: (google.cloud.dataplex.v1.Asset.IDiscoverySpec|null);

                    /** Asset discoveryStatus. */
                    public discoveryStatus?: (google.cloud.dataplex.v1.Asset.IDiscoveryStatus|null);

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IAsset): google.cloud.dataplex.v1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Asset {

                    /** Properties of a SecurityStatus. */
                    interface ISecurityStatus {

                        /** SecurityStatus state */
                        state?: (google.cloud.dataplex.v1.Asset.SecurityStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.SecurityStatus.State|null);

                        /** SecurityStatus message */
                        message?: (string|null);

                        /** SecurityStatus updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a SecurityStatus. */
                    class SecurityStatus implements ISecurityStatus {

                        /**
                         * Constructs a new SecurityStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Asset.ISecurityStatus);

                        /** SecurityStatus state. */
                        public state: (google.cloud.dataplex.v1.Asset.SecurityStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.SecurityStatus.State);

                        /** SecurityStatus message. */
                        public message: string;

                        /** SecurityStatus updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new SecurityStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecurityStatus instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Asset.ISecurityStatus): google.cloud.dataplex.v1.Asset.SecurityStatus;

                        /**
                         * Encodes the specified SecurityStatus message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.SecurityStatus.verify|verify} messages.
                         * @param message SecurityStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Asset.ISecurityStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecurityStatus message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.SecurityStatus.verify|verify} messages.
                         * @param message SecurityStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.ISecurityStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecurityStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecurityStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.SecurityStatus;

                        /**
                         * Decodes a SecurityStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecurityStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.SecurityStatus;

                        /**
                         * Verifies a SecurityStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecurityStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecurityStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.SecurityStatus;

                        /**
                         * Creates a plain object from a SecurityStatus message. Also converts values to other types if specified.
                         * @param message SecurityStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Asset.SecurityStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecurityStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace SecurityStatus {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            READY = 1,
                            APPLYING = 2,
                            ERROR = 3
                        }
                    }

                    /** Properties of a DiscoverySpec. */
                    interface IDiscoverySpec {

                        /** DiscoverySpec enabled */
                        enabled?: (boolean|null);

                        /** DiscoverySpec includePatterns */
                        includePatterns?: (string[]|null);

                        /** DiscoverySpec excludePatterns */
                        excludePatterns?: (string[]|null);

                        /** DiscoverySpec csvOptions */
                        csvOptions?: (google.cloud.dataplex.v1.Asset.DiscoverySpec.ICsvOptions|null);

                        /** DiscoverySpec jsonOptions */
                        jsonOptions?: (google.cloud.dataplex.v1.Asset.DiscoverySpec.IJsonOptions|null);

                        /** DiscoverySpec schedule */
                        schedule?: (string|null);
                    }

                    /** Represents a DiscoverySpec. */
                    class DiscoverySpec implements IDiscoverySpec {

                        /**
                         * Constructs a new DiscoverySpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Asset.IDiscoverySpec);

                        /** DiscoverySpec enabled. */
                        public enabled: boolean;

                        /** DiscoverySpec includePatterns. */
                        public includePatterns: string[];

                        /** DiscoverySpec excludePatterns. */
                        public excludePatterns: string[];

                        /** DiscoverySpec csvOptions. */
                        public csvOptions?: (google.cloud.dataplex.v1.Asset.DiscoverySpec.ICsvOptions|null);

                        /** DiscoverySpec jsonOptions. */
                        public jsonOptions?: (google.cloud.dataplex.v1.Asset.DiscoverySpec.IJsonOptions|null);

                        /** DiscoverySpec schedule. */
                        public schedule?: (string|null);

                        /** DiscoverySpec trigger. */
                        public trigger?: "schedule";

                        /**
                         * Creates a new DiscoverySpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DiscoverySpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Asset.IDiscoverySpec): google.cloud.dataplex.v1.Asset.DiscoverySpec;

                        /**
                         * Encodes the specified DiscoverySpec message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoverySpec.verify|verify} messages.
                         * @param message DiscoverySpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Asset.IDiscoverySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DiscoverySpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoverySpec.verify|verify} messages.
                         * @param message DiscoverySpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.IDiscoverySpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DiscoverySpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DiscoverySpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.DiscoverySpec;

                        /**
                         * Decodes a DiscoverySpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DiscoverySpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.DiscoverySpec;

                        /**
                         * Verifies a DiscoverySpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DiscoverySpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DiscoverySpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.DiscoverySpec;

                        /**
                         * Creates a plain object from a DiscoverySpec message. Also converts values to other types if specified.
                         * @param message DiscoverySpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Asset.DiscoverySpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DiscoverySpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DiscoverySpec {

                        /** Properties of a CsvOptions. */
                        interface ICsvOptions {

                            /** CsvOptions headerRows */
                            headerRows?: (number|null);

                            /** CsvOptions delimiter */
                            delimiter?: (string|null);

                            /** CsvOptions encoding */
                            encoding?: (string|null);

                            /** CsvOptions disableTypeInference */
                            disableTypeInference?: (boolean|null);
                        }

                        /** Represents a CsvOptions. */
                        class CsvOptions implements ICsvOptions {

                            /**
                             * Constructs a new CsvOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Asset.DiscoverySpec.ICsvOptions);

                            /** CsvOptions headerRows. */
                            public headerRows: number;

                            /** CsvOptions delimiter. */
                            public delimiter: string;

                            /** CsvOptions encoding. */
                            public encoding: string;

                            /** CsvOptions disableTypeInference. */
                            public disableTypeInference: boolean;

                            /**
                             * Creates a new CsvOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CsvOptions instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Asset.DiscoverySpec.ICsvOptions): google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions;

                            /**
                             * Encodes the specified CsvOptions message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions.verify|verify} messages.
                             * @param message CsvOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Asset.DiscoverySpec.ICsvOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CsvOptions message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions.verify|verify} messages.
                             * @param message CsvOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.DiscoverySpec.ICsvOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CsvOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CsvOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions;

                            /**
                             * Decodes a CsvOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CsvOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions;

                            /**
                             * Verifies a CsvOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CsvOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CsvOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions;

                            /**
                             * Creates a plain object from a CsvOptions message. Also converts values to other types if specified.
                             * @param message CsvOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Asset.DiscoverySpec.CsvOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CsvOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a JsonOptions. */
                        interface IJsonOptions {

                            /** JsonOptions encoding */
                            encoding?: (string|null);

                            /** JsonOptions disableTypeInference */
                            disableTypeInference?: (boolean|null);
                        }

                        /** Represents a JsonOptions. */
                        class JsonOptions implements IJsonOptions {

                            /**
                             * Constructs a new JsonOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Asset.DiscoverySpec.IJsonOptions);

                            /** JsonOptions encoding. */
                            public encoding: string;

                            /** JsonOptions disableTypeInference. */
                            public disableTypeInference: boolean;

                            /**
                             * Creates a new JsonOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns JsonOptions instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Asset.DiscoverySpec.IJsonOptions): google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions;

                            /**
                             * Encodes the specified JsonOptions message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions.verify|verify} messages.
                             * @param message JsonOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Asset.DiscoverySpec.IJsonOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified JsonOptions message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions.verify|verify} messages.
                             * @param message JsonOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.DiscoverySpec.IJsonOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a JsonOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns JsonOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions;

                            /**
                             * Decodes a JsonOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns JsonOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions;

                            /**
                             * Verifies a JsonOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a JsonOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns JsonOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions;

                            /**
                             * Creates a plain object from a JsonOptions message. Also converts values to other types if specified.
                             * @param message JsonOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Asset.DiscoverySpec.JsonOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this JsonOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a ResourceSpec. */
                    interface IResourceSpec {

                        /** ResourceSpec name */
                        name?: (string|null);

                        /** ResourceSpec type */
                        type?: (google.cloud.dataplex.v1.Asset.ResourceSpec.Type|keyof typeof google.cloud.dataplex.v1.Asset.ResourceSpec.Type|null);
                    }

                    /** Represents a ResourceSpec. */
                    class ResourceSpec implements IResourceSpec {

                        /**
                         * Constructs a new ResourceSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Asset.IResourceSpec);

                        /** ResourceSpec name. */
                        public name: string;

                        /** ResourceSpec type. */
                        public type: (google.cloud.dataplex.v1.Asset.ResourceSpec.Type|keyof typeof google.cloud.dataplex.v1.Asset.ResourceSpec.Type);

                        /**
                         * Creates a new ResourceSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Asset.IResourceSpec): google.cloud.dataplex.v1.Asset.ResourceSpec;

                        /**
                         * Encodes the specified ResourceSpec message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.ResourceSpec.verify|verify} messages.
                         * @param message ResourceSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Asset.IResourceSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.ResourceSpec.verify|verify} messages.
                         * @param message ResourceSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.IResourceSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.ResourceSpec;

                        /**
                         * Decodes a ResourceSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.ResourceSpec;

                        /**
                         * Verifies a ResourceSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.ResourceSpec;

                        /**
                         * Creates a plain object from a ResourceSpec message. Also converts values to other types if specified.
                         * @param message ResourceSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Asset.ResourceSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ResourceSpec {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            STORAGE_BUCKET = 1,
                            BIGQUERY_DATASET = 2
                        }
                    }

                    /** Properties of a ResourceStatus. */
                    interface IResourceStatus {

                        /** ResourceStatus state */
                        state?: (google.cloud.dataplex.v1.Asset.ResourceStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.ResourceStatus.State|null);

                        /** ResourceStatus message */
                        message?: (string|null);

                        /** ResourceStatus updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ResourceStatus. */
                    class ResourceStatus implements IResourceStatus {

                        /**
                         * Constructs a new ResourceStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Asset.IResourceStatus);

                        /** ResourceStatus state. */
                        public state: (google.cloud.dataplex.v1.Asset.ResourceStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.ResourceStatus.State);

                        /** ResourceStatus message. */
                        public message: string;

                        /** ResourceStatus updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ResourceStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceStatus instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Asset.IResourceStatus): google.cloud.dataplex.v1.Asset.ResourceStatus;

                        /**
                         * Encodes the specified ResourceStatus message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.ResourceStatus.verify|verify} messages.
                         * @param message ResourceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Asset.IResourceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceStatus message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.ResourceStatus.verify|verify} messages.
                         * @param message ResourceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.IResourceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.ResourceStatus;

                        /**
                         * Decodes a ResourceStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.ResourceStatus;

                        /**
                         * Verifies a ResourceStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.ResourceStatus;

                        /**
                         * Creates a plain object from a ResourceStatus message. Also converts values to other types if specified.
                         * @param message ResourceStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Asset.ResourceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ResourceStatus {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            READY = 1,
                            ERROR = 2
                        }
                    }

                    /** Properties of a DiscoveryStatus. */
                    interface IDiscoveryStatus {

                        /** DiscoveryStatus state */
                        state?: (google.cloud.dataplex.v1.Asset.DiscoveryStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.DiscoveryStatus.State|null);

                        /** DiscoveryStatus message */
                        message?: (string|null);

                        /** DiscoveryStatus updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** DiscoveryStatus lastRunTime */
                        lastRunTime?: (google.protobuf.ITimestamp|null);

                        /** DiscoveryStatus stats */
                        stats?: (google.cloud.dataplex.v1.Asset.DiscoveryStatus.IStats|null);

                        /** DiscoveryStatus lastRunDuration */
                        lastRunDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a DiscoveryStatus. */
                    class DiscoveryStatus implements IDiscoveryStatus {

                        /**
                         * Constructs a new DiscoveryStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Asset.IDiscoveryStatus);

                        /** DiscoveryStatus state. */
                        public state: (google.cloud.dataplex.v1.Asset.DiscoveryStatus.State|keyof typeof google.cloud.dataplex.v1.Asset.DiscoveryStatus.State);

                        /** DiscoveryStatus message. */
                        public message: string;

                        /** DiscoveryStatus updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** DiscoveryStatus lastRunTime. */
                        public lastRunTime?: (google.protobuf.ITimestamp|null);

                        /** DiscoveryStatus stats. */
                        public stats?: (google.cloud.dataplex.v1.Asset.DiscoveryStatus.IStats|null);

                        /** DiscoveryStatus lastRunDuration. */
                        public lastRunDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new DiscoveryStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DiscoveryStatus instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Asset.IDiscoveryStatus): google.cloud.dataplex.v1.Asset.DiscoveryStatus;

                        /**
                         * Encodes the specified DiscoveryStatus message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoveryStatus.verify|verify} messages.
                         * @param message DiscoveryStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Asset.IDiscoveryStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DiscoveryStatus message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoveryStatus.verify|verify} messages.
                         * @param message DiscoveryStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.IDiscoveryStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DiscoveryStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DiscoveryStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.DiscoveryStatus;

                        /**
                         * Decodes a DiscoveryStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DiscoveryStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.DiscoveryStatus;

                        /**
                         * Verifies a DiscoveryStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DiscoveryStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DiscoveryStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.DiscoveryStatus;

                        /**
                         * Creates a plain object from a DiscoveryStatus message. Also converts values to other types if specified.
                         * @param message DiscoveryStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Asset.DiscoveryStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DiscoveryStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DiscoveryStatus {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            SCHEDULED = 1,
                            IN_PROGRESS = 2,
                            PAUSED = 3,
                            DISABLED = 5
                        }

                        /** Properties of a Stats. */
                        interface IStats {

                            /** Stats dataItems */
                            dataItems?: (number|Long|string|null);

                            /** Stats dataSize */
                            dataSize?: (number|Long|string|null);

                            /** Stats tables */
                            tables?: (number|Long|string|null);

                            /** Stats filesets */
                            filesets?: (number|Long|string|null);
                        }

                        /** Represents a Stats. */
                        class Stats implements IStats {

                            /**
                             * Constructs a new Stats.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Asset.DiscoveryStatus.IStats);

                            /** Stats dataItems. */
                            public dataItems: (number|Long|string);

                            /** Stats dataSize. */
                            public dataSize: (number|Long|string);

                            /** Stats tables. */
                            public tables: (number|Long|string);

                            /** Stats filesets. */
                            public filesets: (number|Long|string);

                            /**
                             * Creates a new Stats instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Stats instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Asset.DiscoveryStatus.IStats): google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats;

                            /**
                             * Encodes the specified Stats message. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats.verify|verify} messages.
                             * @param message Stats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Asset.DiscoveryStatus.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Stats message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats.verify|verify} messages.
                             * @param message Stats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Asset.DiscoveryStatus.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Stats message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Stats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats;

                            /**
                             * Decodes a Stats message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Stats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats;

                            /**
                             * Verifies a Stats message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Stats message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Stats
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats;

                            /**
                             * Creates a plain object from a Stats message. Also converts values to other types if specified.
                             * @param message Stats
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Asset.DiscoveryStatus.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Stats to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    ACTIVE = 1,
                    CREATING = 2,
                    DELETING = 3,
                    ACTION_REQUIRED = 4
                }

                /** Represents a DataplexService */
                class DataplexService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataplexService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataplexService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataplexService;

                    /**
                     * Calls CreateLake.
                     * @param request CreateLakeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createLake(request: google.cloud.dataplex.v1.ICreateLakeRequest, callback: google.cloud.dataplex.v1.DataplexService.CreateLakeCallback): void;

                    /**
                     * Calls CreateLake.
                     * @param request CreateLakeRequest message or plain object
                     * @returns Promise
                     */
                    public createLake(request: google.cloud.dataplex.v1.ICreateLakeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateLake.
                     * @param request UpdateLakeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateLake(request: google.cloud.dataplex.v1.IUpdateLakeRequest, callback: google.cloud.dataplex.v1.DataplexService.UpdateLakeCallback): void;

                    /**
                     * Calls UpdateLake.
                     * @param request UpdateLakeRequest message or plain object
                     * @returns Promise
                     */
                    public updateLake(request: google.cloud.dataplex.v1.IUpdateLakeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteLake.
                     * @param request DeleteLakeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteLake(request: google.cloud.dataplex.v1.IDeleteLakeRequest, callback: google.cloud.dataplex.v1.DataplexService.DeleteLakeCallback): void;

                    /**
                     * Calls DeleteLake.
                     * @param request DeleteLakeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteLake(request: google.cloud.dataplex.v1.IDeleteLakeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListLakes.
                     * @param request ListLakesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListLakesResponse
                     */
                    public listLakes(request: google.cloud.dataplex.v1.IListLakesRequest, callback: google.cloud.dataplex.v1.DataplexService.ListLakesCallback): void;

                    /**
                     * Calls ListLakes.
                     * @param request ListLakesRequest message or plain object
                     * @returns Promise
                     */
                    public listLakes(request: google.cloud.dataplex.v1.IListLakesRequest): Promise<google.cloud.dataplex.v1.ListLakesResponse>;

                    /**
                     * Calls GetLake.
                     * @param request GetLakeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Lake
                     */
                    public getLake(request: google.cloud.dataplex.v1.IGetLakeRequest, callback: google.cloud.dataplex.v1.DataplexService.GetLakeCallback): void;

                    /**
                     * Calls GetLake.
                     * @param request GetLakeRequest message or plain object
                     * @returns Promise
                     */
                    public getLake(request: google.cloud.dataplex.v1.IGetLakeRequest): Promise<google.cloud.dataplex.v1.Lake>;

                    /**
                     * Calls ListLakeActions.
                     * @param request ListLakeActionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListActionsResponse
                     */
                    public listLakeActions(request: google.cloud.dataplex.v1.IListLakeActionsRequest, callback: google.cloud.dataplex.v1.DataplexService.ListLakeActionsCallback): void;

                    /**
                     * Calls ListLakeActions.
                     * @param request ListLakeActionsRequest message or plain object
                     * @returns Promise
                     */
                    public listLakeActions(request: google.cloud.dataplex.v1.IListLakeActionsRequest): Promise<google.cloud.dataplex.v1.ListActionsResponse>;

                    /**
                     * Calls CreateZone.
                     * @param request CreateZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createZone(request: google.cloud.dataplex.v1.ICreateZoneRequest, callback: google.cloud.dataplex.v1.DataplexService.CreateZoneCallback): void;

                    /**
                     * Calls CreateZone.
                     * @param request CreateZoneRequest message or plain object
                     * @returns Promise
                     */
                    public createZone(request: google.cloud.dataplex.v1.ICreateZoneRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateZone.
                     * @param request UpdateZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateZone(request: google.cloud.dataplex.v1.IUpdateZoneRequest, callback: google.cloud.dataplex.v1.DataplexService.UpdateZoneCallback): void;

                    /**
                     * Calls UpdateZone.
                     * @param request UpdateZoneRequest message or plain object
                     * @returns Promise
                     */
                    public updateZone(request: google.cloud.dataplex.v1.IUpdateZoneRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteZone.
                     * @param request DeleteZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteZone(request: google.cloud.dataplex.v1.IDeleteZoneRequest, callback: google.cloud.dataplex.v1.DataplexService.DeleteZoneCallback): void;

                    /**
                     * Calls DeleteZone.
                     * @param request DeleteZoneRequest message or plain object
                     * @returns Promise
                     */
                    public deleteZone(request: google.cloud.dataplex.v1.IDeleteZoneRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListZones.
                     * @param request ListZonesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListZonesResponse
                     */
                    public listZones(request: google.cloud.dataplex.v1.IListZonesRequest, callback: google.cloud.dataplex.v1.DataplexService.ListZonesCallback): void;

                    /**
                     * Calls ListZones.
                     * @param request ListZonesRequest message or plain object
                     * @returns Promise
                     */
                    public listZones(request: google.cloud.dataplex.v1.IListZonesRequest): Promise<google.cloud.dataplex.v1.ListZonesResponse>;

                    /**
                     * Calls GetZone.
                     * @param request GetZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Zone
                     */
                    public getZone(request: google.cloud.dataplex.v1.IGetZoneRequest, callback: google.cloud.dataplex.v1.DataplexService.GetZoneCallback): void;

                    /**
                     * Calls GetZone.
                     * @param request GetZoneRequest message or plain object
                     * @returns Promise
                     */
                    public getZone(request: google.cloud.dataplex.v1.IGetZoneRequest): Promise<google.cloud.dataplex.v1.Zone>;

                    /**
                     * Calls ListZoneActions.
                     * @param request ListZoneActionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListActionsResponse
                     */
                    public listZoneActions(request: google.cloud.dataplex.v1.IListZoneActionsRequest, callback: google.cloud.dataplex.v1.DataplexService.ListZoneActionsCallback): void;

                    /**
                     * Calls ListZoneActions.
                     * @param request ListZoneActionsRequest message or plain object
                     * @returns Promise
                     */
                    public listZoneActions(request: google.cloud.dataplex.v1.IListZoneActionsRequest): Promise<google.cloud.dataplex.v1.ListActionsResponse>;

                    /**
                     * Calls CreateAsset.
                     * @param request CreateAssetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAsset(request: google.cloud.dataplex.v1.ICreateAssetRequest, callback: google.cloud.dataplex.v1.DataplexService.CreateAssetCallback): void;

                    /**
                     * Calls CreateAsset.
                     * @param request CreateAssetRequest message or plain object
                     * @returns Promise
                     */
                    public createAsset(request: google.cloud.dataplex.v1.ICreateAssetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAsset.
                     * @param request UpdateAssetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAsset(request: google.cloud.dataplex.v1.IUpdateAssetRequest, callback: google.cloud.dataplex.v1.DataplexService.UpdateAssetCallback): void;

                    /**
                     * Calls UpdateAsset.
                     * @param request UpdateAssetRequest message or plain object
                     * @returns Promise
                     */
                    public updateAsset(request: google.cloud.dataplex.v1.IUpdateAssetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAsset.
                     * @param request DeleteAssetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAsset(request: google.cloud.dataplex.v1.IDeleteAssetRequest, callback: google.cloud.dataplex.v1.DataplexService.DeleteAssetCallback): void;

                    /**
                     * Calls DeleteAsset.
                     * @param request DeleteAssetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAsset(request: google.cloud.dataplex.v1.IDeleteAssetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAssetsResponse
                     */
                    public listAssets(request: google.cloud.dataplex.v1.IListAssetsRequest, callback: google.cloud.dataplex.v1.DataplexService.ListAssetsCallback): void;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAssets(request: google.cloud.dataplex.v1.IListAssetsRequest): Promise<google.cloud.dataplex.v1.ListAssetsResponse>;

                    /**
                     * Calls GetAsset.
                     * @param request GetAssetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Asset
                     */
                    public getAsset(request: google.cloud.dataplex.v1.IGetAssetRequest, callback: google.cloud.dataplex.v1.DataplexService.GetAssetCallback): void;

                    /**
                     * Calls GetAsset.
                     * @param request GetAssetRequest message or plain object
                     * @returns Promise
                     */
                    public getAsset(request: google.cloud.dataplex.v1.IGetAssetRequest): Promise<google.cloud.dataplex.v1.Asset>;

                    /**
                     * Calls ListAssetActions.
                     * @param request ListAssetActionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListActionsResponse
                     */
                    public listAssetActions(request: google.cloud.dataplex.v1.IListAssetActionsRequest, callback: google.cloud.dataplex.v1.DataplexService.ListAssetActionsCallback): void;

                    /**
                     * Calls ListAssetActions.
                     * @param request ListAssetActionsRequest message or plain object
                     * @returns Promise
                     */
                    public listAssetActions(request: google.cloud.dataplex.v1.IListAssetActionsRequest): Promise<google.cloud.dataplex.v1.ListActionsResponse>;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTask(request: google.cloud.dataplex.v1.ICreateTaskRequest, callback: google.cloud.dataplex.v1.DataplexService.CreateTaskCallback): void;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public createTask(request: google.cloud.dataplex.v1.ICreateTaskRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTask.
                     * @param request UpdateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTask(request: google.cloud.dataplex.v1.IUpdateTaskRequest, callback: google.cloud.dataplex.v1.DataplexService.UpdateTaskCallback): void;

                    /**
                     * Calls UpdateTask.
                     * @param request UpdateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public updateTask(request: google.cloud.dataplex.v1.IUpdateTaskRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTask(request: google.cloud.dataplex.v1.IDeleteTaskRequest, callback: google.cloud.dataplex.v1.DataplexService.DeleteTaskCallback): void;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTask(request: google.cloud.dataplex.v1.IDeleteTaskRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.dataplex.v1.IListTasksRequest, callback: google.cloud.dataplex.v1.DataplexService.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.dataplex.v1.IListTasksRequest): Promise<google.cloud.dataplex.v1.ListTasksResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.dataplex.v1.IGetTaskRequest, callback: google.cloud.dataplex.v1.DataplexService.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.dataplex.v1.IGetTaskRequest): Promise<google.cloud.dataplex.v1.Task>;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.dataplex.v1.IListJobsRequest, callback: google.cloud.dataplex.v1.DataplexService.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.dataplex.v1.IListJobsRequest): Promise<google.cloud.dataplex.v1.ListJobsResponse>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.dataplex.v1.IGetJobRequest, callback: google.cloud.dataplex.v1.DataplexService.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.dataplex.v1.IGetJobRequest): Promise<google.cloud.dataplex.v1.Job>;

                    /**
                     * Calls CancelJob.
                     * @param request CancelJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public cancelJob(request: google.cloud.dataplex.v1.ICancelJobRequest, callback: google.cloud.dataplex.v1.DataplexService.CancelJobCallback): void;

                    /**
                     * Calls CancelJob.
                     * @param request CancelJobRequest message or plain object
                     * @returns Promise
                     */
                    public cancelJob(request: google.cloud.dataplex.v1.ICancelJobRequest): Promise<google.protobuf.Empty>;
                }

                namespace DataplexService {

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#createLake}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateLakeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#updateLake}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateLakeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#deleteLake}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteLakeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listLakes}.
                     * @param error Error, if any
                     * @param [response] ListLakesResponse
                     */
                    type ListLakesCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListLakesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#getLake}.
                     * @param error Error, if any
                     * @param [response] Lake
                     */
                    type GetLakeCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Lake) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listLakeActions}.
                     * @param error Error, if any
                     * @param [response] ListActionsResponse
                     */
                    type ListLakeActionsCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListActionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#createZone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateZoneCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#updateZone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateZoneCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#deleteZone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteZoneCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listZones}.
                     * @param error Error, if any
                     * @param [response] ListZonesResponse
                     */
                    type ListZonesCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListZonesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#getZone}.
                     * @param error Error, if any
                     * @param [response] Zone
                     */
                    type GetZoneCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Zone) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listZoneActions}.
                     * @param error Error, if any
                     * @param [response] ListActionsResponse
                     */
                    type ListZoneActionsCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListActionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#createAsset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAssetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#updateAsset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAssetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#deleteAsset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAssetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listAssets}.
                     * @param error Error, if any
                     * @param [response] ListAssetsResponse
                     */
                    type ListAssetsCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListAssetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#getAsset}.
                     * @param error Error, if any
                     * @param [response] Asset
                     */
                    type GetAssetCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Asset) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listAssetActions}.
                     * @param error Error, if any
                     * @param [response] ListActionsResponse
                     */
                    type ListAssetActionsCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListActionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#createTask}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTaskCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#updateTask}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTaskCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#deleteTask}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTaskCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.dataplex.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataplex.v1.DataplexService#cancelJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type CancelJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a CreateLakeRequest. */
                interface ICreateLakeRequest {

                    /** CreateLakeRequest parent */
                    parent?: (string|null);

                    /** CreateLakeRequest lakeId */
                    lakeId?: (string|null);

                    /** CreateLakeRequest lake */
                    lake?: (google.cloud.dataplex.v1.ILake|null);

                    /** CreateLakeRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateLakeRequest. */
                class CreateLakeRequest implements ICreateLakeRequest {

                    /**
                     * Constructs a new CreateLakeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ICreateLakeRequest);

                    /** CreateLakeRequest parent. */
                    public parent: string;

                    /** CreateLakeRequest lakeId. */
                    public lakeId: string;

                    /** CreateLakeRequest lake. */
                    public lake?: (google.cloud.dataplex.v1.ILake|null);

                    /** CreateLakeRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateLakeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateLakeRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ICreateLakeRequest): google.cloud.dataplex.v1.CreateLakeRequest;

                    /**
                     * Encodes the specified CreateLakeRequest message. Does not implicitly {@link google.cloud.dataplex.v1.CreateLakeRequest.verify|verify} messages.
                     * @param message CreateLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ICreateLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateLakeRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.CreateLakeRequest.verify|verify} messages.
                     * @param message CreateLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ICreateLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateLakeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.CreateLakeRequest;

                    /**
                     * Decodes a CreateLakeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.CreateLakeRequest;

                    /**
                     * Verifies a CreateLakeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateLakeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateLakeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.CreateLakeRequest;

                    /**
                     * Creates a plain object from a CreateLakeRequest message. Also converts values to other types if specified.
                     * @param message CreateLakeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.CreateLakeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateLakeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateLakeRequest. */
                interface IUpdateLakeRequest {

                    /** UpdateLakeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateLakeRequest lake */
                    lake?: (google.cloud.dataplex.v1.ILake|null);

                    /** UpdateLakeRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateLakeRequest. */
                class UpdateLakeRequest implements IUpdateLakeRequest {

                    /**
                     * Constructs a new UpdateLakeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IUpdateLakeRequest);

                    /** UpdateLakeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateLakeRequest lake. */
                    public lake?: (google.cloud.dataplex.v1.ILake|null);

                    /** UpdateLakeRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateLakeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateLakeRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IUpdateLakeRequest): google.cloud.dataplex.v1.UpdateLakeRequest;

                    /**
                     * Encodes the specified UpdateLakeRequest message. Does not implicitly {@link google.cloud.dataplex.v1.UpdateLakeRequest.verify|verify} messages.
                     * @param message UpdateLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IUpdateLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateLakeRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.UpdateLakeRequest.verify|verify} messages.
                     * @param message UpdateLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IUpdateLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateLakeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.UpdateLakeRequest;

                    /**
                     * Decodes an UpdateLakeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.UpdateLakeRequest;

                    /**
                     * Verifies an UpdateLakeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateLakeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateLakeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.UpdateLakeRequest;

                    /**
                     * Creates a plain object from an UpdateLakeRequest message. Also converts values to other types if specified.
                     * @param message UpdateLakeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.UpdateLakeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateLakeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteLakeRequest. */
                interface IDeleteLakeRequest {

                    /** DeleteLakeRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteLakeRequest. */
                class DeleteLakeRequest implements IDeleteLakeRequest {

                    /**
                     * Constructs a new DeleteLakeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IDeleteLakeRequest);

                    /** DeleteLakeRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteLakeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteLakeRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IDeleteLakeRequest): google.cloud.dataplex.v1.DeleteLakeRequest;

                    /**
                     * Encodes the specified DeleteLakeRequest message. Does not implicitly {@link google.cloud.dataplex.v1.DeleteLakeRequest.verify|verify} messages.
                     * @param message DeleteLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IDeleteLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteLakeRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DeleteLakeRequest.verify|verify} messages.
                     * @param message DeleteLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IDeleteLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteLakeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DeleteLakeRequest;

                    /**
                     * Decodes a DeleteLakeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DeleteLakeRequest;

                    /**
                     * Verifies a DeleteLakeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteLakeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteLakeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DeleteLakeRequest;

                    /**
                     * Creates a plain object from a DeleteLakeRequest message. Also converts values to other types if specified.
                     * @param message DeleteLakeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.DeleteLakeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteLakeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListLakesRequest. */
                interface IListLakesRequest {

                    /** ListLakesRequest parent */
                    parent?: (string|null);

                    /** ListLakesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListLakesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListLakesRequest filter */
                    filter?: (string|null);

                    /** ListLakesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListLakesRequest. */
                class ListLakesRequest implements IListLakesRequest {

                    /**
                     * Constructs a new ListLakesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListLakesRequest);

                    /** ListLakesRequest parent. */
                    public parent: string;

                    /** ListLakesRequest pageSize. */
                    public pageSize: number;

                    /** ListLakesRequest pageToken. */
                    public pageToken: string;

                    /** ListLakesRequest filter. */
                    public filter: string;

                    /** ListLakesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListLakesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListLakesRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListLakesRequest): google.cloud.dataplex.v1.ListLakesRequest;

                    /**
                     * Encodes the specified ListLakesRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListLakesRequest.verify|verify} messages.
                     * @param message ListLakesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListLakesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListLakesRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListLakesRequest.verify|verify} messages.
                     * @param message ListLakesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListLakesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListLakesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListLakesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListLakesRequest;

                    /**
                     * Decodes a ListLakesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListLakesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListLakesRequest;

                    /**
                     * Verifies a ListLakesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListLakesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListLakesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListLakesRequest;

                    /**
                     * Creates a plain object from a ListLakesRequest message. Also converts values to other types if specified.
                     * @param message ListLakesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListLakesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListLakesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListLakesResponse. */
                interface IListLakesResponse {

                    /** ListLakesResponse lakes */
                    lakes?: (google.cloud.dataplex.v1.ILake[]|null);

                    /** ListLakesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListLakesResponse unreachableLocations */
                    unreachableLocations?: (string[]|null);
                }

                /** Represents a ListLakesResponse. */
                class ListLakesResponse implements IListLakesResponse {

                    /**
                     * Constructs a new ListLakesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListLakesResponse);

                    /** ListLakesResponse lakes. */
                    public lakes: google.cloud.dataplex.v1.ILake[];

                    /** ListLakesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListLakesResponse unreachableLocations. */
                    public unreachableLocations: string[];

                    /**
                     * Creates a new ListLakesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListLakesResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListLakesResponse): google.cloud.dataplex.v1.ListLakesResponse;

                    /**
                     * Encodes the specified ListLakesResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListLakesResponse.verify|verify} messages.
                     * @param message ListLakesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListLakesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListLakesResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListLakesResponse.verify|verify} messages.
                     * @param message ListLakesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListLakesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListLakesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListLakesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListLakesResponse;

                    /**
                     * Decodes a ListLakesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListLakesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListLakesResponse;

                    /**
                     * Verifies a ListLakesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListLakesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListLakesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListLakesResponse;

                    /**
                     * Creates a plain object from a ListLakesResponse message. Also converts values to other types if specified.
                     * @param message ListLakesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListLakesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListLakesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListLakeActionsRequest. */
                interface IListLakeActionsRequest {

                    /** ListLakeActionsRequest parent */
                    parent?: (string|null);

                    /** ListLakeActionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListLakeActionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListLakeActionsRequest. */
                class ListLakeActionsRequest implements IListLakeActionsRequest {

                    /**
                     * Constructs a new ListLakeActionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListLakeActionsRequest);

                    /** ListLakeActionsRequest parent. */
                    public parent: string;

                    /** ListLakeActionsRequest pageSize. */
                    public pageSize: number;

                    /** ListLakeActionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListLakeActionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListLakeActionsRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListLakeActionsRequest): google.cloud.dataplex.v1.ListLakeActionsRequest;

                    /**
                     * Encodes the specified ListLakeActionsRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListLakeActionsRequest.verify|verify} messages.
                     * @param message ListLakeActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListLakeActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListLakeActionsRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListLakeActionsRequest.verify|verify} messages.
                     * @param message ListLakeActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListLakeActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListLakeActionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListLakeActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListLakeActionsRequest;

                    /**
                     * Decodes a ListLakeActionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListLakeActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListLakeActionsRequest;

                    /**
                     * Verifies a ListLakeActionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListLakeActionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListLakeActionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListLakeActionsRequest;

                    /**
                     * Creates a plain object from a ListLakeActionsRequest message. Also converts values to other types if specified.
                     * @param message ListLakeActionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListLakeActionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListLakeActionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListActionsResponse. */
                interface IListActionsResponse {

                    /** ListActionsResponse actions */
                    actions?: (google.cloud.dataplex.v1.IAction[]|null);

                    /** ListActionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListActionsResponse. */
                class ListActionsResponse implements IListActionsResponse {

                    /**
                     * Constructs a new ListActionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListActionsResponse);

                    /** ListActionsResponse actions. */
                    public actions: google.cloud.dataplex.v1.IAction[];

                    /** ListActionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListActionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListActionsResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListActionsResponse): google.cloud.dataplex.v1.ListActionsResponse;

                    /**
                     * Encodes the specified ListActionsResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListActionsResponse.verify|verify} messages.
                     * @param message ListActionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListActionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListActionsResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListActionsResponse.verify|verify} messages.
                     * @param message ListActionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListActionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListActionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListActionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListActionsResponse;

                    /**
                     * Decodes a ListActionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListActionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListActionsResponse;

                    /**
                     * Verifies a ListActionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListActionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListActionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListActionsResponse;

                    /**
                     * Creates a plain object from a ListActionsResponse message. Also converts values to other types if specified.
                     * @param message ListActionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListActionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListActionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetLakeRequest. */
                interface IGetLakeRequest {

                    /** GetLakeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetLakeRequest. */
                class GetLakeRequest implements IGetLakeRequest {

                    /**
                     * Constructs a new GetLakeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetLakeRequest);

                    /** GetLakeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetLakeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetLakeRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetLakeRequest): google.cloud.dataplex.v1.GetLakeRequest;

                    /**
                     * Encodes the specified GetLakeRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetLakeRequest.verify|verify} messages.
                     * @param message GetLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetLakeRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetLakeRequest.verify|verify} messages.
                     * @param message GetLakeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetLakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetLakeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetLakeRequest;

                    /**
                     * Decodes a GetLakeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetLakeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetLakeRequest;

                    /**
                     * Verifies a GetLakeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetLakeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetLakeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetLakeRequest;

                    /**
                     * Creates a plain object from a GetLakeRequest message. Also converts values to other types if specified.
                     * @param message GetLakeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetLakeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetLakeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateZoneRequest. */
                interface ICreateZoneRequest {

                    /** CreateZoneRequest parent */
                    parent?: (string|null);

                    /** CreateZoneRequest zoneId */
                    zoneId?: (string|null);

                    /** CreateZoneRequest zone */
                    zone?: (google.cloud.dataplex.v1.IZone|null);

                    /** CreateZoneRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateZoneRequest. */
                class CreateZoneRequest implements ICreateZoneRequest {

                    /**
                     * Constructs a new CreateZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ICreateZoneRequest);

                    /** CreateZoneRequest parent. */
                    public parent: string;

                    /** CreateZoneRequest zoneId. */
                    public zoneId: string;

                    /** CreateZoneRequest zone. */
                    public zone?: (google.cloud.dataplex.v1.IZone|null);

                    /** CreateZoneRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateZoneRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ICreateZoneRequest): google.cloud.dataplex.v1.CreateZoneRequest;

                    /**
                     * Encodes the specified CreateZoneRequest message. Does not implicitly {@link google.cloud.dataplex.v1.CreateZoneRequest.verify|verify} messages.
                     * @param message CreateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ICreateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateZoneRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.CreateZoneRequest.verify|verify} messages.
                     * @param message CreateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ICreateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.CreateZoneRequest;

                    /**
                     * Decodes a CreateZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.CreateZoneRequest;

                    /**
                     * Verifies a CreateZoneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateZoneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateZoneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.CreateZoneRequest;

                    /**
                     * Creates a plain object from a CreateZoneRequest message. Also converts values to other types if specified.
                     * @param message CreateZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.CreateZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateZoneRequest. */
                interface IUpdateZoneRequest {

                    /** UpdateZoneRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateZoneRequest zone */
                    zone?: (google.cloud.dataplex.v1.IZone|null);

                    /** UpdateZoneRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateZoneRequest. */
                class UpdateZoneRequest implements IUpdateZoneRequest {

                    /**
                     * Constructs a new UpdateZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IUpdateZoneRequest);

                    /** UpdateZoneRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateZoneRequest zone. */
                    public zone?: (google.cloud.dataplex.v1.IZone|null);

                    /** UpdateZoneRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateZoneRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IUpdateZoneRequest): google.cloud.dataplex.v1.UpdateZoneRequest;

                    /**
                     * Encodes the specified UpdateZoneRequest message. Does not implicitly {@link google.cloud.dataplex.v1.UpdateZoneRequest.verify|verify} messages.
                     * @param message UpdateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IUpdateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateZoneRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.UpdateZoneRequest.verify|verify} messages.
                     * @param message UpdateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IUpdateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.UpdateZoneRequest;

                    /**
                     * Decodes an UpdateZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.UpdateZoneRequest;

                    /**
                     * Verifies an UpdateZoneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateZoneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateZoneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.UpdateZoneRequest;

                    /**
                     * Creates a plain object from an UpdateZoneRequest message. Also converts values to other types if specified.
                     * @param message UpdateZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.UpdateZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteZoneRequest. */
                interface IDeleteZoneRequest {

                    /** DeleteZoneRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteZoneRequest. */
                class DeleteZoneRequest implements IDeleteZoneRequest {

                    /**
                     * Constructs a new DeleteZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IDeleteZoneRequest);

                    /** DeleteZoneRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteZoneRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IDeleteZoneRequest): google.cloud.dataplex.v1.DeleteZoneRequest;

                    /**
                     * Encodes the specified DeleteZoneRequest message. Does not implicitly {@link google.cloud.dataplex.v1.DeleteZoneRequest.verify|verify} messages.
                     * @param message DeleteZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IDeleteZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteZoneRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DeleteZoneRequest.verify|verify} messages.
                     * @param message DeleteZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IDeleteZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DeleteZoneRequest;

                    /**
                     * Decodes a DeleteZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DeleteZoneRequest;

                    /**
                     * Verifies a DeleteZoneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteZoneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteZoneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DeleteZoneRequest;

                    /**
                     * Creates a plain object from a DeleteZoneRequest message. Also converts values to other types if specified.
                     * @param message DeleteZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.DeleteZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListZonesRequest. */
                interface IListZonesRequest {

                    /** ListZonesRequest parent */
                    parent?: (string|null);

                    /** ListZonesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListZonesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListZonesRequest filter */
                    filter?: (string|null);

                    /** ListZonesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListZonesRequest. */
                class ListZonesRequest implements IListZonesRequest {

                    /**
                     * Constructs a new ListZonesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListZonesRequest);

                    /** ListZonesRequest parent. */
                    public parent: string;

                    /** ListZonesRequest pageSize. */
                    public pageSize: number;

                    /** ListZonesRequest pageToken. */
                    public pageToken: string;

                    /** ListZonesRequest filter. */
                    public filter: string;

                    /** ListZonesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListZonesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListZonesRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListZonesRequest): google.cloud.dataplex.v1.ListZonesRequest;

                    /**
                     * Encodes the specified ListZonesRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListZonesRequest.verify|verify} messages.
                     * @param message ListZonesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListZonesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZonesRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListZonesRequest.verify|verify} messages.
                     * @param message ListZonesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListZonesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZonesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZonesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListZonesRequest;

                    /**
                     * Decodes a ListZonesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZonesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListZonesRequest;

                    /**
                     * Verifies a ListZonesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListZonesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListZonesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListZonesRequest;

                    /**
                     * Creates a plain object from a ListZonesRequest message. Also converts values to other types if specified.
                     * @param message ListZonesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListZonesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListZonesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListZonesResponse. */
                interface IListZonesResponse {

                    /** ListZonesResponse zones */
                    zones?: (google.cloud.dataplex.v1.IZone[]|null);

                    /** ListZonesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListZonesResponse. */
                class ListZonesResponse implements IListZonesResponse {

                    /**
                     * Constructs a new ListZonesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListZonesResponse);

                    /** ListZonesResponse zones. */
                    public zones: google.cloud.dataplex.v1.IZone[];

                    /** ListZonesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListZonesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListZonesResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListZonesResponse): google.cloud.dataplex.v1.ListZonesResponse;

                    /**
                     * Encodes the specified ListZonesResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListZonesResponse.verify|verify} messages.
                     * @param message ListZonesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListZonesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZonesResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListZonesResponse.verify|verify} messages.
                     * @param message ListZonesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListZonesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZonesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZonesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListZonesResponse;

                    /**
                     * Decodes a ListZonesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZonesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListZonesResponse;

                    /**
                     * Verifies a ListZonesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListZonesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListZonesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListZonesResponse;

                    /**
                     * Creates a plain object from a ListZonesResponse message. Also converts values to other types if specified.
                     * @param message ListZonesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListZonesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListZonesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListZoneActionsRequest. */
                interface IListZoneActionsRequest {

                    /** ListZoneActionsRequest parent */
                    parent?: (string|null);

                    /** ListZoneActionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListZoneActionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListZoneActionsRequest. */
                class ListZoneActionsRequest implements IListZoneActionsRequest {

                    /**
                     * Constructs a new ListZoneActionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListZoneActionsRequest);

                    /** ListZoneActionsRequest parent. */
                    public parent: string;

                    /** ListZoneActionsRequest pageSize. */
                    public pageSize: number;

                    /** ListZoneActionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListZoneActionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListZoneActionsRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListZoneActionsRequest): google.cloud.dataplex.v1.ListZoneActionsRequest;

                    /**
                     * Encodes the specified ListZoneActionsRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListZoneActionsRequest.verify|verify} messages.
                     * @param message ListZoneActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListZoneActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZoneActionsRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListZoneActionsRequest.verify|verify} messages.
                     * @param message ListZoneActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListZoneActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZoneActionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZoneActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListZoneActionsRequest;

                    /**
                     * Decodes a ListZoneActionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZoneActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListZoneActionsRequest;

                    /**
                     * Verifies a ListZoneActionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListZoneActionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListZoneActionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListZoneActionsRequest;

                    /**
                     * Creates a plain object from a ListZoneActionsRequest message. Also converts values to other types if specified.
                     * @param message ListZoneActionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListZoneActionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListZoneActionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetZoneRequest. */
                interface IGetZoneRequest {

                    /** GetZoneRequest name */
                    name?: (string|null);
                }

                /** Represents a GetZoneRequest. */
                class GetZoneRequest implements IGetZoneRequest {

                    /**
                     * Constructs a new GetZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetZoneRequest);

                    /** GetZoneRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetZoneRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetZoneRequest): google.cloud.dataplex.v1.GetZoneRequest;

                    /**
                     * Encodes the specified GetZoneRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetZoneRequest.verify|verify} messages.
                     * @param message GetZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetZoneRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetZoneRequest.verify|verify} messages.
                     * @param message GetZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetZoneRequest;

                    /**
                     * Decodes a GetZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetZoneRequest;

                    /**
                     * Verifies a GetZoneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetZoneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetZoneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetZoneRequest;

                    /**
                     * Creates a plain object from a GetZoneRequest message. Also converts values to other types if specified.
                     * @param message GetZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAssetRequest. */
                interface ICreateAssetRequest {

                    /** CreateAssetRequest parent */
                    parent?: (string|null);

                    /** CreateAssetRequest assetId */
                    assetId?: (string|null);

                    /** CreateAssetRequest asset */
                    asset?: (google.cloud.dataplex.v1.IAsset|null);

                    /** CreateAssetRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateAssetRequest. */
                class CreateAssetRequest implements ICreateAssetRequest {

                    /**
                     * Constructs a new CreateAssetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ICreateAssetRequest);

                    /** CreateAssetRequest parent. */
                    public parent: string;

                    /** CreateAssetRequest assetId. */
                    public assetId: string;

                    /** CreateAssetRequest asset. */
                    public asset?: (google.cloud.dataplex.v1.IAsset|null);

                    /** CreateAssetRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateAssetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAssetRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ICreateAssetRequest): google.cloud.dataplex.v1.CreateAssetRequest;

                    /**
                     * Encodes the specified CreateAssetRequest message. Does not implicitly {@link google.cloud.dataplex.v1.CreateAssetRequest.verify|verify} messages.
                     * @param message CreateAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ICreateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAssetRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.CreateAssetRequest.verify|verify} messages.
                     * @param message CreateAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ICreateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAssetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.CreateAssetRequest;

                    /**
                     * Decodes a CreateAssetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.CreateAssetRequest;

                    /**
                     * Verifies a CreateAssetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAssetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAssetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.CreateAssetRequest;

                    /**
                     * Creates a plain object from a CreateAssetRequest message. Also converts values to other types if specified.
                     * @param message CreateAssetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.CreateAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAssetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAssetRequest. */
                interface IUpdateAssetRequest {

                    /** UpdateAssetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAssetRequest asset */
                    asset?: (google.cloud.dataplex.v1.IAsset|null);

                    /** UpdateAssetRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateAssetRequest. */
                class UpdateAssetRequest implements IUpdateAssetRequest {

                    /**
                     * Constructs a new UpdateAssetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IUpdateAssetRequest);

                    /** UpdateAssetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAssetRequest asset. */
                    public asset?: (google.cloud.dataplex.v1.IAsset|null);

                    /** UpdateAssetRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateAssetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAssetRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IUpdateAssetRequest): google.cloud.dataplex.v1.UpdateAssetRequest;

                    /**
                     * Encodes the specified UpdateAssetRequest message. Does not implicitly {@link google.cloud.dataplex.v1.UpdateAssetRequest.verify|verify} messages.
                     * @param message UpdateAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IUpdateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAssetRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.UpdateAssetRequest.verify|verify} messages.
                     * @param message UpdateAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IUpdateAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAssetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.UpdateAssetRequest;

                    /**
                     * Decodes an UpdateAssetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.UpdateAssetRequest;

                    /**
                     * Verifies an UpdateAssetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAssetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAssetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.UpdateAssetRequest;

                    /**
                     * Creates a plain object from an UpdateAssetRequest message. Also converts values to other types if specified.
                     * @param message UpdateAssetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.UpdateAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAssetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAssetRequest. */
                interface IDeleteAssetRequest {

                    /** DeleteAssetRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAssetRequest. */
                class DeleteAssetRequest implements IDeleteAssetRequest {

                    /**
                     * Constructs a new DeleteAssetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IDeleteAssetRequest);

                    /** DeleteAssetRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAssetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAssetRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IDeleteAssetRequest): google.cloud.dataplex.v1.DeleteAssetRequest;

                    /**
                     * Encodes the specified DeleteAssetRequest message. Does not implicitly {@link google.cloud.dataplex.v1.DeleteAssetRequest.verify|verify} messages.
                     * @param message DeleteAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IDeleteAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAssetRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DeleteAssetRequest.verify|verify} messages.
                     * @param message DeleteAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IDeleteAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAssetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DeleteAssetRequest;

                    /**
                     * Decodes a DeleteAssetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DeleteAssetRequest;

                    /**
                     * Verifies a DeleteAssetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAssetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAssetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DeleteAssetRequest;

                    /**
                     * Creates a plain object from a DeleteAssetRequest message. Also converts values to other types if specified.
                     * @param message DeleteAssetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.DeleteAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAssetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetsRequest. */
                interface IListAssetsRequest {

                    /** ListAssetsRequest parent */
                    parent?: (string|null);

                    /** ListAssetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAssetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAssetsRequest filter */
                    filter?: (string|null);

                    /** ListAssetsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAssetsRequest. */
                class ListAssetsRequest implements IListAssetsRequest {

                    /**
                     * Constructs a new ListAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListAssetsRequest);

                    /** ListAssetsRequest parent. */
                    public parent: string;

                    /** ListAssetsRequest pageSize. */
                    public pageSize: number;

                    /** ListAssetsRequest pageToken. */
                    public pageToken: string;

                    /** ListAssetsRequest filter. */
                    public filter: string;

                    /** ListAssetsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListAssetsRequest): google.cloud.dataplex.v1.ListAssetsRequest;

                    /**
                     * Encodes the specified ListAssetsRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListAssetsRequest;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListAssetsRequest;

                    /**
                     * Verifies a ListAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListAssetsRequest;

                    /**
                     * Creates a plain object from a ListAssetsRequest message. Also converts values to other types if specified.
                     * @param message ListAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetsResponse. */
                interface IListAssetsResponse {

                    /** ListAssetsResponse assets */
                    assets?: (google.cloud.dataplex.v1.IAsset[]|null);

                    /** ListAssetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAssetsResponse. */
                class ListAssetsResponse implements IListAssetsResponse {

                    /**
                     * Constructs a new ListAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListAssetsResponse);

                    /** ListAssetsResponse assets. */
                    public assets: google.cloud.dataplex.v1.IAsset[];

                    /** ListAssetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListAssetsResponse): google.cloud.dataplex.v1.ListAssetsResponse;

                    /**
                     * Encodes the specified ListAssetsResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListAssetsResponse;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListAssetsResponse;

                    /**
                     * Verifies a ListAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListAssetsResponse;

                    /**
                     * Creates a plain object from a ListAssetsResponse message. Also converts values to other types if specified.
                     * @param message ListAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetActionsRequest. */
                interface IListAssetActionsRequest {

                    /** ListAssetActionsRequest parent */
                    parent?: (string|null);

                    /** ListAssetActionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAssetActionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAssetActionsRequest. */
                class ListAssetActionsRequest implements IListAssetActionsRequest {

                    /**
                     * Constructs a new ListAssetActionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListAssetActionsRequest);

                    /** ListAssetActionsRequest parent. */
                    public parent: string;

                    /** ListAssetActionsRequest pageSize. */
                    public pageSize: number;

                    /** ListAssetActionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAssetActionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetActionsRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListAssetActionsRequest): google.cloud.dataplex.v1.ListAssetActionsRequest;

                    /**
                     * Encodes the specified ListAssetActionsRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListAssetActionsRequest.verify|verify} messages.
                     * @param message ListAssetActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListAssetActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetActionsRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListAssetActionsRequest.verify|verify} messages.
                     * @param message ListAssetActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListAssetActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetActionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListAssetActionsRequest;

                    /**
                     * Decodes a ListAssetActionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListAssetActionsRequest;

                    /**
                     * Verifies a ListAssetActionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetActionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetActionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListAssetActionsRequest;

                    /**
                     * Creates a plain object from a ListAssetActionsRequest message. Also converts values to other types if specified.
                     * @param message ListAssetActionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListAssetActionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetActionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAssetRequest. */
                interface IGetAssetRequest {

                    /** GetAssetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAssetRequest. */
                class GetAssetRequest implements IGetAssetRequest {

                    /**
                     * Constructs a new GetAssetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetAssetRequest);

                    /** GetAssetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAssetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAssetRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetAssetRequest): google.cloud.dataplex.v1.GetAssetRequest;

                    /**
                     * Encodes the specified GetAssetRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetAssetRequest.verify|verify} messages.
                     * @param message GetAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAssetRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetAssetRequest.verify|verify} messages.
                     * @param message GetAssetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetAssetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAssetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetAssetRequest;

                    /**
                     * Decodes a GetAssetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAssetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetAssetRequest;

                    /**
                     * Verifies a GetAssetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAssetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAssetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetAssetRequest;

                    /**
                     * Creates a plain object from a GetAssetRequest message. Also converts values to other types if specified.
                     * @param message GetAssetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetAssetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAssetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IOperationMetadata);

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

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IOperationMetadata): google.cloud.dataplex.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.dataplex.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTaskRequest. */
                interface ICreateTaskRequest {

                    /** CreateTaskRequest parent */
                    parent?: (string|null);

                    /** CreateTaskRequest taskId */
                    taskId?: (string|null);

                    /** CreateTaskRequest task */
                    task?: (google.cloud.dataplex.v1.ITask|null);

                    /** CreateTaskRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateTaskRequest. */
                class CreateTaskRequest implements ICreateTaskRequest {

                    /**
                     * Constructs a new CreateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ICreateTaskRequest);

                    /** CreateTaskRequest parent. */
                    public parent: string;

                    /** CreateTaskRequest taskId. */
                    public taskId: string;

                    /** CreateTaskRequest task. */
                    public task?: (google.cloud.dataplex.v1.ITask|null);

                    /** CreateTaskRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ICreateTaskRequest): google.cloud.dataplex.v1.CreateTaskRequest;

                    /**
                     * Encodes the specified CreateTaskRequest message. Does not implicitly {@link google.cloud.dataplex.v1.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.CreateTaskRequest;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.CreateTaskRequest;

                    /**
                     * Verifies a CreateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.CreateTaskRequest;

                    /**
                     * Creates a plain object from a CreateTaskRequest message. Also converts values to other types if specified.
                     * @param message CreateTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.CreateTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTaskRequest. */
                interface IUpdateTaskRequest {

                    /** UpdateTaskRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTaskRequest task */
                    task?: (google.cloud.dataplex.v1.ITask|null);

                    /** UpdateTaskRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateTaskRequest. */
                class UpdateTaskRequest implements IUpdateTaskRequest {

                    /**
                     * Constructs a new UpdateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IUpdateTaskRequest);

                    /** UpdateTaskRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTaskRequest task. */
                    public task?: (google.cloud.dataplex.v1.ITask|null);

                    /** UpdateTaskRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IUpdateTaskRequest): google.cloud.dataplex.v1.UpdateTaskRequest;

                    /**
                     * Encodes the specified UpdateTaskRequest message. Does not implicitly {@link google.cloud.dataplex.v1.UpdateTaskRequest.verify|verify} messages.
                     * @param message UpdateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IUpdateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.UpdateTaskRequest.verify|verify} messages.
                     * @param message UpdateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IUpdateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.UpdateTaskRequest;

                    /**
                     * Decodes an UpdateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.UpdateTaskRequest;

                    /**
                     * Verifies an UpdateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.UpdateTaskRequest;

                    /**
                     * Creates a plain object from an UpdateTaskRequest message. Also converts values to other types if specified.
                     * @param message UpdateTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.UpdateTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTaskRequest. */
                interface IDeleteTaskRequest {

                    /** DeleteTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTaskRequest. */
                class DeleteTaskRequest implements IDeleteTaskRequest {

                    /**
                     * Constructs a new DeleteTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IDeleteTaskRequest);

                    /** DeleteTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTaskRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IDeleteTaskRequest): google.cloud.dataplex.v1.DeleteTaskRequest;

                    /**
                     * Encodes the specified DeleteTaskRequest message. Does not implicitly {@link google.cloud.dataplex.v1.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTaskRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.DeleteTaskRequest;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.DeleteTaskRequest;

                    /**
                     * Verifies a DeleteTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.DeleteTaskRequest;

                    /**
                     * Creates a plain object from a DeleteTaskRequest message. Also converts values to other types if specified.
                     * @param message DeleteTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.DeleteTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTasksRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTasksRequest filter */
                    filter?: (string|null);

                    /** ListTasksRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTasksRequest. */
                class ListTasksRequest implements IListTasksRequest {

                    /**
                     * Constructs a new ListTasksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /** ListTasksRequest filter. */
                    public filter: string;

                    /** ListTasksRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListTasksRequest): google.cloud.dataplex.v1.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListTasksRequest;

                    /**
                     * Verifies a ListTasksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.dataplex.v1.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTasksResponse unreachableLocations */
                    unreachableLocations?: (string[]|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.dataplex.v1.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTasksResponse unreachableLocations. */
                    public unreachableLocations: string[];

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListTasksResponse): google.cloud.dataplex.v1.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListTasksResponse;

                    /**
                     * Verifies a ListTasksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetTaskRequest): google.cloud.dataplex.v1.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetTaskRequest;

                    /**
                     * Verifies a GetTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetJobRequest. */
                interface IGetJobRequest {

                    /** GetJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetJobRequest. */
                class GetJobRequest implements IGetJobRequest {

                    /**
                     * Constructs a new GetJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IGetJobRequest): google.cloud.dataplex.v1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.dataplex.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.GetJobRequest;

                    /**
                     * Verifies a GetJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

                    /** ListJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListJobsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListJobsRequest. */
                class ListJobsRequest implements IListJobsRequest {

                    /**
                     * Constructs a new ListJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListJobsRequest): google.cloud.dataplex.v1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.dataplex.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListJobsRequest;

                    /**
                     * Verifies a ListJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.dataplex.v1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.dataplex.v1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IListJobsResponse): google.cloud.dataplex.v1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.dataplex.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.ListJobsResponse;

                    /**
                     * Verifies a ListJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelJobRequest. */
                interface ICancelJobRequest {

                    /** CancelJobRequest name */
                    name?: (string|null);
                }

                /** Represents a CancelJobRequest. */
                class CancelJobRequest implements ICancelJobRequest {

                    /**
                     * Constructs a new CancelJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ICancelJobRequest);

                    /** CancelJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new CancelJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelJobRequest instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ICancelJobRequest): google.cloud.dataplex.v1.CancelJobRequest;

                    /**
                     * Encodes the specified CancelJobRequest message. Does not implicitly {@link google.cloud.dataplex.v1.CancelJobRequest.verify|verify} messages.
                     * @param message CancelJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ICancelJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelJobRequest message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.CancelJobRequest.verify|verify} messages.
                     * @param message CancelJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ICancelJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.CancelJobRequest;

                    /**
                     * Decodes a CancelJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.CancelJobRequest;

                    /**
                     * Verifies a CancelJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.CancelJobRequest;

                    /**
                     * Creates a plain object from a CancelJobRequest message. Also converts values to other types if specified.
                     * @param message CancelJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.CancelJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task uid */
                    uid?: (string|null);

                    /** Task createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Task updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Task description */
                    description?: (string|null);

                    /** Task displayName */
                    displayName?: (string|null);

                    /** Task state */
                    state?: (google.cloud.dataplex.v1.State|keyof typeof google.cloud.dataplex.v1.State|null);

                    /** Task labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Task triggerSpec */
                    triggerSpec?: (google.cloud.dataplex.v1.Task.ITriggerSpec|null);

                    /** Task executionSpec */
                    executionSpec?: (google.cloud.dataplex.v1.Task.IExecutionSpec|null);

                    /** Task spark */
                    spark?: (google.cloud.dataplex.v1.Task.ISparkTaskConfig|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task uid. */
                    public uid: string;

                    /** Task createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Task updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Task description. */
                    public description: string;

                    /** Task displayName. */
                    public displayName: string;

                    /** Task state. */
                    public state: (google.cloud.dataplex.v1.State|keyof typeof google.cloud.dataplex.v1.State);

                    /** Task labels. */
                    public labels: { [k: string]: string };

                    /** Task triggerSpec. */
                    public triggerSpec?: (google.cloud.dataplex.v1.Task.ITriggerSpec|null);

                    /** Task executionSpec. */
                    public executionSpec?: (google.cloud.dataplex.v1.Task.IExecutionSpec|null);

                    /** Task spark. */
                    public spark?: (google.cloud.dataplex.v1.Task.ISparkTaskConfig|null);

                    /** Task config. */
                    public config?: "spark";

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.ITask): google.cloud.dataplex.v1.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.dataplex.v1.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task;

                    /**
                     * Verifies a Task message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Task message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Task
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Task {

                    /** Properties of an InfrastructureSpec. */
                    interface IInfrastructureSpec {

                        /** InfrastructureSpec batch */
                        batch?: (google.cloud.dataplex.v1.Task.InfrastructureSpec.IBatchComputeResources|null);

                        /** InfrastructureSpec containerImage */
                        containerImage?: (google.cloud.dataplex.v1.Task.InfrastructureSpec.IContainerImageRuntime|null);

                        /** InfrastructureSpec vpcNetwork */
                        vpcNetwork?: (google.cloud.dataplex.v1.Task.InfrastructureSpec.IVpcNetwork|null);
                    }

                    /** Represents an InfrastructureSpec. */
                    class InfrastructureSpec implements IInfrastructureSpec {

                        /**
                         * Constructs a new InfrastructureSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Task.IInfrastructureSpec);

                        /** InfrastructureSpec batch. */
                        public batch?: (google.cloud.dataplex.v1.Task.InfrastructureSpec.IBatchComputeResources|null);

                        /** InfrastructureSpec containerImage. */
                        public containerImage?: (google.cloud.dataplex.v1.Task.InfrastructureSpec.IContainerImageRuntime|null);

                        /** InfrastructureSpec vpcNetwork. */
                        public vpcNetwork?: (google.cloud.dataplex.v1.Task.InfrastructureSpec.IVpcNetwork|null);

                        /** InfrastructureSpec resources. */
                        public resources?: "batch";

                        /** InfrastructureSpec runtime. */
                        public runtime?: "containerImage";

                        /** InfrastructureSpec network. */
                        public network?: "vpcNetwork";

                        /**
                         * Creates a new InfrastructureSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InfrastructureSpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Task.IInfrastructureSpec): google.cloud.dataplex.v1.Task.InfrastructureSpec;

                        /**
                         * Encodes the specified InfrastructureSpec message. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.verify|verify} messages.
                         * @param message InfrastructureSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Task.IInfrastructureSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InfrastructureSpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.verify|verify} messages.
                         * @param message InfrastructureSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Task.IInfrastructureSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InfrastructureSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InfrastructureSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.InfrastructureSpec;

                        /**
                         * Decodes an InfrastructureSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InfrastructureSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.InfrastructureSpec;

                        /**
                         * Verifies an InfrastructureSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InfrastructureSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InfrastructureSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.InfrastructureSpec;

                        /**
                         * Creates a plain object from an InfrastructureSpec message. Also converts values to other types if specified.
                         * @param message InfrastructureSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Task.InfrastructureSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InfrastructureSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace InfrastructureSpec {

                        /** Properties of a BatchComputeResources. */
                        interface IBatchComputeResources {

                            /** BatchComputeResources executorsCount */
                            executorsCount?: (number|null);

                            /** BatchComputeResources maxExecutorsCount */
                            maxExecutorsCount?: (number|null);
                        }

                        /** Represents a BatchComputeResources. */
                        class BatchComputeResources implements IBatchComputeResources {

                            /**
                             * Constructs a new BatchComputeResources.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Task.InfrastructureSpec.IBatchComputeResources);

                            /** BatchComputeResources executorsCount. */
                            public executorsCount: number;

                            /** BatchComputeResources maxExecutorsCount. */
                            public maxExecutorsCount: number;

                            /**
                             * Creates a new BatchComputeResources instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns BatchComputeResources instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Task.InfrastructureSpec.IBatchComputeResources): google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources;

                            /**
                             * Encodes the specified BatchComputeResources message. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources.verify|verify} messages.
                             * @param message BatchComputeResources message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.IBatchComputeResources, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified BatchComputeResources message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources.verify|verify} messages.
                             * @param message BatchComputeResources message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.IBatchComputeResources, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a BatchComputeResources message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns BatchComputeResources
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources;

                            /**
                             * Decodes a BatchComputeResources message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns BatchComputeResources
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources;

                            /**
                             * Verifies a BatchComputeResources message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a BatchComputeResources message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns BatchComputeResources
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources;

                            /**
                             * Creates a plain object from a BatchComputeResources message. Also converts values to other types if specified.
                             * @param message BatchComputeResources
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.BatchComputeResources, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this BatchComputeResources to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ContainerImageRuntime. */
                        interface IContainerImageRuntime {

                            /** ContainerImageRuntime javaJars */
                            javaJars?: (string[]|null);

                            /** ContainerImageRuntime pythonPackages */
                            pythonPackages?: (string[]|null);

                            /** ContainerImageRuntime properties */
                            properties?: ({ [k: string]: string }|null);
                        }

                        /** Represents a ContainerImageRuntime. */
                        class ContainerImageRuntime implements IContainerImageRuntime {

                            /**
                             * Constructs a new ContainerImageRuntime.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Task.InfrastructureSpec.IContainerImageRuntime);

                            /** ContainerImageRuntime javaJars. */
                            public javaJars: string[];

                            /** ContainerImageRuntime pythonPackages. */
                            public pythonPackages: string[];

                            /** ContainerImageRuntime properties. */
                            public properties: { [k: string]: string };

                            /**
                             * Creates a new ContainerImageRuntime instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ContainerImageRuntime instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Task.InfrastructureSpec.IContainerImageRuntime): google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime;

                            /**
                             * Encodes the specified ContainerImageRuntime message. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime.verify|verify} messages.
                             * @param message ContainerImageRuntime message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.IContainerImageRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ContainerImageRuntime message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime.verify|verify} messages.
                             * @param message ContainerImageRuntime message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.IContainerImageRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ContainerImageRuntime message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ContainerImageRuntime
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime;

                            /**
                             * Decodes a ContainerImageRuntime message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ContainerImageRuntime
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime;

                            /**
                             * Verifies a ContainerImageRuntime message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ContainerImageRuntime message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ContainerImageRuntime
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime;

                            /**
                             * Creates a plain object from a ContainerImageRuntime message. Also converts values to other types if specified.
                             * @param message ContainerImageRuntime
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.ContainerImageRuntime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ContainerImageRuntime to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a VpcNetwork. */
                        interface IVpcNetwork {

                            /** VpcNetwork network */
                            network?: (string|null);

                            /** VpcNetwork subNetwork */
                            subNetwork?: (string|null);

                            /** VpcNetwork networkTags */
                            networkTags?: (string[]|null);
                        }

                        /** Represents a VpcNetwork. */
                        class VpcNetwork implements IVpcNetwork {

                            /**
                             * Constructs a new VpcNetwork.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataplex.v1.Task.InfrastructureSpec.IVpcNetwork);

                            /** VpcNetwork network. */
                            public network?: (string|null);

                            /** VpcNetwork subNetwork. */
                            public subNetwork?: (string|null);

                            /** VpcNetwork networkTags. */
                            public networkTags: string[];

                            /** VpcNetwork networkName. */
                            public networkName?: ("network"|"subNetwork");

                            /**
                             * Creates a new VpcNetwork instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns VpcNetwork instance
                             */
                            public static create(properties?: google.cloud.dataplex.v1.Task.InfrastructureSpec.IVpcNetwork): google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork;

                            /**
                             * Encodes the specified VpcNetwork message. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork.verify|verify} messages.
                             * @param message VpcNetwork message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.IVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified VpcNetwork message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork.verify|verify} messages.
                             * @param message VpcNetwork message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.IVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a VpcNetwork message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns VpcNetwork
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork;

                            /**
                             * Decodes a VpcNetwork message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns VpcNetwork
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork;

                            /**
                             * Verifies a VpcNetwork message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a VpcNetwork message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns VpcNetwork
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork;

                            /**
                             * Creates a plain object from a VpcNetwork message. Also converts values to other types if specified.
                             * @param message VpcNetwork
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataplex.v1.Task.InfrastructureSpec.VpcNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this VpcNetwork to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a TriggerSpec. */
                    interface ITriggerSpec {

                        /** TriggerSpec type */
                        type?: (google.cloud.dataplex.v1.Task.TriggerSpec.Type|keyof typeof google.cloud.dataplex.v1.Task.TriggerSpec.Type|null);

                        /** TriggerSpec startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** TriggerSpec disabled */
                        disabled?: (boolean|null);

                        /** TriggerSpec maxRetries */
                        maxRetries?: (number|null);

                        /** TriggerSpec schedule */
                        schedule?: (string|null);
                    }

                    /** Represents a TriggerSpec. */
                    class TriggerSpec implements ITriggerSpec {

                        /**
                         * Constructs a new TriggerSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Task.ITriggerSpec);

                        /** TriggerSpec type. */
                        public type: (google.cloud.dataplex.v1.Task.TriggerSpec.Type|keyof typeof google.cloud.dataplex.v1.Task.TriggerSpec.Type);

                        /** TriggerSpec startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** TriggerSpec disabled. */
                        public disabled: boolean;

                        /** TriggerSpec maxRetries. */
                        public maxRetries: number;

                        /** TriggerSpec schedule. */
                        public schedule?: (string|null);

                        /** TriggerSpec trigger. */
                        public trigger?: "schedule";

                        /**
                         * Creates a new TriggerSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerSpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Task.ITriggerSpec): google.cloud.dataplex.v1.Task.TriggerSpec;

                        /**
                         * Encodes the specified TriggerSpec message. Does not implicitly {@link google.cloud.dataplex.v1.Task.TriggerSpec.verify|verify} messages.
                         * @param message TriggerSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Task.ITriggerSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerSpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.TriggerSpec.verify|verify} messages.
                         * @param message TriggerSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Task.ITriggerSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.TriggerSpec;

                        /**
                         * Decodes a TriggerSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.TriggerSpec;

                        /**
                         * Verifies a TriggerSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.TriggerSpec;

                        /**
                         * Creates a plain object from a TriggerSpec message. Also converts values to other types if specified.
                         * @param message TriggerSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Task.TriggerSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TriggerSpec {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            ON_DEMAND = 1,
                            RECURRING = 2
                        }
                    }

                    /** Properties of an ExecutionSpec. */
                    interface IExecutionSpec {

                        /** ExecutionSpec args */
                        args?: ({ [k: string]: string }|null);

                        /** ExecutionSpec serviceAccount */
                        serviceAccount?: (string|null);

                        /** ExecutionSpec maxJobExecutionLifetime */
                        maxJobExecutionLifetime?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an ExecutionSpec. */
                    class ExecutionSpec implements IExecutionSpec {

                        /**
                         * Constructs a new ExecutionSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Task.IExecutionSpec);

                        /** ExecutionSpec args. */
                        public args: { [k: string]: string };

                        /** ExecutionSpec serviceAccount. */
                        public serviceAccount: string;

                        /** ExecutionSpec maxJobExecutionLifetime. */
                        public maxJobExecutionLifetime?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new ExecutionSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExecutionSpec instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Task.IExecutionSpec): google.cloud.dataplex.v1.Task.ExecutionSpec;

                        /**
                         * Encodes the specified ExecutionSpec message. Does not implicitly {@link google.cloud.dataplex.v1.Task.ExecutionSpec.verify|verify} messages.
                         * @param message ExecutionSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Task.IExecutionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExecutionSpec message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.ExecutionSpec.verify|verify} messages.
                         * @param message ExecutionSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Task.IExecutionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExecutionSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExecutionSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.ExecutionSpec;

                        /**
                         * Decodes an ExecutionSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExecutionSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.ExecutionSpec;

                        /**
                         * Verifies an ExecutionSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExecutionSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExecutionSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.ExecutionSpec;

                        /**
                         * Creates a plain object from an ExecutionSpec message. Also converts values to other types if specified.
                         * @param message ExecutionSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Task.ExecutionSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExecutionSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SparkTaskConfig. */
                    interface ISparkTaskConfig {

                        /** SparkTaskConfig mainJarFileUri */
                        mainJarFileUri?: (string|null);

                        /** SparkTaskConfig mainClass */
                        mainClass?: (string|null);

                        /** SparkTaskConfig pythonScriptFile */
                        pythonScriptFile?: (string|null);

                        /** SparkTaskConfig sqlScriptFile */
                        sqlScriptFile?: (string|null);

                        /** SparkTaskConfig sqlScript */
                        sqlScript?: (string|null);

                        /** SparkTaskConfig fileUris */
                        fileUris?: (string[]|null);

                        /** SparkTaskConfig archiveUris */
                        archiveUris?: (string[]|null);

                        /** SparkTaskConfig infrastructureSpec */
                        infrastructureSpec?: (google.cloud.dataplex.v1.Task.IInfrastructureSpec|null);
                    }

                    /** Represents a SparkTaskConfig. */
                    class SparkTaskConfig implements ISparkTaskConfig {

                        /**
                         * Constructs a new SparkTaskConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataplex.v1.Task.ISparkTaskConfig);

                        /** SparkTaskConfig mainJarFileUri. */
                        public mainJarFileUri?: (string|null);

                        /** SparkTaskConfig mainClass. */
                        public mainClass?: (string|null);

                        /** SparkTaskConfig pythonScriptFile. */
                        public pythonScriptFile?: (string|null);

                        /** SparkTaskConfig sqlScriptFile. */
                        public sqlScriptFile?: (string|null);

                        /** SparkTaskConfig sqlScript. */
                        public sqlScript?: (string|null);

                        /** SparkTaskConfig fileUris. */
                        public fileUris: string[];

                        /** SparkTaskConfig archiveUris. */
                        public archiveUris: string[];

                        /** SparkTaskConfig infrastructureSpec. */
                        public infrastructureSpec?: (google.cloud.dataplex.v1.Task.IInfrastructureSpec|null);

                        /** SparkTaskConfig driver. */
                        public driver?: ("mainJarFileUri"|"mainClass"|"pythonScriptFile"|"sqlScriptFile"|"sqlScript");

                        /**
                         * Creates a new SparkTaskConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SparkTaskConfig instance
                         */
                        public static create(properties?: google.cloud.dataplex.v1.Task.ISparkTaskConfig): google.cloud.dataplex.v1.Task.SparkTaskConfig;

                        /**
                         * Encodes the specified SparkTaskConfig message. Does not implicitly {@link google.cloud.dataplex.v1.Task.SparkTaskConfig.verify|verify} messages.
                         * @param message SparkTaskConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataplex.v1.Task.ISparkTaskConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SparkTaskConfig message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Task.SparkTaskConfig.verify|verify} messages.
                         * @param message SparkTaskConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataplex.v1.Task.ISparkTaskConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SparkTaskConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SparkTaskConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Task.SparkTaskConfig;

                        /**
                         * Decodes a SparkTaskConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SparkTaskConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Task.SparkTaskConfig;

                        /**
                         * Verifies a SparkTaskConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SparkTaskConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SparkTaskConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Task.SparkTaskConfig;

                        /**
                         * Creates a plain object from a SparkTaskConfig message. Also converts values to other types if specified.
                         * @param message SparkTaskConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataplex.v1.Task.SparkTaskConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SparkTaskConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job uid */
                    uid?: (string|null);

                    /** Job startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Job endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Job state */
                    state?: (google.cloud.dataplex.v1.Job.State|keyof typeof google.cloud.dataplex.v1.Job.State|null);

                    /** Job retryCount */
                    retryCount?: (number|null);

                    /** Job service */
                    service?: (google.cloud.dataplex.v1.Job.Service|keyof typeof google.cloud.dataplex.v1.Job.Service|null);

                    /** Job serviceJob */
                    serviceJob?: (string|null);

                    /** Job message */
                    message?: (string|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataplex.v1.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job uid. */
                    public uid: string;

                    /** Job startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Job endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Job state. */
                    public state: (google.cloud.dataplex.v1.Job.State|keyof typeof google.cloud.dataplex.v1.Job.State);

                    /** Job retryCount. */
                    public retryCount: number;

                    /** Job service. */
                    public service: (google.cloud.dataplex.v1.Job.Service|keyof typeof google.cloud.dataplex.v1.Job.Service);

                    /** Job serviceJob. */
                    public serviceJob: string;

                    /** Job message. */
                    public message: string;

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.dataplex.v1.IJob): google.cloud.dataplex.v1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.dataplex.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataplex.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.dataplex.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataplex.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataplex.v1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataplex.v1.Job;

                    /**
                     * Verifies a Job message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Job message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Job
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataplex.v1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataplex.v1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Job {

                    /** Service enum. */
                    enum Service {
                        SERVICE_UNSPECIFIED = 0,
                        DATAPROC = 1
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        CANCELLING = 2,
                        CANCELLED = 3,
                        SUCCEEDED = 4,
                        FAILED = 5,
                        ABORTED = 6
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
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
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
