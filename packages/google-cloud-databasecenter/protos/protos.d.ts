// Copyright 2026 Google LLC
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

        /** Namespace databasecenter. */
        namespace databasecenter {

            /** Namespace v1beta. */
            namespace v1beta {

                /** Properties of an Affiliation. */
                interface IAffiliation {

                    /** Affiliation resourceId */
                    resourceId?: (string|null);

                    /** Affiliation fullResourceName */
                    fullResourceName?: (string|null);

                    /** Affiliation lineages */
                    lineages?: (google.cloud.databasecenter.v1beta.Affiliation.ILineage[]|null);
                }

                /** Represents an Affiliation. */
                class Affiliation implements IAffiliation {

                    /**
                     * Constructs a new Affiliation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAffiliation);

                    /** Affiliation resourceId. */
                    public resourceId: string;

                    /** Affiliation fullResourceName. */
                    public fullResourceName: string;

                    /** Affiliation lineages. */
                    public lineages: google.cloud.databasecenter.v1beta.Affiliation.ILineage[];

                    /**
                     * Creates a new Affiliation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Affiliation instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAffiliation): google.cloud.databasecenter.v1beta.Affiliation;

                    /**
                     * Encodes the specified Affiliation message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Affiliation.verify|verify} messages.
                     * @param message Affiliation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAffiliation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Affiliation message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Affiliation.verify|verify} messages.
                     * @param message Affiliation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAffiliation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Affiliation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Affiliation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Affiliation;

                    /**
                     * Decodes an Affiliation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Affiliation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Affiliation;

                    /**
                     * Verifies an Affiliation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Affiliation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Affiliation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Affiliation;

                    /**
                     * Creates a plain object from an Affiliation message. Also converts values to other types if specified.
                     * @param message Affiliation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Affiliation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Affiliation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Affiliation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Affiliation {

                    /** Properties of a Lineage. */
                    interface ILineage {

                        /** Lineage sourceFqn */
                        sourceFqn?: (string|null);

                        /** Lineage targetFqn */
                        targetFqn?: (string|null);

                        /** Lineage processFqn */
                        processFqn?: (string|null);

                        /** Lineage processType */
                        processType?: (google.cloud.databasecenter.v1beta.Affiliation.ProcessType|keyof typeof google.cloud.databasecenter.v1beta.Affiliation.ProcessType|null);
                    }

                    /** Represents a Lineage. */
                    class Lineage implements ILineage {

                        /**
                         * Constructs a new Lineage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.databasecenter.v1beta.Affiliation.ILineage);

                        /** Lineage sourceFqn. */
                        public sourceFqn: string;

                        /** Lineage targetFqn. */
                        public targetFqn: string;

                        /** Lineage processFqn. */
                        public processFqn: string;

                        /** Lineage processType. */
                        public processType: (google.cloud.databasecenter.v1beta.Affiliation.ProcessType|keyof typeof google.cloud.databasecenter.v1beta.Affiliation.ProcessType);

                        /**
                         * Creates a new Lineage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Lineage instance
                         */
                        public static create(properties?: google.cloud.databasecenter.v1beta.Affiliation.ILineage): google.cloud.databasecenter.v1beta.Affiliation.Lineage;

                        /**
                         * Encodes the specified Lineage message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Affiliation.Lineage.verify|verify} messages.
                         * @param message Lineage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.databasecenter.v1beta.Affiliation.ILineage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Lineage message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Affiliation.Lineage.verify|verify} messages.
                         * @param message Lineage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.databasecenter.v1beta.Affiliation.ILineage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Lineage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Lineage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Affiliation.Lineage;

                        /**
                         * Decodes a Lineage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Lineage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Affiliation.Lineage;

                        /**
                         * Verifies a Lineage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Lineage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Lineage
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Affiliation.Lineage;

                        /**
                         * Creates a plain object from a Lineage message. Also converts values to other types if specified.
                         * @param message Lineage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.databasecenter.v1beta.Affiliation.Lineage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Lineage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Lineage
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ProcessType enum. */
                    enum ProcessType {
                        PROCESS_TYPE_UNSPECIFIED = 0,
                        COMPOSER = 1,
                        DATASTREAM = 2,
                        DATAFLOW = 3,
                        BIGQUERY = 4,
                        DATA_FUSION = 5,
                        DATAPROC = 6
                    }
                }

                /** Properties of a MachineConfig. */
                interface IMachineConfig {

                    /** MachineConfig memorySizeBytes */
                    memorySizeBytes?: (number|Long|string|null);

                    /** MachineConfig shardCount */
                    shardCount?: (number|null);

                    /** MachineConfig vcpuCount */
                    vcpuCount?: (number|null);

                    /** MachineConfig baselineSlotCount */
                    baselineSlotCount?: (number|Long|string|null);

                    /** MachineConfig maxReservationSlotCount */
                    maxReservationSlotCount?: (number|Long|string|null);
                }

                /** Represents a MachineConfig. */
                class MachineConfig implements IMachineConfig {

                    /**
                     * Constructs a new MachineConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IMachineConfig);

                    /** MachineConfig memorySizeBytes. */
                    public memorySizeBytes: (number|Long|string);

                    /** MachineConfig shardCount. */
                    public shardCount?: (number|null);

                    /** MachineConfig vcpuCount. */
                    public vcpuCount?: (number|null);

                    /** MachineConfig baselineSlotCount. */
                    public baselineSlotCount?: (number|Long|string|null);

                    /** MachineConfig maxReservationSlotCount. */
                    public maxReservationSlotCount?: (number|Long|string|null);

                    /**
                     * Creates a new MachineConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MachineConfig instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IMachineConfig): google.cloud.databasecenter.v1beta.MachineConfig;

                    /**
                     * Encodes the specified MachineConfig message. Does not implicitly {@link google.cloud.databasecenter.v1beta.MachineConfig.verify|verify} messages.
                     * @param message MachineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IMachineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MachineConfig message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.MachineConfig.verify|verify} messages.
                     * @param message MachineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IMachineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MachineConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MachineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.MachineConfig;

                    /**
                     * Decodes a MachineConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MachineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.MachineConfig;

                    /**
                     * Verifies a MachineConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MachineConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MachineConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.MachineConfig;

                    /**
                     * Creates a plain object from a MachineConfig message. Also converts values to other types if specified.
                     * @param message MachineConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.MachineConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MachineConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MachineConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Phase enum. */
                enum Phase {
                    PHASE_UNSPECIFIED = 0,
                    PHASE_WEEK1 = 1,
                    PHASE_WEEK2 = 2,
                    PHASE_WEEK5 = 3,
                    PHASE_ANY = 4
                }

                /** MaintenanceState enum. */
                enum MaintenanceState {
                    MAINTENANCE_STATE_UNSPECIFIED = 0,
                    MAINTENANCE_STATE_SCHEDULED = 1,
                    MAINTENANCE_STATE_IN_PROGRESS = 2,
                    MAINTENANCE_STATE_COMPLETED = 3,
                    MAINTENANCE_STATE_FAILED = 4
                }

                /** PossibleFailureReason enum. */
                enum PossibleFailureReason {
                    POSSIBLE_FAILURE_REASON_UNSPECIFIED = 0,
                    POSSIBLE_FAILURE_REASON_DENY_POLICY_CONFLICT = 1,
                    POSSIBLE_FAILURE_REASON_INSTANCE_IN_STOPPED_STATE = 2
                }

                /** Properties of a ResourceMaintenanceSchedule. */
                interface IResourceMaintenanceSchedule {

                    /** ResourceMaintenanceSchedule startTime */
                    startTime?: (google.type.ITimeOfDay|null);

                    /** ResourceMaintenanceSchedule day */
                    day?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);

                    /** ResourceMaintenanceSchedule phase */
                    phase?: (google.cloud.databasecenter.v1beta.Phase|keyof typeof google.cloud.databasecenter.v1beta.Phase|null);
                }

                /** Represents a ResourceMaintenanceSchedule. */
                class ResourceMaintenanceSchedule implements IResourceMaintenanceSchedule {

                    /**
                     * Constructs a new ResourceMaintenanceSchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule);

                    /** ResourceMaintenanceSchedule startTime. */
                    public startTime?: (google.type.ITimeOfDay|null);

                    /** ResourceMaintenanceSchedule day. */
                    public day: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /** ResourceMaintenanceSchedule phase. */
                    public phase: (google.cloud.databasecenter.v1beta.Phase|keyof typeof google.cloud.databasecenter.v1beta.Phase);

                    /**
                     * Creates a new ResourceMaintenanceSchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceMaintenanceSchedule instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule): google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule;

                    /**
                     * Encodes the specified ResourceMaintenanceSchedule message. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule.verify|verify} messages.
                     * @param message ResourceMaintenanceSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceMaintenanceSchedule message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule.verify|verify} messages.
                     * @param message ResourceMaintenanceSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceMaintenanceSchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceMaintenanceSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule;

                    /**
                     * Decodes a ResourceMaintenanceSchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceMaintenanceSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule;

                    /**
                     * Verifies a ResourceMaintenanceSchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceMaintenanceSchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceMaintenanceSchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule;

                    /**
                     * Creates a plain object from a ResourceMaintenanceSchedule message. Also converts values to other types if specified.
                     * @param message ResourceMaintenanceSchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.ResourceMaintenanceSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceMaintenanceSchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceMaintenanceSchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceMaintenanceDenySchedule. */
                interface IResourceMaintenanceDenySchedule {

                    /** ResourceMaintenanceDenySchedule startDate */
                    startDate?: (google.type.IDate|null);

                    /** ResourceMaintenanceDenySchedule endDate */
                    endDate?: (google.type.IDate|null);

                    /** ResourceMaintenanceDenySchedule time */
                    time?: (google.type.ITimeOfDay|null);
                }

                /** Represents a ResourceMaintenanceDenySchedule. */
                class ResourceMaintenanceDenySchedule implements IResourceMaintenanceDenySchedule {

                    /**
                     * Constructs a new ResourceMaintenanceDenySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IResourceMaintenanceDenySchedule);

                    /** ResourceMaintenanceDenySchedule startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** ResourceMaintenanceDenySchedule endDate. */
                    public endDate?: (google.type.IDate|null);

                    /** ResourceMaintenanceDenySchedule time. */
                    public time?: (google.type.ITimeOfDay|null);

                    /**
                     * Creates a new ResourceMaintenanceDenySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceMaintenanceDenySchedule instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IResourceMaintenanceDenySchedule): google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule;

                    /**
                     * Encodes the specified ResourceMaintenanceDenySchedule message. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule.verify|verify} messages.
                     * @param message ResourceMaintenanceDenySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IResourceMaintenanceDenySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceMaintenanceDenySchedule message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule.verify|verify} messages.
                     * @param message ResourceMaintenanceDenySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IResourceMaintenanceDenySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceMaintenanceDenySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceMaintenanceDenySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule;

                    /**
                     * Decodes a ResourceMaintenanceDenySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceMaintenanceDenySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule;

                    /**
                     * Verifies a ResourceMaintenanceDenySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceMaintenanceDenySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceMaintenanceDenySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule;

                    /**
                     * Creates a plain object from a ResourceMaintenanceDenySchedule message. Also converts values to other types if specified.
                     * @param message ResourceMaintenanceDenySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.ResourceMaintenanceDenySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceMaintenanceDenySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceMaintenanceDenySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpcomingMaintenance. */
                interface IUpcomingMaintenance {

                    /** UpcomingMaintenance startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** UpcomingMaintenance endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an UpcomingMaintenance. */
                class UpcomingMaintenance implements IUpcomingMaintenance {

                    /**
                     * Constructs a new UpcomingMaintenance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IUpcomingMaintenance);

                    /** UpcomingMaintenance startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** UpcomingMaintenance endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new UpcomingMaintenance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpcomingMaintenance instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IUpcomingMaintenance): google.cloud.databasecenter.v1beta.UpcomingMaintenance;

                    /**
                     * Encodes the specified UpcomingMaintenance message. Does not implicitly {@link google.cloud.databasecenter.v1beta.UpcomingMaintenance.verify|verify} messages.
                     * @param message UpcomingMaintenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IUpcomingMaintenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpcomingMaintenance message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.UpcomingMaintenance.verify|verify} messages.
                     * @param message UpcomingMaintenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IUpcomingMaintenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpcomingMaintenance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpcomingMaintenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.UpcomingMaintenance;

                    /**
                     * Decodes an UpcomingMaintenance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpcomingMaintenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.UpcomingMaintenance;

                    /**
                     * Verifies an UpcomingMaintenance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpcomingMaintenance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpcomingMaintenance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.UpcomingMaintenance;

                    /**
                     * Creates a plain object from an UpcomingMaintenance message. Also converts values to other types if specified.
                     * @param message UpcomingMaintenance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.UpcomingMaintenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpcomingMaintenance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpcomingMaintenance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MaintenanceInfo. */
                interface IMaintenanceInfo {

                    /** MaintenanceInfo maintenanceSchedule */
                    maintenanceSchedule?: (google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule|null);

                    /** MaintenanceInfo denyMaintenanceSchedules */
                    denyMaintenanceSchedules?: (google.cloud.databasecenter.v1beta.IResourceMaintenanceDenySchedule[]|null);

                    /** MaintenanceInfo maintenanceVersion */
                    maintenanceVersion?: (string|null);

                    /** MaintenanceInfo currentVersionReleaseDate */
                    currentVersionReleaseDate?: (google.type.IDate|null);

                    /** MaintenanceInfo upcomingMaintenance */
                    upcomingMaintenance?: (google.cloud.databasecenter.v1beta.IUpcomingMaintenance|null);

                    /** MaintenanceInfo state */
                    state?: (google.cloud.databasecenter.v1beta.MaintenanceState|keyof typeof google.cloud.databasecenter.v1beta.MaintenanceState|null);

                    /** MaintenanceInfo possibleFailureReasons */
                    possibleFailureReasons?: (google.cloud.databasecenter.v1beta.PossibleFailureReason[]|null);

                    /** MaintenanceInfo previousMaintenanceVersion */
                    previousMaintenanceVersion?: (string|null);
                }

                /** Represents a MaintenanceInfo. */
                class MaintenanceInfo implements IMaintenanceInfo {

                    /**
                     * Constructs a new MaintenanceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IMaintenanceInfo);

                    /** MaintenanceInfo maintenanceSchedule. */
                    public maintenanceSchedule?: (google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule|null);

                    /** MaintenanceInfo denyMaintenanceSchedules. */
                    public denyMaintenanceSchedules: google.cloud.databasecenter.v1beta.IResourceMaintenanceDenySchedule[];

                    /** MaintenanceInfo maintenanceVersion. */
                    public maintenanceVersion: string;

                    /** MaintenanceInfo currentVersionReleaseDate. */
                    public currentVersionReleaseDate?: (google.type.IDate|null);

                    /** MaintenanceInfo upcomingMaintenance. */
                    public upcomingMaintenance?: (google.cloud.databasecenter.v1beta.IUpcomingMaintenance|null);

                    /** MaintenanceInfo state. */
                    public state: (google.cloud.databasecenter.v1beta.MaintenanceState|keyof typeof google.cloud.databasecenter.v1beta.MaintenanceState);

                    /** MaintenanceInfo possibleFailureReasons. */
                    public possibleFailureReasons: google.cloud.databasecenter.v1beta.PossibleFailureReason[];

                    /** MaintenanceInfo previousMaintenanceVersion. */
                    public previousMaintenanceVersion: string;

                    /**
                     * Creates a new MaintenanceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IMaintenanceInfo): google.cloud.databasecenter.v1beta.MaintenanceInfo;

                    /**
                     * Encodes the specified MaintenanceInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.MaintenanceInfo.verify|verify} messages.
                     * @param message MaintenanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IMaintenanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.MaintenanceInfo.verify|verify} messages.
                     * @param message MaintenanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IMaintenanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.MaintenanceInfo;

                    /**
                     * Decodes a MaintenanceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.MaintenanceInfo;

                    /**
                     * Verifies a MaintenanceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaintenanceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaintenanceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.MaintenanceInfo;

                    /**
                     * Creates a plain object from a MaintenanceInfo message. Also converts values to other types if specified.
                     * @param message MaintenanceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.MaintenanceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaintenanceInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Metrics. */
                interface IMetrics {

                    /** Metrics p99CpuUtilization */
                    p99CpuUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics p95CpuUtilization */
                    p95CpuUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics currentStorageUsedBytes */
                    currentStorageUsedBytes?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics peakStorageUtilization */
                    peakStorageUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics peakMemoryUtilization */
                    peakMemoryUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics peakNumberConnections */
                    peakNumberConnections?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics nodeCount */
                    nodeCount?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics processingUnitCount */
                    processingUnitCount?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics currentMemoryUsedBytes */
                    currentMemoryUsedBytes?: (google.cloud.databasecenter.v1beta.IMetricData|null);
                }

                /** Represents a Metrics. */
                class Metrics implements IMetrics {

                    /**
                     * Constructs a new Metrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IMetrics);

                    /** Metrics p99CpuUtilization. */
                    public p99CpuUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics p95CpuUtilization. */
                    public p95CpuUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics currentStorageUsedBytes. */
                    public currentStorageUsedBytes?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics peakStorageUtilization. */
                    public peakStorageUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics peakMemoryUtilization. */
                    public peakMemoryUtilization?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics peakNumberConnections. */
                    public peakNumberConnections?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics nodeCount. */
                    public nodeCount?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics processingUnitCount. */
                    public processingUnitCount?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /** Metrics currentMemoryUsedBytes. */
                    public currentMemoryUsedBytes?: (google.cloud.databasecenter.v1beta.IMetricData|null);

                    /**
                     * Creates a new Metrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metrics instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IMetrics): google.cloud.databasecenter.v1beta.Metrics;

                    /**
                     * Encodes the specified Metrics message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Metrics.verify|verify} messages.
                     * @param message Metrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metrics message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Metrics.verify|verify} messages.
                     * @param message Metrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Metrics;

                    /**
                     * Decodes a Metrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Metrics;

                    /**
                     * Verifies a Metrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Metrics;

                    /**
                     * Creates a plain object from a Metrics message. Also converts values to other types if specified.
                     * @param message Metrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Metrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Metrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MetricData. */
                interface IMetricData {

                    /** MetricData value */
                    value?: (google.cloud.databasecenter.v1beta.ITypedValue|null);

                    /** MetricData observationTime */
                    observationTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a MetricData. */
                class MetricData implements IMetricData {

                    /**
                     * Constructs a new MetricData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IMetricData);

                    /** MetricData value. */
                    public value?: (google.cloud.databasecenter.v1beta.ITypedValue|null);

                    /** MetricData observationTime. */
                    public observationTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new MetricData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricData instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IMetricData): google.cloud.databasecenter.v1beta.MetricData;

                    /**
                     * Encodes the specified MetricData message. Does not implicitly {@link google.cloud.databasecenter.v1beta.MetricData.verify|verify} messages.
                     * @param message MetricData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IMetricData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricData message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.MetricData.verify|verify} messages.
                     * @param message MetricData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IMetricData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.MetricData;

                    /**
                     * Decodes a MetricData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.MetricData;

                    /**
                     * Verifies a MetricData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.MetricData;

                    /**
                     * Creates a plain object from a MetricData message. Also converts values to other types if specified.
                     * @param message MetricData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.MetricData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MetricData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TypedValue. */
                interface ITypedValue {

                    /** TypedValue doubleValue */
                    doubleValue?: (number|null);

                    /** TypedValue int64Value */
                    int64Value?: (number|Long|string|null);
                }

                /** Represents a TypedValue. */
                class TypedValue implements ITypedValue {

                    /**
                     * Constructs a new TypedValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ITypedValue);

                    /** TypedValue doubleValue. */
                    public doubleValue?: (number|null);

                    /** TypedValue int64Value. */
                    public int64Value?: (number|Long|string|null);

                    /** TypedValue value. */
                    public value?: ("doubleValue"|"int64Value");

                    /**
                     * Creates a new TypedValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TypedValue instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ITypedValue): google.cloud.databasecenter.v1beta.TypedValue;

                    /**
                     * Encodes the specified TypedValue message. Does not implicitly {@link google.cloud.databasecenter.v1beta.TypedValue.verify|verify} messages.
                     * @param message TypedValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TypedValue message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.TypedValue.verify|verify} messages.
                     * @param message TypedValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TypedValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypedValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.TypedValue;

                    /**
                     * Decodes a TypedValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TypedValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.TypedValue;

                    /**
                     * Verifies a TypedValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TypedValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypedValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.TypedValue;

                    /**
                     * Creates a plain object from a TypedValue message. Also converts values to other types if specified.
                     * @param message TypedValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.TypedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypedValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TypedValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** OperationErrorType enum. */
                enum OperationErrorType {
                    OPERATION_ERROR_TYPE_UNSPECIFIED = 0,
                    KMS_KEY_ERROR = 1,
                    DATABASE_ERROR = 2,
                    STOCKOUT_ERROR = 3,
                    CANCELLATION_ERROR = 4,
                    SQLSERVER_ERROR = 5,
                    INTERNAL_ERROR = 6
                }

                /** Engine enum. */
                enum Engine {
                    ENGINE_UNSPECIFIED = 0,
                    ENGINE_MYSQL = 1,
                    ENGINE_POSTGRES = 2,
                    ENGINE_SQL_SERVER = 3,
                    ENGINE_NATIVE = 4,
                    ENGINE_MEMORYSTORE_FOR_REDIS = 8,
                    ENGINE_MEMORYSTORE_FOR_REDIS_CLUSTER = 9,
                    ENGINE_FIRESTORE_WITH_NATIVE_MODE = 10,
                    ENGINE_FIRESTORE_WITH_DATASTORE_MODE = 11,
                    ENGINE_EXADATA_ORACLE = 12,
                    ENGINE_ADB_SERVERLESS_ORACLE = 13,
                    ENGINE_FIRESTORE_WITH_MONGODB_COMPATIBILITY_MODE = 14,
                    ENGINE_OTHER = 6
                }

                /** ProductType enum. */
                enum ProductType {
                    PRODUCT_TYPE_UNSPECIFIED = 0,
                    PRODUCT_TYPE_CLOUD_SQL = 1,
                    PRODUCT_TYPE_ALLOYDB = 2,
                    PRODUCT_TYPE_SPANNER = 3,
                    PRODUCT_TYPE_BIGTABLE = 6,
                    PRODUCT_TYPE_MEMORYSTORE = 7,
                    PRODUCT_TYPE_FIRESTORE = 8,
                    PRODUCT_TYPE_COMPUTE_ENGINE = 9,
                    PRODUCT_TYPE_ORACLE_ON_GCP = 10,
                    PRODUCT_TYPE_BIGQUERY = 11,
                    PRODUCT_TYPE_OTHER = 5
                }

                /** Properties of a Product. */
                interface IProduct {

                    /** Product type */
                    type?: (google.cloud.databasecenter.v1beta.ProductType|keyof typeof google.cloud.databasecenter.v1beta.ProductType|null);

                    /** Product engine */
                    engine?: (google.cloud.databasecenter.v1beta.Engine|keyof typeof google.cloud.databasecenter.v1beta.Engine|null);

                    /** Product version */
                    version?: (string|null);

                    /** Product minorVersion */
                    minorVersion?: (string|null);
                }

                /** Represents a Product. */
                class Product implements IProduct {

                    /**
                     * Constructs a new Product.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IProduct);

                    /** Product type. */
                    public type: (google.cloud.databasecenter.v1beta.ProductType|keyof typeof google.cloud.databasecenter.v1beta.ProductType);

                    /** Product engine. */
                    public engine: (google.cloud.databasecenter.v1beta.Engine|keyof typeof google.cloud.databasecenter.v1beta.Engine);

                    /** Product version. */
                    public version: string;

                    /** Product minorVersion. */
                    public minorVersion: string;

                    /**
                     * Creates a new Product instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Product instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IProduct): google.cloud.databasecenter.v1beta.Product;

                    /**
                     * Encodes the specified Product message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Product.verify|verify} messages.
                     * @param message Product message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Product message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Product.verify|verify} messages.
                     * @param message Product message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Product message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Product
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Product;

                    /**
                     * Decodes a Product message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Product
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Product;

                    /**
                     * Verifies a Product message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Product message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Product
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Product;

                    /**
                     * Creates a plain object from a Product message. Also converts values to other types if specified.
                     * @param message Product
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Product to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Product
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a DatabaseCenter */
                class DatabaseCenter extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DatabaseCenter service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DatabaseCenter service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DatabaseCenter;

                    /**
                     * Calls QueryProducts.
                     * @param request QueryProductsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryProductsResponse
                     */
                    public queryProducts(request: google.cloud.databasecenter.v1beta.IQueryProductsRequest, callback: google.cloud.databasecenter.v1beta.DatabaseCenter.QueryProductsCallback): void;

                    /**
                     * Calls QueryProducts.
                     * @param request QueryProductsRequest message or plain object
                     * @returns Promise
                     */
                    public queryProducts(request: google.cloud.databasecenter.v1beta.IQueryProductsRequest): Promise<google.cloud.databasecenter.v1beta.QueryProductsResponse>;

                    /**
                     * Calls AggregateFleet.
                     * @param request AggregateFleetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AggregateFleetResponse
                     */
                    public aggregateFleet(request: google.cloud.databasecenter.v1beta.IAggregateFleetRequest, callback: google.cloud.databasecenter.v1beta.DatabaseCenter.AggregateFleetCallback): void;

                    /**
                     * Calls AggregateFleet.
                     * @param request AggregateFleetRequest message or plain object
                     * @returns Promise
                     */
                    public aggregateFleet(request: google.cloud.databasecenter.v1beta.IAggregateFleetRequest): Promise<google.cloud.databasecenter.v1beta.AggregateFleetResponse>;

                    /**
                     * Calls QueryDatabaseResourceGroups.
                     * @param request QueryDatabaseResourceGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryDatabaseResourceGroupsResponse
                     */
                    public queryDatabaseResourceGroups(request: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsRequest, callback: google.cloud.databasecenter.v1beta.DatabaseCenter.QueryDatabaseResourceGroupsCallback): void;

                    /**
                     * Calls QueryDatabaseResourceGroups.
                     * @param request QueryDatabaseResourceGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public queryDatabaseResourceGroups(request: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsRequest): Promise<google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse>;

                    /**
                     * Calls AggregateIssueStats.
                     * @param request AggregateIssueStatsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AggregateIssueStatsResponse
                     */
                    public aggregateIssueStats(request: google.cloud.databasecenter.v1beta.IAggregateIssueStatsRequest, callback: google.cloud.databasecenter.v1beta.DatabaseCenter.AggregateIssueStatsCallback): void;

                    /**
                     * Calls AggregateIssueStats.
                     * @param request AggregateIssueStatsRequest message or plain object
                     * @returns Promise
                     */
                    public aggregateIssueStats(request: google.cloud.databasecenter.v1beta.IAggregateIssueStatsRequest): Promise<google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse>;

                    /**
                     * Calls QueryIssues.
                     * @param request QueryIssuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryIssuesResponse
                     */
                    public queryIssues(request: google.cloud.databasecenter.v1beta.IQueryIssuesRequest, callback: google.cloud.databasecenter.v1beta.DatabaseCenter.QueryIssuesCallback): void;

                    /**
                     * Calls QueryIssues.
                     * @param request QueryIssuesRequest message or plain object
                     * @returns Promise
                     */
                    public queryIssues(request: google.cloud.databasecenter.v1beta.IQueryIssuesRequest): Promise<google.cloud.databasecenter.v1beta.QueryIssuesResponse>;
                }

                namespace DatabaseCenter {

                    /**
                     * Callback as used by {@link google.cloud.databasecenter.v1beta.DatabaseCenter|queryProducts}.
                     * @param error Error, if any
                     * @param [response] QueryProductsResponse
                     */
                    type QueryProductsCallback = (error: (Error|null), response?: google.cloud.databasecenter.v1beta.QueryProductsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.databasecenter.v1beta.DatabaseCenter|aggregateFleet}.
                     * @param error Error, if any
                     * @param [response] AggregateFleetResponse
                     */
                    type AggregateFleetCallback = (error: (Error|null), response?: google.cloud.databasecenter.v1beta.AggregateFleetResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.databasecenter.v1beta.DatabaseCenter|queryDatabaseResourceGroups}.
                     * @param error Error, if any
                     * @param [response] QueryDatabaseResourceGroupsResponse
                     */
                    type QueryDatabaseResourceGroupsCallback = (error: (Error|null), response?: google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.databasecenter.v1beta.DatabaseCenter|aggregateIssueStats}.
                     * @param error Error, if any
                     * @param [response] AggregateIssueStatsResponse
                     */
                    type AggregateIssueStatsCallback = (error: (Error|null), response?: google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.databasecenter.v1beta.DatabaseCenter|queryIssues}.
                     * @param error Error, if any
                     * @param [response] QueryIssuesResponse
                     */
                    type QueryIssuesCallback = (error: (Error|null), response?: google.cloud.databasecenter.v1beta.QueryIssuesResponse) => void;
                }

                /** Edition enum. */
                enum Edition {
                    EDITION_UNSPECIFIED = 0,
                    EDITION_ENTERPRISE = 1,
                    EDITION_ENTERPRISE_PLUS = 2,
                    EDITION_STANDARD = 3
                }

                /** SubResourceType enum. */
                enum SubResourceType {
                    SUB_RESOURCE_TYPE_UNSPECIFIED = 0,
                    SUB_RESOURCE_TYPE_PRIMARY = 1,
                    SUB_RESOURCE_TYPE_SECONDARY = 2,
                    SUB_RESOURCE_TYPE_READ_REPLICA = 3,
                    SUB_RESOURCE_TYPE_EXTERNAL_PRIMARY = 5,
                    SUB_RESOURCE_TYPE_READ_POOL = 6,
                    SUB_RESOURCE_TYPE_RESERVATION = 7,
                    SUB_RESOURCE_TYPE_DATASET = 8,
                    SUB_RESOURCE_TYPE_OTHER = 4
                }

                /** ManagementType enum. */
                enum ManagementType {
                    MANAGEMENT_TYPE_UNSPECIFIED = 0,
                    MANAGEMENT_TYPE_GCP_MANAGED = 1,
                    MANAGEMENT_TYPE_SELF_MANAGED = 2
                }

                /** ResourceCategory enum. */
                enum ResourceCategory {
                    RESOURCE_CATEGORY_UNSPECIFIED = 0,
                    INSTANCE = 1,
                    CLUSTER = 2,
                    DATABASE = 3,
                    DATASET = 4,
                    RESERVATION = 5
                }

                /** Properties of a QueryProductsRequest. */
                interface IQueryProductsRequest {

                    /** QueryProductsRequest parent */
                    parent?: (string|null);

                    /** QueryProductsRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryProductsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a QueryProductsRequest. */
                class QueryProductsRequest implements IQueryProductsRequest {

                    /**
                     * Constructs a new QueryProductsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IQueryProductsRequest);

                    /** QueryProductsRequest parent. */
                    public parent: string;

                    /** QueryProductsRequest pageSize. */
                    public pageSize: number;

                    /** QueryProductsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new QueryProductsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryProductsRequest instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IQueryProductsRequest): google.cloud.databasecenter.v1beta.QueryProductsRequest;

                    /**
                     * Encodes the specified QueryProductsRequest message. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryProductsRequest.verify|verify} messages.
                     * @param message QueryProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IQueryProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryProductsRequest message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryProductsRequest.verify|verify} messages.
                     * @param message QueryProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IQueryProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryProductsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.QueryProductsRequest;

                    /**
                     * Decodes a QueryProductsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.QueryProductsRequest;

                    /**
                     * Verifies a QueryProductsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryProductsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryProductsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.QueryProductsRequest;

                    /**
                     * Creates a plain object from a QueryProductsRequest message. Also converts values to other types if specified.
                     * @param message QueryProductsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.QueryProductsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryProductsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryProductsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryProductsResponse. */
                interface IQueryProductsResponse {

                    /** QueryProductsResponse products */
                    products?: (google.cloud.databasecenter.v1beta.IProduct[]|null);

                    /** QueryProductsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** QueryProductsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a QueryProductsResponse. */
                class QueryProductsResponse implements IQueryProductsResponse {

                    /**
                     * Constructs a new QueryProductsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IQueryProductsResponse);

                    /** QueryProductsResponse products. */
                    public products: google.cloud.databasecenter.v1beta.IProduct[];

                    /** QueryProductsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** QueryProductsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new QueryProductsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryProductsResponse instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IQueryProductsResponse): google.cloud.databasecenter.v1beta.QueryProductsResponse;

                    /**
                     * Encodes the specified QueryProductsResponse message. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryProductsResponse.verify|verify} messages.
                     * @param message QueryProductsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IQueryProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryProductsResponse message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryProductsResponse.verify|verify} messages.
                     * @param message QueryProductsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IQueryProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryProductsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryProductsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.QueryProductsResponse;

                    /**
                     * Decodes a QueryProductsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryProductsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.QueryProductsResponse;

                    /**
                     * Verifies a QueryProductsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryProductsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryProductsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.QueryProductsResponse;

                    /**
                     * Creates a plain object from a QueryProductsResponse message. Also converts values to other types if specified.
                     * @param message QueryProductsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.QueryProductsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryProductsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryProductsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryDatabaseResourceGroupsRequest. */
                interface IQueryDatabaseResourceGroupsRequest {

                    /** QueryDatabaseResourceGroupsRequest parent */
                    parent?: (string|null);

                    /** QueryDatabaseResourceGroupsRequest filter */
                    filter?: (string|null);

                    /** QueryDatabaseResourceGroupsRequest signalTypeGroups */
                    signalTypeGroups?: (google.cloud.databasecenter.v1beta.ISignalTypeGroup[]|null);

                    /** QueryDatabaseResourceGroupsRequest signalFilters */
                    signalFilters?: (google.cloud.databasecenter.v1beta.ISignalFilter[]|null);

                    /** QueryDatabaseResourceGroupsRequest orderBy */
                    orderBy?: (string|null);

                    /** QueryDatabaseResourceGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryDatabaseResourceGroupsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a QueryDatabaseResourceGroupsRequest. */
                class QueryDatabaseResourceGroupsRequest implements IQueryDatabaseResourceGroupsRequest {

                    /**
                     * Constructs a new QueryDatabaseResourceGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsRequest);

                    /** QueryDatabaseResourceGroupsRequest parent. */
                    public parent: string;

                    /** QueryDatabaseResourceGroupsRequest filter. */
                    public filter: string;

                    /** QueryDatabaseResourceGroupsRequest signalTypeGroups. */
                    public signalTypeGroups: google.cloud.databasecenter.v1beta.ISignalTypeGroup[];

                    /** QueryDatabaseResourceGroupsRequest signalFilters. */
                    public signalFilters: google.cloud.databasecenter.v1beta.ISignalFilter[];

                    /** QueryDatabaseResourceGroupsRequest orderBy. */
                    public orderBy: string;

                    /** QueryDatabaseResourceGroupsRequest pageSize. */
                    public pageSize: number;

                    /** QueryDatabaseResourceGroupsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new QueryDatabaseResourceGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryDatabaseResourceGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsRequest): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest;

                    /**
                     * Encodes the specified QueryDatabaseResourceGroupsRequest message. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest.verify|verify} messages.
                     * @param message QueryDatabaseResourceGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryDatabaseResourceGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest.verify|verify} messages.
                     * @param message QueryDatabaseResourceGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryDatabaseResourceGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryDatabaseResourceGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest;

                    /**
                     * Decodes a QueryDatabaseResourceGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryDatabaseResourceGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest;

                    /**
                     * Verifies a QueryDatabaseResourceGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryDatabaseResourceGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryDatabaseResourceGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest;

                    /**
                     * Creates a plain object from a QueryDatabaseResourceGroupsRequest message. Also converts values to other types if specified.
                     * @param message QueryDatabaseResourceGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryDatabaseResourceGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryDatabaseResourceGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryDatabaseResourceGroupsResponse. */
                interface IQueryDatabaseResourceGroupsResponse {

                    /** QueryDatabaseResourceGroupsResponse resourceGroups */
                    resourceGroups?: (google.cloud.databasecenter.v1beta.IDatabaseResourceGroup[]|null);

                    /** QueryDatabaseResourceGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** QueryDatabaseResourceGroupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a QueryDatabaseResourceGroupsResponse. */
                class QueryDatabaseResourceGroupsResponse implements IQueryDatabaseResourceGroupsResponse {

                    /**
                     * Constructs a new QueryDatabaseResourceGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsResponse);

                    /** QueryDatabaseResourceGroupsResponse resourceGroups. */
                    public resourceGroups: google.cloud.databasecenter.v1beta.IDatabaseResourceGroup[];

                    /** QueryDatabaseResourceGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** QueryDatabaseResourceGroupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new QueryDatabaseResourceGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryDatabaseResourceGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsResponse): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse;

                    /**
                     * Encodes the specified QueryDatabaseResourceGroupsResponse message. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse.verify|verify} messages.
                     * @param message QueryDatabaseResourceGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryDatabaseResourceGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse.verify|verify} messages.
                     * @param message QueryDatabaseResourceGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IQueryDatabaseResourceGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryDatabaseResourceGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryDatabaseResourceGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse;

                    /**
                     * Decodes a QueryDatabaseResourceGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryDatabaseResourceGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse;

                    /**
                     * Verifies a QueryDatabaseResourceGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryDatabaseResourceGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryDatabaseResourceGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse;

                    /**
                     * Creates a plain object from a QueryDatabaseResourceGroupsResponse message. Also converts values to other types if specified.
                     * @param message QueryDatabaseResourceGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.QueryDatabaseResourceGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryDatabaseResourceGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryDatabaseResourceGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DatabaseResourceGroup. */
                interface IDatabaseResourceGroup {

                    /** DatabaseResourceGroup rootResources */
                    rootResources?: (google.cloud.databasecenter.v1beta.IDatabaseResource[]|null);

                    /** DatabaseResourceGroup signalGroups */
                    signalGroups?: (google.cloud.databasecenter.v1beta.IIssueCount[]|null);
                }

                /** Represents a DatabaseResourceGroup. */
                class DatabaseResourceGroup implements IDatabaseResourceGroup {

                    /**
                     * Constructs a new DatabaseResourceGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IDatabaseResourceGroup);

                    /** DatabaseResourceGroup rootResources. */
                    public rootResources: google.cloud.databasecenter.v1beta.IDatabaseResource[];

                    /** DatabaseResourceGroup signalGroups. */
                    public signalGroups: google.cloud.databasecenter.v1beta.IIssueCount[];

                    /**
                     * Creates a new DatabaseResourceGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseResourceGroup instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IDatabaseResourceGroup): google.cloud.databasecenter.v1beta.DatabaseResourceGroup;

                    /**
                     * Encodes the specified DatabaseResourceGroup message. Does not implicitly {@link google.cloud.databasecenter.v1beta.DatabaseResourceGroup.verify|verify} messages.
                     * @param message DatabaseResourceGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IDatabaseResourceGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseResourceGroup message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.DatabaseResourceGroup.verify|verify} messages.
                     * @param message DatabaseResourceGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IDatabaseResourceGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseResourceGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseResourceGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.DatabaseResourceGroup;

                    /**
                     * Decodes a DatabaseResourceGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseResourceGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.DatabaseResourceGroup;

                    /**
                     * Verifies a DatabaseResourceGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseResourceGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseResourceGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.DatabaseResourceGroup;

                    /**
                     * Creates a plain object from a DatabaseResourceGroup message. Also converts values to other types if specified.
                     * @param message DatabaseResourceGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.DatabaseResourceGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseResourceGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DatabaseResourceGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DatabaseResource. */
                interface IDatabaseResource {

                    /** DatabaseResource childResources */
                    childResources?: (google.cloud.databasecenter.v1beta.IDatabaseResource[]|null);

                    /** DatabaseResource fullResourceName */
                    fullResourceName?: (string|null);

                    /** DatabaseResource container */
                    container?: (string|null);

                    /** DatabaseResource product */
                    product?: (google.cloud.databasecenter.v1beta.IProduct|null);

                    /** DatabaseResource location */
                    location?: (string|null);

                    /** DatabaseResource labels */
                    labels?: (google.cloud.databasecenter.v1beta.ILabel[]|null);

                    /** DatabaseResource tags */
                    tags?: (google.cloud.databasecenter.v1beta.ITag[]|null);

                    /** DatabaseResource resourceType */
                    resourceType?: (string|null);

                    /** DatabaseResource subResourceType */
                    subResourceType?: (google.cloud.databasecenter.v1beta.SubResourceType|keyof typeof google.cloud.databasecenter.v1beta.SubResourceType|null);

                    /** DatabaseResource machineConfig */
                    machineConfig?: (google.cloud.databasecenter.v1beta.IMachineConfig|null);

                    /** DatabaseResource signalGroups */
                    signalGroups?: (google.cloud.databasecenter.v1beta.ISignalGroup[]|null);

                    /** DatabaseResource metrics */
                    metrics?: (google.cloud.databasecenter.v1beta.IMetrics|null);

                    /** DatabaseResource resourceCategory */
                    resourceCategory?: (google.cloud.databasecenter.v1beta.ResourceCategory|keyof typeof google.cloud.databasecenter.v1beta.ResourceCategory|null);

                    /** DatabaseResource resourceName */
                    resourceName?: (string|null);

                    /** DatabaseResource backupdrConfig */
                    backupdrConfig?: (google.cloud.databasecenter.v1beta.IBackupDRConfig|null);

                    /** DatabaseResource edition */
                    edition?: (google.cloud.databasecenter.v1beta.Edition|keyof typeof google.cloud.databasecenter.v1beta.Edition|null);

                    /** DatabaseResource maintenanceInfo */
                    maintenanceInfo?: (google.cloud.databasecenter.v1beta.IMaintenanceInfo|null);

                    /** DatabaseResource affiliations */
                    affiliations?: (google.cloud.databasecenter.v1beta.IAffiliation[]|null);
                }

                /** Represents a DatabaseResource. */
                class DatabaseResource implements IDatabaseResource {

                    /**
                     * Constructs a new DatabaseResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IDatabaseResource);

                    /** DatabaseResource childResources. */
                    public childResources: google.cloud.databasecenter.v1beta.IDatabaseResource[];

                    /** DatabaseResource fullResourceName. */
                    public fullResourceName: string;

                    /** DatabaseResource container. */
                    public container: string;

                    /** DatabaseResource product. */
                    public product?: (google.cloud.databasecenter.v1beta.IProduct|null);

                    /** DatabaseResource location. */
                    public location: string;

                    /** DatabaseResource labels. */
                    public labels: google.cloud.databasecenter.v1beta.ILabel[];

                    /** DatabaseResource tags. */
                    public tags: google.cloud.databasecenter.v1beta.ITag[];

                    /** DatabaseResource resourceType. */
                    public resourceType: string;

                    /** DatabaseResource subResourceType. */
                    public subResourceType: (google.cloud.databasecenter.v1beta.SubResourceType|keyof typeof google.cloud.databasecenter.v1beta.SubResourceType);

                    /** DatabaseResource machineConfig. */
                    public machineConfig?: (google.cloud.databasecenter.v1beta.IMachineConfig|null);

                    /** DatabaseResource signalGroups. */
                    public signalGroups: google.cloud.databasecenter.v1beta.ISignalGroup[];

                    /** DatabaseResource metrics. */
                    public metrics?: (google.cloud.databasecenter.v1beta.IMetrics|null);

                    /** DatabaseResource resourceCategory. */
                    public resourceCategory: (google.cloud.databasecenter.v1beta.ResourceCategory|keyof typeof google.cloud.databasecenter.v1beta.ResourceCategory);

                    /** DatabaseResource resourceName. */
                    public resourceName: string;

                    /** DatabaseResource backupdrConfig. */
                    public backupdrConfig?: (google.cloud.databasecenter.v1beta.IBackupDRConfig|null);

                    /** DatabaseResource edition. */
                    public edition: (google.cloud.databasecenter.v1beta.Edition|keyof typeof google.cloud.databasecenter.v1beta.Edition);

                    /** DatabaseResource maintenanceInfo. */
                    public maintenanceInfo?: (google.cloud.databasecenter.v1beta.IMaintenanceInfo|null);

                    /** DatabaseResource affiliations. */
                    public affiliations: google.cloud.databasecenter.v1beta.IAffiliation[];

                    /**
                     * Creates a new DatabaseResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseResource instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IDatabaseResource): google.cloud.databasecenter.v1beta.DatabaseResource;

                    /**
                     * Encodes the specified DatabaseResource message. Does not implicitly {@link google.cloud.databasecenter.v1beta.DatabaseResource.verify|verify} messages.
                     * @param message DatabaseResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IDatabaseResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseResource message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.DatabaseResource.verify|verify} messages.
                     * @param message DatabaseResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IDatabaseResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.DatabaseResource;

                    /**
                     * Decodes a DatabaseResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.DatabaseResource;

                    /**
                     * Verifies a DatabaseResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.DatabaseResource;

                    /**
                     * Creates a plain object from a DatabaseResource message. Also converts values to other types if specified.
                     * @param message DatabaseResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.DatabaseResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DatabaseResource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateIssueStatsRequest. */
                interface IAggregateIssueStatsRequest {

                    /** AggregateIssueStatsRequest parent */
                    parent?: (string|null);

                    /** AggregateIssueStatsRequest filter */
                    filter?: (string|null);

                    /** AggregateIssueStatsRequest signalTypeGroups */
                    signalTypeGroups?: (google.cloud.databasecenter.v1beta.ISignalTypeGroup[]|null);

                    /** AggregateIssueStatsRequest baselineDate */
                    baselineDate?: (google.type.IDate|null);
                }

                /** Represents an AggregateIssueStatsRequest. */
                class AggregateIssueStatsRequest implements IAggregateIssueStatsRequest {

                    /**
                     * Constructs a new AggregateIssueStatsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAggregateIssueStatsRequest);

                    /** AggregateIssueStatsRequest parent. */
                    public parent: string;

                    /** AggregateIssueStatsRequest filter. */
                    public filter: string;

                    /** AggregateIssueStatsRequest signalTypeGroups. */
                    public signalTypeGroups: google.cloud.databasecenter.v1beta.ISignalTypeGroup[];

                    /** AggregateIssueStatsRequest baselineDate. */
                    public baselineDate?: (google.type.IDate|null);

                    /**
                     * Creates a new AggregateIssueStatsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateIssueStatsRequest instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAggregateIssueStatsRequest): google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest;

                    /**
                     * Encodes the specified AggregateIssueStatsRequest message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest.verify|verify} messages.
                     * @param message AggregateIssueStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAggregateIssueStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateIssueStatsRequest message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest.verify|verify} messages.
                     * @param message AggregateIssueStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAggregateIssueStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateIssueStatsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateIssueStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest;

                    /**
                     * Decodes an AggregateIssueStatsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateIssueStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest;

                    /**
                     * Verifies an AggregateIssueStatsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateIssueStatsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateIssueStatsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest;

                    /**
                     * Creates a plain object from an AggregateIssueStatsRequest message. Also converts values to other types if specified.
                     * @param message AggregateIssueStatsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AggregateIssueStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateIssueStatsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateIssueStatsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateIssueStatsResponse. */
                interface IAggregateIssueStatsResponse {

                    /** AggregateIssueStatsResponse issueGroupStats */
                    issueGroupStats?: (google.cloud.databasecenter.v1beta.IIssueGroupStats[]|null);

                    /** AggregateIssueStatsResponse totalResourcesCount */
                    totalResourcesCount?: (number|null);

                    /** AggregateIssueStatsResponse totalResourceGroupsCount */
                    totalResourceGroupsCount?: (number|null);

                    /** AggregateIssueStatsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents an AggregateIssueStatsResponse. */
                class AggregateIssueStatsResponse implements IAggregateIssueStatsResponse {

                    /**
                     * Constructs a new AggregateIssueStatsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAggregateIssueStatsResponse);

                    /** AggregateIssueStatsResponse issueGroupStats. */
                    public issueGroupStats: google.cloud.databasecenter.v1beta.IIssueGroupStats[];

                    /** AggregateIssueStatsResponse totalResourcesCount. */
                    public totalResourcesCount: number;

                    /** AggregateIssueStatsResponse totalResourceGroupsCount. */
                    public totalResourceGroupsCount: number;

                    /** AggregateIssueStatsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new AggregateIssueStatsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateIssueStatsResponse instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAggregateIssueStatsResponse): google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse;

                    /**
                     * Encodes the specified AggregateIssueStatsResponse message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse.verify|verify} messages.
                     * @param message AggregateIssueStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAggregateIssueStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateIssueStatsResponse message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse.verify|verify} messages.
                     * @param message AggregateIssueStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAggregateIssueStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateIssueStatsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateIssueStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse;

                    /**
                     * Decodes an AggregateIssueStatsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateIssueStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse;

                    /**
                     * Verifies an AggregateIssueStatsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateIssueStatsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateIssueStatsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse;

                    /**
                     * Creates a plain object from an AggregateIssueStatsResponse message. Also converts values to other types if specified.
                     * @param message AggregateIssueStatsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AggregateIssueStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateIssueStatsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateIssueStatsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IssueGroupStats. */
                interface IIssueGroupStats {

                    /** IssueGroupStats displayName */
                    displayName?: (string|null);

                    /** IssueGroupStats resourceGroupsCount */
                    resourceGroupsCount?: (number|null);

                    /** IssueGroupStats resourcesCount */
                    resourcesCount?: (number|null);

                    /** IssueGroupStats healthyResourceGroupsCount */
                    healthyResourceGroupsCount?: (number|null);

                    /** IssueGroupStats healthyResourcesCount */
                    healthyResourcesCount?: (number|null);

                    /** IssueGroupStats issueStats */
                    issueStats?: (google.cloud.databasecenter.v1beta.IIssueStats[]|null);
                }

                /** Represents an IssueGroupStats. */
                class IssueGroupStats implements IIssueGroupStats {

                    /**
                     * Constructs a new IssueGroupStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IIssueGroupStats);

                    /** IssueGroupStats displayName. */
                    public displayName: string;

                    /** IssueGroupStats resourceGroupsCount. */
                    public resourceGroupsCount: number;

                    /** IssueGroupStats resourcesCount. */
                    public resourcesCount: number;

                    /** IssueGroupStats healthyResourceGroupsCount. */
                    public healthyResourceGroupsCount: number;

                    /** IssueGroupStats healthyResourcesCount. */
                    public healthyResourcesCount: number;

                    /** IssueGroupStats issueStats. */
                    public issueStats: google.cloud.databasecenter.v1beta.IIssueStats[];

                    /**
                     * Creates a new IssueGroupStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueGroupStats instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IIssueGroupStats): google.cloud.databasecenter.v1beta.IssueGroupStats;

                    /**
                     * Encodes the specified IssueGroupStats message. Does not implicitly {@link google.cloud.databasecenter.v1beta.IssueGroupStats.verify|verify} messages.
                     * @param message IssueGroupStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IIssueGroupStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueGroupStats message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.IssueGroupStats.verify|verify} messages.
                     * @param message IssueGroupStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IIssueGroupStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueGroupStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueGroupStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.IssueGroupStats;

                    /**
                     * Decodes an IssueGroupStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueGroupStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.IssueGroupStats;

                    /**
                     * Verifies an IssueGroupStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueGroupStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueGroupStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.IssueGroupStats;

                    /**
                     * Creates a plain object from an IssueGroupStats message. Also converts values to other types if specified.
                     * @param message IssueGroupStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.IssueGroupStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueGroupStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IssueGroupStats
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IssueStats. */
                interface IIssueStats {

                    /** IssueStats signalType */
                    signalType?: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType|null);

                    /** IssueStats resourceCount */
                    resourceCount?: (number|null);

                    /** IssueStats deltaDetails */
                    deltaDetails?: (google.cloud.databasecenter.v1beta.IDeltaDetails|null);

                    /** IssueStats issueSeverity */
                    issueSeverity?: (google.cloud.databasecenter.v1beta.IssueSeverity|keyof typeof google.cloud.databasecenter.v1beta.IssueSeverity|null);
                }

                /** Represents an IssueStats. */
                class IssueStats implements IIssueStats {

                    /**
                     * Constructs a new IssueStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IIssueStats);

                    /** IssueStats signalType. */
                    public signalType: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType);

                    /** IssueStats resourceCount. */
                    public resourceCount: number;

                    /** IssueStats deltaDetails. */
                    public deltaDetails?: (google.cloud.databasecenter.v1beta.IDeltaDetails|null);

                    /** IssueStats issueSeverity. */
                    public issueSeverity?: (google.cloud.databasecenter.v1beta.IssueSeverity|keyof typeof google.cloud.databasecenter.v1beta.IssueSeverity|null);

                    /**
                     * Creates a new IssueStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueStats instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IIssueStats): google.cloud.databasecenter.v1beta.IssueStats;

                    /**
                     * Encodes the specified IssueStats message. Does not implicitly {@link google.cloud.databasecenter.v1beta.IssueStats.verify|verify} messages.
                     * @param message IssueStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IIssueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueStats message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.IssueStats.verify|verify} messages.
                     * @param message IssueStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IIssueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.IssueStats;

                    /**
                     * Decodes an IssueStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.IssueStats;

                    /**
                     * Verifies an IssueStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.IssueStats;

                    /**
                     * Creates a plain object from an IssueStats message. Also converts values to other types if specified.
                     * @param message IssueStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.IssueStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IssueStats
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Label. */
                interface ILabel {

                    /** Label key */
                    key?: (string|null);

                    /** Label value */
                    value?: (string|null);

                    /** Label source */
                    source?: (string|null);
                }

                /** Represents a Label. */
                class Label implements ILabel {

                    /**
                     * Constructs a new Label.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ILabel);

                    /** Label key. */
                    public key: string;

                    /** Label value. */
                    public value: string;

                    /** Label source. */
                    public source: string;

                    /**
                     * Creates a new Label instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Label instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ILabel): google.cloud.databasecenter.v1beta.Label;

                    /**
                     * Encodes the specified Label message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Label.verify|verify} messages.
                     * @param message Label message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Label message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Label.verify|verify} messages.
                     * @param message Label message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Label message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Label
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Label;

                    /**
                     * Decodes a Label message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Label
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Label;

                    /**
                     * Verifies a Label message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Label message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Label
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Label;

                    /**
                     * Creates a plain object from a Label message. Also converts values to other types if specified.
                     * @param message Label
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Label, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Label to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Label
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateFleetRequest. */
                interface IAggregateFleetRequest {

                    /** AggregateFleetRequest parent */
                    parent?: (string|null);

                    /** AggregateFleetRequest filter */
                    filter?: (string|null);

                    /** AggregateFleetRequest groupBy */
                    groupBy?: (string|null);

                    /** AggregateFleetRequest orderBy */
                    orderBy?: (string|null);

                    /** AggregateFleetRequest pageSize */
                    pageSize?: (number|null);

                    /** AggregateFleetRequest pageToken */
                    pageToken?: (string|null);

                    /** AggregateFleetRequest baselineDate */
                    baselineDate?: (google.type.IDate|null);
                }

                /** Represents an AggregateFleetRequest. */
                class AggregateFleetRequest implements IAggregateFleetRequest {

                    /**
                     * Constructs a new AggregateFleetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAggregateFleetRequest);

                    /** AggregateFleetRequest parent. */
                    public parent: string;

                    /** AggregateFleetRequest filter. */
                    public filter: string;

                    /** AggregateFleetRequest groupBy. */
                    public groupBy: string;

                    /** AggregateFleetRequest orderBy. */
                    public orderBy: string;

                    /** AggregateFleetRequest pageSize. */
                    public pageSize: number;

                    /** AggregateFleetRequest pageToken. */
                    public pageToken: string;

                    /** AggregateFleetRequest baselineDate. */
                    public baselineDate?: (google.type.IDate|null);

                    /**
                     * Creates a new AggregateFleetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateFleetRequest instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAggregateFleetRequest): google.cloud.databasecenter.v1beta.AggregateFleetRequest;

                    /**
                     * Encodes the specified AggregateFleetRequest message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateFleetRequest.verify|verify} messages.
                     * @param message AggregateFleetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAggregateFleetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateFleetRequest message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateFleetRequest.verify|verify} messages.
                     * @param message AggregateFleetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAggregateFleetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateFleetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateFleetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AggregateFleetRequest;

                    /**
                     * Decodes an AggregateFleetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateFleetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AggregateFleetRequest;

                    /**
                     * Verifies an AggregateFleetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateFleetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateFleetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AggregateFleetRequest;

                    /**
                     * Creates a plain object from an AggregateFleetRequest message. Also converts values to other types if specified.
                     * @param message AggregateFleetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AggregateFleetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateFleetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateFleetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateFleetResponse. */
                interface IAggregateFleetResponse {

                    /** AggregateFleetResponse rows */
                    rows?: (google.cloud.databasecenter.v1beta.IAggregateFleetRow[]|null);

                    /** AggregateFleetResponse resourceGroupsTotalCount */
                    resourceGroupsTotalCount?: (number|null);

                    /** AggregateFleetResponse resourceTotalCount */
                    resourceTotalCount?: (number|null);

                    /** AggregateFleetResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** AggregateFleetResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents an AggregateFleetResponse. */
                class AggregateFleetResponse implements IAggregateFleetResponse {

                    /**
                     * Constructs a new AggregateFleetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAggregateFleetResponse);

                    /** AggregateFleetResponse rows. */
                    public rows: google.cloud.databasecenter.v1beta.IAggregateFleetRow[];

                    /** AggregateFleetResponse resourceGroupsTotalCount. */
                    public resourceGroupsTotalCount: number;

                    /** AggregateFleetResponse resourceTotalCount. */
                    public resourceTotalCount: number;

                    /** AggregateFleetResponse nextPageToken. */
                    public nextPageToken: string;

                    /** AggregateFleetResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new AggregateFleetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateFleetResponse instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAggregateFleetResponse): google.cloud.databasecenter.v1beta.AggregateFleetResponse;

                    /**
                     * Encodes the specified AggregateFleetResponse message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateFleetResponse.verify|verify} messages.
                     * @param message AggregateFleetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAggregateFleetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateFleetResponse message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateFleetResponse.verify|verify} messages.
                     * @param message AggregateFleetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAggregateFleetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateFleetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateFleetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AggregateFleetResponse;

                    /**
                     * Decodes an AggregateFleetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateFleetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AggregateFleetResponse;

                    /**
                     * Verifies an AggregateFleetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateFleetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateFleetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AggregateFleetResponse;

                    /**
                     * Creates a plain object from an AggregateFleetResponse message. Also converts values to other types if specified.
                     * @param message AggregateFleetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AggregateFleetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateFleetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateFleetResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateFleetRow. */
                interface IAggregateFleetRow {

                    /** AggregateFleetRow dimension */
                    dimension?: (google.cloud.databasecenter.v1beta.IDimension[]|null);

                    /** AggregateFleetRow resourceGroupsCount */
                    resourceGroupsCount?: (number|null);

                    /** AggregateFleetRow resourcesCount */
                    resourcesCount?: (number|null);

                    /** AggregateFleetRow deltaDetails */
                    deltaDetails?: (google.cloud.databasecenter.v1beta.IDeltaDetails|null);
                }

                /** Represents an AggregateFleetRow. */
                class AggregateFleetRow implements IAggregateFleetRow {

                    /**
                     * Constructs a new AggregateFleetRow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAggregateFleetRow);

                    /** AggregateFleetRow dimension. */
                    public dimension: google.cloud.databasecenter.v1beta.IDimension[];

                    /** AggregateFleetRow resourceGroupsCount. */
                    public resourceGroupsCount: number;

                    /** AggregateFleetRow resourcesCount. */
                    public resourcesCount: number;

                    /** AggregateFleetRow deltaDetails. */
                    public deltaDetails?: (google.cloud.databasecenter.v1beta.IDeltaDetails|null);

                    /**
                     * Creates a new AggregateFleetRow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateFleetRow instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAggregateFleetRow): google.cloud.databasecenter.v1beta.AggregateFleetRow;

                    /**
                     * Encodes the specified AggregateFleetRow message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateFleetRow.verify|verify} messages.
                     * @param message AggregateFleetRow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAggregateFleetRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateFleetRow message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AggregateFleetRow.verify|verify} messages.
                     * @param message AggregateFleetRow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAggregateFleetRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateFleetRow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateFleetRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AggregateFleetRow;

                    /**
                     * Decodes an AggregateFleetRow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateFleetRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AggregateFleetRow;

                    /**
                     * Verifies an AggregateFleetRow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateFleetRow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateFleetRow
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AggregateFleetRow;

                    /**
                     * Creates a plain object from an AggregateFleetRow message. Also converts values to other types if specified.
                     * @param message AggregateFleetRow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AggregateFleetRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateFleetRow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateFleetRow
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Dimension. */
                interface IDimension {

                    /** Dimension container */
                    container?: (string|null);

                    /** Dimension productType */
                    productType?: (google.cloud.databasecenter.v1beta.ProductType|keyof typeof google.cloud.databasecenter.v1beta.ProductType|null);

                    /** Dimension productEngine */
                    productEngine?: (google.cloud.databasecenter.v1beta.Engine|keyof typeof google.cloud.databasecenter.v1beta.Engine|null);

                    /** Dimension productVersion */
                    productVersion?: (string|null);

                    /** Dimension location */
                    location?: (string|null);

                    /** Dimension resourceType */
                    resourceType?: (string|null);

                    /** Dimension subResourceType */
                    subResourceType?: (google.cloud.databasecenter.v1beta.SubResourceType|keyof typeof google.cloud.databasecenter.v1beta.SubResourceType|null);

                    /** Dimension resourceCategory */
                    resourceCategory?: (google.cloud.databasecenter.v1beta.ResourceCategory|keyof typeof google.cloud.databasecenter.v1beta.ResourceCategory|null);

                    /** Dimension managementType */
                    managementType?: (google.cloud.databasecenter.v1beta.ManagementType|keyof typeof google.cloud.databasecenter.v1beta.ManagementType|null);

                    /** Dimension edition */
                    edition?: (google.cloud.databasecenter.v1beta.Edition|keyof typeof google.cloud.databasecenter.v1beta.Edition|null);

                    /** Dimension tagKey */
                    tagKey?: (string|null);

                    /** Dimension tagValue */
                    tagValue?: (string|null);

                    /** Dimension tagSource */
                    tagSource?: (string|null);

                    /** Dimension tagInherited */
                    tagInherited?: (boolean|null);

                    /** Dimension labelKey */
                    labelKey?: (string|null);

                    /** Dimension labelValue */
                    labelValue?: (string|null);

                    /** Dimension labelSource */
                    labelSource?: (string|null);

                    /** Dimension hasMaintenanceSchedule */
                    hasMaintenanceSchedule?: (boolean|null);

                    /** Dimension hasDenyMaintenanceSchedules */
                    hasDenyMaintenanceSchedules?: (boolean|null);
                }

                /** Represents a Dimension. */
                class Dimension implements IDimension {

                    /**
                     * Constructs a new Dimension.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IDimension);

                    /** Dimension container. */
                    public container?: (string|null);

                    /** Dimension productType. */
                    public productType?: (google.cloud.databasecenter.v1beta.ProductType|keyof typeof google.cloud.databasecenter.v1beta.ProductType|null);

                    /** Dimension productEngine. */
                    public productEngine?: (google.cloud.databasecenter.v1beta.Engine|keyof typeof google.cloud.databasecenter.v1beta.Engine|null);

                    /** Dimension productVersion. */
                    public productVersion?: (string|null);

                    /** Dimension location. */
                    public location?: (string|null);

                    /** Dimension resourceType. */
                    public resourceType?: (string|null);

                    /** Dimension subResourceType. */
                    public subResourceType?: (google.cloud.databasecenter.v1beta.SubResourceType|keyof typeof google.cloud.databasecenter.v1beta.SubResourceType|null);

                    /** Dimension resourceCategory. */
                    public resourceCategory?: (google.cloud.databasecenter.v1beta.ResourceCategory|keyof typeof google.cloud.databasecenter.v1beta.ResourceCategory|null);

                    /** Dimension managementType. */
                    public managementType?: (google.cloud.databasecenter.v1beta.ManagementType|keyof typeof google.cloud.databasecenter.v1beta.ManagementType|null);

                    /** Dimension edition. */
                    public edition?: (google.cloud.databasecenter.v1beta.Edition|keyof typeof google.cloud.databasecenter.v1beta.Edition|null);

                    /** Dimension tagKey. */
                    public tagKey?: (string|null);

                    /** Dimension tagValue. */
                    public tagValue?: (string|null);

                    /** Dimension tagSource. */
                    public tagSource?: (string|null);

                    /** Dimension tagInherited. */
                    public tagInherited?: (boolean|null);

                    /** Dimension labelKey. */
                    public labelKey?: (string|null);

                    /** Dimension labelValue. */
                    public labelValue?: (string|null);

                    /** Dimension labelSource. */
                    public labelSource?: (string|null);

                    /** Dimension hasMaintenanceSchedule. */
                    public hasMaintenanceSchedule?: (boolean|null);

                    /** Dimension hasDenyMaintenanceSchedules. */
                    public hasDenyMaintenanceSchedules?: (boolean|null);

                    /** Dimension dimension. */
                    public dimension?: ("container"|"productType"|"productEngine"|"productVersion"|"location"|"resourceType"|"subResourceType"|"resourceCategory"|"managementType"|"edition"|"tagKey"|"tagValue"|"tagSource"|"tagInherited"|"labelKey"|"labelValue"|"labelSource"|"hasMaintenanceSchedule"|"hasDenyMaintenanceSchedules");

                    /**
                     * Creates a new Dimension instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dimension instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IDimension): google.cloud.databasecenter.v1beta.Dimension;

                    /**
                     * Encodes the specified Dimension message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Dimension.verify|verify} messages.
                     * @param message Dimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dimension message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Dimension.verify|verify} messages.
                     * @param message Dimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dimension message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Dimension;

                    /**
                     * Decodes a Dimension message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Dimension;

                    /**
                     * Verifies a Dimension message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dimension
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Dimension;

                    /**
                     * Creates a plain object from a Dimension message. Also converts values to other types if specified.
                     * @param message Dimension
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Dimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dimension to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Dimension
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupDRConfig. */
                interface IBackupDRConfig {

                    /** BackupDRConfig backupdrManaged */
                    backupdrManaged?: (boolean|null);
                }

                /** Represents a BackupDRConfig. */
                class BackupDRConfig implements IBackupDRConfig {

                    /**
                     * Constructs a new BackupDRConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IBackupDRConfig);

                    /** BackupDRConfig backupdrManaged. */
                    public backupdrManaged?: (boolean|null);

                    /**
                     * Creates a new BackupDRConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupDRConfig instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IBackupDRConfig): google.cloud.databasecenter.v1beta.BackupDRConfig;

                    /**
                     * Encodes the specified BackupDRConfig message. Does not implicitly {@link google.cloud.databasecenter.v1beta.BackupDRConfig.verify|verify} messages.
                     * @param message BackupDRConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IBackupDRConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupDRConfig message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.BackupDRConfig.verify|verify} messages.
                     * @param message BackupDRConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IBackupDRConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupDRConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupDRConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.BackupDRConfig;

                    /**
                     * Decodes a BackupDRConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupDRConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.BackupDRConfig;

                    /**
                     * Verifies a BackupDRConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupDRConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupDRConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.BackupDRConfig;

                    /**
                     * Creates a plain object from a BackupDRConfig message. Also converts values to other types if specified.
                     * @param message BackupDRConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.BackupDRConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupDRConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupDRConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryIssuesRequest. */
                interface IQueryIssuesRequest {

                    /** QueryIssuesRequest parent */
                    parent?: (string|null);

                    /** QueryIssuesRequest filter */
                    filter?: (string|null);

                    /** QueryIssuesRequest signalProductsFilters */
                    signalProductsFilters?: (google.cloud.databasecenter.v1beta.ISignalProductsFilters[]|null);

                    /** QueryIssuesRequest orderBy */
                    orderBy?: (string|null);

                    /** QueryIssuesRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryIssuesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a QueryIssuesRequest. */
                class QueryIssuesRequest implements IQueryIssuesRequest {

                    /**
                     * Constructs a new QueryIssuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IQueryIssuesRequest);

                    /** QueryIssuesRequest parent. */
                    public parent: string;

                    /** QueryIssuesRequest filter. */
                    public filter: string;

                    /** QueryIssuesRequest signalProductsFilters. */
                    public signalProductsFilters: google.cloud.databasecenter.v1beta.ISignalProductsFilters[];

                    /** QueryIssuesRequest orderBy. */
                    public orderBy: string;

                    /** QueryIssuesRequest pageSize. */
                    public pageSize: number;

                    /** QueryIssuesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new QueryIssuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryIssuesRequest instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IQueryIssuesRequest): google.cloud.databasecenter.v1beta.QueryIssuesRequest;

                    /**
                     * Encodes the specified QueryIssuesRequest message. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryIssuesRequest.verify|verify} messages.
                     * @param message QueryIssuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IQueryIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryIssuesRequest message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryIssuesRequest.verify|verify} messages.
                     * @param message QueryIssuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IQueryIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryIssuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryIssuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.QueryIssuesRequest;

                    /**
                     * Decodes a QueryIssuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryIssuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.QueryIssuesRequest;

                    /**
                     * Verifies a QueryIssuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryIssuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryIssuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.QueryIssuesRequest;

                    /**
                     * Creates a plain object from a QueryIssuesRequest message. Also converts values to other types if specified.
                     * @param message QueryIssuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.QueryIssuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryIssuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryIssuesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignalProductsFilters. */
                interface ISignalProductsFilters {

                    /** SignalProductsFilters signalType */
                    signalType?: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType|null);

                    /** SignalProductsFilters products */
                    products?: (google.cloud.databasecenter.v1beta.IProduct[]|null);
                }

                /** Represents a SignalProductsFilters. */
                class SignalProductsFilters implements ISignalProductsFilters {

                    /**
                     * Constructs a new SignalProductsFilters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISignalProductsFilters);

                    /** SignalProductsFilters signalType. */
                    public signalType: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType);

                    /** SignalProductsFilters products. */
                    public products: google.cloud.databasecenter.v1beta.IProduct[];

                    /**
                     * Creates a new SignalProductsFilters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignalProductsFilters instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISignalProductsFilters): google.cloud.databasecenter.v1beta.SignalProductsFilters;

                    /**
                     * Encodes the specified SignalProductsFilters message. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalProductsFilters.verify|verify} messages.
                     * @param message SignalProductsFilters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISignalProductsFilters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignalProductsFilters message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalProductsFilters.verify|verify} messages.
                     * @param message SignalProductsFilters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISignalProductsFilters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignalProductsFilters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignalProductsFilters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.SignalProductsFilters;

                    /**
                     * Decodes a SignalProductsFilters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignalProductsFilters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.SignalProductsFilters;

                    /**
                     * Verifies a SignalProductsFilters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignalProductsFilters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignalProductsFilters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.SignalProductsFilters;

                    /**
                     * Creates a plain object from a SignalProductsFilters message. Also converts values to other types if specified.
                     * @param message SignalProductsFilters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.SignalProductsFilters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignalProductsFilters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignalProductsFilters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryIssuesResponse. */
                interface IQueryIssuesResponse {

                    /** QueryIssuesResponse resourceIssues */
                    resourceIssues?: (google.cloud.databasecenter.v1beta.IDatabaseResourceIssue[]|null);

                    /** QueryIssuesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** QueryIssuesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a QueryIssuesResponse. */
                class QueryIssuesResponse implements IQueryIssuesResponse {

                    /**
                     * Constructs a new QueryIssuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IQueryIssuesResponse);

                    /** QueryIssuesResponse resourceIssues. */
                    public resourceIssues: google.cloud.databasecenter.v1beta.IDatabaseResourceIssue[];

                    /** QueryIssuesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** QueryIssuesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new QueryIssuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryIssuesResponse instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IQueryIssuesResponse): google.cloud.databasecenter.v1beta.QueryIssuesResponse;

                    /**
                     * Encodes the specified QueryIssuesResponse message. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryIssuesResponse.verify|verify} messages.
                     * @param message QueryIssuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IQueryIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryIssuesResponse message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.QueryIssuesResponse.verify|verify} messages.
                     * @param message QueryIssuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IQueryIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryIssuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryIssuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.QueryIssuesResponse;

                    /**
                     * Decodes a QueryIssuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryIssuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.QueryIssuesResponse;

                    /**
                     * Verifies a QueryIssuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryIssuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryIssuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.QueryIssuesResponse;

                    /**
                     * Creates a plain object from a QueryIssuesResponse message. Also converts values to other types if specified.
                     * @param message QueryIssuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.QueryIssuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryIssuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryIssuesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DatabaseResourceIssue. */
                interface IDatabaseResourceIssue {

                    /** DatabaseResourceIssue signal */
                    signal?: (google.cloud.databasecenter.v1beta.ISignal|null);

                    /** DatabaseResourceIssue resource */
                    resource?: (google.cloud.databasecenter.v1beta.IDatabaseResource|null);
                }

                /** Represents a DatabaseResourceIssue. */
                class DatabaseResourceIssue implements IDatabaseResourceIssue {

                    /**
                     * Constructs a new DatabaseResourceIssue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IDatabaseResourceIssue);

                    /** DatabaseResourceIssue signal. */
                    public signal?: (google.cloud.databasecenter.v1beta.ISignal|null);

                    /** DatabaseResourceIssue resource. */
                    public resource?: (google.cloud.databasecenter.v1beta.IDatabaseResource|null);

                    /**
                     * Creates a new DatabaseResourceIssue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseResourceIssue instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IDatabaseResourceIssue): google.cloud.databasecenter.v1beta.DatabaseResourceIssue;

                    /**
                     * Encodes the specified DatabaseResourceIssue message. Does not implicitly {@link google.cloud.databasecenter.v1beta.DatabaseResourceIssue.verify|verify} messages.
                     * @param message DatabaseResourceIssue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IDatabaseResourceIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseResourceIssue message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.DatabaseResourceIssue.verify|verify} messages.
                     * @param message DatabaseResourceIssue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IDatabaseResourceIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseResourceIssue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseResourceIssue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.DatabaseResourceIssue;

                    /**
                     * Decodes a DatabaseResourceIssue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseResourceIssue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.DatabaseResourceIssue;

                    /**
                     * Verifies a DatabaseResourceIssue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseResourceIssue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseResourceIssue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.DatabaseResourceIssue;

                    /**
                     * Creates a plain object from a DatabaseResourceIssue message. Also converts values to other types if specified.
                     * @param message DatabaseResourceIssue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.DatabaseResourceIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseResourceIssue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DatabaseResourceIssue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Tag. */
                interface ITag {

                    /** Tag key */
                    key?: (string|null);

                    /** Tag value */
                    value?: (string|null);

                    /** Tag source */
                    source?: (string|null);

                    /** Tag inherited */
                    inherited?: (boolean|null);
                }

                /** Represents a Tag. */
                class Tag implements ITag {

                    /**
                     * Constructs a new Tag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ITag);

                    /** Tag key. */
                    public key: string;

                    /** Tag value. */
                    public value: string;

                    /** Tag source. */
                    public source: string;

                    /** Tag inherited. */
                    public inherited: boolean;

                    /**
                     * Creates a new Tag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tag instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ITag): google.cloud.databasecenter.v1beta.Tag;

                    /**
                     * Encodes the specified Tag message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tag message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Tag;

                    /**
                     * Decodes a Tag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Tag;

                    /**
                     * Verifies a Tag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tag
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Tag;

                    /**
                     * Creates a plain object from a Tag message. Also converts values to other types if specified.
                     * @param message Tag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Tag
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceDetails. */
                interface IResourceDetails {

                    /** ResourceDetails fullResourceName */
                    fullResourceName?: (string|null);

                    /** ResourceDetails container */
                    container?: (string|null);

                    /** ResourceDetails product */
                    product?: (google.cloud.databasecenter.v1beta.IProduct|null);

                    /** ResourceDetails location */
                    location?: (string|null);
                }

                /** Represents a ResourceDetails. */
                class ResourceDetails implements IResourceDetails {

                    /**
                     * Constructs a new ResourceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IResourceDetails);

                    /** ResourceDetails fullResourceName. */
                    public fullResourceName: string;

                    /** ResourceDetails container. */
                    public container: string;

                    /** ResourceDetails product. */
                    public product?: (google.cloud.databasecenter.v1beta.IProduct|null);

                    /** ResourceDetails location. */
                    public location: string;

                    /**
                     * Creates a new ResourceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceDetails instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IResourceDetails): google.cloud.databasecenter.v1beta.ResourceDetails;

                    /**
                     * Encodes the specified ResourceDetails message. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceDetails.verify|verify} messages.
                     * @param message ResourceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IResourceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceDetails message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceDetails.verify|verify} messages.
                     * @param message ResourceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IResourceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.ResourceDetails;

                    /**
                     * Decodes a ResourceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.ResourceDetails;

                    /**
                     * Verifies a ResourceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.ResourceDetails;

                    /**
                     * Creates a plain object from a ResourceDetails message. Also converts values to other types if specified.
                     * @param message ResourceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.ResourceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeltaDetails. */
                interface IDeltaDetails {

                    /** DeltaDetails increasedResources */
                    increasedResources?: (google.cloud.databasecenter.v1beta.IResourceDetails[]|null);

                    /** DeltaDetails decreasedResources */
                    decreasedResources?: (google.cloud.databasecenter.v1beta.IResourceDetails[]|null);
                }

                /** Represents a DeltaDetails. */
                class DeltaDetails implements IDeltaDetails {

                    /**
                     * Constructs a new DeltaDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IDeltaDetails);

                    /** DeltaDetails increasedResources. */
                    public increasedResources: google.cloud.databasecenter.v1beta.IResourceDetails[];

                    /** DeltaDetails decreasedResources. */
                    public decreasedResources: google.cloud.databasecenter.v1beta.IResourceDetails[];

                    /**
                     * Creates a new DeltaDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeltaDetails instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IDeltaDetails): google.cloud.databasecenter.v1beta.DeltaDetails;

                    /**
                     * Encodes the specified DeltaDetails message. Does not implicitly {@link google.cloud.databasecenter.v1beta.DeltaDetails.verify|verify} messages.
                     * @param message DeltaDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IDeltaDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeltaDetails message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.DeltaDetails.verify|verify} messages.
                     * @param message DeltaDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IDeltaDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeltaDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeltaDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.DeltaDetails;

                    /**
                     * Decodes a DeltaDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeltaDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.DeltaDetails;

                    /**
                     * Verifies a DeltaDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeltaDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeltaDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.DeltaDetails;

                    /**
                     * Creates a plain object from a DeltaDetails message. Also converts values to other types if specified.
                     * @param message DeltaDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.DeltaDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeltaDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeltaDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** SignalStatus enum. */
                enum SignalStatus {
                    SIGNAL_STATUS_UNSPECIFIED = 0,
                    SIGNAL_STATUS_NOT_APPLICABLE = 1,
                    SIGNAL_STATUS_OK = 2,
                    SIGNAL_STATUS_ISSUE = 3,
                    SIGNAL_STATUS_NOT_ENABLED = 4
                }

                /** SignalSource enum. */
                enum SignalSource {
                    SIGNAL_SOURCE_UNSPECIFIED = 0,
                    SIGNAL_SOURCE_RESOURCE_METADATA = 1,
                    SIGNAL_SOURCE_SECURITY_FINDINGS = 2,
                    SIGNAL_SOURCE_RECOMMENDER = 3,
                    SIGNAL_SOURCE_MODERN_OBSERVABILITY = 4
                }

                /** IssueSeverity enum. */
                enum IssueSeverity {
                    ISSUE_SEVERITY_UNSPECIFIED = 0,
                    ISSUE_SEVERITY_LOW = 1,
                    ISSUE_SEVERITY_MEDIUM = 2,
                    ISSUE_SEVERITY_HIGH = 3,
                    ISSUE_SEVERITY_CRITICAL = 4,
                    ISSUE_SEVERITY_IRRELEVANT = 5
                }

                /** SignalType enum. */
                enum SignalType {
                    SIGNAL_TYPE_UNSPECIFIED = 0,
                    SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED = 1,
                    SIGNAL_TYPE_GROUP_MULTIREGIONAL = 2,
                    SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY = 4,
                    SIGNAL_TYPE_SHORT_BACKUP_RETENTION = 5,
                    SIGNAL_TYPE_LAST_BACKUP_FAILED = 6,
                    SIGNAL_TYPE_LAST_BACKUP_OLD = 7,
                    SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0 = 8,
                    SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3 = 9,
                    SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2 = 10,
                    SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1 = 11,
                    SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0 = 12,
                    SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0 = 76,
                    SIGNAL_TYPE_VIOLATES_NIST_800_53 = 13,
                    SIGNAL_TYPE_VIOLATES_NIST_800_53_R5 = 69,
                    SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0 = 72,
                    SIGNAL_TYPE_VIOLATES_ISO_27001 = 14,
                    SIGNAL_TYPE_VIOLATES_ISO_27001_V2022 = 70,
                    SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1 = 15,
                    SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0 = 71,
                    SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4 = 73,
                    SIGNAL_TYPE_VIOLATES_HIPAA = 74,
                    SIGNAL_TYPE_VIOLATES_SOC2_V2017 = 75,
                    SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING = 16,
                    SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED = 17,
                    SIGNAL_TYPE_VERBOSE_ERROR_LOGGING = 18,
                    SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED = 19,
                    SIGNAL_TYPE_LOGGING_MOST_ERRORS = 20,
                    SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS = 21,
                    SIGNAL_TYPE_MINIMAL_ERROR_LOGGING = 22,
                    SIGNAL_TYPE_QUERY_STATS_LOGGED = 23,
                    SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME = 24,
                    SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS = 25,
                    SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS = 26,
                    SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS = 27,
                    SIGNAL_TYPE_LOGGING_QUERY_STATS = 28,
                    SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES = 29,
                    SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED = 30,
                    SIGNAL_TYPE_USER_OPTIONS_CONFIGURED = 31,
                    SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS = 32,
                    SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS = 33,
                    SIGNAL_TYPE_NO_ROOT_PASSWORD = 34,
                    SIGNAL_TYPE_WEAK_ROOT_PASSWORD = 35,
                    SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED = 36,
                    SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED = 37,
                    SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS = 39,
                    SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS = 40,
                    SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED = 41,
                    SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED = 42,
                    SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO = 43,
                    SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS = 44,
                    SIGNAL_TYPE_DATABASE_NAMES_EXPOSED = 45,
                    SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED = 46,
                    SIGNAL_TYPE_PUBLIC_IP_ENABLED = 47,
                    SIGNAL_TYPE_IDLE = 48,
                    SIGNAL_TYPE_OVERPROVISIONED = 49,
                    SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES = 50,
                    SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES = 51,
                    SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION = 52,
                    SIGNAL_TYPE_UNDERPROVISIONED = 53,
                    SIGNAL_TYPE_OUT_OF_DISK = 54,
                    SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY = 55,
                    SIGNAL_TYPE_DATABASE_AUDITING_DISABLED = 56,
                    SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS = 57,
                    SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP = 58,
                    SIGNAL_TYPE_QUOTA_LIMIT = 59,
                    SIGNAL_TYPE_NO_PASSWORD_POLICY = 60,
                    SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT = 61,
                    SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT = 62,
                    SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT = 63,
                    SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES = 64,
                    SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES = 65,
                    SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS = 66,
                    SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET = 67,
                    SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET = 68,
                    SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM = 77,
                    SIGNAL_TYPE_NO_USER_PASSWORD_POLICY = 78,
                    SIGNAL_TYPE_HOT_NODE = 79,
                    SIGNAL_TYPE_NO_DELETION_PROTECTION = 80,
                    SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY = 81,
                    SIGNAL_TYPE_RESOURCE_SUSPENDED = 82,
                    SIGNAL_TYPE_EXPENSIVE_COMMANDS = 83,
                    SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED = 84,
                    SIGNAL_TYPE_INEFFICIENT_QUERY = 85,
                    SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD = 86,
                    SIGNAL_TYPE_MEMORY_LIMIT = 87,
                    SIGNAL_TYPE_MAX_SERVER_MEMORY = 88,
                    SIGNAL_TYPE_LARGE_ROWS = 89,
                    SIGNAL_TYPE_HIGH_WRITE_PRESSURE = 90,
                    SIGNAL_TYPE_HIGH_READ_PRESSURE = 91,
                    SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED = 92,
                    SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED = 93,
                    SIGNAL_TYPE_OUTDATED_MINOR_VERSION = 94,
                    SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED = 95,
                    SIGNAL_TYPE_REPLICATION_LAG = 97,
                    SIGNAL_TYPE_OUTDATED_CLIENT = 99,
                    SIGNAL_TYPE_DATABOOST_DISABLED = 100,
                    SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES = 101,
                    SIGNAL_TYPE_EXTENDED_SUPPORT = 102,
                    SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE = 104
                }

                /** Properties of a SignalTypeGroup. */
                interface ISignalTypeGroup {

                    /** SignalTypeGroup displayName */
                    displayName?: (string|null);

                    /** SignalTypeGroup signalTypes */
                    signalTypes?: (google.cloud.databasecenter.v1beta.SignalType[]|null);
                }

                /** Represents a SignalTypeGroup. */
                class SignalTypeGroup implements ISignalTypeGroup {

                    /**
                     * Constructs a new SignalTypeGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISignalTypeGroup);

                    /** SignalTypeGroup displayName. */
                    public displayName: string;

                    /** SignalTypeGroup signalTypes. */
                    public signalTypes: google.cloud.databasecenter.v1beta.SignalType[];

                    /**
                     * Creates a new SignalTypeGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignalTypeGroup instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISignalTypeGroup): google.cloud.databasecenter.v1beta.SignalTypeGroup;

                    /**
                     * Encodes the specified SignalTypeGroup message. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalTypeGroup.verify|verify} messages.
                     * @param message SignalTypeGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISignalTypeGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignalTypeGroup message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalTypeGroup.verify|verify} messages.
                     * @param message SignalTypeGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISignalTypeGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignalTypeGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignalTypeGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.SignalTypeGroup;

                    /**
                     * Decodes a SignalTypeGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignalTypeGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.SignalTypeGroup;

                    /**
                     * Verifies a SignalTypeGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignalTypeGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignalTypeGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.SignalTypeGroup;

                    /**
                     * Creates a plain object from a SignalTypeGroup message. Also converts values to other types if specified.
                     * @param message SignalTypeGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.SignalTypeGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignalTypeGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignalTypeGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignalFilter. */
                interface ISignalFilter {

                    /** SignalFilter signalType */
                    signalType?: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType|null);

                    /** SignalFilter signalStatus */
                    signalStatus?: (google.cloud.databasecenter.v1beta.SignalStatus|keyof typeof google.cloud.databasecenter.v1beta.SignalStatus|null);
                }

                /** Represents a SignalFilter. */
                class SignalFilter implements ISignalFilter {

                    /**
                     * Constructs a new SignalFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISignalFilter);

                    /** SignalFilter signalType. */
                    public signalType: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType);

                    /** SignalFilter signalStatus. */
                    public signalStatus: (google.cloud.databasecenter.v1beta.SignalStatus|keyof typeof google.cloud.databasecenter.v1beta.SignalStatus);

                    /**
                     * Creates a new SignalFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignalFilter instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISignalFilter): google.cloud.databasecenter.v1beta.SignalFilter;

                    /**
                     * Encodes the specified SignalFilter message. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalFilter.verify|verify} messages.
                     * @param message SignalFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISignalFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignalFilter message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalFilter.verify|verify} messages.
                     * @param message SignalFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISignalFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignalFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignalFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.SignalFilter;

                    /**
                     * Decodes a SignalFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignalFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.SignalFilter;

                    /**
                     * Verifies a SignalFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignalFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignalFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.SignalFilter;

                    /**
                     * Creates a plain object from a SignalFilter message. Also converts values to other types if specified.
                     * @param message SignalFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.SignalFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignalFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignalFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignalGroup. */
                interface ISignalGroup {

                    /** SignalGroup displayName */
                    displayName?: (string|null);

                    /** SignalGroup issueCount */
                    issueCount?: (number|null);

                    /** SignalGroup signals */
                    signals?: (google.cloud.databasecenter.v1beta.ISignal[]|null);
                }

                /** Represents a SignalGroup. */
                class SignalGroup implements ISignalGroup {

                    /**
                     * Constructs a new SignalGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISignalGroup);

                    /** SignalGroup displayName. */
                    public displayName: string;

                    /** SignalGroup issueCount. */
                    public issueCount: number;

                    /** SignalGroup signals. */
                    public signals: google.cloud.databasecenter.v1beta.ISignal[];

                    /**
                     * Creates a new SignalGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignalGroup instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISignalGroup): google.cloud.databasecenter.v1beta.SignalGroup;

                    /**
                     * Encodes the specified SignalGroup message. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalGroup.verify|verify} messages.
                     * @param message SignalGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISignalGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignalGroup message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.SignalGroup.verify|verify} messages.
                     * @param message SignalGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISignalGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignalGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignalGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.SignalGroup;

                    /**
                     * Decodes a SignalGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignalGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.SignalGroup;

                    /**
                     * Verifies a SignalGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignalGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignalGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.SignalGroup;

                    /**
                     * Creates a plain object from a SignalGroup message. Also converts values to other types if specified.
                     * @param message SignalGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.SignalGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignalGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignalGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IssueCount. */
                interface IIssueCount {

                    /** IssueCount displayName */
                    displayName?: (string|null);

                    /** IssueCount issueCount */
                    issueCount?: (number|null);
                }

                /** Represents an IssueCount. */
                class IssueCount implements IIssueCount {

                    /**
                     * Constructs a new IssueCount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IIssueCount);

                    /** IssueCount displayName. */
                    public displayName: string;

                    /** IssueCount issueCount. */
                    public issueCount: number;

                    /**
                     * Creates a new IssueCount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueCount instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IIssueCount): google.cloud.databasecenter.v1beta.IssueCount;

                    /**
                     * Encodes the specified IssueCount message. Does not implicitly {@link google.cloud.databasecenter.v1beta.IssueCount.verify|verify} messages.
                     * @param message IssueCount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IIssueCount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueCount message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.IssueCount.verify|verify} messages.
                     * @param message IssueCount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IIssueCount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueCount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueCount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.IssueCount;

                    /**
                     * Decodes an IssueCount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueCount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.IssueCount;

                    /**
                     * Verifies an IssueCount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueCount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueCount
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.IssueCount;

                    /**
                     * Creates a plain object from an IssueCount message. Also converts values to other types if specified.
                     * @param message IssueCount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.IssueCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueCount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IssueCount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AdditionalDetail. */
                interface IAdditionalDetail {

                    /** AdditionalDetail shortBackupRetentionInfo */
                    shortBackupRetentionInfo?: (google.cloud.databasecenter.v1beta.IRetentionSettingsInfo|null);

                    /** AdditionalDetail backupRunInfo */
                    backupRunInfo?: (google.cloud.databasecenter.v1beta.IBackupRunInfo|null);

                    /** AdditionalDetail sccInfo */
                    sccInfo?: (google.cloud.databasecenter.v1beta.ISCCInfo|null);

                    /** AdditionalDetail recommendationInfo */
                    recommendationInfo?: (google.cloud.databasecenter.v1beta.IRecommendationInfo|null);

                    /** AdditionalDetail automatedBackupPolicyInfo */
                    automatedBackupPolicyInfo?: (google.cloud.databasecenter.v1beta.IAutomatedBackupPolicyInfo|null);

                    /** AdditionalDetail deletionProtectionInfo */
                    deletionProtectionInfo?: (google.cloud.databasecenter.v1beta.IDeletionProtectionInfo|null);

                    /** AdditionalDetail resourceSuspensionInfo */
                    resourceSuspensionInfo?: (google.cloud.databasecenter.v1beta.IResourceSuspensionInfo|null);

                    /** AdditionalDetail inefficientQueryInfo */
                    inefficientQueryInfo?: (google.cloud.databasecenter.v1beta.IInefficientQueryInfo|null);

                    /** AdditionalDetail outdatedMinorVersionInfo */
                    outdatedMinorVersionInfo?: (google.cloud.databasecenter.v1beta.IOutdatedMinorVersionInfo|null);

                    /** AdditionalDetail maintenanceRecommendationInfo */
                    maintenanceRecommendationInfo?: (google.cloud.databasecenter.v1beta.IMaintenanceRecommendationInfo|null);

                    /** AdditionalDetail signalSource */
                    signalSource?: (google.cloud.databasecenter.v1beta.SignalSource|keyof typeof google.cloud.databasecenter.v1beta.SignalSource|null);

                    /** AdditionalDetail signalType */
                    signalType?: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType|null);

                    /** AdditionalDetail signalEventTime */
                    signalEventTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AdditionalDetail. */
                class AdditionalDetail implements IAdditionalDetail {

                    /**
                     * Constructs a new AdditionalDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAdditionalDetail);

                    /** AdditionalDetail shortBackupRetentionInfo. */
                    public shortBackupRetentionInfo?: (google.cloud.databasecenter.v1beta.IRetentionSettingsInfo|null);

                    /** AdditionalDetail backupRunInfo. */
                    public backupRunInfo?: (google.cloud.databasecenter.v1beta.IBackupRunInfo|null);

                    /** AdditionalDetail sccInfo. */
                    public sccInfo?: (google.cloud.databasecenter.v1beta.ISCCInfo|null);

                    /** AdditionalDetail recommendationInfo. */
                    public recommendationInfo?: (google.cloud.databasecenter.v1beta.IRecommendationInfo|null);

                    /** AdditionalDetail automatedBackupPolicyInfo. */
                    public automatedBackupPolicyInfo?: (google.cloud.databasecenter.v1beta.IAutomatedBackupPolicyInfo|null);

                    /** AdditionalDetail deletionProtectionInfo. */
                    public deletionProtectionInfo?: (google.cloud.databasecenter.v1beta.IDeletionProtectionInfo|null);

                    /** AdditionalDetail resourceSuspensionInfo. */
                    public resourceSuspensionInfo?: (google.cloud.databasecenter.v1beta.IResourceSuspensionInfo|null);

                    /** AdditionalDetail inefficientQueryInfo. */
                    public inefficientQueryInfo?: (google.cloud.databasecenter.v1beta.IInefficientQueryInfo|null);

                    /** AdditionalDetail outdatedMinorVersionInfo. */
                    public outdatedMinorVersionInfo?: (google.cloud.databasecenter.v1beta.IOutdatedMinorVersionInfo|null);

                    /** AdditionalDetail maintenanceRecommendationInfo. */
                    public maintenanceRecommendationInfo?: (google.cloud.databasecenter.v1beta.IMaintenanceRecommendationInfo|null);

                    /** AdditionalDetail signalSource. */
                    public signalSource: (google.cloud.databasecenter.v1beta.SignalSource|keyof typeof google.cloud.databasecenter.v1beta.SignalSource);

                    /** AdditionalDetail signalType. */
                    public signalType: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType);

                    /** AdditionalDetail signalEventTime. */
                    public signalEventTime?: (google.protobuf.ITimestamp|null);

                    /** AdditionalDetail detail. */
                    public detail?: ("shortBackupRetentionInfo"|"backupRunInfo"|"sccInfo"|"recommendationInfo"|"automatedBackupPolicyInfo"|"deletionProtectionInfo"|"resourceSuspensionInfo"|"inefficientQueryInfo"|"outdatedMinorVersionInfo"|"maintenanceRecommendationInfo");

                    /**
                     * Creates a new AdditionalDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdditionalDetail instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAdditionalDetail): google.cloud.databasecenter.v1beta.AdditionalDetail;

                    /**
                     * Encodes the specified AdditionalDetail message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AdditionalDetail.verify|verify} messages.
                     * @param message AdditionalDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAdditionalDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdditionalDetail message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AdditionalDetail.verify|verify} messages.
                     * @param message AdditionalDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAdditionalDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdditionalDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdditionalDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AdditionalDetail;

                    /**
                     * Decodes an AdditionalDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdditionalDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AdditionalDetail;

                    /**
                     * Verifies an AdditionalDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdditionalDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdditionalDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AdditionalDetail;

                    /**
                     * Creates a plain object from an AdditionalDetail message. Also converts values to other types if specified.
                     * @param message AdditionalDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AdditionalDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdditionalDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AdditionalDetail
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SubResource. */
                interface ISubResource {

                    /** SubResource resourceType */
                    resourceType?: (string|null);

                    /** SubResource fullResourceName */
                    fullResourceName?: (string|null);

                    /** SubResource product */
                    product?: (google.cloud.databasecenter.v1beta.IProduct|null);

                    /** SubResource container */
                    container?: (string|null);
                }

                /** Represents a SubResource. */
                class SubResource implements ISubResource {

                    /**
                     * Constructs a new SubResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISubResource);

                    /** SubResource resourceType. */
                    public resourceType: string;

                    /** SubResource fullResourceName. */
                    public fullResourceName: string;

                    /** SubResource product. */
                    public product?: (google.cloud.databasecenter.v1beta.IProduct|null);

                    /** SubResource container. */
                    public container: string;

                    /**
                     * Creates a new SubResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubResource instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISubResource): google.cloud.databasecenter.v1beta.SubResource;

                    /**
                     * Encodes the specified SubResource message. Does not implicitly {@link google.cloud.databasecenter.v1beta.SubResource.verify|verify} messages.
                     * @param message SubResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISubResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubResource message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.SubResource.verify|verify} messages.
                     * @param message SubResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISubResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.SubResource;

                    /**
                     * Decodes a SubResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.SubResource;

                    /**
                     * Verifies a SubResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.SubResource;

                    /**
                     * Creates a plain object from a SubResource message. Also converts values to other types if specified.
                     * @param message SubResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.SubResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubResource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetentionSettingsInfo. */
                interface IRetentionSettingsInfo {

                    /** RetentionSettingsInfo quantityBasedRetention */
                    quantityBasedRetention?: (google.protobuf.IInt32Value|null);

                    /** RetentionSettingsInfo durationBasedRetention */
                    durationBasedRetention?: (google.protobuf.IDuration|null);

                    /** RetentionSettingsInfo timestampBasedRetentionTime */
                    timestampBasedRetentionTime?: (google.protobuf.ITimestamp|null);

                    /** RetentionSettingsInfo subResource */
                    subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);
                }

                /** Represents a RetentionSettingsInfo. */
                class RetentionSettingsInfo implements IRetentionSettingsInfo {

                    /**
                     * Constructs a new RetentionSettingsInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IRetentionSettingsInfo);

                    /** RetentionSettingsInfo quantityBasedRetention. */
                    public quantityBasedRetention?: (google.protobuf.IInt32Value|null);

                    /** RetentionSettingsInfo durationBasedRetention. */
                    public durationBasedRetention?: (google.protobuf.IDuration|null);

                    /** RetentionSettingsInfo timestampBasedRetentionTime. */
                    public timestampBasedRetentionTime?: (google.protobuf.ITimestamp|null);

                    /** RetentionSettingsInfo subResource. */
                    public subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);

                    /** RetentionSettingsInfo retention. */
                    public retention?: ("quantityBasedRetention"|"durationBasedRetention"|"timestampBasedRetentionTime");

                    /**
                     * Creates a new RetentionSettingsInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetentionSettingsInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IRetentionSettingsInfo): google.cloud.databasecenter.v1beta.RetentionSettingsInfo;

                    /**
                     * Encodes the specified RetentionSettingsInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.RetentionSettingsInfo.verify|verify} messages.
                     * @param message RetentionSettingsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IRetentionSettingsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetentionSettingsInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.RetentionSettingsInfo.verify|verify} messages.
                     * @param message RetentionSettingsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IRetentionSettingsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetentionSettingsInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetentionSettingsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.RetentionSettingsInfo;

                    /**
                     * Decodes a RetentionSettingsInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetentionSettingsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.RetentionSettingsInfo;

                    /**
                     * Verifies a RetentionSettingsInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetentionSettingsInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetentionSettingsInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.RetentionSettingsInfo;

                    /**
                     * Creates a plain object from a RetentionSettingsInfo message. Also converts values to other types if specified.
                     * @param message RetentionSettingsInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.RetentionSettingsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetentionSettingsInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetentionSettingsInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutomatedBackupPolicyInfo. */
                interface IAutomatedBackupPolicyInfo {

                    /** AutomatedBackupPolicyInfo subResource */
                    subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);

                    /** AutomatedBackupPolicyInfo isEnabled */
                    isEnabled?: (boolean|null);
                }

                /** Represents an AutomatedBackupPolicyInfo. */
                class AutomatedBackupPolicyInfo implements IAutomatedBackupPolicyInfo {

                    /**
                     * Constructs a new AutomatedBackupPolicyInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IAutomatedBackupPolicyInfo);

                    /** AutomatedBackupPolicyInfo subResource. */
                    public subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);

                    /** AutomatedBackupPolicyInfo isEnabled. */
                    public isEnabled: boolean;

                    /**
                     * Creates a new AutomatedBackupPolicyInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutomatedBackupPolicyInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IAutomatedBackupPolicyInfo): google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo;

                    /**
                     * Encodes the specified AutomatedBackupPolicyInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo.verify|verify} messages.
                     * @param message AutomatedBackupPolicyInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IAutomatedBackupPolicyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutomatedBackupPolicyInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo.verify|verify} messages.
                     * @param message AutomatedBackupPolicyInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IAutomatedBackupPolicyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutomatedBackupPolicyInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutomatedBackupPolicyInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo;

                    /**
                     * Decodes an AutomatedBackupPolicyInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutomatedBackupPolicyInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo;

                    /**
                     * Verifies an AutomatedBackupPolicyInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutomatedBackupPolicyInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutomatedBackupPolicyInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo;

                    /**
                     * Creates a plain object from an AutomatedBackupPolicyInfo message. Also converts values to other types if specified.
                     * @param message AutomatedBackupPolicyInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.AutomatedBackupPolicyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutomatedBackupPolicyInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutomatedBackupPolicyInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletionProtectionInfo. */
                interface IDeletionProtectionInfo {

                    /** DeletionProtectionInfo subResource */
                    subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);

                    /** DeletionProtectionInfo deletionProtectionEnabled */
                    deletionProtectionEnabled?: (boolean|null);
                }

                /** Represents a DeletionProtectionInfo. */
                class DeletionProtectionInfo implements IDeletionProtectionInfo {

                    /**
                     * Constructs a new DeletionProtectionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IDeletionProtectionInfo);

                    /** DeletionProtectionInfo subResource. */
                    public subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);

                    /** DeletionProtectionInfo deletionProtectionEnabled. */
                    public deletionProtectionEnabled: boolean;

                    /**
                     * Creates a new DeletionProtectionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletionProtectionInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IDeletionProtectionInfo): google.cloud.databasecenter.v1beta.DeletionProtectionInfo;

                    /**
                     * Encodes the specified DeletionProtectionInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.DeletionProtectionInfo.verify|verify} messages.
                     * @param message DeletionProtectionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IDeletionProtectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletionProtectionInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.DeletionProtectionInfo.verify|verify} messages.
                     * @param message DeletionProtectionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IDeletionProtectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletionProtectionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletionProtectionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.DeletionProtectionInfo;

                    /**
                     * Decodes a DeletionProtectionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletionProtectionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.DeletionProtectionInfo;

                    /**
                     * Verifies a DeletionProtectionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletionProtectionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletionProtectionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.DeletionProtectionInfo;

                    /**
                     * Creates a plain object from a DeletionProtectionInfo message. Also converts values to other types if specified.
                     * @param message DeletionProtectionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.DeletionProtectionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletionProtectionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletionProtectionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceSuspensionInfo. */
                interface IResourceSuspensionInfo {

                    /** ResourceSuspensionInfo resourceSuspended */
                    resourceSuspended?: (boolean|null);

                    /** ResourceSuspensionInfo suspensionReason */
                    suspensionReason?: (google.cloud.databasecenter.v1beta.SuspensionReason|keyof typeof google.cloud.databasecenter.v1beta.SuspensionReason|null);
                }

                /** Represents a ResourceSuspensionInfo. */
                class ResourceSuspensionInfo implements IResourceSuspensionInfo {

                    /**
                     * Constructs a new ResourceSuspensionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IResourceSuspensionInfo);

                    /** ResourceSuspensionInfo resourceSuspended. */
                    public resourceSuspended: boolean;

                    /** ResourceSuspensionInfo suspensionReason. */
                    public suspensionReason: (google.cloud.databasecenter.v1beta.SuspensionReason|keyof typeof google.cloud.databasecenter.v1beta.SuspensionReason);

                    /**
                     * Creates a new ResourceSuspensionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceSuspensionInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IResourceSuspensionInfo): google.cloud.databasecenter.v1beta.ResourceSuspensionInfo;

                    /**
                     * Encodes the specified ResourceSuspensionInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceSuspensionInfo.verify|verify} messages.
                     * @param message ResourceSuspensionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IResourceSuspensionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceSuspensionInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.ResourceSuspensionInfo.verify|verify} messages.
                     * @param message ResourceSuspensionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IResourceSuspensionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceSuspensionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceSuspensionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.ResourceSuspensionInfo;

                    /**
                     * Decodes a ResourceSuspensionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceSuspensionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.ResourceSuspensionInfo;

                    /**
                     * Verifies a ResourceSuspensionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceSuspensionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceSuspensionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.ResourceSuspensionInfo;

                    /**
                     * Creates a plain object from a ResourceSuspensionInfo message. Also converts values to other types if specified.
                     * @param message ResourceSuspensionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.ResourceSuspensionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceSuspensionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceSuspensionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupRunInfo. */
                interface IBackupRunInfo {

                    /** BackupRunInfo startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRunInfo endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRunInfo state */
                    state?: (google.cloud.databasecenter.v1beta.BackupRunInfo.State|keyof typeof google.cloud.databasecenter.v1beta.BackupRunInfo.State|null);

                    /** BackupRunInfo errorMessage */
                    errorMessage?: (string|null);

                    /** BackupRunInfo operationErrorType */
                    operationErrorType?: (google.cloud.databasecenter.v1beta.OperationErrorType|keyof typeof google.cloud.databasecenter.v1beta.OperationErrorType|null);

                    /** BackupRunInfo subResource */
                    subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);
                }

                /** Represents a BackupRunInfo. */
                class BackupRunInfo implements IBackupRunInfo {

                    /**
                     * Constructs a new BackupRunInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IBackupRunInfo);

                    /** BackupRunInfo startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRunInfo endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** BackupRunInfo state. */
                    public state: (google.cloud.databasecenter.v1beta.BackupRunInfo.State|keyof typeof google.cloud.databasecenter.v1beta.BackupRunInfo.State);

                    /** BackupRunInfo errorMessage. */
                    public errorMessage: string;

                    /** BackupRunInfo operationErrorType. */
                    public operationErrorType: (google.cloud.databasecenter.v1beta.OperationErrorType|keyof typeof google.cloud.databasecenter.v1beta.OperationErrorType);

                    /** BackupRunInfo subResource. */
                    public subResource?: (google.cloud.databasecenter.v1beta.ISubResource|null);

                    /**
                     * Creates a new BackupRunInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupRunInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IBackupRunInfo): google.cloud.databasecenter.v1beta.BackupRunInfo;

                    /**
                     * Encodes the specified BackupRunInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.BackupRunInfo.verify|verify} messages.
                     * @param message BackupRunInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IBackupRunInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupRunInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.BackupRunInfo.verify|verify} messages.
                     * @param message BackupRunInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IBackupRunInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupRunInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupRunInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.BackupRunInfo;

                    /**
                     * Decodes a BackupRunInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupRunInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.BackupRunInfo;

                    /**
                     * Verifies a BackupRunInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupRunInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupRunInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.BackupRunInfo;

                    /**
                     * Creates a plain object from a BackupRunInfo message. Also converts values to other types if specified.
                     * @param message BackupRunInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.BackupRunInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupRunInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupRunInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BackupRunInfo {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2
                    }
                }

                /** Properties of an InefficientQueryInfo. */
                interface IInefficientQueryInfo {

                    /** InefficientQueryInfo database */
                    database?: (string|null);

                    /** InefficientQueryInfo table */
                    table?: (string|null);

                    /** InefficientQueryInfo sqlIndexStatement */
                    sqlIndexStatement?: (string|null);

                    /** InefficientQueryInfo storageCostBytes */
                    storageCostBytes?: (number|Long|string|null);

                    /** InefficientQueryInfo impactedQueriesCount */
                    impactedQueriesCount?: (number|Long|string|null);
                }

                /** Represents an InefficientQueryInfo. */
                class InefficientQueryInfo implements IInefficientQueryInfo {

                    /**
                     * Constructs a new InefficientQueryInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IInefficientQueryInfo);

                    /** InefficientQueryInfo database. */
                    public database: string;

                    /** InefficientQueryInfo table. */
                    public table: string;

                    /** InefficientQueryInfo sqlIndexStatement. */
                    public sqlIndexStatement: string;

                    /** InefficientQueryInfo storageCostBytes. */
                    public storageCostBytes: (number|Long|string);

                    /** InefficientQueryInfo impactedQueriesCount. */
                    public impactedQueriesCount: (number|Long|string);

                    /**
                     * Creates a new InefficientQueryInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InefficientQueryInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IInefficientQueryInfo): google.cloud.databasecenter.v1beta.InefficientQueryInfo;

                    /**
                     * Encodes the specified InefficientQueryInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.InefficientQueryInfo.verify|verify} messages.
                     * @param message InefficientQueryInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IInefficientQueryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InefficientQueryInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.InefficientQueryInfo.verify|verify} messages.
                     * @param message InefficientQueryInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IInefficientQueryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InefficientQueryInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InefficientQueryInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.InefficientQueryInfo;

                    /**
                     * Decodes an InefficientQueryInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InefficientQueryInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.InefficientQueryInfo;

                    /**
                     * Verifies an InefficientQueryInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InefficientQueryInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InefficientQueryInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.InefficientQueryInfo;

                    /**
                     * Creates a plain object from an InefficientQueryInfo message. Also converts values to other types if specified.
                     * @param message InefficientQueryInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.InefficientQueryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InefficientQueryInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InefficientQueryInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SCCInfo. */
                interface ISCCInfo {

                    /** SCCInfo signal */
                    signal?: (string|null);

                    /** SCCInfo category */
                    category?: (string|null);

                    /** SCCInfo regulatoryStandards */
                    regulatoryStandards?: (google.cloud.databasecenter.v1beta.IRegulatoryStandard[]|null);

                    /** SCCInfo externalUri */
                    externalUri?: (string|null);
                }

                /** Represents a SCCInfo. */
                class SCCInfo implements ISCCInfo {

                    /**
                     * Constructs a new SCCInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISCCInfo);

                    /** SCCInfo signal. */
                    public signal: string;

                    /** SCCInfo category. */
                    public category: string;

                    /** SCCInfo regulatoryStandards. */
                    public regulatoryStandards: google.cloud.databasecenter.v1beta.IRegulatoryStandard[];

                    /** SCCInfo externalUri. */
                    public externalUri: string;

                    /**
                     * Creates a new SCCInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SCCInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISCCInfo): google.cloud.databasecenter.v1beta.SCCInfo;

                    /**
                     * Encodes the specified SCCInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.SCCInfo.verify|verify} messages.
                     * @param message SCCInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISCCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SCCInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.SCCInfo.verify|verify} messages.
                     * @param message SCCInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISCCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SCCInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SCCInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.SCCInfo;

                    /**
                     * Decodes a SCCInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SCCInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.SCCInfo;

                    /**
                     * Verifies a SCCInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SCCInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SCCInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.SCCInfo;

                    /**
                     * Creates a plain object from a SCCInfo message. Also converts values to other types if specified.
                     * @param message SCCInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.SCCInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SCCInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SCCInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecommendationInfo. */
                interface IRecommendationInfo {

                    /** RecommendationInfo recommender */
                    recommender?: (string|null);

                    /** RecommendationInfo recommenderId */
                    recommenderId?: (string|null);

                    /** RecommendationInfo recommenderSubtype */
                    recommenderSubtype?: (string|null);
                }

                /** Represents a RecommendationInfo. */
                class RecommendationInfo implements IRecommendationInfo {

                    /**
                     * Constructs a new RecommendationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IRecommendationInfo);

                    /** RecommendationInfo recommender. */
                    public recommender: string;

                    /** RecommendationInfo recommenderId. */
                    public recommenderId: string;

                    /** RecommendationInfo recommenderSubtype. */
                    public recommenderSubtype: string;

                    /**
                     * Creates a new RecommendationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommendationInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IRecommendationInfo): google.cloud.databasecenter.v1beta.RecommendationInfo;

                    /**
                     * Encodes the specified RecommendationInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.RecommendationInfo.verify|verify} messages.
                     * @param message RecommendationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IRecommendationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommendationInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.RecommendationInfo.verify|verify} messages.
                     * @param message RecommendationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IRecommendationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommendationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommendationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.RecommendationInfo;

                    /**
                     * Decodes a RecommendationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommendationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.RecommendationInfo;

                    /**
                     * Verifies a RecommendationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommendationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommendationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.RecommendationInfo;

                    /**
                     * Creates a plain object from a RecommendationInfo message. Also converts values to other types if specified.
                     * @param message RecommendationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.RecommendationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommendationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommendationInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RegulatoryStandard. */
                interface IRegulatoryStandard {

                    /** RegulatoryStandard standard */
                    standard?: (string|null);

                    /** RegulatoryStandard version */
                    version?: (string|null);
                }

                /** Represents a RegulatoryStandard. */
                class RegulatoryStandard implements IRegulatoryStandard {

                    /**
                     * Constructs a new RegulatoryStandard.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IRegulatoryStandard);

                    /** RegulatoryStandard standard. */
                    public standard: string;

                    /** RegulatoryStandard version. */
                    public version: string;

                    /**
                     * Creates a new RegulatoryStandard instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegulatoryStandard instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IRegulatoryStandard): google.cloud.databasecenter.v1beta.RegulatoryStandard;

                    /**
                     * Encodes the specified RegulatoryStandard message. Does not implicitly {@link google.cloud.databasecenter.v1beta.RegulatoryStandard.verify|verify} messages.
                     * @param message RegulatoryStandard message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IRegulatoryStandard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegulatoryStandard message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.RegulatoryStandard.verify|verify} messages.
                     * @param message RegulatoryStandard message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IRegulatoryStandard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegulatoryStandard message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegulatoryStandard
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.RegulatoryStandard;

                    /**
                     * Decodes a RegulatoryStandard message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegulatoryStandard
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.RegulatoryStandard;

                    /**
                     * Verifies a RegulatoryStandard message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegulatoryStandard message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegulatoryStandard
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.RegulatoryStandard;

                    /**
                     * Creates a plain object from a RegulatoryStandard message. Also converts values to other types if specified.
                     * @param message RegulatoryStandard
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.RegulatoryStandard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegulatoryStandard to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RegulatoryStandard
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutdatedMinorVersionInfo. */
                interface IOutdatedMinorVersionInfo {

                    /** OutdatedMinorVersionInfo recommendedMinorVersion */
                    recommendedMinorVersion?: (string|null);
                }

                /** Represents an OutdatedMinorVersionInfo. */
                class OutdatedMinorVersionInfo implements IOutdatedMinorVersionInfo {

                    /**
                     * Constructs a new OutdatedMinorVersionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IOutdatedMinorVersionInfo);

                    /** OutdatedMinorVersionInfo recommendedMinorVersion. */
                    public recommendedMinorVersion: string;

                    /**
                     * Creates a new OutdatedMinorVersionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutdatedMinorVersionInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IOutdatedMinorVersionInfo): google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo;

                    /**
                     * Encodes the specified OutdatedMinorVersionInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo.verify|verify} messages.
                     * @param message OutdatedMinorVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IOutdatedMinorVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutdatedMinorVersionInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo.verify|verify} messages.
                     * @param message OutdatedMinorVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IOutdatedMinorVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutdatedMinorVersionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutdatedMinorVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo;

                    /**
                     * Decodes an OutdatedMinorVersionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutdatedMinorVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo;

                    /**
                     * Verifies an OutdatedMinorVersionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutdatedMinorVersionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutdatedMinorVersionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo;

                    /**
                     * Creates a plain object from an OutdatedMinorVersionInfo message. Also converts values to other types if specified.
                     * @param message OutdatedMinorVersionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.OutdatedMinorVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutdatedMinorVersionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutdatedMinorVersionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MaintenanceRecommendationInfo. */
                interface IMaintenanceRecommendationInfo {

                    /** MaintenanceRecommendationInfo resourceMaintenanceSchedules */
                    resourceMaintenanceSchedules?: (google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule[]|null);
                }

                /** Represents a MaintenanceRecommendationInfo. */
                class MaintenanceRecommendationInfo implements IMaintenanceRecommendationInfo {

                    /**
                     * Constructs a new MaintenanceRecommendationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.IMaintenanceRecommendationInfo);

                    /** MaintenanceRecommendationInfo resourceMaintenanceSchedules. */
                    public resourceMaintenanceSchedules: google.cloud.databasecenter.v1beta.IResourceMaintenanceSchedule[];

                    /**
                     * Creates a new MaintenanceRecommendationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceRecommendationInfo instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.IMaintenanceRecommendationInfo): google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo;

                    /**
                     * Encodes the specified MaintenanceRecommendationInfo message. Does not implicitly {@link google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo.verify|verify} messages.
                     * @param message MaintenanceRecommendationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.IMaintenanceRecommendationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceRecommendationInfo message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo.verify|verify} messages.
                     * @param message MaintenanceRecommendationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.IMaintenanceRecommendationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceRecommendationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceRecommendationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo;

                    /**
                     * Decodes a MaintenanceRecommendationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceRecommendationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo;

                    /**
                     * Verifies a MaintenanceRecommendationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaintenanceRecommendationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaintenanceRecommendationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo;

                    /**
                     * Creates a plain object from a MaintenanceRecommendationInfo message. Also converts values to other types if specified.
                     * @param message MaintenanceRecommendationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.MaintenanceRecommendationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceRecommendationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaintenanceRecommendationInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Signal. */
                interface ISignal {

                    /** Signal signalType */
                    signalType?: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType|null);

                    /** Signal signalStatus */
                    signalStatus?: (google.cloud.databasecenter.v1beta.SignalStatus|keyof typeof google.cloud.databasecenter.v1beta.SignalStatus|null);

                    /** Signal additionalDetails */
                    additionalDetails?: (google.cloud.databasecenter.v1beta.IAdditionalDetail[]|null);

                    /** Signal issueSeverity */
                    issueSeverity?: (google.cloud.databasecenter.v1beta.IssueSeverity|keyof typeof google.cloud.databasecenter.v1beta.IssueSeverity|null);

                    /** Signal issueCreateTime */
                    issueCreateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Signal. */
                class Signal implements ISignal {

                    /**
                     * Constructs a new Signal.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.databasecenter.v1beta.ISignal);

                    /** Signal signalType. */
                    public signalType: (google.cloud.databasecenter.v1beta.SignalType|keyof typeof google.cloud.databasecenter.v1beta.SignalType);

                    /** Signal signalStatus. */
                    public signalStatus: (google.cloud.databasecenter.v1beta.SignalStatus|keyof typeof google.cloud.databasecenter.v1beta.SignalStatus);

                    /** Signal additionalDetails. */
                    public additionalDetails: google.cloud.databasecenter.v1beta.IAdditionalDetail[];

                    /** Signal issueSeverity. */
                    public issueSeverity: (google.cloud.databasecenter.v1beta.IssueSeverity|keyof typeof google.cloud.databasecenter.v1beta.IssueSeverity);

                    /** Signal issueCreateTime. */
                    public issueCreateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Signal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Signal instance
                     */
                    public static create(properties?: google.cloud.databasecenter.v1beta.ISignal): google.cloud.databasecenter.v1beta.Signal;

                    /**
                     * Encodes the specified Signal message. Does not implicitly {@link google.cloud.databasecenter.v1beta.Signal.verify|verify} messages.
                     * @param message Signal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.databasecenter.v1beta.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Signal message, length delimited. Does not implicitly {@link google.cloud.databasecenter.v1beta.Signal.verify|verify} messages.
                     * @param message Signal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.databasecenter.v1beta.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Signal message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Signal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.databasecenter.v1beta.Signal;

                    /**
                     * Decodes a Signal message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Signal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.databasecenter.v1beta.Signal;

                    /**
                     * Verifies a Signal message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Signal message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Signal
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.databasecenter.v1beta.Signal;

                    /**
                     * Creates a plain object from a Signal message. Also converts values to other types if specified.
                     * @param message Signal
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.databasecenter.v1beta.Signal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Signal to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Signal
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** SuspensionReason enum. */
                enum SuspensionReason {
                    SUSPENSION_REASON_UNSPECIFIED = 0,
                    WIPEOUT_HIDE_EVENT = 1,
                    WIPEOUT_PURGE_EVENT = 2,
                    BILLING_DISABLED = 3,
                    ABUSER_DETECTED = 4,
                    ENCRYPTION_KEY_INACCESSIBLE = 5,
                    REPLICATED_CLUSTER_ENCRYPTION_KEY_INACCESSIBLE = 6
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

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
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

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

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

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
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

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

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

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
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

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
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

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

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

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
            EDITION_LEGACY = 900,
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

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

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

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

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

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
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

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
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

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

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

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
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

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
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

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

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

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
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

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
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

        /** DayOfWeek enum. */
        enum DayOfWeek {
            DAY_OF_WEEK_UNSPECIFIED = 0,
            MONDAY = 1,
            TUESDAY = 2,
            WEDNESDAY = 3,
            THURSDAY = 4,
            FRIDAY = 5,
            SATURDAY = 6,
            SUNDAY = 7
        }

        /** Properties of a TimeOfDay. */
        interface ITimeOfDay {

            /** TimeOfDay hours */
            hours?: (number|null);

            /** TimeOfDay minutes */
            minutes?: (number|null);

            /** TimeOfDay seconds */
            seconds?: (number|null);

            /** TimeOfDay nanos */
            nanos?: (number|null);
        }

        /** Represents a TimeOfDay. */
        class TimeOfDay implements ITimeOfDay {

            /**
             * Constructs a new TimeOfDay.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeOfDay);

            /** TimeOfDay hours. */
            public hours: number;

            /** TimeOfDay minutes. */
            public minutes: number;

            /** TimeOfDay seconds. */
            public seconds: number;

            /** TimeOfDay nanos. */
            public nanos: number;

            /**
             * Creates a new TimeOfDay instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeOfDay instance
             */
            public static create(properties?: google.type.ITimeOfDay): google.type.TimeOfDay;

            /**
             * Encodes the specified TimeOfDay message. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeOfDay message, length delimited. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeOfDay;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeOfDay;

            /**
             * Verifies a TimeOfDay message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeOfDay message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeOfDay
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeOfDay;

            /**
             * Creates a plain object from a TimeOfDay message. Also converts values to other types if specified.
             * @param message TimeOfDay
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeOfDay, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeOfDay to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeOfDay
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
