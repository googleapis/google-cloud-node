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

        /** Namespace eventarc. */
        namespace eventarc {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Channel. */
                interface IChannel {

                    /** Channel name */
                    name?: (string|null);

                    /** Channel uid */
                    uid?: (string|null);

                    /** Channel createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Channel updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Channel provider */
                    provider?: (string|null);

                    /** Channel pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** Channel state */
                    state?: (google.cloud.eventarc.v1.Channel.State|keyof typeof google.cloud.eventarc.v1.Channel.State|null);

                    /** Channel activationToken */
                    activationToken?: (string|null);

                    /** Channel cryptoKeyName */
                    cryptoKeyName?: (string|null);

                    /** Channel satisfiesPzs */
                    satisfiesPzs?: (boolean|null);
                }

                /** Represents a Channel. */
                class Channel implements IChannel {

                    /**
                     * Constructs a new Channel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IChannel);

                    /** Channel name. */
                    public name: string;

                    /** Channel uid. */
                    public uid: string;

                    /** Channel createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Channel updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Channel provider. */
                    public provider: string;

                    /** Channel pubsubTopic. */
                    public pubsubTopic?: (string|null);

                    /** Channel state. */
                    public state: (google.cloud.eventarc.v1.Channel.State|keyof typeof google.cloud.eventarc.v1.Channel.State);

                    /** Channel activationToken. */
                    public activationToken: string;

                    /** Channel cryptoKeyName. */
                    public cryptoKeyName: string;

                    /** Channel satisfiesPzs. */
                    public satisfiesPzs: boolean;

                    /** Channel transport. */
                    public transport?: "pubsubTopic";

                    /**
                     * Creates a new Channel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Channel instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IChannel): google.cloud.eventarc.v1.Channel;

                    /**
                     * Encodes the specified Channel message. Does not implicitly {@link google.cloud.eventarc.v1.Channel.verify|verify} messages.
                     * @param message Channel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Channel message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Channel.verify|verify} messages.
                     * @param message Channel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Channel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Channel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Channel;

                    /**
                     * Decodes a Channel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Channel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Channel;

                    /**
                     * Verifies a Channel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Channel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Channel
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Channel;

                    /**
                     * Creates a plain object from a Channel message. Also converts values to other types if specified.
                     * @param message Channel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Channel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Channel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Channel {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        ACTIVE = 2,
                        INACTIVE = 3
                    }
                }

                /** Properties of a ChannelConnection. */
                interface IChannelConnection {

                    /** ChannelConnection name */
                    name?: (string|null);

                    /** ChannelConnection uid */
                    uid?: (string|null);

                    /** ChannelConnection channel */
                    channel?: (string|null);

                    /** ChannelConnection createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelConnection updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelConnection activationToken */
                    activationToken?: (string|null);
                }

                /** Represents a ChannelConnection. */
                class ChannelConnection implements IChannelConnection {

                    /**
                     * Constructs a new ChannelConnection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IChannelConnection);

                    /** ChannelConnection name. */
                    public name: string;

                    /** ChannelConnection uid. */
                    public uid: string;

                    /** ChannelConnection channel. */
                    public channel: string;

                    /** ChannelConnection createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelConnection updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelConnection activationToken. */
                    public activationToken: string;

                    /**
                     * Creates a new ChannelConnection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChannelConnection instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IChannelConnection): google.cloud.eventarc.v1.ChannelConnection;

                    /**
                     * Encodes the specified ChannelConnection message. Does not implicitly {@link google.cloud.eventarc.v1.ChannelConnection.verify|verify} messages.
                     * @param message ChannelConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IChannelConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChannelConnection message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ChannelConnection.verify|verify} messages.
                     * @param message ChannelConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IChannelConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChannelConnection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChannelConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ChannelConnection;

                    /**
                     * Decodes a ChannelConnection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChannelConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ChannelConnection;

                    /**
                     * Verifies a ChannelConnection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChannelConnection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChannelConnection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ChannelConnection;

                    /**
                     * Creates a plain object from a ChannelConnection message. Also converts values to other types if specified.
                     * @param message ChannelConnection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ChannelConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChannelConnection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChannelConnection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Provider. */
                interface IProvider {

                    /** Provider name */
                    name?: (string|null);

                    /** Provider displayName */
                    displayName?: (string|null);

                    /** Provider eventTypes */
                    eventTypes?: (google.cloud.eventarc.v1.IEventType[]|null);
                }

                /** Represents a Provider. */
                class Provider implements IProvider {

                    /**
                     * Constructs a new Provider.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IProvider);

                    /** Provider name. */
                    public name: string;

                    /** Provider displayName. */
                    public displayName: string;

                    /** Provider eventTypes. */
                    public eventTypes: google.cloud.eventarc.v1.IEventType[];

                    /**
                     * Creates a new Provider instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Provider instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IProvider): google.cloud.eventarc.v1.Provider;

                    /**
                     * Encodes the specified Provider message. Does not implicitly {@link google.cloud.eventarc.v1.Provider.verify|verify} messages.
                     * @param message Provider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Provider message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Provider.verify|verify} messages.
                     * @param message Provider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Provider message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Provider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Provider;

                    /**
                     * Decodes a Provider message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Provider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Provider;

                    /**
                     * Verifies a Provider message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Provider message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Provider
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Provider;

                    /**
                     * Creates a plain object from a Provider message. Also converts values to other types if specified.
                     * @param message Provider
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Provider, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Provider to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Provider
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EventType. */
                interface IEventType {

                    /** EventType type */
                    type?: (string|null);

                    /** EventType description */
                    description?: (string|null);

                    /** EventType filteringAttributes */
                    filteringAttributes?: (google.cloud.eventarc.v1.IFilteringAttribute[]|null);

                    /** EventType eventSchemaUri */
                    eventSchemaUri?: (string|null);
                }

                /** Represents an EventType. */
                class EventType implements IEventType {

                    /**
                     * Constructs a new EventType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IEventType);

                    /** EventType type. */
                    public type: string;

                    /** EventType description. */
                    public description: string;

                    /** EventType filteringAttributes. */
                    public filteringAttributes: google.cloud.eventarc.v1.IFilteringAttribute[];

                    /** EventType eventSchemaUri. */
                    public eventSchemaUri: string;

                    /**
                     * Creates a new EventType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventType instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IEventType): google.cloud.eventarc.v1.EventType;

                    /**
                     * Encodes the specified EventType message. Does not implicitly {@link google.cloud.eventarc.v1.EventType.verify|verify} messages.
                     * @param message EventType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IEventType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventType message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.EventType.verify|verify} messages.
                     * @param message EventType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IEventType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.EventType;

                    /**
                     * Decodes an EventType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.EventType;

                    /**
                     * Verifies an EventType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.EventType;

                    /**
                     * Creates a plain object from an EventType message. Also converts values to other types if specified.
                     * @param message EventType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.EventType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EventType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FilteringAttribute. */
                interface IFilteringAttribute {

                    /** FilteringAttribute attribute */
                    attribute?: (string|null);

                    /** FilteringAttribute description */
                    description?: (string|null);

                    /** FilteringAttribute required */
                    required?: (boolean|null);

                    /** FilteringAttribute pathPatternSupported */
                    pathPatternSupported?: (boolean|null);
                }

                /** Represents a FilteringAttribute. */
                class FilteringAttribute implements IFilteringAttribute {

                    /**
                     * Constructs a new FilteringAttribute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IFilteringAttribute);

                    /** FilteringAttribute attribute. */
                    public attribute: string;

                    /** FilteringAttribute description. */
                    public description: string;

                    /** FilteringAttribute required. */
                    public required: boolean;

                    /** FilteringAttribute pathPatternSupported. */
                    public pathPatternSupported: boolean;

                    /**
                     * Creates a new FilteringAttribute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilteringAttribute instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IFilteringAttribute): google.cloud.eventarc.v1.FilteringAttribute;

                    /**
                     * Encodes the specified FilteringAttribute message. Does not implicitly {@link google.cloud.eventarc.v1.FilteringAttribute.verify|verify} messages.
                     * @param message FilteringAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IFilteringAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilteringAttribute message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.FilteringAttribute.verify|verify} messages.
                     * @param message FilteringAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IFilteringAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilteringAttribute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilteringAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.FilteringAttribute;

                    /**
                     * Decodes a FilteringAttribute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilteringAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.FilteringAttribute;

                    /**
                     * Verifies a FilteringAttribute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilteringAttribute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilteringAttribute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.FilteringAttribute;

                    /**
                     * Creates a plain object from a FilteringAttribute message. Also converts values to other types if specified.
                     * @param message FilteringAttribute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.FilteringAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilteringAttribute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FilteringAttribute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Enrollment. */
                interface IEnrollment {

                    /** Enrollment name */
                    name?: (string|null);

                    /** Enrollment uid */
                    uid?: (string|null);

                    /** Enrollment etag */
                    etag?: (string|null);

                    /** Enrollment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Enrollment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Enrollment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Enrollment annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Enrollment displayName */
                    displayName?: (string|null);

                    /** Enrollment celMatch */
                    celMatch?: (string|null);

                    /** Enrollment messageBus */
                    messageBus?: (string|null);

                    /** Enrollment destination */
                    destination?: (string|null);
                }

                /** Represents an Enrollment. */
                class Enrollment implements IEnrollment {

                    /**
                     * Constructs a new Enrollment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IEnrollment);

                    /** Enrollment name. */
                    public name: string;

                    /** Enrollment uid. */
                    public uid: string;

                    /** Enrollment etag. */
                    public etag: string;

                    /** Enrollment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Enrollment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Enrollment labels. */
                    public labels: { [k: string]: string };

                    /** Enrollment annotations. */
                    public annotations: { [k: string]: string };

                    /** Enrollment displayName. */
                    public displayName: string;

                    /** Enrollment celMatch. */
                    public celMatch: string;

                    /** Enrollment messageBus. */
                    public messageBus: string;

                    /** Enrollment destination. */
                    public destination: string;

                    /**
                     * Creates a new Enrollment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Enrollment instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IEnrollment): google.cloud.eventarc.v1.Enrollment;

                    /**
                     * Encodes the specified Enrollment message. Does not implicitly {@link google.cloud.eventarc.v1.Enrollment.verify|verify} messages.
                     * @param message Enrollment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IEnrollment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Enrollment message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Enrollment.verify|verify} messages.
                     * @param message Enrollment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IEnrollment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Enrollment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Enrollment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Enrollment;

                    /**
                     * Decodes an Enrollment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Enrollment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Enrollment;

                    /**
                     * Verifies an Enrollment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Enrollment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Enrollment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Enrollment;

                    /**
                     * Creates a plain object from an Enrollment message. Also converts values to other types if specified.
                     * @param message Enrollment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Enrollment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Enrollment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Enrollment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an Eventarc */
                class Eventarc extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Eventarc service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Eventarc service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Eventarc;

                    /**
                     * Calls GetTrigger.
                     * @param request GetTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Trigger
                     */
                    public getTrigger(request: google.cloud.eventarc.v1.IGetTriggerRequest, callback: google.cloud.eventarc.v1.Eventarc.GetTriggerCallback): void;

                    /**
                     * Calls GetTrigger.
                     * @param request GetTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public getTrigger(request: google.cloud.eventarc.v1.IGetTriggerRequest): Promise<google.cloud.eventarc.v1.Trigger>;

                    /**
                     * Calls ListTriggers.
                     * @param request ListTriggersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTriggersResponse
                     */
                    public listTriggers(request: google.cloud.eventarc.v1.IListTriggersRequest, callback: google.cloud.eventarc.v1.Eventarc.ListTriggersCallback): void;

                    /**
                     * Calls ListTriggers.
                     * @param request ListTriggersRequest message or plain object
                     * @returns Promise
                     */
                    public listTriggers(request: google.cloud.eventarc.v1.IListTriggersRequest): Promise<google.cloud.eventarc.v1.ListTriggersResponse>;

                    /**
                     * Calls CreateTrigger.
                     * @param request CreateTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTrigger(request: google.cloud.eventarc.v1.ICreateTriggerRequest, callback: google.cloud.eventarc.v1.Eventarc.CreateTriggerCallback): void;

                    /**
                     * Calls CreateTrigger.
                     * @param request CreateTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public createTrigger(request: google.cloud.eventarc.v1.ICreateTriggerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTrigger.
                     * @param request UpdateTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTrigger(request: google.cloud.eventarc.v1.IUpdateTriggerRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdateTriggerCallback): void;

                    /**
                     * Calls UpdateTrigger.
                     * @param request UpdateTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public updateTrigger(request: google.cloud.eventarc.v1.IUpdateTriggerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTrigger.
                     * @param request DeleteTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTrigger(request: google.cloud.eventarc.v1.IDeleteTriggerRequest, callback: google.cloud.eventarc.v1.Eventarc.DeleteTriggerCallback): void;

                    /**
                     * Calls DeleteTrigger.
                     * @param request DeleteTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTrigger(request: google.cloud.eventarc.v1.IDeleteTriggerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetChannel.
                     * @param request GetChannelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Channel
                     */
                    public getChannel(request: google.cloud.eventarc.v1.IGetChannelRequest, callback: google.cloud.eventarc.v1.Eventarc.GetChannelCallback): void;

                    /**
                     * Calls GetChannel.
                     * @param request GetChannelRequest message or plain object
                     * @returns Promise
                     */
                    public getChannel(request: google.cloud.eventarc.v1.IGetChannelRequest): Promise<google.cloud.eventarc.v1.Channel>;

                    /**
                     * Calls ListChannels.
                     * @param request ListChannelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListChannelsResponse
                     */
                    public listChannels(request: google.cloud.eventarc.v1.IListChannelsRequest, callback: google.cloud.eventarc.v1.Eventarc.ListChannelsCallback): void;

                    /**
                     * Calls ListChannels.
                     * @param request ListChannelsRequest message or plain object
                     * @returns Promise
                     */
                    public listChannels(request: google.cloud.eventarc.v1.IListChannelsRequest): Promise<google.cloud.eventarc.v1.ListChannelsResponse>;

                    /**
                     * Calls CreateChannel.
                     * @param request CreateChannelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createChannel(request: google.cloud.eventarc.v1.ICreateChannelRequest, callback: google.cloud.eventarc.v1.Eventarc.CreateChannelCallback): void;

                    /**
                     * Calls CreateChannel.
                     * @param request CreateChannelRequest message or plain object
                     * @returns Promise
                     */
                    public createChannel(request: google.cloud.eventarc.v1.ICreateChannelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateChannel.
                     * @param request UpdateChannelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateChannel(request: google.cloud.eventarc.v1.IUpdateChannelRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdateChannelCallback): void;

                    /**
                     * Calls UpdateChannel.
                     * @param request UpdateChannelRequest message or plain object
                     * @returns Promise
                     */
                    public updateChannel(request: google.cloud.eventarc.v1.IUpdateChannelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteChannel.
                     * @param request DeleteChannelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteChannel(request: google.cloud.eventarc.v1.IDeleteChannelRequest, callback: google.cloud.eventarc.v1.Eventarc.DeleteChannelCallback): void;

                    /**
                     * Calls DeleteChannel.
                     * @param request DeleteChannelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteChannel(request: google.cloud.eventarc.v1.IDeleteChannelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetProvider.
                     * @param request GetProviderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Provider
                     */
                    public getProvider(request: google.cloud.eventarc.v1.IGetProviderRequest, callback: google.cloud.eventarc.v1.Eventarc.GetProviderCallback): void;

                    /**
                     * Calls GetProvider.
                     * @param request GetProviderRequest message or plain object
                     * @returns Promise
                     */
                    public getProvider(request: google.cloud.eventarc.v1.IGetProviderRequest): Promise<google.cloud.eventarc.v1.Provider>;

                    /**
                     * Calls ListProviders.
                     * @param request ListProvidersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProvidersResponse
                     */
                    public listProviders(request: google.cloud.eventarc.v1.IListProvidersRequest, callback: google.cloud.eventarc.v1.Eventarc.ListProvidersCallback): void;

                    /**
                     * Calls ListProviders.
                     * @param request ListProvidersRequest message or plain object
                     * @returns Promise
                     */
                    public listProviders(request: google.cloud.eventarc.v1.IListProvidersRequest): Promise<google.cloud.eventarc.v1.ListProvidersResponse>;

                    /**
                     * Calls GetChannelConnection.
                     * @param request GetChannelConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ChannelConnection
                     */
                    public getChannelConnection(request: google.cloud.eventarc.v1.IGetChannelConnectionRequest, callback: google.cloud.eventarc.v1.Eventarc.GetChannelConnectionCallback): void;

                    /**
                     * Calls GetChannelConnection.
                     * @param request GetChannelConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public getChannelConnection(request: google.cloud.eventarc.v1.IGetChannelConnectionRequest): Promise<google.cloud.eventarc.v1.ChannelConnection>;

                    /**
                     * Calls ListChannelConnections.
                     * @param request ListChannelConnectionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListChannelConnectionsResponse
                     */
                    public listChannelConnections(request: google.cloud.eventarc.v1.IListChannelConnectionsRequest, callback: google.cloud.eventarc.v1.Eventarc.ListChannelConnectionsCallback): void;

                    /**
                     * Calls ListChannelConnections.
                     * @param request ListChannelConnectionsRequest message or plain object
                     * @returns Promise
                     */
                    public listChannelConnections(request: google.cloud.eventarc.v1.IListChannelConnectionsRequest): Promise<google.cloud.eventarc.v1.ListChannelConnectionsResponse>;

                    /**
                     * Calls CreateChannelConnection.
                     * @param request CreateChannelConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createChannelConnection(request: google.cloud.eventarc.v1.ICreateChannelConnectionRequest, callback: google.cloud.eventarc.v1.Eventarc.CreateChannelConnectionCallback): void;

                    /**
                     * Calls CreateChannelConnection.
                     * @param request CreateChannelConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public createChannelConnection(request: google.cloud.eventarc.v1.ICreateChannelConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteChannelConnection.
                     * @param request DeleteChannelConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteChannelConnection(request: google.cloud.eventarc.v1.IDeleteChannelConnectionRequest, callback: google.cloud.eventarc.v1.Eventarc.DeleteChannelConnectionCallback): void;

                    /**
                     * Calls DeleteChannelConnection.
                     * @param request DeleteChannelConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteChannelConnection(request: google.cloud.eventarc.v1.IDeleteChannelConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetGoogleChannelConfig.
                     * @param request GetGoogleChannelConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GoogleChannelConfig
                     */
                    public getGoogleChannelConfig(request: google.cloud.eventarc.v1.IGetGoogleChannelConfigRequest, callback: google.cloud.eventarc.v1.Eventarc.GetGoogleChannelConfigCallback): void;

                    /**
                     * Calls GetGoogleChannelConfig.
                     * @param request GetGoogleChannelConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getGoogleChannelConfig(request: google.cloud.eventarc.v1.IGetGoogleChannelConfigRequest): Promise<google.cloud.eventarc.v1.GoogleChannelConfig>;

                    /**
                     * Calls UpdateGoogleChannelConfig.
                     * @param request UpdateGoogleChannelConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GoogleChannelConfig
                     */
                    public updateGoogleChannelConfig(request: google.cloud.eventarc.v1.IUpdateGoogleChannelConfigRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdateGoogleChannelConfigCallback): void;

                    /**
                     * Calls UpdateGoogleChannelConfig.
                     * @param request UpdateGoogleChannelConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateGoogleChannelConfig(request: google.cloud.eventarc.v1.IUpdateGoogleChannelConfigRequest): Promise<google.cloud.eventarc.v1.GoogleChannelConfig>;

                    /**
                     * Calls GetMessageBus.
                     * @param request GetMessageBusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MessageBus
                     */
                    public getMessageBus(request: google.cloud.eventarc.v1.IGetMessageBusRequest, callback: google.cloud.eventarc.v1.Eventarc.GetMessageBusCallback): void;

                    /**
                     * Calls GetMessageBus.
                     * @param request GetMessageBusRequest message or plain object
                     * @returns Promise
                     */
                    public getMessageBus(request: google.cloud.eventarc.v1.IGetMessageBusRequest): Promise<google.cloud.eventarc.v1.MessageBus>;

                    /**
                     * Calls ListMessageBuses.
                     * @param request ListMessageBusesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMessageBusesResponse
                     */
                    public listMessageBuses(request: google.cloud.eventarc.v1.IListMessageBusesRequest, callback: google.cloud.eventarc.v1.Eventarc.ListMessageBusesCallback): void;

                    /**
                     * Calls ListMessageBuses.
                     * @param request ListMessageBusesRequest message or plain object
                     * @returns Promise
                     */
                    public listMessageBuses(request: google.cloud.eventarc.v1.IListMessageBusesRequest): Promise<google.cloud.eventarc.v1.ListMessageBusesResponse>;

                    /**
                     * Calls ListMessageBusEnrollments.
                     * @param request ListMessageBusEnrollmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMessageBusEnrollmentsResponse
                     */
                    public listMessageBusEnrollments(request: google.cloud.eventarc.v1.IListMessageBusEnrollmentsRequest, callback: google.cloud.eventarc.v1.Eventarc.ListMessageBusEnrollmentsCallback): void;

                    /**
                     * Calls ListMessageBusEnrollments.
                     * @param request ListMessageBusEnrollmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listMessageBusEnrollments(request: google.cloud.eventarc.v1.IListMessageBusEnrollmentsRequest): Promise<google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse>;

                    /**
                     * Calls CreateMessageBus.
                     * @param request CreateMessageBusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMessageBus(request: google.cloud.eventarc.v1.ICreateMessageBusRequest, callback: google.cloud.eventarc.v1.Eventarc.CreateMessageBusCallback): void;

                    /**
                     * Calls CreateMessageBus.
                     * @param request CreateMessageBusRequest message or plain object
                     * @returns Promise
                     */
                    public createMessageBus(request: google.cloud.eventarc.v1.ICreateMessageBusRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateMessageBus.
                     * @param request UpdateMessageBusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMessageBus(request: google.cloud.eventarc.v1.IUpdateMessageBusRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdateMessageBusCallback): void;

                    /**
                     * Calls UpdateMessageBus.
                     * @param request UpdateMessageBusRequest message or plain object
                     * @returns Promise
                     */
                    public updateMessageBus(request: google.cloud.eventarc.v1.IUpdateMessageBusRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteMessageBus.
                     * @param request DeleteMessageBusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteMessageBus(request: google.cloud.eventarc.v1.IDeleteMessageBusRequest, callback: google.cloud.eventarc.v1.Eventarc.DeleteMessageBusCallback): void;

                    /**
                     * Calls DeleteMessageBus.
                     * @param request DeleteMessageBusRequest message or plain object
                     * @returns Promise
                     */
                    public deleteMessageBus(request: google.cloud.eventarc.v1.IDeleteMessageBusRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetEnrollment.
                     * @param request GetEnrollmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Enrollment
                     */
                    public getEnrollment(request: google.cloud.eventarc.v1.IGetEnrollmentRequest, callback: google.cloud.eventarc.v1.Eventarc.GetEnrollmentCallback): void;

                    /**
                     * Calls GetEnrollment.
                     * @param request GetEnrollmentRequest message or plain object
                     * @returns Promise
                     */
                    public getEnrollment(request: google.cloud.eventarc.v1.IGetEnrollmentRequest): Promise<google.cloud.eventarc.v1.Enrollment>;

                    /**
                     * Calls ListEnrollments.
                     * @param request ListEnrollmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEnrollmentsResponse
                     */
                    public listEnrollments(request: google.cloud.eventarc.v1.IListEnrollmentsRequest, callback: google.cloud.eventarc.v1.Eventarc.ListEnrollmentsCallback): void;

                    /**
                     * Calls ListEnrollments.
                     * @param request ListEnrollmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listEnrollments(request: google.cloud.eventarc.v1.IListEnrollmentsRequest): Promise<google.cloud.eventarc.v1.ListEnrollmentsResponse>;

                    /**
                     * Calls CreateEnrollment.
                     * @param request CreateEnrollmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEnrollment(request: google.cloud.eventarc.v1.ICreateEnrollmentRequest, callback: google.cloud.eventarc.v1.Eventarc.CreateEnrollmentCallback): void;

                    /**
                     * Calls CreateEnrollment.
                     * @param request CreateEnrollmentRequest message or plain object
                     * @returns Promise
                     */
                    public createEnrollment(request: google.cloud.eventarc.v1.ICreateEnrollmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateEnrollment.
                     * @param request UpdateEnrollmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateEnrollment(request: google.cloud.eventarc.v1.IUpdateEnrollmentRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdateEnrollmentCallback): void;

                    /**
                     * Calls UpdateEnrollment.
                     * @param request UpdateEnrollmentRequest message or plain object
                     * @returns Promise
                     */
                    public updateEnrollment(request: google.cloud.eventarc.v1.IUpdateEnrollmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteEnrollment.
                     * @param request DeleteEnrollmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteEnrollment(request: google.cloud.eventarc.v1.IDeleteEnrollmentRequest, callback: google.cloud.eventarc.v1.Eventarc.DeleteEnrollmentCallback): void;

                    /**
                     * Calls DeleteEnrollment.
                     * @param request DeleteEnrollmentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEnrollment(request: google.cloud.eventarc.v1.IDeleteEnrollmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetPipeline.
                     * @param request GetPipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Pipeline
                     */
                    public getPipeline(request: google.cloud.eventarc.v1.IGetPipelineRequest, callback: google.cloud.eventarc.v1.Eventarc.GetPipelineCallback): void;

                    /**
                     * Calls GetPipeline.
                     * @param request GetPipelineRequest message or plain object
                     * @returns Promise
                     */
                    public getPipeline(request: google.cloud.eventarc.v1.IGetPipelineRequest): Promise<google.cloud.eventarc.v1.Pipeline>;

                    /**
                     * Calls ListPipelines.
                     * @param request ListPipelinesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPipelinesResponse
                     */
                    public listPipelines(request: google.cloud.eventarc.v1.IListPipelinesRequest, callback: google.cloud.eventarc.v1.Eventarc.ListPipelinesCallback): void;

                    /**
                     * Calls ListPipelines.
                     * @param request ListPipelinesRequest message or plain object
                     * @returns Promise
                     */
                    public listPipelines(request: google.cloud.eventarc.v1.IListPipelinesRequest): Promise<google.cloud.eventarc.v1.ListPipelinesResponse>;

                    /**
                     * Calls CreatePipeline.
                     * @param request CreatePipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPipeline(request: google.cloud.eventarc.v1.ICreatePipelineRequest, callback: google.cloud.eventarc.v1.Eventarc.CreatePipelineCallback): void;

                    /**
                     * Calls CreatePipeline.
                     * @param request CreatePipelineRequest message or plain object
                     * @returns Promise
                     */
                    public createPipeline(request: google.cloud.eventarc.v1.ICreatePipelineRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdatePipeline.
                     * @param request UpdatePipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePipeline(request: google.cloud.eventarc.v1.IUpdatePipelineRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdatePipelineCallback): void;

                    /**
                     * Calls UpdatePipeline.
                     * @param request UpdatePipelineRequest message or plain object
                     * @returns Promise
                     */
                    public updatePipeline(request: google.cloud.eventarc.v1.IUpdatePipelineRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePipeline.
                     * @param request DeletePipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePipeline(request: google.cloud.eventarc.v1.IDeletePipelineRequest, callback: google.cloud.eventarc.v1.Eventarc.DeletePipelineCallback): void;

                    /**
                     * Calls DeletePipeline.
                     * @param request DeletePipelineRequest message or plain object
                     * @returns Promise
                     */
                    public deletePipeline(request: google.cloud.eventarc.v1.IDeletePipelineRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetGoogleApiSource.
                     * @param request GetGoogleApiSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GoogleApiSource
                     */
                    public getGoogleApiSource(request: google.cloud.eventarc.v1.IGetGoogleApiSourceRequest, callback: google.cloud.eventarc.v1.Eventarc.GetGoogleApiSourceCallback): void;

                    /**
                     * Calls GetGoogleApiSource.
                     * @param request GetGoogleApiSourceRequest message or plain object
                     * @returns Promise
                     */
                    public getGoogleApiSource(request: google.cloud.eventarc.v1.IGetGoogleApiSourceRequest): Promise<google.cloud.eventarc.v1.GoogleApiSource>;

                    /**
                     * Calls ListGoogleApiSources.
                     * @param request ListGoogleApiSourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGoogleApiSourcesResponse
                     */
                    public listGoogleApiSources(request: google.cloud.eventarc.v1.IListGoogleApiSourcesRequest, callback: google.cloud.eventarc.v1.Eventarc.ListGoogleApiSourcesCallback): void;

                    /**
                     * Calls ListGoogleApiSources.
                     * @param request ListGoogleApiSourcesRequest message or plain object
                     * @returns Promise
                     */
                    public listGoogleApiSources(request: google.cloud.eventarc.v1.IListGoogleApiSourcesRequest): Promise<google.cloud.eventarc.v1.ListGoogleApiSourcesResponse>;

                    /**
                     * Calls CreateGoogleApiSource.
                     * @param request CreateGoogleApiSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGoogleApiSource(request: google.cloud.eventarc.v1.ICreateGoogleApiSourceRequest, callback: google.cloud.eventarc.v1.Eventarc.CreateGoogleApiSourceCallback): void;

                    /**
                     * Calls CreateGoogleApiSource.
                     * @param request CreateGoogleApiSourceRequest message or plain object
                     * @returns Promise
                     */
                    public createGoogleApiSource(request: google.cloud.eventarc.v1.ICreateGoogleApiSourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateGoogleApiSource.
                     * @param request UpdateGoogleApiSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGoogleApiSource(request: google.cloud.eventarc.v1.IUpdateGoogleApiSourceRequest, callback: google.cloud.eventarc.v1.Eventarc.UpdateGoogleApiSourceCallback): void;

                    /**
                     * Calls UpdateGoogleApiSource.
                     * @param request UpdateGoogleApiSourceRequest message or plain object
                     * @returns Promise
                     */
                    public updateGoogleApiSource(request: google.cloud.eventarc.v1.IUpdateGoogleApiSourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGoogleApiSource.
                     * @param request DeleteGoogleApiSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGoogleApiSource(request: google.cloud.eventarc.v1.IDeleteGoogleApiSourceRequest, callback: google.cloud.eventarc.v1.Eventarc.DeleteGoogleApiSourceCallback): void;

                    /**
                     * Calls DeleteGoogleApiSource.
                     * @param request DeleteGoogleApiSourceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGoogleApiSource(request: google.cloud.eventarc.v1.IDeleteGoogleApiSourceRequest): Promise<google.longrunning.Operation>;
                }

                namespace Eventarc {

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getTrigger}.
                     * @param error Error, if any
                     * @param [response] Trigger
                     */
                    type GetTriggerCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.Trigger) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listTriggers}.
                     * @param error Error, if any
                     * @param [response] ListTriggersResponse
                     */
                    type ListTriggersCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListTriggersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createTrigger}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTriggerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updateTrigger}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTriggerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deleteTrigger}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTriggerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getChannel}.
                     * @param error Error, if any
                     * @param [response] Channel
                     */
                    type GetChannelCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.Channel) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listChannels}.
                     * @param error Error, if any
                     * @param [response] ListChannelsResponse
                     */
                    type ListChannelsCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListChannelsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createChannel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updateChannel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deleteChannel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteChannelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getProvider}.
                     * @param error Error, if any
                     * @param [response] Provider
                     */
                    type GetProviderCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.Provider) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listProviders}.
                     * @param error Error, if any
                     * @param [response] ListProvidersResponse
                     */
                    type ListProvidersCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListProvidersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getChannelConnection}.
                     * @param error Error, if any
                     * @param [response] ChannelConnection
                     */
                    type GetChannelConnectionCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ChannelConnection) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listChannelConnections}.
                     * @param error Error, if any
                     * @param [response] ListChannelConnectionsResponse
                     */
                    type ListChannelConnectionsCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListChannelConnectionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createChannelConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateChannelConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deleteChannelConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteChannelConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getGoogleChannelConfig}.
                     * @param error Error, if any
                     * @param [response] GoogleChannelConfig
                     */
                    type GetGoogleChannelConfigCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.GoogleChannelConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updateGoogleChannelConfig}.
                     * @param error Error, if any
                     * @param [response] GoogleChannelConfig
                     */
                    type UpdateGoogleChannelConfigCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.GoogleChannelConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getMessageBus}.
                     * @param error Error, if any
                     * @param [response] MessageBus
                     */
                    type GetMessageBusCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.MessageBus) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listMessageBuses}.
                     * @param error Error, if any
                     * @param [response] ListMessageBusesResponse
                     */
                    type ListMessageBusesCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListMessageBusesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listMessageBusEnrollments}.
                     * @param error Error, if any
                     * @param [response] ListMessageBusEnrollmentsResponse
                     */
                    type ListMessageBusEnrollmentsCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createMessageBus}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMessageBusCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updateMessageBus}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMessageBusCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deleteMessageBus}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteMessageBusCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getEnrollment}.
                     * @param error Error, if any
                     * @param [response] Enrollment
                     */
                    type GetEnrollmentCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.Enrollment) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listEnrollments}.
                     * @param error Error, if any
                     * @param [response] ListEnrollmentsResponse
                     */
                    type ListEnrollmentsCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListEnrollmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createEnrollment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEnrollmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updateEnrollment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateEnrollmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deleteEnrollment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteEnrollmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getPipeline}.
                     * @param error Error, if any
                     * @param [response] Pipeline
                     */
                    type GetPipelineCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.Pipeline) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listPipelines}.
                     * @param error Error, if any
                     * @param [response] ListPipelinesResponse
                     */
                    type ListPipelinesCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListPipelinesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createPipeline}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updatePipeline}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deletePipeline}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|getGoogleApiSource}.
                     * @param error Error, if any
                     * @param [response] GoogleApiSource
                     */
                    type GetGoogleApiSourceCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.GoogleApiSource) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|listGoogleApiSources}.
                     * @param error Error, if any
                     * @param [response] ListGoogleApiSourcesResponse
                     */
                    type ListGoogleApiSourcesCallback = (error: (Error|null), response?: google.cloud.eventarc.v1.ListGoogleApiSourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|createGoogleApiSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGoogleApiSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|updateGoogleApiSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGoogleApiSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.eventarc.v1.Eventarc|deleteGoogleApiSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGoogleApiSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a GetTriggerRequest. */
                interface IGetTriggerRequest {

                    /** GetTriggerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTriggerRequest. */
                class GetTriggerRequest implements IGetTriggerRequest {

                    /**
                     * Constructs a new GetTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetTriggerRequest);

                    /** GetTriggerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTriggerRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetTriggerRequest): google.cloud.eventarc.v1.GetTriggerRequest;

                    /**
                     * Encodes the specified GetTriggerRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetTriggerRequest.verify|verify} messages.
                     * @param message GetTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTriggerRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetTriggerRequest.verify|verify} messages.
                     * @param message GetTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetTriggerRequest;

                    /**
                     * Decodes a GetTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetTriggerRequest;

                    /**
                     * Verifies a GetTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetTriggerRequest;

                    /**
                     * Creates a plain object from a GetTriggerRequest message. Also converts values to other types if specified.
                     * @param message GetTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTriggerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTriggersRequest. */
                interface IListTriggersRequest {

                    /** ListTriggersRequest parent */
                    parent?: (string|null);

                    /** ListTriggersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTriggersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTriggersRequest orderBy */
                    orderBy?: (string|null);

                    /** ListTriggersRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListTriggersRequest. */
                class ListTriggersRequest implements IListTriggersRequest {

                    /**
                     * Constructs a new ListTriggersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListTriggersRequest);

                    /** ListTriggersRequest parent. */
                    public parent: string;

                    /** ListTriggersRequest pageSize. */
                    public pageSize: number;

                    /** ListTriggersRequest pageToken. */
                    public pageToken: string;

                    /** ListTriggersRequest orderBy. */
                    public orderBy: string;

                    /** ListTriggersRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListTriggersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTriggersRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListTriggersRequest): google.cloud.eventarc.v1.ListTriggersRequest;

                    /**
                     * Encodes the specified ListTriggersRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListTriggersRequest.verify|verify} messages.
                     * @param message ListTriggersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListTriggersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTriggersRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListTriggersRequest.verify|verify} messages.
                     * @param message ListTriggersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListTriggersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTriggersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTriggersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListTriggersRequest;

                    /**
                     * Decodes a ListTriggersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTriggersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListTriggersRequest;

                    /**
                     * Verifies a ListTriggersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTriggersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTriggersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListTriggersRequest;

                    /**
                     * Creates a plain object from a ListTriggersRequest message. Also converts values to other types if specified.
                     * @param message ListTriggersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListTriggersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTriggersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTriggersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTriggersResponse. */
                interface IListTriggersResponse {

                    /** ListTriggersResponse triggers */
                    triggers?: (google.cloud.eventarc.v1.ITrigger[]|null);

                    /** ListTriggersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTriggersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTriggersResponse. */
                class ListTriggersResponse implements IListTriggersResponse {

                    /**
                     * Constructs a new ListTriggersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListTriggersResponse);

                    /** ListTriggersResponse triggers. */
                    public triggers: google.cloud.eventarc.v1.ITrigger[];

                    /** ListTriggersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTriggersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTriggersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTriggersResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListTriggersResponse): google.cloud.eventarc.v1.ListTriggersResponse;

                    /**
                     * Encodes the specified ListTriggersResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListTriggersResponse.verify|verify} messages.
                     * @param message ListTriggersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListTriggersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTriggersResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListTriggersResponse.verify|verify} messages.
                     * @param message ListTriggersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListTriggersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTriggersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTriggersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListTriggersResponse;

                    /**
                     * Decodes a ListTriggersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTriggersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListTriggersResponse;

                    /**
                     * Verifies a ListTriggersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTriggersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTriggersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListTriggersResponse;

                    /**
                     * Creates a plain object from a ListTriggersResponse message. Also converts values to other types if specified.
                     * @param message ListTriggersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListTriggersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTriggersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTriggersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTriggerRequest. */
                interface ICreateTriggerRequest {

                    /** CreateTriggerRequest parent */
                    parent?: (string|null);

                    /** CreateTriggerRequest trigger */
                    trigger?: (google.cloud.eventarc.v1.ITrigger|null);

                    /** CreateTriggerRequest triggerId */
                    triggerId?: (string|null);

                    /** CreateTriggerRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateTriggerRequest. */
                class CreateTriggerRequest implements ICreateTriggerRequest {

                    /**
                     * Constructs a new CreateTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreateTriggerRequest);

                    /** CreateTriggerRequest parent. */
                    public parent: string;

                    /** CreateTriggerRequest trigger. */
                    public trigger?: (google.cloud.eventarc.v1.ITrigger|null);

                    /** CreateTriggerRequest triggerId. */
                    public triggerId: string;

                    /** CreateTriggerRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTriggerRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreateTriggerRequest): google.cloud.eventarc.v1.CreateTriggerRequest;

                    /**
                     * Encodes the specified CreateTriggerRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreateTriggerRequest.verify|verify} messages.
                     * @param message CreateTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreateTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTriggerRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreateTriggerRequest.verify|verify} messages.
                     * @param message CreateTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreateTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreateTriggerRequest;

                    /**
                     * Decodes a CreateTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreateTriggerRequest;

                    /**
                     * Verifies a CreateTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreateTriggerRequest;

                    /**
                     * Creates a plain object from a CreateTriggerRequest message. Also converts values to other types if specified.
                     * @param message CreateTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreateTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTriggerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTriggerRequest. */
                interface IUpdateTriggerRequest {

                    /** UpdateTriggerRequest trigger */
                    trigger?: (google.cloud.eventarc.v1.ITrigger|null);

                    /** UpdateTriggerRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTriggerRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateTriggerRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateTriggerRequest. */
                class UpdateTriggerRequest implements IUpdateTriggerRequest {

                    /**
                     * Constructs a new UpdateTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdateTriggerRequest);

                    /** UpdateTriggerRequest trigger. */
                    public trigger?: (google.cloud.eventarc.v1.ITrigger|null);

                    /** UpdateTriggerRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTriggerRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateTriggerRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTriggerRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdateTriggerRequest): google.cloud.eventarc.v1.UpdateTriggerRequest;

                    /**
                     * Encodes the specified UpdateTriggerRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdateTriggerRequest.verify|verify} messages.
                     * @param message UpdateTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdateTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTriggerRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdateTriggerRequest.verify|verify} messages.
                     * @param message UpdateTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdateTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdateTriggerRequest;

                    /**
                     * Decodes an UpdateTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdateTriggerRequest;

                    /**
                     * Verifies an UpdateTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdateTriggerRequest;

                    /**
                     * Creates a plain object from an UpdateTriggerRequest message. Also converts values to other types if specified.
                     * @param message UpdateTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdateTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTriggerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTriggerRequest. */
                interface IDeleteTriggerRequest {

                    /** DeleteTriggerRequest name */
                    name?: (string|null);

                    /** DeleteTriggerRequest etag */
                    etag?: (string|null);

                    /** DeleteTriggerRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteTriggerRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteTriggerRequest. */
                class DeleteTriggerRequest implements IDeleteTriggerRequest {

                    /**
                     * Constructs a new DeleteTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeleteTriggerRequest);

                    /** DeleteTriggerRequest name. */
                    public name: string;

                    /** DeleteTriggerRequest etag. */
                    public etag: string;

                    /** DeleteTriggerRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteTriggerRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTriggerRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeleteTriggerRequest): google.cloud.eventarc.v1.DeleteTriggerRequest;

                    /**
                     * Encodes the specified DeleteTriggerRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeleteTriggerRequest.verify|verify} messages.
                     * @param message DeleteTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeleteTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTriggerRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeleteTriggerRequest.verify|verify} messages.
                     * @param message DeleteTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeleteTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeleteTriggerRequest;

                    /**
                     * Decodes a DeleteTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeleteTriggerRequest;

                    /**
                     * Verifies a DeleteTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeleteTriggerRequest;

                    /**
                     * Creates a plain object from a DeleteTriggerRequest message. Also converts values to other types if specified.
                     * @param message DeleteTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeleteTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTriggerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetChannelRequest. */
                interface IGetChannelRequest {

                    /** GetChannelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetChannelRequest. */
                class GetChannelRequest implements IGetChannelRequest {

                    /**
                     * Constructs a new GetChannelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetChannelRequest);

                    /** GetChannelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetChannelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetChannelRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetChannelRequest): google.cloud.eventarc.v1.GetChannelRequest;

                    /**
                     * Encodes the specified GetChannelRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetChannelRequest.verify|verify} messages.
                     * @param message GetChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetChannelRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetChannelRequest.verify|verify} messages.
                     * @param message GetChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetChannelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetChannelRequest;

                    /**
                     * Decodes a GetChannelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetChannelRequest;

                    /**
                     * Verifies a GetChannelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetChannelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetChannelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetChannelRequest;

                    /**
                     * Creates a plain object from a GetChannelRequest message. Also converts values to other types if specified.
                     * @param message GetChannelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetChannelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetChannelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListChannelsRequest. */
                interface IListChannelsRequest {

                    /** ListChannelsRequest parent */
                    parent?: (string|null);

                    /** ListChannelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListChannelsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListChannelsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListChannelsRequest. */
                class ListChannelsRequest implements IListChannelsRequest {

                    /**
                     * Constructs a new ListChannelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListChannelsRequest);

                    /** ListChannelsRequest parent. */
                    public parent: string;

                    /** ListChannelsRequest pageSize. */
                    public pageSize: number;

                    /** ListChannelsRequest pageToken. */
                    public pageToken: string;

                    /** ListChannelsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListChannelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChannelsRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListChannelsRequest): google.cloud.eventarc.v1.ListChannelsRequest;

                    /**
                     * Encodes the specified ListChannelsRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelsRequest.verify|verify} messages.
                     * @param message ListChannelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelsRequest.verify|verify} messages.
                     * @param message ListChannelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChannelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChannelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListChannelsRequest;

                    /**
                     * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChannelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListChannelsRequest;

                    /**
                     * Verifies a ListChannelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChannelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListChannelsRequest;

                    /**
                     * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
                     * @param message ListChannelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChannelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListChannelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListChannelsResponse. */
                interface IListChannelsResponse {

                    /** ListChannelsResponse channels */
                    channels?: (google.cloud.eventarc.v1.IChannel[]|null);

                    /** ListChannelsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListChannelsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListChannelsResponse. */
                class ListChannelsResponse implements IListChannelsResponse {

                    /**
                     * Constructs a new ListChannelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListChannelsResponse);

                    /** ListChannelsResponse channels. */
                    public channels: google.cloud.eventarc.v1.IChannel[];

                    /** ListChannelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListChannelsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListChannelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChannelsResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListChannelsResponse): google.cloud.eventarc.v1.ListChannelsResponse;

                    /**
                     * Encodes the specified ListChannelsResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelsResponse.verify|verify} messages.
                     * @param message ListChannelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelsResponse.verify|verify} messages.
                     * @param message ListChannelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChannelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChannelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListChannelsResponse;

                    /**
                     * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChannelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListChannelsResponse;

                    /**
                     * Verifies a ListChannelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChannelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListChannelsResponse;

                    /**
                     * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
                     * @param message ListChannelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChannelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListChannelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateChannelRequest. */
                interface ICreateChannelRequest {

                    /** CreateChannelRequest parent */
                    parent?: (string|null);

                    /** CreateChannelRequest channel */
                    channel?: (google.cloud.eventarc.v1.IChannel|null);

                    /** CreateChannelRequest channelId */
                    channelId?: (string|null);

                    /** CreateChannelRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateChannelRequest. */
                class CreateChannelRequest implements ICreateChannelRequest {

                    /**
                     * Constructs a new CreateChannelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreateChannelRequest);

                    /** CreateChannelRequest parent. */
                    public parent: string;

                    /** CreateChannelRequest channel. */
                    public channel?: (google.cloud.eventarc.v1.IChannel|null);

                    /** CreateChannelRequest channelId. */
                    public channelId: string;

                    /** CreateChannelRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateChannelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateChannelRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreateChannelRequest): google.cloud.eventarc.v1.CreateChannelRequest;

                    /**
                     * Encodes the specified CreateChannelRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreateChannelRequest.verify|verify} messages.
                     * @param message CreateChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateChannelRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreateChannelRequest.verify|verify} messages.
                     * @param message CreateChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateChannelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreateChannelRequest;

                    /**
                     * Decodes a CreateChannelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreateChannelRequest;

                    /**
                     * Verifies a CreateChannelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateChannelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateChannelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreateChannelRequest;

                    /**
                     * Creates a plain object from a CreateChannelRequest message. Also converts values to other types if specified.
                     * @param message CreateChannelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreateChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateChannelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateChannelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateChannelRequest. */
                interface IUpdateChannelRequest {

                    /** UpdateChannelRequest channel */
                    channel?: (google.cloud.eventarc.v1.IChannel|null);

                    /** UpdateChannelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateChannelRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateChannelRequest. */
                class UpdateChannelRequest implements IUpdateChannelRequest {

                    /**
                     * Constructs a new UpdateChannelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdateChannelRequest);

                    /** UpdateChannelRequest channel. */
                    public channel?: (google.cloud.eventarc.v1.IChannel|null);

                    /** UpdateChannelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateChannelRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateChannelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateChannelRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdateChannelRequest): google.cloud.eventarc.v1.UpdateChannelRequest;

                    /**
                     * Encodes the specified UpdateChannelRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdateChannelRequest.verify|verify} messages.
                     * @param message UpdateChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateChannelRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdateChannelRequest.verify|verify} messages.
                     * @param message UpdateChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateChannelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdateChannelRequest;

                    /**
                     * Decodes an UpdateChannelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdateChannelRequest;

                    /**
                     * Verifies an UpdateChannelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateChannelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateChannelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdateChannelRequest;

                    /**
                     * Creates a plain object from an UpdateChannelRequest message. Also converts values to other types if specified.
                     * @param message UpdateChannelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdateChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateChannelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateChannelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteChannelRequest. */
                interface IDeleteChannelRequest {

                    /** DeleteChannelRequest name */
                    name?: (string|null);

                    /** DeleteChannelRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteChannelRequest. */
                class DeleteChannelRequest implements IDeleteChannelRequest {

                    /**
                     * Constructs a new DeleteChannelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeleteChannelRequest);

                    /** DeleteChannelRequest name. */
                    public name: string;

                    /** DeleteChannelRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteChannelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteChannelRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeleteChannelRequest): google.cloud.eventarc.v1.DeleteChannelRequest;

                    /**
                     * Encodes the specified DeleteChannelRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeleteChannelRequest.verify|verify} messages.
                     * @param message DeleteChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeleteChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteChannelRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeleteChannelRequest.verify|verify} messages.
                     * @param message DeleteChannelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeleteChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteChannelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeleteChannelRequest;

                    /**
                     * Decodes a DeleteChannelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteChannelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeleteChannelRequest;

                    /**
                     * Verifies a DeleteChannelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteChannelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteChannelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeleteChannelRequest;

                    /**
                     * Creates a plain object from a DeleteChannelRequest message. Also converts values to other types if specified.
                     * @param message DeleteChannelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeleteChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteChannelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteChannelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetProviderRequest. */
                interface IGetProviderRequest {

                    /** GetProviderRequest name */
                    name?: (string|null);
                }

                /** Represents a GetProviderRequest. */
                class GetProviderRequest implements IGetProviderRequest {

                    /**
                     * Constructs a new GetProviderRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetProviderRequest);

                    /** GetProviderRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProviderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProviderRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetProviderRequest): google.cloud.eventarc.v1.GetProviderRequest;

                    /**
                     * Encodes the specified GetProviderRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetProviderRequest.verify|verify} messages.
                     * @param message GetProviderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProviderRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetProviderRequest.verify|verify} messages.
                     * @param message GetProviderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProviderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProviderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetProviderRequest;

                    /**
                     * Decodes a GetProviderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProviderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetProviderRequest;

                    /**
                     * Verifies a GetProviderRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetProviderRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetProviderRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetProviderRequest;

                    /**
                     * Creates a plain object from a GetProviderRequest message. Also converts values to other types if specified.
                     * @param message GetProviderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetProviderRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetProviderRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProvidersRequest. */
                interface IListProvidersRequest {

                    /** ListProvidersRequest parent */
                    parent?: (string|null);

                    /** ListProvidersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProvidersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListProvidersRequest orderBy */
                    orderBy?: (string|null);

                    /** ListProvidersRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListProvidersRequest. */
                class ListProvidersRequest implements IListProvidersRequest {

                    /**
                     * Constructs a new ListProvidersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListProvidersRequest);

                    /** ListProvidersRequest parent. */
                    public parent: string;

                    /** ListProvidersRequest pageSize. */
                    public pageSize: number;

                    /** ListProvidersRequest pageToken. */
                    public pageToken: string;

                    /** ListProvidersRequest orderBy. */
                    public orderBy: string;

                    /** ListProvidersRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListProvidersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProvidersRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListProvidersRequest): google.cloud.eventarc.v1.ListProvidersRequest;

                    /**
                     * Encodes the specified ListProvidersRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListProvidersRequest.verify|verify} messages.
                     * @param message ListProvidersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListProvidersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProvidersRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListProvidersRequest.verify|verify} messages.
                     * @param message ListProvidersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListProvidersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProvidersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProvidersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListProvidersRequest;

                    /**
                     * Decodes a ListProvidersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProvidersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListProvidersRequest;

                    /**
                     * Verifies a ListProvidersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProvidersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProvidersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListProvidersRequest;

                    /**
                     * Creates a plain object from a ListProvidersRequest message. Also converts values to other types if specified.
                     * @param message ListProvidersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListProvidersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProvidersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProvidersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProvidersResponse. */
                interface IListProvidersResponse {

                    /** ListProvidersResponse providers */
                    providers?: (google.cloud.eventarc.v1.IProvider[]|null);

                    /** ListProvidersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListProvidersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListProvidersResponse. */
                class ListProvidersResponse implements IListProvidersResponse {

                    /**
                     * Constructs a new ListProvidersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListProvidersResponse);

                    /** ListProvidersResponse providers. */
                    public providers: google.cloud.eventarc.v1.IProvider[];

                    /** ListProvidersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListProvidersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListProvidersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProvidersResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListProvidersResponse): google.cloud.eventarc.v1.ListProvidersResponse;

                    /**
                     * Encodes the specified ListProvidersResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListProvidersResponse.verify|verify} messages.
                     * @param message ListProvidersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListProvidersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProvidersResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListProvidersResponse.verify|verify} messages.
                     * @param message ListProvidersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListProvidersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProvidersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProvidersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListProvidersResponse;

                    /**
                     * Decodes a ListProvidersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProvidersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListProvidersResponse;

                    /**
                     * Verifies a ListProvidersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProvidersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProvidersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListProvidersResponse;

                    /**
                     * Creates a plain object from a ListProvidersResponse message. Also converts values to other types if specified.
                     * @param message ListProvidersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListProvidersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProvidersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProvidersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetChannelConnectionRequest. */
                interface IGetChannelConnectionRequest {

                    /** GetChannelConnectionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetChannelConnectionRequest. */
                class GetChannelConnectionRequest implements IGetChannelConnectionRequest {

                    /**
                     * Constructs a new GetChannelConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetChannelConnectionRequest);

                    /** GetChannelConnectionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetChannelConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetChannelConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetChannelConnectionRequest): google.cloud.eventarc.v1.GetChannelConnectionRequest;

                    /**
                     * Encodes the specified GetChannelConnectionRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetChannelConnectionRequest.verify|verify} messages.
                     * @param message GetChannelConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetChannelConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetChannelConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetChannelConnectionRequest.verify|verify} messages.
                     * @param message GetChannelConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetChannelConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetChannelConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetChannelConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetChannelConnectionRequest;

                    /**
                     * Decodes a GetChannelConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetChannelConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetChannelConnectionRequest;

                    /**
                     * Verifies a GetChannelConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetChannelConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetChannelConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetChannelConnectionRequest;

                    /**
                     * Creates a plain object from a GetChannelConnectionRequest message. Also converts values to other types if specified.
                     * @param message GetChannelConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetChannelConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetChannelConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetChannelConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListChannelConnectionsRequest. */
                interface IListChannelConnectionsRequest {

                    /** ListChannelConnectionsRequest parent */
                    parent?: (string|null);

                    /** ListChannelConnectionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListChannelConnectionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListChannelConnectionsRequest. */
                class ListChannelConnectionsRequest implements IListChannelConnectionsRequest {

                    /**
                     * Constructs a new ListChannelConnectionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListChannelConnectionsRequest);

                    /** ListChannelConnectionsRequest parent. */
                    public parent: string;

                    /** ListChannelConnectionsRequest pageSize. */
                    public pageSize: number;

                    /** ListChannelConnectionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListChannelConnectionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChannelConnectionsRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListChannelConnectionsRequest): google.cloud.eventarc.v1.ListChannelConnectionsRequest;

                    /**
                     * Encodes the specified ListChannelConnectionsRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelConnectionsRequest.verify|verify} messages.
                     * @param message ListChannelConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListChannelConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChannelConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelConnectionsRequest.verify|verify} messages.
                     * @param message ListChannelConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListChannelConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChannelConnectionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChannelConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListChannelConnectionsRequest;

                    /**
                     * Decodes a ListChannelConnectionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChannelConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListChannelConnectionsRequest;

                    /**
                     * Verifies a ListChannelConnectionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChannelConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChannelConnectionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListChannelConnectionsRequest;

                    /**
                     * Creates a plain object from a ListChannelConnectionsRequest message. Also converts values to other types if specified.
                     * @param message ListChannelConnectionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListChannelConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChannelConnectionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListChannelConnectionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListChannelConnectionsResponse. */
                interface IListChannelConnectionsResponse {

                    /** ListChannelConnectionsResponse channelConnections */
                    channelConnections?: (google.cloud.eventarc.v1.IChannelConnection[]|null);

                    /** ListChannelConnectionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListChannelConnectionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListChannelConnectionsResponse. */
                class ListChannelConnectionsResponse implements IListChannelConnectionsResponse {

                    /**
                     * Constructs a new ListChannelConnectionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListChannelConnectionsResponse);

                    /** ListChannelConnectionsResponse channelConnections. */
                    public channelConnections: google.cloud.eventarc.v1.IChannelConnection[];

                    /** ListChannelConnectionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListChannelConnectionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListChannelConnectionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChannelConnectionsResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListChannelConnectionsResponse): google.cloud.eventarc.v1.ListChannelConnectionsResponse;

                    /**
                     * Encodes the specified ListChannelConnectionsResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelConnectionsResponse.verify|verify} messages.
                     * @param message ListChannelConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListChannelConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChannelConnectionsResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListChannelConnectionsResponse.verify|verify} messages.
                     * @param message ListChannelConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListChannelConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChannelConnectionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChannelConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListChannelConnectionsResponse;

                    /**
                     * Decodes a ListChannelConnectionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChannelConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListChannelConnectionsResponse;

                    /**
                     * Verifies a ListChannelConnectionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChannelConnectionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChannelConnectionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListChannelConnectionsResponse;

                    /**
                     * Creates a plain object from a ListChannelConnectionsResponse message. Also converts values to other types if specified.
                     * @param message ListChannelConnectionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListChannelConnectionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChannelConnectionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListChannelConnectionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateChannelConnectionRequest. */
                interface ICreateChannelConnectionRequest {

                    /** CreateChannelConnectionRequest parent */
                    parent?: (string|null);

                    /** CreateChannelConnectionRequest channelConnection */
                    channelConnection?: (google.cloud.eventarc.v1.IChannelConnection|null);

                    /** CreateChannelConnectionRequest channelConnectionId */
                    channelConnectionId?: (string|null);
                }

                /** Represents a CreateChannelConnectionRequest. */
                class CreateChannelConnectionRequest implements ICreateChannelConnectionRequest {

                    /**
                     * Constructs a new CreateChannelConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreateChannelConnectionRequest);

                    /** CreateChannelConnectionRequest parent. */
                    public parent: string;

                    /** CreateChannelConnectionRequest channelConnection. */
                    public channelConnection?: (google.cloud.eventarc.v1.IChannelConnection|null);

                    /** CreateChannelConnectionRequest channelConnectionId. */
                    public channelConnectionId: string;

                    /**
                     * Creates a new CreateChannelConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateChannelConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreateChannelConnectionRequest): google.cloud.eventarc.v1.CreateChannelConnectionRequest;

                    /**
                     * Encodes the specified CreateChannelConnectionRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreateChannelConnectionRequest.verify|verify} messages.
                     * @param message CreateChannelConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreateChannelConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateChannelConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreateChannelConnectionRequest.verify|verify} messages.
                     * @param message CreateChannelConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreateChannelConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateChannelConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateChannelConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreateChannelConnectionRequest;

                    /**
                     * Decodes a CreateChannelConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateChannelConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreateChannelConnectionRequest;

                    /**
                     * Verifies a CreateChannelConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateChannelConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateChannelConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreateChannelConnectionRequest;

                    /**
                     * Creates a plain object from a CreateChannelConnectionRequest message. Also converts values to other types if specified.
                     * @param message CreateChannelConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreateChannelConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateChannelConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateChannelConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteChannelConnectionRequest. */
                interface IDeleteChannelConnectionRequest {

                    /** DeleteChannelConnectionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteChannelConnectionRequest. */
                class DeleteChannelConnectionRequest implements IDeleteChannelConnectionRequest {

                    /**
                     * Constructs a new DeleteChannelConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeleteChannelConnectionRequest);

                    /** DeleteChannelConnectionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteChannelConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteChannelConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeleteChannelConnectionRequest): google.cloud.eventarc.v1.DeleteChannelConnectionRequest;

                    /**
                     * Encodes the specified DeleteChannelConnectionRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeleteChannelConnectionRequest.verify|verify} messages.
                     * @param message DeleteChannelConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeleteChannelConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteChannelConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeleteChannelConnectionRequest.verify|verify} messages.
                     * @param message DeleteChannelConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeleteChannelConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteChannelConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteChannelConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeleteChannelConnectionRequest;

                    /**
                     * Decodes a DeleteChannelConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteChannelConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeleteChannelConnectionRequest;

                    /**
                     * Verifies a DeleteChannelConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteChannelConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteChannelConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeleteChannelConnectionRequest;

                    /**
                     * Creates a plain object from a DeleteChannelConnectionRequest message. Also converts values to other types if specified.
                     * @param message DeleteChannelConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeleteChannelConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteChannelConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteChannelConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateGoogleChannelConfigRequest. */
                interface IUpdateGoogleChannelConfigRequest {

                    /** UpdateGoogleChannelConfigRequest googleChannelConfig */
                    googleChannelConfig?: (google.cloud.eventarc.v1.IGoogleChannelConfig|null);

                    /** UpdateGoogleChannelConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGoogleChannelConfigRequest. */
                class UpdateGoogleChannelConfigRequest implements IUpdateGoogleChannelConfigRequest {

                    /**
                     * Constructs a new UpdateGoogleChannelConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdateGoogleChannelConfigRequest);

                    /** UpdateGoogleChannelConfigRequest googleChannelConfig. */
                    public googleChannelConfig?: (google.cloud.eventarc.v1.IGoogleChannelConfig|null);

                    /** UpdateGoogleChannelConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGoogleChannelConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGoogleChannelConfigRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdateGoogleChannelConfigRequest): google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest;

                    /**
                     * Encodes the specified UpdateGoogleChannelConfigRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest.verify|verify} messages.
                     * @param message UpdateGoogleChannelConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdateGoogleChannelConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGoogleChannelConfigRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest.verify|verify} messages.
                     * @param message UpdateGoogleChannelConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdateGoogleChannelConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGoogleChannelConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGoogleChannelConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest;

                    /**
                     * Decodes an UpdateGoogleChannelConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGoogleChannelConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest;

                    /**
                     * Verifies an UpdateGoogleChannelConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGoogleChannelConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGoogleChannelConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest;

                    /**
                     * Creates a plain object from an UpdateGoogleChannelConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateGoogleChannelConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdateGoogleChannelConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGoogleChannelConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateGoogleChannelConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGoogleChannelConfigRequest. */
                interface IGetGoogleChannelConfigRequest {

                    /** GetGoogleChannelConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGoogleChannelConfigRequest. */
                class GetGoogleChannelConfigRequest implements IGetGoogleChannelConfigRequest {

                    /**
                     * Constructs a new GetGoogleChannelConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetGoogleChannelConfigRequest);

                    /** GetGoogleChannelConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGoogleChannelConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGoogleChannelConfigRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetGoogleChannelConfigRequest): google.cloud.eventarc.v1.GetGoogleChannelConfigRequest;

                    /**
                     * Encodes the specified GetGoogleChannelConfigRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetGoogleChannelConfigRequest.verify|verify} messages.
                     * @param message GetGoogleChannelConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetGoogleChannelConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGoogleChannelConfigRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetGoogleChannelConfigRequest.verify|verify} messages.
                     * @param message GetGoogleChannelConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetGoogleChannelConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGoogleChannelConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGoogleChannelConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetGoogleChannelConfigRequest;

                    /**
                     * Decodes a GetGoogleChannelConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGoogleChannelConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetGoogleChannelConfigRequest;

                    /**
                     * Verifies a GetGoogleChannelConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGoogleChannelConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGoogleChannelConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetGoogleChannelConfigRequest;

                    /**
                     * Creates a plain object from a GetGoogleChannelConfigRequest message. Also converts values to other types if specified.
                     * @param message GetGoogleChannelConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetGoogleChannelConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGoogleChannelConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGoogleChannelConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetMessageBusRequest. */
                interface IGetMessageBusRequest {

                    /** GetMessageBusRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMessageBusRequest. */
                class GetMessageBusRequest implements IGetMessageBusRequest {

                    /**
                     * Constructs a new GetMessageBusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetMessageBusRequest);

                    /** GetMessageBusRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMessageBusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMessageBusRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetMessageBusRequest): google.cloud.eventarc.v1.GetMessageBusRequest;

                    /**
                     * Encodes the specified GetMessageBusRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetMessageBusRequest.verify|verify} messages.
                     * @param message GetMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMessageBusRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetMessageBusRequest.verify|verify} messages.
                     * @param message GetMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMessageBusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetMessageBusRequest;

                    /**
                     * Decodes a GetMessageBusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetMessageBusRequest;

                    /**
                     * Verifies a GetMessageBusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMessageBusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMessageBusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetMessageBusRequest;

                    /**
                     * Creates a plain object from a GetMessageBusRequest message. Also converts values to other types if specified.
                     * @param message GetMessageBusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetMessageBusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMessageBusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetMessageBusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMessageBusesRequest. */
                interface IListMessageBusesRequest {

                    /** ListMessageBusesRequest parent */
                    parent?: (string|null);

                    /** ListMessageBusesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMessageBusesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListMessageBusesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListMessageBusesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListMessageBusesRequest. */
                class ListMessageBusesRequest implements IListMessageBusesRequest {

                    /**
                     * Constructs a new ListMessageBusesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListMessageBusesRequest);

                    /** ListMessageBusesRequest parent. */
                    public parent: string;

                    /** ListMessageBusesRequest pageSize. */
                    public pageSize: number;

                    /** ListMessageBusesRequest pageToken. */
                    public pageToken: string;

                    /** ListMessageBusesRequest orderBy. */
                    public orderBy: string;

                    /** ListMessageBusesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListMessageBusesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMessageBusesRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListMessageBusesRequest): google.cloud.eventarc.v1.ListMessageBusesRequest;

                    /**
                     * Encodes the specified ListMessageBusesRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusesRequest.verify|verify} messages.
                     * @param message ListMessageBusesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListMessageBusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMessageBusesRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusesRequest.verify|verify} messages.
                     * @param message ListMessageBusesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListMessageBusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMessageBusesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMessageBusesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListMessageBusesRequest;

                    /**
                     * Decodes a ListMessageBusesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMessageBusesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListMessageBusesRequest;

                    /**
                     * Verifies a ListMessageBusesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMessageBusesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMessageBusesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListMessageBusesRequest;

                    /**
                     * Creates a plain object from a ListMessageBusesRequest message. Also converts values to other types if specified.
                     * @param message ListMessageBusesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListMessageBusesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMessageBusesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMessageBusesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMessageBusesResponse. */
                interface IListMessageBusesResponse {

                    /** ListMessageBusesResponse messageBuses */
                    messageBuses?: (google.cloud.eventarc.v1.IMessageBus[]|null);

                    /** ListMessageBusesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMessageBusesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMessageBusesResponse. */
                class ListMessageBusesResponse implements IListMessageBusesResponse {

                    /**
                     * Constructs a new ListMessageBusesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListMessageBusesResponse);

                    /** ListMessageBusesResponse messageBuses. */
                    public messageBuses: google.cloud.eventarc.v1.IMessageBus[];

                    /** ListMessageBusesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMessageBusesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMessageBusesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMessageBusesResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListMessageBusesResponse): google.cloud.eventarc.v1.ListMessageBusesResponse;

                    /**
                     * Encodes the specified ListMessageBusesResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusesResponse.verify|verify} messages.
                     * @param message ListMessageBusesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListMessageBusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMessageBusesResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusesResponse.verify|verify} messages.
                     * @param message ListMessageBusesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListMessageBusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMessageBusesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMessageBusesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListMessageBusesResponse;

                    /**
                     * Decodes a ListMessageBusesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMessageBusesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListMessageBusesResponse;

                    /**
                     * Verifies a ListMessageBusesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMessageBusesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMessageBusesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListMessageBusesResponse;

                    /**
                     * Creates a plain object from a ListMessageBusesResponse message. Also converts values to other types if specified.
                     * @param message ListMessageBusesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListMessageBusesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMessageBusesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMessageBusesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMessageBusEnrollmentsRequest. */
                interface IListMessageBusEnrollmentsRequest {

                    /** ListMessageBusEnrollmentsRequest parent */
                    parent?: (string|null);

                    /** ListMessageBusEnrollmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMessageBusEnrollmentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListMessageBusEnrollmentsRequest. */
                class ListMessageBusEnrollmentsRequest implements IListMessageBusEnrollmentsRequest {

                    /**
                     * Constructs a new ListMessageBusEnrollmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListMessageBusEnrollmentsRequest);

                    /** ListMessageBusEnrollmentsRequest parent. */
                    public parent: string;

                    /** ListMessageBusEnrollmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListMessageBusEnrollmentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListMessageBusEnrollmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMessageBusEnrollmentsRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListMessageBusEnrollmentsRequest): google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest;

                    /**
                     * Encodes the specified ListMessageBusEnrollmentsRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest.verify|verify} messages.
                     * @param message ListMessageBusEnrollmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListMessageBusEnrollmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMessageBusEnrollmentsRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest.verify|verify} messages.
                     * @param message ListMessageBusEnrollmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListMessageBusEnrollmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMessageBusEnrollmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMessageBusEnrollmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest;

                    /**
                     * Decodes a ListMessageBusEnrollmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMessageBusEnrollmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest;

                    /**
                     * Verifies a ListMessageBusEnrollmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMessageBusEnrollmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMessageBusEnrollmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest;

                    /**
                     * Creates a plain object from a ListMessageBusEnrollmentsRequest message. Also converts values to other types if specified.
                     * @param message ListMessageBusEnrollmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListMessageBusEnrollmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMessageBusEnrollmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMessageBusEnrollmentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListMessageBusEnrollmentsResponse. */
                interface IListMessageBusEnrollmentsResponse {

                    /** ListMessageBusEnrollmentsResponse enrollments */
                    enrollments?: (string[]|null);

                    /** ListMessageBusEnrollmentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMessageBusEnrollmentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMessageBusEnrollmentsResponse. */
                class ListMessageBusEnrollmentsResponse implements IListMessageBusEnrollmentsResponse {

                    /**
                     * Constructs a new ListMessageBusEnrollmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListMessageBusEnrollmentsResponse);

                    /** ListMessageBusEnrollmentsResponse enrollments. */
                    public enrollments: string[];

                    /** ListMessageBusEnrollmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMessageBusEnrollmentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMessageBusEnrollmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMessageBusEnrollmentsResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListMessageBusEnrollmentsResponse): google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse;

                    /**
                     * Encodes the specified ListMessageBusEnrollmentsResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse.verify|verify} messages.
                     * @param message ListMessageBusEnrollmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListMessageBusEnrollmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMessageBusEnrollmentsResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse.verify|verify} messages.
                     * @param message ListMessageBusEnrollmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListMessageBusEnrollmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMessageBusEnrollmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMessageBusEnrollmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse;

                    /**
                     * Decodes a ListMessageBusEnrollmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMessageBusEnrollmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse;

                    /**
                     * Verifies a ListMessageBusEnrollmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMessageBusEnrollmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMessageBusEnrollmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse;

                    /**
                     * Creates a plain object from a ListMessageBusEnrollmentsResponse message. Also converts values to other types if specified.
                     * @param message ListMessageBusEnrollmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListMessageBusEnrollmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMessageBusEnrollmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListMessageBusEnrollmentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateMessageBusRequest. */
                interface ICreateMessageBusRequest {

                    /** CreateMessageBusRequest parent */
                    parent?: (string|null);

                    /** CreateMessageBusRequest messageBus */
                    messageBus?: (google.cloud.eventarc.v1.IMessageBus|null);

                    /** CreateMessageBusRequest messageBusId */
                    messageBusId?: (string|null);

                    /** CreateMessageBusRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateMessageBusRequest. */
                class CreateMessageBusRequest implements ICreateMessageBusRequest {

                    /**
                     * Constructs a new CreateMessageBusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreateMessageBusRequest);

                    /** CreateMessageBusRequest parent. */
                    public parent: string;

                    /** CreateMessageBusRequest messageBus. */
                    public messageBus?: (google.cloud.eventarc.v1.IMessageBus|null);

                    /** CreateMessageBusRequest messageBusId. */
                    public messageBusId: string;

                    /** CreateMessageBusRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateMessageBusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMessageBusRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreateMessageBusRequest): google.cloud.eventarc.v1.CreateMessageBusRequest;

                    /**
                     * Encodes the specified CreateMessageBusRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreateMessageBusRequest.verify|verify} messages.
                     * @param message CreateMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreateMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMessageBusRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreateMessageBusRequest.verify|verify} messages.
                     * @param message CreateMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreateMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMessageBusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreateMessageBusRequest;

                    /**
                     * Decodes a CreateMessageBusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreateMessageBusRequest;

                    /**
                     * Verifies a CreateMessageBusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMessageBusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMessageBusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreateMessageBusRequest;

                    /**
                     * Creates a plain object from a CreateMessageBusRequest message. Also converts values to other types if specified.
                     * @param message CreateMessageBusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreateMessageBusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMessageBusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateMessageBusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateMessageBusRequest. */
                interface IUpdateMessageBusRequest {

                    /** UpdateMessageBusRequest messageBus */
                    messageBus?: (google.cloud.eventarc.v1.IMessageBus|null);

                    /** UpdateMessageBusRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMessageBusRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateMessageBusRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateMessageBusRequest. */
                class UpdateMessageBusRequest implements IUpdateMessageBusRequest {

                    /**
                     * Constructs a new UpdateMessageBusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdateMessageBusRequest);

                    /** UpdateMessageBusRequest messageBus. */
                    public messageBus?: (google.cloud.eventarc.v1.IMessageBus|null);

                    /** UpdateMessageBusRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMessageBusRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateMessageBusRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateMessageBusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMessageBusRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdateMessageBusRequest): google.cloud.eventarc.v1.UpdateMessageBusRequest;

                    /**
                     * Encodes the specified UpdateMessageBusRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdateMessageBusRequest.verify|verify} messages.
                     * @param message UpdateMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdateMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMessageBusRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdateMessageBusRequest.verify|verify} messages.
                     * @param message UpdateMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdateMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMessageBusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdateMessageBusRequest;

                    /**
                     * Decodes an UpdateMessageBusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdateMessageBusRequest;

                    /**
                     * Verifies an UpdateMessageBusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMessageBusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMessageBusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdateMessageBusRequest;

                    /**
                     * Creates a plain object from an UpdateMessageBusRequest message. Also converts values to other types if specified.
                     * @param message UpdateMessageBusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdateMessageBusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMessageBusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateMessageBusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteMessageBusRequest. */
                interface IDeleteMessageBusRequest {

                    /** DeleteMessageBusRequest name */
                    name?: (string|null);

                    /** DeleteMessageBusRequest etag */
                    etag?: (string|null);

                    /** DeleteMessageBusRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteMessageBusRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteMessageBusRequest. */
                class DeleteMessageBusRequest implements IDeleteMessageBusRequest {

                    /**
                     * Constructs a new DeleteMessageBusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeleteMessageBusRequest);

                    /** DeleteMessageBusRequest name. */
                    public name: string;

                    /** DeleteMessageBusRequest etag. */
                    public etag: string;

                    /** DeleteMessageBusRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteMessageBusRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteMessageBusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMessageBusRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeleteMessageBusRequest): google.cloud.eventarc.v1.DeleteMessageBusRequest;

                    /**
                     * Encodes the specified DeleteMessageBusRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeleteMessageBusRequest.verify|verify} messages.
                     * @param message DeleteMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeleteMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMessageBusRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeleteMessageBusRequest.verify|verify} messages.
                     * @param message DeleteMessageBusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeleteMessageBusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMessageBusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeleteMessageBusRequest;

                    /**
                     * Decodes a DeleteMessageBusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMessageBusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeleteMessageBusRequest;

                    /**
                     * Verifies a DeleteMessageBusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMessageBusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMessageBusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeleteMessageBusRequest;

                    /**
                     * Creates a plain object from a DeleteMessageBusRequest message. Also converts values to other types if specified.
                     * @param message DeleteMessageBusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeleteMessageBusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMessageBusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteMessageBusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEnrollmentRequest. */
                interface IGetEnrollmentRequest {

                    /** GetEnrollmentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEnrollmentRequest. */
                class GetEnrollmentRequest implements IGetEnrollmentRequest {

                    /**
                     * Constructs a new GetEnrollmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetEnrollmentRequest);

                    /** GetEnrollmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEnrollmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEnrollmentRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetEnrollmentRequest): google.cloud.eventarc.v1.GetEnrollmentRequest;

                    /**
                     * Encodes the specified GetEnrollmentRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetEnrollmentRequest.verify|verify} messages.
                     * @param message GetEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEnrollmentRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetEnrollmentRequest.verify|verify} messages.
                     * @param message GetEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEnrollmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetEnrollmentRequest;

                    /**
                     * Decodes a GetEnrollmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetEnrollmentRequest;

                    /**
                     * Verifies a GetEnrollmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEnrollmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEnrollmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetEnrollmentRequest;

                    /**
                     * Creates a plain object from a GetEnrollmentRequest message. Also converts values to other types if specified.
                     * @param message GetEnrollmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetEnrollmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEnrollmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEnrollmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEnrollmentsRequest. */
                interface IListEnrollmentsRequest {

                    /** ListEnrollmentsRequest parent */
                    parent?: (string|null);

                    /** ListEnrollmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEnrollmentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEnrollmentsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListEnrollmentsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListEnrollmentsRequest. */
                class ListEnrollmentsRequest implements IListEnrollmentsRequest {

                    /**
                     * Constructs a new ListEnrollmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListEnrollmentsRequest);

                    /** ListEnrollmentsRequest parent. */
                    public parent: string;

                    /** ListEnrollmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListEnrollmentsRequest pageToken. */
                    public pageToken: string;

                    /** ListEnrollmentsRequest orderBy. */
                    public orderBy: string;

                    /** ListEnrollmentsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListEnrollmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEnrollmentsRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListEnrollmentsRequest): google.cloud.eventarc.v1.ListEnrollmentsRequest;

                    /**
                     * Encodes the specified ListEnrollmentsRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListEnrollmentsRequest.verify|verify} messages.
                     * @param message ListEnrollmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListEnrollmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEnrollmentsRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListEnrollmentsRequest.verify|verify} messages.
                     * @param message ListEnrollmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListEnrollmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEnrollmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEnrollmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListEnrollmentsRequest;

                    /**
                     * Decodes a ListEnrollmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEnrollmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListEnrollmentsRequest;

                    /**
                     * Verifies a ListEnrollmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEnrollmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEnrollmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListEnrollmentsRequest;

                    /**
                     * Creates a plain object from a ListEnrollmentsRequest message. Also converts values to other types if specified.
                     * @param message ListEnrollmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListEnrollmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEnrollmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEnrollmentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEnrollmentsResponse. */
                interface IListEnrollmentsResponse {

                    /** ListEnrollmentsResponse enrollments */
                    enrollments?: (google.cloud.eventarc.v1.IEnrollment[]|null);

                    /** ListEnrollmentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEnrollmentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListEnrollmentsResponse. */
                class ListEnrollmentsResponse implements IListEnrollmentsResponse {

                    /**
                     * Constructs a new ListEnrollmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListEnrollmentsResponse);

                    /** ListEnrollmentsResponse enrollments. */
                    public enrollments: google.cloud.eventarc.v1.IEnrollment[];

                    /** ListEnrollmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEnrollmentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListEnrollmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEnrollmentsResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListEnrollmentsResponse): google.cloud.eventarc.v1.ListEnrollmentsResponse;

                    /**
                     * Encodes the specified ListEnrollmentsResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListEnrollmentsResponse.verify|verify} messages.
                     * @param message ListEnrollmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListEnrollmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEnrollmentsResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListEnrollmentsResponse.verify|verify} messages.
                     * @param message ListEnrollmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListEnrollmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEnrollmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEnrollmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListEnrollmentsResponse;

                    /**
                     * Decodes a ListEnrollmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEnrollmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListEnrollmentsResponse;

                    /**
                     * Verifies a ListEnrollmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEnrollmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEnrollmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListEnrollmentsResponse;

                    /**
                     * Creates a plain object from a ListEnrollmentsResponse message. Also converts values to other types if specified.
                     * @param message ListEnrollmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListEnrollmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEnrollmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEnrollmentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEnrollmentRequest. */
                interface ICreateEnrollmentRequest {

                    /** CreateEnrollmentRequest parent */
                    parent?: (string|null);

                    /** CreateEnrollmentRequest enrollment */
                    enrollment?: (google.cloud.eventarc.v1.IEnrollment|null);

                    /** CreateEnrollmentRequest enrollmentId */
                    enrollmentId?: (string|null);

                    /** CreateEnrollmentRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateEnrollmentRequest. */
                class CreateEnrollmentRequest implements ICreateEnrollmentRequest {

                    /**
                     * Constructs a new CreateEnrollmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreateEnrollmentRequest);

                    /** CreateEnrollmentRequest parent. */
                    public parent: string;

                    /** CreateEnrollmentRequest enrollment. */
                    public enrollment?: (google.cloud.eventarc.v1.IEnrollment|null);

                    /** CreateEnrollmentRequest enrollmentId. */
                    public enrollmentId: string;

                    /** CreateEnrollmentRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateEnrollmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEnrollmentRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreateEnrollmentRequest): google.cloud.eventarc.v1.CreateEnrollmentRequest;

                    /**
                     * Encodes the specified CreateEnrollmentRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreateEnrollmentRequest.verify|verify} messages.
                     * @param message CreateEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreateEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEnrollmentRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreateEnrollmentRequest.verify|verify} messages.
                     * @param message CreateEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreateEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEnrollmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreateEnrollmentRequest;

                    /**
                     * Decodes a CreateEnrollmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreateEnrollmentRequest;

                    /**
                     * Verifies a CreateEnrollmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEnrollmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEnrollmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreateEnrollmentRequest;

                    /**
                     * Creates a plain object from a CreateEnrollmentRequest message. Also converts values to other types if specified.
                     * @param message CreateEnrollmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreateEnrollmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEnrollmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEnrollmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEnrollmentRequest. */
                interface IUpdateEnrollmentRequest {

                    /** UpdateEnrollmentRequest enrollment */
                    enrollment?: (google.cloud.eventarc.v1.IEnrollment|null);

                    /** UpdateEnrollmentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEnrollmentRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateEnrollmentRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateEnrollmentRequest. */
                class UpdateEnrollmentRequest implements IUpdateEnrollmentRequest {

                    /**
                     * Constructs a new UpdateEnrollmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdateEnrollmentRequest);

                    /** UpdateEnrollmentRequest enrollment. */
                    public enrollment?: (google.cloud.eventarc.v1.IEnrollment|null);

                    /** UpdateEnrollmentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEnrollmentRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateEnrollmentRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateEnrollmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEnrollmentRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdateEnrollmentRequest): google.cloud.eventarc.v1.UpdateEnrollmentRequest;

                    /**
                     * Encodes the specified UpdateEnrollmentRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdateEnrollmentRequest.verify|verify} messages.
                     * @param message UpdateEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdateEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEnrollmentRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdateEnrollmentRequest.verify|verify} messages.
                     * @param message UpdateEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdateEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEnrollmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdateEnrollmentRequest;

                    /**
                     * Decodes an UpdateEnrollmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdateEnrollmentRequest;

                    /**
                     * Verifies an UpdateEnrollmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEnrollmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEnrollmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdateEnrollmentRequest;

                    /**
                     * Creates a plain object from an UpdateEnrollmentRequest message. Also converts values to other types if specified.
                     * @param message UpdateEnrollmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdateEnrollmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEnrollmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEnrollmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEnrollmentRequest. */
                interface IDeleteEnrollmentRequest {

                    /** DeleteEnrollmentRequest name */
                    name?: (string|null);

                    /** DeleteEnrollmentRequest etag */
                    etag?: (string|null);

                    /** DeleteEnrollmentRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteEnrollmentRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteEnrollmentRequest. */
                class DeleteEnrollmentRequest implements IDeleteEnrollmentRequest {

                    /**
                     * Constructs a new DeleteEnrollmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeleteEnrollmentRequest);

                    /** DeleteEnrollmentRequest name. */
                    public name: string;

                    /** DeleteEnrollmentRequest etag. */
                    public etag: string;

                    /** DeleteEnrollmentRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteEnrollmentRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteEnrollmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEnrollmentRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeleteEnrollmentRequest): google.cloud.eventarc.v1.DeleteEnrollmentRequest;

                    /**
                     * Encodes the specified DeleteEnrollmentRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeleteEnrollmentRequest.verify|verify} messages.
                     * @param message DeleteEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeleteEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEnrollmentRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeleteEnrollmentRequest.verify|verify} messages.
                     * @param message DeleteEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeleteEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEnrollmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeleteEnrollmentRequest;

                    /**
                     * Decodes a DeleteEnrollmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeleteEnrollmentRequest;

                    /**
                     * Verifies a DeleteEnrollmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEnrollmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEnrollmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeleteEnrollmentRequest;

                    /**
                     * Creates a plain object from a DeleteEnrollmentRequest message. Also converts values to other types if specified.
                     * @param message DeleteEnrollmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeleteEnrollmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEnrollmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEnrollmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPipelineRequest. */
                interface IGetPipelineRequest {

                    /** GetPipelineRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPipelineRequest. */
                class GetPipelineRequest implements IGetPipelineRequest {

                    /**
                     * Constructs a new GetPipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetPipelineRequest);

                    /** GetPipelineRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPipelineRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetPipelineRequest): google.cloud.eventarc.v1.GetPipelineRequest;

                    /**
                     * Encodes the specified GetPipelineRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetPipelineRequest.verify|verify} messages.
                     * @param message GetPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPipelineRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetPipelineRequest.verify|verify} messages.
                     * @param message GetPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetPipelineRequest;

                    /**
                     * Decodes a GetPipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetPipelineRequest;

                    /**
                     * Verifies a GetPipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetPipelineRequest;

                    /**
                     * Creates a plain object from a GetPipelineRequest message. Also converts values to other types if specified.
                     * @param message GetPipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPipelineRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPipelinesRequest. */
                interface IListPipelinesRequest {

                    /** ListPipelinesRequest parent */
                    parent?: (string|null);

                    /** ListPipelinesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPipelinesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPipelinesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListPipelinesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPipelinesRequest. */
                class ListPipelinesRequest implements IListPipelinesRequest {

                    /**
                     * Constructs a new ListPipelinesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListPipelinesRequest);

                    /** ListPipelinesRequest parent. */
                    public parent: string;

                    /** ListPipelinesRequest pageSize. */
                    public pageSize: number;

                    /** ListPipelinesRequest pageToken. */
                    public pageToken: string;

                    /** ListPipelinesRequest orderBy. */
                    public orderBy: string;

                    /** ListPipelinesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPipelinesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPipelinesRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListPipelinesRequest): google.cloud.eventarc.v1.ListPipelinesRequest;

                    /**
                     * Encodes the specified ListPipelinesRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListPipelinesRequest.verify|verify} messages.
                     * @param message ListPipelinesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListPipelinesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPipelinesRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListPipelinesRequest.verify|verify} messages.
                     * @param message ListPipelinesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListPipelinesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPipelinesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPipelinesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListPipelinesRequest;

                    /**
                     * Decodes a ListPipelinesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPipelinesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListPipelinesRequest;

                    /**
                     * Verifies a ListPipelinesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPipelinesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPipelinesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListPipelinesRequest;

                    /**
                     * Creates a plain object from a ListPipelinesRequest message. Also converts values to other types if specified.
                     * @param message ListPipelinesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListPipelinesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPipelinesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPipelinesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPipelinesResponse. */
                interface IListPipelinesResponse {

                    /** ListPipelinesResponse pipelines */
                    pipelines?: (google.cloud.eventarc.v1.IPipeline[]|null);

                    /** ListPipelinesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPipelinesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPipelinesResponse. */
                class ListPipelinesResponse implements IListPipelinesResponse {

                    /**
                     * Constructs a new ListPipelinesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListPipelinesResponse);

                    /** ListPipelinesResponse pipelines. */
                    public pipelines: google.cloud.eventarc.v1.IPipeline[];

                    /** ListPipelinesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPipelinesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPipelinesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPipelinesResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListPipelinesResponse): google.cloud.eventarc.v1.ListPipelinesResponse;

                    /**
                     * Encodes the specified ListPipelinesResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListPipelinesResponse.verify|verify} messages.
                     * @param message ListPipelinesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListPipelinesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPipelinesResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListPipelinesResponse.verify|verify} messages.
                     * @param message ListPipelinesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListPipelinesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPipelinesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPipelinesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListPipelinesResponse;

                    /**
                     * Decodes a ListPipelinesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPipelinesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListPipelinesResponse;

                    /**
                     * Verifies a ListPipelinesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPipelinesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPipelinesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListPipelinesResponse;

                    /**
                     * Creates a plain object from a ListPipelinesResponse message. Also converts values to other types if specified.
                     * @param message ListPipelinesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListPipelinesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPipelinesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPipelinesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePipelineRequest. */
                interface ICreatePipelineRequest {

                    /** CreatePipelineRequest parent */
                    parent?: (string|null);

                    /** CreatePipelineRequest pipeline */
                    pipeline?: (google.cloud.eventarc.v1.IPipeline|null);

                    /** CreatePipelineRequest pipelineId */
                    pipelineId?: (string|null);

                    /** CreatePipelineRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreatePipelineRequest. */
                class CreatePipelineRequest implements ICreatePipelineRequest {

                    /**
                     * Constructs a new CreatePipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreatePipelineRequest);

                    /** CreatePipelineRequest parent. */
                    public parent: string;

                    /** CreatePipelineRequest pipeline. */
                    public pipeline?: (google.cloud.eventarc.v1.IPipeline|null);

                    /** CreatePipelineRequest pipelineId. */
                    public pipelineId: string;

                    /** CreatePipelineRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreatePipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePipelineRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreatePipelineRequest): google.cloud.eventarc.v1.CreatePipelineRequest;

                    /**
                     * Encodes the specified CreatePipelineRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreatePipelineRequest.verify|verify} messages.
                     * @param message CreatePipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreatePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePipelineRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreatePipelineRequest.verify|verify} messages.
                     * @param message CreatePipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreatePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreatePipelineRequest;

                    /**
                     * Decodes a CreatePipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreatePipelineRequest;

                    /**
                     * Verifies a CreatePipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreatePipelineRequest;

                    /**
                     * Creates a plain object from a CreatePipelineRequest message. Also converts values to other types if specified.
                     * @param message CreatePipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreatePipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePipelineRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePipelineRequest. */
                interface IUpdatePipelineRequest {

                    /** UpdatePipelineRequest pipeline */
                    pipeline?: (google.cloud.eventarc.v1.IPipeline|null);

                    /** UpdatePipelineRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePipelineRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdatePipelineRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdatePipelineRequest. */
                class UpdatePipelineRequest implements IUpdatePipelineRequest {

                    /**
                     * Constructs a new UpdatePipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdatePipelineRequest);

                    /** UpdatePipelineRequest pipeline. */
                    public pipeline?: (google.cloud.eventarc.v1.IPipeline|null);

                    /** UpdatePipelineRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePipelineRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdatePipelineRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdatePipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePipelineRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdatePipelineRequest): google.cloud.eventarc.v1.UpdatePipelineRequest;

                    /**
                     * Encodes the specified UpdatePipelineRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdatePipelineRequest.verify|verify} messages.
                     * @param message UpdatePipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdatePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePipelineRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdatePipelineRequest.verify|verify} messages.
                     * @param message UpdatePipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdatePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdatePipelineRequest;

                    /**
                     * Decodes an UpdatePipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdatePipelineRequest;

                    /**
                     * Verifies an UpdatePipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdatePipelineRequest;

                    /**
                     * Creates a plain object from an UpdatePipelineRequest message. Also converts values to other types if specified.
                     * @param message UpdatePipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdatePipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePipelineRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePipelineRequest. */
                interface IDeletePipelineRequest {

                    /** DeletePipelineRequest name */
                    name?: (string|null);

                    /** DeletePipelineRequest etag */
                    etag?: (string|null);

                    /** DeletePipelineRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeletePipelineRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeletePipelineRequest. */
                class DeletePipelineRequest implements IDeletePipelineRequest {

                    /**
                     * Constructs a new DeletePipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeletePipelineRequest);

                    /** DeletePipelineRequest name. */
                    public name: string;

                    /** DeletePipelineRequest etag. */
                    public etag: string;

                    /** DeletePipelineRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeletePipelineRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeletePipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePipelineRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeletePipelineRequest): google.cloud.eventarc.v1.DeletePipelineRequest;

                    /**
                     * Encodes the specified DeletePipelineRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeletePipelineRequest.verify|verify} messages.
                     * @param message DeletePipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeletePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePipelineRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeletePipelineRequest.verify|verify} messages.
                     * @param message DeletePipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeletePipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeletePipelineRequest;

                    /**
                     * Decodes a DeletePipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeletePipelineRequest;

                    /**
                     * Verifies a DeletePipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeletePipelineRequest;

                    /**
                     * Creates a plain object from a DeletePipelineRequest message. Also converts values to other types if specified.
                     * @param message DeletePipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeletePipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePipelineRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGoogleApiSourceRequest. */
                interface IGetGoogleApiSourceRequest {

                    /** GetGoogleApiSourceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGoogleApiSourceRequest. */
                class GetGoogleApiSourceRequest implements IGetGoogleApiSourceRequest {

                    /**
                     * Constructs a new GetGoogleApiSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGetGoogleApiSourceRequest);

                    /** GetGoogleApiSourceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGoogleApiSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGoogleApiSourceRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGetGoogleApiSourceRequest): google.cloud.eventarc.v1.GetGoogleApiSourceRequest;

                    /**
                     * Encodes the specified GetGoogleApiSourceRequest message. Does not implicitly {@link google.cloud.eventarc.v1.GetGoogleApiSourceRequest.verify|verify} messages.
                     * @param message GetGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGetGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGoogleApiSourceRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GetGoogleApiSourceRequest.verify|verify} messages.
                     * @param message GetGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGetGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGoogleApiSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GetGoogleApiSourceRequest;

                    /**
                     * Decodes a GetGoogleApiSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GetGoogleApiSourceRequest;

                    /**
                     * Verifies a GetGoogleApiSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGoogleApiSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGoogleApiSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GetGoogleApiSourceRequest;

                    /**
                     * Creates a plain object from a GetGoogleApiSourceRequest message. Also converts values to other types if specified.
                     * @param message GetGoogleApiSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GetGoogleApiSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGoogleApiSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGoogleApiSourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGoogleApiSourcesRequest. */
                interface IListGoogleApiSourcesRequest {

                    /** ListGoogleApiSourcesRequest parent */
                    parent?: (string|null);

                    /** ListGoogleApiSourcesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGoogleApiSourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGoogleApiSourcesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListGoogleApiSourcesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListGoogleApiSourcesRequest. */
                class ListGoogleApiSourcesRequest implements IListGoogleApiSourcesRequest {

                    /**
                     * Constructs a new ListGoogleApiSourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListGoogleApiSourcesRequest);

                    /** ListGoogleApiSourcesRequest parent. */
                    public parent: string;

                    /** ListGoogleApiSourcesRequest pageSize. */
                    public pageSize: number;

                    /** ListGoogleApiSourcesRequest pageToken. */
                    public pageToken: string;

                    /** ListGoogleApiSourcesRequest orderBy. */
                    public orderBy: string;

                    /** ListGoogleApiSourcesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListGoogleApiSourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGoogleApiSourcesRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListGoogleApiSourcesRequest): google.cloud.eventarc.v1.ListGoogleApiSourcesRequest;

                    /**
                     * Encodes the specified ListGoogleApiSourcesRequest message. Does not implicitly {@link google.cloud.eventarc.v1.ListGoogleApiSourcesRequest.verify|verify} messages.
                     * @param message ListGoogleApiSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListGoogleApiSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGoogleApiSourcesRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListGoogleApiSourcesRequest.verify|verify} messages.
                     * @param message ListGoogleApiSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListGoogleApiSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGoogleApiSourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGoogleApiSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListGoogleApiSourcesRequest;

                    /**
                     * Decodes a ListGoogleApiSourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGoogleApiSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListGoogleApiSourcesRequest;

                    /**
                     * Verifies a ListGoogleApiSourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGoogleApiSourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGoogleApiSourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListGoogleApiSourcesRequest;

                    /**
                     * Creates a plain object from a ListGoogleApiSourcesRequest message. Also converts values to other types if specified.
                     * @param message ListGoogleApiSourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListGoogleApiSourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGoogleApiSourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGoogleApiSourcesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGoogleApiSourcesResponse. */
                interface IListGoogleApiSourcesResponse {

                    /** ListGoogleApiSourcesResponse googleApiSources */
                    googleApiSources?: (google.cloud.eventarc.v1.IGoogleApiSource[]|null);

                    /** ListGoogleApiSourcesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListGoogleApiSourcesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListGoogleApiSourcesResponse. */
                class ListGoogleApiSourcesResponse implements IListGoogleApiSourcesResponse {

                    /**
                     * Constructs a new ListGoogleApiSourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IListGoogleApiSourcesResponse);

                    /** ListGoogleApiSourcesResponse googleApiSources. */
                    public googleApiSources: google.cloud.eventarc.v1.IGoogleApiSource[];

                    /** ListGoogleApiSourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListGoogleApiSourcesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListGoogleApiSourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGoogleApiSourcesResponse instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IListGoogleApiSourcesResponse): google.cloud.eventarc.v1.ListGoogleApiSourcesResponse;

                    /**
                     * Encodes the specified ListGoogleApiSourcesResponse message. Does not implicitly {@link google.cloud.eventarc.v1.ListGoogleApiSourcesResponse.verify|verify} messages.
                     * @param message ListGoogleApiSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IListGoogleApiSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGoogleApiSourcesResponse message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.ListGoogleApiSourcesResponse.verify|verify} messages.
                     * @param message ListGoogleApiSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IListGoogleApiSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGoogleApiSourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGoogleApiSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.ListGoogleApiSourcesResponse;

                    /**
                     * Decodes a ListGoogleApiSourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGoogleApiSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.ListGoogleApiSourcesResponse;

                    /**
                     * Verifies a ListGoogleApiSourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGoogleApiSourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGoogleApiSourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.ListGoogleApiSourcesResponse;

                    /**
                     * Creates a plain object from a ListGoogleApiSourcesResponse message. Also converts values to other types if specified.
                     * @param message ListGoogleApiSourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.ListGoogleApiSourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGoogleApiSourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGoogleApiSourcesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateGoogleApiSourceRequest. */
                interface ICreateGoogleApiSourceRequest {

                    /** CreateGoogleApiSourceRequest parent */
                    parent?: (string|null);

                    /** CreateGoogleApiSourceRequest googleApiSource */
                    googleApiSource?: (google.cloud.eventarc.v1.IGoogleApiSource|null);

                    /** CreateGoogleApiSourceRequest googleApiSourceId */
                    googleApiSourceId?: (string|null);

                    /** CreateGoogleApiSourceRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateGoogleApiSourceRequest. */
                class CreateGoogleApiSourceRequest implements ICreateGoogleApiSourceRequest {

                    /**
                     * Constructs a new CreateGoogleApiSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICreateGoogleApiSourceRequest);

                    /** CreateGoogleApiSourceRequest parent. */
                    public parent: string;

                    /** CreateGoogleApiSourceRequest googleApiSource. */
                    public googleApiSource?: (google.cloud.eventarc.v1.IGoogleApiSource|null);

                    /** CreateGoogleApiSourceRequest googleApiSourceId. */
                    public googleApiSourceId: string;

                    /** CreateGoogleApiSourceRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateGoogleApiSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGoogleApiSourceRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICreateGoogleApiSourceRequest): google.cloud.eventarc.v1.CreateGoogleApiSourceRequest;

                    /**
                     * Encodes the specified CreateGoogleApiSourceRequest message. Does not implicitly {@link google.cloud.eventarc.v1.CreateGoogleApiSourceRequest.verify|verify} messages.
                     * @param message CreateGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICreateGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGoogleApiSourceRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CreateGoogleApiSourceRequest.verify|verify} messages.
                     * @param message CreateGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICreateGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGoogleApiSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CreateGoogleApiSourceRequest;

                    /**
                     * Decodes a CreateGoogleApiSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CreateGoogleApiSourceRequest;

                    /**
                     * Verifies a CreateGoogleApiSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGoogleApiSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGoogleApiSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CreateGoogleApiSourceRequest;

                    /**
                     * Creates a plain object from a CreateGoogleApiSourceRequest message. Also converts values to other types if specified.
                     * @param message CreateGoogleApiSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CreateGoogleApiSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGoogleApiSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateGoogleApiSourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateGoogleApiSourceRequest. */
                interface IUpdateGoogleApiSourceRequest {

                    /** UpdateGoogleApiSourceRequest googleApiSource */
                    googleApiSource?: (google.cloud.eventarc.v1.IGoogleApiSource|null);

                    /** UpdateGoogleApiSourceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGoogleApiSourceRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateGoogleApiSourceRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateGoogleApiSourceRequest. */
                class UpdateGoogleApiSourceRequest implements IUpdateGoogleApiSourceRequest {

                    /**
                     * Constructs a new UpdateGoogleApiSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IUpdateGoogleApiSourceRequest);

                    /** UpdateGoogleApiSourceRequest googleApiSource. */
                    public googleApiSource?: (google.cloud.eventarc.v1.IGoogleApiSource|null);

                    /** UpdateGoogleApiSourceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGoogleApiSourceRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateGoogleApiSourceRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateGoogleApiSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGoogleApiSourceRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IUpdateGoogleApiSourceRequest): google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest;

                    /**
                     * Encodes the specified UpdateGoogleApiSourceRequest message. Does not implicitly {@link google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest.verify|verify} messages.
                     * @param message UpdateGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IUpdateGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGoogleApiSourceRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest.verify|verify} messages.
                     * @param message UpdateGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IUpdateGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGoogleApiSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest;

                    /**
                     * Decodes an UpdateGoogleApiSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest;

                    /**
                     * Verifies an UpdateGoogleApiSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGoogleApiSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGoogleApiSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest;

                    /**
                     * Creates a plain object from an UpdateGoogleApiSourceRequest message. Also converts values to other types if specified.
                     * @param message UpdateGoogleApiSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.UpdateGoogleApiSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGoogleApiSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateGoogleApiSourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteGoogleApiSourceRequest. */
                interface IDeleteGoogleApiSourceRequest {

                    /** DeleteGoogleApiSourceRequest name */
                    name?: (string|null);

                    /** DeleteGoogleApiSourceRequest etag */
                    etag?: (string|null);

                    /** DeleteGoogleApiSourceRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteGoogleApiSourceRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteGoogleApiSourceRequest. */
                class DeleteGoogleApiSourceRequest implements IDeleteGoogleApiSourceRequest {

                    /**
                     * Constructs a new DeleteGoogleApiSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDeleteGoogleApiSourceRequest);

                    /** DeleteGoogleApiSourceRequest name. */
                    public name: string;

                    /** DeleteGoogleApiSourceRequest etag. */
                    public etag: string;

                    /** DeleteGoogleApiSourceRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteGoogleApiSourceRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteGoogleApiSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGoogleApiSourceRequest instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDeleteGoogleApiSourceRequest): google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest;

                    /**
                     * Encodes the specified DeleteGoogleApiSourceRequest message. Does not implicitly {@link google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest.verify|verify} messages.
                     * @param message DeleteGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDeleteGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGoogleApiSourceRequest message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest.verify|verify} messages.
                     * @param message DeleteGoogleApiSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDeleteGoogleApiSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGoogleApiSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest;

                    /**
                     * Decodes a DeleteGoogleApiSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGoogleApiSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest;

                    /**
                     * Verifies a DeleteGoogleApiSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGoogleApiSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGoogleApiSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest;

                    /**
                     * Creates a plain object from a DeleteGoogleApiSourceRequest message. Also converts values to other types if specified.
                     * @param message DeleteGoogleApiSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.DeleteGoogleApiSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGoogleApiSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteGoogleApiSourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    constructor(properties?: google.cloud.eventarc.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.eventarc.v1.IOperationMetadata): google.cloud.eventarc.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.eventarc.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a GoogleApiSource. */
                interface IGoogleApiSource {

                    /** GoogleApiSource name */
                    name?: (string|null);

                    /** GoogleApiSource uid */
                    uid?: (string|null);

                    /** GoogleApiSource etag */
                    etag?: (string|null);

                    /** GoogleApiSource createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleApiSource updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleApiSource labels */
                    labels?: ({ [k: string]: string }|null);

                    /** GoogleApiSource annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** GoogleApiSource displayName */
                    displayName?: (string|null);

                    /** GoogleApiSource destination */
                    destination?: (string|null);

                    /** GoogleApiSource cryptoKeyName */
                    cryptoKeyName?: (string|null);

                    /** GoogleApiSource loggingConfig */
                    loggingConfig?: (google.cloud.eventarc.v1.ILoggingConfig|null);
                }

                /** Represents a GoogleApiSource. */
                class GoogleApiSource implements IGoogleApiSource {

                    /**
                     * Constructs a new GoogleApiSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGoogleApiSource);

                    /** GoogleApiSource name. */
                    public name: string;

                    /** GoogleApiSource uid. */
                    public uid: string;

                    /** GoogleApiSource etag. */
                    public etag: string;

                    /** GoogleApiSource createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleApiSource updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleApiSource labels. */
                    public labels: { [k: string]: string };

                    /** GoogleApiSource annotations. */
                    public annotations: { [k: string]: string };

                    /** GoogleApiSource displayName. */
                    public displayName: string;

                    /** GoogleApiSource destination. */
                    public destination: string;

                    /** GoogleApiSource cryptoKeyName. */
                    public cryptoKeyName: string;

                    /** GoogleApiSource loggingConfig. */
                    public loggingConfig?: (google.cloud.eventarc.v1.ILoggingConfig|null);

                    /**
                     * Creates a new GoogleApiSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GoogleApiSource instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGoogleApiSource): google.cloud.eventarc.v1.GoogleApiSource;

                    /**
                     * Encodes the specified GoogleApiSource message. Does not implicitly {@link google.cloud.eventarc.v1.GoogleApiSource.verify|verify} messages.
                     * @param message GoogleApiSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGoogleApiSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GoogleApiSource message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GoogleApiSource.verify|verify} messages.
                     * @param message GoogleApiSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGoogleApiSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GoogleApiSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GoogleApiSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GoogleApiSource;

                    /**
                     * Decodes a GoogleApiSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GoogleApiSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GoogleApiSource;

                    /**
                     * Verifies a GoogleApiSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GoogleApiSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GoogleApiSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GoogleApiSource;

                    /**
                     * Creates a plain object from a GoogleApiSource message. Also converts values to other types if specified.
                     * @param message GoogleApiSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GoogleApiSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GoogleApiSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GoogleApiSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LoggingConfig. */
                interface ILoggingConfig {

                    /** LoggingConfig logSeverity */
                    logSeverity?: (google.cloud.eventarc.v1.LoggingConfig.LogSeverity|keyof typeof google.cloud.eventarc.v1.LoggingConfig.LogSeverity|null);
                }

                /** Represents a LoggingConfig. */
                class LoggingConfig implements ILoggingConfig {

                    /**
                     * Constructs a new LoggingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ILoggingConfig);

                    /** LoggingConfig logSeverity. */
                    public logSeverity: (google.cloud.eventarc.v1.LoggingConfig.LogSeverity|keyof typeof google.cloud.eventarc.v1.LoggingConfig.LogSeverity);

                    /**
                     * Creates a new LoggingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoggingConfig instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ILoggingConfig): google.cloud.eventarc.v1.LoggingConfig;

                    /**
                     * Encodes the specified LoggingConfig message. Does not implicitly {@link google.cloud.eventarc.v1.LoggingConfig.verify|verify} messages.
                     * @param message LoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoggingConfig message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.LoggingConfig.verify|verify} messages.
                     * @param message LoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoggingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.LoggingConfig;

                    /**
                     * Decodes a LoggingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.LoggingConfig;

                    /**
                     * Verifies a LoggingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoggingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoggingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.LoggingConfig;

                    /**
                     * Creates a plain object from a LoggingConfig message. Also converts values to other types if specified.
                     * @param message LoggingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.LoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoggingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LoggingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LoggingConfig {

                    /** LogSeverity enum. */
                    enum LogSeverity {
                        LOG_SEVERITY_UNSPECIFIED = 0,
                        NONE = 1,
                        DEBUG = 2,
                        INFO = 3,
                        NOTICE = 4,
                        WARNING = 5,
                        ERROR = 6,
                        CRITICAL = 7,
                        ALERT = 8,
                        EMERGENCY = 9
                    }
                }

                /** Properties of a GoogleChannelConfig. */
                interface IGoogleChannelConfig {

                    /** GoogleChannelConfig name */
                    name?: (string|null);

                    /** GoogleChannelConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleChannelConfig cryptoKeyName */
                    cryptoKeyName?: (string|null);
                }

                /** Represents a GoogleChannelConfig. */
                class GoogleChannelConfig implements IGoogleChannelConfig {

                    /**
                     * Constructs a new GoogleChannelConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGoogleChannelConfig);

                    /** GoogleChannelConfig name. */
                    public name: string;

                    /** GoogleChannelConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleChannelConfig cryptoKeyName. */
                    public cryptoKeyName: string;

                    /**
                     * Creates a new GoogleChannelConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GoogleChannelConfig instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGoogleChannelConfig): google.cloud.eventarc.v1.GoogleChannelConfig;

                    /**
                     * Encodes the specified GoogleChannelConfig message. Does not implicitly {@link google.cloud.eventarc.v1.GoogleChannelConfig.verify|verify} messages.
                     * @param message GoogleChannelConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGoogleChannelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GoogleChannelConfig message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GoogleChannelConfig.verify|verify} messages.
                     * @param message GoogleChannelConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGoogleChannelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GoogleChannelConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GoogleChannelConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GoogleChannelConfig;

                    /**
                     * Decodes a GoogleChannelConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GoogleChannelConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GoogleChannelConfig;

                    /**
                     * Verifies a GoogleChannelConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GoogleChannelConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GoogleChannelConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GoogleChannelConfig;

                    /**
                     * Creates a plain object from a GoogleChannelConfig message. Also converts values to other types if specified.
                     * @param message GoogleChannelConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GoogleChannelConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GoogleChannelConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GoogleChannelConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageBus. */
                interface IMessageBus {

                    /** MessageBus name */
                    name?: (string|null);

                    /** MessageBus uid */
                    uid?: (string|null);

                    /** MessageBus etag */
                    etag?: (string|null);

                    /** MessageBus createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** MessageBus updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** MessageBus labels */
                    labels?: ({ [k: string]: string }|null);

                    /** MessageBus annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** MessageBus displayName */
                    displayName?: (string|null);

                    /** MessageBus cryptoKeyName */
                    cryptoKeyName?: (string|null);

                    /** MessageBus loggingConfig */
                    loggingConfig?: (google.cloud.eventarc.v1.ILoggingConfig|null);
                }

                /** Represents a MessageBus. */
                class MessageBus implements IMessageBus {

                    /**
                     * Constructs a new MessageBus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IMessageBus);

                    /** MessageBus name. */
                    public name: string;

                    /** MessageBus uid. */
                    public uid: string;

                    /** MessageBus etag. */
                    public etag: string;

                    /** MessageBus createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** MessageBus updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** MessageBus labels. */
                    public labels: { [k: string]: string };

                    /** MessageBus annotations. */
                    public annotations: { [k: string]: string };

                    /** MessageBus displayName. */
                    public displayName: string;

                    /** MessageBus cryptoKeyName. */
                    public cryptoKeyName: string;

                    /** MessageBus loggingConfig. */
                    public loggingConfig?: (google.cloud.eventarc.v1.ILoggingConfig|null);

                    /**
                     * Creates a new MessageBus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageBus instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IMessageBus): google.cloud.eventarc.v1.MessageBus;

                    /**
                     * Encodes the specified MessageBus message. Does not implicitly {@link google.cloud.eventarc.v1.MessageBus.verify|verify} messages.
                     * @param message MessageBus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IMessageBus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageBus message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.MessageBus.verify|verify} messages.
                     * @param message MessageBus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IMessageBus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageBus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageBus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.MessageBus;

                    /**
                     * Decodes a MessageBus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageBus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.MessageBus;

                    /**
                     * Verifies a MessageBus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageBus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageBus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.MessageBus;

                    /**
                     * Creates a plain object from a MessageBus message. Also converts values to other types if specified.
                     * @param message MessageBus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.MessageBus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageBus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessageBus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Pipeline. */
                interface IPipeline {

                    /** Pipeline name */
                    name?: (string|null);

                    /** Pipeline createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Pipeline updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Pipeline labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Pipeline uid */
                    uid?: (string|null);

                    /** Pipeline annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Pipeline displayName */
                    displayName?: (string|null);

                    /** Pipeline destinations */
                    destinations?: (google.cloud.eventarc.v1.Pipeline.IDestination[]|null);

                    /** Pipeline mediations */
                    mediations?: (google.cloud.eventarc.v1.Pipeline.IMediation[]|null);

                    /** Pipeline cryptoKeyName */
                    cryptoKeyName?: (string|null);

                    /** Pipeline inputPayloadFormat */
                    inputPayloadFormat?: (google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat|null);

                    /** Pipeline loggingConfig */
                    loggingConfig?: (google.cloud.eventarc.v1.ILoggingConfig|null);

                    /** Pipeline retryPolicy */
                    retryPolicy?: (google.cloud.eventarc.v1.Pipeline.IRetryPolicy|null);

                    /** Pipeline etag */
                    etag?: (string|null);
                }

                /** Represents a Pipeline. */
                class Pipeline implements IPipeline {

                    /**
                     * Constructs a new Pipeline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IPipeline);

                    /** Pipeline name. */
                    public name: string;

                    /** Pipeline createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Pipeline updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Pipeline labels. */
                    public labels: { [k: string]: string };

                    /** Pipeline uid. */
                    public uid: string;

                    /** Pipeline annotations. */
                    public annotations: { [k: string]: string };

                    /** Pipeline displayName. */
                    public displayName: string;

                    /** Pipeline destinations. */
                    public destinations: google.cloud.eventarc.v1.Pipeline.IDestination[];

                    /** Pipeline mediations. */
                    public mediations: google.cloud.eventarc.v1.Pipeline.IMediation[];

                    /** Pipeline cryptoKeyName. */
                    public cryptoKeyName: string;

                    /** Pipeline inputPayloadFormat. */
                    public inputPayloadFormat?: (google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat|null);

                    /** Pipeline loggingConfig. */
                    public loggingConfig?: (google.cloud.eventarc.v1.ILoggingConfig|null);

                    /** Pipeline retryPolicy. */
                    public retryPolicy?: (google.cloud.eventarc.v1.Pipeline.IRetryPolicy|null);

                    /** Pipeline etag. */
                    public etag: string;

                    /**
                     * Creates a new Pipeline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Pipeline instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IPipeline): google.cloud.eventarc.v1.Pipeline;

                    /**
                     * Encodes the specified Pipeline message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.verify|verify} messages.
                     * @param message Pipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Pipeline message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.verify|verify} messages.
                     * @param message Pipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Pipeline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Pipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline;

                    /**
                     * Decodes a Pipeline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Pipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline;

                    /**
                     * Verifies a Pipeline message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Pipeline message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Pipeline
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline;

                    /**
                     * Creates a plain object from a Pipeline message. Also converts values to other types if specified.
                     * @param message Pipeline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Pipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Pipeline to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Pipeline
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Pipeline {

                    /** Properties of a MessagePayloadFormat. */
                    interface IMessagePayloadFormat {

                        /** MessagePayloadFormat protobuf */
                        protobuf?: (google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IProtobufFormat|null);

                        /** MessagePayloadFormat avro */
                        avro?: (google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IAvroFormat|null);

                        /** MessagePayloadFormat json */
                        json?: (google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IJsonFormat|null);
                    }

                    /** Represents a MessagePayloadFormat. */
                    class MessagePayloadFormat implements IMessagePayloadFormat {

                        /**
                         * Constructs a new MessagePayloadFormat.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat);

                        /** MessagePayloadFormat protobuf. */
                        public protobuf?: (google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IProtobufFormat|null);

                        /** MessagePayloadFormat avro. */
                        public avro?: (google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IAvroFormat|null);

                        /** MessagePayloadFormat json. */
                        public json?: (google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IJsonFormat|null);

                        /** MessagePayloadFormat kind. */
                        public kind?: ("protobuf"|"avro"|"json");

                        /**
                         * Creates a new MessagePayloadFormat instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MessagePayloadFormat instance
                         */
                        public static create(properties?: google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat;

                        /**
                         * Encodes the specified MessagePayloadFormat message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.verify|verify} messages.
                         * @param message MessagePayloadFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MessagePayloadFormat message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.verify|verify} messages.
                         * @param message MessagePayloadFormat message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MessagePayloadFormat message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MessagePayloadFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat;

                        /**
                         * Decodes a MessagePayloadFormat message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MessagePayloadFormat
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat;

                        /**
                         * Verifies a MessagePayloadFormat message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MessagePayloadFormat message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MessagePayloadFormat
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat;

                        /**
                         * Creates a plain object from a MessagePayloadFormat message. Also converts values to other types if specified.
                         * @param message MessagePayloadFormat
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MessagePayloadFormat to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MessagePayloadFormat
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MessagePayloadFormat {

                        /** Properties of a JsonFormat. */
                        interface IJsonFormat {
                        }

                        /** Represents a JsonFormat. */
                        class JsonFormat implements IJsonFormat {

                            /**
                             * Constructs a new JsonFormat.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IJsonFormat);

                            /**
                             * Creates a new JsonFormat instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns JsonFormat instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IJsonFormat): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat;

                            /**
                             * Encodes the specified JsonFormat message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat.verify|verify} messages.
                             * @param message JsonFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IJsonFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified JsonFormat message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat.verify|verify} messages.
                             * @param message JsonFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IJsonFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a JsonFormat message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns JsonFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat;

                            /**
                             * Decodes a JsonFormat message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns JsonFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat;

                            /**
                             * Verifies a JsonFormat message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a JsonFormat message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns JsonFormat
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat;

                            /**
                             * Creates a plain object from a JsonFormat message. Also converts values to other types if specified.
                             * @param message JsonFormat
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.JsonFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this JsonFormat to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for JsonFormat
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ProtobufFormat. */
                        interface IProtobufFormat {

                            /** ProtobufFormat schemaDefinition */
                            schemaDefinition?: (string|null);
                        }

                        /** Represents a ProtobufFormat. */
                        class ProtobufFormat implements IProtobufFormat {

                            /**
                             * Constructs a new ProtobufFormat.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IProtobufFormat);

                            /** ProtobufFormat schemaDefinition. */
                            public schemaDefinition: string;

                            /**
                             * Creates a new ProtobufFormat instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ProtobufFormat instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IProtobufFormat): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat;

                            /**
                             * Encodes the specified ProtobufFormat message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat.verify|verify} messages.
                             * @param message ProtobufFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IProtobufFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ProtobufFormat message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat.verify|verify} messages.
                             * @param message ProtobufFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IProtobufFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ProtobufFormat message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ProtobufFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat;

                            /**
                             * Decodes a ProtobufFormat message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ProtobufFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat;

                            /**
                             * Verifies a ProtobufFormat message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ProtobufFormat message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ProtobufFormat
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat;

                            /**
                             * Creates a plain object from a ProtobufFormat message. Also converts values to other types if specified.
                             * @param message ProtobufFormat
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.ProtobufFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ProtobufFormat to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ProtobufFormat
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AvroFormat. */
                        interface IAvroFormat {

                            /** AvroFormat schemaDefinition */
                            schemaDefinition?: (string|null);
                        }

                        /** Represents an AvroFormat. */
                        class AvroFormat implements IAvroFormat {

                            /**
                             * Constructs a new AvroFormat.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IAvroFormat);

                            /** AvroFormat schemaDefinition. */
                            public schemaDefinition: string;

                            /**
                             * Creates a new AvroFormat instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AvroFormat instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IAvroFormat): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat;

                            /**
                             * Encodes the specified AvroFormat message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat.verify|verify} messages.
                             * @param message AvroFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IAvroFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AvroFormat message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat.verify|verify} messages.
                             * @param message AvroFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.IAvroFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AvroFormat message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AvroFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat;

                            /**
                             * Decodes an AvroFormat message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AvroFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat;

                            /**
                             * Verifies an AvroFormat message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AvroFormat message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AvroFormat
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat;

                            /**
                             * Creates a plain object from an AvroFormat message. Also converts values to other types if specified.
                             * @param message AvroFormat
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.MessagePayloadFormat.AvroFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AvroFormat to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AvroFormat
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Destination. */
                    interface IDestination {

                        /** Destination networkConfig */
                        networkConfig?: (google.cloud.eventarc.v1.Pipeline.Destination.INetworkConfig|null);

                        /** Destination httpEndpoint */
                        httpEndpoint?: (google.cloud.eventarc.v1.Pipeline.Destination.IHttpEndpoint|null);

                        /** Destination workflow */
                        workflow?: (string|null);

                        /** Destination messageBus */
                        messageBus?: (string|null);

                        /** Destination topic */
                        topic?: (string|null);

                        /** Destination authenticationConfig */
                        authenticationConfig?: (google.cloud.eventarc.v1.Pipeline.Destination.IAuthenticationConfig|null);

                        /** Destination outputPayloadFormat */
                        outputPayloadFormat?: (google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat|null);
                    }

                    /** Represents a Destination. */
                    class Destination implements IDestination {

                        /**
                         * Constructs a new Destination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.eventarc.v1.Pipeline.IDestination);

                        /** Destination networkConfig. */
                        public networkConfig?: (google.cloud.eventarc.v1.Pipeline.Destination.INetworkConfig|null);

                        /** Destination httpEndpoint. */
                        public httpEndpoint?: (google.cloud.eventarc.v1.Pipeline.Destination.IHttpEndpoint|null);

                        /** Destination workflow. */
                        public workflow?: (string|null);

                        /** Destination messageBus. */
                        public messageBus?: (string|null);

                        /** Destination topic. */
                        public topic?: (string|null);

                        /** Destination authenticationConfig. */
                        public authenticationConfig?: (google.cloud.eventarc.v1.Pipeline.Destination.IAuthenticationConfig|null);

                        /** Destination outputPayloadFormat. */
                        public outputPayloadFormat?: (google.cloud.eventarc.v1.Pipeline.IMessagePayloadFormat|null);

                        /** Destination destinationDescriptor. */
                        public destinationDescriptor?: ("httpEndpoint"|"workflow"|"messageBus"|"topic");

                        /**
                         * Creates a new Destination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Destination instance
                         */
                        public static create(properties?: google.cloud.eventarc.v1.Pipeline.IDestination): google.cloud.eventarc.v1.Pipeline.Destination;

                        /**
                         * Encodes the specified Destination message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.verify|verify} messages.
                         * @param message Destination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.eventarc.v1.Pipeline.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.verify|verify} messages.
                         * @param message Destination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Destination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Destination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Destination;

                        /**
                         * Decodes a Destination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Destination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Destination;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Destination;

                        /**
                         * Creates a plain object from a Destination message. Also converts values to other types if specified.
                         * @param message Destination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.eventarc.v1.Pipeline.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    namespace Destination {

                        /** Properties of a NetworkConfig. */
                        interface INetworkConfig {

                            /** NetworkConfig networkAttachment */
                            networkAttachment?: (string|null);
                        }

                        /** Represents a NetworkConfig. */
                        class NetworkConfig implements INetworkConfig {

                            /**
                             * Constructs a new NetworkConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.Destination.INetworkConfig);

                            /** NetworkConfig networkAttachment. */
                            public networkAttachment: string;

                            /**
                             * Creates a new NetworkConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NetworkConfig instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.Destination.INetworkConfig): google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig;

                            /**
                             * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig.verify|verify} messages.
                             * @param message NetworkConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.Destination.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig.verify|verify} messages.
                             * @param message NetworkConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.Destination.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NetworkConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NetworkConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig;

                            /**
                             * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NetworkConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig;

                            /**
                             * Verifies a NetworkConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NetworkConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig;

                            /**
                             * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                             * @param message NetworkConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.Destination.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NetworkConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for NetworkConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a HttpEndpoint. */
                        interface IHttpEndpoint {

                            /** HttpEndpoint uri */
                            uri?: (string|null);

                            /** HttpEndpoint messageBindingTemplate */
                            messageBindingTemplate?: (string|null);
                        }

                        /** Represents a HttpEndpoint. */
                        class HttpEndpoint implements IHttpEndpoint {

                            /**
                             * Constructs a new HttpEndpoint.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.Destination.IHttpEndpoint);

                            /** HttpEndpoint uri. */
                            public uri: string;

                            /** HttpEndpoint messageBindingTemplate. */
                            public messageBindingTemplate: string;

                            /**
                             * Creates a new HttpEndpoint instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HttpEndpoint instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.Destination.IHttpEndpoint): google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint;

                            /**
                             * Encodes the specified HttpEndpoint message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint.verify|verify} messages.
                             * @param message HttpEndpoint message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.Destination.IHttpEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified HttpEndpoint message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint.verify|verify} messages.
                             * @param message HttpEndpoint message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.Destination.IHttpEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HttpEndpoint message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HttpEndpoint
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint;

                            /**
                             * Decodes a HttpEndpoint message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns HttpEndpoint
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint;

                            /**
                             * Verifies a HttpEndpoint message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a HttpEndpoint message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns HttpEndpoint
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint;

                            /**
                             * Creates a plain object from a HttpEndpoint message. Also converts values to other types if specified.
                             * @param message HttpEndpoint
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.Destination.HttpEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this HttpEndpoint to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for HttpEndpoint
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AuthenticationConfig. */
                        interface IAuthenticationConfig {

                            /** AuthenticationConfig googleOidc */
                            googleOidc?: (google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOidcToken|null);

                            /** AuthenticationConfig oauthToken */
                            oauthToken?: (google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOAuthToken|null);
                        }

                        /** Represents an AuthenticationConfig. */
                        class AuthenticationConfig implements IAuthenticationConfig {

                            /**
                             * Constructs a new AuthenticationConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.Destination.IAuthenticationConfig);

                            /** AuthenticationConfig googleOidc. */
                            public googleOidc?: (google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOidcToken|null);

                            /** AuthenticationConfig oauthToken. */
                            public oauthToken?: (google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOAuthToken|null);

                            /** AuthenticationConfig authenticationMethodDescriptor. */
                            public authenticationMethodDescriptor?: ("googleOidc"|"oauthToken");

                            /**
                             * Creates a new AuthenticationConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AuthenticationConfig instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.Destination.IAuthenticationConfig): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig;

                            /**
                             * Encodes the specified AuthenticationConfig message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.verify|verify} messages.
                             * @param message AuthenticationConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.Destination.IAuthenticationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AuthenticationConfig message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.verify|verify} messages.
                             * @param message AuthenticationConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.Destination.IAuthenticationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AuthenticationConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AuthenticationConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig;

                            /**
                             * Decodes an AuthenticationConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AuthenticationConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig;

                            /**
                             * Verifies an AuthenticationConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AuthenticationConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AuthenticationConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig;

                            /**
                             * Creates a plain object from an AuthenticationConfig message. Also converts values to other types if specified.
                             * @param message AuthenticationConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AuthenticationConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AuthenticationConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace AuthenticationConfig {

                            /** Properties of an OidcToken. */
                            interface IOidcToken {

                                /** OidcToken serviceAccount */
                                serviceAccount?: (string|null);

                                /** OidcToken audience */
                                audience?: (string|null);
                            }

                            /** Represents an OidcToken. */
                            class OidcToken implements IOidcToken {

                                /**
                                 * Constructs a new OidcToken.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOidcToken);

                                /** OidcToken serviceAccount. */
                                public serviceAccount: string;

                                /** OidcToken audience. */
                                public audience: string;

                                /**
                                 * Creates a new OidcToken instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OidcToken instance
                                 */
                                public static create(properties?: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOidcToken): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken;

                                /**
                                 * Encodes the specified OidcToken message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken.verify|verify} messages.
                                 * @param message OidcToken message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified OidcToken message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken.verify|verify} messages.
                                 * @param message OidcToken message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an OidcToken message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OidcToken
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken;

                                /**
                                 * Decodes an OidcToken message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OidcToken
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken;

                                /**
                                 * Verifies an OidcToken message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an OidcToken message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OidcToken
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken;

                                /**
                                 * Creates a plain object from an OidcToken message. Also converts values to other types if specified.
                                 * @param message OidcToken
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OidcToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OidcToken to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for OidcToken
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a OAuthToken. */
                            interface IOAuthToken {

                                /** OAuthToken serviceAccount */
                                serviceAccount?: (string|null);

                                /** OAuthToken scope */
                                scope?: (string|null);
                            }

                            /** Represents a OAuthToken. */
                            class OAuthToken implements IOAuthToken {

                                /**
                                 * Constructs a new OAuthToken.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOAuthToken);

                                /** OAuthToken serviceAccount. */
                                public serviceAccount: string;

                                /** OAuthToken scope. */
                                public scope: string;

                                /**
                                 * Creates a new OAuthToken instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OAuthToken instance
                                 */
                                public static create(properties?: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOAuthToken): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken;

                                /**
                                 * Encodes the specified OAuthToken message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken.verify|verify} messages.
                                 * @param message OAuthToken message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified OAuthToken message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken.verify|verify} messages.
                                 * @param message OAuthToken message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a OAuthToken message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OAuthToken
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken;

                                /**
                                 * Decodes a OAuthToken message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OAuthToken
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken;

                                /**
                                 * Verifies a OAuthToken message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a OAuthToken message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OAuthToken
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken;

                                /**
                                 * Creates a plain object from a OAuthToken message. Also converts values to other types if specified.
                                 * @param message OAuthToken
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.eventarc.v1.Pipeline.Destination.AuthenticationConfig.OAuthToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OAuthToken to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for OAuthToken
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Properties of a Mediation. */
                    interface IMediation {

                        /** Mediation transformation */
                        transformation?: (google.cloud.eventarc.v1.Pipeline.Mediation.ITransformation|null);
                    }

                    /** Represents a Mediation. */
                    class Mediation implements IMediation {

                        /**
                         * Constructs a new Mediation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.eventarc.v1.Pipeline.IMediation);

                        /** Mediation transformation. */
                        public transformation?: (google.cloud.eventarc.v1.Pipeline.Mediation.ITransformation|null);

                        /** Mediation mediationDescriptor. */
                        public mediationDescriptor?: "transformation";

                        /**
                         * Creates a new Mediation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Mediation instance
                         */
                        public static create(properties?: google.cloud.eventarc.v1.Pipeline.IMediation): google.cloud.eventarc.v1.Pipeline.Mediation;

                        /**
                         * Encodes the specified Mediation message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Mediation.verify|verify} messages.
                         * @param message Mediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.eventarc.v1.Pipeline.IMediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Mediation message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Mediation.verify|verify} messages.
                         * @param message Mediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.IMediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Mediation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Mediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Mediation;

                        /**
                         * Decodes a Mediation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Mediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Mediation;

                        /**
                         * Verifies a Mediation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Mediation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Mediation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Mediation;

                        /**
                         * Creates a plain object from a Mediation message. Also converts values to other types if specified.
                         * @param message Mediation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.eventarc.v1.Pipeline.Mediation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Mediation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Mediation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Mediation {

                        /** Properties of a Transformation. */
                        interface ITransformation {

                            /** Transformation transformationTemplate */
                            transformationTemplate?: (string|null);
                        }

                        /** Represents a Transformation. */
                        class Transformation implements ITransformation {

                            /**
                             * Constructs a new Transformation.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.eventarc.v1.Pipeline.Mediation.ITransformation);

                            /** Transformation transformationTemplate. */
                            public transformationTemplate: string;

                            /**
                             * Creates a new Transformation instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Transformation instance
                             */
                            public static create(properties?: google.cloud.eventarc.v1.Pipeline.Mediation.ITransformation): google.cloud.eventarc.v1.Pipeline.Mediation.Transformation;

                            /**
                             * Encodes the specified Transformation message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Mediation.Transformation.verify|verify} messages.
                             * @param message Transformation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.eventarc.v1.Pipeline.Mediation.ITransformation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Transformation message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.Mediation.Transformation.verify|verify} messages.
                             * @param message Transformation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.Mediation.ITransformation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Transformation message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Transformation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.Mediation.Transformation;

                            /**
                             * Decodes a Transformation message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Transformation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.Mediation.Transformation;

                            /**
                             * Verifies a Transformation message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Transformation message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Transformation
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.Mediation.Transformation;

                            /**
                             * Creates a plain object from a Transformation message. Also converts values to other types if specified.
                             * @param message Transformation
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.eventarc.v1.Pipeline.Mediation.Transformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Transformation to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Transformation
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a RetryPolicy. */
                    interface IRetryPolicy {

                        /** RetryPolicy maxAttempts */
                        maxAttempts?: (number|null);

                        /** RetryPolicy minRetryDelay */
                        minRetryDelay?: (google.protobuf.IDuration|null);

                        /** RetryPolicy maxRetryDelay */
                        maxRetryDelay?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a RetryPolicy. */
                    class RetryPolicy implements IRetryPolicy {

                        /**
                         * Constructs a new RetryPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.eventarc.v1.Pipeline.IRetryPolicy);

                        /** RetryPolicy maxAttempts. */
                        public maxAttempts: number;

                        /** RetryPolicy minRetryDelay. */
                        public minRetryDelay?: (google.protobuf.IDuration|null);

                        /** RetryPolicy maxRetryDelay. */
                        public maxRetryDelay?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new RetryPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RetryPolicy instance
                         */
                        public static create(properties?: google.cloud.eventarc.v1.Pipeline.IRetryPolicy): google.cloud.eventarc.v1.Pipeline.RetryPolicy;

                        /**
                         * Encodes the specified RetryPolicy message. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.RetryPolicy.verify|verify} messages.
                         * @param message RetryPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.eventarc.v1.Pipeline.IRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RetryPolicy message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pipeline.RetryPolicy.verify|verify} messages.
                         * @param message RetryPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.eventarc.v1.Pipeline.IRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RetryPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RetryPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pipeline.RetryPolicy;

                        /**
                         * Decodes a RetryPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RetryPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pipeline.RetryPolicy;

                        /**
                         * Verifies a RetryPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RetryPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RetryPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pipeline.RetryPolicy;

                        /**
                         * Creates a plain object from a RetryPolicy message. Also converts values to other types if specified.
                         * @param message RetryPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.eventarc.v1.Pipeline.RetryPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RetryPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RetryPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Trigger. */
                interface ITrigger {

                    /** Trigger name */
                    name?: (string|null);

                    /** Trigger uid */
                    uid?: (string|null);

                    /** Trigger createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Trigger updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Trigger eventFilters */
                    eventFilters?: (google.cloud.eventarc.v1.IEventFilter[]|null);

                    /** Trigger serviceAccount */
                    serviceAccount?: (string|null);

                    /** Trigger destination */
                    destination?: (google.cloud.eventarc.v1.IDestination|null);

                    /** Trigger transport */
                    transport?: (google.cloud.eventarc.v1.ITransport|null);

                    /** Trigger labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Trigger channel */
                    channel?: (string|null);

                    /** Trigger conditions */
                    conditions?: ({ [k: string]: google.cloud.eventarc.v1.IStateCondition }|null);

                    /** Trigger eventDataContentType */
                    eventDataContentType?: (string|null);

                    /** Trigger satisfiesPzs */
                    satisfiesPzs?: (boolean|null);

                    /** Trigger etag */
                    etag?: (string|null);
                }

                /** Represents a Trigger. */
                class Trigger implements ITrigger {

                    /**
                     * Constructs a new Trigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ITrigger);

                    /** Trigger name. */
                    public name: string;

                    /** Trigger uid. */
                    public uid: string;

                    /** Trigger createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Trigger updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Trigger eventFilters. */
                    public eventFilters: google.cloud.eventarc.v1.IEventFilter[];

                    /** Trigger serviceAccount. */
                    public serviceAccount: string;

                    /** Trigger destination. */
                    public destination?: (google.cloud.eventarc.v1.IDestination|null);

                    /** Trigger transport. */
                    public transport?: (google.cloud.eventarc.v1.ITransport|null);

                    /** Trigger labels. */
                    public labels: { [k: string]: string };

                    /** Trigger channel. */
                    public channel: string;

                    /** Trigger conditions. */
                    public conditions: { [k: string]: google.cloud.eventarc.v1.IStateCondition };

                    /** Trigger eventDataContentType. */
                    public eventDataContentType: string;

                    /** Trigger satisfiesPzs. */
                    public satisfiesPzs: boolean;

                    /** Trigger etag. */
                    public etag: string;

                    /**
                     * Creates a new Trigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Trigger instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ITrigger): google.cloud.eventarc.v1.Trigger;

                    /**
                     * Encodes the specified Trigger message. Does not implicitly {@link google.cloud.eventarc.v1.Trigger.verify|verify} messages.
                     * @param message Trigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ITrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Trigger message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Trigger.verify|verify} messages.
                     * @param message Trigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ITrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Trigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Trigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Trigger;

                    /**
                     * Decodes a Trigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Trigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Trigger;

                    /**
                     * Verifies a Trigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Trigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Trigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Trigger;

                    /**
                     * Creates a plain object from a Trigger message. Also converts values to other types if specified.
                     * @param message Trigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Trigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Trigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Trigger
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EventFilter. */
                interface IEventFilter {

                    /** EventFilter attribute */
                    attribute?: (string|null);

                    /** EventFilter value */
                    value?: (string|null);

                    /** EventFilter operator */
                    operator?: (string|null);
                }

                /** Represents an EventFilter. */
                class EventFilter implements IEventFilter {

                    /**
                     * Constructs a new EventFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IEventFilter);

                    /** EventFilter attribute. */
                    public attribute: string;

                    /** EventFilter value. */
                    public value: string;

                    /** EventFilter operator. */
                    public operator: string;

                    /**
                     * Creates a new EventFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventFilter instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IEventFilter): google.cloud.eventarc.v1.EventFilter;

                    /**
                     * Encodes the specified EventFilter message. Does not implicitly {@link google.cloud.eventarc.v1.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventFilter message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.EventFilter;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.EventFilter;

                    /**
                     * Verifies an EventFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.EventFilter;

                    /**
                     * Creates a plain object from an EventFilter message. Also converts values to other types if specified.
                     * @param message EventFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.EventFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EventFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StateCondition. */
                interface IStateCondition {

                    /** StateCondition code */
                    code?: (google.rpc.Code|keyof typeof google.rpc.Code|null);

                    /** StateCondition message */
                    message?: (string|null);
                }

                /** Represents a StateCondition. */
                class StateCondition implements IStateCondition {

                    /**
                     * Constructs a new StateCondition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IStateCondition);

                    /** StateCondition code. */
                    public code: (google.rpc.Code|keyof typeof google.rpc.Code);

                    /** StateCondition message. */
                    public message: string;

                    /**
                     * Creates a new StateCondition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StateCondition instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IStateCondition): google.cloud.eventarc.v1.StateCondition;

                    /**
                     * Encodes the specified StateCondition message. Does not implicitly {@link google.cloud.eventarc.v1.StateCondition.verify|verify} messages.
                     * @param message StateCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IStateCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StateCondition message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.StateCondition.verify|verify} messages.
                     * @param message StateCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IStateCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StateCondition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StateCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.StateCondition;

                    /**
                     * Decodes a StateCondition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StateCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.StateCondition;

                    /**
                     * Verifies a StateCondition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StateCondition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StateCondition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.StateCondition;

                    /**
                     * Creates a plain object from a StateCondition message. Also converts values to other types if specified.
                     * @param message StateCondition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.StateCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StateCondition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StateCondition
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Destination. */
                interface IDestination {

                    /** Destination cloudRun */
                    cloudRun?: (google.cloud.eventarc.v1.ICloudRun|null);

                    /** Destination cloudFunction */
                    cloudFunction?: (string|null);

                    /** Destination gke */
                    gke?: (google.cloud.eventarc.v1.IGKE|null);

                    /** Destination workflow */
                    workflow?: (string|null);

                    /** Destination httpEndpoint */
                    httpEndpoint?: (google.cloud.eventarc.v1.IHttpEndpoint|null);

                    /** Destination networkConfig */
                    networkConfig?: (google.cloud.eventarc.v1.INetworkConfig|null);
                }

                /** Represents a Destination. */
                class Destination implements IDestination {

                    /**
                     * Constructs a new Destination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IDestination);

                    /** Destination cloudRun. */
                    public cloudRun?: (google.cloud.eventarc.v1.ICloudRun|null);

                    /** Destination cloudFunction. */
                    public cloudFunction?: (string|null);

                    /** Destination gke. */
                    public gke?: (google.cloud.eventarc.v1.IGKE|null);

                    /** Destination workflow. */
                    public workflow?: (string|null);

                    /** Destination httpEndpoint. */
                    public httpEndpoint?: (google.cloud.eventarc.v1.IHttpEndpoint|null);

                    /** Destination networkConfig. */
                    public networkConfig?: (google.cloud.eventarc.v1.INetworkConfig|null);

                    /** Destination descriptor. */
                    public descriptor?: ("cloudRun"|"cloudFunction"|"gke"|"workflow"|"httpEndpoint");

                    /**
                     * Creates a new Destination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Destination instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IDestination): google.cloud.eventarc.v1.Destination;

                    /**
                     * Encodes the specified Destination message. Does not implicitly {@link google.cloud.eventarc.v1.Destination.verify|verify} messages.
                     * @param message Destination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Destination.verify|verify} messages.
                     * @param message Destination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Destination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Destination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Destination;

                    /**
                     * Decodes a Destination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Destination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Destination;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Destination;

                    /**
                     * Creates a plain object from a Destination message. Also converts values to other types if specified.
                     * @param message Destination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Transport. */
                interface ITransport {

                    /** Transport pubsub */
                    pubsub?: (google.cloud.eventarc.v1.IPubsub|null);
                }

                /** Represents a Transport. */
                class Transport implements ITransport {

                    /**
                     * Constructs a new Transport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ITransport);

                    /** Transport pubsub. */
                    public pubsub?: (google.cloud.eventarc.v1.IPubsub|null);

                    /** Transport intermediary. */
                    public intermediary?: "pubsub";

                    /**
                     * Creates a new Transport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Transport instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ITransport): google.cloud.eventarc.v1.Transport;

                    /**
                     * Encodes the specified Transport message. Does not implicitly {@link google.cloud.eventarc.v1.Transport.verify|verify} messages.
                     * @param message Transport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ITransport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Transport message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Transport.verify|verify} messages.
                     * @param message Transport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ITransport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Transport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Transport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Transport;

                    /**
                     * Decodes a Transport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Transport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Transport;

                    /**
                     * Verifies a Transport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Transport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Transport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Transport;

                    /**
                     * Creates a plain object from a Transport message. Also converts values to other types if specified.
                     * @param message Transport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Transport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Transport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Transport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudRun. */
                interface ICloudRun {

                    /** CloudRun service */
                    service?: (string|null);

                    /** CloudRun path */
                    path?: (string|null);

                    /** CloudRun region */
                    region?: (string|null);
                }

                /** Represents a CloudRun. */
                class CloudRun implements ICloudRun {

                    /**
                     * Constructs a new CloudRun.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.ICloudRun);

                    /** CloudRun service. */
                    public service: string;

                    /** CloudRun path. */
                    public path: string;

                    /** CloudRun region. */
                    public region: string;

                    /**
                     * Creates a new CloudRun instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudRun instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.ICloudRun): google.cloud.eventarc.v1.CloudRun;

                    /**
                     * Encodes the specified CloudRun message. Does not implicitly {@link google.cloud.eventarc.v1.CloudRun.verify|verify} messages.
                     * @param message CloudRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.ICloudRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudRun message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.CloudRun.verify|verify} messages.
                     * @param message CloudRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.ICloudRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudRun message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.CloudRun;

                    /**
                     * Decodes a CloudRun message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.CloudRun;

                    /**
                     * Verifies a CloudRun message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudRun message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudRun
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.CloudRun;

                    /**
                     * Creates a plain object from a CloudRun message. Also converts values to other types if specified.
                     * @param message CloudRun
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.CloudRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudRun to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudRun
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GKE. */
                interface IGKE {

                    /** GKE cluster */
                    cluster?: (string|null);

                    /** GKE location */
                    location?: (string|null);

                    /** GKE namespace */
                    namespace?: (string|null);

                    /** GKE service */
                    service?: (string|null);

                    /** GKE path */
                    path?: (string|null);
                }

                /** Represents a GKE. */
                class GKE implements IGKE {

                    /**
                     * Constructs a new GKE.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IGKE);

                    /** GKE cluster. */
                    public cluster: string;

                    /** GKE location. */
                    public location: string;

                    /** GKE namespace. */
                    public namespace: string;

                    /** GKE service. */
                    public service: string;

                    /** GKE path. */
                    public path: string;

                    /**
                     * Creates a new GKE instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GKE instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IGKE): google.cloud.eventarc.v1.GKE;

                    /**
                     * Encodes the specified GKE message. Does not implicitly {@link google.cloud.eventarc.v1.GKE.verify|verify} messages.
                     * @param message GKE message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IGKE, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GKE message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.GKE.verify|verify} messages.
                     * @param message GKE message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IGKE, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GKE message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GKE
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.GKE;

                    /**
                     * Decodes a GKE message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GKE
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.GKE;

                    /**
                     * Verifies a GKE message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GKE message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GKE
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.GKE;

                    /**
                     * Creates a plain object from a GKE message. Also converts values to other types if specified.
                     * @param message GKE
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.GKE, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GKE to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GKE
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Pubsub. */
                interface IPubsub {

                    /** Pubsub topic */
                    topic?: (string|null);

                    /** Pubsub subscription */
                    subscription?: (string|null);
                }

                /** Represents a Pubsub. */
                class Pubsub implements IPubsub {

                    /**
                     * Constructs a new Pubsub.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IPubsub);

                    /** Pubsub topic. */
                    public topic: string;

                    /** Pubsub subscription. */
                    public subscription: string;

                    /**
                     * Creates a new Pubsub instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Pubsub instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IPubsub): google.cloud.eventarc.v1.Pubsub;

                    /**
                     * Encodes the specified Pubsub message. Does not implicitly {@link google.cloud.eventarc.v1.Pubsub.verify|verify} messages.
                     * @param message Pubsub message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IPubsub, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Pubsub message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.Pubsub.verify|verify} messages.
                     * @param message Pubsub message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IPubsub, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Pubsub message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Pubsub
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.Pubsub;

                    /**
                     * Decodes a Pubsub message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Pubsub
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.Pubsub;

                    /**
                     * Verifies a Pubsub message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Pubsub message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Pubsub
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.Pubsub;

                    /**
                     * Creates a plain object from a Pubsub message. Also converts values to other types if specified.
                     * @param message Pubsub
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.Pubsub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Pubsub to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Pubsub
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HttpEndpoint. */
                interface IHttpEndpoint {

                    /** HttpEndpoint uri */
                    uri?: (string|null);
                }

                /** Represents a HttpEndpoint. */
                class HttpEndpoint implements IHttpEndpoint {

                    /**
                     * Constructs a new HttpEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.IHttpEndpoint);

                    /** HttpEndpoint uri. */
                    public uri: string;

                    /**
                     * Creates a new HttpEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpEndpoint instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.IHttpEndpoint): google.cloud.eventarc.v1.HttpEndpoint;

                    /**
                     * Encodes the specified HttpEndpoint message. Does not implicitly {@link google.cloud.eventarc.v1.HttpEndpoint.verify|verify} messages.
                     * @param message HttpEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.IHttpEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpEndpoint message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.HttpEndpoint.verify|verify} messages.
                     * @param message HttpEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.IHttpEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.HttpEndpoint;

                    /**
                     * Decodes a HttpEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.HttpEndpoint;

                    /**
                     * Verifies a HttpEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.HttpEndpoint;

                    /**
                     * Creates a plain object from a HttpEndpoint message. Also converts values to other types if specified.
                     * @param message HttpEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.HttpEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HttpEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig networkAttachment */
                    networkAttachment?: (string|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.eventarc.v1.INetworkConfig);

                    /** NetworkConfig networkAttachment. */
                    public networkAttachment: string;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.eventarc.v1.INetworkConfig): google.cloud.eventarc.v1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.eventarc.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.eventarc.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.eventarc.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.eventarc.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.eventarc.v1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.eventarc.v1.NetworkConfig;

                    /**
                     * Verifies a NetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.eventarc.v1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.eventarc.v1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkConfig
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

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);
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

    /** Namespace rpc. */
    namespace rpc {

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
        }

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
}
