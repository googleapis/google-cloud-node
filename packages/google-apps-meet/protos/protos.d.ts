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

    /** Namespace apps. */
    namespace apps {

        /** Namespace meet. */
        namespace meet {

            /** Namespace v2. */
            namespace v2 {

                /** Properties of a Space. */
                interface ISpace {

                    /** Space name */
                    name?: (string|null);

                    /** Space meetingUri */
                    meetingUri?: (string|null);

                    /** Space meetingCode */
                    meetingCode?: (string|null);

                    /** Space config */
                    config?: (google.apps.meet.v2.ISpaceConfig|null);

                    /** Space activeConference */
                    activeConference?: (google.apps.meet.v2.IActiveConference|null);
                }

                /** Represents a Space. */
                class Space implements ISpace {

                    /**
                     * Constructs a new Space.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.ISpace);

                    /** Space name. */
                    public name: string;

                    /** Space meetingUri. */
                    public meetingUri: string;

                    /** Space meetingCode. */
                    public meetingCode: string;

                    /** Space config. */
                    public config?: (google.apps.meet.v2.ISpaceConfig|null);

                    /** Space activeConference. */
                    public activeConference?: (google.apps.meet.v2.IActiveConference|null);

                    /**
                     * Creates a new Space instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Space instance
                     */
                    public static create(properties?: google.apps.meet.v2.ISpace): google.apps.meet.v2.Space;

                    /**
                     * Encodes the specified Space message. Does not implicitly {@link google.apps.meet.v2.Space.verify|verify} messages.
                     * @param message Space message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.ISpace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Space message, length delimited. Does not implicitly {@link google.apps.meet.v2.Space.verify|verify} messages.
                     * @param message Space message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.ISpace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Space message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Space
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.Space;

                    /**
                     * Decodes a Space message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Space
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.Space;

                    /**
                     * Verifies a Space message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Space message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Space
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.Space;

                    /**
                     * Creates a plain object from a Space message. Also converts values to other types if specified.
                     * @param message Space
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.Space, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Space to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Space
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActiveConference. */
                interface IActiveConference {

                    /** ActiveConference conferenceRecord */
                    conferenceRecord?: (string|null);
                }

                /** Represents an ActiveConference. */
                class ActiveConference implements IActiveConference {

                    /**
                     * Constructs a new ActiveConference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IActiveConference);

                    /** ActiveConference conferenceRecord. */
                    public conferenceRecord: string;

                    /**
                     * Creates a new ActiveConference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActiveConference instance
                     */
                    public static create(properties?: google.apps.meet.v2.IActiveConference): google.apps.meet.v2.ActiveConference;

                    /**
                     * Encodes the specified ActiveConference message. Does not implicitly {@link google.apps.meet.v2.ActiveConference.verify|verify} messages.
                     * @param message ActiveConference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IActiveConference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActiveConference message, length delimited. Does not implicitly {@link google.apps.meet.v2.ActiveConference.verify|verify} messages.
                     * @param message ActiveConference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IActiveConference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActiveConference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActiveConference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ActiveConference;

                    /**
                     * Decodes an ActiveConference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActiveConference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ActiveConference;

                    /**
                     * Verifies an ActiveConference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActiveConference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActiveConference
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ActiveConference;

                    /**
                     * Creates a plain object from an ActiveConference message. Also converts values to other types if specified.
                     * @param message ActiveConference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ActiveConference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActiveConference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActiveConference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpaceConfig. */
                interface ISpaceConfig {

                    /** SpaceConfig accessType */
                    accessType?: (google.apps.meet.v2.SpaceConfig.AccessType|keyof typeof google.apps.meet.v2.SpaceConfig.AccessType|null);

                    /** SpaceConfig entryPointAccess */
                    entryPointAccess?: (google.apps.meet.v2.SpaceConfig.EntryPointAccess|keyof typeof google.apps.meet.v2.SpaceConfig.EntryPointAccess|null);
                }

                /** Represents a SpaceConfig. */
                class SpaceConfig implements ISpaceConfig {

                    /**
                     * Constructs a new SpaceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.ISpaceConfig);

                    /** SpaceConfig accessType. */
                    public accessType: (google.apps.meet.v2.SpaceConfig.AccessType|keyof typeof google.apps.meet.v2.SpaceConfig.AccessType);

                    /** SpaceConfig entryPointAccess. */
                    public entryPointAccess: (google.apps.meet.v2.SpaceConfig.EntryPointAccess|keyof typeof google.apps.meet.v2.SpaceConfig.EntryPointAccess);

                    /**
                     * Creates a new SpaceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpaceConfig instance
                     */
                    public static create(properties?: google.apps.meet.v2.ISpaceConfig): google.apps.meet.v2.SpaceConfig;

                    /**
                     * Encodes the specified SpaceConfig message. Does not implicitly {@link google.apps.meet.v2.SpaceConfig.verify|verify} messages.
                     * @param message SpaceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.ISpaceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpaceConfig message, length delimited. Does not implicitly {@link google.apps.meet.v2.SpaceConfig.verify|verify} messages.
                     * @param message SpaceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.ISpaceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpaceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpaceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.SpaceConfig;

                    /**
                     * Decodes a SpaceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpaceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.SpaceConfig;

                    /**
                     * Verifies a SpaceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpaceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpaceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.SpaceConfig;

                    /**
                     * Creates a plain object from a SpaceConfig message. Also converts values to other types if specified.
                     * @param message SpaceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.SpaceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpaceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpaceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SpaceConfig {

                    /** AccessType enum. */
                    enum AccessType {
                        ACCESS_TYPE_UNSPECIFIED = 0,
                        OPEN = 1,
                        TRUSTED = 2,
                        RESTRICTED = 3
                    }

                    /** EntryPointAccess enum. */
                    enum EntryPointAccess {
                        ENTRY_POINT_ACCESS_UNSPECIFIED = 0,
                        ALL = 1,
                        CREATOR_APP_ONLY = 2
                    }
                }

                /** Properties of a ConferenceRecord. */
                interface IConferenceRecord {

                    /** ConferenceRecord name */
                    name?: (string|null);

                    /** ConferenceRecord startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord space */
                    space?: (string|null);
                }

                /** Represents a ConferenceRecord. */
                class ConferenceRecord implements IConferenceRecord {

                    /**
                     * Constructs a new ConferenceRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IConferenceRecord);

                    /** ConferenceRecord name. */
                    public name: string;

                    /** ConferenceRecord startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord space. */
                    public space: string;

                    /**
                     * Creates a new ConferenceRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConferenceRecord instance
                     */
                    public static create(properties?: google.apps.meet.v2.IConferenceRecord): google.apps.meet.v2.ConferenceRecord;

                    /**
                     * Encodes the specified ConferenceRecord message. Does not implicitly {@link google.apps.meet.v2.ConferenceRecord.verify|verify} messages.
                     * @param message ConferenceRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IConferenceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConferenceRecord message, length delimited. Does not implicitly {@link google.apps.meet.v2.ConferenceRecord.verify|verify} messages.
                     * @param message ConferenceRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IConferenceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConferenceRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConferenceRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ConferenceRecord;

                    /**
                     * Decodes a ConferenceRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConferenceRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ConferenceRecord;

                    /**
                     * Verifies a ConferenceRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConferenceRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConferenceRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ConferenceRecord;

                    /**
                     * Creates a plain object from a ConferenceRecord message. Also converts values to other types if specified.
                     * @param message ConferenceRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ConferenceRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConferenceRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConferenceRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Participant. */
                interface IParticipant {

                    /** Participant signedinUser */
                    signedinUser?: (google.apps.meet.v2.ISignedinUser|null);

                    /** Participant anonymousUser */
                    anonymousUser?: (google.apps.meet.v2.IAnonymousUser|null);

                    /** Participant phoneUser */
                    phoneUser?: (google.apps.meet.v2.IPhoneUser|null);

                    /** Participant name */
                    name?: (string|null);

                    /** Participant earliestStartTime */
                    earliestStartTime?: (google.protobuf.ITimestamp|null);

                    /** Participant latestEndTime */
                    latestEndTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Participant. */
                class Participant implements IParticipant {

                    /**
                     * Constructs a new Participant.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IParticipant);

                    /** Participant signedinUser. */
                    public signedinUser?: (google.apps.meet.v2.ISignedinUser|null);

                    /** Participant anonymousUser. */
                    public anonymousUser?: (google.apps.meet.v2.IAnonymousUser|null);

                    /** Participant phoneUser. */
                    public phoneUser?: (google.apps.meet.v2.IPhoneUser|null);

                    /** Participant name. */
                    public name: string;

                    /** Participant earliestStartTime. */
                    public earliestStartTime?: (google.protobuf.ITimestamp|null);

                    /** Participant latestEndTime. */
                    public latestEndTime?: (google.protobuf.ITimestamp|null);

                    /** Participant user. */
                    public user?: ("signedinUser"|"anonymousUser"|"phoneUser");

                    /**
                     * Creates a new Participant instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Participant instance
                     */
                    public static create(properties?: google.apps.meet.v2.IParticipant): google.apps.meet.v2.Participant;

                    /**
                     * Encodes the specified Participant message. Does not implicitly {@link google.apps.meet.v2.Participant.verify|verify} messages.
                     * @param message Participant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Participant message, length delimited. Does not implicitly {@link google.apps.meet.v2.Participant.verify|verify} messages.
                     * @param message Participant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Participant message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Participant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.Participant;

                    /**
                     * Decodes a Participant message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Participant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.Participant;

                    /**
                     * Verifies a Participant message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Participant message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Participant
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.Participant;

                    /**
                     * Creates a plain object from a Participant message. Also converts values to other types if specified.
                     * @param message Participant
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.Participant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Participant to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Participant
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ParticipantSession. */
                interface IParticipantSession {

                    /** ParticipantSession name */
                    name?: (string|null);

                    /** ParticipantSession startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ParticipantSession endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ParticipantSession. */
                class ParticipantSession implements IParticipantSession {

                    /**
                     * Constructs a new ParticipantSession.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IParticipantSession);

                    /** ParticipantSession name. */
                    public name: string;

                    /** ParticipantSession startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ParticipantSession endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ParticipantSession instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParticipantSession instance
                     */
                    public static create(properties?: google.apps.meet.v2.IParticipantSession): google.apps.meet.v2.ParticipantSession;

                    /**
                     * Encodes the specified ParticipantSession message. Does not implicitly {@link google.apps.meet.v2.ParticipantSession.verify|verify} messages.
                     * @param message ParticipantSession message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IParticipantSession, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParticipantSession message, length delimited. Does not implicitly {@link google.apps.meet.v2.ParticipantSession.verify|verify} messages.
                     * @param message ParticipantSession message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IParticipantSession, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParticipantSession message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParticipantSession
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ParticipantSession;

                    /**
                     * Decodes a ParticipantSession message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParticipantSession
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ParticipantSession;

                    /**
                     * Verifies a ParticipantSession message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParticipantSession message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParticipantSession
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ParticipantSession;

                    /**
                     * Creates a plain object from a ParticipantSession message. Also converts values to other types if specified.
                     * @param message ParticipantSession
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ParticipantSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParticipantSession to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ParticipantSession
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignedinUser. */
                interface ISignedinUser {

                    /** SignedinUser user */
                    user?: (string|null);

                    /** SignedinUser displayName */
                    displayName?: (string|null);
                }

                /** Represents a SignedinUser. */
                class SignedinUser implements ISignedinUser {

                    /**
                     * Constructs a new SignedinUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.ISignedinUser);

                    /** SignedinUser user. */
                    public user: string;

                    /** SignedinUser displayName. */
                    public displayName: string;

                    /**
                     * Creates a new SignedinUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignedinUser instance
                     */
                    public static create(properties?: google.apps.meet.v2.ISignedinUser): google.apps.meet.v2.SignedinUser;

                    /**
                     * Encodes the specified SignedinUser message. Does not implicitly {@link google.apps.meet.v2.SignedinUser.verify|verify} messages.
                     * @param message SignedinUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.ISignedinUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignedinUser message, length delimited. Does not implicitly {@link google.apps.meet.v2.SignedinUser.verify|verify} messages.
                     * @param message SignedinUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.ISignedinUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignedinUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignedinUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.SignedinUser;

                    /**
                     * Decodes a SignedinUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignedinUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.SignedinUser;

                    /**
                     * Verifies a SignedinUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignedinUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignedinUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.SignedinUser;

                    /**
                     * Creates a plain object from a SignedinUser message. Also converts values to other types if specified.
                     * @param message SignedinUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.SignedinUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignedinUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignedinUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnonymousUser. */
                interface IAnonymousUser {

                    /** AnonymousUser displayName */
                    displayName?: (string|null);
                }

                /** Represents an AnonymousUser. */
                class AnonymousUser implements IAnonymousUser {

                    /**
                     * Constructs a new AnonymousUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IAnonymousUser);

                    /** AnonymousUser displayName. */
                    public displayName: string;

                    /**
                     * Creates a new AnonymousUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnonymousUser instance
                     */
                    public static create(properties?: google.apps.meet.v2.IAnonymousUser): google.apps.meet.v2.AnonymousUser;

                    /**
                     * Encodes the specified AnonymousUser message. Does not implicitly {@link google.apps.meet.v2.AnonymousUser.verify|verify} messages.
                     * @param message AnonymousUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IAnonymousUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnonymousUser message, length delimited. Does not implicitly {@link google.apps.meet.v2.AnonymousUser.verify|verify} messages.
                     * @param message AnonymousUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IAnonymousUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnonymousUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnonymousUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.AnonymousUser;

                    /**
                     * Decodes an AnonymousUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnonymousUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.AnonymousUser;

                    /**
                     * Verifies an AnonymousUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnonymousUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnonymousUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.AnonymousUser;

                    /**
                     * Creates a plain object from an AnonymousUser message. Also converts values to other types if specified.
                     * @param message AnonymousUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.AnonymousUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnonymousUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnonymousUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PhoneUser. */
                interface IPhoneUser {

                    /** PhoneUser displayName */
                    displayName?: (string|null);
                }

                /** Represents a PhoneUser. */
                class PhoneUser implements IPhoneUser {

                    /**
                     * Constructs a new PhoneUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IPhoneUser);

                    /** PhoneUser displayName. */
                    public displayName: string;

                    /**
                     * Creates a new PhoneUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhoneUser instance
                     */
                    public static create(properties?: google.apps.meet.v2.IPhoneUser): google.apps.meet.v2.PhoneUser;

                    /**
                     * Encodes the specified PhoneUser message. Does not implicitly {@link google.apps.meet.v2.PhoneUser.verify|verify} messages.
                     * @param message PhoneUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IPhoneUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhoneUser message, length delimited. Does not implicitly {@link google.apps.meet.v2.PhoneUser.verify|verify} messages.
                     * @param message PhoneUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IPhoneUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhoneUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhoneUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.PhoneUser;

                    /**
                     * Decodes a PhoneUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhoneUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.PhoneUser;

                    /**
                     * Verifies a PhoneUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhoneUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhoneUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.PhoneUser;

                    /**
                     * Creates a plain object from a PhoneUser message. Also converts values to other types if specified.
                     * @param message PhoneUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.PhoneUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhoneUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhoneUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Recording. */
                interface IRecording {

                    /** Recording driveDestination */
                    driveDestination?: (google.apps.meet.v2.IDriveDestination|null);

                    /** Recording name */
                    name?: (string|null);

                    /** Recording state */
                    state?: (google.apps.meet.v2.Recording.State|keyof typeof google.apps.meet.v2.Recording.State|null);

                    /** Recording startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Recording endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Recording. */
                class Recording implements IRecording {

                    /**
                     * Constructs a new Recording.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IRecording);

                    /** Recording driveDestination. */
                    public driveDestination?: (google.apps.meet.v2.IDriveDestination|null);

                    /** Recording name. */
                    public name: string;

                    /** Recording state. */
                    public state: (google.apps.meet.v2.Recording.State|keyof typeof google.apps.meet.v2.Recording.State);

                    /** Recording startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Recording endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Recording destination. */
                    public destination?: "driveDestination";

                    /**
                     * Creates a new Recording instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Recording instance
                     */
                    public static create(properties?: google.apps.meet.v2.IRecording): google.apps.meet.v2.Recording;

                    /**
                     * Encodes the specified Recording message. Does not implicitly {@link google.apps.meet.v2.Recording.verify|verify} messages.
                     * @param message Recording message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IRecording, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Recording message, length delimited. Does not implicitly {@link google.apps.meet.v2.Recording.verify|verify} messages.
                     * @param message Recording message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IRecording, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recording message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recording
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.Recording;

                    /**
                     * Decodes a Recording message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Recording
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.Recording;

                    /**
                     * Verifies a Recording message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Recording message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Recording
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.Recording;

                    /**
                     * Creates a plain object from a Recording message. Also converts values to other types if specified.
                     * @param message Recording
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.Recording, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Recording to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Recording
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Recording {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTED = 1,
                        ENDED = 2,
                        FILE_GENERATED = 3
                    }
                }

                /** Properties of a DriveDestination. */
                interface IDriveDestination {

                    /** DriveDestination file */
                    file?: (string|null);

                    /** DriveDestination exportUri */
                    exportUri?: (string|null);
                }

                /** Represents a DriveDestination. */
                class DriveDestination implements IDriveDestination {

                    /**
                     * Constructs a new DriveDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IDriveDestination);

                    /** DriveDestination file. */
                    public file: string;

                    /** DriveDestination exportUri. */
                    public exportUri: string;

                    /**
                     * Creates a new DriveDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DriveDestination instance
                     */
                    public static create(properties?: google.apps.meet.v2.IDriveDestination): google.apps.meet.v2.DriveDestination;

                    /**
                     * Encodes the specified DriveDestination message. Does not implicitly {@link google.apps.meet.v2.DriveDestination.verify|verify} messages.
                     * @param message DriveDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IDriveDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DriveDestination message, length delimited. Does not implicitly {@link google.apps.meet.v2.DriveDestination.verify|verify} messages.
                     * @param message DriveDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IDriveDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DriveDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DriveDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.DriveDestination;

                    /**
                     * Decodes a DriveDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DriveDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.DriveDestination;

                    /**
                     * Verifies a DriveDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DriveDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DriveDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.DriveDestination;

                    /**
                     * Creates a plain object from a DriveDestination message. Also converts values to other types if specified.
                     * @param message DriveDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.DriveDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DriveDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DriveDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Transcript. */
                interface ITranscript {

                    /** Transcript docsDestination */
                    docsDestination?: (google.apps.meet.v2.IDocsDestination|null);

                    /** Transcript name */
                    name?: (string|null);

                    /** Transcript state */
                    state?: (google.apps.meet.v2.Transcript.State|keyof typeof google.apps.meet.v2.Transcript.State|null);

                    /** Transcript startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Transcript endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Transcript. */
                class Transcript implements ITranscript {

                    /**
                     * Constructs a new Transcript.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.ITranscript);

                    /** Transcript docsDestination. */
                    public docsDestination?: (google.apps.meet.v2.IDocsDestination|null);

                    /** Transcript name. */
                    public name: string;

                    /** Transcript state. */
                    public state: (google.apps.meet.v2.Transcript.State|keyof typeof google.apps.meet.v2.Transcript.State);

                    /** Transcript startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Transcript endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Transcript destination. */
                    public destination?: "docsDestination";

                    /**
                     * Creates a new Transcript instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transcript instance
                     */
                    public static create(properties?: google.apps.meet.v2.ITranscript): google.apps.meet.v2.Transcript;

                    /**
                     * Encodes the specified Transcript message. Does not implicitly {@link google.apps.meet.v2.Transcript.verify|verify} messages.
                     * @param message Transcript message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.ITranscript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Transcript message, length delimited. Does not implicitly {@link google.apps.meet.v2.Transcript.verify|verify} messages.
                     * @param message Transcript message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.ITranscript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transcript message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transcript
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.Transcript;

                    /**
                     * Decodes a Transcript message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Transcript
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.Transcript;

                    /**
                     * Verifies a Transcript message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Transcript message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Transcript
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.Transcript;

                    /**
                     * Creates a plain object from a Transcript message. Also converts values to other types if specified.
                     * @param message Transcript
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.Transcript, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Transcript to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Transcript
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Transcript {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTED = 1,
                        ENDED = 2,
                        FILE_GENERATED = 3
                    }
                }

                /** Properties of a DocsDestination. */
                interface IDocsDestination {

                    /** DocsDestination document */
                    document?: (string|null);

                    /** DocsDestination exportUri */
                    exportUri?: (string|null);
                }

                /** Represents a DocsDestination. */
                class DocsDestination implements IDocsDestination {

                    /**
                     * Constructs a new DocsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IDocsDestination);

                    /** DocsDestination document. */
                    public document: string;

                    /** DocsDestination exportUri. */
                    public exportUri: string;

                    /**
                     * Creates a new DocsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocsDestination instance
                     */
                    public static create(properties?: google.apps.meet.v2.IDocsDestination): google.apps.meet.v2.DocsDestination;

                    /**
                     * Encodes the specified DocsDestination message. Does not implicitly {@link google.apps.meet.v2.DocsDestination.verify|verify} messages.
                     * @param message DocsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IDocsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocsDestination message, length delimited. Does not implicitly {@link google.apps.meet.v2.DocsDestination.verify|verify} messages.
                     * @param message DocsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IDocsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.DocsDestination;

                    /**
                     * Decodes a DocsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.DocsDestination;

                    /**
                     * Verifies a DocsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.DocsDestination;

                    /**
                     * Creates a plain object from a DocsDestination message. Also converts values to other types if specified.
                     * @param message DocsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.DocsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DocsDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TranscriptEntry. */
                interface ITranscriptEntry {

                    /** TranscriptEntry name */
                    name?: (string|null);

                    /** TranscriptEntry participant */
                    participant?: (string|null);

                    /** TranscriptEntry text */
                    text?: (string|null);

                    /** TranscriptEntry languageCode */
                    languageCode?: (string|null);

                    /** TranscriptEntry startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TranscriptEntry endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TranscriptEntry. */
                class TranscriptEntry implements ITranscriptEntry {

                    /**
                     * Constructs a new TranscriptEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.ITranscriptEntry);

                    /** TranscriptEntry name. */
                    public name: string;

                    /** TranscriptEntry participant. */
                    public participant: string;

                    /** TranscriptEntry text. */
                    public text: string;

                    /** TranscriptEntry languageCode. */
                    public languageCode: string;

                    /** TranscriptEntry startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TranscriptEntry endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TranscriptEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranscriptEntry instance
                     */
                    public static create(properties?: google.apps.meet.v2.ITranscriptEntry): google.apps.meet.v2.TranscriptEntry;

                    /**
                     * Encodes the specified TranscriptEntry message. Does not implicitly {@link google.apps.meet.v2.TranscriptEntry.verify|verify} messages.
                     * @param message TranscriptEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.ITranscriptEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranscriptEntry message, length delimited. Does not implicitly {@link google.apps.meet.v2.TranscriptEntry.verify|verify} messages.
                     * @param message TranscriptEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.ITranscriptEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranscriptEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranscriptEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.TranscriptEntry;

                    /**
                     * Decodes a TranscriptEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranscriptEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.TranscriptEntry;

                    /**
                     * Verifies a TranscriptEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranscriptEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranscriptEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.TranscriptEntry;

                    /**
                     * Creates a plain object from a TranscriptEntry message. Also converts values to other types if specified.
                     * @param message TranscriptEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.TranscriptEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranscriptEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranscriptEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a SpacesService */
                class SpacesService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SpacesService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SpacesService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SpacesService;

                    /**
                     * Calls CreateSpace.
                     * @param request CreateSpaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Space
                     */
                    public createSpace(request: google.apps.meet.v2.ICreateSpaceRequest, callback: google.apps.meet.v2.SpacesService.CreateSpaceCallback): void;

                    /**
                     * Calls CreateSpace.
                     * @param request CreateSpaceRequest message or plain object
                     * @returns Promise
                     */
                    public createSpace(request: google.apps.meet.v2.ICreateSpaceRequest): Promise<google.apps.meet.v2.Space>;

                    /**
                     * Calls GetSpace.
                     * @param request GetSpaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Space
                     */
                    public getSpace(request: google.apps.meet.v2.IGetSpaceRequest, callback: google.apps.meet.v2.SpacesService.GetSpaceCallback): void;

                    /**
                     * Calls GetSpace.
                     * @param request GetSpaceRequest message or plain object
                     * @returns Promise
                     */
                    public getSpace(request: google.apps.meet.v2.IGetSpaceRequest): Promise<google.apps.meet.v2.Space>;

                    /**
                     * Calls UpdateSpace.
                     * @param request UpdateSpaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Space
                     */
                    public updateSpace(request: google.apps.meet.v2.IUpdateSpaceRequest, callback: google.apps.meet.v2.SpacesService.UpdateSpaceCallback): void;

                    /**
                     * Calls UpdateSpace.
                     * @param request UpdateSpaceRequest message or plain object
                     * @returns Promise
                     */
                    public updateSpace(request: google.apps.meet.v2.IUpdateSpaceRequest): Promise<google.apps.meet.v2.Space>;

                    /**
                     * Calls EndActiveConference.
                     * @param request EndActiveConferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public endActiveConference(request: google.apps.meet.v2.IEndActiveConferenceRequest, callback: google.apps.meet.v2.SpacesService.EndActiveConferenceCallback): void;

                    /**
                     * Calls EndActiveConference.
                     * @param request EndActiveConferenceRequest message or plain object
                     * @returns Promise
                     */
                    public endActiveConference(request: google.apps.meet.v2.IEndActiveConferenceRequest): Promise<google.protobuf.Empty>;
                }

                namespace SpacesService {

                    /**
                     * Callback as used by {@link google.apps.meet.v2.SpacesService|createSpace}.
                     * @param error Error, if any
                     * @param [response] Space
                     */
                    type CreateSpaceCallback = (error: (Error|null), response?: google.apps.meet.v2.Space) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.SpacesService|getSpace}.
                     * @param error Error, if any
                     * @param [response] Space
                     */
                    type GetSpaceCallback = (error: (Error|null), response?: google.apps.meet.v2.Space) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.SpacesService|updateSpace}.
                     * @param error Error, if any
                     * @param [response] Space
                     */
                    type UpdateSpaceCallback = (error: (Error|null), response?: google.apps.meet.v2.Space) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.SpacesService|endActiveConference}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type EndActiveConferenceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Represents a ConferenceRecordsService */
                class ConferenceRecordsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ConferenceRecordsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ConferenceRecordsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ConferenceRecordsService;

                    /**
                     * Calls GetConferenceRecord.
                     * @param request GetConferenceRecordRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConferenceRecord
                     */
                    public getConferenceRecord(request: google.apps.meet.v2.IGetConferenceRecordRequest, callback: google.apps.meet.v2.ConferenceRecordsService.GetConferenceRecordCallback): void;

                    /**
                     * Calls GetConferenceRecord.
                     * @param request GetConferenceRecordRequest message or plain object
                     * @returns Promise
                     */
                    public getConferenceRecord(request: google.apps.meet.v2.IGetConferenceRecordRequest): Promise<google.apps.meet.v2.ConferenceRecord>;

                    /**
                     * Calls ListConferenceRecords.
                     * @param request ListConferenceRecordsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConferenceRecordsResponse
                     */
                    public listConferenceRecords(request: google.apps.meet.v2.IListConferenceRecordsRequest, callback: google.apps.meet.v2.ConferenceRecordsService.ListConferenceRecordsCallback): void;

                    /**
                     * Calls ListConferenceRecords.
                     * @param request ListConferenceRecordsRequest message or plain object
                     * @returns Promise
                     */
                    public listConferenceRecords(request: google.apps.meet.v2.IListConferenceRecordsRequest): Promise<google.apps.meet.v2.ListConferenceRecordsResponse>;

                    /**
                     * Calls GetParticipant.
                     * @param request GetParticipantRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Participant
                     */
                    public getParticipant(request: google.apps.meet.v2.IGetParticipantRequest, callback: google.apps.meet.v2.ConferenceRecordsService.GetParticipantCallback): void;

                    /**
                     * Calls GetParticipant.
                     * @param request GetParticipantRequest message or plain object
                     * @returns Promise
                     */
                    public getParticipant(request: google.apps.meet.v2.IGetParticipantRequest): Promise<google.apps.meet.v2.Participant>;

                    /**
                     * Calls ListParticipants.
                     * @param request ListParticipantsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListParticipantsResponse
                     */
                    public listParticipants(request: google.apps.meet.v2.IListParticipantsRequest, callback: google.apps.meet.v2.ConferenceRecordsService.ListParticipantsCallback): void;

                    /**
                     * Calls ListParticipants.
                     * @param request ListParticipantsRequest message or plain object
                     * @returns Promise
                     */
                    public listParticipants(request: google.apps.meet.v2.IListParticipantsRequest): Promise<google.apps.meet.v2.ListParticipantsResponse>;

                    /**
                     * Calls GetParticipantSession.
                     * @param request GetParticipantSessionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ParticipantSession
                     */
                    public getParticipantSession(request: google.apps.meet.v2.IGetParticipantSessionRequest, callback: google.apps.meet.v2.ConferenceRecordsService.GetParticipantSessionCallback): void;

                    /**
                     * Calls GetParticipantSession.
                     * @param request GetParticipantSessionRequest message or plain object
                     * @returns Promise
                     */
                    public getParticipantSession(request: google.apps.meet.v2.IGetParticipantSessionRequest): Promise<google.apps.meet.v2.ParticipantSession>;

                    /**
                     * Calls ListParticipantSessions.
                     * @param request ListParticipantSessionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListParticipantSessionsResponse
                     */
                    public listParticipantSessions(request: google.apps.meet.v2.IListParticipantSessionsRequest, callback: google.apps.meet.v2.ConferenceRecordsService.ListParticipantSessionsCallback): void;

                    /**
                     * Calls ListParticipantSessions.
                     * @param request ListParticipantSessionsRequest message or plain object
                     * @returns Promise
                     */
                    public listParticipantSessions(request: google.apps.meet.v2.IListParticipantSessionsRequest): Promise<google.apps.meet.v2.ListParticipantSessionsResponse>;

                    /**
                     * Calls GetRecording.
                     * @param request GetRecordingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recording
                     */
                    public getRecording(request: google.apps.meet.v2.IGetRecordingRequest, callback: google.apps.meet.v2.ConferenceRecordsService.GetRecordingCallback): void;

                    /**
                     * Calls GetRecording.
                     * @param request GetRecordingRequest message or plain object
                     * @returns Promise
                     */
                    public getRecording(request: google.apps.meet.v2.IGetRecordingRequest): Promise<google.apps.meet.v2.Recording>;

                    /**
                     * Calls ListRecordings.
                     * @param request ListRecordingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecordingsResponse
                     */
                    public listRecordings(request: google.apps.meet.v2.IListRecordingsRequest, callback: google.apps.meet.v2.ConferenceRecordsService.ListRecordingsCallback): void;

                    /**
                     * Calls ListRecordings.
                     * @param request ListRecordingsRequest message or plain object
                     * @returns Promise
                     */
                    public listRecordings(request: google.apps.meet.v2.IListRecordingsRequest): Promise<google.apps.meet.v2.ListRecordingsResponse>;

                    /**
                     * Calls GetTranscript.
                     * @param request GetTranscriptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Transcript
                     */
                    public getTranscript(request: google.apps.meet.v2.IGetTranscriptRequest, callback: google.apps.meet.v2.ConferenceRecordsService.GetTranscriptCallback): void;

                    /**
                     * Calls GetTranscript.
                     * @param request GetTranscriptRequest message or plain object
                     * @returns Promise
                     */
                    public getTranscript(request: google.apps.meet.v2.IGetTranscriptRequest): Promise<google.apps.meet.v2.Transcript>;

                    /**
                     * Calls ListTranscripts.
                     * @param request ListTranscriptsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTranscriptsResponse
                     */
                    public listTranscripts(request: google.apps.meet.v2.IListTranscriptsRequest, callback: google.apps.meet.v2.ConferenceRecordsService.ListTranscriptsCallback): void;

                    /**
                     * Calls ListTranscripts.
                     * @param request ListTranscriptsRequest message or plain object
                     * @returns Promise
                     */
                    public listTranscripts(request: google.apps.meet.v2.IListTranscriptsRequest): Promise<google.apps.meet.v2.ListTranscriptsResponse>;

                    /**
                     * Calls GetTranscriptEntry.
                     * @param request GetTranscriptEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TranscriptEntry
                     */
                    public getTranscriptEntry(request: google.apps.meet.v2.IGetTranscriptEntryRequest, callback: google.apps.meet.v2.ConferenceRecordsService.GetTranscriptEntryCallback): void;

                    /**
                     * Calls GetTranscriptEntry.
                     * @param request GetTranscriptEntryRequest message or plain object
                     * @returns Promise
                     */
                    public getTranscriptEntry(request: google.apps.meet.v2.IGetTranscriptEntryRequest): Promise<google.apps.meet.v2.TranscriptEntry>;

                    /**
                     * Calls ListTranscriptEntries.
                     * @param request ListTranscriptEntriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTranscriptEntriesResponse
                     */
                    public listTranscriptEntries(request: google.apps.meet.v2.IListTranscriptEntriesRequest, callback: google.apps.meet.v2.ConferenceRecordsService.ListTranscriptEntriesCallback): void;

                    /**
                     * Calls ListTranscriptEntries.
                     * @param request ListTranscriptEntriesRequest message or plain object
                     * @returns Promise
                     */
                    public listTranscriptEntries(request: google.apps.meet.v2.IListTranscriptEntriesRequest): Promise<google.apps.meet.v2.ListTranscriptEntriesResponse>;
                }

                namespace ConferenceRecordsService {

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|getConferenceRecord}.
                     * @param error Error, if any
                     * @param [response] ConferenceRecord
                     */
                    type GetConferenceRecordCallback = (error: (Error|null), response?: google.apps.meet.v2.ConferenceRecord) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|listConferenceRecords}.
                     * @param error Error, if any
                     * @param [response] ListConferenceRecordsResponse
                     */
                    type ListConferenceRecordsCallback = (error: (Error|null), response?: google.apps.meet.v2.ListConferenceRecordsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|getParticipant}.
                     * @param error Error, if any
                     * @param [response] Participant
                     */
                    type GetParticipantCallback = (error: (Error|null), response?: google.apps.meet.v2.Participant) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|listParticipants}.
                     * @param error Error, if any
                     * @param [response] ListParticipantsResponse
                     */
                    type ListParticipantsCallback = (error: (Error|null), response?: google.apps.meet.v2.ListParticipantsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|getParticipantSession}.
                     * @param error Error, if any
                     * @param [response] ParticipantSession
                     */
                    type GetParticipantSessionCallback = (error: (Error|null), response?: google.apps.meet.v2.ParticipantSession) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|listParticipantSessions}.
                     * @param error Error, if any
                     * @param [response] ListParticipantSessionsResponse
                     */
                    type ListParticipantSessionsCallback = (error: (Error|null), response?: google.apps.meet.v2.ListParticipantSessionsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|getRecording}.
                     * @param error Error, if any
                     * @param [response] Recording
                     */
                    type GetRecordingCallback = (error: (Error|null), response?: google.apps.meet.v2.Recording) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|listRecordings}.
                     * @param error Error, if any
                     * @param [response] ListRecordingsResponse
                     */
                    type ListRecordingsCallback = (error: (Error|null), response?: google.apps.meet.v2.ListRecordingsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|getTranscript}.
                     * @param error Error, if any
                     * @param [response] Transcript
                     */
                    type GetTranscriptCallback = (error: (Error|null), response?: google.apps.meet.v2.Transcript) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|listTranscripts}.
                     * @param error Error, if any
                     * @param [response] ListTranscriptsResponse
                     */
                    type ListTranscriptsCallback = (error: (Error|null), response?: google.apps.meet.v2.ListTranscriptsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|getTranscriptEntry}.
                     * @param error Error, if any
                     * @param [response] TranscriptEntry
                     */
                    type GetTranscriptEntryCallback = (error: (Error|null), response?: google.apps.meet.v2.TranscriptEntry) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2.ConferenceRecordsService|listTranscriptEntries}.
                     * @param error Error, if any
                     * @param [response] ListTranscriptEntriesResponse
                     */
                    type ListTranscriptEntriesCallback = (error: (Error|null), response?: google.apps.meet.v2.ListTranscriptEntriesResponse) => void;
                }

                /** Properties of a CreateSpaceRequest. */
                interface ICreateSpaceRequest {

                    /** CreateSpaceRequest space */
                    space?: (google.apps.meet.v2.ISpace|null);
                }

                /** Represents a CreateSpaceRequest. */
                class CreateSpaceRequest implements ICreateSpaceRequest {

                    /**
                     * Constructs a new CreateSpaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.ICreateSpaceRequest);

                    /** CreateSpaceRequest space. */
                    public space?: (google.apps.meet.v2.ISpace|null);

                    /**
                     * Creates a new CreateSpaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSpaceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.ICreateSpaceRequest): google.apps.meet.v2.CreateSpaceRequest;

                    /**
                     * Encodes the specified CreateSpaceRequest message. Does not implicitly {@link google.apps.meet.v2.CreateSpaceRequest.verify|verify} messages.
                     * @param message CreateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.ICreateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSpaceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.CreateSpaceRequest.verify|verify} messages.
                     * @param message CreateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.ICreateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSpaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.CreateSpaceRequest;

                    /**
                     * Decodes a CreateSpaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.CreateSpaceRequest;

                    /**
                     * Verifies a CreateSpaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSpaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSpaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.CreateSpaceRequest;

                    /**
                     * Creates a plain object from a CreateSpaceRequest message. Also converts values to other types if specified.
                     * @param message CreateSpaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.CreateSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSpaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSpaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSpaceRequest. */
                interface IGetSpaceRequest {

                    /** GetSpaceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSpaceRequest. */
                class GetSpaceRequest implements IGetSpaceRequest {

                    /**
                     * Constructs a new GetSpaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetSpaceRequest);

                    /** GetSpaceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSpaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSpaceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetSpaceRequest): google.apps.meet.v2.GetSpaceRequest;

                    /**
                     * Encodes the specified GetSpaceRequest message. Does not implicitly {@link google.apps.meet.v2.GetSpaceRequest.verify|verify} messages.
                     * @param message GetSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSpaceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetSpaceRequest.verify|verify} messages.
                     * @param message GetSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSpaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetSpaceRequest;

                    /**
                     * Decodes a GetSpaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetSpaceRequest;

                    /**
                     * Verifies a GetSpaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSpaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSpaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetSpaceRequest;

                    /**
                     * Creates a plain object from a GetSpaceRequest message. Also converts values to other types if specified.
                     * @param message GetSpaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSpaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSpaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSpaceRequest. */
                interface IUpdateSpaceRequest {

                    /** UpdateSpaceRequest space */
                    space?: (google.apps.meet.v2.ISpace|null);

                    /** UpdateSpaceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSpaceRequest. */
                class UpdateSpaceRequest implements IUpdateSpaceRequest {

                    /**
                     * Constructs a new UpdateSpaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IUpdateSpaceRequest);

                    /** UpdateSpaceRequest space. */
                    public space?: (google.apps.meet.v2.ISpace|null);

                    /** UpdateSpaceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSpaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSpaceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IUpdateSpaceRequest): google.apps.meet.v2.UpdateSpaceRequest;

                    /**
                     * Encodes the specified UpdateSpaceRequest message. Does not implicitly {@link google.apps.meet.v2.UpdateSpaceRequest.verify|verify} messages.
                     * @param message UpdateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IUpdateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSpaceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.UpdateSpaceRequest.verify|verify} messages.
                     * @param message UpdateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IUpdateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSpaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.UpdateSpaceRequest;

                    /**
                     * Decodes an UpdateSpaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.UpdateSpaceRequest;

                    /**
                     * Verifies an UpdateSpaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSpaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSpaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.UpdateSpaceRequest;

                    /**
                     * Creates a plain object from an UpdateSpaceRequest message. Also converts values to other types if specified.
                     * @param message UpdateSpaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.UpdateSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSpaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSpaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EndActiveConferenceRequest. */
                interface IEndActiveConferenceRequest {

                    /** EndActiveConferenceRequest name */
                    name?: (string|null);
                }

                /** Represents an EndActiveConferenceRequest. */
                class EndActiveConferenceRequest implements IEndActiveConferenceRequest {

                    /**
                     * Constructs a new EndActiveConferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IEndActiveConferenceRequest);

                    /** EndActiveConferenceRequest name. */
                    public name: string;

                    /**
                     * Creates a new EndActiveConferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndActiveConferenceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IEndActiveConferenceRequest): google.apps.meet.v2.EndActiveConferenceRequest;

                    /**
                     * Encodes the specified EndActiveConferenceRequest message. Does not implicitly {@link google.apps.meet.v2.EndActiveConferenceRequest.verify|verify} messages.
                     * @param message EndActiveConferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IEndActiveConferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndActiveConferenceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.EndActiveConferenceRequest.verify|verify} messages.
                     * @param message EndActiveConferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IEndActiveConferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndActiveConferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndActiveConferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.EndActiveConferenceRequest;

                    /**
                     * Decodes an EndActiveConferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndActiveConferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.EndActiveConferenceRequest;

                    /**
                     * Verifies an EndActiveConferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndActiveConferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndActiveConferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.EndActiveConferenceRequest;

                    /**
                     * Creates a plain object from an EndActiveConferenceRequest message. Also converts values to other types if specified.
                     * @param message EndActiveConferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.EndActiveConferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndActiveConferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EndActiveConferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConferenceRecordRequest. */
                interface IGetConferenceRecordRequest {

                    /** GetConferenceRecordRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConferenceRecordRequest. */
                class GetConferenceRecordRequest implements IGetConferenceRecordRequest {

                    /**
                     * Constructs a new GetConferenceRecordRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetConferenceRecordRequest);

                    /** GetConferenceRecordRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConferenceRecordRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConferenceRecordRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetConferenceRecordRequest): google.apps.meet.v2.GetConferenceRecordRequest;

                    /**
                     * Encodes the specified GetConferenceRecordRequest message. Does not implicitly {@link google.apps.meet.v2.GetConferenceRecordRequest.verify|verify} messages.
                     * @param message GetConferenceRecordRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetConferenceRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConferenceRecordRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetConferenceRecordRequest.verify|verify} messages.
                     * @param message GetConferenceRecordRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetConferenceRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConferenceRecordRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConferenceRecordRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetConferenceRecordRequest;

                    /**
                     * Decodes a GetConferenceRecordRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConferenceRecordRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetConferenceRecordRequest;

                    /**
                     * Verifies a GetConferenceRecordRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConferenceRecordRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConferenceRecordRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetConferenceRecordRequest;

                    /**
                     * Creates a plain object from a GetConferenceRecordRequest message. Also converts values to other types if specified.
                     * @param message GetConferenceRecordRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetConferenceRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConferenceRecordRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConferenceRecordRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConferenceRecordsRequest. */
                interface IListConferenceRecordsRequest {

                    /** ListConferenceRecordsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConferenceRecordsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConferenceRecordsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListConferenceRecordsRequest. */
                class ListConferenceRecordsRequest implements IListConferenceRecordsRequest {

                    /**
                     * Constructs a new ListConferenceRecordsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListConferenceRecordsRequest);

                    /** ListConferenceRecordsRequest pageSize. */
                    public pageSize: number;

                    /** ListConferenceRecordsRequest pageToken. */
                    public pageToken: string;

                    /** ListConferenceRecordsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListConferenceRecordsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConferenceRecordsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListConferenceRecordsRequest): google.apps.meet.v2.ListConferenceRecordsRequest;

                    /**
                     * Encodes the specified ListConferenceRecordsRequest message. Does not implicitly {@link google.apps.meet.v2.ListConferenceRecordsRequest.verify|verify} messages.
                     * @param message ListConferenceRecordsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListConferenceRecordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConferenceRecordsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListConferenceRecordsRequest.verify|verify} messages.
                     * @param message ListConferenceRecordsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListConferenceRecordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConferenceRecordsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConferenceRecordsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListConferenceRecordsRequest;

                    /**
                     * Decodes a ListConferenceRecordsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConferenceRecordsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListConferenceRecordsRequest;

                    /**
                     * Verifies a ListConferenceRecordsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConferenceRecordsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConferenceRecordsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListConferenceRecordsRequest;

                    /**
                     * Creates a plain object from a ListConferenceRecordsRequest message. Also converts values to other types if specified.
                     * @param message ListConferenceRecordsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListConferenceRecordsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConferenceRecordsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConferenceRecordsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConferenceRecordsResponse. */
                interface IListConferenceRecordsResponse {

                    /** ListConferenceRecordsResponse conferenceRecords */
                    conferenceRecords?: (google.apps.meet.v2.IConferenceRecord[]|null);

                    /** ListConferenceRecordsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConferenceRecordsResponse. */
                class ListConferenceRecordsResponse implements IListConferenceRecordsResponse {

                    /**
                     * Constructs a new ListConferenceRecordsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListConferenceRecordsResponse);

                    /** ListConferenceRecordsResponse conferenceRecords. */
                    public conferenceRecords: google.apps.meet.v2.IConferenceRecord[];

                    /** ListConferenceRecordsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConferenceRecordsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConferenceRecordsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListConferenceRecordsResponse): google.apps.meet.v2.ListConferenceRecordsResponse;

                    /**
                     * Encodes the specified ListConferenceRecordsResponse message. Does not implicitly {@link google.apps.meet.v2.ListConferenceRecordsResponse.verify|verify} messages.
                     * @param message ListConferenceRecordsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListConferenceRecordsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConferenceRecordsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListConferenceRecordsResponse.verify|verify} messages.
                     * @param message ListConferenceRecordsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListConferenceRecordsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConferenceRecordsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConferenceRecordsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListConferenceRecordsResponse;

                    /**
                     * Decodes a ListConferenceRecordsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConferenceRecordsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListConferenceRecordsResponse;

                    /**
                     * Verifies a ListConferenceRecordsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConferenceRecordsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConferenceRecordsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListConferenceRecordsResponse;

                    /**
                     * Creates a plain object from a ListConferenceRecordsResponse message. Also converts values to other types if specified.
                     * @param message ListConferenceRecordsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListConferenceRecordsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConferenceRecordsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConferenceRecordsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetParticipantRequest. */
                interface IGetParticipantRequest {

                    /** GetParticipantRequest name */
                    name?: (string|null);
                }

                /** Represents a GetParticipantRequest. */
                class GetParticipantRequest implements IGetParticipantRequest {

                    /**
                     * Constructs a new GetParticipantRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetParticipantRequest);

                    /** GetParticipantRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetParticipantRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetParticipantRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetParticipantRequest): google.apps.meet.v2.GetParticipantRequest;

                    /**
                     * Encodes the specified GetParticipantRequest message. Does not implicitly {@link google.apps.meet.v2.GetParticipantRequest.verify|verify} messages.
                     * @param message GetParticipantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetParticipantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetParticipantRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetParticipantRequest.verify|verify} messages.
                     * @param message GetParticipantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetParticipantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetParticipantRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetParticipantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetParticipantRequest;

                    /**
                     * Decodes a GetParticipantRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetParticipantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetParticipantRequest;

                    /**
                     * Verifies a GetParticipantRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetParticipantRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetParticipantRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetParticipantRequest;

                    /**
                     * Creates a plain object from a GetParticipantRequest message. Also converts values to other types if specified.
                     * @param message GetParticipantRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetParticipantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetParticipantRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetParticipantRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantsRequest. */
                interface IListParticipantsRequest {

                    /** ListParticipantsRequest parent */
                    parent?: (string|null);

                    /** ListParticipantsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListParticipantsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListParticipantsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListParticipantsRequest. */
                class ListParticipantsRequest implements IListParticipantsRequest {

                    /**
                     * Constructs a new ListParticipantsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListParticipantsRequest);

                    /** ListParticipantsRequest parent. */
                    public parent: string;

                    /** ListParticipantsRequest pageSize. */
                    public pageSize: number;

                    /** ListParticipantsRequest pageToken. */
                    public pageToken: string;

                    /** ListParticipantsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListParticipantsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListParticipantsRequest): google.apps.meet.v2.ListParticipantsRequest;

                    /**
                     * Encodes the specified ListParticipantsRequest message. Does not implicitly {@link google.apps.meet.v2.ListParticipantsRequest.verify|verify} messages.
                     * @param message ListParticipantsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListParticipantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListParticipantsRequest.verify|verify} messages.
                     * @param message ListParticipantsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListParticipantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListParticipantsRequest;

                    /**
                     * Decodes a ListParticipantsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListParticipantsRequest;

                    /**
                     * Verifies a ListParticipantsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListParticipantsRequest;

                    /**
                     * Creates a plain object from a ListParticipantsRequest message. Also converts values to other types if specified.
                     * @param message ListParticipantsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListParticipantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantsResponse. */
                interface IListParticipantsResponse {

                    /** ListParticipantsResponse participants */
                    participants?: (google.apps.meet.v2.IParticipant[]|null);

                    /** ListParticipantsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListParticipantsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListParticipantsResponse. */
                class ListParticipantsResponse implements IListParticipantsResponse {

                    /**
                     * Constructs a new ListParticipantsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListParticipantsResponse);

                    /** ListParticipantsResponse participants. */
                    public participants: google.apps.meet.v2.IParticipant[];

                    /** ListParticipantsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListParticipantsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListParticipantsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListParticipantsResponse): google.apps.meet.v2.ListParticipantsResponse;

                    /**
                     * Encodes the specified ListParticipantsResponse message. Does not implicitly {@link google.apps.meet.v2.ListParticipantsResponse.verify|verify} messages.
                     * @param message ListParticipantsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListParticipantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListParticipantsResponse.verify|verify} messages.
                     * @param message ListParticipantsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListParticipantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListParticipantsResponse;

                    /**
                     * Decodes a ListParticipantsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListParticipantsResponse;

                    /**
                     * Verifies a ListParticipantsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListParticipantsResponse;

                    /**
                     * Creates a plain object from a ListParticipantsResponse message. Also converts values to other types if specified.
                     * @param message ListParticipantsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListParticipantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetParticipantSessionRequest. */
                interface IGetParticipantSessionRequest {

                    /** GetParticipantSessionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetParticipantSessionRequest. */
                class GetParticipantSessionRequest implements IGetParticipantSessionRequest {

                    /**
                     * Constructs a new GetParticipantSessionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetParticipantSessionRequest);

                    /** GetParticipantSessionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetParticipantSessionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetParticipantSessionRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetParticipantSessionRequest): google.apps.meet.v2.GetParticipantSessionRequest;

                    /**
                     * Encodes the specified GetParticipantSessionRequest message. Does not implicitly {@link google.apps.meet.v2.GetParticipantSessionRequest.verify|verify} messages.
                     * @param message GetParticipantSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetParticipantSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetParticipantSessionRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetParticipantSessionRequest.verify|verify} messages.
                     * @param message GetParticipantSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetParticipantSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetParticipantSessionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetParticipantSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetParticipantSessionRequest;

                    /**
                     * Decodes a GetParticipantSessionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetParticipantSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetParticipantSessionRequest;

                    /**
                     * Verifies a GetParticipantSessionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetParticipantSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetParticipantSessionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetParticipantSessionRequest;

                    /**
                     * Creates a plain object from a GetParticipantSessionRequest message. Also converts values to other types if specified.
                     * @param message GetParticipantSessionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetParticipantSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetParticipantSessionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetParticipantSessionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantSessionsRequest. */
                interface IListParticipantSessionsRequest {

                    /** ListParticipantSessionsRequest parent */
                    parent?: (string|null);

                    /** ListParticipantSessionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListParticipantSessionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListParticipantSessionsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListParticipantSessionsRequest. */
                class ListParticipantSessionsRequest implements IListParticipantSessionsRequest {

                    /**
                     * Constructs a new ListParticipantSessionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListParticipantSessionsRequest);

                    /** ListParticipantSessionsRequest parent. */
                    public parent: string;

                    /** ListParticipantSessionsRequest pageSize. */
                    public pageSize: number;

                    /** ListParticipantSessionsRequest pageToken. */
                    public pageToken: string;

                    /** ListParticipantSessionsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListParticipantSessionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantSessionsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListParticipantSessionsRequest): google.apps.meet.v2.ListParticipantSessionsRequest;

                    /**
                     * Encodes the specified ListParticipantSessionsRequest message. Does not implicitly {@link google.apps.meet.v2.ListParticipantSessionsRequest.verify|verify} messages.
                     * @param message ListParticipantSessionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListParticipantSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantSessionsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListParticipantSessionsRequest.verify|verify} messages.
                     * @param message ListParticipantSessionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListParticipantSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantSessionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantSessionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListParticipantSessionsRequest;

                    /**
                     * Decodes a ListParticipantSessionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantSessionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListParticipantSessionsRequest;

                    /**
                     * Verifies a ListParticipantSessionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantSessionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantSessionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListParticipantSessionsRequest;

                    /**
                     * Creates a plain object from a ListParticipantSessionsRequest message. Also converts values to other types if specified.
                     * @param message ListParticipantSessionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListParticipantSessionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantSessionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantSessionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantSessionsResponse. */
                interface IListParticipantSessionsResponse {

                    /** ListParticipantSessionsResponse participantSessions */
                    participantSessions?: (google.apps.meet.v2.IParticipantSession[]|null);

                    /** ListParticipantSessionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListParticipantSessionsResponse. */
                class ListParticipantSessionsResponse implements IListParticipantSessionsResponse {

                    /**
                     * Constructs a new ListParticipantSessionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListParticipantSessionsResponse);

                    /** ListParticipantSessionsResponse participantSessions. */
                    public participantSessions: google.apps.meet.v2.IParticipantSession[];

                    /** ListParticipantSessionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListParticipantSessionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantSessionsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListParticipantSessionsResponse): google.apps.meet.v2.ListParticipantSessionsResponse;

                    /**
                     * Encodes the specified ListParticipantSessionsResponse message. Does not implicitly {@link google.apps.meet.v2.ListParticipantSessionsResponse.verify|verify} messages.
                     * @param message ListParticipantSessionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListParticipantSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantSessionsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListParticipantSessionsResponse.verify|verify} messages.
                     * @param message ListParticipantSessionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListParticipantSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantSessionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantSessionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListParticipantSessionsResponse;

                    /**
                     * Decodes a ListParticipantSessionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantSessionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListParticipantSessionsResponse;

                    /**
                     * Verifies a ListParticipantSessionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantSessionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantSessionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListParticipantSessionsResponse;

                    /**
                     * Creates a plain object from a ListParticipantSessionsResponse message. Also converts values to other types if specified.
                     * @param message ListParticipantSessionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListParticipantSessionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantSessionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantSessionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecordingRequest. */
                interface IGetRecordingRequest {

                    /** GetRecordingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecordingRequest. */
                class GetRecordingRequest implements IGetRecordingRequest {

                    /**
                     * Constructs a new GetRecordingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetRecordingRequest);

                    /** GetRecordingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecordingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecordingRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetRecordingRequest): google.apps.meet.v2.GetRecordingRequest;

                    /**
                     * Encodes the specified GetRecordingRequest message. Does not implicitly {@link google.apps.meet.v2.GetRecordingRequest.verify|verify} messages.
                     * @param message GetRecordingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecordingRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetRecordingRequest.verify|verify} messages.
                     * @param message GetRecordingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecordingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecordingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetRecordingRequest;

                    /**
                     * Decodes a GetRecordingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecordingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetRecordingRequest;

                    /**
                     * Verifies a GetRecordingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecordingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecordingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetRecordingRequest;

                    /**
                     * Creates a plain object from a GetRecordingRequest message. Also converts values to other types if specified.
                     * @param message GetRecordingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetRecordingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecordingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecordingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecordingsRequest. */
                interface IListRecordingsRequest {

                    /** ListRecordingsRequest parent */
                    parent?: (string|null);

                    /** ListRecordingsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecordingsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRecordingsRequest. */
                class ListRecordingsRequest implements IListRecordingsRequest {

                    /**
                     * Constructs a new ListRecordingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListRecordingsRequest);

                    /** ListRecordingsRequest parent. */
                    public parent: string;

                    /** ListRecordingsRequest pageSize. */
                    public pageSize: number;

                    /** ListRecordingsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRecordingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecordingsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListRecordingsRequest): google.apps.meet.v2.ListRecordingsRequest;

                    /**
                     * Encodes the specified ListRecordingsRequest message. Does not implicitly {@link google.apps.meet.v2.ListRecordingsRequest.verify|verify} messages.
                     * @param message ListRecordingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListRecordingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecordingsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListRecordingsRequest.verify|verify} messages.
                     * @param message ListRecordingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListRecordingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecordingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecordingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListRecordingsRequest;

                    /**
                     * Decodes a ListRecordingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecordingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListRecordingsRequest;

                    /**
                     * Verifies a ListRecordingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecordingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecordingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListRecordingsRequest;

                    /**
                     * Creates a plain object from a ListRecordingsRequest message. Also converts values to other types if specified.
                     * @param message ListRecordingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListRecordingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecordingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecordingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecordingsResponse. */
                interface IListRecordingsResponse {

                    /** ListRecordingsResponse recordings */
                    recordings?: (google.apps.meet.v2.IRecording[]|null);

                    /** ListRecordingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecordingsResponse. */
                class ListRecordingsResponse implements IListRecordingsResponse {

                    /**
                     * Constructs a new ListRecordingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListRecordingsResponse);

                    /** ListRecordingsResponse recordings. */
                    public recordings: google.apps.meet.v2.IRecording[];

                    /** ListRecordingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecordingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecordingsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListRecordingsResponse): google.apps.meet.v2.ListRecordingsResponse;

                    /**
                     * Encodes the specified ListRecordingsResponse message. Does not implicitly {@link google.apps.meet.v2.ListRecordingsResponse.verify|verify} messages.
                     * @param message ListRecordingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListRecordingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecordingsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListRecordingsResponse.verify|verify} messages.
                     * @param message ListRecordingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListRecordingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecordingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecordingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListRecordingsResponse;

                    /**
                     * Decodes a ListRecordingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecordingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListRecordingsResponse;

                    /**
                     * Verifies a ListRecordingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecordingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecordingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListRecordingsResponse;

                    /**
                     * Creates a plain object from a ListRecordingsResponse message. Also converts values to other types if specified.
                     * @param message ListRecordingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListRecordingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecordingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecordingsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTranscriptRequest. */
                interface IGetTranscriptRequest {

                    /** GetTranscriptRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTranscriptRequest. */
                class GetTranscriptRequest implements IGetTranscriptRequest {

                    /**
                     * Constructs a new GetTranscriptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetTranscriptRequest);

                    /** GetTranscriptRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTranscriptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTranscriptRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetTranscriptRequest): google.apps.meet.v2.GetTranscriptRequest;

                    /**
                     * Encodes the specified GetTranscriptRequest message. Does not implicitly {@link google.apps.meet.v2.GetTranscriptRequest.verify|verify} messages.
                     * @param message GetTranscriptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetTranscriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTranscriptRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetTranscriptRequest.verify|verify} messages.
                     * @param message GetTranscriptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetTranscriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTranscriptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTranscriptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetTranscriptRequest;

                    /**
                     * Decodes a GetTranscriptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTranscriptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetTranscriptRequest;

                    /**
                     * Verifies a GetTranscriptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTranscriptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTranscriptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetTranscriptRequest;

                    /**
                     * Creates a plain object from a GetTranscriptRequest message. Also converts values to other types if specified.
                     * @param message GetTranscriptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetTranscriptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTranscriptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTranscriptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptsRequest. */
                interface IListTranscriptsRequest {

                    /** ListTranscriptsRequest parent */
                    parent?: (string|null);

                    /** ListTranscriptsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTranscriptsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTranscriptsRequest. */
                class ListTranscriptsRequest implements IListTranscriptsRequest {

                    /**
                     * Constructs a new ListTranscriptsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListTranscriptsRequest);

                    /** ListTranscriptsRequest parent. */
                    public parent: string;

                    /** ListTranscriptsRequest pageSize. */
                    public pageSize: number;

                    /** ListTranscriptsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTranscriptsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListTranscriptsRequest): google.apps.meet.v2.ListTranscriptsRequest;

                    /**
                     * Encodes the specified ListTranscriptsRequest message. Does not implicitly {@link google.apps.meet.v2.ListTranscriptsRequest.verify|verify} messages.
                     * @param message ListTranscriptsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListTranscriptsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListTranscriptsRequest.verify|verify} messages.
                     * @param message ListTranscriptsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListTranscriptsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListTranscriptsRequest;

                    /**
                     * Decodes a ListTranscriptsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListTranscriptsRequest;

                    /**
                     * Verifies a ListTranscriptsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListTranscriptsRequest;

                    /**
                     * Creates a plain object from a ListTranscriptsRequest message. Also converts values to other types if specified.
                     * @param message ListTranscriptsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListTranscriptsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptsResponse. */
                interface IListTranscriptsResponse {

                    /** ListTranscriptsResponse transcripts */
                    transcripts?: (google.apps.meet.v2.ITranscript[]|null);

                    /** ListTranscriptsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTranscriptsResponse. */
                class ListTranscriptsResponse implements IListTranscriptsResponse {

                    /**
                     * Constructs a new ListTranscriptsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListTranscriptsResponse);

                    /** ListTranscriptsResponse transcripts. */
                    public transcripts: google.apps.meet.v2.ITranscript[];

                    /** ListTranscriptsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTranscriptsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListTranscriptsResponse): google.apps.meet.v2.ListTranscriptsResponse;

                    /**
                     * Encodes the specified ListTranscriptsResponse message. Does not implicitly {@link google.apps.meet.v2.ListTranscriptsResponse.verify|verify} messages.
                     * @param message ListTranscriptsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListTranscriptsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListTranscriptsResponse.verify|verify} messages.
                     * @param message ListTranscriptsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListTranscriptsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListTranscriptsResponse;

                    /**
                     * Decodes a ListTranscriptsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListTranscriptsResponse;

                    /**
                     * Verifies a ListTranscriptsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListTranscriptsResponse;

                    /**
                     * Creates a plain object from a ListTranscriptsResponse message. Also converts values to other types if specified.
                     * @param message ListTranscriptsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListTranscriptsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTranscriptEntryRequest. */
                interface IGetTranscriptEntryRequest {

                    /** GetTranscriptEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTranscriptEntryRequest. */
                class GetTranscriptEntryRequest implements IGetTranscriptEntryRequest {

                    /**
                     * Constructs a new GetTranscriptEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IGetTranscriptEntryRequest);

                    /** GetTranscriptEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTranscriptEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTranscriptEntryRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IGetTranscriptEntryRequest): google.apps.meet.v2.GetTranscriptEntryRequest;

                    /**
                     * Encodes the specified GetTranscriptEntryRequest message. Does not implicitly {@link google.apps.meet.v2.GetTranscriptEntryRequest.verify|verify} messages.
                     * @param message GetTranscriptEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IGetTranscriptEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTranscriptEntryRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.GetTranscriptEntryRequest.verify|verify} messages.
                     * @param message GetTranscriptEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IGetTranscriptEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTranscriptEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTranscriptEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.GetTranscriptEntryRequest;

                    /**
                     * Decodes a GetTranscriptEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTranscriptEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.GetTranscriptEntryRequest;

                    /**
                     * Verifies a GetTranscriptEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTranscriptEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTranscriptEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.GetTranscriptEntryRequest;

                    /**
                     * Creates a plain object from a GetTranscriptEntryRequest message. Also converts values to other types if specified.
                     * @param message GetTranscriptEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.GetTranscriptEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTranscriptEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTranscriptEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptEntriesRequest. */
                interface IListTranscriptEntriesRequest {

                    /** ListTranscriptEntriesRequest parent */
                    parent?: (string|null);

                    /** ListTranscriptEntriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTranscriptEntriesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTranscriptEntriesRequest. */
                class ListTranscriptEntriesRequest implements IListTranscriptEntriesRequest {

                    /**
                     * Constructs a new ListTranscriptEntriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListTranscriptEntriesRequest);

                    /** ListTranscriptEntriesRequest parent. */
                    public parent: string;

                    /** ListTranscriptEntriesRequest pageSize. */
                    public pageSize: number;

                    /** ListTranscriptEntriesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTranscriptEntriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptEntriesRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListTranscriptEntriesRequest): google.apps.meet.v2.ListTranscriptEntriesRequest;

                    /**
                     * Encodes the specified ListTranscriptEntriesRequest message. Does not implicitly {@link google.apps.meet.v2.ListTranscriptEntriesRequest.verify|verify} messages.
                     * @param message ListTranscriptEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListTranscriptEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptEntriesRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListTranscriptEntriesRequest.verify|verify} messages.
                     * @param message ListTranscriptEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListTranscriptEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptEntriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListTranscriptEntriesRequest;

                    /**
                     * Decodes a ListTranscriptEntriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListTranscriptEntriesRequest;

                    /**
                     * Verifies a ListTranscriptEntriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptEntriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptEntriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListTranscriptEntriesRequest;

                    /**
                     * Creates a plain object from a ListTranscriptEntriesRequest message. Also converts values to other types if specified.
                     * @param message ListTranscriptEntriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListTranscriptEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptEntriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptEntriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptEntriesResponse. */
                interface IListTranscriptEntriesResponse {

                    /** ListTranscriptEntriesResponse transcriptEntries */
                    transcriptEntries?: (google.apps.meet.v2.ITranscriptEntry[]|null);

                    /** ListTranscriptEntriesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTranscriptEntriesResponse. */
                class ListTranscriptEntriesResponse implements IListTranscriptEntriesResponse {

                    /**
                     * Constructs a new ListTranscriptEntriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2.IListTranscriptEntriesResponse);

                    /** ListTranscriptEntriesResponse transcriptEntries. */
                    public transcriptEntries: google.apps.meet.v2.ITranscriptEntry[];

                    /** ListTranscriptEntriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTranscriptEntriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptEntriesResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2.IListTranscriptEntriesResponse): google.apps.meet.v2.ListTranscriptEntriesResponse;

                    /**
                     * Encodes the specified ListTranscriptEntriesResponse message. Does not implicitly {@link google.apps.meet.v2.ListTranscriptEntriesResponse.verify|verify} messages.
                     * @param message ListTranscriptEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2.IListTranscriptEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptEntriesResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2.ListTranscriptEntriesResponse.verify|verify} messages.
                     * @param message ListTranscriptEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2.IListTranscriptEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptEntriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2.ListTranscriptEntriesResponse;

                    /**
                     * Decodes a ListTranscriptEntriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2.ListTranscriptEntriesResponse;

                    /**
                     * Verifies a ListTranscriptEntriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptEntriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptEntriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2.ListTranscriptEntriesResponse;

                    /**
                     * Creates a plain object from a ListTranscriptEntriesResponse message. Also converts values to other types if specified.
                     * @param message ListTranscriptEntriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2.ListTranscriptEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptEntriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptEntriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v2beta. */
            namespace v2beta {

                /** Properties of a Space. */
                interface ISpace {

                    /** Space name */
                    name?: (string|null);

                    /** Space meetingUri */
                    meetingUri?: (string|null);

                    /** Space meetingCode */
                    meetingCode?: (string|null);

                    /** Space config */
                    config?: (google.apps.meet.v2beta.ISpaceConfig|null);

                    /** Space activeConference */
                    activeConference?: (google.apps.meet.v2beta.IActiveConference|null);
                }

                /** Represents a Space. */
                class Space implements ISpace {

                    /**
                     * Constructs a new Space.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ISpace);

                    /** Space name. */
                    public name: string;

                    /** Space meetingUri. */
                    public meetingUri: string;

                    /** Space meetingCode. */
                    public meetingCode: string;

                    /** Space config. */
                    public config?: (google.apps.meet.v2beta.ISpaceConfig|null);

                    /** Space activeConference. */
                    public activeConference?: (google.apps.meet.v2beta.IActiveConference|null);

                    /**
                     * Creates a new Space instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Space instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ISpace): google.apps.meet.v2beta.Space;

                    /**
                     * Encodes the specified Space message. Does not implicitly {@link google.apps.meet.v2beta.Space.verify|verify} messages.
                     * @param message Space message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ISpace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Space message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.Space.verify|verify} messages.
                     * @param message Space message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ISpace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Space message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Space
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.Space;

                    /**
                     * Decodes a Space message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Space
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.Space;

                    /**
                     * Verifies a Space message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Space message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Space
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.Space;

                    /**
                     * Creates a plain object from a Space message. Also converts values to other types if specified.
                     * @param message Space
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.Space, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Space to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Space
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActiveConference. */
                interface IActiveConference {

                    /** ActiveConference conferenceRecord */
                    conferenceRecord?: (string|null);
                }

                /** Represents an ActiveConference. */
                class ActiveConference implements IActiveConference {

                    /**
                     * Constructs a new ActiveConference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IActiveConference);

                    /** ActiveConference conferenceRecord. */
                    public conferenceRecord: string;

                    /**
                     * Creates a new ActiveConference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActiveConference instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IActiveConference): google.apps.meet.v2beta.ActiveConference;

                    /**
                     * Encodes the specified ActiveConference message. Does not implicitly {@link google.apps.meet.v2beta.ActiveConference.verify|verify} messages.
                     * @param message ActiveConference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IActiveConference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActiveConference message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ActiveConference.verify|verify} messages.
                     * @param message ActiveConference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IActiveConference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActiveConference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActiveConference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ActiveConference;

                    /**
                     * Decodes an ActiveConference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActiveConference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ActiveConference;

                    /**
                     * Verifies an ActiveConference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActiveConference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActiveConference
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ActiveConference;

                    /**
                     * Creates a plain object from an ActiveConference message. Also converts values to other types if specified.
                     * @param message ActiveConference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ActiveConference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActiveConference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActiveConference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpaceConfig. */
                interface ISpaceConfig {

                    /** SpaceConfig accessType */
                    accessType?: (google.apps.meet.v2beta.SpaceConfig.AccessType|keyof typeof google.apps.meet.v2beta.SpaceConfig.AccessType|null);

                    /** SpaceConfig entryPointAccess */
                    entryPointAccess?: (google.apps.meet.v2beta.SpaceConfig.EntryPointAccess|keyof typeof google.apps.meet.v2beta.SpaceConfig.EntryPointAccess|null);

                    /** SpaceConfig moderation */
                    moderation?: (google.apps.meet.v2beta.SpaceConfig.Moderation|keyof typeof google.apps.meet.v2beta.SpaceConfig.Moderation|null);

                    /** SpaceConfig moderationRestrictions */
                    moderationRestrictions?: (google.apps.meet.v2beta.SpaceConfig.IModerationRestrictions|null);

                    /** SpaceConfig attendanceReportGenerationType */
                    attendanceReportGenerationType?: (google.apps.meet.v2beta.SpaceConfig.AttendanceReportGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.AttendanceReportGenerationType|null);

                    /** SpaceConfig artifactConfig */
                    artifactConfig?: (google.apps.meet.v2beta.SpaceConfig.IArtifactConfig|null);
                }

                /** Represents a SpaceConfig. */
                class SpaceConfig implements ISpaceConfig {

                    /**
                     * Constructs a new SpaceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ISpaceConfig);

                    /** SpaceConfig accessType. */
                    public accessType: (google.apps.meet.v2beta.SpaceConfig.AccessType|keyof typeof google.apps.meet.v2beta.SpaceConfig.AccessType);

                    /** SpaceConfig entryPointAccess. */
                    public entryPointAccess: (google.apps.meet.v2beta.SpaceConfig.EntryPointAccess|keyof typeof google.apps.meet.v2beta.SpaceConfig.EntryPointAccess);

                    /** SpaceConfig moderation. */
                    public moderation: (google.apps.meet.v2beta.SpaceConfig.Moderation|keyof typeof google.apps.meet.v2beta.SpaceConfig.Moderation);

                    /** SpaceConfig moderationRestrictions. */
                    public moderationRestrictions?: (google.apps.meet.v2beta.SpaceConfig.IModerationRestrictions|null);

                    /** SpaceConfig attendanceReportGenerationType. */
                    public attendanceReportGenerationType: (google.apps.meet.v2beta.SpaceConfig.AttendanceReportGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.AttendanceReportGenerationType);

                    /** SpaceConfig artifactConfig. */
                    public artifactConfig?: (google.apps.meet.v2beta.SpaceConfig.IArtifactConfig|null);

                    /**
                     * Creates a new SpaceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpaceConfig instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ISpaceConfig): google.apps.meet.v2beta.SpaceConfig;

                    /**
                     * Encodes the specified SpaceConfig message. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.verify|verify} messages.
                     * @param message SpaceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ISpaceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpaceConfig message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.verify|verify} messages.
                     * @param message SpaceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ISpaceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpaceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpaceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SpaceConfig;

                    /**
                     * Decodes a SpaceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpaceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SpaceConfig;

                    /**
                     * Verifies a SpaceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpaceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpaceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SpaceConfig;

                    /**
                     * Creates a plain object from a SpaceConfig message. Also converts values to other types if specified.
                     * @param message SpaceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.SpaceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpaceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpaceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SpaceConfig {

                    /** Properties of a ModerationRestrictions. */
                    interface IModerationRestrictions {

                        /** ModerationRestrictions chatRestriction */
                        chatRestriction?: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|null);

                        /** ModerationRestrictions reactionRestriction */
                        reactionRestriction?: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|null);

                        /** ModerationRestrictions presentRestriction */
                        presentRestriction?: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|null);

                        /** ModerationRestrictions defaultJoinAsViewerType */
                        defaultJoinAsViewerType?: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.DefaultJoinAsViewerType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.DefaultJoinAsViewerType|null);
                    }

                    /** Represents a ModerationRestrictions. */
                    class ModerationRestrictions implements IModerationRestrictions {

                        /**
                         * Constructs a new ModerationRestrictions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.meet.v2beta.SpaceConfig.IModerationRestrictions);

                        /** ModerationRestrictions chatRestriction. */
                        public chatRestriction: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType);

                        /** ModerationRestrictions reactionRestriction. */
                        public reactionRestriction: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType);

                        /** ModerationRestrictions presentRestriction. */
                        public presentRestriction: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.RestrictionType);

                        /** ModerationRestrictions defaultJoinAsViewerType. */
                        public defaultJoinAsViewerType: (google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.DefaultJoinAsViewerType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.DefaultJoinAsViewerType);

                        /**
                         * Creates a new ModerationRestrictions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModerationRestrictions instance
                         */
                        public static create(properties?: google.apps.meet.v2beta.SpaceConfig.IModerationRestrictions): google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions;

                        /**
                         * Encodes the specified ModerationRestrictions message. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.verify|verify} messages.
                         * @param message ModerationRestrictions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.meet.v2beta.SpaceConfig.IModerationRestrictions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModerationRestrictions message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions.verify|verify} messages.
                         * @param message ModerationRestrictions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.meet.v2beta.SpaceConfig.IModerationRestrictions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModerationRestrictions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModerationRestrictions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions;

                        /**
                         * Decodes a ModerationRestrictions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModerationRestrictions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions;

                        /**
                         * Verifies a ModerationRestrictions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModerationRestrictions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModerationRestrictions
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions;

                        /**
                         * Creates a plain object from a ModerationRestrictions message. Also converts values to other types if specified.
                         * @param message ModerationRestrictions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.meet.v2beta.SpaceConfig.ModerationRestrictions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModerationRestrictions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ModerationRestrictions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ModerationRestrictions {

                        /** RestrictionType enum. */
                        enum RestrictionType {
                            RESTRICTION_TYPE_UNSPECIFIED = 0,
                            HOSTS_ONLY = 1,
                            NO_RESTRICTION = 2
                        }

                        /** DefaultJoinAsViewerType enum. */
                        enum DefaultJoinAsViewerType {
                            DEFAULT_JOIN_AS_VIEWER_TYPE_UNSPECIFIED = 0,
                            ON = 1,
                            OFF = 2
                        }
                    }

                    /** Properties of an ArtifactConfig. */
                    interface IArtifactConfig {

                        /** ArtifactConfig recordingConfig */
                        recordingConfig?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.IRecordingConfig|null);

                        /** ArtifactConfig transcriptionConfig */
                        transcriptionConfig?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ITranscriptionConfig|null);

                        /** ArtifactConfig smartNotesConfig */
                        smartNotesConfig?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ISmartNotesConfig|null);
                    }

                    /** Represents an ArtifactConfig. */
                    class ArtifactConfig implements IArtifactConfig {

                        /**
                         * Constructs a new ArtifactConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.meet.v2beta.SpaceConfig.IArtifactConfig);

                        /** ArtifactConfig recordingConfig. */
                        public recordingConfig?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.IRecordingConfig|null);

                        /** ArtifactConfig transcriptionConfig. */
                        public transcriptionConfig?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ITranscriptionConfig|null);

                        /** ArtifactConfig smartNotesConfig. */
                        public smartNotesConfig?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ISmartNotesConfig|null);

                        /**
                         * Creates a new ArtifactConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArtifactConfig instance
                         */
                        public static create(properties?: google.apps.meet.v2beta.SpaceConfig.IArtifactConfig): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig;

                        /**
                         * Encodes the specified ArtifactConfig message. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.verify|verify} messages.
                         * @param message ArtifactConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.meet.v2beta.SpaceConfig.IArtifactConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArtifactConfig message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.verify|verify} messages.
                         * @param message ArtifactConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.meet.v2beta.SpaceConfig.IArtifactConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArtifactConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArtifactConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig;

                        /**
                         * Decodes an ArtifactConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArtifactConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig;

                        /**
                         * Verifies an ArtifactConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArtifactConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArtifactConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig;

                        /**
                         * Creates a plain object from an ArtifactConfig message. Also converts values to other types if specified.
                         * @param message ArtifactConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArtifactConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ArtifactConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ArtifactConfig {

                        /** Properties of a RecordingConfig. */
                        interface IRecordingConfig {

                            /** RecordingConfig autoRecordingGeneration */
                            autoRecordingGeneration?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|null);
                        }

                        /** Represents a RecordingConfig. */
                        class RecordingConfig implements IRecordingConfig {

                            /**
                             * Constructs a new RecordingConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.IRecordingConfig);

                            /** RecordingConfig autoRecordingGeneration. */
                            public autoRecordingGeneration: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType);

                            /**
                             * Creates a new RecordingConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RecordingConfig instance
                             */
                            public static create(properties?: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.IRecordingConfig): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig;

                            /**
                             * Encodes the specified RecordingConfig message. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig.verify|verify} messages.
                             * @param message RecordingConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.IRecordingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RecordingConfig message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig.verify|verify} messages.
                             * @param message RecordingConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.IRecordingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RecordingConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RecordingConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig;

                            /**
                             * Decodes a RecordingConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RecordingConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig;

                            /**
                             * Verifies a RecordingConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RecordingConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RecordingConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig;

                            /**
                             * Creates a plain object from a RecordingConfig message. Also converts values to other types if specified.
                             * @param message RecordingConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.RecordingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RecordingConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RecordingConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a TranscriptionConfig. */
                        interface ITranscriptionConfig {

                            /** TranscriptionConfig autoTranscriptionGeneration */
                            autoTranscriptionGeneration?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|null);
                        }

                        /** Represents a TranscriptionConfig. */
                        class TranscriptionConfig implements ITranscriptionConfig {

                            /**
                             * Constructs a new TranscriptionConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ITranscriptionConfig);

                            /** TranscriptionConfig autoTranscriptionGeneration. */
                            public autoTranscriptionGeneration: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType);

                            /**
                             * Creates a new TranscriptionConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TranscriptionConfig instance
                             */
                            public static create(properties?: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ITranscriptionConfig): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig;

                            /**
                             * Encodes the specified TranscriptionConfig message. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig.verify|verify} messages.
                             * @param message TranscriptionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ITranscriptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TranscriptionConfig message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig.verify|verify} messages.
                             * @param message TranscriptionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ITranscriptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TranscriptionConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TranscriptionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig;

                            /**
                             * Decodes a TranscriptionConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TranscriptionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig;

                            /**
                             * Verifies a TranscriptionConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TranscriptionConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TranscriptionConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig;

                            /**
                             * Creates a plain object from a TranscriptionConfig message. Also converts values to other types if specified.
                             * @param message TranscriptionConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.TranscriptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TranscriptionConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TranscriptionConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SmartNotesConfig. */
                        interface ISmartNotesConfig {

                            /** SmartNotesConfig autoSmartNotesGeneration */
                            autoSmartNotesGeneration?: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|null);
                        }

                        /** Represents a SmartNotesConfig. */
                        class SmartNotesConfig implements ISmartNotesConfig {

                            /**
                             * Constructs a new SmartNotesConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ISmartNotesConfig);

                            /** SmartNotesConfig autoSmartNotesGeneration. */
                            public autoSmartNotesGeneration: (google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType|keyof typeof google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.AutoGenerationType);

                            /**
                             * Creates a new SmartNotesConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SmartNotesConfig instance
                             */
                            public static create(properties?: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ISmartNotesConfig): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig;

                            /**
                             * Encodes the specified SmartNotesConfig message. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig.verify|verify} messages.
                             * @param message SmartNotesConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ISmartNotesConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SmartNotesConfig message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig.verify|verify} messages.
                             * @param message SmartNotesConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.ISmartNotesConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SmartNotesConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SmartNotesConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig;

                            /**
                             * Decodes a SmartNotesConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SmartNotesConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig;

                            /**
                             * Verifies a SmartNotesConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SmartNotesConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SmartNotesConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig;

                            /**
                             * Creates a plain object from a SmartNotesConfig message. Also converts values to other types if specified.
                             * @param message SmartNotesConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.apps.meet.v2beta.SpaceConfig.ArtifactConfig.SmartNotesConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SmartNotesConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SmartNotesConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** AutoGenerationType enum. */
                        enum AutoGenerationType {
                            AUTO_GENERATION_TYPE_UNSPECIFIED = 0,
                            ON = 1,
                            OFF = 2
                        }
                    }

                    /** AccessType enum. */
                    enum AccessType {
                        ACCESS_TYPE_UNSPECIFIED = 0,
                        OPEN = 1,
                        TRUSTED = 2,
                        RESTRICTED = 3
                    }

                    /** EntryPointAccess enum. */
                    enum EntryPointAccess {
                        ENTRY_POINT_ACCESS_UNSPECIFIED = 0,
                        ALL = 1,
                        CREATOR_APP_ONLY = 2
                    }

                    /** Moderation enum. */
                    enum Moderation {
                        MODERATION_UNSPECIFIED = 0,
                        OFF = 1,
                        ON = 2
                    }

                    /** AttendanceReportGenerationType enum. */
                    enum AttendanceReportGenerationType {
                        ATTENDANCE_REPORT_GENERATION_TYPE_UNSPECIFIED = 0,
                        GENERATE_REPORT = 1,
                        DO_NOT_GENERATE = 2
                    }
                }

                /** Properties of a Member. */
                interface IMember {

                    /** Member name */
                    name?: (string|null);

                    /** Member email */
                    email?: (string|null);

                    /** Member role */
                    role?: (google.apps.meet.v2beta.Member.Role|keyof typeof google.apps.meet.v2beta.Member.Role|null);

                    /** Member user */
                    user?: (string|null);
                }

                /** Represents a Member. */
                class Member implements IMember {

                    /**
                     * Constructs a new Member.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IMember);

                    /** Member name. */
                    public name: string;

                    /** Member email. */
                    public email: string;

                    /** Member role. */
                    public role: (google.apps.meet.v2beta.Member.Role|keyof typeof google.apps.meet.v2beta.Member.Role);

                    /** Member user. */
                    public user: string;

                    /**
                     * Creates a new Member instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Member instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IMember): google.apps.meet.v2beta.Member;

                    /**
                     * Encodes the specified Member message. Does not implicitly {@link google.apps.meet.v2beta.Member.verify|verify} messages.
                     * @param message Member message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IMember, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Member message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.Member.verify|verify} messages.
                     * @param message Member message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IMember, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Member message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Member
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.Member;

                    /**
                     * Decodes a Member message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Member
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.Member;

                    /**
                     * Verifies a Member message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Member message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Member
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.Member;

                    /**
                     * Creates a plain object from a Member message. Also converts values to other types if specified.
                     * @param message Member
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.Member, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Member to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Member
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Member {

                    /** Role enum. */
                    enum Role {
                        ROLE_UNSPECIFIED = 0,
                        COHOST = 1
                    }
                }

                /** Properties of a ConferenceRecord. */
                interface IConferenceRecord {

                    /** ConferenceRecord name */
                    name?: (string|null);

                    /** ConferenceRecord startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord space */
                    space?: (string|null);
                }

                /** Represents a ConferenceRecord. */
                class ConferenceRecord implements IConferenceRecord {

                    /**
                     * Constructs a new ConferenceRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IConferenceRecord);

                    /** ConferenceRecord name. */
                    public name: string;

                    /** ConferenceRecord startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** ConferenceRecord space. */
                    public space: string;

                    /**
                     * Creates a new ConferenceRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConferenceRecord instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IConferenceRecord): google.apps.meet.v2beta.ConferenceRecord;

                    /**
                     * Encodes the specified ConferenceRecord message. Does not implicitly {@link google.apps.meet.v2beta.ConferenceRecord.verify|verify} messages.
                     * @param message ConferenceRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IConferenceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConferenceRecord message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ConferenceRecord.verify|verify} messages.
                     * @param message ConferenceRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IConferenceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConferenceRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConferenceRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ConferenceRecord;

                    /**
                     * Decodes a ConferenceRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConferenceRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ConferenceRecord;

                    /**
                     * Verifies a ConferenceRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConferenceRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConferenceRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ConferenceRecord;

                    /**
                     * Creates a plain object from a ConferenceRecord message. Also converts values to other types if specified.
                     * @param message ConferenceRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ConferenceRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConferenceRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConferenceRecord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Participant. */
                interface IParticipant {

                    /** Participant signedinUser */
                    signedinUser?: (google.apps.meet.v2beta.ISignedinUser|null);

                    /** Participant anonymousUser */
                    anonymousUser?: (google.apps.meet.v2beta.IAnonymousUser|null);

                    /** Participant phoneUser */
                    phoneUser?: (google.apps.meet.v2beta.IPhoneUser|null);

                    /** Participant name */
                    name?: (string|null);

                    /** Participant earliestStartTime */
                    earliestStartTime?: (google.protobuf.ITimestamp|null);

                    /** Participant latestEndTime */
                    latestEndTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Participant. */
                class Participant implements IParticipant {

                    /**
                     * Constructs a new Participant.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IParticipant);

                    /** Participant signedinUser. */
                    public signedinUser?: (google.apps.meet.v2beta.ISignedinUser|null);

                    /** Participant anonymousUser. */
                    public anonymousUser?: (google.apps.meet.v2beta.IAnonymousUser|null);

                    /** Participant phoneUser. */
                    public phoneUser?: (google.apps.meet.v2beta.IPhoneUser|null);

                    /** Participant name. */
                    public name: string;

                    /** Participant earliestStartTime. */
                    public earliestStartTime?: (google.protobuf.ITimestamp|null);

                    /** Participant latestEndTime. */
                    public latestEndTime?: (google.protobuf.ITimestamp|null);

                    /** Participant user. */
                    public user?: ("signedinUser"|"anonymousUser"|"phoneUser");

                    /**
                     * Creates a new Participant instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Participant instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IParticipant): google.apps.meet.v2beta.Participant;

                    /**
                     * Encodes the specified Participant message. Does not implicitly {@link google.apps.meet.v2beta.Participant.verify|verify} messages.
                     * @param message Participant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Participant message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.Participant.verify|verify} messages.
                     * @param message Participant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Participant message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Participant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.Participant;

                    /**
                     * Decodes a Participant message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Participant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.Participant;

                    /**
                     * Verifies a Participant message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Participant message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Participant
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.Participant;

                    /**
                     * Creates a plain object from a Participant message. Also converts values to other types if specified.
                     * @param message Participant
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.Participant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Participant to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Participant
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ParticipantSession. */
                interface IParticipantSession {

                    /** ParticipantSession name */
                    name?: (string|null);

                    /** ParticipantSession startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ParticipantSession endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ParticipantSession. */
                class ParticipantSession implements IParticipantSession {

                    /**
                     * Constructs a new ParticipantSession.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IParticipantSession);

                    /** ParticipantSession name. */
                    public name: string;

                    /** ParticipantSession startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ParticipantSession endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ParticipantSession instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParticipantSession instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IParticipantSession): google.apps.meet.v2beta.ParticipantSession;

                    /**
                     * Encodes the specified ParticipantSession message. Does not implicitly {@link google.apps.meet.v2beta.ParticipantSession.verify|verify} messages.
                     * @param message ParticipantSession message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IParticipantSession, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParticipantSession message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ParticipantSession.verify|verify} messages.
                     * @param message ParticipantSession message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IParticipantSession, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParticipantSession message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParticipantSession
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ParticipantSession;

                    /**
                     * Decodes a ParticipantSession message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParticipantSession
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ParticipantSession;

                    /**
                     * Verifies a ParticipantSession message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParticipantSession message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParticipantSession
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ParticipantSession;

                    /**
                     * Creates a plain object from a ParticipantSession message. Also converts values to other types if specified.
                     * @param message ParticipantSession
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ParticipantSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParticipantSession to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ParticipantSession
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignedinUser. */
                interface ISignedinUser {

                    /** SignedinUser user */
                    user?: (string|null);

                    /** SignedinUser displayName */
                    displayName?: (string|null);
                }

                /** Represents a SignedinUser. */
                class SignedinUser implements ISignedinUser {

                    /**
                     * Constructs a new SignedinUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ISignedinUser);

                    /** SignedinUser user. */
                    public user: string;

                    /** SignedinUser displayName. */
                    public displayName: string;

                    /**
                     * Creates a new SignedinUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignedinUser instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ISignedinUser): google.apps.meet.v2beta.SignedinUser;

                    /**
                     * Encodes the specified SignedinUser message. Does not implicitly {@link google.apps.meet.v2beta.SignedinUser.verify|verify} messages.
                     * @param message SignedinUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ISignedinUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignedinUser message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.SignedinUser.verify|verify} messages.
                     * @param message SignedinUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ISignedinUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignedinUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignedinUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.SignedinUser;

                    /**
                     * Decodes a SignedinUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignedinUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.SignedinUser;

                    /**
                     * Verifies a SignedinUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignedinUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignedinUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.SignedinUser;

                    /**
                     * Creates a plain object from a SignedinUser message. Also converts values to other types if specified.
                     * @param message SignedinUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.SignedinUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignedinUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignedinUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnonymousUser. */
                interface IAnonymousUser {

                    /** AnonymousUser displayName */
                    displayName?: (string|null);
                }

                /** Represents an AnonymousUser. */
                class AnonymousUser implements IAnonymousUser {

                    /**
                     * Constructs a new AnonymousUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IAnonymousUser);

                    /** AnonymousUser displayName. */
                    public displayName: string;

                    /**
                     * Creates a new AnonymousUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnonymousUser instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IAnonymousUser): google.apps.meet.v2beta.AnonymousUser;

                    /**
                     * Encodes the specified AnonymousUser message. Does not implicitly {@link google.apps.meet.v2beta.AnonymousUser.verify|verify} messages.
                     * @param message AnonymousUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IAnonymousUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnonymousUser message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.AnonymousUser.verify|verify} messages.
                     * @param message AnonymousUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IAnonymousUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnonymousUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnonymousUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.AnonymousUser;

                    /**
                     * Decodes an AnonymousUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnonymousUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.AnonymousUser;

                    /**
                     * Verifies an AnonymousUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnonymousUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnonymousUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.AnonymousUser;

                    /**
                     * Creates a plain object from an AnonymousUser message. Also converts values to other types if specified.
                     * @param message AnonymousUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.AnonymousUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnonymousUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnonymousUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PhoneUser. */
                interface IPhoneUser {

                    /** PhoneUser displayName */
                    displayName?: (string|null);
                }

                /** Represents a PhoneUser. */
                class PhoneUser implements IPhoneUser {

                    /**
                     * Constructs a new PhoneUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IPhoneUser);

                    /** PhoneUser displayName. */
                    public displayName: string;

                    /**
                     * Creates a new PhoneUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhoneUser instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IPhoneUser): google.apps.meet.v2beta.PhoneUser;

                    /**
                     * Encodes the specified PhoneUser message. Does not implicitly {@link google.apps.meet.v2beta.PhoneUser.verify|verify} messages.
                     * @param message PhoneUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IPhoneUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhoneUser message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.PhoneUser.verify|verify} messages.
                     * @param message PhoneUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IPhoneUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhoneUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhoneUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.PhoneUser;

                    /**
                     * Decodes a PhoneUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhoneUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.PhoneUser;

                    /**
                     * Verifies a PhoneUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhoneUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhoneUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.PhoneUser;

                    /**
                     * Creates a plain object from a PhoneUser message. Also converts values to other types if specified.
                     * @param message PhoneUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.PhoneUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhoneUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhoneUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Recording. */
                interface IRecording {

                    /** Recording driveDestination */
                    driveDestination?: (google.apps.meet.v2beta.IDriveDestination|null);

                    /** Recording name */
                    name?: (string|null);

                    /** Recording state */
                    state?: (google.apps.meet.v2beta.Recording.State|keyof typeof google.apps.meet.v2beta.Recording.State|null);

                    /** Recording startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Recording endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Recording. */
                class Recording implements IRecording {

                    /**
                     * Constructs a new Recording.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IRecording);

                    /** Recording driveDestination. */
                    public driveDestination?: (google.apps.meet.v2beta.IDriveDestination|null);

                    /** Recording name. */
                    public name: string;

                    /** Recording state. */
                    public state: (google.apps.meet.v2beta.Recording.State|keyof typeof google.apps.meet.v2beta.Recording.State);

                    /** Recording startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Recording endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Recording destination. */
                    public destination?: "driveDestination";

                    /**
                     * Creates a new Recording instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Recording instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IRecording): google.apps.meet.v2beta.Recording;

                    /**
                     * Encodes the specified Recording message. Does not implicitly {@link google.apps.meet.v2beta.Recording.verify|verify} messages.
                     * @param message Recording message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IRecording, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Recording message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.Recording.verify|verify} messages.
                     * @param message Recording message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IRecording, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recording message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recording
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.Recording;

                    /**
                     * Decodes a Recording message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Recording
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.Recording;

                    /**
                     * Verifies a Recording message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Recording message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Recording
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.Recording;

                    /**
                     * Creates a plain object from a Recording message. Also converts values to other types if specified.
                     * @param message Recording
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.Recording, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Recording to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Recording
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Recording {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTED = 1,
                        ENDED = 2,
                        FILE_GENERATED = 3
                    }
                }

                /** Properties of a DriveDestination. */
                interface IDriveDestination {

                    /** DriveDestination file */
                    file?: (string|null);

                    /** DriveDestination exportUri */
                    exportUri?: (string|null);
                }

                /** Represents a DriveDestination. */
                class DriveDestination implements IDriveDestination {

                    /**
                     * Constructs a new DriveDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IDriveDestination);

                    /** DriveDestination file. */
                    public file: string;

                    /** DriveDestination exportUri. */
                    public exportUri: string;

                    /**
                     * Creates a new DriveDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DriveDestination instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IDriveDestination): google.apps.meet.v2beta.DriveDestination;

                    /**
                     * Encodes the specified DriveDestination message. Does not implicitly {@link google.apps.meet.v2beta.DriveDestination.verify|verify} messages.
                     * @param message DriveDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IDriveDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DriveDestination message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.DriveDestination.verify|verify} messages.
                     * @param message DriveDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IDriveDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DriveDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DriveDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.DriveDestination;

                    /**
                     * Decodes a DriveDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DriveDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.DriveDestination;

                    /**
                     * Verifies a DriveDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DriveDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DriveDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.DriveDestination;

                    /**
                     * Creates a plain object from a DriveDestination message. Also converts values to other types if specified.
                     * @param message DriveDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.DriveDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DriveDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DriveDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Transcript. */
                interface ITranscript {

                    /** Transcript docsDestination */
                    docsDestination?: (google.apps.meet.v2beta.IDocsDestination|null);

                    /** Transcript name */
                    name?: (string|null);

                    /** Transcript state */
                    state?: (google.apps.meet.v2beta.Transcript.State|keyof typeof google.apps.meet.v2beta.Transcript.State|null);

                    /** Transcript startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Transcript endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Transcript. */
                class Transcript implements ITranscript {

                    /**
                     * Constructs a new Transcript.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ITranscript);

                    /** Transcript docsDestination. */
                    public docsDestination?: (google.apps.meet.v2beta.IDocsDestination|null);

                    /** Transcript name. */
                    public name: string;

                    /** Transcript state. */
                    public state: (google.apps.meet.v2beta.Transcript.State|keyof typeof google.apps.meet.v2beta.Transcript.State);

                    /** Transcript startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Transcript endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Transcript destination. */
                    public destination?: "docsDestination";

                    /**
                     * Creates a new Transcript instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transcript instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ITranscript): google.apps.meet.v2beta.Transcript;

                    /**
                     * Encodes the specified Transcript message. Does not implicitly {@link google.apps.meet.v2beta.Transcript.verify|verify} messages.
                     * @param message Transcript message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ITranscript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Transcript message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.Transcript.verify|verify} messages.
                     * @param message Transcript message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ITranscript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transcript message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transcript
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.Transcript;

                    /**
                     * Decodes a Transcript message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Transcript
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.Transcript;

                    /**
                     * Verifies a Transcript message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Transcript message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Transcript
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.Transcript;

                    /**
                     * Creates a plain object from a Transcript message. Also converts values to other types if specified.
                     * @param message Transcript
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.Transcript, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Transcript to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Transcript
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Transcript {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTED = 1,
                        ENDED = 2,
                        FILE_GENERATED = 3
                    }
                }

                /** Properties of a DocsDestination. */
                interface IDocsDestination {

                    /** DocsDestination document */
                    document?: (string|null);

                    /** DocsDestination exportUri */
                    exportUri?: (string|null);
                }

                /** Represents a DocsDestination. */
                class DocsDestination implements IDocsDestination {

                    /**
                     * Constructs a new DocsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IDocsDestination);

                    /** DocsDestination document. */
                    public document: string;

                    /** DocsDestination exportUri. */
                    public exportUri: string;

                    /**
                     * Creates a new DocsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocsDestination instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IDocsDestination): google.apps.meet.v2beta.DocsDestination;

                    /**
                     * Encodes the specified DocsDestination message. Does not implicitly {@link google.apps.meet.v2beta.DocsDestination.verify|verify} messages.
                     * @param message DocsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IDocsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocsDestination message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.DocsDestination.verify|verify} messages.
                     * @param message DocsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IDocsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.DocsDestination;

                    /**
                     * Decodes a DocsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.DocsDestination;

                    /**
                     * Verifies a DocsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.DocsDestination;

                    /**
                     * Creates a plain object from a DocsDestination message. Also converts values to other types if specified.
                     * @param message DocsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.DocsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DocsDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TranscriptEntry. */
                interface ITranscriptEntry {

                    /** TranscriptEntry name */
                    name?: (string|null);

                    /** TranscriptEntry participant */
                    participant?: (string|null);

                    /** TranscriptEntry text */
                    text?: (string|null);

                    /** TranscriptEntry languageCode */
                    languageCode?: (string|null);

                    /** TranscriptEntry startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TranscriptEntry endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TranscriptEntry. */
                class TranscriptEntry implements ITranscriptEntry {

                    /**
                     * Constructs a new TranscriptEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ITranscriptEntry);

                    /** TranscriptEntry name. */
                    public name: string;

                    /** TranscriptEntry participant. */
                    public participant: string;

                    /** TranscriptEntry text. */
                    public text: string;

                    /** TranscriptEntry languageCode. */
                    public languageCode: string;

                    /** TranscriptEntry startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TranscriptEntry endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TranscriptEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranscriptEntry instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ITranscriptEntry): google.apps.meet.v2beta.TranscriptEntry;

                    /**
                     * Encodes the specified TranscriptEntry message. Does not implicitly {@link google.apps.meet.v2beta.TranscriptEntry.verify|verify} messages.
                     * @param message TranscriptEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ITranscriptEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranscriptEntry message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.TranscriptEntry.verify|verify} messages.
                     * @param message TranscriptEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ITranscriptEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranscriptEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranscriptEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.TranscriptEntry;

                    /**
                     * Decodes a TranscriptEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranscriptEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.TranscriptEntry;

                    /**
                     * Verifies a TranscriptEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranscriptEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranscriptEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.TranscriptEntry;

                    /**
                     * Creates a plain object from a TranscriptEntry message. Also converts values to other types if specified.
                     * @param message TranscriptEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.TranscriptEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranscriptEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranscriptEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a SpacesService */
                class SpacesService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SpacesService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SpacesService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SpacesService;

                    /**
                     * Calls CreateSpace.
                     * @param request CreateSpaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Space
                     */
                    public createSpace(request: google.apps.meet.v2beta.ICreateSpaceRequest, callback: google.apps.meet.v2beta.SpacesService.CreateSpaceCallback): void;

                    /**
                     * Calls CreateSpace.
                     * @param request CreateSpaceRequest message or plain object
                     * @returns Promise
                     */
                    public createSpace(request: google.apps.meet.v2beta.ICreateSpaceRequest): Promise<google.apps.meet.v2beta.Space>;

                    /**
                     * Calls GetSpace.
                     * @param request GetSpaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Space
                     */
                    public getSpace(request: google.apps.meet.v2beta.IGetSpaceRequest, callback: google.apps.meet.v2beta.SpacesService.GetSpaceCallback): void;

                    /**
                     * Calls GetSpace.
                     * @param request GetSpaceRequest message or plain object
                     * @returns Promise
                     */
                    public getSpace(request: google.apps.meet.v2beta.IGetSpaceRequest): Promise<google.apps.meet.v2beta.Space>;

                    /**
                     * Calls UpdateSpace.
                     * @param request UpdateSpaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Space
                     */
                    public updateSpace(request: google.apps.meet.v2beta.IUpdateSpaceRequest, callback: google.apps.meet.v2beta.SpacesService.UpdateSpaceCallback): void;

                    /**
                     * Calls UpdateSpace.
                     * @param request UpdateSpaceRequest message or plain object
                     * @returns Promise
                     */
                    public updateSpace(request: google.apps.meet.v2beta.IUpdateSpaceRequest): Promise<google.apps.meet.v2beta.Space>;

                    /**
                     * Calls ConnectActiveConference.
                     * @param request ConnectActiveConferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectActiveConferenceResponse
                     */
                    public connectActiveConference(request: google.apps.meet.v2beta.IConnectActiveConferenceRequest, callback: google.apps.meet.v2beta.SpacesService.ConnectActiveConferenceCallback): void;

                    /**
                     * Calls ConnectActiveConference.
                     * @param request ConnectActiveConferenceRequest message or plain object
                     * @returns Promise
                     */
                    public connectActiveConference(request: google.apps.meet.v2beta.IConnectActiveConferenceRequest): Promise<google.apps.meet.v2beta.ConnectActiveConferenceResponse>;

                    /**
                     * Calls EndActiveConference.
                     * @param request EndActiveConferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public endActiveConference(request: google.apps.meet.v2beta.IEndActiveConferenceRequest, callback: google.apps.meet.v2beta.SpacesService.EndActiveConferenceCallback): void;

                    /**
                     * Calls EndActiveConference.
                     * @param request EndActiveConferenceRequest message or plain object
                     * @returns Promise
                     */
                    public endActiveConference(request: google.apps.meet.v2beta.IEndActiveConferenceRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateMember.
                     * @param request CreateMemberRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Member
                     */
                    public createMember(request: google.apps.meet.v2beta.ICreateMemberRequest, callback: google.apps.meet.v2beta.SpacesService.CreateMemberCallback): void;

                    /**
                     * Calls CreateMember.
                     * @param request CreateMemberRequest message or plain object
                     * @returns Promise
                     */
                    public createMember(request: google.apps.meet.v2beta.ICreateMemberRequest): Promise<google.apps.meet.v2beta.Member>;

                    /**
                     * Calls GetMember.
                     * @param request GetMemberRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Member
                     */
                    public getMember(request: google.apps.meet.v2beta.IGetMemberRequest, callback: google.apps.meet.v2beta.SpacesService.GetMemberCallback): void;

                    /**
                     * Calls GetMember.
                     * @param request GetMemberRequest message or plain object
                     * @returns Promise
                     */
                    public getMember(request: google.apps.meet.v2beta.IGetMemberRequest): Promise<google.apps.meet.v2beta.Member>;

                    /**
                     * Calls ListMembers.
                     * @param request ListMembersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMembersResponse
                     */
                    public listMembers(request: google.apps.meet.v2beta.IListMembersRequest, callback: google.apps.meet.v2beta.SpacesService.ListMembersCallback): void;

                    /**
                     * Calls ListMembers.
                     * @param request ListMembersRequest message or plain object
                     * @returns Promise
                     */
                    public listMembers(request: google.apps.meet.v2beta.IListMembersRequest): Promise<google.apps.meet.v2beta.ListMembersResponse>;

                    /**
                     * Calls DeleteMember.
                     * @param request DeleteMemberRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteMember(request: google.apps.meet.v2beta.IDeleteMemberRequest, callback: google.apps.meet.v2beta.SpacesService.DeleteMemberCallback): void;

                    /**
                     * Calls DeleteMember.
                     * @param request DeleteMemberRequest message or plain object
                     * @returns Promise
                     */
                    public deleteMember(request: google.apps.meet.v2beta.IDeleteMemberRequest): Promise<google.protobuf.Empty>;
                }

                namespace SpacesService {

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|createSpace}.
                     * @param error Error, if any
                     * @param [response] Space
                     */
                    type CreateSpaceCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Space) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|getSpace}.
                     * @param error Error, if any
                     * @param [response] Space
                     */
                    type GetSpaceCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Space) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|updateSpace}.
                     * @param error Error, if any
                     * @param [response] Space
                     */
                    type UpdateSpaceCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Space) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|connectActiveConference}.
                     * @param error Error, if any
                     * @param [response] ConnectActiveConferenceResponse
                     */
                    type ConnectActiveConferenceCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ConnectActiveConferenceResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|endActiveConference}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type EndActiveConferenceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|createMember}.
                     * @param error Error, if any
                     * @param [response] Member
                     */
                    type CreateMemberCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Member) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|getMember}.
                     * @param error Error, if any
                     * @param [response] Member
                     */
                    type GetMemberCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Member) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|listMembers}.
                     * @param error Error, if any
                     * @param [response] ListMembersResponse
                     */
                    type ListMembersCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListMembersResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.SpacesService|deleteMember}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteMemberCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Represents a ConferenceRecordsService */
                class ConferenceRecordsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ConferenceRecordsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ConferenceRecordsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ConferenceRecordsService;

                    /**
                     * Calls GetConferenceRecord.
                     * @param request GetConferenceRecordRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConferenceRecord
                     */
                    public getConferenceRecord(request: google.apps.meet.v2beta.IGetConferenceRecordRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.GetConferenceRecordCallback): void;

                    /**
                     * Calls GetConferenceRecord.
                     * @param request GetConferenceRecordRequest message or plain object
                     * @returns Promise
                     */
                    public getConferenceRecord(request: google.apps.meet.v2beta.IGetConferenceRecordRequest): Promise<google.apps.meet.v2beta.ConferenceRecord>;

                    /**
                     * Calls ListConferenceRecords.
                     * @param request ListConferenceRecordsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConferenceRecordsResponse
                     */
                    public listConferenceRecords(request: google.apps.meet.v2beta.IListConferenceRecordsRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.ListConferenceRecordsCallback): void;

                    /**
                     * Calls ListConferenceRecords.
                     * @param request ListConferenceRecordsRequest message or plain object
                     * @returns Promise
                     */
                    public listConferenceRecords(request: google.apps.meet.v2beta.IListConferenceRecordsRequest): Promise<google.apps.meet.v2beta.ListConferenceRecordsResponse>;

                    /**
                     * Calls GetParticipant.
                     * @param request GetParticipantRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Participant
                     */
                    public getParticipant(request: google.apps.meet.v2beta.IGetParticipantRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.GetParticipantCallback): void;

                    /**
                     * Calls GetParticipant.
                     * @param request GetParticipantRequest message or plain object
                     * @returns Promise
                     */
                    public getParticipant(request: google.apps.meet.v2beta.IGetParticipantRequest): Promise<google.apps.meet.v2beta.Participant>;

                    /**
                     * Calls ListParticipants.
                     * @param request ListParticipantsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListParticipantsResponse
                     */
                    public listParticipants(request: google.apps.meet.v2beta.IListParticipantsRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.ListParticipantsCallback): void;

                    /**
                     * Calls ListParticipants.
                     * @param request ListParticipantsRequest message or plain object
                     * @returns Promise
                     */
                    public listParticipants(request: google.apps.meet.v2beta.IListParticipantsRequest): Promise<google.apps.meet.v2beta.ListParticipantsResponse>;

                    /**
                     * Calls GetParticipantSession.
                     * @param request GetParticipantSessionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ParticipantSession
                     */
                    public getParticipantSession(request: google.apps.meet.v2beta.IGetParticipantSessionRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.GetParticipantSessionCallback): void;

                    /**
                     * Calls GetParticipantSession.
                     * @param request GetParticipantSessionRequest message or plain object
                     * @returns Promise
                     */
                    public getParticipantSession(request: google.apps.meet.v2beta.IGetParticipantSessionRequest): Promise<google.apps.meet.v2beta.ParticipantSession>;

                    /**
                     * Calls ListParticipantSessions.
                     * @param request ListParticipantSessionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListParticipantSessionsResponse
                     */
                    public listParticipantSessions(request: google.apps.meet.v2beta.IListParticipantSessionsRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.ListParticipantSessionsCallback): void;

                    /**
                     * Calls ListParticipantSessions.
                     * @param request ListParticipantSessionsRequest message or plain object
                     * @returns Promise
                     */
                    public listParticipantSessions(request: google.apps.meet.v2beta.IListParticipantSessionsRequest): Promise<google.apps.meet.v2beta.ListParticipantSessionsResponse>;

                    /**
                     * Calls GetRecording.
                     * @param request GetRecordingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recording
                     */
                    public getRecording(request: google.apps.meet.v2beta.IGetRecordingRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.GetRecordingCallback): void;

                    /**
                     * Calls GetRecording.
                     * @param request GetRecordingRequest message or plain object
                     * @returns Promise
                     */
                    public getRecording(request: google.apps.meet.v2beta.IGetRecordingRequest): Promise<google.apps.meet.v2beta.Recording>;

                    /**
                     * Calls ListRecordings.
                     * @param request ListRecordingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecordingsResponse
                     */
                    public listRecordings(request: google.apps.meet.v2beta.IListRecordingsRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.ListRecordingsCallback): void;

                    /**
                     * Calls ListRecordings.
                     * @param request ListRecordingsRequest message or plain object
                     * @returns Promise
                     */
                    public listRecordings(request: google.apps.meet.v2beta.IListRecordingsRequest): Promise<google.apps.meet.v2beta.ListRecordingsResponse>;

                    /**
                     * Calls GetTranscript.
                     * @param request GetTranscriptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Transcript
                     */
                    public getTranscript(request: google.apps.meet.v2beta.IGetTranscriptRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.GetTranscriptCallback): void;

                    /**
                     * Calls GetTranscript.
                     * @param request GetTranscriptRequest message or plain object
                     * @returns Promise
                     */
                    public getTranscript(request: google.apps.meet.v2beta.IGetTranscriptRequest): Promise<google.apps.meet.v2beta.Transcript>;

                    /**
                     * Calls ListTranscripts.
                     * @param request ListTranscriptsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTranscriptsResponse
                     */
                    public listTranscripts(request: google.apps.meet.v2beta.IListTranscriptsRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.ListTranscriptsCallback): void;

                    /**
                     * Calls ListTranscripts.
                     * @param request ListTranscriptsRequest message or plain object
                     * @returns Promise
                     */
                    public listTranscripts(request: google.apps.meet.v2beta.IListTranscriptsRequest): Promise<google.apps.meet.v2beta.ListTranscriptsResponse>;

                    /**
                     * Calls GetTranscriptEntry.
                     * @param request GetTranscriptEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TranscriptEntry
                     */
                    public getTranscriptEntry(request: google.apps.meet.v2beta.IGetTranscriptEntryRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.GetTranscriptEntryCallback): void;

                    /**
                     * Calls GetTranscriptEntry.
                     * @param request GetTranscriptEntryRequest message or plain object
                     * @returns Promise
                     */
                    public getTranscriptEntry(request: google.apps.meet.v2beta.IGetTranscriptEntryRequest): Promise<google.apps.meet.v2beta.TranscriptEntry>;

                    /**
                     * Calls ListTranscriptEntries.
                     * @param request ListTranscriptEntriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTranscriptEntriesResponse
                     */
                    public listTranscriptEntries(request: google.apps.meet.v2beta.IListTranscriptEntriesRequest, callback: google.apps.meet.v2beta.ConferenceRecordsService.ListTranscriptEntriesCallback): void;

                    /**
                     * Calls ListTranscriptEntries.
                     * @param request ListTranscriptEntriesRequest message or plain object
                     * @returns Promise
                     */
                    public listTranscriptEntries(request: google.apps.meet.v2beta.IListTranscriptEntriesRequest): Promise<google.apps.meet.v2beta.ListTranscriptEntriesResponse>;
                }

                namespace ConferenceRecordsService {

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|getConferenceRecord}.
                     * @param error Error, if any
                     * @param [response] ConferenceRecord
                     */
                    type GetConferenceRecordCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ConferenceRecord) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|listConferenceRecords}.
                     * @param error Error, if any
                     * @param [response] ListConferenceRecordsResponse
                     */
                    type ListConferenceRecordsCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListConferenceRecordsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|getParticipant}.
                     * @param error Error, if any
                     * @param [response] Participant
                     */
                    type GetParticipantCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Participant) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|listParticipants}.
                     * @param error Error, if any
                     * @param [response] ListParticipantsResponse
                     */
                    type ListParticipantsCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListParticipantsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|getParticipantSession}.
                     * @param error Error, if any
                     * @param [response] ParticipantSession
                     */
                    type GetParticipantSessionCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ParticipantSession) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|listParticipantSessions}.
                     * @param error Error, if any
                     * @param [response] ListParticipantSessionsResponse
                     */
                    type ListParticipantSessionsCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListParticipantSessionsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|getRecording}.
                     * @param error Error, if any
                     * @param [response] Recording
                     */
                    type GetRecordingCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Recording) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|listRecordings}.
                     * @param error Error, if any
                     * @param [response] ListRecordingsResponse
                     */
                    type ListRecordingsCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListRecordingsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|getTranscript}.
                     * @param error Error, if any
                     * @param [response] Transcript
                     */
                    type GetTranscriptCallback = (error: (Error|null), response?: google.apps.meet.v2beta.Transcript) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|listTranscripts}.
                     * @param error Error, if any
                     * @param [response] ListTranscriptsResponse
                     */
                    type ListTranscriptsCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListTranscriptsResponse) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|getTranscriptEntry}.
                     * @param error Error, if any
                     * @param [response] TranscriptEntry
                     */
                    type GetTranscriptEntryCallback = (error: (Error|null), response?: google.apps.meet.v2beta.TranscriptEntry) => void;

                    /**
                     * Callback as used by {@link google.apps.meet.v2beta.ConferenceRecordsService|listTranscriptEntries}.
                     * @param error Error, if any
                     * @param [response] ListTranscriptEntriesResponse
                     */
                    type ListTranscriptEntriesCallback = (error: (Error|null), response?: google.apps.meet.v2beta.ListTranscriptEntriesResponse) => void;
                }

                /** Properties of a CreateSpaceRequest. */
                interface ICreateSpaceRequest {

                    /** CreateSpaceRequest space */
                    space?: (google.apps.meet.v2beta.ISpace|null);
                }

                /** Represents a CreateSpaceRequest. */
                class CreateSpaceRequest implements ICreateSpaceRequest {

                    /**
                     * Constructs a new CreateSpaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ICreateSpaceRequest);

                    /** CreateSpaceRequest space. */
                    public space?: (google.apps.meet.v2beta.ISpace|null);

                    /**
                     * Creates a new CreateSpaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSpaceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ICreateSpaceRequest): google.apps.meet.v2beta.CreateSpaceRequest;

                    /**
                     * Encodes the specified CreateSpaceRequest message. Does not implicitly {@link google.apps.meet.v2beta.CreateSpaceRequest.verify|verify} messages.
                     * @param message CreateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ICreateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSpaceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.CreateSpaceRequest.verify|verify} messages.
                     * @param message CreateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ICreateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSpaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.CreateSpaceRequest;

                    /**
                     * Decodes a CreateSpaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.CreateSpaceRequest;

                    /**
                     * Verifies a CreateSpaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSpaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSpaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.CreateSpaceRequest;

                    /**
                     * Creates a plain object from a CreateSpaceRequest message. Also converts values to other types if specified.
                     * @param message CreateSpaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.CreateSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSpaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSpaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSpaceRequest. */
                interface IGetSpaceRequest {

                    /** GetSpaceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSpaceRequest. */
                class GetSpaceRequest implements IGetSpaceRequest {

                    /**
                     * Constructs a new GetSpaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetSpaceRequest);

                    /** GetSpaceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSpaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSpaceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetSpaceRequest): google.apps.meet.v2beta.GetSpaceRequest;

                    /**
                     * Encodes the specified GetSpaceRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetSpaceRequest.verify|verify} messages.
                     * @param message GetSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSpaceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetSpaceRequest.verify|verify} messages.
                     * @param message GetSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSpaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetSpaceRequest;

                    /**
                     * Decodes a GetSpaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetSpaceRequest;

                    /**
                     * Verifies a GetSpaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSpaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSpaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetSpaceRequest;

                    /**
                     * Creates a plain object from a GetSpaceRequest message. Also converts values to other types if specified.
                     * @param message GetSpaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSpaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSpaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSpaceRequest. */
                interface IUpdateSpaceRequest {

                    /** UpdateSpaceRequest space */
                    space?: (google.apps.meet.v2beta.ISpace|null);

                    /** UpdateSpaceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSpaceRequest. */
                class UpdateSpaceRequest implements IUpdateSpaceRequest {

                    /**
                     * Constructs a new UpdateSpaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IUpdateSpaceRequest);

                    /** UpdateSpaceRequest space. */
                    public space?: (google.apps.meet.v2beta.ISpace|null);

                    /** UpdateSpaceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSpaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSpaceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IUpdateSpaceRequest): google.apps.meet.v2beta.UpdateSpaceRequest;

                    /**
                     * Encodes the specified UpdateSpaceRequest message. Does not implicitly {@link google.apps.meet.v2beta.UpdateSpaceRequest.verify|verify} messages.
                     * @param message UpdateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IUpdateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSpaceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.UpdateSpaceRequest.verify|verify} messages.
                     * @param message UpdateSpaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IUpdateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSpaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.UpdateSpaceRequest;

                    /**
                     * Decodes an UpdateSpaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSpaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.UpdateSpaceRequest;

                    /**
                     * Verifies an UpdateSpaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSpaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSpaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.UpdateSpaceRequest;

                    /**
                     * Creates a plain object from an UpdateSpaceRequest message. Also converts values to other types if specified.
                     * @param message UpdateSpaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.UpdateSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSpaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSpaceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectActiveConferenceRequest. */
                interface IConnectActiveConferenceRequest {

                    /** ConnectActiveConferenceRequest name */
                    name?: (string|null);

                    /** ConnectActiveConferenceRequest offer */
                    offer?: (string|null);
                }

                /** Represents a ConnectActiveConferenceRequest. */
                class ConnectActiveConferenceRequest implements IConnectActiveConferenceRequest {

                    /**
                     * Constructs a new ConnectActiveConferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IConnectActiveConferenceRequest);

                    /** ConnectActiveConferenceRequest name. */
                    public name: string;

                    /** ConnectActiveConferenceRequest offer. */
                    public offer: string;

                    /**
                     * Creates a new ConnectActiveConferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectActiveConferenceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IConnectActiveConferenceRequest): google.apps.meet.v2beta.ConnectActiveConferenceRequest;

                    /**
                     * Encodes the specified ConnectActiveConferenceRequest message. Does not implicitly {@link google.apps.meet.v2beta.ConnectActiveConferenceRequest.verify|verify} messages.
                     * @param message ConnectActiveConferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IConnectActiveConferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectActiveConferenceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ConnectActiveConferenceRequest.verify|verify} messages.
                     * @param message ConnectActiveConferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IConnectActiveConferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectActiveConferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectActiveConferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ConnectActiveConferenceRequest;

                    /**
                     * Decodes a ConnectActiveConferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectActiveConferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ConnectActiveConferenceRequest;

                    /**
                     * Verifies a ConnectActiveConferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectActiveConferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectActiveConferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ConnectActiveConferenceRequest;

                    /**
                     * Creates a plain object from a ConnectActiveConferenceRequest message. Also converts values to other types if specified.
                     * @param message ConnectActiveConferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ConnectActiveConferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectActiveConferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectActiveConferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectActiveConferenceResponse. */
                interface IConnectActiveConferenceResponse {

                    /** ConnectActiveConferenceResponse answer */
                    answer?: (string|null);

                    /** ConnectActiveConferenceResponse traceId */
                    traceId?: (string|null);
                }

                /** Represents a ConnectActiveConferenceResponse. */
                class ConnectActiveConferenceResponse implements IConnectActiveConferenceResponse {

                    /**
                     * Constructs a new ConnectActiveConferenceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IConnectActiveConferenceResponse);

                    /** ConnectActiveConferenceResponse answer. */
                    public answer: string;

                    /** ConnectActiveConferenceResponse traceId. */
                    public traceId: string;

                    /**
                     * Creates a new ConnectActiveConferenceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectActiveConferenceResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IConnectActiveConferenceResponse): google.apps.meet.v2beta.ConnectActiveConferenceResponse;

                    /**
                     * Encodes the specified ConnectActiveConferenceResponse message. Does not implicitly {@link google.apps.meet.v2beta.ConnectActiveConferenceResponse.verify|verify} messages.
                     * @param message ConnectActiveConferenceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IConnectActiveConferenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectActiveConferenceResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ConnectActiveConferenceResponse.verify|verify} messages.
                     * @param message ConnectActiveConferenceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IConnectActiveConferenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectActiveConferenceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectActiveConferenceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ConnectActiveConferenceResponse;

                    /**
                     * Decodes a ConnectActiveConferenceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectActiveConferenceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ConnectActiveConferenceResponse;

                    /**
                     * Verifies a ConnectActiveConferenceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectActiveConferenceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectActiveConferenceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ConnectActiveConferenceResponse;

                    /**
                     * Creates a plain object from a ConnectActiveConferenceResponse message. Also converts values to other types if specified.
                     * @param message ConnectActiveConferenceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ConnectActiveConferenceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectActiveConferenceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectActiveConferenceResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EndActiveConferenceRequest. */
                interface IEndActiveConferenceRequest {

                    /** EndActiveConferenceRequest name */
                    name?: (string|null);
                }

                /** Represents an EndActiveConferenceRequest. */
                class EndActiveConferenceRequest implements IEndActiveConferenceRequest {

                    /**
                     * Constructs a new EndActiveConferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IEndActiveConferenceRequest);

                    /** EndActiveConferenceRequest name. */
                    public name: string;

                    /**
                     * Creates a new EndActiveConferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndActiveConferenceRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IEndActiveConferenceRequest): google.apps.meet.v2beta.EndActiveConferenceRequest;

                    /**
                     * Encodes the specified EndActiveConferenceRequest message. Does not implicitly {@link google.apps.meet.v2beta.EndActiveConferenceRequest.verify|verify} messages.
                     * @param message EndActiveConferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IEndActiveConferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndActiveConferenceRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.EndActiveConferenceRequest.verify|verify} messages.
                     * @param message EndActiveConferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IEndActiveConferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndActiveConferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndActiveConferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.EndActiveConferenceRequest;

                    /**
                     * Decodes an EndActiveConferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndActiveConferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.EndActiveConferenceRequest;

                    /**
                     * Verifies an EndActiveConferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndActiveConferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndActiveConferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.EndActiveConferenceRequest;

                    /**
                     * Creates a plain object from an EndActiveConferenceRequest message. Also converts values to other types if specified.
                     * @param message EndActiveConferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.EndActiveConferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndActiveConferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EndActiveConferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateMemberRequest. */
                interface ICreateMemberRequest {

                    /** CreateMemberRequest parent */
                    parent?: (string|null);

                    /** CreateMemberRequest member */
                    member?: (google.apps.meet.v2beta.IMember|null);
                }

                /** Represents a CreateMemberRequest. */
                class CreateMemberRequest implements ICreateMemberRequest {

                    /**
                     * Constructs a new CreateMemberRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.ICreateMemberRequest);

                    /** CreateMemberRequest parent. */
                    public parent: string;

                    /** CreateMemberRequest member. */
                    public member?: (google.apps.meet.v2beta.IMember|null);

                    /**
                     * Creates a new CreateMemberRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMemberRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.ICreateMemberRequest): google.apps.meet.v2beta.CreateMemberRequest;

                    /**
                     * Encodes the specified CreateMemberRequest message. Does not implicitly {@link google.apps.meet.v2beta.CreateMemberRequest.verify|verify} messages.
                     * @param message CreateMemberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.ICreateMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMemberRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.CreateMemberRequest.verify|verify} messages.
                     * @param message CreateMemberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.ICreateMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMemberRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMemberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.CreateMemberRequest;

                    /**
                     * Decodes a CreateMemberRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMemberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.CreateMemberRequest;

                    /**
                     * Verifies a CreateMemberRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMemberRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMemberRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.CreateMemberRequest;

                    /**
                     * Creates a plain object from a CreateMemberRequest message. Also converts values to other types if specified.
                     * @param message CreateMemberRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.CreateMemberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMemberRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateMemberRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetMemberRequest. */
                interface IGetMemberRequest {

                    /** GetMemberRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMemberRequest. */
                class GetMemberRequest implements IGetMemberRequest {

                    /**
                     * Constructs a new GetMemberRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetMemberRequest);

                    /** GetMemberRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMemberRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMemberRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetMemberRequest): google.apps.meet.v2beta.GetMemberRequest;

                    /**
                     * Encodes the specified GetMemberRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetMemberRequest.verify|verify} messages.
                     * @param message GetMemberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMemberRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetMemberRequest.verify|verify} messages.
                     * @param message GetMemberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMemberRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMemberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetMemberRequest;

                    /**
                     * Decodes a GetMemberRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMemberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetMemberRequest;

                    /**
                     * Verifies a GetMemberRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMemberRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMemberRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetMemberRequest;

                    /**
                     * Creates a plain object from a GetMemberRequest message. Also converts values to other types if specified.
                     * @param message GetMemberRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetMemberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMemberRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetMemberRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMembersRequest. */
                interface IListMembersRequest {

                    /** ListMembersRequest parent */
                    parent?: (string|null);

                    /** ListMembersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMembersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListMembersRequest. */
                class ListMembersRequest implements IListMembersRequest {

                    /**
                     * Constructs a new ListMembersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListMembersRequest);

                    /** ListMembersRequest parent. */
                    public parent: string;

                    /** ListMembersRequest pageSize. */
                    public pageSize: number;

                    /** ListMembersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListMembersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMembersRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListMembersRequest): google.apps.meet.v2beta.ListMembersRequest;

                    /**
                     * Encodes the specified ListMembersRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListMembersRequest.verify|verify} messages.
                     * @param message ListMembersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMembersRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListMembersRequest.verify|verify} messages.
                     * @param message ListMembersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMembersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMembersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListMembersRequest;

                    /**
                     * Decodes a ListMembersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMembersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListMembersRequest;

                    /**
                     * Verifies a ListMembersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMembersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMembersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListMembersRequest;

                    /**
                     * Creates a plain object from a ListMembersRequest message. Also converts values to other types if specified.
                     * @param message ListMembersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMembersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMembersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMembersResponse. */
                interface IListMembersResponse {

                    /** ListMembersResponse members */
                    members?: (google.apps.meet.v2beta.IMember[]|null);

                    /** ListMembersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListMembersResponse. */
                class ListMembersResponse implements IListMembersResponse {

                    /**
                     * Constructs a new ListMembersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListMembersResponse);

                    /** ListMembersResponse members. */
                    public members: google.apps.meet.v2beta.IMember[];

                    /** ListMembersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListMembersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMembersResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListMembersResponse): google.apps.meet.v2beta.ListMembersResponse;

                    /**
                     * Encodes the specified ListMembersResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListMembersResponse.verify|verify} messages.
                     * @param message ListMembersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMembersResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListMembersResponse.verify|verify} messages.
                     * @param message ListMembersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMembersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMembersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListMembersResponse;

                    /**
                     * Decodes a ListMembersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMembersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListMembersResponse;

                    /**
                     * Verifies a ListMembersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMembersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMembersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListMembersResponse;

                    /**
                     * Creates a plain object from a ListMembersResponse message. Also converts values to other types if specified.
                     * @param message ListMembersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMembersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMembersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteMemberRequest. */
                interface IDeleteMemberRequest {

                    /** DeleteMemberRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteMemberRequest. */
                class DeleteMemberRequest implements IDeleteMemberRequest {

                    /**
                     * Constructs a new DeleteMemberRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IDeleteMemberRequest);

                    /** DeleteMemberRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteMemberRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMemberRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IDeleteMemberRequest): google.apps.meet.v2beta.DeleteMemberRequest;

                    /**
                     * Encodes the specified DeleteMemberRequest message. Does not implicitly {@link google.apps.meet.v2beta.DeleteMemberRequest.verify|verify} messages.
                     * @param message DeleteMemberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IDeleteMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMemberRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.DeleteMemberRequest.verify|verify} messages.
                     * @param message DeleteMemberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IDeleteMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMemberRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMemberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.DeleteMemberRequest;

                    /**
                     * Decodes a DeleteMemberRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMemberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.DeleteMemberRequest;

                    /**
                     * Verifies a DeleteMemberRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMemberRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMemberRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.DeleteMemberRequest;

                    /**
                     * Creates a plain object from a DeleteMemberRequest message. Also converts values to other types if specified.
                     * @param message DeleteMemberRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.DeleteMemberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMemberRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteMemberRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConferenceRecordRequest. */
                interface IGetConferenceRecordRequest {

                    /** GetConferenceRecordRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConferenceRecordRequest. */
                class GetConferenceRecordRequest implements IGetConferenceRecordRequest {

                    /**
                     * Constructs a new GetConferenceRecordRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetConferenceRecordRequest);

                    /** GetConferenceRecordRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConferenceRecordRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConferenceRecordRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetConferenceRecordRequest): google.apps.meet.v2beta.GetConferenceRecordRequest;

                    /**
                     * Encodes the specified GetConferenceRecordRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetConferenceRecordRequest.verify|verify} messages.
                     * @param message GetConferenceRecordRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetConferenceRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConferenceRecordRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetConferenceRecordRequest.verify|verify} messages.
                     * @param message GetConferenceRecordRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetConferenceRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConferenceRecordRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConferenceRecordRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetConferenceRecordRequest;

                    /**
                     * Decodes a GetConferenceRecordRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConferenceRecordRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetConferenceRecordRequest;

                    /**
                     * Verifies a GetConferenceRecordRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConferenceRecordRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConferenceRecordRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetConferenceRecordRequest;

                    /**
                     * Creates a plain object from a GetConferenceRecordRequest message. Also converts values to other types if specified.
                     * @param message GetConferenceRecordRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetConferenceRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConferenceRecordRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConferenceRecordRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConferenceRecordsRequest. */
                interface IListConferenceRecordsRequest {

                    /** ListConferenceRecordsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConferenceRecordsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConferenceRecordsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListConferenceRecordsRequest. */
                class ListConferenceRecordsRequest implements IListConferenceRecordsRequest {

                    /**
                     * Constructs a new ListConferenceRecordsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListConferenceRecordsRequest);

                    /** ListConferenceRecordsRequest pageSize. */
                    public pageSize: number;

                    /** ListConferenceRecordsRequest pageToken. */
                    public pageToken: string;

                    /** ListConferenceRecordsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListConferenceRecordsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConferenceRecordsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListConferenceRecordsRequest): google.apps.meet.v2beta.ListConferenceRecordsRequest;

                    /**
                     * Encodes the specified ListConferenceRecordsRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListConferenceRecordsRequest.verify|verify} messages.
                     * @param message ListConferenceRecordsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListConferenceRecordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConferenceRecordsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListConferenceRecordsRequest.verify|verify} messages.
                     * @param message ListConferenceRecordsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListConferenceRecordsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConferenceRecordsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConferenceRecordsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListConferenceRecordsRequest;

                    /**
                     * Decodes a ListConferenceRecordsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConferenceRecordsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListConferenceRecordsRequest;

                    /**
                     * Verifies a ListConferenceRecordsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConferenceRecordsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConferenceRecordsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListConferenceRecordsRequest;

                    /**
                     * Creates a plain object from a ListConferenceRecordsRequest message. Also converts values to other types if specified.
                     * @param message ListConferenceRecordsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListConferenceRecordsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConferenceRecordsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConferenceRecordsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConferenceRecordsResponse. */
                interface IListConferenceRecordsResponse {

                    /** ListConferenceRecordsResponse conferenceRecords */
                    conferenceRecords?: (google.apps.meet.v2beta.IConferenceRecord[]|null);

                    /** ListConferenceRecordsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConferenceRecordsResponse. */
                class ListConferenceRecordsResponse implements IListConferenceRecordsResponse {

                    /**
                     * Constructs a new ListConferenceRecordsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListConferenceRecordsResponse);

                    /** ListConferenceRecordsResponse conferenceRecords. */
                    public conferenceRecords: google.apps.meet.v2beta.IConferenceRecord[];

                    /** ListConferenceRecordsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConferenceRecordsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConferenceRecordsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListConferenceRecordsResponse): google.apps.meet.v2beta.ListConferenceRecordsResponse;

                    /**
                     * Encodes the specified ListConferenceRecordsResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListConferenceRecordsResponse.verify|verify} messages.
                     * @param message ListConferenceRecordsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListConferenceRecordsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConferenceRecordsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListConferenceRecordsResponse.verify|verify} messages.
                     * @param message ListConferenceRecordsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListConferenceRecordsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConferenceRecordsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConferenceRecordsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListConferenceRecordsResponse;

                    /**
                     * Decodes a ListConferenceRecordsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConferenceRecordsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListConferenceRecordsResponse;

                    /**
                     * Verifies a ListConferenceRecordsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConferenceRecordsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConferenceRecordsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListConferenceRecordsResponse;

                    /**
                     * Creates a plain object from a ListConferenceRecordsResponse message. Also converts values to other types if specified.
                     * @param message ListConferenceRecordsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListConferenceRecordsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConferenceRecordsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConferenceRecordsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetParticipantRequest. */
                interface IGetParticipantRequest {

                    /** GetParticipantRequest name */
                    name?: (string|null);
                }

                /** Represents a GetParticipantRequest. */
                class GetParticipantRequest implements IGetParticipantRequest {

                    /**
                     * Constructs a new GetParticipantRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetParticipantRequest);

                    /** GetParticipantRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetParticipantRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetParticipantRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetParticipantRequest): google.apps.meet.v2beta.GetParticipantRequest;

                    /**
                     * Encodes the specified GetParticipantRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetParticipantRequest.verify|verify} messages.
                     * @param message GetParticipantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetParticipantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetParticipantRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetParticipantRequest.verify|verify} messages.
                     * @param message GetParticipantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetParticipantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetParticipantRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetParticipantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetParticipantRequest;

                    /**
                     * Decodes a GetParticipantRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetParticipantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetParticipantRequest;

                    /**
                     * Verifies a GetParticipantRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetParticipantRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetParticipantRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetParticipantRequest;

                    /**
                     * Creates a plain object from a GetParticipantRequest message. Also converts values to other types if specified.
                     * @param message GetParticipantRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetParticipantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetParticipantRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetParticipantRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantsRequest. */
                interface IListParticipantsRequest {

                    /** ListParticipantsRequest parent */
                    parent?: (string|null);

                    /** ListParticipantsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListParticipantsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListParticipantsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListParticipantsRequest. */
                class ListParticipantsRequest implements IListParticipantsRequest {

                    /**
                     * Constructs a new ListParticipantsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListParticipantsRequest);

                    /** ListParticipantsRequest parent. */
                    public parent: string;

                    /** ListParticipantsRequest pageSize. */
                    public pageSize: number;

                    /** ListParticipantsRequest pageToken. */
                    public pageToken: string;

                    /** ListParticipantsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListParticipantsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListParticipantsRequest): google.apps.meet.v2beta.ListParticipantsRequest;

                    /**
                     * Encodes the specified ListParticipantsRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantsRequest.verify|verify} messages.
                     * @param message ListParticipantsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListParticipantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantsRequest.verify|verify} messages.
                     * @param message ListParticipantsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListParticipantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListParticipantsRequest;

                    /**
                     * Decodes a ListParticipantsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListParticipantsRequest;

                    /**
                     * Verifies a ListParticipantsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListParticipantsRequest;

                    /**
                     * Creates a plain object from a ListParticipantsRequest message. Also converts values to other types if specified.
                     * @param message ListParticipantsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListParticipantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantsResponse. */
                interface IListParticipantsResponse {

                    /** ListParticipantsResponse participants */
                    participants?: (google.apps.meet.v2beta.IParticipant[]|null);

                    /** ListParticipantsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListParticipantsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListParticipantsResponse. */
                class ListParticipantsResponse implements IListParticipantsResponse {

                    /**
                     * Constructs a new ListParticipantsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListParticipantsResponse);

                    /** ListParticipantsResponse participants. */
                    public participants: google.apps.meet.v2beta.IParticipant[];

                    /** ListParticipantsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListParticipantsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListParticipantsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListParticipantsResponse): google.apps.meet.v2beta.ListParticipantsResponse;

                    /**
                     * Encodes the specified ListParticipantsResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantsResponse.verify|verify} messages.
                     * @param message ListParticipantsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListParticipantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantsResponse.verify|verify} messages.
                     * @param message ListParticipantsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListParticipantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListParticipantsResponse;

                    /**
                     * Decodes a ListParticipantsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListParticipantsResponse;

                    /**
                     * Verifies a ListParticipantsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListParticipantsResponse;

                    /**
                     * Creates a plain object from a ListParticipantsResponse message. Also converts values to other types if specified.
                     * @param message ListParticipantsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListParticipantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetParticipantSessionRequest. */
                interface IGetParticipantSessionRequest {

                    /** GetParticipantSessionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetParticipantSessionRequest. */
                class GetParticipantSessionRequest implements IGetParticipantSessionRequest {

                    /**
                     * Constructs a new GetParticipantSessionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetParticipantSessionRequest);

                    /** GetParticipantSessionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetParticipantSessionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetParticipantSessionRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetParticipantSessionRequest): google.apps.meet.v2beta.GetParticipantSessionRequest;

                    /**
                     * Encodes the specified GetParticipantSessionRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetParticipantSessionRequest.verify|verify} messages.
                     * @param message GetParticipantSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetParticipantSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetParticipantSessionRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetParticipantSessionRequest.verify|verify} messages.
                     * @param message GetParticipantSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetParticipantSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetParticipantSessionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetParticipantSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetParticipantSessionRequest;

                    /**
                     * Decodes a GetParticipantSessionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetParticipantSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetParticipantSessionRequest;

                    /**
                     * Verifies a GetParticipantSessionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetParticipantSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetParticipantSessionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetParticipantSessionRequest;

                    /**
                     * Creates a plain object from a GetParticipantSessionRequest message. Also converts values to other types if specified.
                     * @param message GetParticipantSessionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetParticipantSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetParticipantSessionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetParticipantSessionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantSessionsRequest. */
                interface IListParticipantSessionsRequest {

                    /** ListParticipantSessionsRequest parent */
                    parent?: (string|null);

                    /** ListParticipantSessionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListParticipantSessionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListParticipantSessionsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListParticipantSessionsRequest. */
                class ListParticipantSessionsRequest implements IListParticipantSessionsRequest {

                    /**
                     * Constructs a new ListParticipantSessionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListParticipantSessionsRequest);

                    /** ListParticipantSessionsRequest parent. */
                    public parent: string;

                    /** ListParticipantSessionsRequest pageSize. */
                    public pageSize: number;

                    /** ListParticipantSessionsRequest pageToken. */
                    public pageToken: string;

                    /** ListParticipantSessionsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListParticipantSessionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantSessionsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListParticipantSessionsRequest): google.apps.meet.v2beta.ListParticipantSessionsRequest;

                    /**
                     * Encodes the specified ListParticipantSessionsRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantSessionsRequest.verify|verify} messages.
                     * @param message ListParticipantSessionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListParticipantSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantSessionsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantSessionsRequest.verify|verify} messages.
                     * @param message ListParticipantSessionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListParticipantSessionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantSessionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantSessionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListParticipantSessionsRequest;

                    /**
                     * Decodes a ListParticipantSessionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantSessionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListParticipantSessionsRequest;

                    /**
                     * Verifies a ListParticipantSessionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantSessionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantSessionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListParticipantSessionsRequest;

                    /**
                     * Creates a plain object from a ListParticipantSessionsRequest message. Also converts values to other types if specified.
                     * @param message ListParticipantSessionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListParticipantSessionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantSessionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantSessionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListParticipantSessionsResponse. */
                interface IListParticipantSessionsResponse {

                    /** ListParticipantSessionsResponse participantSessions */
                    participantSessions?: (google.apps.meet.v2beta.IParticipantSession[]|null);

                    /** ListParticipantSessionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListParticipantSessionsResponse. */
                class ListParticipantSessionsResponse implements IListParticipantSessionsResponse {

                    /**
                     * Constructs a new ListParticipantSessionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListParticipantSessionsResponse);

                    /** ListParticipantSessionsResponse participantSessions. */
                    public participantSessions: google.apps.meet.v2beta.IParticipantSession[];

                    /** ListParticipantSessionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListParticipantSessionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListParticipantSessionsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListParticipantSessionsResponse): google.apps.meet.v2beta.ListParticipantSessionsResponse;

                    /**
                     * Encodes the specified ListParticipantSessionsResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantSessionsResponse.verify|verify} messages.
                     * @param message ListParticipantSessionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListParticipantSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListParticipantSessionsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListParticipantSessionsResponse.verify|verify} messages.
                     * @param message ListParticipantSessionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListParticipantSessionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListParticipantSessionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListParticipantSessionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListParticipantSessionsResponse;

                    /**
                     * Decodes a ListParticipantSessionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListParticipantSessionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListParticipantSessionsResponse;

                    /**
                     * Verifies a ListParticipantSessionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListParticipantSessionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListParticipantSessionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListParticipantSessionsResponse;

                    /**
                     * Creates a plain object from a ListParticipantSessionsResponse message. Also converts values to other types if specified.
                     * @param message ListParticipantSessionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListParticipantSessionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListParticipantSessionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListParticipantSessionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecordingRequest. */
                interface IGetRecordingRequest {

                    /** GetRecordingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecordingRequest. */
                class GetRecordingRequest implements IGetRecordingRequest {

                    /**
                     * Constructs a new GetRecordingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetRecordingRequest);

                    /** GetRecordingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecordingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecordingRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetRecordingRequest): google.apps.meet.v2beta.GetRecordingRequest;

                    /**
                     * Encodes the specified GetRecordingRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetRecordingRequest.verify|verify} messages.
                     * @param message GetRecordingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecordingRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetRecordingRequest.verify|verify} messages.
                     * @param message GetRecordingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetRecordingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecordingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecordingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetRecordingRequest;

                    /**
                     * Decodes a GetRecordingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecordingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetRecordingRequest;

                    /**
                     * Verifies a GetRecordingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecordingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecordingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetRecordingRequest;

                    /**
                     * Creates a plain object from a GetRecordingRequest message. Also converts values to other types if specified.
                     * @param message GetRecordingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetRecordingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecordingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecordingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecordingsRequest. */
                interface IListRecordingsRequest {

                    /** ListRecordingsRequest parent */
                    parent?: (string|null);

                    /** ListRecordingsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecordingsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRecordingsRequest. */
                class ListRecordingsRequest implements IListRecordingsRequest {

                    /**
                     * Constructs a new ListRecordingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListRecordingsRequest);

                    /** ListRecordingsRequest parent. */
                    public parent: string;

                    /** ListRecordingsRequest pageSize. */
                    public pageSize: number;

                    /** ListRecordingsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRecordingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecordingsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListRecordingsRequest): google.apps.meet.v2beta.ListRecordingsRequest;

                    /**
                     * Encodes the specified ListRecordingsRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListRecordingsRequest.verify|verify} messages.
                     * @param message ListRecordingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListRecordingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecordingsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListRecordingsRequest.verify|verify} messages.
                     * @param message ListRecordingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListRecordingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecordingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecordingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListRecordingsRequest;

                    /**
                     * Decodes a ListRecordingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecordingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListRecordingsRequest;

                    /**
                     * Verifies a ListRecordingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecordingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecordingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListRecordingsRequest;

                    /**
                     * Creates a plain object from a ListRecordingsRequest message. Also converts values to other types if specified.
                     * @param message ListRecordingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListRecordingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecordingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecordingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecordingsResponse. */
                interface IListRecordingsResponse {

                    /** ListRecordingsResponse recordings */
                    recordings?: (google.apps.meet.v2beta.IRecording[]|null);

                    /** ListRecordingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecordingsResponse. */
                class ListRecordingsResponse implements IListRecordingsResponse {

                    /**
                     * Constructs a new ListRecordingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListRecordingsResponse);

                    /** ListRecordingsResponse recordings. */
                    public recordings: google.apps.meet.v2beta.IRecording[];

                    /** ListRecordingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecordingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecordingsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListRecordingsResponse): google.apps.meet.v2beta.ListRecordingsResponse;

                    /**
                     * Encodes the specified ListRecordingsResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListRecordingsResponse.verify|verify} messages.
                     * @param message ListRecordingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListRecordingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecordingsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListRecordingsResponse.verify|verify} messages.
                     * @param message ListRecordingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListRecordingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecordingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecordingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListRecordingsResponse;

                    /**
                     * Decodes a ListRecordingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecordingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListRecordingsResponse;

                    /**
                     * Verifies a ListRecordingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecordingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecordingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListRecordingsResponse;

                    /**
                     * Creates a plain object from a ListRecordingsResponse message. Also converts values to other types if specified.
                     * @param message ListRecordingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListRecordingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecordingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecordingsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTranscriptRequest. */
                interface IGetTranscriptRequest {

                    /** GetTranscriptRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTranscriptRequest. */
                class GetTranscriptRequest implements IGetTranscriptRequest {

                    /**
                     * Constructs a new GetTranscriptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetTranscriptRequest);

                    /** GetTranscriptRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTranscriptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTranscriptRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetTranscriptRequest): google.apps.meet.v2beta.GetTranscriptRequest;

                    /**
                     * Encodes the specified GetTranscriptRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetTranscriptRequest.verify|verify} messages.
                     * @param message GetTranscriptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetTranscriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTranscriptRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetTranscriptRequest.verify|verify} messages.
                     * @param message GetTranscriptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetTranscriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTranscriptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTranscriptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetTranscriptRequest;

                    /**
                     * Decodes a GetTranscriptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTranscriptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetTranscriptRequest;

                    /**
                     * Verifies a GetTranscriptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTranscriptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTranscriptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetTranscriptRequest;

                    /**
                     * Creates a plain object from a GetTranscriptRequest message. Also converts values to other types if specified.
                     * @param message GetTranscriptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetTranscriptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTranscriptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTranscriptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptsRequest. */
                interface IListTranscriptsRequest {

                    /** ListTranscriptsRequest parent */
                    parent?: (string|null);

                    /** ListTranscriptsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTranscriptsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTranscriptsRequest. */
                class ListTranscriptsRequest implements IListTranscriptsRequest {

                    /**
                     * Constructs a new ListTranscriptsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListTranscriptsRequest);

                    /** ListTranscriptsRequest parent. */
                    public parent: string;

                    /** ListTranscriptsRequest pageSize. */
                    public pageSize: number;

                    /** ListTranscriptsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTranscriptsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptsRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListTranscriptsRequest): google.apps.meet.v2beta.ListTranscriptsRequest;

                    /**
                     * Encodes the specified ListTranscriptsRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptsRequest.verify|verify} messages.
                     * @param message ListTranscriptsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListTranscriptsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptsRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptsRequest.verify|verify} messages.
                     * @param message ListTranscriptsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListTranscriptsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListTranscriptsRequest;

                    /**
                     * Decodes a ListTranscriptsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListTranscriptsRequest;

                    /**
                     * Verifies a ListTranscriptsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListTranscriptsRequest;

                    /**
                     * Creates a plain object from a ListTranscriptsRequest message. Also converts values to other types if specified.
                     * @param message ListTranscriptsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListTranscriptsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptsResponse. */
                interface IListTranscriptsResponse {

                    /** ListTranscriptsResponse transcripts */
                    transcripts?: (google.apps.meet.v2beta.ITranscript[]|null);

                    /** ListTranscriptsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTranscriptsResponse. */
                class ListTranscriptsResponse implements IListTranscriptsResponse {

                    /**
                     * Constructs a new ListTranscriptsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListTranscriptsResponse);

                    /** ListTranscriptsResponse transcripts. */
                    public transcripts: google.apps.meet.v2beta.ITranscript[];

                    /** ListTranscriptsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTranscriptsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptsResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListTranscriptsResponse): google.apps.meet.v2beta.ListTranscriptsResponse;

                    /**
                     * Encodes the specified ListTranscriptsResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptsResponse.verify|verify} messages.
                     * @param message ListTranscriptsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListTranscriptsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptsResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptsResponse.verify|verify} messages.
                     * @param message ListTranscriptsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListTranscriptsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListTranscriptsResponse;

                    /**
                     * Decodes a ListTranscriptsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListTranscriptsResponse;

                    /**
                     * Verifies a ListTranscriptsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListTranscriptsResponse;

                    /**
                     * Creates a plain object from a ListTranscriptsResponse message. Also converts values to other types if specified.
                     * @param message ListTranscriptsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListTranscriptsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTranscriptEntryRequest. */
                interface IGetTranscriptEntryRequest {

                    /** GetTranscriptEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTranscriptEntryRequest. */
                class GetTranscriptEntryRequest implements IGetTranscriptEntryRequest {

                    /**
                     * Constructs a new GetTranscriptEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IGetTranscriptEntryRequest);

                    /** GetTranscriptEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTranscriptEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTranscriptEntryRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IGetTranscriptEntryRequest): google.apps.meet.v2beta.GetTranscriptEntryRequest;

                    /**
                     * Encodes the specified GetTranscriptEntryRequest message. Does not implicitly {@link google.apps.meet.v2beta.GetTranscriptEntryRequest.verify|verify} messages.
                     * @param message GetTranscriptEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IGetTranscriptEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTranscriptEntryRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.GetTranscriptEntryRequest.verify|verify} messages.
                     * @param message GetTranscriptEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IGetTranscriptEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTranscriptEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTranscriptEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.GetTranscriptEntryRequest;

                    /**
                     * Decodes a GetTranscriptEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTranscriptEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.GetTranscriptEntryRequest;

                    /**
                     * Verifies a GetTranscriptEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTranscriptEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTranscriptEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.GetTranscriptEntryRequest;

                    /**
                     * Creates a plain object from a GetTranscriptEntryRequest message. Also converts values to other types if specified.
                     * @param message GetTranscriptEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.GetTranscriptEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTranscriptEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTranscriptEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptEntriesRequest. */
                interface IListTranscriptEntriesRequest {

                    /** ListTranscriptEntriesRequest parent */
                    parent?: (string|null);

                    /** ListTranscriptEntriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTranscriptEntriesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTranscriptEntriesRequest. */
                class ListTranscriptEntriesRequest implements IListTranscriptEntriesRequest {

                    /**
                     * Constructs a new ListTranscriptEntriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListTranscriptEntriesRequest);

                    /** ListTranscriptEntriesRequest parent. */
                    public parent: string;

                    /** ListTranscriptEntriesRequest pageSize. */
                    public pageSize: number;

                    /** ListTranscriptEntriesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTranscriptEntriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptEntriesRequest instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListTranscriptEntriesRequest): google.apps.meet.v2beta.ListTranscriptEntriesRequest;

                    /**
                     * Encodes the specified ListTranscriptEntriesRequest message. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptEntriesRequest.verify|verify} messages.
                     * @param message ListTranscriptEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListTranscriptEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptEntriesRequest message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptEntriesRequest.verify|verify} messages.
                     * @param message ListTranscriptEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListTranscriptEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptEntriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListTranscriptEntriesRequest;

                    /**
                     * Decodes a ListTranscriptEntriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListTranscriptEntriesRequest;

                    /**
                     * Verifies a ListTranscriptEntriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptEntriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptEntriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListTranscriptEntriesRequest;

                    /**
                     * Creates a plain object from a ListTranscriptEntriesRequest message. Also converts values to other types if specified.
                     * @param message ListTranscriptEntriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListTranscriptEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptEntriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptEntriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTranscriptEntriesResponse. */
                interface IListTranscriptEntriesResponse {

                    /** ListTranscriptEntriesResponse transcriptEntries */
                    transcriptEntries?: (google.apps.meet.v2beta.ITranscriptEntry[]|null);

                    /** ListTranscriptEntriesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTranscriptEntriesResponse. */
                class ListTranscriptEntriesResponse implements IListTranscriptEntriesResponse {

                    /**
                     * Constructs a new ListTranscriptEntriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.meet.v2beta.IListTranscriptEntriesResponse);

                    /** ListTranscriptEntriesResponse transcriptEntries. */
                    public transcriptEntries: google.apps.meet.v2beta.ITranscriptEntry[];

                    /** ListTranscriptEntriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTranscriptEntriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTranscriptEntriesResponse instance
                     */
                    public static create(properties?: google.apps.meet.v2beta.IListTranscriptEntriesResponse): google.apps.meet.v2beta.ListTranscriptEntriesResponse;

                    /**
                     * Encodes the specified ListTranscriptEntriesResponse message. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptEntriesResponse.verify|verify} messages.
                     * @param message ListTranscriptEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.meet.v2beta.IListTranscriptEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTranscriptEntriesResponse message, length delimited. Does not implicitly {@link google.apps.meet.v2beta.ListTranscriptEntriesResponse.verify|verify} messages.
                     * @param message ListTranscriptEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.meet.v2beta.IListTranscriptEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTranscriptEntriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTranscriptEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.meet.v2beta.ListTranscriptEntriesResponse;

                    /**
                     * Decodes a ListTranscriptEntriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTranscriptEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.meet.v2beta.ListTranscriptEntriesResponse;

                    /**
                     * Verifies a ListTranscriptEntriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTranscriptEntriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTranscriptEntriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.meet.v2beta.ListTranscriptEntriesResponse;

                    /**
                     * Creates a plain object from a ListTranscriptEntriesResponse message. Also converts values to other types if specified.
                     * @param message ListTranscriptEntriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.meet.v2beta.ListTranscriptEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTranscriptEntriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTranscriptEntriesResponse
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
